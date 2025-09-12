import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Button } from '../ui/Button'; // Assuming you have this component

interface HeaderProps {
  onGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStarted }) => {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    // 1. The outer container that provides the top margin and sticky positioning.
    // It spans the full width to correctly center the nav element inside.
    <header className="flex sticky top-4 z-50 px-6 content-center w-screen items-center">
      <div className='w-[96vw]'>
        <nav className="mx-auto flex items-center justify-between rounded-2xl border border-white/30 bg-white/75 px-6 py-3 shadow-xl shadow-black/10 backdrop-blur-2xl">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/30">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Dhanvantari
              </h1>
              <p className="text-sm text-gray-500">
                AI Healthcare Companion
              </p>
            </div>
          </div>

          {/* Navigation & CTA Section */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-600 transition-colors hover:text-teal-600"
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
      </div>
    </header>
  );
};