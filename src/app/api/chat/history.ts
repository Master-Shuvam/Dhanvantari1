import { NextApiRequest, NextApiResponse } from 'next'
import { mongo } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, limit = '50' } = req.query

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Valid userId is required' })
  }

  try {
    const messages = await mongo.chatMessage.findMany({
      where: { userId },
      orderBy: { timestamp: 'asc' },
      take: parseInt(limit as string)
    })

    res.status(200).json({
      success: true,
      messages: messages.map(msg => ({
        id: msg.id,
        content: msg.content,
        type: msg.type,
        timestamp: msg.timestamp
      }))
    })

  } catch (error) {
    console.error('Error fetching chat history:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}