import { TicketService } from './ticketService';

describe('TicketService', () => {
  let svc: TicketService;
  beforeEach(() => {
    svc = new TicketService();
  });

  it('gets all tickets', async () => {
    const tickets = await svc.getAllTickets();
    expect(Array.isArray(tickets)).toBe(true);
  });

  it('gets ticket by id', async () => {
    const tickets = await svc.getAllTickets();
    if (tickets.length) {
      const ticket = await svc.getTicketById(tickets[0].id);
      expect(ticket).toBeTruthy();
    }
  });

  it('returns null for missing ticket by id', async () => {
    const ticket = await svc.getTicketById('not-found');
    expect(ticket).toBeNull();
  });

  it('creates a ticket', async () => {
    const newTicket = await svc.createTicket({
      title: 'Test',
      description: 'Test',
      status: 'open',
      priority: 'low',
    });
    expect(newTicket.title).toBe('Test');
  });

  it('updates a ticket', async () => {
    const ticket = (await svc.getAllTickets())[0];
    if (ticket) {
      const updated = await svc.updateTicket(ticket.id, { title: 'Updated' });
      expect(updated.title).toBe('Updated');
    }
  });

  it('returns null for updateTicket with bad id', async () => {
    const updated = await svc.updateTicket('bad-id', { title: 'Nope' });
    expect(updated).toBeNull();
  });

  it('deletes a ticket', async () => {
    const ticket = await svc.createTicket({
      title: 'Delete',
      description: 'Delete',
      status: 'open',
      priority: 'low',
    });
    const deleted = await svc.deleteTicket(ticket.id);
    expect(deleted).toBe(true);
  });

  it('returns false for deleteTicket with bad id', async () => {
    const deleted = await svc.deleteTicket('bad-id');
    expect(deleted).toBe(false);
  });

  it('gets tickets by status', async () => {
    const tickets = await svc.getTicketsByStatus('open');
    expect(Array.isArray(tickets)).toBe(true);
  });

  it('gets tickets by priority', async () => {
    const tickets = await svc.getTicketsByPriority('low');
    expect(Array.isArray(tickets)).toBe(true);
  });

  it('searches tickets', async () => {
    const tickets = await svc.searchTickets('bug');
    expect(Array.isArray(tickets)).toBe(true);
  });

  it('gets tickets by assignee', async () => {
    const tickets = await svc.getTicketsByAssignee('dev@example.com');
    expect(Array.isArray(tickets)).toBe(true);
  });
}); 