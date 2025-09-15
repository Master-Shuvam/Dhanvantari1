// components/HospitalFilter.tsx
import { 
  HeartIcon,
  MapPinIcon,
  StarIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { FilterType } from '@/types';

interface HospitalFilterProps {
    selectedFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export default function HospitalFilter({ selectedFilter, onFilterChange }: HospitalFilterProps) {
    const filters = [
        { id: 'all' as FilterType, label: 'All', icon: BuildingOffice2Icon },
        { id: 'emergency' as FilterType, label: 'Emergency', icon: HeartIcon },
        { id: 'nearby' as FilterType, label: 'Nearby', icon: MapPinIcon },
        { id: 'rated' as FilterType, label: 'Top Rated', icon: StarIcon },
    ];

    return (
        <div className="flex space-x-2">
            {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                    <button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedFilter === filter.id
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
}