"use client";

import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Home } from 'lucide-react';
import { SidebarProps, NavigationItem } from '@/types/components';
import { APP_CONSTANTS } from '@/config/constants';

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed = true,
  onToggle,
  navigationItems,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!isCollapsed);

  const defaultNavigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: APP_CONSTANTS.NAVIGATION.HOME.label,
      icon: 'Home',
      path: APP_CONSTANTS.NAVIGATION.HOME.path,
      active: true,
    },
  ];

  const items = navigationItems || defaultNavigationItems;
  const shouldExpand = isExpanded || isHovered;

  const handleMouseEnter = () => {
    if (isCollapsed) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      setIsHovered(false);
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onToggle) {
      onToggle();
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="h-5 w-5" />;
      default:
        return <Home className="h-5 w-5" />;
    }
  };

  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 z-40 bg-white border-r border-gray-200 transition-all duration-300',
        'flex flex-col',
        shouldExpand ? 'w-60' : 'w-16',
        className
      )}
      style={{ 
        top: APP_CONSTANTS.HEADER_HEIGHT,
        height: `calc(100vh - ${APP_CONSTANTS.HEADER_HEIGHT})`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      <nav className="flex-1 px-2 py-4 space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className={clsx(
              'flex items-center px-2 py-2 text-sm font-medium rounded-md',
              'transition-colors duration-200',
              'hover:bg-gray-100 focus:bg-gray-100',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
              item.active
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'text-gray-600 hover:text-gray-900',
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
            aria-current={item.active ? 'page' : undefined}
            tabIndex={item.disabled ? -1 : 0}
          >
            <span className="flex-shrink-0">
              {getIconComponent(item.icon)}
            </span>
            {shouldExpand && (
              <span className="ml-3 truncate">
                {item.label}
              </span>
            )}
          </a>
        ))}
      </nav>

      {shouldExpand && (
        <div className="p-2 border-t border-gray-200">
          <button
            onClick={handleToggle}
            className="w-full flex items-center justify-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Toggle sidebar"
            tabIndex={0}
          >
            <span className="sr-only">Toggle sidebar</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar; 