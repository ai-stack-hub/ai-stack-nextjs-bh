"use client";

import React from 'react';
import { HeaderProps, DropdownItem } from '@/types/components';
import Avatar from '@/components/ui/Avatar';
import Dropdown from '@/components/ui/Dropdown';
import { APP_CONSTANTS } from '@/config/constants';

const Header: React.FC<HeaderProps> = ({
  user,
  onLogout,
  onAccountDetails,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const handleAccountDetails = () => {
    if (onAccountDetails) {
      onAccountDetails();
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const dropdownItems: DropdownItem[] = [
    {
      id: 'account',
      label: APP_CONSTANTS.USER_MENU_OPTIONS.ACCOUNT_DETAILS.label,
      icon: 'Settings',
      action: handleAccountDetails,
    },
    {
      id: 'divider',
      label: '',
      divider: true,
    },
    {
      id: 'logout',
      label: APP_CONSTANTS.USER_MENU_OPTIONS.LOGOUT.label,
      icon: 'LogOut',
      action: handleLogout,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 ${className || ''}`}
      style={{ height: APP_CONSTANTS.HEADER_HEIGHT }}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            {APP_CONSTANTS.NAVIGATION.HOME.label}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {user && (
            <Dropdown
              trigger={
                <div className="flex items-center space-x-2">
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    fallback={user.name}
                    size="sm"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </div>
              }
              items={dropdownItems}
              placement="bottom"
              aria-label="User menu"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 