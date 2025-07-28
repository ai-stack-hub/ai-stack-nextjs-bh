import React from 'react';
import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { BannerProps } from '@/types/components';
import { APP_CONSTANTS } from '@/config/constants';

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  variant = 'info',
  dismissible = false,
  onDismiss,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const variantClasses = {
    info: 'bg-green-600 text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    danger: 'bg-danger text-white',
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDismiss();
    }
  };

  return (
    <div
      data-testid="banner"
      className={clsx(
        'relative overflow-hidden',
        variantClasses[variant],
        className
      )}
      style={{ height: APP_CONSTANTS.BANNER_HEIGHT }}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <h2 className="text-sm font-medium truncate">
                {title}
              </h2>
            </div>
            {subtitle && (
              <div className="flex-1 min-w-0">
                <p className="text-sm opacity-90 truncate">
                  {subtitle}
                </p>
              </div>
            )}
          </div>
        </div>

        {dismissible && (
          <div className="flex-shrink-0 ml-3">
            <button
              onClick={handleDismiss}
              onKeyDown={handleKeyDown}
              className="inline-flex items-center justify-center p-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-200"
              aria-label="Dismiss banner"
              tabIndex={0}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Scrollable indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div className="h-full bg-white/40 animate-pulse" />
      </div>
    </div>
  );
};

export default Banner; 