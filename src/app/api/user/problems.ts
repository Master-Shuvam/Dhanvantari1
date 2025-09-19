import { NextApiRequest, NextApiResponse } from 'next'
import { mongo } from '@/lib/prisma'

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
      const problems = await mongo.medicalProblem.findMany({
        where: { userId },
        orderBy: { date: 'desc' }
      })

      res.status(200).json({ success: true, problems })

    } else if (req.method === 'POST') {
      const { title, description, symptoms, severity } = req.body

      const problem = await mongo.medicalProblem.create({
        data: {
          userId,
          title,
          description,
          symptoms: symptoms || [],
          severity,
          date: new Date(),
          resolved: false
        }
      })

      res.status(201).json({ success: true, problem })

    } else {
      res.status(405).json({ error: 'Method not allowed' })
    }

  } catch (error) {
    console.error('Error in problems API:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}