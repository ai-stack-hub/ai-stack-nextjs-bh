# Component Library Documentation

This document provides comprehensive documentation for all components in the AI Stack NextJS application.

## Overview

The component library follows a modular, reusable design pattern with:
- TypeScript interfaces for all props
- Accessibility features (ARIA labels, keyboard navigation)
- Responsive design using Tailwind CSS
- Consistent styling and behavior
- No code duplication

## UI Components

### Button

**Location:** `src/components/ui/Button.tsx`

A versatile button component with multiple variants and states.

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
}
```

#### Usage

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

<Button variant="danger" loading={true}>
  Processing...
</Button>
```

#### Features

- 6 color variants (primary, secondary, success, warning, danger, info)
- 3 sizes (sm, md, lg)
- Loading state with spinner
- Keyboard navigation support
- Focus management
- Disabled state styling

### Card

**Location:** `src/components/ui/Card.tsx`

A container component for grouping related content.

#### Props

```typescript
interface CardProps {
  title?: string;
  subtitle?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  border?: boolean;
  className?: string;
  children?: ReactNode;
}
```

#### Usage

```tsx
<Card title="User Profile" subtitle="Personal information" padding="md">
  <p>Card content goes here</p>
</Card>
```

#### Features

- Optional title and subtitle
- Configurable padding and shadow
- Border toggle
- Responsive design

### Badge

**Location:** `src/components/ui/Badge.tsx`

A status indicator component for displaying labels and states.

#### Props

```typescript
interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  status?: Status | ServiceStatus;
  priority?: Priority;
  className?: string;
  children?: ReactNode;
}
```

#### Usage

```tsx
<Badge status="open">Open</Badge>
<Badge priority="high">High Priority</Badge>
<Badge variant="success">Success</Badge>
```

#### Features

- Automatic color mapping for status and priority
- Manual variant override
- Multiple sizes
- Semantic color coding

### Accordion

**Location:** `src/components/ui/Accordion.tsx`

A collapsible content component for organizing information.

#### Props

```typescript
interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: string;
  disabled?: boolean;
}
```

#### Usage

```tsx
<Accordion
  items={[
    {
      id: 'section1',
      title: 'Section 1',
      content: <p>Content for section 1</p>,
      icon: 'Home'
    }
  ]}
  multiple={true}
  defaultOpen={['section1']}
/>
```

#### Features

- Single or multiple expansion modes
- Default open sections
- Icon support
- Disabled state
- Smooth animations
- Keyboard navigation

### Avatar

**Location:** `src/components/ui/Avatar.tsx`

A user profile image component with fallback support.

#### Props

```typescript
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}
```

#### Usage

```tsx
<Avatar
  src="/path/to/image.jpg"
  alt="User name"
  fallback="JD"
  status="online"
  size="md"
/>
```

#### Features

- Image with fallback initials
- Status indicators
- Multiple sizes
- Responsive design

### Dropdown

**Location:** `src/components/ui/Dropdown.tsx`

A dropdown menu component with custom trigger and items.

#### Props

```typescript
interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
  className?: string;
}

interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  action?: () => void;
  disabled?: boolean;
  divider?: boolean;
}
```

#### Usage

```tsx
<Dropdown
  trigger={<button>Menu</button>}
  items={[
    { id: '1', label: 'Option 1', action: () => {} },
    { id: '2', label: 'Option 2', action: () => {} }
  ]}
  placement="bottom"
/>
```

#### Features

- Custom trigger element
- Multiple placement options
- Icon support
- Divider items
- Click outside to close
- Keyboard navigation

## Layout Components

### Header

**Location:** `src/components/layout/Header.tsx`

Fixed header component with user profile and navigation.

#### Props

```typescript
interface HeaderProps {
  user?: User;
  onLogout?: () => void;
  onAccountDetails?: () => void;
  className?: string;
}
```

#### Features

- Fixed positioning
- User profile dropdown
- Responsive design
- Accessibility support

### Sidebar

**Location:** `src/components/layout/Sidebar.tsx`

Collapsible sidebar navigation component.

#### Props

```typescript
interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  navigationItems?: NavigationItem[];
  className?: string;
}
```

#### Features

- Collapsible by default
- Hover expansion
- Smooth animations
- Navigation items
- Icon support

### Banner

**Location:** `src/components/layout/Banner.tsx`

Information banner component with dynamic content.

#### Props

```typescript
interface BannerProps {
  title: string;
  subtitle?: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}
```

#### Features

- Multiple variants
- Dismissible option
- Scrollable indicator
- Dynamic content

### Layout

**Location:** `src/components/layout/Layout.tsx`

Main layout wrapper component.

#### Props

```typescript
interface LayoutProps {
  showHeader?: boolean;
  showSidebar?: boolean;
  showBanner?: boolean;
  children?: ReactNode;
  className?: string;
}
```

#### Features

- Configurable layout sections
- Responsive grid system
- Proper spacing
- Mock user integration

## Feature Components

### TicketList

**Location:** `src/components/tickets/TicketList.tsx`

Component for displaying and managing tickets.

#### Features

- Ticket display with all fields
- Search functionality
- Status and priority filtering
- Sorting capabilities
- Loading states
- Responsive design

### ServiceAccordion

**Location:** `src/components/services/ServiceAccordion.tsx`

Component for displaying external services in grouped accordion format.

#### Features

- Grouped by provider
- Service status indicators
- Refresh functionality
- Icon support
- External link integration

## Styling

All components use Tailwind CSS classes and follow these principles:

- **Consistent spacing:** Using CSS custom properties
- **Color system:** Primary, secondary, success, warning, danger, info variants
- **Responsive design:** Mobile-first approach
- **Accessibility:** High contrast, focus indicators
- **Animations:** Smooth transitions and hover effects

## Accessibility Features

All components include:

- **ARIA labels:** Proper labeling for screen readers
- **Keyboard navigation:** Full keyboard support
- **Focus management:** Visible focus indicators
- **Semantic HTML:** Proper element usage
- **Color contrast:** WCAG compliant colors

## Usage Guidelines

1. **Import components:** Always import from the correct path
2. **Type safety:** Use TypeScript interfaces for props
3. **Accessibility:** Provide proper ARIA labels
4. **Responsive:** Test on different screen sizes
5. **Consistency:** Use the same patterns across components

## Testing

Each component should have:
- Unit tests for functionality
- Accessibility tests
- Responsive design tests
- Integration tests with other components

## Future Enhancements

- Add more component variants
- Implement theme switching
- Add animation libraries
- Create component playground
- Add Storybook integration 