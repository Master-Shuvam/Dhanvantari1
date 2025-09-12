import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  borderColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBgColor,
  iconColor,
  borderColor,
}) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-12px) scale(1.02)';
    target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(0) scale(1)';
    target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
  };

  return (
    <div
      className="feature-card"
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
        border: `2px solid ${borderColor}`,
        backdropFilter: 'blur(10px)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${iconColor}, ${iconColor}88)`,
          borderRadius: '24px 24px 0 0',
        }}
      />
      
      {/* Icon container with improved design */}
      <div
        style={{
          width: '80px',
          height: '80px',
          background: `linear-gradient(135deg, ${iconBgColor}, ${iconBgColor}cc)`,
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          boxShadow: `0 8px 32px ${iconColor}40`,
          position: 'relative',
        }}
      >
        {/* Inner glow effect */}
        <div
          style={{
            position: 'absolute',
            inset: '4px',
            background: `linear-gradient(135deg, ${iconBgColor}40, transparent)`,
            borderRadius: '16px',
          }}
        />
        {React.cloneElement(icon, { 
          size: 40,
          style: { color: iconColor, zIndex: 1, position: 'relative' }
        } as any)}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h4
          style={{
            fontSize: '1.375rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '1rem',
            lineHeight: '1.3',
          }}
        >
          {title}
        </h4>
        <p
          style={{
            color: '#6b7280',
            lineHeight: '1.7',
            margin: 0,
            fontSize: '1rem',
          }}
        >
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '32px',
          height: '32px',
          background: `${iconColor}10`,
          borderRadius: '50%',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '2rem',
          width: '16px',
          height: '16px',
          background: `${iconColor}15`,
          borderRadius: '50%',
          opacity: 0.4,
        }}
      />
    </div>
  );
};