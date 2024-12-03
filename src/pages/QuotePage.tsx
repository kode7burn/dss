import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { QuoteForm } from '../components/quote/QuoteForm';

export const QuotePage = () => {
  return (
    <main className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <PageHeader
          title="Request a Quote"
          description="Get a customized security solution tailored to your needs. Fill out the form below and our team will get back to you within 24 hours."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </main>
  );
};