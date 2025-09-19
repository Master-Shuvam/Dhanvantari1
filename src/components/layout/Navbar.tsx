import {
  BellIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const { data: session } = useSession();
  const [userDetils, setUserDetails] = useState<any>();

  useEffect(() => {
    if (session?.user) {
      console.log(session.user);
      setUserDetails(session.user);
    }
  }, [session]);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8 ">
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

          {/* Right side - Emergency button, notifications, and profile */}
          <div className="flex items-center space-x-3">
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
              <button className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                  {userDetils?.image == null ?
                    <UserIcon className="w-4 h-4 text-white" /> :
                    <img className='rounded-2xl' src={userDetils.image} />
                  }
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-medium text-gray-900">{userDetils?.name}</p>
                  <p className="text-xs text-gray-500">{userDetils?.email}</p>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}