import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  index: number;
}

export const HeroFeatureCard = ({ icon: Icon, title, text, index }: HeroFeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
      className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:bg-black/60 transition-colors"
    >
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#990000] mb-3 sm:mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300">{text}</p>
    </motion.div>
  );
};