import React from 'react';
import { Shield, Users, Building, UserCheck, Lock } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    id: 'event-security',
    title: 'Event Security',
    description: 'Professional security services for events of all sizes, from corporate gatherings to large-scale concerts.',
    icon: Users
  },
  {
    id: 'commercial-security',
    title: 'Commercial Security',
    description: 'Comprehensive protection for businesses, including surveillance, access control, and security personnel.',
    icon: Building
  },
  {
    id: 'residential-security',
    title: 'Residential Security',
    description: 'Advanced security solutions for homes and residential communities, ensuring peace of mind.',
    icon: Shield
  },
  {
    id: 'private-security',
    title: 'Private Security',
    description: 'Personalized protection services for executives, VIPs, and high-profile individuals.',
    icon: UserCheck
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'State-of-the-art digital protection against cyber threats, data breaches, and online vulnerabilities.',
    icon: Lock
  }
];

export const ServicesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
};