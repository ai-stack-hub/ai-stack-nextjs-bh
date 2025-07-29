import React from 'react';
import { render, screen } from '@testing-library/react';
import StatusBadge from './status-badge';

describe('StatusBadge', () => {
  it('renders with open status', () => {
    render(<StatusBadge status="open" />);
    const badge = screen.getByRole('status');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Open');
    expect(badge).toHaveClass('bg-success/10');
  });

  it('renders with closed status', () => {
    render(<StatusBadge status="closed" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveTextContent('Closed');
    expect(badge).toHaveClass('bg-danger/10');
  });

  it('renders with pending status', () => {
    render(<StatusBadge status="pending" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveTextContent('Pending');
    expect(badge).toHaveClass('bg-warning/10');
  });

  it('renders with inProgress status', () => {
    render(<StatusBadge status="inProgress" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveTextContent('InProgress');
    expect(badge).toHaveClass('bg-info/10');
  });

  it('applies custom className', () => {
    render(<StatusBadge status="open" className="custom-class" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(<StatusBadge status="open" />);
    const badge = screen.getByRole('status');
    expect(badge).toHaveAttribute('aria-label', 'Status: open');
  });
}); 