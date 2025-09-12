import React, { useState, useEffect } from 'react';
import { Brain, MapPin, Heart, Home, Activity, Stethoscope } from 'lucide-react';

const AnimatedBox = ({ delay, text, color, position }: any) => (
    <div
        className={`absolute w-16 h-16 ${color} rounded-lg shadow-lg flex items-center justify-center text-xs font-semibold text-white transform transition-all duration-1000 hover:scale-110 hover:rotate-3`}
        style={{
            left: position.x,
            top: position.y,
            animationDelay: `${delay}s`,
            animation: `float 3s ease-in-out infinite ${delay}s, pulse 2s ease-in-out infinite ${delay}s`
        }}
    >
        {text}
    </div>
);

const HeroSection = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, []);

    const handleGetStarted = () => {
        console.log('Get started clicked');
    };

    const handleCircleClick = () => {
        console.log('Redirecting to home page');
        // Simulate redirect to home page
    };

    const boxData = [
        { text: "Diagnose", color: "bg-gradient-to-br from-teal-400 to-teal-600", position: { x: "10%", y: "15%" }, delay: 0 },
        { text: "Predict", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", position: { x: "85%", y: "10%" }, delay: 0.5 },
        { text: "Monitor", color: "bg-gradient-to-br from-green-400 to-green-600", position: { x: "90%", y: "40%" }, delay: 1 },
        { text: "Analyze", color: "bg-gradient-to-br from-cyan-400 to-cyan-600", position: { x: "80%", y: "75%" }, delay: 1.5 },
        { text: "Treat", color: "bg-gradient-to-br from-blue-400 to-blue-600", position: { x: "45%", y: "85%" }, delay: 2 },
        { text: "Care", color: "bg-gradient-to-br from-indigo-400 to-indigo-600", position: { x: "15%", y: "80%" }, delay: 2.5 },
        { text: "Heal", color: "bg-gradient-to-br from-purple-400 to-purple-600", position: { x: "5%", y: "50%" }, delay: 3 },
        { text: "Support", color: "bg-gradient-to-br from-pink-400 to-pink-600", position: { x: "25%", y: "25%" }, delay: 3.5 },
        { text: "Guide", color: "bg-gradient-to-br from-rose-400 to-rose-600", position: { x: "70%", y: "20%" }, delay: 4 },
        { text: "Assist", color: "bg-gradient-to-br from-orange-400 to-orange-600", position: { x: "60%", y: "60%" }, delay: 4.5 },
        { text: "Connect", color: "bg-gradient-to-br from-amber-400 to-amber-600", position: { x: "30%", y: "65%" }, delay: 5 },
        { text: "Empower", color: "bg-gradient-to-br from-yellow-400 to-yellow-600", position: { x: "55%", y: "30%" }, delay: 5.5 },
    ];

    return (
        <>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes logoSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes circleGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 60px rgba(20, 184, 166, 0.6); }
        }
        
        .logo-spin {
          animation: logoSpin 20s linear infinite;
        }
        
        .circle-glow {
          animation: circleGlow 3s ease-in-out infinite;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-5 py-3 rounded-full text-sm font-semibold w-fit border border-teal-200">
                            <span>🚀</span>
                            <span>AI-Powered Healthcare</span>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h2 className="text-6xl lg:text-7xl font-extrabold text-gray-800 leading-none mb-2">
                                Your AI
                            </h2>
                            <h2 className="text-6xl lg:text-7xl font-extrabold text-gray-800 leading-none mb-2">
                                Healthcare
                            </h2>
                            <h2 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-none mb-4">
                                Companion
                            </h2>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent leading-none mb-1">
                                    Anytime,
                                </h3>
                                <h3 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent leading-none">
                                    Anywhere
                                </h3>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleGetStarted}
                            className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                        >
                            Start Your Health Journey
                        </button>
                    </div>

                    {/* Right Content - Interactive Circle with Demo Interface */}
                    <div className="relative min-h-[600px]">
                        {/* Animated Boxes around the circle */}
                        {boxData.map((box, index) => (
                            <AnimatedBox
                                key={index}
                                delay={box.delay}
                                text={box.text}
                                color={box.color}
                                position={box.position}
                            />
                        ))}

                        {/* Central Interactive Circle */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button
                                onClick={handleCircleClick}
                                className="w-64 h-64 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center circle-glow hover:scale-110 transform transition-all duration-500 border-4 border-white shadow-2xl group"
                            >
                                <div className="text-center text-white">
                                    <div className="logo-spin mb-2">
                                        <Activity className="w-16 h-16 mx-auto" />
                                    </div>
                                    <div className="text-2xl font-bold mb-1">HealthAI</div>
                                    <div className="text-sm opacity-80 group-hover:opacity-100">Click to Home</div>
                                </div>
                            </button>
                        </div>

                        {/* Demo Interface */}
                        <div className="absolute bottom-0 right-0 w-80">
                            <div className="bg-gradient-to-br from-white/95 to-white/80 rounded-3xl p-6 shadow-2xl border border-teal-200 backdrop-blur-lg relative overflow-hidden">
                                {/* Decorative gradient overlay */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 rounded-t-3xl" />

                                {/* AI Analysis Demo */}
                                <div className="flex flex-col gap-6 pt-2">
                                    <div className="flex items-center gap-3 text-teal-600">
                                        <Brain className="w-6 h-6" />
                                        <span className="font-semibold text-lg">AI Disease Prediction</span>
                                    </div>

                                    <div className="text-gray-500">
                                        <p className="text-base">Analyzing symptoms...</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200 shadow-sm">
                                        <p className="text-gray-700 font-semibold text-lg m-0">
                                            Fever, Headache, Fatigue
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 font-medium">Analysis Progress</span>
                                            <span className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                Analyzing
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-xl h-4 overflow-hidden shadow-inner">
                                            <div className="bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 h-full w-3/4 rounded-xl animate-pulse shadow-sm" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 pt-6 border-t border-gray-200">
                                        <MapPin className="w-5 h-5" />
                                        <span>Finding hospitals nearby...</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Heart Icon */}
                            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                                <Heart className="w-7 h-7 text-white fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;