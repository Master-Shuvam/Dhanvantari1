// import { GoogleGenerativeAI } from '@google/generative-ai'

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

// // Get the Gemini model
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

// export default model

// export const DISEASE_PREDICTION_PROMPT = `
// You are a medical AI assistant. Based on the user's current symptoms which is {currentInput} and their medical history which is {medicalHistory}, predict the 3 most likely diseases. You have to strictly follow the output format.

// output format:
// ["disease name 1" (acuuracy in percentage) , "disease name 2" (acuuracy in percentage) , "disease name 3" (acuuracy in percentage)]
// `;

// // Usage example:
// // const result = await model.generateContent(`${DISEASE_PREDICTION_PROMPT.replace('{currentInput}', symptoms).replace('{medicalHistory}', history)}`)
// // const response = result.response.text()


import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

// Get the Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

export default model

export const DISEASE_PREDICTION_PROMPT = `
You are a medical AI assistant. Based on the user's current symptoms/input: "{currentInput}" and their medical history: "{medicalHistory}", predict the 3 most likely diseases or conditions.

Please respond with EXACTLY this format (no additional text, explanations, or formatting):
"Disease Name 1" (85%)
"Disease Name 2" (70%)
"Disease Name 3" (45%)

Guidelines:
- Provide realistic probability percentages based on the symptoms
- Use proper medical terminology for disease names
- Consider the medical history when making predictions
- If symptoms are vague, provide general conditions
- Percentages should be realistic (not all high or all low)

Current symptoms/input: {currentInput}
Medical history: {medicalHistory}

Respond only with the 3 disease predictions in the exact format shown above.
`