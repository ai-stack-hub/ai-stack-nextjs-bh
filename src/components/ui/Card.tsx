import React from 'react';
import { clsx } from 'clsx';
import { CardProps } from '@/types/components';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  padding = 'md',
  shadow = 'md',
  border = true,
  className,
  children,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    none: '',
  };

  const classes = clsx(
    'bg-white rounded-lg',
    paddingClasses[padding],
    shadowClasses[shadow],
    border && 'border border-gray-200',
    className
  );

  return (
    <div
      data-testid="card"
      className={classes}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card; 