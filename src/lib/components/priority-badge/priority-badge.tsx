import React from 'react';
import { cn } from '../../utils/cn';
import { PRIORITY_COLORS } from '../../constants';

export interface PriorityBadgeProps {
  priority: 'high' | 'medium' | 'low';
  className?: string;
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, className = '' }) => {
  const colorClass = PRIORITY_COLORS[priority];
  
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const priorityClasses = {
    high: 'bg-danger/10 text-danger border border-danger/20',
    medium: 'bg-warning/10 text-warning border border-warning/20',
    low: 'bg-info/10 text-info border border-info/20',
  };

  return (
    <span
      className={cn(
        baseClasses,
        priorityClasses[priority],
        className
      )}
      role="status"
      aria-label={`Priority: ${priority}`}
    >
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
};

export default PriorityBadge; 