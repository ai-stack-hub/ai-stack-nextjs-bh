import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '../../icons';

export interface Service {
  id: string;
  name: string;
  status: string;
  lastAccessed: string;
  description: string;
}

export interface ServicesWidgetProps {
  services: Service[];
  className?: string;
}

const ServicesWidget: React.FC<ServicesWidgetProps> = ({ services, className = '' }) => {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const toggleService = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={cn('bg-card-bg rounded-lg border border-border p-6', className)}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-text-primary">My Services</h2>
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {services.map((service) => {
          const isExpanded = expandedServices.has(service.id);
          
          return (
            <div
              key={service.id}
              className="border border-border rounded-lg overflow-hidden"
            >
              {/* Service Header */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-light/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-expanded={isExpanded}
                aria-controls={`service-${service.id}`}
              >
                <span className="font-medium text-text-primary">
                  {service.name}
                </span>
                <ChevronDownIcon
                  size={16}
                  color="currentColor"
                  className={cn(
                    'transition-transform duration-200',
                    isExpanded && 'rotate-180'
                  )}
                />
              </button>

              {/* Service Details */}
              {isExpanded && (
                <div
                  id={`service-${service.id}`}
                  className="px-4 pb-4 border-t border-border"
                >
                  <div className="pt-4 space-y-3">
                    <div>
                      <span className="text-sm font-medium text-text-secondary">Status:</span>
                      <span className="ml-2 text-sm text-text-primary capitalize">
                        {service.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text-secondary">Last Accessed:</span>
                      <span className="ml-2 text-sm text-text-primary">
                        {formatDate(service.lastAccessed)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-text-secondary">Description:</span>
                      <p className="mt-1 text-sm text-text-primary">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesWidget; 