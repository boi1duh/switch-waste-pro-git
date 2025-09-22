import React from 'react';
import { FaLeaf, FaHandshake, FaShieldAlt, FaHospital, FaBuilding, FaSchool, FaHome, FaMapMarkerAlt } from 'react-icons/fa';

export const MISSION_POINTS = [
  {
    title: 'Environmental Protection',
    description: 'Prioritizing eco-friendly solutions that reduce environmental impact',
    icon: <FaLeaf />
  },
  {
    title: 'Safety First',
    description: 'Ensuring the highest safety standards for communities and healthcare workers',
    icon: <FaShieldAlt />
  },
  {
    title: 'Partnership Approach',
    description: 'Building long-term relationships based on trust and transparency',
    icon: <FaHandshake />
  }
];

export const EXPERTISE_AREAS = [
  {
    title: 'Healthcare Facilities',
    description: 'Hospitals, clinics, medical practices, and laboratories',
    icon: <FaHospital />
  },
  {
    title: 'Corporate Clients',
    description: 'Office buildings, retail centers, and industrial facilities',
    icon: <FaBuilding />
  },
  {
    title: 'Educational Institutions',
    description: 'Schools, universities, and research facilities',
    icon: <FaSchool />
  },
  {
    title: 'Residential Services',
    description: 'Apartment complexes, gated communities, and housing estates',
    icon: <FaHome />
  }
];

export const SERVICE_AREAS = [
  { name: 'Johannesburg Central', areas: 'CBD, Newtown, Braamfontein, Hillbrow' },
  { name: 'East Rand', areas: 'Edenvale, Germiston, Boksburg, Benoni' },
  { name: 'West Rand', areas: 'Roodepoort, Krugersdorp, Randburg, Sandton'},
  { name: 'Southern Suburbs', areas: 'Alberton, Glenvista, Turffontein, Johannesburg South'},
  { name: 'Northern Suburbs', areas: 'Midrand, Fourways, Pretoria areas'},
  { name: 'Custom Areas', areas: 'Contact us for other Gauteng locations' }
];

export const FAQS = [
  {
    question: 'What types of waste do you handle?',
    answer: 'We handle healthcare risk waste (sharps, pathological specimens, pharmaceutical waste), general waste, recyclables (paper, glass, plastics), and provide specialized disposal services. All waste is managed according to SANS guidelines and environmental regulations.'
  },
  {
    question: 'How quickly can you start service?',
    answer: 'We can typically begin service within 24-48 hours of your request. Emergency collections can be arranged within hours. We\'ll conduct a site assessment and provide containers and documentation immediately upon agreement.'
  },
  {
    question: 'Do you provide containers and supplies?',
    answer: 'Yes, we provide all necessary containers, including sharps containers, waste bags, and specialized containers. We also supply reusable container systems that are environmentally friendly and cost-effective.'
  },
  {
    question: 'What documentation do you provide?',
    answer: 'We provide complete documentation including collection certificates, treatment certificates, disposal certificates, and access to our online document management system (DMS) for tracking and compliance records.'
  },
  {
    question: 'Do you offer training for our staff?',
    answer: 'Absolutely! We provide comprehensive staff training on waste segregation, safety procedures, regulatory compliance, and best practices. Training sessions can be conducted at your facility or our training center.'
  },
  {
    question: 'What are your pricing structures?',
    answer: 'We offer transparent pricing with no hidden costs. Pricing depends on waste type, volume, collection frequency, and location. We provide detailed quotes after assessing your specific needs. Contact us for a free consultation and customized quote.'
  }
];

export const ABOUT_SLIDES = [
  {
    title: "20+ Years of Excellence",
    subtitle: "Trusted Waste Management",
    description: "Leading environmental solutions with complete regulatory compliance and sustainable practices.",
    ctaText: "Our Services",
    ctaLink: "/services"
  },
  {
    title: "SANS Certified Operations",
    subtitle: "Quality Assurance",
    description: "All operations meet the highest South African National Standards for waste management excellence.",
    ctaText: "View Certifications",
    ctaLink: "/about"
  },
  {
    title: "Environmental Leadership",
    subtitle: "Sustainable Solutions",
    description: "Committed to reducing environmental impact through innovative waste management technologies.",
    ctaText: "Learn More",
    ctaLink: "/about"
  }
];