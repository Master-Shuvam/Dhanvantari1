'use client'
import { useState, useCallback, useRef } from 'react';
import { Message, ChatSession } from '../types';

export const useChat = () => {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: '1',
      title: 'Welcome Chat',
      lastMessage: 'Hello! How can I help you today?',
      timestamp: new Date().toLocaleTimeString(),
      messageCount: 1
    }
  ]);

  const [activeChatId, setActiveChatId] = useState<string>('1');
  const [messagesMap, setMessagesMap] = useState<Record<string, Message[]>>({
    '1': [
      {
        id: 1,
        text: 'Hello! I\'m your AI assistant. How can I help you today? Feel free to ask me anything - I can help with writing, analysis, coding, math, creative projects, and much more!',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      }
    ]
  });
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messageIdRef = useRef<number>(2);

  const getCurrentMessages = useCallback((): Message[] => {
    return messagesMap[activeChatId] || [];
  }, [messagesMap, activeChatId]);

  const generateBotResponse = useCallback((userMessage: string): string => {
    const responses = [
      "That's a great question! Let me help you with that. Here's what I think based on my analysis of your query...",
      "I understand what you're asking. This is actually a fascinating topic that I'm happy to explore with you. Let me break it down...",
      "Thanks for sharing that with me. Based on what you've told me, here's a comprehensive response that should address your concerns...",
      "That's an interesting point! I've processed your question and here's how I would approach this problem systematically...",
      "I'd be happy to help you with that. Let me provide you with a detailed explanation that covers all the important aspects...",
      "Great question! This touches on several important concepts that I think you'll find valuable to understand. Here's my analysis...",
      "I can definitely help with that. Let me give you a thorough explanation along with some practical examples to illustrate the concepts..."
    ];
    
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      return "Hello! It's wonderful to meet you. I'm here to assist with any questions or tasks you have. What would you like to explore together today?";
    }
    
    if (userMessage.toLowerCase().includes('help')) {
      return "I'd be delighted to help! I can assist with writing, research, analysis, coding, math problems, creative projects, brainstorming, and much more. What specific area interests you?";
    }
    
    if (userMessage.toLowerCase().includes('code') || userMessage.toLowerCase().includes('programming')) {
      return "Excellent! I love working with code. I can help with various programming languages, debug issues, explain concepts, write functions, review code, or help with entire projects. What programming challenge are you tackling?";
    }
    
    return responses[Math.floor(Math.random() * responses.length)] + " What specific aspect would you like me to focus on first?";
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messageIdRef.current++,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), userMessage]
    }));

    setChatSessions(prev => prev.map(session => 
      session.id === activeChatId 
        ? { 
            ...session, 
            lastMessage: text.trim().slice(0, 50) + (text.trim().length > 50 ? '...' : ''),
            timestamp: new Date().toLocaleTimeString(),
            messageCount: session.messageCount + 1
          }
        : session
    ));

    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: messageIdRef.current++,
        text: generateBotResponse(text),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessagesMap(prev => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), botResponse]
      }));

      setChatSessions(prev => prev.map(session => 
        session.id === activeChatId 
          ? { 
              ...session, 
              lastMessage: botResponse.text.slice(0, 50) + (botResponse.text.length > 50 ? '...' : ''),
              timestamp: botResponse.timestamp,
              messageCount: session.messageCount + 1
            }
          : session
      ));

      setIsTyping(false);
    }, Math.random() * 2000 + 1500);
  }, [activeChatId, generateBotResponse]);

  const createNewChat = useCallback(() => {
    const newChatId = Date.now().toString();
    const newSession: ChatSession = {
      id: newChatId,
      title: `New Chat ${chatSessions.length + 1}`,
      lastMessage: 'New conversation started',
      timestamp: new Date().toLocaleTimeString(),
      messageCount: 0
    };

    setChatSessions(prev => [newSession, ...prev]);
    setMessagesMap(prev => ({ ...prev, [newChatId]: [] }));
    setActiveChatId(newChatId);
  }, [chatSessions.length]);

  const selectChat = useCallback((chatId: string) => {
    setActiveChatId(chatId);
  }, []);

  const deleteChat = useCallback((chatId: string) => {
    if (chatSessions.length <= 1) return;

    setChatSessions(prev => prev.filter(session => session.id !== chatId));
    setMessagesMap(prev => {
      const newMap = { ...prev };
      delete newMap[chatId];
      return newMap;
    });

    if (activeChatId === chatId) {
      const remainingChats = chatSessions.filter(session => session.id !== chatId);
      setActiveChatId(remainingChats[0]?.id || '');
    }
  }, [chatSessions, activeChatId]);

  return {
    chatSessions,
    activeChatId,
    currentMessages: getCurrentMessages(),
    isTyping,
    sendMessage,
    createNewChat,
    selectChat,
    deleteChat
  };
};