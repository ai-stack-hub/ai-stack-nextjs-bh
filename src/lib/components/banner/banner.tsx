import React from 'react';
import { cn } from '../../utils/cn';
import { APP_CONFIG } from '../../constants';

export interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'bg-banner-bg text-white p-6 mb-6 w-full',
        className
      )}
    >
      <h1 className="text-2xl font-bold mb-2">
        Welcome, {APP_CONFIG.user.name.split(' ')[0]}
      </h1>
      <p className="text-white/90">
        Here is a summary of your dashboard.
      </p>
    </div>
  );
};

export default Banner; 