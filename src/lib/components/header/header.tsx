import React from 'react';
import { cn } from '../../utils/cn';
import { MenuIcon, UserIcon, ChevronDownIcon } from '../../icons';
import { APP_CONFIG, LAYOUT_CONFIG } from '../../constants';

export interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, className = '' }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 bg-sidebar-bg text-text-primary z-[1000] border-b border-border',
        className
      )}
      style={{ height: LAYOUT_CONFIG.header.height }}
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Menu button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-sidebar-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Toggle menu"
        >
          <MenuIcon size={24} color="currentColor" />
        </button>

        {/* Right side - User profile */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {/* User avatar */}
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-medium text-sm">
              {APP_CONFIG.user.initials}
            </div>
            
            {/* User name */}
            <span className="text-sm font-medium text-text-primary hidden sm:block">
              {APP_CONFIG.user.name}
            </span>
            
            {/* Dropdown arrow */}
            <button
              className="p-1 rounded-md hover:bg-sidebar-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="User menu"
            >
              <ChevronDownIcon size={16} color="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 