import { NextRequest, NextResponse } from 'next/server'
import { mongo, postgres } from '@/lib/prisma'
import gemini, { DISEASE_PREDICTION_PROMPT } from '@/lib/openai'
import { DiseasePrediction } from "@/types/medical"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, symptoms, currentInput } = body

    // Input validation
    if (!userId || !currentInput) {
      return NextResponse.json(
        { error: 'userId and currentInput are required' },
        { status: 400 }
      )
    }

    if (typeof userId !== 'string' || typeof currentInput !== 'string') {
      return NextResponse.json(
        { error: 'userId and currentInput must be strings' },
        { status: 400 }
      )
    }

    if (currentInput.trim().length === 0) {
      return NextResponse.json(
        { error: 'currentInput cannot be empty' },
        { status: 400 }
      )
    }

    // Validate symptoms if provided
    if (symptoms && !Array.isArray(symptoms)) {
      return NextResponse.json(
        { error: 'symptoms must be an array' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedInput = currentInput.trim()
    //@ts-ignore
    const sanitizedSymptoms = symptoms ? symptoms.filter(s => typeof s === 'string' && s.trim().length > 0) : []

    // Get user's medical history from MongoDB
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

    // Validate prompt template exists
    if (!DISEASE_PREDICTION_PROMPT) {
      throw new Error('Disease prediction prompt template not configured')
    }

    // Create prediction prompt
    const prompt = DISEASE_PREDICTION_PROMPT
      .replace('{currentInput}', sanitizedInput)
      .replace('{medicalHistory}', historyText)

    // Get AI prediction with error handling using Gemini
    let response: string
    try {
      const result = await gemini.generateContent([
        {
          text: `\n\n${prompt}`
        },
      ]);
      
      response = result.response.text()
    } catch (geminiError) {
      console.error('Gemini API Error:', geminiError)
      throw new Error('AI service temporarily unavailable')
    }

    if (!response) {
      throw new Error('No response from Gemini')
    }

    // Parse the response - expecting format: ["disease 1" (percentage), "disease 2" (percentage), "disease 3" (percentage)]
    let predictions: DiseasePrediction[] = []
    
    try {
      // Clean the response
      let cleanedResponse = response.trim()
      
      // Extract predictions using regex to handle the specific format
      const regex = /"([^"]+)"\s*\((\d+)%?\)/g
      let match
      
      while ((match = regex.exec(cleanedResponse)) !== null && predictions.length < 3) {
        const disease = match[1].trim()
        const percentage = parseInt(match[2])
        
        if (disease && !isNaN(percentage) && percentage >= 0 && percentage <= 100) {
          predictions.push({
            disease: disease,
            probability: percentage / 100 // Convert percentage to decimal
          })
        }
      }
      
      // If regex parsing fails, try to parse as array
      if (predictions.length === 0) {
        // Try to extract just the diseases if format is different
        const lines = cleanedResponse.split('\n').filter(line => line.trim())
        for (const line of lines) {
          if (predictions.length >= 3) break
          
          const diseaseMatch = line.match(/([^(]+)\s*\((\d+)%?\)/)
          if (diseaseMatch) {
            const disease = diseaseMatch[1].trim().replace(/^["']|["']$/g, '') // Remove quotes
            const percentage = parseInt(diseaseMatch[2])
            
            if (disease && !isNaN(percentage) && percentage >= 0 && percentage <= 100) {
              predictions.push({
                disease: disease,
                probability: percentage / 100
              })
            }
          }
        }
      }
      
    } catch (parseError) {
      console.error('Error parsing AI response:', response)
      console.error('Parse error:', parseError)
    }

    // If no predictions were extracted, create fallback
    if (predictions.length === 0) {
      console.warn('No predictions extracted from response:', response)
      predictions = [
        { disease: "Unable to predict", probability: 0 }
      ]
    }

    // Ensure exactly 3 predictions (pad with lower probability if needed)
    while (predictions.length < 3) {
      predictions.push({
        disease: "Further evaluation needed",
        probability: 0
      })
    }

    // Save prediction to database with error handling
    let savedPrediction
    try {
      savedPrediction = await mongo.diseasePrediction.create({
        data: {
          userId,
          symptoms: sanitizedSymptoms,
          predictions: JSON.stringify(predictions),
          inputText: sanitizedInput,
          createdAt: new Date()
        }
      })
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Still return predictions even if saving fails
      console.warn('Failed to save prediction to database, but returning results')
    }

    // Format response with predictions included
    const formattedPredictions = predictions.map(p => ({
      disease: p.disease,
      probability: Math.round(p.probability * 100) / 100, // Round to 2 decimal places
    }))

    return NextResponse.json({
      success: true,
      predictions: formattedPredictions, // Include predictions in response
      disclaimer: "This is for informational purposes only. Please consult a healthcare professional for proper medical diagnosis and treatment.",
      ...(savedPrediction && { predictionId: savedPrediction.id })
    })

  } catch (error) {
    console.error('Error in disease prediction:', error)
    
    // More specific error responses
    let errorMessage = 'Failed to predict diseases'
    let statusCode = 500

    if (error instanceof Error) {
      if (error.message.includes('AI service') || error.message.includes('Gemini')) {
        statusCode = 503
        errorMessage = 'AI service temporarily unavailable'
      } else if (error.message.includes('Database') || error.message.includes('Prisma')) {
        statusCode = 503
        errorMessage = 'Database service temporarily unavailable'
      } else if (error.message.includes('Invalid') || error.message.includes('format')) {
        statusCode = 422
        errorMessage = 'Unable to process the medical information'
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: statusCode }
    )
  }
}