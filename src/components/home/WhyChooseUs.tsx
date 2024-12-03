import React from 'react';
import { motion } from 'framer-motion';
import { StatisticCard } from './StatisticCard';
import { Shield, Award, Clock, Users, Star, CheckCircle } from 'lucide-react';

const statistics = [
  {
    icon: Shield,
    value: '50,000+',
    label: 'Security Operations',
    description: 'Successfully completed operations across various sectors'
  },
  {
    icon: Users,
    value: '1,000+',
    label: 'Security Personnel',
    description: 'Highly trained and certified security professionals'
  },
  {
    icon: Star,
    value: '99.8%',
    label: 'Client Satisfaction',
    description: 'Based on post-service client feedback and reviews'
  },
  {
    icon: Clock,
    value: '< 15min',
    label: 'Response Time',
    description: 'Average emergency response time nationwide'
  },
  {
    icon: CheckCircle,
    value: '98.5%',
    label: 'Incident Prevention',
    description: 'Successful threat prevention rate in active deployments'
  },
  {
    icon: Award,
    value: '25+',
    label: 'Years Experience',
    description: 'Providing elite security services since 1995'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Diligent Security</h2>
          <p className="text-xl text-gray-600">
            Industry-leading expertise backed by concrete results and a proven track record of excellence in security services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <StatisticCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};