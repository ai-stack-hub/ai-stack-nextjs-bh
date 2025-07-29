import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './banner';

describe('Banner', () => {
  it('renders welcome message with user name', () => {
    render(<Banner />);
    expect(screen.getByText(/Welcome, John/)).toBeInTheDocument();
  });

  it('renders summary text', () => {
    render(<Banner />);
    expect(screen.getByText(/Here is a summary of your dashboard/)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Banner className="custom-class" />);
    const banner = screen.getByText(/Welcome, John/).parentElement?.parentElement;
    expect(banner).toHaveClass('custom-class');
  });

  it('has proper heading structure', () => {
    render(<Banner />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Welcome, John/);
  });

  it('has correct styling classes', () => {
    render(<Banner />);
    const banner = screen.getByText(/Welcome, John/).parentElement?.parentElement;
    expect(banner).toHaveClass('bg-banner-bg', 'text-white', 'pt-6', 'pb-28', 'w-full');
  });
}); 