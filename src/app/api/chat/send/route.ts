import { NextRequest, NextResponse } from 'next/server'
import gemini, { DISEASE_PREDICTION_PROMPT } from '@/lib/openai'
import { mongo } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, userId } = body

    // Input validation
    if (!message || !userId) {
      return NextResponse.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      )
    }

    if (typeof message !== 'string' || typeof userId !== 'string') {
      return NextResponse.json(
        { error: 'Message and userId must be strings' },
        { status: 400 }
      )
    }

    if (message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      )
    }

    // Save user message
    await mongo.chatMessage.create({
      data: {
        userId,
        content: message.trim(),
        type: 'user',
        timestamp: new Date()
      }
    })

    // Get recent chat history for context
    const recentMessages = await mongo.chatMessage.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: 10
    })

    const medicalHistory = await mongo.medicalProblem.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 10
    })

    // Format medical history for AI with safety checks
    const historyText = medicalHistory
      .filter(problem => problem.title && problem.description && Array.isArray(problem.symptoms))
      .map(problem =>
        `${problem.title}: ${problem.description} (Symptoms: ${problem.symptoms.join(', ')})`
      )
      .join('\n') || 'No previous medical history available'

    const sanitizedInput = message.trim()
    // Build conversation history for Gemini
    const systemPrompt = DISEASE_PREDICTION_PROMPT
      .replace('{currentInput}', sanitizedInput)
      .replace('{medicalHistory}', historyText)

    // Format chat history for Gemini - exclude current message
    const chatHistory = recentMessages
      .reverse()
      .slice(0, -1)
      .map(msg => ({
        role: msg.type === 'user' ? 'user' : 'model', 
        parts: [{ text: msg.content }] 
      }))

    // Get AI response using Gemini
    let aiResponse: string
    try {
      if (chatHistory.length > 0) {
        // Start chat with history
        const chat = gemini.startChat({
          // history: chatHistory,
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7
          }
        })
        const prompt = `${systemPrompt}\n\nUser: ${message.trim()}`
        const result = await chat.sendMessage(prompt);
        aiResponse = result.response.text()
      } else {
        // Use direct generation for first message
        const prompt = `${systemPrompt}\n\nUser: ${message.trim()}`
        const result = await gemini.generateContent(prompt)
        aiResponse = result.response.text()
      }
    } catch (geminiError) {
      console.error('Gemini API Error:', geminiError)
      throw new Error('AI service temporarily unavailable')
    }

    // Fallback if no response
    if (!aiResponse || aiResponse.trim().length === 0) {
      aiResponse = "I'm sorry, I couldn't generate a response. Please try again."
    }

    // Save AI response
    const savedMessage = await mongo.chatMessage.create({
      data: {
        userId,
        content: aiResponse,
        type: 'assistant',
        timestamp: new Date()
      }
    })

    return NextResponse.json({
      success: true,
      message: {
        id: savedMessage.id,
        content: aiResponse,
        type: 'assistant',
        timestamp: savedMessage.timestamp
      }
    })

  } catch (error) {
    console.error('Error in chat API:', error)

    // More specific error handling
    if (error instanceof Error) {
      // Handle Gemini specific errors
      if (error.message.includes('Gemini') || error.message.includes('AI service')) {
        return NextResponse.json(
          { error: 'AI service temporarily unavailable' },
          { status: 503 }
        )
      }

      // Handle database errors
      if (error.message.includes('Prisma') || error.message.includes('database')) {
        return NextResponse.json(
          { error: 'Database service temporarily unavailable' },
          { status: 503 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}