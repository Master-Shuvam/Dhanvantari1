import {
  BellIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  UserIcon,
  CreditCardIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [userDetails, setUserDetails] = useState<any>();
  const [showAyushmanCard, setShowAyushmanCard] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      console.log(session.user);
      setUserDetails(session.user);
    }
  }, [session]);

  // const fetchUserDetails = async () => {
  //   if (!session?.user?.email) return;

  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch('/api/user/details');
  //     if (!response.ok) {
  //       // throw new Error('Failed to fetch user details');
  //     }
  //     const data = await response.json();
  //     setUserDetails(data);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'An error occurred');
  //     console.error('Error fetching user details:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (session?.user) {
  //     fetchUserDetails();
  //   }
  // }, [session]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const AyushmanCard = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white relative">
          <button
            onClick={() => setShowAyushmanCard(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              {/* <CreditCardIcon className="w-6 h-6" /> */}
              <img src={userDetails.image} className='rounded-lg' />
            </div>
            <div>
              <h2 className="text-xl font-bold">Ayushman Bharat</h2>
              <p className="text-green-100 text-sm">Digital Health Card</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm text-green-500 mb-1 font-semibold">CARD ID</p>
            <p className="font-mono text-lg font-semibold tracking-wider text-black">
              {userDetails?.ayushManBharatID != null
                ? `${userDetails.ayushManBharatID.slice(0, 4)}${userDetails.ayushManBharatID.slice(4, 8)} ${userDetails.ayushManBharatID.slice(8, 12)}`
                : "AB 1211 2344 C421"}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Cardholder Name</p>
              <p className="font-semibold text-gray-900">{userDetails?.name}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Family Size</p>
              <p className="font-semibold text-gray-900">{userDetails?.familySize} members</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Balance</p>
              <p className="font-semibold text-green-600 text-lg">₹{userDetails?.balance}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Renews In</p>
              <p className="font-semibold text-gray-900">7 months</p>
            </div>
          </div>

          {/* Card Features */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Free healthcare at empaneled hospitals
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Cashless treatment up to ₹5 lakh
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Coverage for entire family
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Download Card
            </button>
            <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors font-medium">
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 m-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/ai/general"
                  className="px-3 py-2 text-sm font-medium text-teal-600 bg-teal-50 rounded-md hover:bg-teal-100 transition-colors"
                >
                  General
                </a>
                <a
                  href="/dispensaries"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Dispensaries
                </a>
                <a
                  href="/bloodbank"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Blood Bank
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Reports
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Settings
                </a>
              </div>
            </div>

            {/* Right side - Ayushman Card, Emergency button, notifications, and profile */}
            <div className="flex items-center space-x-3">
              {/* Ayushman Card Button */}
              <button
                onClick={() => setShowAyushmanCard(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm transform hover:scale-105"
              >
                <CreditCardIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Ayushman Card</span>
              </button>

              {/* Emergency Button */}
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                <ExclamationTriangleIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Emergency</span>
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                    {userDetails?.image == null ? (
                      <UserIcon className="w-4 h-4 text-white" />
                    ) : (
                      <img className="rounded-full w-8 h-8 object-cover" src={userDetails.image} alt="Profile" />
                    )}
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-gray-900">{userDetails?.name}</p>
                    <p className="text-xs text-gray-500">{userDetails?.email}</p>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{userDetails?.name}</p>
                        <p className="text-sm text-gray-500">{userDetails?.email}</p>
                      </div>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Profile Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Account Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Ayushman Card Modal */}
      {showAyushmanCard && <AyushmanCard />}

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </>
  );
}