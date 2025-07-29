// Application Constants
export const APP_CONFIG = {
  name: 'Dashboard',
  version: '1.0.0',
  user: {
    name: 'John Doe',
    initials: 'JD',
  },
} as const;

// Layout Constants
export const LAYOUT_CONFIG = {
  header: {
    height: '64px',
    zIndex: 1000,
  },
  sidebar: {
    width: {
      collapsed: '64px',
      expanded: '240px',
    },
    zIndex: 999,
  },
  content: {
    padding: '24px',
    gap: '24px',
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Status Colors
export const STATUS_COLORS = {
  open: 'success',
  closed: 'danger',
  pending: 'warning',
  inProgress: 'info',
} as const;

// Priority Colors
export const PRIORITY_COLORS = {
  high: 'danger',
  medium: 'warning',
  low: 'info',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    href: '/',
  },
  {
    id: 'tickets',
    label: 'Tickets',
    icon: 'tickets',
    href: '/tickets',
  },
] as const;

// Services
export const SERVICES = [
  'Google',
  'Facebook',
  'Microsoft',
  'Slack',
  'GitLab',
] as const; 