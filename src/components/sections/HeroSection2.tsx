import React from 'react';
import { Brain, MapPin, Heart, Sparkles, Activity } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-emerald-900/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 z-10 animate-pulse" />

        {/* Floating Glass Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 shadow-2xl floating-orb-1 z-15" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-teal-500/20 backdrop-blur-3xl rounded-full border border-teal-300/30 shadow-2xl floating-orb-2 z-15" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-emerald-500/20 backdrop-blur-3xl rounded-full border border-emerald-300/30 shadow-2xl floating-orb-3 z-15" />

        {/* Main Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 min-h-screen flex items-center">
          {/* Liquid Glass Container */}
          <div className="w-full relative overflow-hidden">
            {/* Main Glass Panel */}
            <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/20 p-8 md:p-16 shadow-2xl liquid-glass-container">
              
              {/* Animated Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-[3rem] shimmer-effect" />
              
              {/* Liquid Distortion Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 backdrop-blur-3xl rounded-full blur-2xl liquid-blob-1" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 backdrop-blur-3xl rounded-full blur-3xl liquid-blob-2" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Enhanced Badge with Liquid Effect */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 backdrop-blur-2xl text-white px-6 py-3 rounded-full text-sm font-semibold border border-teal-300/40 shadow-2xl liquid-badge">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-pulse text-teal-200" />
                    </div>
                    <span className="text-white/90">AI-Powered Healthcare Revolution</span>
                  </div>

                  {/* Main Heading with Liquid Glass Typography */}
                  <div className="space-y-2">
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                      Your AI
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                      Healthcare
                    </h1>
                    <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent leading-tight gradient-animate drop-shadow-2xl">
                      Companion
                    </h1>
                    <div className="mt-4">
                      <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent leading-tight gradient-animate drop-shadow-xl">
                        Anytime,
                      </h2>
                      <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent leading-tight gradient-animate drop-shadow-xl">
                        Anywhere
                      </h2>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xl text-white/80 font-medium max-w-lg leading-relaxed drop-shadow-lg">
                    Experience the future of healthcare with AI-powered diagnosis, personalized treatment plans, and 24/7 medical guidance.
                  </p>

                  {/* Enhanced Liquid Glass CTA Button */}
                  <button
                    onClick={onGetStarted}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/80 to-emerald-600/80 hover:from-teal-400/90 hover:to-emerald-500/90 backdrop-blur-xl text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 overflow-hidden liquid-button"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Activity className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Start Your Health Journey</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
                  </button>
                </div>

                {/* Right Content - Enhanced Liquid Glass Demo Interface */}
                <div className="relative">
                  {/* Main Demo Card with Liquid Glass Effect */}
                  <div className="relative bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-3xl rounded-[2rem] p-8 shadow-2xl border border-white/30 overflow-hidden liquid-demo-card">
                    
                    {/* Flowing Liquid Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-t-[2rem] liquid-flow" />
                    
                    {/* Internal Liquid Blobs */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-400/40 to-emerald-500/40 rounded-full blur-xl liquid-internal-1" />
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-lg liquid-internal-2" />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 text-white">
                        <div className="p-2 bg-teal-400/30 backdrop-blur-sm rounded-xl border border-teal-300/40">
                          <Brain className="w-6 h-6 text-teal-200" />
                        </div>
                        <span className="text-lg font-bold">AI Disease Prediction</span>
                        <div className="flex-1" />
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                      </div>

                      {/* Status */}
                      <div className="text-white/80 font-medium">
                        <p className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                          Analyzing symptoms...
                        </p>
                      </div>

                      {/* Symptom Card */}
                      <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/30 shadow-xl">
                        <p className="text-white font-bold text-lg">
                          🤒 Fever, Headache, Fatigue
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                          <Activity className="w-4 h-4" />
                          <span>Severity: Moderate</span>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">Analysis Progress</span>
                          <span className="bg-gradient-to-r from-teal-400/80 to-emerald-500/80 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20">
                            Processing...
                          </span>
                        </div>
                        
                        {/* Liquid Progress Bar */}
                        <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-4 overflow-hidden shadow-inner border border-white/30">
                          <div className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-full progress-animate shadow-lg liquid-progress" 
                               style={{ animationDelay: '0.5s' }} />
                        </div>
                      </div>

                      {/* Location Finding */}
                      <div className="flex items-center gap-3 text-white/80 pt-4 border-t border-white/20">
                        <MapPin className="w-5 h-5 text-cyan-400 animate-pulse" />
                        <span className="font-medium">Finding hospitals nearby...</span>
                        <div className="flex gap-1 ml-auto">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Liquid Glass Elements */}
                  <div 
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400/80 to-rose-500/80 backdrop-blur-2xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 liquid-heart"
                  >
                    <Heart className="w-8 h-8 text-white fill-current drop-shadow-lg" />
                  </div>

                  <div 
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400/80 to-teal-500/80 backdrop-blur-2xl rounded-xl flex items-center justify-center shadow-xl border border-white/20 liquid-sparkle"
                  >
                    <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                  
                  <div 
                    className="absolute top-1/3 -right-8 w-8 h-8 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-lg border border-white/20 liquid-dot"
                  >
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes liquid-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        
        @keyframes liquid-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
        }
        
        @keyframes liquid-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 85%; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floating-orb-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          66% { transform: translateY(10px) translateX(-15px) scale(0.9); }
        }
        
        @keyframes floating-orb-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-25px) translateX(-20px) scale(1.2); }
        }
        
        @keyframes floating-orb-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-10px) translateX(15px) scale(1.1); }
          75% { transform: translateY(15px) translateX(-10px) scale(0.9); }
        }

        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 4s infinite;
          z-index: 1;
        }
        
        .liquid-glass-container {
          backdrop-filter: blur(25px);
          background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
          box-shadow: 0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        
        .liquid-demo-card {
          backdrop-filter: blur(30px);
          animation: liquid-float 6s ease-in-out infinite;
        }
        
        .liquid-badge {
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(20, 184, 166, 0.3);
        }
        
        .liquid-button {
          backdrop-filter: blur(15px);
          box-shadow: 0 15px 35px rgba(20, 184, 166, 0.4);
        }
        
        .liquid-heart {
          animation: liquid-pulse 4s ease-in-out infinite;
        }
        
        .liquid-sparkle {
          animation: liquid-float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .liquid-dot {
          animation: liquid-pulse 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .liquid-flow {
          background-size: 200% 200%;
          animation: liquid-flow 3s ease infinite;
        }
        
        .liquid-progress {
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.6);
        }
        
        .liquid-blob-1 {
          animation: liquid-pulse 8s ease-in-out infinite;
        }
        
        .liquid-blob-2 {
          animation: liquid-pulse 10s ease-in-out infinite reverse;
        }
        
        .liquid-internal-1 {
          animation: liquid-float 7s ease-in-out infinite;
        }
        
        .liquid-internal-2 {
          animation: liquid-pulse 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .floating-orb-1 {
          animation: floating-orb-1 12s ease-in-out infinite;
        }
        
        .floating-orb-2 {
          animation: floating-orb-2 10s ease-in-out infinite;
        }
        
        .floating-orb-3 {
          animation: floating-orb-3 14s ease-in-out infinite;
        }
        
        .progress-animate {
          animation: progress-fill 3s ease-out infinite;
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

      
        .liquid-glass-container::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, rgba(255,255,255,0.3), transparent, rgba(20, 184, 166, 0.3));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
      `}</style>
       */}
    </>
  );
};

export default HeroSection;