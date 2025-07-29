# Component Library Documentation

This document describes the reusable components available in the dashboard application.

## UI Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
```

#### Usage

```tsx
import Button from '../lib/components/button/button';

<Button variant="primary" size="md">
  Click me
</Button>
```

### StatusBadge

Displays status information with appropriate colors.

#### Props

```typescript
interface StatusBadgeProps {
  status: 'open' | 'closed' | 'pending' | 'inProgress';
  className?: string;
}
```

#### Usage

```tsx
import StatusBadge from '../lib/components/status-badge/status-badge';

<StatusBadge status="open" />
```

### PriorityBadge

Displays priority levels with appropriate colors.

#### Props

```typescript
interface PriorityBadgeProps {
  priority: 'high' | 'medium' | 'low';
  className?: string;
}
```

#### Usage

```tsx
import PriorityBadge from '../lib/components/priority-badge/priority-badge';

<PriorityBadge priority="high" />
```

## Layout Components

### Header

Fixed header component with menu button and user profile.

#### Props

```typescript
interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}
```

### Sidebar

Collapsible sidebar navigation with hover expansion.

#### Props

```typescript
interface SidebarProps {
  className?: string;
}
```

### Layout

Main layout wrapper that combines header, sidebar, and content area.

#### Props

```typescript
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
```

### Banner

Welcome banner component for dashboard pages.

#### Props

```typescript
interface BannerProps {
  className?: string;
}
```

## Widget Components

### TicketsWidget

Displays a list of support tickets with search and filtering.

#### Props

```typescript
interface TicketsWidgetProps {
  tickets: Ticket[];
  className?: string;
}
```

### ServicesWidget

Displays a list of user services with expandable details.

#### Props

```typescript
interface ServicesWidgetProps {
  services: Service[];
  className?: string;
}
```

## Icon Library

All icons are SVG-based and follow a consistent design system.

### Available Icons

- `MenuIcon` - Hamburger menu
- `HomeIcon` - Home navigation
- `TicketsIcon` - Tickets navigation
- `SearchIcon` - Search functionality
- `FilterIcon` - Filter functionality
- `SortIcon` - Sort functionality
- `ChevronDownIcon` - Dropdown indicator
- `UserIcon` - User profile
- `MoreIcon` - More options
- `CloseIcon` - Close action
- `CheckIcon` - Success/check action
- `ClockIcon` - Time indicator
- `CalendarIcon` - Date indicator

### Usage

```tsx
import { HomeIcon, SearchIcon } from '../lib/icons';

<HomeIcon size={24} color="currentColor" />
<SearchIcon size={16} color="currentColor" />
```

## Accessibility Features

All components include:

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Semantic HTML structure 