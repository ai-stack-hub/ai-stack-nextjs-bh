import React from 'react';
import { clsx } from 'clsx';
import { BadgeProps } from '@/types/components';

const Badge: React.FC<BadgeProps> = ({
  variant,
  size = 'md',
  status,
  priority,
  className,
  children,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  // Determine variant based on status or priority
  const getVariant = () => {
    if (variant) return variant;
    
    if (status) {
      switch (status) {
        case 'open':
        case 'active':
          return 'success';
        case 'in_progress':
        case 'maintenance':
          return 'warning';
        case 'resolved':
        case 'closed':
          return 'info';
        case 'error':
          return 'danger';
        default:
          return 'secondary';
      }
    }
    
    if (priority) {
      switch (priority) {
        case 'low':
          return 'info';
        case 'medium':
          return 'warning';
        case 'high':
        case 'critical':
          return 'danger';
        default:
          return 'secondary';
      }
    }
    
    return 'secondary';
  };

  const currentVariant = getVariant();

  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    danger: 'bg-danger text-white',
    info: 'bg-info text-white',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[currentVariant],
    sizeClasses[size],
    className
  );

  const getLabel = () => {
    if (children) return children;
    if (status) return status.replace('_', ' ');
    if (priority) return priority;
    return '';
  };

  return (
    <span
      className={classes}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {getLabel()}
    </span>
  );
};

export default Badge; 