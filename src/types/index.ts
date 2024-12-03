import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
  benefits: string[];
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
  }[];
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ServicePageProps {
  service: Service;
}