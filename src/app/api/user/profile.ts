import { NextApiRequest, NextApiResponse } from 'next'
import { postgres } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Valid userId is required' })
  }

  try {
    if (req.method === 'GET') {
      const user = await postgres.user.findUnique({
        where: { id: userId }
      })

      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }

      res.status(200).json({ success: true, user })

    } else if (req.method === 'PUT') {
      const { name, age, gender, phone, address } = req.body

      const updatedUser = await postgres.user.update({
        where: { id: userId },
        data: {
          name,
          updatedAt: new Date()
        }
      })

      res.status(200).json({ success: true, user: updatedUser })

    } else {
      res.status(405).json({ error: 'Method not allowed' })
    }

  } catch (error) {
    console.error('Error in user profile API:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}