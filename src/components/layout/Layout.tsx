"use client";

import React from 'react';
import { clsx } from 'clsx';
import { LayoutProps } from '@/types/components';
import Header from './Header';
import Sidebar from './Sidebar';
import Banner from './Banner';

const Layout: React.FC<LayoutProps> = ({
  showHeader = true,
  showSidebar = true,
  showBanner = true,
  children,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin' as const,
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleAccountDetails = () => {
    console.log('Account details clicked');
  };

  const handleBannerDismiss = () => {
    console.log('Banner dismissed');
  };

  return (
    <div
      className={clsx('min-h-screen bg-gray-50', className)}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {showHeader && (
        <Header
          user={mockUser}
          onLogout={handleLogout}
          onAccountDetails={handleAccountDetails}
        />
      )}

      {showSidebar && <Sidebar />}

      <div
        className={clsx(
          'transition-all duration-300',
          showHeader && 'pt-[var(--header-height)]',
          showSidebar && 'pl-16 lg:pl-60'
        )}
      >
        {showBanner && (
          <Banner
            title="Welcome to AI Stack NextJS"
            subtitle="Your dashboard is ready. Explore tickets and services below."
            variant="info"
            dismissible={true}
            onDismiss={handleBannerDismiss}
          />
        )}

        <main className="flex-1">
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 