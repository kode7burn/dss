import React from 'react';
import { motion } from 'framer-motion';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { ServicesCTA } from '../components/services/ServicesCTA';

export const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <ServicesGrid />
          <ServicesCTA />
        </motion.div>
      </div>
    </main>
  );
};