import React from 'react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #14b8a6, #0d9488, #0f766e)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent)',
          borderRadius: '50%',
        }}
      />

      {/* Floating particles */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '8px',
          height: '8px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          animation: 'bounce 3s infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '12px',
          height: '12px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: 'bounce 4s infinite',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Section Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.15)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '30px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          🎯 Get Started
        </div>

        <h3
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}
        >
          Ready to Transform Your Healthcare Experience?
        </h3>
        
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.7',
          }}
        >
          Join thousands who trust Dhanvantari for intelligent health insights, 
          personalized care recommendations, and 24/7 medical guidance
        </p>

        {/* Stats Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '0.5rem',
              }}
            >
              10K+
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
              }}
            >
              Active Users
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '0.5rem',
              }}
            >
              95%
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
              }}
            >
              Accuracy Rate
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '0.5rem',
              }}
            >
              24/7
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
              }}
            >
              Support
            </div>
          </div>
        </div>

        <Button onClick={onGetStarted} size="lg" variant="secondary">
          Get Started Today
        </Button>

        {/* Trust indicators */}
        <div
          style={{
            marginTop: '2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem',
          }}
        >
          ✓ No credit card required • ✓ Free to start • ✓ HIPAA compliant
        </div>
      </div>
    </section>
  );
};