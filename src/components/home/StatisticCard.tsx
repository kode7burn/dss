import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatisticCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  index: number;
}

export const StatisticCard = ({ icon: Icon, value, label, description, index }: StatisticCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-primary">{value}</div>
        <h3 className="text-xl font-semibold text-gray-900">{label}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};