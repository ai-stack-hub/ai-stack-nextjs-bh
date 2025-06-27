import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ServiceAccordion from './ServiceAccordion';
import * as serviceServiceModule from '@/api/services/serviceService';

jest.mock('@/api/services/serviceService');

describe('ServiceAccordion', () => {
  const mockServiceGroups = [
    {
      provider: 'External Services',
      services: [
        {
          id: 'service1',
          name: 'API Service',
          description: 'External API service',
          status: 'operational',
          url: 'https://api.example.com',
          category: 'external',
        },
      ],
    },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
    (serviceServiceModule.serviceService.getServiceGroups as jest.Mock).mockResolvedValue(mockServiceGroups);
  });

  it('renders loading state', async () => {
    (serviceServiceModule.serviceService.getServiceGroups as jest.Mock).mockImplementationOnce(() => new Promise(() => {}));
    render(<ServiceAccordion />);
    // In loading state, we should see skeleton elements
    const skeletonContainer = document.querySelector('.animate-pulse');
    expect(skeletonContainer).toBeInTheDocument();
  });

  it('renders service groups', async () => {
    render(<ServiceAccordion />);
    await waitFor(() => expect(screen.getAllByText('External Services')).toHaveLength(2));
    expect(screen.getByText('API Service')).toBeInTheDocument();
  });

  it('handles accordion toggle', async () => {
    render(<ServiceAccordion />);
    await waitFor(() => expect(screen.getAllByText('External Services')).toHaveLength(2));
    
    const accordionButton = screen.getByRole('button', { name: /External Services/i });
    fireEvent.click(accordionButton);
    
    expect(screen.getByText('API Service')).toBeInTheDocument();
  });

  it('shows no services message', async () => {
    (serviceServiceModule.serviceService.getServiceGroups as jest.Mock).mockResolvedValueOnce([]);
    render(<ServiceAccordion />);
    await waitFor(() => expect(screen.getByText('No services configured')).toBeInTheDocument());
  });

  it('handles error in loading', async () => {
    (serviceServiceModule.serviceService.getServiceGroups as jest.Mock).mockRejectedValueOnce(new Error('fail'));
    render(<ServiceAccordion />);
    await waitFor(() => expect(screen.getByText('External Services')).toBeInTheDocument());
    // No crash
  });
}); 