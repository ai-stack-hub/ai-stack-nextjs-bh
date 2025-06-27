import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Label</Badge>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('renders status and priority as label if no children', () => {
    render(<Badge status="open" />);
    expect(screen.getByText('open')).toBeInTheDocument();
    render(<Badge priority="high" />);
    expect(screen.getByText('high')).toBeInTheDocument();
  });

  it('applies variant, status, and priority classes', () => {
    render(<Badge variant="danger">Danger</Badge>);
    const badge = screen.getByText('Danger');
    expect(badge.className).toMatch(/bg-danger/);
    render(<Badge status="active">Active</Badge>);
    expect(screen.getByText('active').className).toMatch(/bg-success/);
    render(<Badge priority="critical">Critical</Badge>);
    expect(screen.getByText('critical').className).toMatch(/bg-danger/);
  });

  it('applies size classes', () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText('Large').className).toMatch(/py-1/);
  });

  it('sets accessibility attributes', () => {
    render(
      <Badge aria-label="label" aria-describedby="desc" aria-labelledby="lbl">A11y</Badge>
    );
    const badge = screen.getByText('A11y');
    expect(badge).toHaveAttribute('aria-label', 'label');
    expect(badge).toHaveAttribute('aria-describedby', 'desc');
    expect(badge).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 