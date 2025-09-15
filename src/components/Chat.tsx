// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Home,
//     Users,
//     Search,
//     Settings,
//     Sparkles,
//     Code,
//     BarChart3,
//     PenTool,
//     Send,
//     MessageSquare,
//     Lightbulb,
//     Zap,
//     Stethoscope,
//     Activity,
//     Heart,
//     Brain,
//     Shield
// } from 'lucide-react';

// // Animated Background Component
// const AnimatedBackground = () => (
//     <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-emerald-400/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//     </div>
// );

// // Sidebar Component
// const Sidebar = () => {
//     const sidebarItems = [
//         { icon: Home, active: true },
//         { icon: MessageSquare, active: false },
//         { icon: Users, active: false },
//         { icon: Search, active: false },
//         { icon: Settings, active: false }
//     ];

//     return (
//         <div className="w-20 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-6 space-y-6 relative z-10 shadow-lg">
//             <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl">
//                 <Stethoscope className="w-6 h-6 text-white" />
//             </div>

//             <div className="space-y-3">
//                 {sidebarItems.map((item, index) => (
//                     <SidebarItem key={index} item={item} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Sidebar Item Component
// const SidebarItem = ({ item }: any) => (
//     <div
//         className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 ${item.active
//                 ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
//                 : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
//             }`}
//     >
//         <item.icon className="w-5 h-5" />
//     </div>
// );

// // Suggestion Card Component
// const SuggestionCard = ({ suggestion, index, isSelected, onSelect }: any) => (
//     <div
//         className={`p-5 rounded-2xl border border-white/10 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group relative overflow-hidden bg-white/5 backdrop-blur-sm ${isSelected ? 'ring-2 ring-teal-400/50 shadow-lg bg-white/10' : 'hover:bg-white/10'
//             }`}
//         onClick={() => onSelect(index)}
//     >
//         <div className={`absolute inset-0 bg-gradient-to-r ${suggestion.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

//         <div className="relative z-10">
//             <div className="flex items-start space-x-4">
//                 <div className={`w-12 h-12 bg-gradient-to-r ${suggestion.gradient} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all duration-300`}>
//                     <suggestion.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                     <div className="flex items-center space-x-2 mb-2">
//                         <h3 className="font-semibold text-white truncate">{suggestion.title}</h3>
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${suggestion.gradient} text-white shadow-sm`}>
//                             {suggestion.category}
//                         </span>
//                     </div>
//                     <p className="text-sm text-gray-400 leading-relaxed">{suggestion.description}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// // Quick Actions Component
// const QuickActions = () => {
//     const actions = ['New Chat', 'Health Report', 'Symptoms Check', 'Settings'];

//     return (
//         <div className="pt-4 border-t border-white/10">
//             <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
//                 <Zap className="w-4 h-4 mr-2 text-teal-400" />
//                 Quick Actions
//             </h3>
//             <div className="grid grid-cols-2 gap-2">
//                 {actions.map((action, index) => (
//                     <QuickActionButton key={index} action={action} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Quick Action Button Component
// const QuickActionButton = ({ action }: any) => (
//     <button className="p-3 text-sm font-medium text-gray-300 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200 hover:shadow-md transform hover:scale-[1.02]">
//         {action}
//     </button>
// );

// // AI Suggestions Panel Component
// const SuggestionsPanel = () => {
//     const [selectedSuggestion, setSelectedSuggestion] = useState(null);

//     const suggestions = [
//         {
//             title: "Health Analysis",
//             category: "Medical",
//             description: "Get AI-powered health insights and symptom analysis",
//             icon: Activity,
//             gradient: "from-teal-500 to-cyan-500"
//         },
//         {
//             title: "Medical Records",
//             category: "Data",
//             description: "Organize and analyze your medical history and reports",
//             icon: BarChart3,
//             gradient: "from-emerald-500 to-teal-500"
//         },
//         {
//             title: "Treatment Plans",
//             category: "Planning",
//             description: "Personalized treatment recommendations and care plans",
//             icon: Heart,
//             gradient: "from-rose-500 to-pink-500"
//         },
//         {
//             title: "Health Assistant",
//             category: "Support",
//             description: "24/7 medical guidance and health-related questions",
//             icon: Brain,
//             gradient: "from-purple-500 to-indigo-500"
//         }
//     ];

//     const handleSuggestionSelect = (index: any) => {
//         setSelectedSuggestion(selectedSuggestion === index ? null : index);
//     };

//     return (
//         <div className="w-96 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 relative z-10">
//             <div className="space-y-6">
//                 <SuggestionsPanelHeader />

//                 <div className="space-y-4">
//                     {suggestions.map((suggestion, index) => (
//                         <SuggestionCard
//                             key={index}
//                             suggestion={suggestion}
//                             index={index}
//                             isSelected={selectedSuggestion === index}
//                             onSelect={handleSuggestionSelect}
//                         />
//                     ))}
//                 </div>

//                 <QuickActions />
//             </div>
//         </div>
//     );
// };

// // Suggestions Panel Header Component
// const SuggestionsPanelHeader = () => (
//     <div className="flex items-center space-x-3">
//         <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-md">
//             <Sparkles className="w-5 h-5 text-white" />
//         </div>
//         <div>
//             <h2 className="text-xl font-bold text-white">
//                 AI Suggestions
//             </h2>
//             <p className="text-sm text-gray-400">Discover what I can help you with</p>
//         </div>
//     </div>
// );

// // Message Component
// const Message = ({ message, index }: any) => (
//     <div
//         className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} transform animate-fadeInUp`}
//         style={{ animationDelay: `${index * 0.1}s` }}
//     >
//         <div className="flex items-start space-x-3 max-w-2xl">
//             {message.type === 'ai' && <MessageAvatar type="ai" />}
//             <div className="space-y-1">
//                 <div className={`px-4 py-3 rounded-2xl shadow-sm ${getMessageStyles(message.type)}`}>
//                     <p className="text-sm leading-relaxed">{message.content}</p>
//                 </div>
//                 <p className="text-xs text-gray-500 px-2">{message.time}</p>
//             </div>
//             {message.type === 'user' && <MessageAvatar type="user" />}
//         </div>
//     </div>
// );

// // Message Avatar Component
// const MessageAvatar = ({ type }: any) => (
//     <div className={`w-8 h-8 ${getAvatarStyles(type)} rounded-full flex items-center justify-center shadow-md flex-shrink-0`}>
//         <span className="text-white text-sm font-semibold">
//             {type === 'ai' ? 'AI' : 'You'}
//         </span>
//     </div>
// );

// // Message Input Component
// const MessageInput = ({ message, setMessage, onSend }: any) => (
//     <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 p-4 shadow-lg">
//         <div className="flex items-center space-x-3">
//             <div className="flex-1 relative">
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && onSend()}
//                     placeholder="Type your message..."
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent placeholder-gray-400 text-white shadow-sm backdrop-blur-sm transition-all duration-200"
//                 />
//             </div>
//             <button
//                 onClick={onSend}
//                 className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 hover:from-teal-600 hover:to-cyan-600"
//             >
//                 <Send className="w-5 h-5 text-white" />
//             </button>
//         </div>
//     </div>
// );

// // Chat Header Component
// const ChatHeader = () => (
//     <div className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-4 shadow-sm">
//         <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
//                     <span className="text-white font-semibold">AI</span>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold text-white">AI Assistant</h3>
//                     <div className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                         <p className="text-sm text-gray-400">Online • Ready to help</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-right">
//                 <p className="text-sm font-medium text-white">You</p>
//             </div>
//         </div>
//     </div>
// );

// // Chat Area Component
// const ChatArea = ({ messages, message, setMessage, onSendMessage, messagesEndRef }: any) => (
//     <div className="flex-1 flex flex-col relative z-10">
//         <ChatHeader />

//         <div className="flex-1 overflow-y-auto p-6 space-y-4">
//             {messages.map((msg:any, index:any) => (
//                 <Message key={index} message={msg} index={index} />
//             ))}
//             <div ref={messagesEndRef} />
//         </div>

//         <MessageInput
//             message={message}
//             setMessage={setMessage}
//             onSend={onSendMessage}
//         />
//     </div>
// );

// // Helper Functions
// const getMessageStyles = (type: any) => {
//     return type === 'user'
//         ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
//         : 'bg-white/10 backdrop-blur-sm text-white border border-white/20';
// };

// const getAvatarStyles = (type: any) => {
//     return type === 'ai'
//         ? 'bg-gradient-to-r from-teal-500 to-cyan-500'
//         : 'bg-gradient-to-r from-teal-600 to-cyan-600';
// };

// // Custom Styles Component
// const CustomStyles = () => (
//     <style jsx>{`
//     @keyframes fadeInUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
    
//     .animate-fadeInUp {
//       animation: fadeInUp 0.6s ease-out forwards;
//     }
    
//     .animation-delay-2000 {
//       animation-delay: 2s;
//     }
    
//     .animation-delay-4000 {
//       animation-delay: 4s;
//     }
//   `}</style>
// );

// // Main App Component
// const DhanvantariAssistant = () => {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([
//         {
//             type: 'ai',
//             content: "Thanks for your message! I'm processing your request and will provide a helpful response.",
//             time: '13:36'
//         },
//         {
//             type: 'ai',
//             content: "Thanks for your message! I'm processing your request and will provide a helpful response.",
//             time: '13:36'
//         }
//     ]);
//     const messagesEndRef = useRef<HTMLDivElement>(null);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const sendMessage = () => {
//         if (message.trim()) {
//             const newMessage = {
//                 type: 'user',
//                 content: message,
//                 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//             };

//             setMessages(prev => [...prev, newMessage]);
//             setMessage('');

//             // Simulate AI response
//             setTimeout(() => {
//                 setMessages(prev => [...prev, {
//                     type: 'ai',
//                     content: "I understand your request. Let me help you with that right away!",
//                     time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                 }]);
//             }, 1000);
//         }
//     };

//     return (
//         <div className="flex h-screen overflow-hidden relative">
//             <AnimatedBackground />
//             <Sidebar />

//             <div className="flex-1 flex">
//                 <SuggestionsPanel />
//                 <ChatArea
//                     messages={messages}
//                     message={message}
//                     setMessage={setMessage}
//                     onSendMessage={sendMessage}
//                     messagesEndRef={messagesEndRef}
//                 />
//             </div>

//             <CustomStyles />
//         </div>
//     );
// };

// export default DhanvantariAssistant;