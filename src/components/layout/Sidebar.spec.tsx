import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: 'Home', path: '/', active: true },
    { id: 'about', label: 'About', icon: 'Home', path: '/about', active: false },
  ];

  it('renders navigation items', () => {
    render(<Sidebar navigationItems={navigationItems} isCollapsed={false} />);
    expect(screen.getAllByText('Home')).toHaveLength(3);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('handles toggle', () => {
    const onToggle = jest.fn();
    render(<Sidebar onToggle={onToggle} isCollapsed={false} />);
    fireEvent.click(screen.getByLabelText('Toggle sidebar'));
    expect(onToggle).toHaveBeenCalled();
  });

  it('expands on hover when collapsed', () => {
    render(<Sidebar isCollapsed navigationItems={navigationItems} />);
    const aside = screen.getByRole('complementary');
    fireEvent.mouseEnter(aside);
    fireEvent.mouseLeave(aside);
    // No assertion, just ensure no crash
  });

  it('sets accessibility attributes', () => {
    render(<Sidebar aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />);
    const aside = screen.getByLabelText('label');
    expect(aside).toHaveAttribute('aria-describedby', 'desc');
    expect(aside).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 