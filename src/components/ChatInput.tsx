// // components/ChatInput.jsx
// 'use client'
// import { useState, useRef } from 'react'

// export default function ChatInput({ inputValue, setInputValue, onSendMessage }:any) {
//   const [isFocused, setIsFocused] = useState(false)
//   const [isRecording, setIsRecording] = useState(false)
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       onSendMessage(inputValue)
//     }
//   }

//   const handleKeyPress = (e:any) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault()
//       handleSend()
//     }
//   }

//   const adjustTextareaHeight = () => {
//     const textarea = textareaRef.current
//     if (textarea) {
//       textarea.style.height = 'auto'
//       textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
//     }
//   }

//   const handleInputChange = (e:any) => {
//     setInputValue(e.target.value)
//     adjustTextareaHeight()
//   }

//   const toggleRecording = () => {
//     setIsRecording(!isRecording)
//   }

//   return (
//     <div className="p-6 bg-white bg-opacity-70 backdrop-blur-md border-t border-[#48BFE3] border-opacity-20">
//       <div className="max-w-4xl mx-auto">
//         {/* Input Container */}
//         <div
//           className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 ${
//             isFocused
//               ? 'border-[#48BFE3] shadow-xl transform scale-105'
//               : 'border-gray-200 hover:border-[#48BFE3] hover:border-opacity-50'
//           }`}
//         >
//           {/* Animated gradient background */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#48BFE3] via-[#56CFE1] to-[#64DFDF] opacity-5 rounded-2xl"></div>
          
//           <div className="relative flex items-end p-4 space-x-4">
//             {/* Attachment Button */}
//             <button className="flex-shrink-0 p-2 rounded-xl bg-[#48BFE3] bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 group">
//               <svg className="w-5 h-5 text-[#48BFE3] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
//               </svg>
//             </button>

//             {/* Text Input */}
//             <div className="flex-1 relative">
//               <textarea
//                 ref={textareaRef}
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 placeholder="Type your message here..."
//                 className="w-full resize-none border-none outline-none bg-transparent text-gray-800 placeholder-gray-500 min-h-[24px] max-h-[120px] leading-6"
//                 rows={1}
//               />
              
//               {/* Typing indicator */}
//               {inputValue && (
//                 <div className="absolute bottom-0 right-0 flex space-x-1 animate-fade-in">
//                   <div className="w-1 h-1 bg-[#48BFE3] rounded-full animate-bounce"></div>
//                   <div className="w-1 h-1 bg-[#56CFE1] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                   <div className="w-1 h-1 bg-[#64DFDF] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                 </div>
//               )}
//             </div>

//             {/* Voice/Send Button */}
//             <div className="flex space-x-2">
//               {/* Voice Recording Button */}
//               <button
//                 onClick={toggleRecording}
//                 className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
//                   isRecording
//                     ? 'bg-red-500 shadow-lg animate-pulse'
//                     : 'bg-[#72EFDD] bg-opacity-10 hover:bg-opacity-20'
//                 }`}
//               >
//                 <svg
//                   className={`w-5 h-5 transition-colors duration-300 ${
//                     isRecording ? 'text-white' : 'text-[#72EFDD]'
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
//                 </svg>
//               </button>

//               {/* Send Button */}
//               <button
//                 onClick={handleSend}
//                 disabled={!inputValue.trim()}
//                 className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
//                   inputValue.trim()
//                     ? 'bg-gradient-to-r from-[#48BFE3] to-[#56CFE1] text-white shadow-lg hover:shadow-xl'
//                     : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                 }`}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Character Count */}
//           {inputValue.length > 0 && (
//             <div className="absolute -bottom-6 right-0 text-xs text-gray-400 animate-fade-in">
//               {inputValue.length}/1000
//             </div>
//           )}
//         </div>

//         {/* Quick Actions */}
//         <div className="flex justify-center space-x-4 mt-4">
//           {[
//             { icon: '✨', label: 'AI Suggest', color: '#48BFE3' },
//             { icon: '📊', label: 'Analyze', color: '#56CFE1' },
//             { icon: '🎨', label: 'Create', color: '#64DFDF' },
//             { icon: '🔍', label: 'Search', color: '#72EFDD' }
//           ].map((action, index) => (
//             <button
//               key={index}
//               className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 text-sm"
//               style={{ color: action.color }}
//             >
//               <span>{action.icon}</span>
//               <span className="hidden sm:inline">{action.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }