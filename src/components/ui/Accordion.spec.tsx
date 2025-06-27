import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  const items = [
    { id: '1', title: 'Item 1', content: 'Content 1' },
    { id: '2', title: 'Item 2', content: 'Content 2', disabled: true },
  ];

  it('renders all items', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('opens item on click', () => {
    render(<Accordion items={items} />);
    const btn = screen.getByText('Item 1').closest('button');
    fireEvent.click(btn);
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('does not open disabled item', () => {
    render(<Accordion items={items} />);
    const btn = screen.getByText('Item 2').closest('button');
    fireEvent.click(btn);
    expect(screen.getByText('Content 2').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('supports multiple open', () => {
    render(<Accordion items={items} multiple defaultOpen={['1']} />);
    const btn2 = screen.getByText('Item 2').closest('button');
    fireEvent.click(btn2);
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('handles keyboard events', () => {
    render(<Accordion items={items} />);
    const btn = screen.getByText('Item 1').closest('button');
    fireEvent.keyDown(btn, { key: 'Enter' });
    expect(screen.getByText('Content 1')).toBeVisible();
    fireEvent.keyDown(btn, { key: ' ' });
    expect(screen.getByText('Content 1')).not.toBeVisible();
  });

  it('sets accessibility attributes', () => {
    render(
      <Accordion items={items} aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />
    );
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'label');
    expect(region).toHaveAttribute('aria-describedby', 'desc');
    expect(region).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 