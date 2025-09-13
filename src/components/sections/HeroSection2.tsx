import React, { useState } from 'react';
import { Brain, MapPin, Heart, Sparkles, Activity, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { signIn } from "next-auth/react"

interface HeroSectionProps {
  onGetStarted: () => void;
  showAuth?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, showAuth = false }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    signIn('google')
    console.log('Google sign-in clicked');
  };

  // Auth Form Component
  const AuthForm = () => (
    <div className="relative bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-3xl rounded-[2rem] p-8 shadow-2xl border border-white/30 overflow-hidden liquid-demo-card">
      {/* Flowing Liquid Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-t-[2rem] liquid-flow" />

      {/* Internal Liquid Blobs */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-400/40 to-emerald-500/40 rounded-full blur-xl liquid-internal-1" />
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-lg liquid-internal-2" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-white/70">
            {isSignUp ? 'Start your health journey with us' : 'Sign in to continue your health journey'}
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Full Name - Only for Sign Up */}
          {isSignUp && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl pl-12 pr-12 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password - Only for Sign Up */}
          {isSignUp && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-all"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-teal-500/80 to-emerald-600/80 hover:from-teal-400/90 hover:to-emerald-500/90 backdrop-blur-xl text-white py-3 rounded-xl font-semibold shadow-lg border border-white/20 transform hover:scale-[1.02] transition-all duration-300"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/60 text-sm">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        {/* Toggle Sign In/Sign Up */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-teal-300 hover:text-teal-200 font-medium ml-2 transition-colors"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // AI Prediction Demo Component (original)
  const AIPredictionDemo = () => (
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
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
          <p className="flex items-center gap-2">
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
  );

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
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

                {/* Right Content - Conditional Rendering */}
                <div className="relative">
                  {/* Render Auth Form or AI Prediction Demo based on showAuth prop */}
                  {showAuth ? <AuthForm /> : <AIPredictionDemo />}

                  {/* Floating Liquid Glass Elements - Only show when not in auth mode */}
                  {!showAuth && (
                    <>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400/80 to-rose-500/80 backdrop-blur-2xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 liquid-heart">
                        <Heart className="w-8 h-8 text-white fill-current drop-shadow-lg" />
                      </div>

                      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400/80 to-teal-500/80 backdrop-blur-2xl rounded-xl flex items-center justify-center shadow-xl border border-white/20 liquid-sparkle">
                        <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
                      </div>

                      <div className="absolute top-1/3 -right-8 w-8 h-8 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-lg border border-white/20 liquid-dot">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-sm" />
                      </div>
                    </>
                  )}
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
      `}</style> */}
    </>
  );
};

export default HeroSection;