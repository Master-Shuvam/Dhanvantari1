import React from 'react';
import { Brain, MapPin, AlertTriangle, Globe, Phone, Wifi } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain />,
      title: 'AI Disease Prediction',
      description: 'Advanced ML models analyze symptoms to predict probable diseases with high accuracy and provide personalized health insights',
      iconBgColor: 'rgba(20, 184, 166, 0.2)',
      iconColor: '#14b8a6',
      glowColor: 'rgba(20, 184, 166, 0.3)',
    },
    {
      icon: <MapPin />,
      title: 'Hospital Recommendations',
      description: 'Find verified hospitals nearby with specializations, contact details, real-time availability, and turn-by-turn directions',
      iconBgColor: 'rgba(59, 130, 246, 0.2)',
      iconColor: '#3b82f6',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
    {
      icon: <AlertTriangle />,
      title: 'Emergency Alerts',
      description: 'Immediate guidance for critical cases with direct ambulance service connections and emergency contact integration',
      iconBgColor: 'rgba(239, 68, 68, 0.2)',
      iconColor: '#ef4444',
      glowColor: 'rgba(239, 68, 68, 0.3)',
    },
    {
      icon: <Globe />,
      title: 'Multilingual Support',
      description: 'Available in English, Hindi, Bengali, Tamil, Telugu, Marathi, and more Indian regional languages for better accessibility',
      iconBgColor: 'rgba(168, 85, 247, 0.2)',
      iconColor: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      icon: <Phone />,
      title: 'Voice Interaction',
      description: 'Speak your symptoms naturally using advanced voice recognition. Our AI understands context and medical terminology perfectly',
      iconBgColor: 'rgba(34, 197, 94, 0.2)',
      iconColor: '#22c55e',
      glowColor: 'rgba(34, 197, 94, 0.3)',
    },
    {
      icon: <Wifi />,
      title: 'Offline Mode',
      description: 'Works seamlessly even with poor internet connectivity using intelligent local database storage and smart caching',
      iconBgColor: 'rgba(100, 116, 139, 0.2)',
      iconColor: '#64748b',
      glowColor: 'rgba(100, 116, 139, 0.3)',
    },
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Animated Liquid Background Blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 rounded-full blur-2xl liquid-blob-1" />
        <div className="absolute top-1/3 right-16 w-40 h-40 bg-gradient-to-bl from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl liquid-blob-2" />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-tr from-purple-400/25 to-pink-500/25 rounded-full blur-2xl liquid-blob-3" />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-tl from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl liquid-blob-4" />

        {/* Floating Glass Orbs */}
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl floating-orb-1" />
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-teal-400/20 backdrop-blur-xl rounded-full border border-teal-300/30 shadow-xl floating-orb-2" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header with Liquid Glass Effect */}
          <div className="text-center mb-20">
            {/* Liquid Glass Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 backdrop-blur-2xl text-white px-8 py-4 rounded-full text-sm font-semibold border border-white/30 shadow-2xl mb-8 liquid-badge">
              <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
              <span className="text-white/90">✨ Powerful Features</span>
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            {/* Main Title with Liquid Glass Typography */}
            <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
              Advanced Healthcare
            </h3>
            <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent leading-tight gradient-animate drop-shadow-2xl mb-8">
              Solutions
            </h3>
            
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Experience the future of healthcare with AI-powered diagnosis, multilingual support, 
              and 24/7 accessibility designed specifically for Indian healthcare needs
            </p>
          </div>

          {/* Liquid Glass Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-3xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 liquid-feature-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Internal Liquid Blobs */}
                <div 
                  className="absolute top-2 right-2 w-16 h-16 rounded-full blur-xl opacity-60 liquid-internal-glow"
                  style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent)` }}
                />
                <div 
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full blur-lg opacity-40 liquid-internal-glow-2"
                  style={{ background: `radial-gradient(circle, ${feature.glowColor}, transparent)` }}
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl" />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl border border-white/30 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${feature.iconBgColor}, rgba(255,255,255,0.1))` }}
                  >
                    <div 
                      className="w-8 h-8 drop-shadow-lg"
                      style={{ color: feature.iconColor }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Glowing Ring */}
                  <div 
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                    style={{ background: `linear-gradient(135deg, ${feature.glowColor}, transparent)` }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-white/90 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base group-hover:text-white/80 transition-colors duration-300 drop-shadow-md">
                    {feature.description}
                  </p>
                </div>

                {/* Liquid Border Glow */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes liquid-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-15px) scale(1.05); 
          }
        }

        @keyframes liquid-pulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: scale(1.2) rotate(180deg); 
            opacity: 1; 
          }
        }

        @keyframes liquid-blob-flow {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) scale(1); 
          }
          25% { 
            transform: translateX(20px) translateY(-15px) scale(1.1); 
          }
          50% { 
            transform: translateX(-10px) translateY(-25px) scale(0.9); 
          }
          75% { 
            transform: translateX(-20px) translateY(10px) scale(1.05); 
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floating-orb-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
          }
          33% { 
            transform: translateY(-25px) translateX(15px) scale(1.1); 
          }
          66% { 
            transform: translateY(10px) translateX(-20px) scale(0.9); 
          }
        }

        @keyframes floating-orb-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) scale(1.2); 
          }
        }

        .liquid-blob-1 {
          animation: liquid-blob-flow 12s ease-in-out infinite;
        }

        .liquid-blob-2 {
          animation: liquid-blob-flow 15s ease-in-out infinite reverse;
          animation-delay: 2s;
        }

        .liquid-blob-3 {
          animation: liquid-blob-flow 10s ease-in-out infinite;
          animation-delay: 4s;
        }

        .liquid-blob-4 {
          animation: liquid-blob-flow 18s ease-in-out infinite reverse;
          animation-delay: 6s;
        }

        .floating-orb-1 {
          animation: floating-orb-1 14s ease-in-out infinite;
        }

        .floating-orb-2 {
          animation: floating-orb-2 11s ease-in-out infinite;
          animation-delay: 3s;
        }

        .liquid-badge {
          backdrop-filter: blur(25px);
          box-shadow: 0 15px 35px rgba(20, 184, 166, 0.3);
        }

        .liquid-feature-card {
          backdrop-filter: blur(30px);
          animation: liquid-float 8s ease-in-out infinite;
        }

        .liquid-feature-card:nth-child(even) {
          animation-delay: 2s;
        }

        .liquid-feature-card:nth-child(3n) {
          animation-delay: 4s;
        }

        .liquid-internal-glow {
          animation: liquid-pulse 6s ease-in-out infinite;
        }

        .liquid-internal-glow-2 {
          animation: liquid-pulse 8s ease-in-out infinite reverse;
          animation-delay: 2s;
        }

        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        /* Enhanced glass morphism */
        .liquid-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent, rgba(20, 184, 166, 0.2));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }

        /* Hover effects */
        .liquid-feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(20, 184, 166, 0.2);
        }
      `}</style>
    </>
  );
};