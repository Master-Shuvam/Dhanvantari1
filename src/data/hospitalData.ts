// data/hospitalData.ts
import { Hospital } from '../types';

export const sampleHospitals: Hospital[] = [
    {
        id: '1',
        name: 'City General Hospital',
        specialty: 'Emergency Care',
        distance: '0.8 km',
        rating: 4.5,
        reviews: 342,
        address: '123 Medical Center Dr, Downtown',
        phone: '+1 (555) 123-4567',
        hours: '24/7',
        emergency: true,
        coordinates: { lat: 40.7128, lng: -74.0060 },
        features: ['Emergency Room', 'ICU', 'Cardiology', 'Trauma Center'],
        waitTime: '15 mins'
    },
    {
        id: '2',
        name: 'St. Mary\'s Medical Center',
        specialty: 'Cardiology',
        distance: '1.2 km',
        rating: 4.8,
        reviews: 528,
        address: '456 Healthcare Ave, Midtown',
        phone: '+1 (555) 987-6543',
        hours: '6:00 AM - 10:00 PM',
        emergency: false,
        coordinates: { lat: 40.7589, lng: -73.9851 },
        features: ['Cardiology', 'Surgery', 'Radiology', 'Pharmacy'],
        waitTime: '25 mins'
    },
    {
        id: '3',
        name: 'Metro Emergency Clinic',
        specialty: 'Urgent Care',
        distance: '2.1 km',
        rating: 4.2,
        reviews: 156,
        address: '789 Quick Care Blvd, Uptown',
        phone: '+1 (555) 456-7890',
        hours: '8:00 AM - 8:00 PM',
        emergency: true,
        coordinates: { lat: 40.7831, lng: -73.9712 },
        features: ['Urgent Care', 'X-Ray', 'Lab Services', 'Minor Surgery'],
        waitTime: '10 mins'
    }
];