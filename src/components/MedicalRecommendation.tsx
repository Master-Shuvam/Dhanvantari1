import React, { useState, useMemo } from 'react';
import { useAtom } from 'jotai';
import { atom } from 'jotai';
import {
    MapPinIcon,
    PhoneIcon,
    ClockIcon,
    StarIcon,
    HeartIcon,
    BuildingOffice2Icon,
    MagnifyingGlassIcon,
    UserIcon,
    AcademicCapIcon,
    CurrencyRupeeIcon,
    CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

// Jotai atom
const modelSelected = atom("General");

// Types
interface Doctor {
    id: string;
    name: string;
    degree: string;
    dpScore?: number;
    npvValue?: string;
    location: string;
    city: string;
    consultFee: string | number;
    yearsOfExperience: number;
    speciality: string;
    phoneNumber: string;
    rating?: number;
    reviews?: number;
    availability?: string;
    specialtyMatch?: boolean;
}

interface Hospital {
    id: string;
    name: string;
    category: string;
    careType: string;
    systemOfMedicine: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    telephone: string;
    mobile: string;
    emergency: string;
    email: string;
    website: string;
    specialties: string;
    latitude: string;
    longitude: string;
    facilities: string;
    beds: string;
    rating: number;
    reviews: number;
    distance: string;
    waitTime: string;
    hours: string;
    features: string[];
    specialtyMatch?: boolean;
}

type FilterType = 'all' | 'emergency' | 'nearby' | 'rated' | 'experience' | 'affordable';
type ViewType = 'doctors' | 'hospitals';

// Model to specialty mapping
const modelSpecialtyMapping: Record<string, string[]> = {
    "Mental-Care": ["psychiatry", "psychology", "mental health", "behavioral health"],
    "Dermatology": ["dermatology", "dermatologist", "skin", "aesthetic"],
    "Cardiology": ["cardiology", "cardiac", "heart", "cardiovascular"],
    "Neurology": ["neurology", "neurological", "neurosurgery", "brain"],
    "Diagnostics": ["pathology", "radiology", "laboratory", "diagnostic"],
    "Orthopedics": ["orthopedic", "orthopedics", "bone", "joint", "surgery"],
    "Nephrology": ["nephrology", "nephrologist", "renal", "kidney"],
    "Cancer Care": ["oncology", "cancer", "chemotherapy", "radiation"],
    "Child Care": ["pediatric", "pediatrics", "child", "neonatal"],
    "general": ["general medicine", "internal medicine", "family medicine", "physician"]
};

// Sample doctor data (converted from your JSON)
const doctorData: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Vinay Sakhuja',
        degree: 'MBBS, MD - Medicine, DM - Nephrology',
        location: 'Phase-VI',
        city: 'Mohali',
        consultFee: 1200,
        yearsOfExperience: 44,
        speciality: 'Nephrologist/Renal Specialist',
        phoneNumber: '6228780606',
        rating: 4.6,
        reviews: 156,
        availability: 'Available Today'
    },
    {
        id: '2',
        name: 'Dr. Gaurav Saini',
        degree: 'MBBS, MS - Orthopaedics',
        location: 'Phase-VI',
        city: 'Mohali',
        consultFee: '₹1100',
        yearsOfExperience: 18,
        speciality: 'Orthopedic surgeon',
        phoneNumber: '9467291379',
        rating: 4.4,
        reviews: 89,
        availability: 'Next Available: Tomorrow'
    },
    {
        id: '3',
        name: 'Dr. Munish Chauhan',
        degree: 'MBBS, MD - General Medicine, DM - Nephrology',
        location: 'Phase-VI',
        city: 'Mohali',
        consultFee: '₹1200',
        yearsOfExperience: 21,
        speciality: 'Nephrologist/Renal Specialist',
        phoneNumber: '8830608400',
        rating: 4.5,
        reviews: 124,
        availability: 'Available Today'
    },
    {
        id: '4',
        name: 'Dr. Jasmeet Singh',
        degree: 'MBBS, DNB - General Medicine',
        dpScore: 1,
        npvValue: '(30 patients)',
        location: 'Sector- 68',
        city: 'Mohali',
        consultFee: '₹500',
        yearsOfExperience: 22,
        speciality: 'Internal Medicine, General Physician, Consultant Physician',
        phoneNumber: '8286618410',
        rating: 4.3,
        reviews: 67,
        availability: 'Available Now'
    },
    {
        id: '5',
        name: 'Dr. Shikha Verma',
        degree: 'DNB - Dermatology & Venereology, MD - Dermatology, MBBS',
        dpScore: 0.99,
        npvValue: '(515 patients)',
        location: 'Sector- 69',
        city: 'Mohali',
        consultFee: '₹600',
        yearsOfExperience: 28,
        speciality: 'Dermatologist, Venereologist, Aesthetic Dermatologist',
        phoneNumber: '8252911006',
        rating: 4.7,
        reviews: 203,
        availability: 'Available Today'
    },
    {
        id: '6',
        name: 'Dr. Ruchi Bansal',
        degree: 'MBBS, MS - Obstetrics & Gynaecology',
        location: 'Phase 10',
        city: 'Mohali',
        consultFee: '₹400',
        yearsOfExperience: 13,
        speciality: 'Gynecologist, Obstetrician',
        phoneNumber: '6577050633',
        rating: 4.2,
        reviews: 78,
        availability: 'Available Tomorrow'
    },
    {
        id: '7',
        name: 'Dr. R S Rai',
        degree: 'MBBS, MS - General Surgery, MCh - Urology',
        dpScore: 0.96,
        npvValue: '(106 patients)',
        location: 'Phase-VI',
        city: 'Mohali',
        consultFee: '₹1000',
        yearsOfExperience: 38,
        speciality: 'Sexologist, Urologist',
        phoneNumber: '7717598288',
        rating: 4.8,
        reviews: 145,
        availability: 'Available Today'
    }
];

// Hospital data (from previous implementation)
const hospitalData: Hospital[] = [
    {
        id: '1',
        name: 'AIIMS Bhubaneswar',
        category: 'Public',
        careType: 'Hospital',
        systemOfMedicine: 'Allopathic',
        address: 'Sijua, Patrapada, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751019',
        telephone: '0674-2476010',
        mobile: '9437204724',
        emergency: '0674-2476027',
        email: 'director@aiimsbhubaneswar.edu.in',
        website: 'www.aiimsbhubaneswar.edu.in',
        specialties: 'Cardiology, Neurology, Oncology, Orthopedics, Gastroenterology, Nephrology, Emergency Medicine, Psychiatry, Dermatology',
        latitude: '20.1896',
        longitude: '85.6121',
        facilities: 'Emergency Room, ICU, Blood Bank, Diagnostic Services, Ambulance, Pharmacy',
        beds: '750',
        rating: 4.5,
        reviews: 1250,
        distance: '2.5 km',
        waitTime: '15 min',
        hours: '24/7',
        features: ['24/7 Emergency', 'Blood Bank', 'ICU', 'Ambulance Service']
    },
    {
        id: '2',
        name: 'Apollo Hospitals Bhubaneswar',
        category: 'Private',
        careType: 'Hospital',
        systemOfMedicine: 'Allopathic',
        address: 'Plot No 251, Sainik School Road, Unit 15, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751005',
        telephone: '0674-671-0100',
        mobile: '9437588888',
        emergency: '0674-671-0101',
        email: 'info.bhubaneswar@apollohospitals.com',
        website: 'www.apollohospitals.com',
        specialties: 'Cardiac Surgery, Neurosurgery, Oncology, Orthopedics, Gastroenterology, Pediatrics, Cardiology',
        latitude: '20.2847',
        longitude: '85.8249',
        facilities: 'Emergency Room, ICU, NICU, Blood Bank, Diagnostic Services, Ambulance',
        beds: '350',
        rating: 4.3,
        reviews: 890,
        distance: '3.8 km',
        waitTime: '20 min',
        hours: '24/7',
        features: ['24/7 Emergency', 'NICU', 'Cardiac Surgery', 'Advanced Diagnostics']
    },
    {
        id: '3',
        name: 'Kalinga Institute of Medical Sciences',
        category: 'Private',
        careType: 'Medical College',
        systemOfMedicine: 'Allopathic',
        address: 'KIIT Campus 5, Patia, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751024',
        telephone: '0674-272-7777',
        mobile: '9437031234',
        emergency: '0674-272-7778',
        email: 'info@kims.ac.in',
        website: 'www.kims.ac.in',
        specialties: 'Multi-specialty, Medical Education, Research, Emergency Medicine, Surgery, Dermatology, Psychiatry, Nephrology',
        latitude: '20.3496',
        longitude: '85.8018',
        facilities: 'Emergency Room, Teaching Hospital, Research Labs, Blood Bank, Ambulance',
        beds: '1200',
        rating: 4.2,
        reviews: 675,
        distance: '5.2 km',
        waitTime: '25 min',
        hours: '24/7',
        features: ['Teaching Hospital', 'Research Center', '24/7 Emergency', 'Multi-specialty']
    },
    {
        id: '4',
        name: 'Capital Hospital Bhubaneswar',
        category: 'Public',
        careType: 'Hospital',
        systemOfMedicine: 'Allopathic',
        address: 'Unit 6, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751001',
        telephone: '0674-253-9658',
        mobile: '9437205678',
        emergency: '0674-253-9659',
        email: 'capitalhospital@gov.od.in',
        website: 'www.capitalhospitalbbs.com',
        specialties: 'General Medicine, Surgery, Pediatrics, Gynecology, Orthopedics, Emergency',
        latitude: '20.2517',
        longitude: '85.8351',
        facilities: 'Emergency Room, General Ward, Blood Bank, Pharmacy, Ambulance',
        beds: '500',
        rating: 3.8,
        reviews: 420,
        distance: '1.2 km',
        waitTime: '30 min',
        hours: '24/7',
        features: ['24/7 Emergency', 'Government Hospital', 'General Medicine', 'Surgery']
    },
    {
        id: '5',
        name: 'Sum Ultimate Medicare',
        category: 'Private',
        careType: 'Hospital',
        systemOfMedicine: 'Allopathic',
        address: 'K8, Kalinga Nagar, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751003',
        telephone: '0674-266-1111',
        mobile: '9437098765',
        emergency: '0674-266-1122',
        email: 'info@sum-hospital.com',
        website: 'www.sumultimatemedicare.com',
        specialties: 'Cardiology, Neurology, Oncology, Nephrology, Gastroenterology, Emergency Medicine',
        latitude: '20.2735',
        longitude: '85.7817',
        facilities: 'Emergency Room, ICU, CCU, Blood Bank, Diagnostic Center, Ambulance',
        beds: '450',
        rating: 4.1,
        reviews: 532,
        distance: '4.1 km',
        waitTime: '18 min',
        hours: '24/7',
        features: ['24/7 Emergency', 'ICU/CCU', 'Diagnostic Center', 'Specialist Care']
    },
    {
        id: '6',
        name: 'Bhubaneswar Skin & Hair Clinic',
        category: 'Private',
        careType: 'Specialty Clinic',
        systemOfMedicine: 'Allopathic',
        address: 'Saheed Nagar, Bhubaneswar',
        state: 'Odisha',
        district: 'Khordha',
        pincode: '751007',
        telephone: '0674-654-3210',
        mobile: '9437123456',
        emergency: 'NA',
        email: 'info@skinhairclinic.com',
        website: 'www.skinhairclinic.com',
        specialties: 'Dermatology, Cosmetic Surgery, Hair Transplant, Plastic Surgery, Aesthetic Medicine',
        latitude: '20.2906',
        longitude: '85.8245',
        facilities: 'Outpatient Services, Laser Treatment, Cosmetic Procedures',
        beds: '20',
        rating: 4.4,
        reviews: 342,
        distance: '3.2 km',
        waitTime: '10 min',
        hours: '9 AM - 6 PM',
        features: ['Dermatology Specialists', 'Laser Treatment', 'Cosmetic Surgery', 'Hair Care']
    }
];

// Doctor Card Component
const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const formatFee = (fee: string | number) => {
        if (typeof fee === 'number') return `₹${fee}`;
        return fee.toString().replace('竄ｹ', '₹');
    };

    return (
        <div className={`bg-white rounded-xl border p-4 hover:shadow-md transition-all ${doctor.specialtyMatch
                ? 'border-teal-200 ring-2 ring-teal-100 bg-teal-50/30'
                : 'border-gray-200'
            }`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{doctor.name}</h3>
                        {doctor.specialtyMatch && (
                            <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full font-medium">
                                ✓ Specialized
                            </span>
                        )}
                        {/* {doctor.dpScore && doctor.dpScore > 0.95 && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                                Top Rated
                            </span>
                        )} */}
                    </div>
                    <p className="text-teal-600 text-xs font-medium mb-1">{doctor.speciality}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                            <MapPinIcon className="w-3 h-3" />
                            <span>{doctor.location}, {doctor.city}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <AcademicCapIcon className="w-3 h-3" />
                            <span>{doctor.yearsOfExperience}+ years</span>
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

            {doctor.rating && (
                <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(doctor.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-medium text-gray-900">{doctor.rating}</span>
                    <span className="text-xs text-gray-500">({doctor.reviews})</span>
                    {doctor.npvValue && (
                        <span className="text-xs text-blue-600">{doctor.npvValue}</span>
                    )}
                </div>
            )}

            <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-2">
                    <AcademicCapIcon className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{doctor.degree}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">{doctor.phoneNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <CurrencyRupeeIcon className="w-3 h-3 text-gray-400" />
                        <span className="text-xs font-medium text-gray-900">{formatFee(doctor.consultFee)}</span>
                    </div>
                    {doctor.availability && (
                        <div className="flex items-center space-x-1">
                            <CalendarDaysIcon className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-green-600">{doctor.availability}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex space-x-2">
                <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                    Book Appointment
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1">
                    <PhoneIcon className="w-3 h-3" />
                    <span>Call Now</span>
                </button>
            </div>
        </div>
    );
};

// Hospital Card Component (simplified from previous)
const HospitalCard: React.FC<{ hospital: Hospital }> = ({ hospital }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const hasEmergency = hospital.emergency && hospital.emergency !== 'NA';

    return (
        <div className={`bg-white rounded-xl border p-4 hover:shadow-md transition-all ${hospital.specialtyMatch
                ? 'border-teal-200 ring-2 ring-teal-100 bg-teal-50/30'
                : 'border-gray-200'
            }`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{hospital.name}</h3>
                        {hospital.specialtyMatch && (
                            <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full font-medium">
                                ✓ Specialized
                            </span>
                        )}
                        {hasEmergency && (
                            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                                24/7
                            </span>
                        )}
                    </div>
                    <p className="text-teal-600 text-xs font-medium mb-1">{hospital.careType}</p>
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

            <div className="text-xs text-gray-600 mb-3">
                <strong>Specialties:</strong> {hospital.specialties.split(',').slice(0, 3).join(', ')}
                {hospital.specialties.split(',').length > 3 && '...'}
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
};

// Filter Component
const FilterComponent: React.FC<{
    selectedFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    viewType: ViewType;
}> = ({ selectedFilter, onFilterChange, viewType }) => {
    const doctorFilters = [
        { id: 'all' as FilterType, label: 'All', icon: UserIcon },
        // { id: 'rated' as FilterType, label: 'Top Rated', icon: StarIcon },
        { id: 'experience' as FilterType, label: 'Most Experienced', icon: AcademicCapIcon },
        { id: 'affordable' as FilterType, label: 'Affordable', icon: CurrencyRupeeIcon },
        { id: 'nearby' as FilterType, label: 'Nearby', icon: MapPinIcon },
    ];

    const hospitalFilters = [
        { id: 'all' as FilterType, label: 'All', icon: BuildingOffice2Icon },
        { id: 'emergency' as FilterType, label: 'Emergency', icon: HeartIcon },
        { id: 'nearby' as FilterType, label: 'Nearby', icon: MapPinIcon },
        { id: 'rated' as FilterType, label: 'Top Rated', icon: StarIcon },
    ];

    const filters = viewType === 'doctors' ? doctorFilters : hospitalFilters;

    return (
        <div className="flex space-x-2 mb-4 flex-wrap">
            {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                    <button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilter === filter.id
                                ? 'bg-teal-100 text-teal-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        <span>{filter.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

// Function to check specialty match
const checkSpecialtyMatch = (specialties: string, selectedModel: string): boolean => {
    const modelKeys = modelSpecialtyMapping[selectedModel] || [];
    const specialtiesLower = specialties.toLowerCase();

    return modelKeys.some(specialty =>
        specialtiesLower.includes(specialty.toLowerCase())
    );
};

// Main Component
const MedicalRecommendationSystem: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewType, setViewType] = useState<ViewType>('doctors');
    const [selectedModel] = useAtom(modelSelected);

    // Filter and sort data
    const filteredDoctors = useMemo(() => {
        let filtered = doctorData.map(doctor => ({
            ...doctor,
            specialtyMatch: checkSpecialtyMatch(doctor.speciality, selectedModel)
        })).filter(doctor => {
            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                return doctor.name.toLowerCase().includes(searchLower) ||
                    doctor.speciality.toLowerCase().includes(searchLower) ||
                    doctor.location.toLowerCase().includes(searchLower);
            }
            return true;
        });

        // Sort by specialty match first
        if (selectedModel !== 'General' && selectedModel !== 'general') {
            filtered = filtered.sort((a, b) => {
                if (a.specialtyMatch && !b.specialtyMatch) return -1;
                if (!a.specialtyMatch && b.specialtyMatch) return 1;
                return (b.rating || 0) - (a.rating || 0);
            });
        }

        // Apply filters
        switch (selectedFilter) {
            case 'rated':
                filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'experience':
                filtered = filtered.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
                break;
            case 'affordable':
                filtered = filtered.sort((a, b) => {
                    const feeA = typeof a.consultFee === 'number' ? a.consultFee : parseInt(a.consultFee.replace(/[^\d]/g, ''));
                    const feeB = typeof b.consultFee === 'number' ? b.consultFee : parseInt(b.consultFee.replace(/[^\d]/g, ''));
                    return feeA - feeB;
                });
                break;
        }

        return filtered;
    }, [selectedFilter, searchTerm, selectedModel]);

    const filteredHospitals = useMemo(() => {
        let filtered = hospitalData.map(hospital => ({
            ...hospital,
            specialtyMatch: checkSpecialtyMatch(hospital.specialties, selectedModel)
        })).filter(hospital => {
            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                return hospital.name.toLowerCase().includes(searchLower) ||
                    hospital.specialties.toLowerCase().includes(searchLower) ||
                    hospital.address.toLowerCase().includes(searchLower);
            }
            return true;
        });

        if (selectedModel !== 'General' && selectedModel !== 'general') {
            filtered = filtered.sort((a, b) => {
                if (a.specialtyMatch && !b.specialtyMatch) return -1;
                if (!a.specialtyMatch && b.specialtyMatch) return 1;
                return b.rating - a.rating;
            });
        }

        return filtered;
    }, [selectedFilter, searchTerm, selectedModel]);

    const specializedDoctorCount = filteredDoctors.filter(d => d.specialtyMatch).length;
    const specializedHospitalCount = filteredHospitals.filter(h => h.specialtyMatch).length;

    return (
        <div className="h-full flex flex-col bg-gray-50">
            {/* Fixed Header */}
            <div className="flex-shrink-0 bg-white border-b border-gray-200 p-4">
                <div className="mb-4">
                    <h1 className="text-xl font-bold text-gray-900 mb-1">
                        Medical Recommendations
                    </h1>
                    <p className="text-sm text-gray-600">
                        {selectedModel !== 'General' && selectedModel !== 'general'
                            ? `Specialized ${viewType} for ${selectedModel}`
                            : `Find the best ${viewType} based on your needs`
                        }
                    </p>
                    {selectedModel !== 'General' && selectedModel !== 'general' && (
                        <div className="mt-2 p-2 bg-teal-50 rounded-lg">
                            <p className="text-xs text-teal-700">
                                <strong>
                                    {viewType === 'doctors' ? specializedDoctorCount : specializedHospitalCount}
                                </strong> {viewType} specialize in {selectedModel}
                            </p>
                        </div>
                    )}
                </div>

                {/* View Toggle */}
                <div className="flex space-x-1 mb-4 bg-gray-100 p-1 rounded-lg w-fit">
                    <button
                        onClick={() => setViewType('doctors')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewType === 'doctors'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Doctors ({filteredDoctors.length})
                    </button>
                    <button
                        onClick={() => setViewType('hospitals')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewType === 'hospitals'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Hospitals ({filteredHospitals.length})
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-3">
                    <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder={`Search ${viewType}, specialties, or location...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>

                {/* Filters */}
                <FilterComponent
                    selectedFilter={selectedFilter}
                    onFilterChange={setSelectedFilter}
                    viewType={viewType}
                />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                    {viewType === 'doctors' ? (
                        filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <UserIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
                                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                            </div>
                        )
                    ) : (
                        filteredHospitals.length > 0 ? (
                            filteredHospitals.map((hospital) => (
                                <HospitalCard key={hospital.id} hospital={hospital} />
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <BuildingOffice2Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No hospitals found</h3>
                                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicalRecommendationSystem;