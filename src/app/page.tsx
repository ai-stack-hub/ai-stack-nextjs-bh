import React from 'react';
import Layout from '@/components/layout/Layout';
import TicketList from '@/components/tickets/TicketList';
import ServiceAccordion from '@/components/services/ServiceAccordion';

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Tickets (7/12 on large screens) */}
        <div className="lg:col-span-7">
          <TicketList />
        </div>
        
        {/* Right Column - Services (5/12 on large screens) */}
        <div className="lg:col-span-5">
          <ServiceAccordion />
        </div>
      </div>
    </Layout>
  );
}
