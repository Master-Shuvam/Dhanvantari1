// // components/ChatPage.jsx
// 'use client'
// import { useState } from 'react'
// import Sidebar from './SideBar'
// import ChatArea from './ChatArea'

// export default function ChatPage() {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: 'bot',
//       content: 'Hello! How can I help you today?',
//       timestamp: new Date()
//     }
//   ])
  
//   const [inputValue, setInputValue] = useState('')

//   const sendMessage = (content:any) => {
//     if (!content.trim()) return

//     // Add user message
//     const userMessage = {
//       id: Date.now(),
//       type: 'user',
//       content: content,
//       timestamp: new Date()
//     }

//     setMessages(prev => [...prev, userMessage])
//     setInputValue('')

//     // Simulate bot response
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         type: 'bot',
//         content: 'Thanks for your message! This is a demo response.',
//         timestamp: new Date()
//       }
//       setMessages(prev => [...prev, botMessage])
//     }, 1000)
//   }

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-[#48BFE3] to-[#80FFDB] overflow-hidden">
//       {/* Left Sidebar - 50% width */}
//       <div className="w-1/2 h-full">
//         <Sidebar />
//       </div>
      
//       {/* Right Chat Area - 50% width */}
//       <div className="w-1/2 h-full">
//         <ChatArea 
//           messages={messages}
//           inputValue={inputValue}
//           setInputValue={setInputValue}
//           onSendMessage={sendMessage}
//         />
//       </div>
//     </div>
//   )
// }