// Application Constants - No magic numbers or strings
export const APP_CONSTANTS = {
  // Layout dimensions
  HEADER_HEIGHT: 'var(--header-height)',
  SIDEBAR_WIDTH: 'var(--sidebar-width)',
  SIDEBAR_COLLAPSED_WIDTH: 'var(--sidebar-collapsed-width)',
  BANNER_HEIGHT: 'var(--banner-height)',
  
  // Animation durations
  TRANSITION_FAST: 'var(--transition-fast)',
  TRANSITION_NORMAL: 'var(--transition-normal)',
  TRANSITION_SLOW: 'var(--transition-slow)',
  
  // Spacing
  SPACING: {
    XS: 'var(--spacing-xs)',
    SM: 'var(--spacing-sm)',
    MD: 'var(--spacing-md)',
    LG: 'var(--spacing-lg)',
    XL: 'var(--spacing-xl)',
    '2XL': 'var(--spacing-2xl)',
  },
  
  // Breakpoints
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  
  // API endpoints
  API_ENDPOINTS: {
    TICKETS: '/api/tickets',
    SERVICES: '/api/services',
    USERS: '/api/users',
  },
  
  // Status values
  STATUS: {
    OPEN: 'open',
    IN_PROGRESS: 'in_progress',
    RESOLVED: 'resolved',
    CLOSED: 'closed',
  },
  
  // Priority values
  PRIORITY: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    CRITICAL: 'critical',
  },
  
  // Service status
  SERVICE_STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    MAINTENANCE: 'maintenance',
    ERROR: 'error',
  },
  
  // Navigation items
  NAVIGATION: {
    HOME: {
      label: 'Home',
      path: '/',
      icon: 'Home',
    },
  },
  
  // User menu options
  USER_MENU_OPTIONS: {
    ACCOUNT_DETAILS: {
      label: 'Account Details',
      action: 'account',
    },
    LOGOUT: {
      label: 'Logout',
      action: 'logout',
    },
  },
  
  // Default values
  DEFAULTS: {
    PAGE_SIZE: 10,
    MAX_TITLE_LENGTH: 100,
    MAX_DESCRIPTION_LENGTH: 500,
  },
} as const;

// Type exports
export type Status = typeof APP_CONSTANTS.STATUS[keyof typeof APP_CONSTANTS.STATUS];
export type Priority = typeof APP_CONSTANTS.PRIORITY[keyof typeof APP_CONSTANTS.PRIORITY];
export type ServiceStatus = typeof APP_CONSTANTS.SERVICE_STATUS[keyof typeof APP_CONSTANTS.SERVICE_STATUS]; 