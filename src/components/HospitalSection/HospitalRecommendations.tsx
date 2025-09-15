"use client";
// components/HospitalRecommendations.tsx
import { useState } from 'react';
import { 
  MapPinIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { Hospital, FilterType } from '@/types';
import { sampleHospitals } from '@/data/hospitalData';
import HospitalCard from './HospitalCard';
import HospitalFilter from './HospitalFilter';

export default function HospitalRecommendations() {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
    const [hospitals] = useState<Hospital[]>(sampleHospitals);

    const filteredHospitals = hospitals.filter(hospital => {
        switch (selectedFilter) {
            case 'emergency':
                return hospital.emergency;
            case 'nearby':
                return parseFloat(hospital.distance) < 2;
            case 'rated':
                return hospital.rating >= 4.5;
            default:
                return true;
        }
    });

    const handleFilterChange = (filter: FilterType) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Hospital Recommendations</h2>
                        <p className="text-sm text-gray-600">AI-powered suggestions based on your needs</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                        <UserGroupIcon className="w-4 h-4" />
                        <span className="text-xs font-medium">{filteredHospitals.length} found</span>
                    </div>
                </div>

                {/* Filters */}
                <HospitalFilter 
                    selectedFilter={selectedFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>

            {/* Hospital List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {filteredHospitals.length > 0 ? (
                    filteredHospitals.map((hospital) => (
                        <HospitalCard key={hospital.id} hospital={hospital} />
                    ))
                ) : (
                    <div className="text-center py-8">
                        <BuildingOffice2Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No hospitals found matching your criteria</p>
                    </div>
                )}
            </div>

            {/* Map View Toggle */}
            <div className="bg-white border-t border-gray-200 p-4">
                <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span>View on Map</span>
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}