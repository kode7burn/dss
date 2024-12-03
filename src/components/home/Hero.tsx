import React from 'react';
import { Shield, Lock, Phone } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroFeatureCard } from './HeroFeatureCard';

const features = [
  { icon: Shield, title: '24/7 Protection', text: 'Round-the-clock security monitoring and response' },
  { icon: Lock, title: 'Advanced Systems', text: 'State-of-the-art security technology and infrastructure' },
  { icon: Phone, title: 'Rapid Response', text: '15-minute emergency response time guaranteed' }
];

export const Hero = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80")' }}
      />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        <div className="flex-1 flex items-center pt-20">
          <HeroContent />
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">
          {features.map((feature, index) => (
            <HeroFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};