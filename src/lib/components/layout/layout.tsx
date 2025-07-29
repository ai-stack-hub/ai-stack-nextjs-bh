import React from 'react';
import { cn } from '../../utils/cn';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import { LAYOUT_CONFIG } from '../../constants';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Sidebar - Fixed on left */}
      <Sidebar />
      
      {/* Main Content - Positioned to the right of sidebar */}
      <main
        className={cn(
          'transition-all duration-300',
          className
        )}
        style={{ 
          paddingTop: LAYOUT_CONFIG.header.height,
          paddingLeft: LAYOUT_CONFIG.sidebar.width.collapsed
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout; 