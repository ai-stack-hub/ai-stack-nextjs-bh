import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { SearchIcon, FilterIcon, SortIcon } from '../../icons';
import Button from '../../components/button/button';
import StatusBadge from '../../components/status-badge/status-badge';
import PriorityBadge from '../../components/priority-badge/priority-badge';
import { ClockIcon, CalendarIcon } from '../../icons';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed' | 'pending' | 'inProgress';
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  updatedAt: string;
  assignedTo: string;
  category: string;
}

export interface TicketsWidgetProps {
  tickets: Ticket[];
  className?: string;
}

const TicketsWidget: React.FC<TicketsWidgetProps> = ({ tickets, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={cn('bg-card-bg rounded-lg border border-border p-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Tickets</h2>
        
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative">
            <SearchIcon 
              size={16} 
              color="currentColor" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" 
            />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
            />
          </div>
          
          {/* Filter Button */}
          <Button variant="secondary" size="sm">
            <FilterIcon size={16} className="mr-1" />
            Filter
          </Button>
          
          {/* Sort Button */}
          <Button variant="secondary" size="sm">
            <SortIcon size={16} className="mr-1" />
            Sort
          </Button>
        </div>
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-text-primary mb-1">
                  {ticket.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {ticket.description}
                </p>
              </div>
              <StatusBadge status={ticket.status} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-text-muted">
              <div className="flex items-center space-x-1">
                <span className="font-medium">Ticket ID:</span>
                <span>{ticket.id}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">Priority:</span>
                <PriorityBadge priority={ticket.priority} />
              </div>
              <div className="flex items-center space-x-1">
                <CalendarIcon size={12} />
                <span className="font-medium">Created:</span>
                <span>{formatDate(ticket.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon size={12} />
                <span className="font-medium">Updated:</span>
                <span>{formatDate(ticket.updatedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsWidget; 