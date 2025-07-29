import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary/20',
    secondary: 'bg-button-bg text-button-text hover:bg-gray-700 focus:ring-gray-500/20',
    success: 'bg-success text-white hover:bg-success-dark focus:ring-success/20',
    warning: 'bg-warning text-white hover:bg-warning-dark focus:ring-warning/20',
    danger: 'bg-danger text-white hover:bg-danger-dark focus:ring-danger/20',
    info: 'bg-info text-white hover:bg-info-dark focus:ring-info/20',
    light: 'bg-light text-dark hover:bg-gray-200 focus:ring-gray-400/20',
    dark: 'bg-dark text-white hover:bg-gray-800 focus:ring-gray-600/20'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 