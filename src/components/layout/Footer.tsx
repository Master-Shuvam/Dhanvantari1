import React from 'react';
import { Stethoscope } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #111827, #1f2937)',
        color: 'white',
        padding: '4rem 0',
        position: 'relative',
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #14b8a6, transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo and Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(20, 184, 166, 0.3)',
            }}
          >
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 style={{ fontWeight: '700', margin: 0, fontSize: '1.25rem' }}>
              Dhanvantari
            </h4>
            <p
              style={{
                color: '#9ca3af',
                fontSize: '0.875rem',
                margin: 0,
                lineHeight: '1.4',
              }}
            >
              AI Healthcare Companion
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.875rem' }}>
          © 2024 Dhanvantari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};