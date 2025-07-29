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
      <div className="relative">
        {/* Welcome Banner - Full width with proper height */}
        <Banner />

        {/* Main Content Grid - Absolutely positioned to overlay on banner */}
        <div className="p-8 absolute top-28 left-0 right-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      </div>
    </Layout>
  );
}
