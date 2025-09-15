import { useState } from 'react';
import {
    HomeIcon,
    UserGroupIcon,
    MagnifyingGlassIcon,
    Cog6ToothIcon,
    SparklesIcon,
    CodeBracketIcon,
    ChartBarIcon,
    PencilSquareIcon,
    PlusIcon
} from '@heroicons/react/24/outline';

const suggestions = [
    {
        id: 1,
        title: "Content Strategy",
        category: "Marketing",
        description: "Get personalized content ideas for your social media",
        icon: SparklesIcon,
        color: "bg-gradient-to-r from-teal-400 to-cyan-400"
    },
    {
        id: 2,
        title: "Code Review",
        category: "Development",
        description: "Let me review your code and suggest improvements",
        icon: CodeBracketIcon,
        color: "bg-gradient-to-r from-teal-400 to-cyan-400"
    },
    {
        id: 3,
        title: "Data Analysis",
        category: "Analytics",
        description: "Analyze your data and generate insights",
        icon: ChartBarIcon,
        color: "bg-gradient-to-r from-teal-400 to-cyan-400"
    },
    {
        id: 4,
        title: "Writing Assistant",
        category: "Content",
        description: "Help with writing, editing, and proofreading",
        icon: PencilSquareIcon,
        color: "bg-gradient-to-r from-teal-400 to-cyan-400"
    }
];

export default function Sidebar({ onSuggestionClick }: any) {
    const [activeItem, setActiveItem] = useState('suggestions');

    const navigationItems = [
        { id: 'home', icon: HomeIcon, label: 'Home' },
        { id: 'suggestions', icon: SparklesIcon, label: 'AI Suggestions' },
        { id: 'search', icon: MagnifyingGlassIcon, label: 'Search' },
        { id: 'users', icon: UserGroupIcon, label: 'Users' },
        { id: 'settings', icon: Cog6ToothIcon, label: 'Settings' },
    ];

    return (
        <div className="w-[20vw] bg-white border-r border-gray-200 flex flex-col h-full">
            {/* Navigation */}
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">AI Assistant</h1>
                </div>

                <nav className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeItem === item.id
                                        ? 'bg-teal-50 text-teal-700 border border-teal-200'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* AI Suggestions */}
            {activeItem === 'suggestions' && (
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">AI Suggestions</h2>
                        <p className="text-sm text-gray-600">Discover what I can help you with</p>
                    </div>

                    <div className="space-y-3">
                        {suggestions.map((suggestion) => {
                            const Icon = suggestion.icon;
                            return (
                                <button
                                    key={suggestion.id}
                                    onClick={() => onSuggestionClick(suggestion)}
                                    className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all hover:shadow-sm text-left group"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className={`w-10 h-10 ${suggestion.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                                                    {suggestion.title}
                                                </h3>
                                                <span className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-700 rounded-full">
                                                    {suggestion.category}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {suggestion.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
                        <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-lg hover:from-teal-500 hover:to-cyan-500 transition-all">
                            <PlusIcon className="w-5 h-5" />
                            <span className="font-medium">Start New Chat</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}