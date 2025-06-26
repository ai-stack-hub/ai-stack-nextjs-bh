# API Documentation

This document contains the API contracts and endpoints for the AI Stack NextJS application.

## Overview

The application uses mock data and services to simulate real API interactions. All data is stored in JSON files and accessed through service classes that provide a consistent interface.

## Data Models

### Ticket

```typescript
interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  assignedTo?: string; // Email address
  tags?: string[];
}
```

### Service

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  provider: string;
  url?: string;
  lastChecked?: string; // ISO 8601 date string
}
```

### ServiceGroup

```typescript
interface ServiceGroup {
  provider: string;
  services: Service[];
}
```

### User

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  lastLogin?: string; // ISO 8601 date string
}
```

## Service Classes

### TicketService

Location: `src/api/services/ticketService.ts`

#### Methods

- `getAllTickets(): Promise<Ticket[]>`
  - Returns all tickets
  - Simulated delay: 500ms

- `getTicketById(id: string): Promise<Ticket | null>`
  - Returns a specific ticket by ID
  - Simulated delay: 300ms

- `createTicket(ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ticket>`
  - Creates a new ticket
  - Auto-generates ID and timestamps
  - Simulated delay: 400ms

- `updateTicket(id: string, updates: Partial<Ticket>): Promise<Ticket | null>`
  - Updates an existing ticket
  - Auto-updates the `updatedAt` timestamp
  - Simulated delay: 400ms

- `deleteTicket(id: string): Promise<boolean>`
  - Deletes a ticket by ID
  - Returns true if successful
  - Simulated delay: 300ms

- `getTicketsByStatus(status: string): Promise<Ticket[]>`
  - Filters tickets by status
  - Simulated delay: 300ms

- `getTicketsByPriority(priority: string): Promise<Ticket[]>`
  - Filters tickets by priority
  - Simulated delay: 300ms

- `searchTickets(query: string): Promise<Ticket[]>`
  - Searches tickets by title, description, or ID
  - Case-insensitive search
  - Simulated delay: 400ms

- `getTicketsByAssignee(email: string): Promise<Ticket[]>`
  - Filters tickets by assigned user
  - Simulated delay: 300ms

### ServiceService

Location: `src/api/services/serviceService.ts`

#### Methods

- `getAllServices(): Promise<Service[]>`
  - Returns all services from all providers
  - Simulated delay: 500ms

- `getServiceGroups(): Promise<ServiceGroup[]>`
  - Returns services grouped by provider
  - Simulated delay: 400ms

- `getServicesByProvider(provider: string): Promise<Service[]>`
  - Returns services for a specific provider
  - Simulated delay: 300ms

- `getServiceById(id: string): Promise<Service | null>`
  - Returns a specific service by ID
  - Simulated delay: 300ms

- `updateServiceStatus(id: string, status: string): Promise<Service | null>`
  - Updates the status of a service
  - Auto-updates the `lastChecked` timestamp
  - Simulated delay: 400ms

- `addService(provider: string, service: Omit<Service, 'id' | 'provider' | 'lastChecked'>): Promise<Service>`
  - Adds a new service to a provider
  - Auto-generates ID and timestamps
  - Simulated delay: 400ms

- `removeService(id: string): Promise<boolean>`
  - Removes a service by ID
  - Returns true if successful
  - Simulated delay: 300ms

- `getServicesByStatus(status: string): Promise<Service[]>`
  - Filters services by status
  - Simulated delay: 300ms

- `searchServices(query: string): Promise<Service[]>`
  - Searches services by name, description, or provider
  - Case-insensitive search
  - Simulated delay: 400ms

- `refreshServiceStatuses(): Promise<void>`
  - Simulates refreshing all service statuses
  - Randomly changes some statuses for demo purposes
  - Simulated delay: 1000ms

## Data Files

### Tickets Data
Location: `src/api/data/tickets.json`

Contains an array of ticket objects with sample data including:
- Various ticket statuses and priorities
- Different assignees and tags
- Realistic timestamps and descriptions

### Services Data
Location: `src/api/data/services.json`

Contains an array of service groups, each with:
- Provider name (Google, Facebook, Microsoft, etc.)
- Array of services for that provider
- Various service statuses and metadata

### Users Data
Location: `src/api/data/users.json`

Contains an array of user objects with:
- Profile information
- Avatar URLs
- Role assignments
- Contact details

## Error Handling

All service methods include error handling and will:
- Log errors to console in development
- Return appropriate fallback values (null, empty arrays, etc.)
- Maintain consistent response times through simulated delays

## Usage Examples

```typescript
import { ticketService } from '@/api/services/ticketService';
import { serviceService } from '@/api/services/serviceService';

// Get all tickets
const tickets = await ticketService.getAllTickets();

// Search for tickets
const searchResults = await ticketService.searchTickets('login');

// Get services by provider
const googleServices = await serviceService.getServicesByProvider('Google');

// Update service status
await serviceService.updateServiceStatus('google-1', 'maintenance');
```

## Future Enhancements

When transitioning to real APIs, consider:
- Adding authentication and authorization
- Implementing rate limiting
- Adding request/response validation
- Including error codes and messages
- Adding pagination for large datasets
- Implementing caching strategies 