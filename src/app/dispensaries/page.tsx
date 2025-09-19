"use client";
import { useState, useEffect, useMemo } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Search, Filter, Heart, Building2, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import dispensariesData from '@/data/dispensaries';
import Navbar from '@/components/layout/Navbar';

const HealthcareLocator = () => {
    const [userLocation, setUserLocation] = useState({ lat: 28.6139, lng: 77.2090 });
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [maxDistance, setMaxDistance] = useState(20);
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
    const calculateDistance = (lat1: any, lon1: any, lat2: any, lon2: any) => {
        const R = 6371;
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
        return dispensariesData.data.map((facility, index) => {
            const facilityData: any = {};
            dispensariesData.fields.forEach((field, fieldIndex) => {
                facilityData[field.id] = facility[fieldIndex];
            });

            let distance = Infinity;
            if (facilityData.n && facilityData.o) {
                const lat = parseFloat(facilityData.n);
                const lng = parseFloat(facilityData.o);
                if (!isNaN(lat) && !isNaN(lng)) {
                    distance = calculateDistance(userLocation.lat, userLocation.lng, lat, lng);
                }
            }

            return {
                id: index,
                name: facilityData.b || 'Unknown Facility',
                category: facilityData.c || 'Unknown',
                type: facilityData.d || 'Unknown',
                address: facilityData.e || 'Address not available',
                district: facilityData.g || 'Unknown District',
                pincode: facilityData.i || '',
                phone: facilityData.j || facilityData.l || 'Not available',
                website: facilityData.m || '',
                facilities: facilityData.p || 'Not specified',
                ayush: facilityData.q || 'NA',
                distance: distance,
                coordinates: {
                    lat: facilityData.n ? parseFloat(facilityData.n) : null,
                    lng: facilityData.o ? parseFloat(facilityData.o) : null
                }
            };
        }).sort((a, b) => a.distance - b.distance);
    }, [userLocation]);

    // Filter facilities
    const filteredFacilities = useMemo(() => {
        return processedFacilities.filter(facility => {
            const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                facility.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                facility.district.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === 'All' || facility.category === selectedCategory;
            const matchesType = selectedType === 'All' || facility.type === selectedType;
            const withinDistance = facility.distance <= maxDistance;

            return matchesSearch && matchesCategory && matchesType && withinDistance;
        });
    }, [processedFacilities, searchQuery, selectedCategory, selectedType, maxDistance]);

    // Get unique categories and types
    const categories = [...new Set(processedFacilities.map(f => f.category))];
    const types = [...new Set(processedFacilities.map(f => f.type))];

    // Handle manual location search
    const handleLocationSearch = async () => {
        if (!locationInput.trim()) return;

        setIsLoading(true);
        setLocationError('');

        // Common Indian cities coordinates
        const locations = {
            'delhi': { lat: 28.6139, lng: 77.2090 },
            'new delhi': { lat: 28.6139, lng: 77.2090 },
            'mumbai': { lat: 19.0760, lng: 72.8777 },
            'bangalore': { lat: 12.9716, lng: 77.5946 },
            'bengaluru': { lat: 12.9716, lng: 77.5946 },
            'bhubaneshwar': { lat: 20.2960, lng: 85.8246 },
            'chennai': { lat: 13.0827, lng: 80.2707 },
            'kolkata': { lat: 22.5726, lng: 88.3639 },
            'hyderabad': { lat: 17.3850, lng: 78.4867 },
            'pune': { lat: 18.5204, lng: 73.8567 },
            'ahmedabad': { lat: 23.0225, lng: 72.5714 },
            'jaipur': { lat: 26.9124, lng: 75.7873 },
            'surat': { lat: 21.1702, lng: 72.8311 },
            'lucknow': { lat: 26.8467, lng: 80.9462 }
        };

        const location = locations[locationInput.toLowerCase() as keyof typeof locations];
        if (location) {
            setUserLocation(location);
        } else {
            setLocationError('City not found. Try: Delhi, Mumbai, Bangalore, Chennai, etc.');
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
            {/* <div className='fixed w-full mb-[10vh]'> */}
                <Navbar />
            {/* </div>   */}
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
                                            placeholder="Enter city name"
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
                                        max="50"
                                        value={maxDistance}
                                        onChange={(e) => setMaxDistance(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1km</span>
                                        <span>50km</span>
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                    >
                                        <option value="All">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Type Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Type</label>
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                                    >
                                        <option value="All">All Types</option>
                                        {types.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Results Count */}
                                <div className="text-center p-3 bg-teal-50 rounded-lg border border-teal-100">
                                    <span className="text-teal-800 font-semibold">{filteredFacilities.length}</span>
                                    <span className="text-teal-600 text-sm ml-1">facilities found</span>
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
                                        placeholder="Search hospitals by name, location, or services..."
                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Enhanced Results */}
                            <div className="space-y-6">
                                {filteredFacilities.length === 0 ? (
                                    <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-100">
                                        <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No facilities found</h3>
                                        <p className="text-gray-600 mb-4">Try adjusting your search criteria or increase the distance.</p>
                                        <button
                                            onClick={() => {
                                                setSearchQuery('');
                                                setSelectedCategory('All');
                                                setSelectedType('All');
                                                setMaxDistance(20);
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
                                                            {facility.category === 'Public/ Government' && (
                                                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                                                                    Government
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center space-x-1 mb-3">
                                                            {getRatingStars()}
                                                            <span className="text-sm text-gray-600 ml-2">Trusted Healthcare Provider</span>
                                                        </div>

                                                        <div className="flex items-center text-sm text-gray-700 mb-3 space-x-4">
                                                            <div className="flex items-center">
                                                                <MapPin className="w-4 h-4 mr-1 text-teal-600" />
                                                                <span className="font-medium">{formatDistance(facility.distance)}</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Clock className="w-4 h-4 mr-1 text-teal-600" />
                                                                <span>24/7 Emergency</span>
                                                            </div>
                                                        </div>

                                                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">{facility.address}</p>

                                                        {facility.phone && facility.phone !== 'Not available' && (
                                                            <div className="flex items-center text-sm text-gray-700 mb-4">
                                                                <Phone className="w-4 h-4 mr-2 text-teal-600" />
                                                                <a href={`tel:${facility.phone}`} className="hover:text-teal-600 transition-colors">
                                                                    {facility.phone}
                                                                </a>
                                                            </div>
                                                        )}

                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full font-medium">
                                                                {facility.type}
                                                            </span>
                                                            {facility.ayush !== 'NA' && facility.ayush !== 'No' && (
                                                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                                                                    AYUSH
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col items-center space-y-2">
                                                        <button
                                                            onClick={() => toggleFavorite(facility.id)}
                                                            className={`p-2 rounded-full transition-colors ${favorites.has(facility.id)
                                                                ? 'text-red-500 bg-red-50'
                                                                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                                }`}
                                                        >
                                                            <Heart className={`w-5 h-5 ${favorites.has(facility.id) ? 'fill-current' : ''}`} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                                                    <button className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all text-sm font-semibold shadow-lg hover:shadow-xl">
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
                                                    {facility.website && (
                                                        <button
                                                            onClick={() => window.open(facility.website, '_blank')}
                                                            className="px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-semibold"
                                                        >
                                                            Website
                                                        </button>
                                                    )}
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