import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const ServicesHero = () => {
  return (
    <div className="relative h-[55vh] bg-black text-white flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")' }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <div className="w-20 h-[2px] bg-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Security Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Comprehensive protection for every aspect of your security needs, delivered by industry experts with decades of experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};