"use client";
// components/HospitalCard.tsx
import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon, 
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { Hospital } from '@/types';

interface HospitalCardProps {
    hospital: Hospital;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{hospital.name}</h3>
                        {hospital.emergency && (
                            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                                24/7
                            </span>
                        )}
                    </div>
                    <p className="text-teal-600 text-xs font-medium mb-1">{hospital.specialty}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                            <MapPinIcon className="w-3 h-3" />
                            <span>{hospital.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <ClockIcon className="w-3 h-3" />
                            <span>{hospital.waitTime}</span>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-1 hover:bg-gray-50 rounded"
                >
                    {isFavorite ? (
                        <HeartSolid className="w-4 h-4 text-red-500" />
                    ) : (
                        <HeartIcon className="w-4 h-4 text-gray-400" />
                    )}
                </button>
            </div>

            <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon 
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(hospital.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                    ))}
                </div>
                <span className="text-xs font-medium text-gray-900">{hospital.rating}</span>
                <span className="text-xs text-gray-500">({hospital.reviews})</span>
            </div>

            <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-2">
                    <MapPinIcon className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{hospital.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">{hospital.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <ClockIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">{hospital.hours}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
                {hospital.features.slice(0, 3).map((feature, index) => (
                    <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                        {feature}
                    </span>
                ))}
                {hospital.features.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{hospital.features.length - 3} more
                    </span>
                )}
            </div>

            <div className="flex space-x-2">
                <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                    View Details
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1">
                    <MapPinIcon className="w-3 h-3" />
                    <span>Directions</span>
                </button>
            </div>
        </div>
    );
}