# API Contracts Documentation

This document describes the JSON contracts used in the dashboard application.

## Tickets API

### Endpoint: `/api/data/tickets.json`

Returns a list of support tickets.

#### Response Schema

```json
{
  "tickets": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "open" | "closed" | "pending" | "inProgress",
      "priority": "high" | "medium" | "low",
      "createdAt": "string (ISO 8601)",
      "updatedAt": "string (ISO 8601)",
      "assignedTo": "string (email)",
      "category": "string"
    }
  ]
}
```

#### Field Descriptions

- `id`: Unique ticket identifier (format: TKT-XXX)
- `title`: Brief description of the issue
- `description`: Detailed description of the problem
- `status`: Current status of the ticket
- `priority`: Priority level of the ticket
- `createdAt`: Timestamp when ticket was created
- `updatedAt`: Timestamp when ticket was last updated
- `assignedTo`: Email of the assigned support agent
- `category`: Category of the issue

## Services API

### Endpoint: `/api/data/services.json`

Returns a list of user services.

#### Response Schema

```json
{
  "services": [
    {
      "id": "string",
      "name": "string",
      "status": "string",
      "lastAccessed": "string (ISO 8601)",
      "description": "string"
    }
  ]
}
```

#### Field Descriptions

- `id`: Unique service identifier
- `name`: Display name of the service
- `status`: Current status of the service
- `lastAccessed`: Timestamp of last access
- `description`: Description of the service

## Data Privacy

- All data uses dummy/test values
- No real names or email addresses are used
- All timestamps are fictional for demonstration purposes 