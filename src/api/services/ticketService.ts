import { Ticket } from '@/types/components';
import ticketsData from '@/api/data/tickets.json';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class TicketService {
  private tickets: Ticket[] = ticketsData as Ticket[];

  async getAllTickets(): Promise<Ticket[]> {
    await delay(500); // Simulate network delay
    return this.tickets;
  }

  async getTicketById(id: string): Promise<Ticket | null> {
    await delay(300);
    return this.tickets.find(ticket => ticket.id === id) || null;
  }

  async createTicket(ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ticket> {
    await delay(400);
    const newTicket: Ticket = {
      ...ticket,
      id: `TICK-${String(this.tickets.length + 1).padStart(3, '0')}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.tickets.push(newTicket);
    return newTicket;
  }

  async updateTicket(id: string, updates: Partial<Ticket>): Promise<Ticket | null> {
    await delay(400);
    const index = this.tickets.findIndex(ticket => ticket.id === id);
    if (index === -1) return null;

    this.tickets[index] = {
      ...this.tickets[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.tickets[index];
  }

  async deleteTicket(id: string): Promise<boolean> {
    await delay(300);
    const index = this.tickets.findIndex(ticket => ticket.id === id);
    if (index === -1) return false;

    this.tickets.splice(index, 1);
    return true;
  }

  async getTicketsByStatus(status: string): Promise<Ticket[]> {
    await delay(300);
    return this.tickets.filter(ticket => ticket.status === status);
  }

  async getTicketsByPriority(priority: string): Promise<Ticket[]> {
    await delay(300);
    return this.tickets.filter(ticket => ticket.priority === priority);
  }

  async searchTickets(query: string): Promise<Ticket[]> {
    await delay(400);
    const lowerQuery = query.toLowerCase();
    return this.tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(lowerQuery) ||
      ticket.description.toLowerCase().includes(lowerQuery) ||
      ticket.id.toLowerCase().includes(lowerQuery)
    );
  }

  async getTicketsByAssignee(email: string): Promise<Ticket[]> {
    await delay(300);
    return this.tickets.filter(ticket => ticket.assignedTo === email);
  }
}

export const ticketService = new TicketService(); 