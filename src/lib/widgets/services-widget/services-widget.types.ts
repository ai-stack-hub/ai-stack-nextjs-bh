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