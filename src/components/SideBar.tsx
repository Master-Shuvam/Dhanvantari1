// // components/Sidebar.jsx
// 'use client'
// import { useState } from 'react'

// export default function Sidebar() {
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
//   const navItems = [
//     { id: 'home', icon: '🏠', label: 'Home' },
//     { id: 'chat', icon: '💬', label: 'Chat' },
//     { id: 'history', icon: '📝', label: 'History' },
//     { id: 'settings', icon: '⚙️', label: 'Settings' },
//     { id: 'profile', icon: '👤', label: 'Profile' }
//   ]

//   return (
//     <div className="h-full flex flex-col relative overflow-hidden">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#48BFE3] via-[#56CFE1] to-[#64DFDF] animate-pulse"></div>
      
//       {/* Floating geometric shapes for 3D effect */}
//       <div className="absolute top-10 left-10 w-20 h-20 bg-[#72EFDD] opacity-30 rounded-full animate-bounce"></div>
//       <div className="absolute top-40 right-8 w-16 h-16 bg-[#80FFDB] opacity-25 transform rotate-45 animate-spin"></div>
//       <div className="absolute bottom-32 left-6 w-12 h-12 bg-[#56CFE1] opacity-40 rounded-lg animate-pulse"></div>
      
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Header */}
//         <div className="p-8">
//           <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
//             <h1 className="text-2xl font-bold text-white mb-2">AI Assistant</h1>
//             <p className="text-white text-opacity-80 text-sm">Your intelligent companion</p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-8">
//           <div className="space-y-3">
//             {navItems.map((item) => (
//               <div
//                 key={item.id}
//                 className={`group relative cursor-pointer transform transition-all duration-300 hover:translate-x-2 ${
//                   hoveredItem === item.id ? 'scale-105' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredItem(item.id)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 shadow-lg">
//                   <div className="flex items-center space-x-4">
//                     <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </div>
//                     <span className="text-white font-medium group-hover:text-[#80FFDB] transition-colors duration-300">
//                       {item.label}
//                     </span>
//                   </div>
                  
//                   {/* Hover effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-r from-[#72EFDD] to-[#80FFDB] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
//                 </div>
                
//                 {/* 3D shadow effect */}
//                 <div className={`absolute inset-0 bg-black bg-opacity-10 rounded-xl transform translate-x-1 translate-y-1 -z-10 transition-all duration-300 ${
//                   hoveredItem === item.id ? 'translate-x-2 translate-y-2' : ''
//                 }`}></div>
//               </div>
//             ))}
//           </div>
//         </nav>

//         {/* Footer */}
//         <div className="p-8">
//           <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl p-4 shadow-lg">
//             <div className="flex items-center space-x-3">
//               <div className="w-3 h-3 bg-[#80FFDB] rounded-full animate-pulse"></div>
//               <span className="text-white text-sm font-medium">Online</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }