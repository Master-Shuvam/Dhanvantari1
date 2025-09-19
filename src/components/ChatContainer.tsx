import { useState, useEffect } from 'react';
import ChatArea from './ChatArea'; // Import your updated ChatArea component

// Types
interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

interface User {
  id: string;
  email: string;
  name?: string;
  age?: number;
  gender?: string;
}

interface ChatContainerProps {
  userId: string; // This should come from your auth system
}

export default function ChatContainer({ userId }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Load user profile and chat history on component mount
  useEffect(() => {
    if (userId) {
      loadUserProfile();
      loadChatHistory();
    }
  }, [userId]);

  // Load user profile from PostgreSQL
  const loadUserProfile = async () => {
    try {
      const response = await fetch(`/api/user/profile?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  // Load chat history from MongoDB
  const loadChatHistory = async () => {
    try {
      const response = await fetch(`/api/chat/history?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        }
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  // Send message to backend
  const handleSendMessage = async (content: string) => {
    if (!userId || !content.trim()) return;

    // Add user message immediately for better UX
    const userMessage: Message = {
      id: `temp-${Date.now()}`,
      content,
      type: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          userId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      if (data.success) {
        // Replace temp user message with the one from server and add AI response
        setMessages(prev => {
          const filtered = prev.filter(m => m.id !== userMessage.id);
          return [
            ...filtered,
            {
              id: `user-${Date.now()}`,
              content,
              type: 'user' as const,
              timestamp: new Date(),
            },
            {
              id: data.message.id,
              content: data.message.content,
              type: 'assistant' as const,
              timestamp: new Date(data.message.timestamp),
            },
          ];
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Remove the temporary message on error
      setMessages(prev => prev.filter(m => m.id !== userMessage.id));
      
      // Show error message
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: 'Sorry, I encountered an error. Please try again.',
        type: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Optional: User info bar */}
      {user && (
        <div className="bg-teal-50 border-b border-teal-200 px-4 py-2">
          <p className="text-sm text-teal-800">
            Welcome, {user.name || 'User'}! 
            {user.age && ` (Age: ${user.age})`}
            {user.gender && ` (${user.gender})`}
          </p>
        </div>
      )}
      
      {/* Chat Area */}
      <ChatArea
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        userId={userId}
      />
    </div>
  );
}

// Example usage in your main app component:
export function App() {
  const [currentUserId, setCurrentUserId] = useState<string>(''); // Get this from your auth system
  
  // This would typically come from your authentication context/hook
  useEffect(() => {
    // Example: Get user ID from your auth system
    const getUserId = async () => {
      // Replace with your actual auth logic
      const userId = localStorage.getItem('userId') || 'demo-user-123';
      setCurrentUserId(userId);
    };
    
    getUserId();
  }, []);

  if (!currentUserId) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <ChatContainer userId={currentUserId} />
    </div>
  );
}