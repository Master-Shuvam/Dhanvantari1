// // components/MessageBubble.jsx
// 'use client'
// import { useState } from 'react'

// export default function MessageBubble({ message }:any) {
//   const [isHovered, setIsHovered] = useState(false)
//   const isBot = message.type === 'bot'
  
//   const formatTime = (timestamp:any) => {
//     return new Date(timestamp).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     })
//   }

//   return (
//     <div
//       className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-end space-x-3`}>
//         {/* Avatar */}
//         <div className={`flex-shrink-0 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
//           {isBot ? (
//             <div className="w-8 h-8 bg-gradient-to-br from-[#48BFE3] to-[#64DFDF] rounded-full flex items-center justify-center shadow-lg">
//               <span className="text-white text-sm">🤖</span>
//             </div>
//           ) : (
//             <div className="w-8 h-8 bg-gradient-to-br from-[#72EFDD] to-[#80FFDB] rounded-full flex items-center justify-center shadow-lg">
//               <span className="text-white text-sm">👤</span>
//             </div>
//           )}
//         </div>

//         {/* Message Content */}
//         <div className="flex flex-col">
//           <div
//             className={`relative px-4 py-3 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
//               isBot
//                 ? 'bg-white border border-[#48BFE3] border-opacity-20 text-gray-800'
//                 : 'bg-gradient-to-r from-[#56CFE1] to-[#72EFDD] text-white'
//             } ${isHovered ? 'shadow-xl' : ''}`}
//           >
//             {/* Message bubble tail */}
//             <div
//               className={`absolute top-3 w-3 h-3 transform rotate-45 ${
//                 isBot
//                   ? 'bg-white border-l border-b border-[#48BFE3] border-opacity-20 -left-1.5'
//                   : 'bg-gradient-to-br from-[#56CFE1] to-[#72EFDD] -right-1.5'
//               }`}
//             />
            
//             <p className="text-sm leading-relaxed relative z-10">{message.content}</p>
            
//             {/* Subtle gradient overlay for bot messages */}
//             {isBot && (
//               <div className="absolute inset-0 bg-gradient-to-r from-[#48BFE3] to-transparent opacity-5 rounded-2xl"></div>
//             )}
//           </div>

//           {/* Timestamp */}
//           <div className={`mt-1 text-xs text-gray-500 ${isBot ? 'text-left' : 'text-right'}`}>
//             {formatTime(message.timestamp)}
//           </div>
//         </div>
//       </div>

//       {/* Message actions (appear on hover) */}
//       {isHovered && (
//         <div className={`flex items-center space-x-1 ml-2 animate-fade-in ${isBot ? 'order-last' : 'order-first mr-2 ml-0'}`}>
//           <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 opacity-70 hover:opacity-100">
//             <span className="text-xs">👍</span>
//           </button>
//           <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 opacity-70 hover:opacity-100">
//             <span className="text-xs">📋</span>
//           </button>
//           <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 opacity-70 hover:opacity-100">
//             <span className="text-xs">↩️</span>
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }