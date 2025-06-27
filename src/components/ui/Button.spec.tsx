import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant and size classes', () => {
    render(<Button variant="danger" size="lg">Danger</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/bg-danger/);
    expect(btn.className).toMatch(/h-12/);
  });

  it('handles click event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} disabled>Disabled</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} loading>Loading</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('handles keyboard events (Enter/Space)', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Key</Button>);
    const btn = screen.getByRole('button');
    fireEvent.keyDown(btn, { key: 'Enter' });
    fireEvent.keyDown(btn, { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('sets accessibility attributes', () => {
    render(
      <Button aria-label="label" aria-describedby="desc" aria-labelledby="lbl">A11y</Button>
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-label', 'label');
    expect(btn).toHaveAttribute('aria-describedby', 'desc');
    expect(btn).toHaveAttribute('aria-labelledby', 'lbl');
  });

  it('sets tabIndex to -1 when disabled or loading', () => {
    const { rerender } = render(<Button disabled>Tab</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '-1');
    rerender(<Button loading>Tab</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '-1');
  });
}); 