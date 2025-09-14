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
