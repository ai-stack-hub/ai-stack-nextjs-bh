import React from 'react';
import { cn } from '../../utils/cn';
import { STATUS_COLORS } from '../../constants';

export interface StatusBadgeProps {
  status: 'open' | 'closed' | 'pending' | 'inProgress';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const colorClass = STATUS_COLORS[status];
  
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const statusClasses = {
    open: 'bg-success/10 text-success border border-success/20',
    closed: 'bg-danger/10 text-danger border border-danger/20',
    pending: 'bg-warning/10 text-warning border border-warning/20',
    inProgress: 'bg-info/10 text-info border border-info/20',
  };

  return (
    <span
      className={cn(
        baseClasses,
        statusClasses[status],
        className
      )}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge; 