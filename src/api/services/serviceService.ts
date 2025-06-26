import { Service, ServiceGroup } from '@/types/components';
import { ServiceStatus } from '@/config/constants';
import servicesData from '@/api/data/services.json';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ServiceService {
  private serviceGroups: ServiceGroup[] = servicesData as ServiceGroup[];

  async getAllServices(): Promise<Service[]> {
    await delay(500);
    return this.serviceGroups.flatMap(group => group.services);
  }

  async getServiceGroups(): Promise<ServiceGroup[]> {
    await delay(400);
    return this.serviceGroups;
  }

  async getServicesByProvider(provider: string): Promise<Service[]> {
    await delay(300);
    const group = this.serviceGroups.find(g => g.provider === provider);
    return group ? group.services : [];
  }

  async getServiceById(id: string): Promise<Service | null> {
    await delay(300);
    for (const group of this.serviceGroups) {
      const service = group.services.find(s => s.id === id);
      if (service) return service;
    }
    return null;
  }

  async updateServiceStatus(id: string, status: ServiceStatus): Promise<Service | null> {
    await delay(400);
    for (const group of this.serviceGroups) {
      const serviceIndex = group.services.findIndex(s => s.id === id);
      if (serviceIndex !== -1) {
        group.services[serviceIndex] = {
          ...group.services[serviceIndex],
          status,
          lastChecked: new Date().toISOString(),
        };
        return group.services[serviceIndex];
      }
    }
    return null;
  }

  async addService(provider: string, service: Omit<Service, 'id' | 'provider' | 'lastChecked'>): Promise<Service> {
    await delay(400);
    const newService: Service = {
      ...service,
      id: `${provider.toLowerCase()}-${Date.now()}`,
      provider,
      lastChecked: new Date().toISOString(),
    };

    let group = this.serviceGroups.find(g => g.provider === provider);
    if (!group) {
      group = { provider, services: [] };
      this.serviceGroups.push(group);
    }
    group.services.push(newService);
    return newService;
  }

  async removeService(id: string): Promise<boolean> {
    await delay(300);
    for (const group of this.serviceGroups) {
      const serviceIndex = group.services.findIndex(s => s.id === id);
      if (serviceIndex !== -1) {
        group.services.splice(serviceIndex, 1);
        if (group.services.length === 0) {
          const groupIndex = this.serviceGroups.findIndex(g => g.provider === group.provider);
          if (groupIndex !== -1) {
            this.serviceGroups.splice(groupIndex, 1);
          }
        }
        return true;
      }
    }
    return false;
  }

  async getServicesByStatus(status: ServiceStatus): Promise<Service[]> {
    await delay(300);
    return this.serviceGroups.flatMap(group => 
      group.services.filter(service => service.status === status)
    );
  }

  async searchServices(query: string): Promise<Service[]> {
    await delay(400);
    const lowerQuery = query.toLowerCase();
    return this.serviceGroups.flatMap(group =>
      group.services.filter(service =>
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.provider.toLowerCase().includes(lowerQuery)
      )
    );
  }

  async refreshServiceStatuses(): Promise<void> {
    await delay(1000);
    // Simulate status refresh
    for (const group of this.serviceGroups) {
      for (const service of group.services) {
        service.lastChecked = new Date().toISOString();
        // Randomly change some statuses for demo
        if (Math.random() < 0.1) {
          const statuses: ServiceStatus[] = ['active', 'inactive', 'maintenance', 'error'];
          service.status = statuses[Math.floor(Math.random() * statuses.length)];
        }
      }
    }
  }
}

export const serviceService = new ServiceService(); 