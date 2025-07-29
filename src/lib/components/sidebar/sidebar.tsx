import React from 'react';
import { cn } from '../../utils/cn';
import { HomeIcon, TicketsIcon } from '../../icons';
import { NAVIGATION_ITEMS, LAYOUT_CONFIG } from '../../constants';

export interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <HomeIcon size={20} color="currentColor" />;
      case 'tickets':
        return <TicketsIcon size={20} color="currentColor" />;
      default:
        return null;
    }
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-sidebar-bg border-r border-border transition-all duration-300 z-[999] group hover:w-60',
        className
      )}
      style={{ 
        top: LAYOUT_CONFIG.header.height,
        height: `calc(100vh - ${LAYOUT_CONFIG.header.height})`,
        width: LAYOUT_CONFIG.sidebar.width.collapsed
      }}
    >
      <nav className="p-4 space-y-2">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center justify-center px-3 py-2 rounded-md transition-colors duration-200',
              'hover:bg-[#22d081] focus:outline-none focus:ring-2 focus:ring-primary/20',
              'group-hover:justify-start group-hover:space-x-3',
              item.id === 'home' && 'bg-[#22d081]'
            )}
            aria-label={item.label}
          >
            <span className="flex-shrink-0 flex items-center justify-center">
              {getIcon(item.icon)}
            </span>
            <span className="text-sm font-medium text-text-primary hidden group-hover:block transition-all duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 