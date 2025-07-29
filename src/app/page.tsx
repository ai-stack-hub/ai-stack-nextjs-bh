'use client';

import React from 'react';
import Layout from '../lib/components/layout/layout';
import Banner from '../lib/components/banner/banner';
import TicketsWidget from '../lib/widgets/tickets-widget/tickets-widget';
import ServicesWidget from '../lib/widgets/services-widget/services-widget';
import ticketsData from '../api/data/tickets.json';
import servicesData from '../api/data/services.json';
import { Ticket } from '../lib/widgets/tickets-widget/tickets-widget.types';
import { Service } from '../lib/widgets/services-widget/services-widget.types';

export default function HomePage() {
  return (
    <Layout>
      {/* Welcome Banner - Full width */}
      <Banner />
      
      {/* Main Content Grid - With padding */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets Widget - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <TicketsWidget tickets={ticketsData.tickets as Ticket[]} />
          </div>
          
          {/* Services Widget - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            <ServicesWidget services={servicesData.services as Service[]} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
