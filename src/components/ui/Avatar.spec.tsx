import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="/avatar.png" alt="User" />);
    expect(screen.getByAltText('User')).toBeInTheDocument();
  });

  it('renders fallback initials when no src', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders default fallback when no src or fallback', () => {
    render(<Avatar />);
    expect(screen.getByText('U')).toBeInTheDocument();
  });

  it('applies size and status classes', () => {
    render(<Avatar size="xl" status="online" fallback="Jane Doe" />);
    const avatar = screen.getByText('JD').parentElement;
    expect(avatar.className).toMatch(/w-16/);
    expect(avatar.querySelector('span[aria-label="Status: online"]')).toBeInTheDocument();
  });

  it('sets accessibility attributes', () => {
    render(
      <Avatar aria-label="label" aria-describedby="desc" aria-labelledby="lbl" />
    );
    const avatar = screen.getByLabelText('label');
    expect(avatar).toHaveAttribute('aria-describedby', 'desc');
    expect(avatar).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 