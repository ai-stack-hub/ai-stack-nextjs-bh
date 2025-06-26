"use client";

import React, { useState, useEffect } from 'react';
import { ServiceGroup } from '@/types/components';
import { serviceService } from '@/api/services/serviceService';
import Accordion from '@/components/ui/Accordion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { RefreshCw, ExternalLink, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

const ServiceAccordion: React.FC = () => {
  const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      const data = await serviceService.getServiceGroups();
      setServiceGroups(data);
    } catch (error) {
      console.error('Failed to load services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await serviceService.refreshServiceStatuses();
      await loadServices();
    } catch (error) {
      console.error('Failed to refresh services:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'inactive':
        return <XCircle className="h-4 w-4 text-gray-400" />;
      case 'maintenance':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-danger" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getIconComponent = (iconName: string) => {
    // This would be replaced with actual icon mapping
    const iconMap: { [key: string]: React.ReactNode } = {
      Cloud: <div className="w-4 h-4 bg-blue-500 rounded" />,
      Mail: <div className="w-4 h-4 bg-red-500 rounded" />,
      Calendar: <div className="w-4 h-4 bg-green-500 rounded" />,
      BarChart: <div className="w-4 h-4 bg-purple-500 rounded" />,
      Facebook: <div className="w-4 h-4 bg-blue-600 rounded" />,
      DollarSign: <div className="w-4 h-4 bg-green-600 rounded" />,
      Instagram: <div className="w-4 h-4 bg-pink-500 rounded" />,
      Briefcase: <div className="w-4 h-4 bg-gray-600 rounded" />,
      Users: <div className="w-4 h-4 bg-blue-700 rounded" />,
      MessageSquare: <div className="w-4 h-4 bg-green-700 rounded" />,
      Code: <div className="w-4 h-4 bg-gray-700 rounded" />,
      GitBranch: <div className="w-4 h-4 bg-gray-800 rounded" />,
      Play: <div className="w-4 h-4 bg-purple-600 rounded" />,
      Package: <div className="w-4 h-4 bg-orange-500 rounded" />,
    };
    
    return iconMap[iconName] || <div className="w-4 h-4 bg-gray-400 rounded" />;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const accordionItems = serviceGroups.map((group) => ({
    id: group.provider.toLowerCase(),
    title: group.provider,
    content: (
      <div className="space-y-3">
        {group.services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                {getIconComponent(service.icon)}
                <div>
                  <h4 className="font-medium text-gray-900">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {getStatusIcon(service.status)}
                <Badge status={service.status} />
              </div>
              
              {service.url && (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={`Visit ${service.name}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
        
        <div className="text-xs text-gray-500 text-center">
          Last checked: {formatDate(group.services[0]?.lastChecked || new Date().toISOString())}
        </div>
      </div>
    ),
  }));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">External Services</h2>
        <Button
          onClick={handleRefresh}
          disabled={refreshing}
          size="sm"
          variant="secondary"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <Accordion
        items={accordionItems}
        multiple={true}
        defaultOpen={['google', 'facebook']}
      />

      {serviceGroups.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No services configured
        </div>
      )}
    </div>
  );
};

export default ServiceAccordion; 