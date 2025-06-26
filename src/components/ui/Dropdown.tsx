"use client";

import React, { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';
import { DropdownProps, DropdownItem } from '@/types/components';

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = 'bottom',
  disabled = false,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.action) {
      item.action();
    }
    setIsOpen(false);
  };

  const handleItemKeyDown = (event: React.KeyboardEvent, item: DropdownItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleItemClick(item);
    }
  };

  const placementClasses = {
    top: 'bottom-full mb-1',
    bottom: 'top-full mt-1',
    left: 'right-full mr-1',
    right: 'left-full ml-1',
  };

  return (
    <div
      ref={dropdownRef}
      className={clsx('relative inline-block', className)}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      <button
        className={clsx(
          'inline-flex items-center justify-between w-full px-3 py-2',
          'text-sm font-medium text-gray-700 bg-white border border-gray-300',
          'rounded-md shadow-sm hover:bg-gray-50 focus:outline-none',
          'focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-colors duration-200'
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="true"
        tabIndex={disabled ? -1 : 0}
      >
        {trigger}
        <ChevronDown
          className={clsx(
            'ml-2 h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className={clsx(
            'absolute z-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5',
            placementClasses[placement]
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <div key={item.id}>
                {item.divider ? (
                  <div className="border-t border-gray-100 my-1" role="separator" />
                ) : (
                  <button
                    className={clsx(
                      'block w-full text-left px-4 py-2 text-sm text-gray-700',
                      'hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                      'transition-colors duration-150'
                    )}
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(e) => handleItemKeyDown(e, item)}
                    disabled={item.disabled}
                    role="menuitem"
                    tabIndex={item.disabled ? -1 : 0}
                  >
                    <div className="flex items-center">
                      {item.icon && (
                        <span className="mr-2 text-gray-400" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown; 