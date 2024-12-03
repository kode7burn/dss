import { Service } from '../types';
import { Shield, Users, Building, UserCheck, Lock } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'event-security',
    title: 'Event Security',
    description: 'Professional security services for events of all sizes.',
    icon: Users,
    fullDescription: 'Our event security services provide comprehensive protection for gatherings of any scale. From corporate meetings to large-scale concerts, we ensure the safety of all attendees while maintaining a welcoming atmosphere.',
    benefits: [
      'Trained crowd management specialists',
      'Advanced surveillance systems',
      'Emergency response protocols',
      'Access control management',
      'VIP protection services',
      'Real-time communication systems'
    ],
    features: [
      'Pre-event security assessment',
      'Customized security planning',
      'Licensed security personnel',
      'Emergency response team',
      'Post-event reporting'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Detailed discussion of event requirements and security needs'
      },
      {
        title: 'Risk Assessment',
        description: 'Comprehensive evaluation of potential security challenges'
      },
      {
        title: 'Security Planning',
        description: 'Development of tailored security protocols and staffing plans'
      },
      {
        title: 'Team Deployment',
        description: 'Strategic positioning of security personnel and equipment'
      },
      {
        title: 'Active Monitoring',
        description: '24/7 surveillance and incident response during the event'
      }
    ],
    faqs: [
      {
        question: 'How many security personnel do I need for my event?',
        answer: 'The number of security personnel depends on factors such as event size, venue layout, and expected attendance. We typically recommend one security officer per 75-100 guests.'
      },
      {
        question: 'Do you provide emergency medical response?',
        answer: 'Yes, we can include trained medical response personnel as part of our security team for your event.'
      },
      {
        question: 'What types of events do you cover?',
        answer: 'We provide security for all types of events including corporate functions, concerts, sporting events, weddings, and private parties.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Event Director',
        company: 'Global Events Co.',
        content: 'Their team\'s professionalism and attention to detail made our international conference a success. The security was thorough yet unobtrusive.'
      },
      {
        name: 'Michael Chen',
        role: 'Festival Organizer',
        company: 'Summer Music Festival',
        content: 'Managing security for a 3-day festival with 50,000 attendees was flawless. Their crowd management expertise is unmatched.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Events Secured', value: '1,000+' },
      { label: 'Security Staff', value: '250+' },
      { label: 'Years Experience', value: '25+' }
    ]
  },
  {
    id: 'commercial-security',
    title: 'Commercial Security',
    description: 'Comprehensive protection for businesses and commercial properties.',
    icon: Building,
    fullDescription: 'Our commercial security solutions provide complete protection for businesses of all sizes. We combine cutting-edge technology with professional security personnel to create a robust security infrastructure.',
    benefits: [
      'Access control systems',
      '24/7 surveillance monitoring',
      'Security personnel deployment',
      'Emergency response protocols',
      'Asset protection',
      'Risk assessment services'
    ],
    features: [
      'Advanced surveillance systems',
      'Integrated access control',
      'Professional security staff',
      'Emergency response planning',
      'Regular security audits'
    ],
    process: [
      {
        title: 'Security Assessment',
        description: 'Comprehensive evaluation of your facility\'s security needs'
      },
      {
        title: 'Custom Planning',
        description: 'Development of tailored security protocols'
      },
      {
        title: 'System Implementation',
        description: 'Installation of security systems and deployment of personnel'
      },
      {
        title: 'Staff Training',
        description: 'Training your team on security protocols and procedures'
      },
      {
        title: 'Ongoing Support',
        description: '24/7 monitoring and regular security updates'
      }
    ],
    faqs: [
      {
        question: 'What types of businesses do you serve?',
        answer: 'We serve businesses of all sizes, from small retail stores to large corporate campuses.'
      },
      {
        question: 'Do you provide 24/7 monitoring?',
        answer: 'Yes, we offer round-the-clock monitoring services through our state-of-the-art security operations center.'
      },
      {
        question: 'Can you integrate with existing security systems?',
        answer: 'Yes, our team can integrate with most existing security infrastructure while upgrading necessary components.'
      }
    ],
    testimonials: [
      {
        name: 'David Wilson',
        role: 'Facility Manager',
        company: 'Tech Innovation Center',
        content: 'Their integrated security solution has significantly improved our facility\'s safety while streamlining access control.'
      },
      {
        name: 'Lisa Rodriguez',
        role: 'Operations Director',
        company: 'Metropolitan Mall',
        content: 'The professionalism and effectiveness of their security team has exceeded our expectations.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Protected Facilities', value: '500+' },
      { label: 'Security Officers', value: '1,000+' },
      { label: 'Client Satisfaction', value: '99%' }
    ]
  },
  {
    id: 'residential-security',
    title: 'Residential Security',
    description: 'Advanced protection solutions for homes and residential communities.',
    icon: Shield,
    fullDescription: 'Our residential security services deliver peace of mind through comprehensive home protection. We safeguard your property with state-of-the-art technology and professional security personnel.',
    benefits: [
      'Smart home security integration',
      'Perimeter protection',
      'Video surveillance',
      'Access control systems',
      'Mobile patrol services',
      'Emergency response'
    ],
    features: [
      'HD security cameras',
      'Smart doorbell systems',
      'Motion detection',
      'Mobile app control',
      'Professional monitoring'
    ],
    process: [
      {
        title: 'Home Assessment',
        description: 'Thorough evaluation of your property\'s security needs'
      },
      {
        title: 'Security Design',
        description: 'Custom security solution planning for your home'
      },
      {
        title: 'System Installation',
        description: 'Professional installation of security equipment'
      },
      {
        title: 'System Testing',
        description: 'Comprehensive testing of all security components'
      },
      {
        title: 'Ongoing Monitoring',
        description: '24/7 professional monitoring and support'
      }
    ],
    faqs: [
      {
        question: 'Can I control my security system remotely?',
        answer: 'Yes, our systems come with a mobile app for remote monitoring and control.'
      },
      {
        question: 'Do you offer video surveillance?',
        answer: 'Yes, we provide HD cameras with night vision and motion detection capabilities.'
      },
      {
        question: 'What happens during a power outage?',
        answer: 'Our systems include backup power supplies to maintain protection during outages.'
      }
    ],
    testimonials: [
      {
        name: 'Robert Thompson',
        role: 'Homeowner',
        company: 'Luxury Estate',
        content: 'The peace of mind their security system provides is invaluable. The mobile app makes monitoring our home effortless.'
      },
      {
        name: 'Emily Martinez',
        role: 'HOA President',
        company: 'Parkview Community',
        content: 'Their community-wide security solution has dramatically improved resident safety and property values.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Protected Homes', value: '10,000+' },
      { label: 'Response Time', value: '< 5 min' },
      { label: 'Client Rating', value: '4.9/5' }
    ]
  },
  {
    id: 'private-security',
    title: 'Private Security',
    description: 'Elite protection services for executives and VIP clients.',
    icon: UserCheck,
    fullDescription: 'Our private security services provide discreet, professional protection for high-profile individuals. We combine advanced threat assessment with experienced personnel to ensure complete security.',
    benefits: [
      'Executive protection',
      'Travel security',
      'Threat assessment',
      'Secure transportation',
      'Close protection teams',
      'Risk management'
    ],
    features: [
      'Personal security detail',
      'Route planning',
      'Advance location scouting',
      'Secure communications',
      'Emergency evacuation'
    ],
    process: [
      {
        title: 'Risk Analysis',
        description: 'Comprehensive assessment of security risks and threats'
      },
      {
        title: 'Protection Planning',
        description: 'Development of personalized security protocols'
      },
      {
        title: 'Team Assignment',
        description: 'Selection of specialized security personnel'
      },
      {
        title: 'Logistics Coordination',
        description: 'Planning of secure routes and safe locations'
      },
      {
        title: 'Continuous Protection',
        description: 'Ongoing security coverage and threat monitoring'
      }
    ],
    faqs: [
      {
        question: 'Are your security personnel armed?',
        answer: 'Yes, when required and legally permitted, our personnel are licensed to carry firearms.'
      },
      {
        question: 'Do you provide international security?',
        answer: 'Yes, we offer worldwide protection services with local expertise in each region.'
      },
      {
        question: 'How are your security officers trained?',
        answer: 'Our officers undergo rigorous training in executive protection, threat assessment, and emergency response.'
      }
    ],
    testimonials: [
      {
        name: 'James Anderson',
        role: 'CEO',
        company: 'Global Tech Corp',
        content: 'Their executive protection team provides unmatched security while maintaining complete discretion.'
      },
      {
        name: 'Victoria Chang',
        role: 'Celebrity Client',
        company: 'Entertainment Industry',
        content: 'I feel completely safe with their protection team. They\'re professional, attentive, and always prepared.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80',
    stats: [
      { label: 'VIP Clients', value: '100+' },
      { label: 'Countries Served', value: '30+' },
      { label: 'Success Rate', value: '100%' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Advanced digital protection against modern cyber threats.',
    icon: Lock,
    fullDescription: 'Our cybersecurity services protect your digital assets with cutting-edge technology and expert monitoring. We defend against all forms of cyber threats while ensuring business continuity.',
    benefits: [
      'Network security',
      'Data protection',
      'Threat detection',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    features: [
      'Real-time monitoring',
      'Firewall protection',
      'Encryption services',
      'Vulnerability scanning',
      'Security auditing'
    ],
    process: [
      {
        title: 'Security Audit',
        description: 'Assessment of current digital security posture'
      },
      {
        title: 'Threat Analysis',
        description: 'Identification of potential security vulnerabilities'
      },
      {
        title: 'Solution Implementation',
        description: 'Deployment of security measures and protocols'
      },
      {
        title: 'Staff Training',
        description: 'Security awareness training for employees'
      },
      {
        title: 'Continuous Monitoring',
        description: '24/7 threat detection and response'
      }
    ],
    faqs: [
      {
        question: 'What types of cyber threats do you protect against?',
        answer: 'We protect against malware, ransomware, phishing, DDoS attacks, and other cyber threats.'
      },
      {
        question: 'Do you provide employee training?',
        answer: 'Yes, we offer comprehensive security awareness training for all staff levels.'
      },
      {
        question: 'How do you handle data breaches?',
        answer: 'We have a rapid response team that contains, investigates, and remedies security incidents.'
      }
    ],
    testimonials: [
      {
        name: 'Mark Stevens',
        role: 'CTO',
        company: 'Financial Services Inc.',
        content: 'Their cybersecurity team detected and prevented a sophisticated attack that could have cost us millions.'
      },
      {
        name: 'Rachel Wong',
        role: 'IT Director',
        company: 'Healthcare Solutions',
        content: 'Their proactive approach to security has strengthened our defenses and maintained our compliance requirements.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Threats Blocked', value: '1M+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Response Time', value: '< 15min' }
    ]
  }
];