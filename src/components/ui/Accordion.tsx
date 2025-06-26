"use client";

import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';
import { AccordionProps } from '@/types/components';

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  defaultOpen = [],
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const handleToggle = (itemId: string) => {
    if (multiple) {
      setOpenItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(itemId);
    }
  };

  return (
    <div
      className={clsx('space-y-1', className)}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      role="region"
      {...props}
    >
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className={clsx(
                'w-full px-4 py-3 text-left flex items-center justify-between',
                'bg-white hover:bg-gray-50 focus:bg-gray-50',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
              onClick={() => !item.disabled && handleToggle(item.id)}
              onKeyDown={(e) => !item.disabled && handleKeyDown(e, item.id)}
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              tabIndex={item.disabled ? -1 : 0}
            >
              <div className="flex items-center space-x-2">
                {item.icon && (
                  <span className="text-gray-500" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className="font-medium text-gray-900">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={clsx(
                  'h-5 w-5 text-gray-500 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={clsx(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
              aria-hidden={!isOpen}
            >
              <div className="px-4 pb-3 pt-1">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion; 