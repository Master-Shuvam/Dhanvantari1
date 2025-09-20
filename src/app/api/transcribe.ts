import { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm } from 'formidable'
import fs from 'fs'
import openai from '@/lib/openai'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const form = new IncomingForm()

        form.parse(req, async (err: any, fields: any, files: any) => {
            if (err) {
                return res.status(400).json({ error: 'Error parsing form data' })
            }

            const file = Array.isArray(files.file) ? files.file[0] : files.file

            if (!file) {
                return res.status(400).json({ error: 'No audio file provided' })
            }

            try {
                // const transcription = await openai.audio.transcriptions.create({
                //     file: fs.createReadStream(file.filepath),
                //     model: 'whisper-1',
                //     language: 'en',
                // })

                res.status(200).json({
                    success: true,
                    // text: transcription.text
                })

            } catch (transcriptionError) {
                console.error('Transcription error:', transcriptionError)
                res.status(500).json({ error: 'Failed to transcribe audio' })
            }
        })

    } catch (error) {
        console.error('Error in transcribe API:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}