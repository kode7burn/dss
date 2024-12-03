import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export const ServicesCTA = () => {
  return (
    <div className="bg-black text-white rounded-2xl overflow-hidden">
      <div className="relative px-6 py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Security?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with our security experts today and discover how we can protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md inline-flex items-center justify-center"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="tel:8005550000"
                className="border border-white hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (800) 555-0000
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};