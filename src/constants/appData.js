import { FaClinicMedical, FaPills, FaRecycle } from 'react-icons/fa';

export const SERVICES_DATA = [
  {
    title: "Healthcare Risk Waste",
    description: "Complete regulated medical waste solutions for healthcare facilities",
    Icon: FaClinicMedical,
  },
  {
    title: "Pharmaceutical Waste",
    description: "Safe disposal of expired, unused, and contaminated medications",
    Icon: FaPills,
  },
  {
    title: "General Waste & Recycling",
    description: "Comprehensive recycling solutions for paper, glass, plastic & cans",
    Icon: FaRecycle,
  },
];

export const INDUSTRIES_DATA = [
  { name: "Healthcare Providers", items: ["Hospitals", "Clinics", "Medical Practices", "Laboratories"] },
  { name: "Commercial Businesses", items: ["Office Buildings", "Retail", "Industrial Facilities", "Educational Institutions"] },
  { name: "Residential", items: ["Housing Complexes", "Apartment Buildings", "Suburban Communities"] },
];

export const SERVICE_MENU_ITEMS = [
  "View All Services",
  "Medical Waste",
  "Pharmaceutical Waste",
  "Hazardous Waste",
  "Universal Waste",
  "Controlled Substance Waste",
  "Pathological Waste",
  "Incineration Treatment",
  "Document Shredding",
  "Compliance Training",
];