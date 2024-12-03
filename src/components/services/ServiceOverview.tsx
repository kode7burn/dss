import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceOverviewProps {
  service: Service;
}

export const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-600 mb-8">{service.fullDescription}</p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Service Statistics</h3>
            <div className="grid grid-cols-2 gap-6">
              {service.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};