import React from 'react';
import { Brain, MapPin, Heart, Sparkles, Activity } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <>
      {/* Custom animations and styles */}
      {/* <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.6); }
        }
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 85%; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          75% { transform: translateY(-5px) rotate(-3deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 3s infinite;
          z-index: 1;
        }
        .progress-animate {
          animation: progress-fill 2s ease-out infinite;
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style> */}

      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-emerald-900/20 z-10" />

        {/* Main Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 min-h-screen flex items-center">
          {/* Glass Container */}
          <div className="w-full bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 p-8 md:p-16 shadow-2xl shimmer">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-xl text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold border border-teal-500/30 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <span>AI-Powered Healthcare Revolution</span>
                </div>

                {/* Main Heading with Enhanced Typography */}
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight">
                    Your AI
                  </h1>
                  <h1 className="text-5xl md:text-7xl font-black text-gray-800 leading-tight">
                    Healthcare
                  </h1>
                  <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent leading-tight gradient-animate">
                    Companion
                  </h1>
                  <div className="mt-4">
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-tight gradient-animate">
                      Anytime,
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-tight gradient-animate">
                      Anywhere
                    </h2>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 font-medium max-w-lg leading-relaxed">
                  Experience the future of healthcare with AI-powered diagnosis, personalized treatment plans, and 24/7 medical guidance.
                </p>

                {/* Enhanced CTA Button */}
                <button
                  onClick={onGetStarted}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Activity className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Your Health Journey</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </button>
              </div>

              {/* Right Content - Enhanced Demo Interface */}
              <div className="relative">
                {/* Main Demo Card */}
                <div className="relative bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-3xl rounded-[2rem] p-8 shadow-2xl border border-white/30 overflow-hidden">
                  
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 rounded-t-[2rem]" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 text-teal-600">
                      <div className="p-2 bg-teal-500/20 rounded-xl backdrop-blur-sm">
                        <Brain className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-bold">AI Disease Prediction</span>
                      <div className="flex-1" />
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                    </div>

                    {/* Status */}
                    <div className="text-gray-600 font-medium">
                      <p className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        Analyzing symptoms...
                      </p>
                    </div>

                    {/* Symptom Card */}
                    <div className="bg-gradient-to-br from-slate-50/80 to-slate-100/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg">
                      <p className="text-gray-800 font-bold text-lg">
                        🤒 Fever, Headache, Fatigue
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <Activity className="w-4 h-4" />
                        <span>Severity: Moderate</span>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold">Analysis Progress</span>
                        <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          Processing...
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200/70 backdrop-blur-sm rounded-full h-4 overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 rounded-full progress-animate shadow-lg" 
                             style={{ animationDelay: '0.5s' }} />
                      </div>
                    </div>

                    {/* Location Finding */}
                    <div className="flex items-center gap-3 text-gray-600 pt-4 border-t border-white/20">
                      <MapPin className="w-5 h-5 text-blue-500 animate-pulse" />
                      <span className="font-medium">Finding hospitals nearby...</span>
                      <div className="flex gap-1 ml-auto">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Heart Icon */}
                <div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/40 border border-white/20"
                  style={{ animation: 'bounce-gentle 3s ease-in-out infinite' }}
                >
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>

                {/* Additional Floating Elements */}
                <div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-xl border border-white/20"
                  style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                
                <div 
                  className="absolute top-1/3 -right-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg border border-white/20"
                  style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}
                >
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;