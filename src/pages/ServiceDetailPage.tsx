import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceOverview } from '../components/services/ServiceOverview';

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
    </main>
  );
};