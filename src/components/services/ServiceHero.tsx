import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../../types';

interface ServiceHeroProps {
  service: Service;
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  return (
    <div className="relative h-[45vh] bg-black text-white flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <service.icon className="w-12 h-12 text-primary" />
            <div className="w-20 h-[2px] bg-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            {service.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};