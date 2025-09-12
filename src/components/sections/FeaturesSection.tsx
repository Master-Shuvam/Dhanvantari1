import React from 'react';
import { Brain, MapPin, AlertTriangle, Globe, Phone, Wifi } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain />,
      title: 'AI Disease Prediction',
      description: 'Advanced ML models analyze symptoms to predict probable diseases with high accuracy and provide personalized health insights',
      iconBgColor: '#f0fdfa',
      iconColor: '#14b8a6',
      borderColor: 'rgba(20, 184, 166, 0.2)',
    },
    {
      icon: <MapPin />,
      title: 'Hospital Recommendations',
      description: 'Find verified hospitals nearby with specializations, contact details, real-time availability, and turn-by-turn directions',
      iconBgColor: '#eff6ff',
      iconColor: '#3b82f6',
      borderColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      icon: <AlertTriangle />,
      title: 'Emergency Alerts',
      description: 'Immediate guidance for critical cases with direct ambulance service connections and emergency contact integration',
      iconBgColor: '#fef2f2',
      iconColor: '#ef4444',
      borderColor: 'rgba(239, 68, 68, 0.2)',
    },
    {
      icon: <Globe />,
      title: 'Multilingual Support',
      description: 'Available in English, Hindi, Bengali, Tamil, Telugu, Marathi, and more Indian regional languages for better accessibility',
      iconBgColor: '#faf5ff',
      iconColor: '#a855f7',
      borderColor: 'rgba(168, 85, 247, 0.2)',
    },
    {
      icon: <Phone />,
      title: 'Voice Interaction',
      description: 'Speak your symptoms naturally using advanced voice recognition. Our AI understands context and medical terminology perfectly',
      iconBgColor: '#f0fdf4',
      iconColor: '#22c55e',
      borderColor: 'rgba(34, 197, 94, 0.2)',
    },
    {
      icon: <Wifi />,
      title: 'Offline Mode',
      description: 'Works seamlessly even with poor internet connectivity using intelligent local database storage and smart caching',
      iconBgColor: '#f8fafc',
      iconColor: '#64748b',
      borderColor: 'rgba(100, 116, 139, 0.2)',
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.9) 50%, rgba(255, 255, 255, 0.8) 100%)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1), transparent)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08), transparent)',
          borderRadius: '50%',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(20, 184, 166, 0.1)',
              color: '#0d9488',
              padding: '0.75rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              border: '1px solid rgba(20, 184, 166, 0.2)',
            }}
          >
            ✨ Powerful Features
          </div>
          
          <h3
            style={{
              fontSize: '2.75rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            }}
          >
            Advanced Healthcare Solutions
          </h3>
          <p
            style={{
              color: '#6b7280',
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Experience the future of healthcare with AI-powered diagnosis, multilingual support, 
            and 24/7 accessibility designed specifically for Indian healthcare needs
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
              iconColor={feature.iconColor}
              borderColor={feature.borderColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};