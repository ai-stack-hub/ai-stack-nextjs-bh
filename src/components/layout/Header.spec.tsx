import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const user = { id: '1', name: 'Jane Doe', avatar: '/avatar.png', email: 'jane@example.com', role: 'admin' };
  it('renders user name and avatar', () => {
    render(<Header user={user} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByAltText('Jane Doe')).toBeInTheDocument();
  });

  it('shows dropdown menu and handles actions', () => {
    const onLogout = jest.fn();
    const onAccountDetails = jest.fn();
    render(<Header user={user} onLogout={onLogout} onAccountDetails={onAccountDetails} />);
    // Open dropdown
    fireEvent.click(screen.getByRole('button'));
    // Account details
    fireEvent.click(screen.getByText(/Account Details/i));
    expect(onAccountDetails).toHaveBeenCalled();
    // Open dropdown again
    fireEvent.click(screen.getByRole('button'));
    // Logout
    fireEvent.click(screen.getAllByText(/Logout/i)[0]);
    expect(onLogout).toHaveBeenCalled();
  });

  it('sets accessibility attributes', () => {
    render(<Header user={user} aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />);
    const header = screen.getByLabelText('label');
    expect(header).toHaveAttribute('aria-describedby', 'desc');
    expect(header).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 