import React from 'react';
import { cn } from '../../utils/cn';
import { HomeIcon, TicketsIcon, MoreIcon } from '../../icons';
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
        return <MoreIcon size={20} color="currentColor" />;
    }
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-sidebar-bg border-r border-border transition-all duration-300 z-[999] group',
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
              'flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200',
              'hover:bg-sidebar-hover focus:outline-none focus:ring-2 focus:ring-primary/20',
              'group-hover:justify-start justify-center',
              item.id === 'home' && 'bg-sidebar-hover'
            )}
            aria-label={item.label}
          >
            <span className="flex-shrink-0">
              {getIcon(item.icon)}
            </span>
            <span className="text-sm font-medium text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
        
        {/* Placeholder items for additional navigation */}
        <div className="space-y-2 pt-4">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="flex items-center justify-center group-hover:justify-start px-3 py-2"
            >
              <div className="w-5 h-5 bg-text-muted rounded-full flex items-center justify-center">
                <MoreIcon size={12} color="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 