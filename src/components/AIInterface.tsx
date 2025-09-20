"use client";
import { useEffect, useState } from 'react';
import Sidebar, { modelSelected } from './sections/Sidebar';
import Navbar from './layout/Navbar';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { Message } from '../types';
import HospitalRecommendations from '@/components/HospitalSection/HospitalRecommendations';
import ResizeHandle from '@/components/ResizeHandler';
import ChatContainer from './ChatContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import MedicalRecommendationSystem from './MedicalRecommendation';

export default function AIInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession();
    const [userId, setUserId] = useState<string>();
    const router = useRouter();
    const [selectedModel] = useAtom(modelSelected);

    // if (status == "unauthenticated") {
    //     router.push('/');
    // }

    useEffect(() => {
        setUserId(session?.user.id);
    }, [session])

    const handleSendMessage = async (content: any) => {
        const userMessage: Message = {
            type: 'user',
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            await simulateAIResponse(content);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                type: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const simulateAIResponse = async (userMessage: any) => {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const aiMessage: Message = {
            type: 'assistant',
            content: `Thanks for your message! I'm processing your request and will provide a helpful response. You said: "${userMessage}"`,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
    };

    const handleSuggestionClick = (suggestion: any) => {
        handleSendMessage(`I need help with ${suggestion.title.toLowerCase()}: ${suggestion.description}`);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Replace this with your actual Navbar component */}
            <Navbar />
            <div className="flex-1 overflow-hidden">
                <PanelGroup direction="horizontal">
                    {/* Sidebar Panel */}
                    <Panel defaultSize={20} minSize={20} maxSize={20}>
                        <Sidebar />
                    </Panel>

                    <ResizeHandle />

                    {/* Hospital Recommendations Panel */}
                    <Panel defaultSize={40} minSize={30} maxSize={50}>
                        {/* <HospitalRecommendations hospitalType='all' /> */}
                        <MedicalRecommendationSystem />
                    </Panel>

                    <ResizeHandle />

                    {/* Chat Area Panel */}
                    <Panel defaultSize={40} minSize={40}>
                        <ChatContainer userId={userId ?? ''} />
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
}