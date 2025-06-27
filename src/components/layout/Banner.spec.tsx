import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('renders title and subtitle', () => {
    render(<Banner title="Hello" subtitle="World" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('calls onDismiss when dismissible', () => {
    const onDismiss = jest.fn();
    render(<Banner title="Dismiss" dismissible onDismiss={onDismiss} />);
    fireEvent.click(screen.getByLabelText('Dismiss banner'));
    expect(onDismiss).toHaveBeenCalled();
  });

  it('handles keyboard dismiss', () => {
    const onDismiss = jest.fn();
    render(<Banner title="Dismiss" dismissible onDismiss={onDismiss} />);
    fireEvent.keyDown(screen.getByLabelText('Dismiss banner'), { key: 'Enter' });
    fireEvent.keyDown(screen.getByLabelText('Dismiss banner'), { key: ' ' });
    expect(onDismiss).toHaveBeenCalledTimes(2);
  });

  it('applies variant classes', () => {
    render(<Banner title="Info" variant="info" />);
    const banner = screen.getByText('Info').closest('div');
    expect(banner.className).toMatch(/bg-info/);
  });

  it('sets accessibility attributes', () => {
    render(<Banner title="A11y" aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />);
    const banner = screen.getByLabelText('label');
    expect(banner).toHaveAttribute('aria-describedby', 'desc');
    expect(banner).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 