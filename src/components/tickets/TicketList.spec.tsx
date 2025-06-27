import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TicketList from './TicketList';
import * as ticketServiceModule from '@/api/services/ticketService';

jest.mock('@/api/services/ticketService');

describe('TicketList', () => {
  const mockTickets = [
    {
      id: 'TICK-001',
      title: 'Bug',
      description: 'A bug',
      status: 'open',
      priority: 'high',
      tags: ['bug'],
      assignedTo: 'dev@example.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
    (ticketServiceModule.ticketService.getAllTickets as jest.Mock).mockResolvedValue(mockTickets);
    (ticketServiceModule.ticketService.searchTickets as jest.Mock).mockResolvedValue(mockTickets);
  });

  it('renders loading state', async () => {
    ticketServiceModule.ticketService.getAllTickets.mockImplementationOnce(() => new Promise(() => {}));
    render(<TicketList />);
    expect(screen.getByText('Tickets')).toBeInTheDocument();
    // In loading state, we should see skeleton elements with animate-pulse class
    const skeletonContainer = document.querySelector('.animate-pulse');
    expect(skeletonContainer).toBeInTheDocument();
  });

  it('renders tickets', async () => {
    render(<TicketList />);
    await waitFor(() => expect(screen.getByText('Bug')).toBeInTheDocument());
    expect(screen.getByText('A bug')).toBeInTheDocument();
  });

  it('handles search', async () => {
    render(<TicketList />);
    await waitFor(() => expect(screen.getByText('Bug')).toBeInTheDocument());
    fireEvent.change(screen.getByPlaceholderText('Search tickets...'), { target: { value: 'Bug' } });
    fireEvent.click(screen.getAllByText('Search')[1]);
    await waitFor(() => expect(ticketServiceModule.ticketService.searchTickets).toHaveBeenCalledWith('Bug'));
  });

  it('handles filter', async () => {
    render(<TicketList />);
    await waitFor(() => expect(screen.getByText('Bug')).toBeInTheDocument());
    const statusFilter = screen.getAllByRole('combobox')[0]; // First select is status filter
    fireEvent.change(statusFilter, { target: { value: 'open' } });
    expect(screen.getByText('Bug')).toBeInTheDocument();
  });

  it('shows no tickets message', async () => {
    (ticketServiceModule.ticketService.getAllTickets as jest.Mock).mockResolvedValueOnce([]);
    render(<TicketList />);
    await waitFor(() => expect(screen.getByText('No tickets found')).toBeInTheDocument());
  });

  it('handles error in loading', async () => {
    (ticketServiceModule.ticketService.getAllTickets as jest.Mock).mockRejectedValueOnce(new Error('fail'));
    render(<TicketList />);
    await waitFor(() => expect(screen.getByText('Tickets')).toBeInTheDocument());
    // No crash
  });
}); 