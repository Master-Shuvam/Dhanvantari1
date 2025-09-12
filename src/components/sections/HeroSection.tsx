import React from 'react';
import { Brain, MapPin, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(20, 184, 166, 0.1)',
              color: '#0d9488',
              padding: '0.75rem 1.25rem',
              borderRadius: '30px',
              fontSize: '0.875rem',
              fontWeight: '600',
              width: 'fit-content',
              border: '1px solid rgba(20, 184, 166, 0.2)',
            }}
          >
            <span>🚀</span>
            <span>AI-Powered Healthcare</span>
          </div>

          {/* Main Heading */}
          <div>
            <h2
              style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#1f2937',
                lineHeight: '1.1',
                margin: '0 0 0.5rem 0',
              }}
            >
              Your AI
            </h2>
            <h2
              style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#1f2937',
                lineHeight: '1.1',
                margin: '0 0 0.5rem 0',
              }}
            >
              Healthcare
            </h2>
            <h2
              style={{
                fontSize: '4rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: '1.1',
                margin: '0 0 1rem 0',
              }}
            >
              Companion
            </h2>
            <div>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '1.1',
                  margin: '0 0 0.25rem 0',
                }}
              >
                Anytime,
              </h3>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '1.1',
                  margin: 0,
                }}
              >
                Anywhere
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <Button onClick={onGetStarted} size="lg">
            Start Your Health Journey
          </Button>
        </div>

        {/* Right Content - Demo Interface */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(20, 184, 166, 0.2)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative gradient overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #14b8a6, #10b981, #22c55e)',
                borderRadius: '28px 28px 0 0',
              }}
            />

            {/* AI Analysis Demo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#14b8a6',
                }}
              >
                <Brain className="w-6 h-6" />
                <span style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                  AI Disease Prediction
                </span>
              </div>

              <div style={{ color: '#6b7280' }}>
                <p style={{ margin: 0, fontSize: '1rem' }}>Analyzing symptoms...</p>
              </div>

              <div
                style={{
                  background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '2px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                }}
              >
                <p
                  style={{
                    color: '#374151',
                    fontWeight: '600',
                    margin: 0,
                    fontSize: '1.125rem',
                  }}
                >
                  Fever, Headache, Fatigue
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#374151', fontWeight: '500' }}>
                    Analysis Progress
                  </span>
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6, #10b981)',
                      color: 'white',
                      padding: '0.375rem 1rem',
                      borderRadius: '25px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)',
                    }}
                  >
                    Analyzing
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    background: '#e5e7eb',
                    borderRadius: '12px',
                    height: '14px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    style={{
                      background: 'linear-gradient(90deg, #14b8a6, #10b981, #22c55e)',
                      height: '100%',
                      width: '75%',
                      borderRadius: '12px',
                      animation: 'pulse 2s infinite',
                      boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)',
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#6b7280',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #e5e7eb',
                }}
              >
                <MapPin className="w-5 h-5" />
                <span>Finding hospitals nearby...</span>
              </div>
            </div>
          </div>

          {/* Floating Heart Icon */}
          <div
            style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #f472b6, #ec4899)',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 15px 35px rgba(244, 114, 182, 0.4)',
              animation: 'bounce 2s infinite',
            }}
          >
            <Heart className="w-7 h-7 text-white" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};