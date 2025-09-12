import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const baseStyles = {
    border: 'none',
    borderRadius: size === 'lg' ? '20px' : '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
      color: 'white',
      boxShadow: '0 10px 25px rgba(20, 184, 166, 0.3)',
    },
    secondary: {
      background: 'white',
      color: '#14b8a6',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    }
  };

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 3rem', fontSize: '1.125rem' },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.transform = size === 'lg' ? 'translateY(-3px) scale(1.05)' : 'translateY(-2px)';
    target.style.boxShadow = variant === 'primary' 
      ? '0 15px 35px rgba(20, 184, 166, 0.4)'
      : '0 15px 35px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.transform = 'translateY(0) scale(1)';
    target.style.boxShadow = variant === 'primary'
      ? '0 10px 25px rgba(20, 184, 166, 0.3)'
      : '0 10px 25px rgba(0, 0, 0, 0.1)';
  };

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};