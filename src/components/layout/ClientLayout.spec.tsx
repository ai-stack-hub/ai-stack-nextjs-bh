import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientLayout from './ClientLayout';

describe('ClientLayout', () => {
  it('renders children inside Layout', () => {
    render(<ClientLayout><div>Child</div></ClientLayout>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('applies font variables to body', () => {
    render(<ClientLayout><div>Child</div></ClientLayout>);
    const body = document.body;
    expect(body.className).toMatch(/antialiased/);
  });
}); 