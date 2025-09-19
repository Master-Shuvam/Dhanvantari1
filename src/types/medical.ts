// Core medical history structure
export interface MedicalHistory {
  id: string;              // MongoDB ObjectId as string
  userId: string;          // Foreign key (from Postgres User)
//   age?: string;
  diseases: string[];
  allergies: string[];
  meds: string[];
  extraInfo?: Record<string, any>; // flexible JSON
  createdAt: Date;
  updatedAt: Date;
}

// Payload for creating a new history record
export interface CreateMedicalHistoryDto {
  userId: string;
//   age?: string;  
  diseases?: string[];
  allergies?: string[];
  meds?: string[];
  extraInfo?: Record<string, any>;
}

// API response wrapper (generic)
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}


export interface User {
  id: string
  email: string
  name?: string
  age?: number
  gender?: string
  phone?: string
  address?: string
}

export interface MedicalProblem {
  id: string
  userId: string
  title: string
  description: string
  symptoms: string[]
  diagnosis?: string
  severity?: string
  date: Date
  resolved: boolean
}

export interface ChatMessage {
  id: string
  userId: string
  content: string
  type: 'user' | 'assistant'
  timestamp: Date
}

export interface DiseasePrediction {
  disease: string
  probability: number
}

export interface PredictionResponse {
  predictions: DiseasePrediction[]
  inputText: string
}
