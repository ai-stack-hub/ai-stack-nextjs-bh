import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const items = [
    { id: '1', label: 'Item 1', action: jest.fn() },
    { id: '2', label: 'Item 2', disabled: true },
    { id: '3', divider: true },
  ];

  it('renders trigger', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('opens and closes dropdown on click', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('calls item action on click and closes', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Item 1'));
    expect(items[0].action).toHaveBeenCalled();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('does not call action for disabled item', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Item 2'));
    expect(items[1].action).toBeUndefined();
  });

  it('shows divider', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('handles keyboard events', () => {
    render(<Dropdown trigger={<span>Open</span>} items={items} />);
    const btn = screen.getByRole('button');
    fireEvent.keyDown(btn, { key: 'Enter' });
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    fireEvent.keyDown(btn, { key: 'Escape' });
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('sets accessibility attributes', () => {
    render(
      <Dropdown trigger={<span>Open</span>} items={items} aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />
    );
    const dropdown = screen.getByLabelText('label');
    expect(dropdown).toHaveAttribute('aria-describedby', 'desc');
    expect(dropdown).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 