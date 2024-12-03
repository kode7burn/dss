import React from 'react';
import { Hero } from '../components/home/Hero';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServiceSnapshots } from '../components/home/ServiceSnapshots';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ServiceSnapshots />
    </main>
  );
};