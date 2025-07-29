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
        'bg-banner-bg text-white pt-6 pb-28 w-full',
        className
      )}
      style={{ height: '30vh' }}
    >
      <div className="px-6">
        <h1 className="text-2xl font-bold text-white">
          Welcome, {APP_CONFIG.user.name.split(' ')[0]}
        </h1>
        <p className="text-white text-sm">
          Here is a summary of your dashboard.
        </p>
      </div>
    </div>
  );
};

export default Banner; 