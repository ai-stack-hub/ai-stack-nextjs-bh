import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<Card title="Title" subtitle="Subtitle" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('applies padding and shadow classes', () => {
    render(<Card padding="lg" shadow="lg">Pad</Card>);
    const card = screen.getByText('Pad').parentElement;
    expect(card.className).toMatch(/p-8/);
    expect(card.className).toMatch(/shadow-lg/);
  });

  it('does not render border if border=false', () => {
    render(<Card border={false}>NoBorder</Card>);
    const card = screen.getByText('NoBorder').parentElement;
    expect(card.className).not.toMatch(/border/);
  });

  it('sets accessibility attributes', () => {
    render(
      <Card aria-label="label" aria-describedby="desc" aria-labelledby="lbl">A11y</Card>
    );
    const card = screen.getByText('A11y').parentElement;
    expect(card).toHaveAttribute('aria-label', 'label');
    expect(card).toHaveAttribute('aria-describedby', 'desc');
    expect(card).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 