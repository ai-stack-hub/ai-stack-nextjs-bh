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