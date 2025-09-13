import React from 'react';
import { Brain, MapPin, AlertTriangle, Globe, Phone, Wifi } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain />,
      title: 'AI Disease Prediction',
      description: 'Advanced ML models analyze symptoms to predict probable diseases with high accuracy and provide personalized health insights',
      iconBgColor: 'bg-gradient-to-br from-teal-100 to-teal-200',
      iconColor: 'text-teal-600',
      glowColor: 'shadow-teal-200/50',
      cardGlow: 'hover:shadow-teal-100/30',
    },
    {
      icon: <MapPin />,
      title: 'Hospital Recommendations',
      description: 'Find verified hospitals nearby with specializations, contact details, real-time availability, and turn-by-turn directions',
      iconBgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      iconColor: 'text-blue-600',
      glowColor: 'shadow-blue-200/50',
      cardGlow: 'hover:shadow-blue-100/30',
    },
    {
      icon: <AlertTriangle />,
      title: 'Emergency Alerts',
      description: 'Immediate guidance for critical cases with direct ambulance service connections and emergency contact integration',
      iconBgColor: 'bg-gradient-to-br from-rose-100 to-rose-200',
      iconColor: 'text-rose-600',
      glowColor: 'shadow-rose-200/50',
      cardGlow: 'hover:shadow-rose-100/30',
    },
    {
      icon: <Globe />,
      title: 'Multilingual Support',
      description: 'Available in English, Hindi, Bengali, Tamil, Telugu, Marathi, and more Indian regional languages for better accessibility',
      iconBgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      iconColor: 'text-purple-600',
      glowColor: 'shadow-purple-200/50',
      cardGlow: 'hover:shadow-purple-100/30',
    },
    {
      icon: <Phone />,
      title: 'Voice Interaction',
      description: 'Speak your symptoms naturally using advanced voice recognition. Our AI understands context and medical terminology perfectly',
      iconBgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
      iconColor: 'text-emerald-600',
      glowColor: 'shadow-emerald-200/50',
      cardGlow: 'hover:shadow-emerald-100/30',
    },
    {
      icon: <Wifi />,
      title: 'Offline Mode',
      description: 'Works seamlessly even with poor internet connectivity using intelligent local database storage and smart caching',
      iconBgColor: 'bg-gradient-to-br from-slate-100 to-slate-200',
      iconColor: 'text-slate-600',
      glowColor: 'shadow-slate-200/50',
      cardGlow: 'hover:shadow-slate-100/30',
    },
  ];

  return (
    <section className="relative py-2 px-2 bg-gradient-to-br overflow-hidden">
      <div className='m-10 bg-gradient-to-br from-slate-900/40 via-transparent to-emerald-900/30 z-10 p-4 rounded-3xl shadow-4xl'>

        {/* Light Animated Background Blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/40 to-emerald-300/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-16 w-40 h-40 bg-gradient-to-bl from-blue-200/30 to-cyan-300/25 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-tr from-purple-200/35 to-pink-300/30 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-tl from-emerald-200/25 to-teal-300/30 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '2s' }} />

        {/* Floating Light Glass Orbs */}
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full border border-white/80 shadow-lg animate-float" />
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-teal-100/60 backdrop-blur-sm rounded-full border border-teal-200/60 shadow-md animate-float"
          style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 ">
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Light Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/80 to-teal-50/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-full text-sm font-semibold border border-teal-200/50 shadow-lg mb-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span>✨ Powerful Features</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* <div className='border-white/60'> */}

            {/* Main Title */}
            <h3 className="text-5xl md:text-6xl font-black text-slate-800 mb-4 leading-tight">
              Advanced Healthcare
            </h3>
            <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent leading-tight mb-8">
              Solutions
            </h3>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience the future of healthcare with AI-powered diagnosis, multilingual support,
              and 24/7 accessibility designed specifically for Indian healthcare needs
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${feature.cardGlow} overflow-hidden`}
              >
                {/* Light Internal Glow */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-md opacity-60" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-slate-100/40 to-transparent rounded-full blur-sm opacity-40" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${feature.iconBgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center ${feature.glowColor} shadow-lg border border-white/40 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-8 h-8 ${feature.iconColor}`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Light Glowing Ring */}
                  <div className={`absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm ${feature.iconBgColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Light Border Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${feature.iconBgColor} blur-sm -z-10`} />
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}

        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
              }
              }
              
              .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      </div>
    </section>
  );
};