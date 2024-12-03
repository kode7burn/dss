import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Protecting What
        <span className="text-[#990000]"> Matters Most</span>
      </h1>
      <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl">
        Industry-leading security solutions tailored to your needs. 
        Trust Diligent Security Services to safeguard your assets 24/7.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#990000] px-6 sm:px-8 py-3 rounded-md hover:bg-[#800000] transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <Phone className="w-5 h-5 mr-2" />
          Emergency Response
        </button>
        <Link 
          to="/quote"
          className="border border-white px-6 sm:px-8 py-3 rounded-md hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
        >
          Get a Quote
        </Link>
      </div>
    </motion.div>
  );
};