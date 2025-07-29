import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-button-bg');

    rerender(<Button variant="success">Success</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-success');

    rerender(<Button variant="warning">Warning</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-warning');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-danger');

    rerender(<Button variant="info">Info</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-info');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3', 'py-1.5', 'text-sm');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-sm');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 