import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children', () => {
    render(<Layout>Child</Layout>);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('shows header, sidebar, and banner by default', () => {
    render(<Layout>Child</Layout>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to AI Stack NextJS/)).toBeInTheDocument();
  });

  it('hides header, sidebar, and banner when toggled off', () => {
    render(<Layout showHeader={false} showSidebar={false} showBanner={false}>Child</Layout>);
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    expect(screen.queryByText(/Welcome to AI Stack NextJS/)).not.toBeInTheDocument();
  });

  it('sets accessibility attributes', () => {
    render(<Layout aria-label="label" aria-describedby="desc" aria-labelledby="lbl">A11y</Layout>);
    const layout = screen.getByLabelText('label');
    expect(layout).toHaveAttribute('aria-describedby', 'desc');
    expect(layout).toHaveAttribute('aria-labelledby', 'lbl');
  });
}); 