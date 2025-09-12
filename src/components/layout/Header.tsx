import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStarted }) => {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.target as HTMLAnchorElement;
    target.style.color = isEnter ? '#14b8a6' : '#374151';
  };

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(20, 184, 166, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0,
              lineHeight: '1.2',
            }}
          >
            Dhanvantari
          </h1>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              margin: 0,
              lineHeight: '1.2',
            }}
          >
            AI Healthcare Companion
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => handleNavLinkHover(e, true)}
              onMouseLeave={(e) => handleNavLinkHover(e, false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button onClick={onGetStarted} size="md">
          Get Started
        </Button>
      </div>
    </nav>
  );
};