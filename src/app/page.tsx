'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import  HeroSection  from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CTASection } from '@/components/sections/CTASection';

const DhanvantariLanding = () => {
  const handleGetStarted = () => {
    // This would navigate to your main/home page
    console.log('Navigating to home page...');
    alert('This would navigate to your main/home page');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #f0fdf4 100%)',
      }}
    >
      <Header onGetStarted={handleGetStarted} />
      <HeroSection />
      <FeaturesSection />
      <CTASection onGetStarted={handleGetStarted} />
      <Footer />

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
      `}</style>
    </div>
  );
};

export default DhanvantariLanding;