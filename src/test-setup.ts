import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock lucide-react icons using React.createElement, requiring React inside the factory
/* eslint-disable */
jest.mock('lucide-react', () => {
  const React = require('react');
  return {
    ChevronDown: () => React.createElement('div', { 'data-testid': 'chevron-down' }, 'ChevronDown'),
    Home: () => React.createElement('div', { 'data-testid': 'home-icon' }, 'Home'),
    X: () => React.createElement('div', { 'data-testid': 'x-icon' }, 'X'),
    Search: () => React.createElement('div', { 'data-testid': 'search-icon' }, 'Search'),
    RefreshCw: () => React.createElement('div', { 'data-testid': 'refresh-icon' }, 'RefreshCw'),
    ExternalLink: () => React.createElement('div', { 'data-testid': 'external-link-icon' }, 'ExternalLink'),
    AlertCircle: () => React.createElement('div', { 'data-testid': 'alert-circle-icon' }, 'AlertCircle'),
    CheckCircle: () => React.createElement('div', { 'data-testid': 'check-circle-icon' }, 'CheckCircle'),
    Clock: () => React.createElement('div', { 'data-testid': 'clock-icon' }, 'Clock'),
    XCircle: () => React.createElement('div', { 'data-testid': 'x-circle-icon' }, 'XCircle'),
  };
});
/* eslint-enable */

// Mock Next.js fonts
jest.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
    style: { fontFamily: 'var(--font-geist-sans)' },
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
    style: { fontFamily: 'var(--font-geist-mono)' },
  }),
}));

// Global test environment setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); 