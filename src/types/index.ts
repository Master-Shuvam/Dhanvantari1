export interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  messageCount: number;
}

// types/index.ts

export type Message = {
    type: 'user' | 'assistant';
    content: any;
    timestamp: Date;
};

export type Hospital = {
    id: string;
    name: string;
    specialty: string;
    distance: string;
    rating: number;
    reviews: number;
    address: string;
    phone: string;
    hours: string;
    emergency: boolean;
    coordinates: { lat: number; lng: number };
    features: string[];
    waitTime: string;
    image?: string;
};

export type FilterType = 'all' | 'emergency' | 'nearby' | 'rated';