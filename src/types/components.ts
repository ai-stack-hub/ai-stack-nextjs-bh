import { ReactNode } from 'react';
import { Status, Priority, ServiceStatus } from '@/config/constants';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Card component props
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  border?: boolean;
}

// Badge component props
export interface BadgeProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  status?: Status | ServiceStatus;
  priority?: Priority;
}

// Accordion component props
export interface AccordionProps extends BaseComponentProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
}

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: string;
  disabled?: boolean;
}

// Avatar component props
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

// Dropdown component props
export interface DropdownProps extends BaseComponentProps {
  trigger: ReactNode;
  items: DropdownItem[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
}

export interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  action?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

// Ticket types
export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  tags?: string[];
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: ServiceStatus;
  provider: string;
  url?: string;
  lastChecked?: string;
}

export interface ServiceGroup {
  provider: string;
  services: Service[];
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  lastLogin?: string;
}

// Layout types
export interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean;
  showSidebar?: boolean;
  showBanner?: boolean;
}

// Header types
export interface HeaderProps extends BaseComponentProps {
  user?: User;
  onLogout?: () => void;
  onAccountDetails?: () => void;
}

// Sidebar types
export interface SidebarProps extends BaseComponentProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  navigationItems?: NavigationItem[];
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  active?: boolean;
  disabled?: boolean;
}

// Banner types
export interface BannerProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  dismissible?: boolean;
  onDismiss?: () => void;
}

// Theme types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    light: string;
    dark: string;
    background: string;
    foreground: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
} 