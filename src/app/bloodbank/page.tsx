

"use client";
import { useState, useEffect, useMemo } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Search, Filter, Heart, Building2, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { bloodBanksData } from '@/data/bolldbanks';

const districts = [...new Set(bloodBanksData.blood_banks.map(bb => bb.district))];

const HealthcareLocator = () => {
    const [userLocation, setUserLocation] = useState({ lat: 20.2961, lng: 85.8245 }); // Default to Bhubaneswar
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDistrict, setSelectedDistrict] = useState('All');
    const [maxDistance, setMaxDistance] = useState(100); // Increased default since Odisha is large
    const [locationInput, setLocationInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const [locationError, setLocationError] = useState('');
    const [favorites, setFavorites] = useState(new Set());

    // Get user's current location
    const getCurrentLocation = () => {
        setIsGettingLocation(true);
        setLocationError('');

        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by this browser');
            setIsGettingLocation(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                setIsGettingLocation(false);
            },
            (error) => {
                let errorMessage = 'Unable to get location';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Location access denied by user';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information unavailable';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Location request timeout';
                        break;
                }
                setLocationError(errorMessage);
                setIsGettingLocation(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000 // 5 minutes
            }
        );
    };

    // Auto-get location on component mount
    useEffect(() => {
        getCurrentLocation();
    }, []);

    // Calculate distance between two coordinates using Haversine formula
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371; // Earth's radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    // Process facility data
    const processedFacilities = useMemo(() => {
        return bloodBanksData.blood_banks.map((facility: any, index: any) => {
            let distance = Infinity;
            if (facility.lat && facility.lng) {
                const lat = parseFloat(facility.lat);
                const lng = parseFloat(facility.lng);
                if (!isNaN(lat) && !isNaN(lng)) {
                    distance = calculateDistance(userLocation.lat, userLocation.lng, lat, lng);
                }
            }

            return {
                id: index,
                name: facility.name || 'Unknown Facility',
                district: facility.district || 'Unknown District',
                contact: facility.contact || 'N/A',
                distance,
                coordinates: {
                    lat: facility.lat ? parseFloat(facility.lat) : null,
                    lng: facility.lng ? parseFloat(facility.lng) : null
                }
            };
        }).sort((a, b) => a.distance - b.distance);
    }, [userLocation]);

    // Filter facilities
    const filteredFacilities = useMemo(() => {
        return processedFacilities.filter(facility => {
            const matchesSearch = !searchQuery ||
                facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                facility.district.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || facility.district === selectedCategory;
            const withinDistance = facility.distance <= maxDistance;

            return matchesSearch && matchesCategory && withinDistance;
        });
    }, [processedFacilities, searchQuery, selectedCategory, maxDistance]);

    // Handle manual location search
    const handleLocationSearch = async () => {
        if (!locationInput.trim()) return;

        setIsLoading(true);
        setLocationError('');

        // Common Odisha cities coordinates
        const locations: { [key: string]: { lat: number; lng: number } } = {
            'bhubaneswar': { lat: 20.2961, lng: 85.8245 },
            'cuttack': { lat: 20.462, lng: 85.883 },
            'berhampur': { lat: 19.32, lng: 84.79 },
            'rourkela': { lat: 22.225, lng: 84.878 },
            'sambalpur': { lat: 21.49, lng: 83.97 },
            'puri': { lat: 19.81, lng: 85.83 },
            'balasore': { lat: 21.49, lng: 86.92 },
            'bhadrak': { lat: 21.06, lng: 86.51 },
            'jajpur': { lat: 20.84, lng: 86.13 },
            'kendrapara': { lat: 20.62, lng: 86.41 }
        };

        const location = locations[locationInput.toLowerCase().replace(/\s+/g, '')];
        if (location) {
            setUserLocation(location);
        } else {
            setLocationError('City not found. Try: Bhubaneswar, Cuttack, Berhampur, Rourkela, etc.');
        }
        setIsLoading(false);
    };

    // Open directions in Google Maps
    const openDirections = (facility: any) => {
        if (!facility.coordinates.lat || !facility.coordinates.lng) return;

        const destination = `${facility.coordinates.lat},${facility.coordinates.lng}`;
        const origin = `${userLocation.lat},${userLocation.lng}`;
        const url = `https://www.google.com/maps/dir/${origin}/${destination}`;

        // Check if it's mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // On mobile, try to open in Google Maps app, fallback to web
            const mapsAppUrl = `google.navigation:q=${destination}&mode=d`;
            window.location.href = mapsAppUrl;
            // Fallback to web version after a short delay
            setTimeout(() => {
                window.open(url, '_blank');
            }, 1500);
        } else {
            // On desktop, open in new tab
            window.open(url, '_blank');
        }
    };

    const formatDistance = (distance: any) => {
        if (distance === Infinity) return 'Distance unknown';
        return distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`;
    };

    const toggleFavorite = (facilityId: any) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(facilityId)) {
            newFavorites.delete(facilityId);
        } else {
            newFavorites.add(facilityId);
        }
        setFavorites(newFavorites);
    };

    const getRatingStars = () => {
        return Array(4).fill(0).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ));
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Enhanced Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Filter className="w-6 h-6 mr-3 text-teal-600" />
                                    Filters
                                </h2>

                                {/* Location Section */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-3">Your Location</label>

                                    {/* Current Location Button */}
                                    <button
                                        onClick={getCurrentLocation}
                                        disabled={isGettingLocation}
                                        className="w-full mb-3 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center font-medium"
                                    >
                                        {isGettingLocation ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Getting Location...
                                            </>
                                        ) : (
                                            <>
                                                <Navigation className="w-4 h-4 mr-2" />
                                                Use Current Location
                                            </>
                                        )}
                                    </button>

                                    {/* Manual Location Input */}
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={locationInput}
                                            onChange={(e) => setLocationInput(e.target.value)}
                                            placeholder="Enter city name (e.g., Bhubaneswar)"
                                            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                            onKeyPress={(e) => e.key === 'Enter' && handleLocationSearch()}
                                        />
                                        <button
                                            onClick={handleLocationSearch}
                                            disabled={isLoading}
                                            className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                        >
                                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                                        </button>
                                    </div>

                                    {/* Location Error */}
                                    {locationError && (
                                        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-lg flex items-center text-sm text-red-700">
                                            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span>{locationError}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Distance Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                                        Max Distance: <span className="text-teal-600">{maxDistance}km</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="500"
                                        value={maxDistance}
                                        onChange={(e) => setMaxDistance(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1km</span>
                                        <span>500km</span>
                                    </div>
                                </div>

                                {/* District Filter (replacing Category) */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">District</label>
                                    <select
                                        value={selectedDistrict}
                                        onChange={(e) => setSelectedDistrict(e.target.value)}
                                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                    >
                                        <option value="All">All Districts</option>
                                        {districts.map(district => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Results Count */}
                                <div className="text-center p-3 bg-teal-50 rounded-lg border border-teal-100">
                                    <span className="text-teal-800 font-semibold">{filteredFacilities.length}</span>
                                    <span className="text-teal-600 text-sm ml-1">blood banks found</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Enhanced Search Bar */}
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search blood banks by name or district..."
                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Enhanced Results */}
                            <div className="space-y-6">
                                {filteredFacilities.length === 0 ? (
                                    <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-100">
                                        <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No blood banks found</h3>
                                        <p className="text-gray-600 mb-4">Try adjusting your search criteria or increase the distance.</p>
                                        <button
                                            onClick={() => {
                                                setSearchQuery('');
                                                setSelectedDistrict('All');
                                                setMaxDistance(100);
                                            }}
                                            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                                        >
                                            Reset Filters
                                        </button>
                                    </div>
                                ) : (
                                    filteredFacilities.map((facility) => (
                                        <div key={facility.id} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                                            <div className="p-6">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1 pr-4">
                                                        <div className="flex items-center space-x-3 mb-3">
                                                            <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                                                            <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">{facility.district}</span>
                                                        </div>

                                                        <div className="flex items-center space-x-1 mb-3">
                                                            {getRatingStars()}
                                                            <span className="text-sm text-gray-600 ml-2">Blood Bank</span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-gray-700 mb-3 space-x-4">
                                                            <div className="flex items-center">
                                                                <MapPin className="w-4 h-4 mr-1 text-teal-600" />
                                                                <span className="font-medium">{formatDistance(facility.distance)}</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Clock className="w-4 h-4 mr-1 text-teal-600" />
                                                                <span>24/7 Availability</span>
                                                            </div>
                                                        </div>

                                                        {facility.contact && facility.contact !== 'N/A' && (
                                                            <div className="mb-3">
                                                                <div className="flex items-center text-sm text-gray-700">
                                                                    <Phone className="w-4 h-4 mr-2 text-teal-600" />
                                                                    <a href={`tel:${facility.contact}`} className="text-teal-600 hover:underline">{facility.contact}</a>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* <div className="flex items-center space-x-4 pt-2">
                                                            <button
                                                                onClick={() => toggleFavorite(facility.id)}
                                                                className={`p-2 rounded-full transition-colors ${favorites.has(facility.id)
                                                                    ? 'text-red-500 bg-red-50'
                                                                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                                    }`}
                                                            >
                                                                <Heart className={`w-5 h-5 ${favorites.has(facility.id) ? 'fill-current' : ''}`} />
                                                            </button>
                                                        </div> */}
                                                    </div>

                                                    <div className="flex flex-col space-y-3">
                                                        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all text-sm font-semibold shadow-lg hover:shadow-xl">
                                                            View Details
                                                        </button>
                                                        {facility.coordinates.lat && facility.coordinates.lng && (
                                                            <button
                                                                onClick={() => openDirections(facility)}
                                                                className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-semibold flex items-center"
                                                            >
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                Directions
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthcareLocator;