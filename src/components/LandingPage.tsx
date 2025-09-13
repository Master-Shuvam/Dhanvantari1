'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HeroSection2 from '@/components/sections/HeroSection2';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CTASection } from '@/components/sections/CTASection';

const DhanvantariLanding = () => {
  
  const [showAuth, setShowAuth] = useState(false);
  const handleGetStarted = () => {
    console.log('Navigating to home page...');
    setShowAuth(true);
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Global Video Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-emerald-900/20 z-10" />

      {/* All Content Container */}
      <div className="relative z-20 min-h-screen">
        <div className='fixed z-50'>
          <Header onGetStarted={handleGetStarted} />
        </div>

        <div className='m-[2vh]'>
          <HeroSection2 onGetStarted={handleGetStarted} showAuth={showAuth}  />
        </div>

        {/* Features Section with Glass Effect */}
        <div className="relative bg-white/10 backdrop-blur-sm border-y border-white/20">
            <FeaturesSection />
        </div>

        {/* CTA Section with Glass Effect */}
        <div className="relative bg-white/5 backdrop-blur-sm">
          <CTASection onGetStarted={handleGetStarted} />
        </div>

        {/* Footer with Glass Effect */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <Footer />
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes liquid-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-10px) scale(1.02); 
          }
        }

        @keyframes video-fade {
          0% { 
            opacity: 0.3; 
          }
          50% { 
            opacity: 0.6; 
          }
          100% { 
            opacity: 0.3; 
          }
        }

        /* Enhanced glass morphism for all sections */
        .glass-section {
          backdrop-filter: blur(15px);
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.2);
        }

        /* Video background effects */
        video {
          animation: video-fade 10s ease-in-out infinite;
        }

        /* Floating animation for sections */
        .floating-section {
          animation: liquid-float 8s ease-in-out infinite;
        }

        /* Custom scrollbar for the page */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.6);
          border-radius: 4px;
          backdrop-filter: blur(10px);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 184, 166, 0.8);
        }
      `}</style>
    </div>
  );
};

export default DhanvantariLanding;