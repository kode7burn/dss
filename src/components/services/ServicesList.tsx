import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../../data/services';

export const ServicesList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};