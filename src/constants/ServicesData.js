import { FaHospital, FaPills, FaExclamationTriangle, FaRecycle, FaBook, FaTruck, FaFileAlt } from 'react-icons/fa';

export const SERVICES_LIST = [
  {
    title: "Healthcare Risk Waste",
    description: "Complete regulated medical waste solutions for healthcare facilities including sharps, pathological specimens, and pharmaceutical waste with SANS compliance.",
    Icon: FaHospital,
    link: "/healthcare-facilities",
    alt: "Healthcare risk waste management icon"
  },
  {
    title: "Pharmaceutical Waste",
    description: "Safe disposal of expired, unused, and contaminated medications with complete audit trails and DEA registration compliance.",
    Icon: FaPills,
    link: "/pharmaceutical-waste",
    alt: "Pharmaceutical waste disposal icon"
  },
  {
    title: "Hazardous Waste",
    description: "Specialized handling and disposal of hazardous materials with safety protocols and environmental protection measures.",
    Icon: FaExclamationTriangle,
    link: "/hazardous-waste",
    alt: "Hazardous waste management icon"
  },
  {
    title: "General Waste & Recycling",
    description: "Comprehensive recycling solutions for paper, glass, plastic, and general waste with NEMWA compliance and sustainability focus.",
    Icon: FaRecycle,
    link: "/general-waste",
    alt: "General waste and recycling icon"
  },
  {
    title: "Compliance Consulting",
    description: "Expert consulting services for regulatory compliance, waste management audits, and training programs.",
    Icon: FaBook,
    link: "/compliance-consulting",
    alt: "Compliance consulting and training icon"
  },
  {
    title: "Waste Collection & Transportation",
    description: "Professional waste collection and transportation services with GPS tracking and scheduled delivery routes.",
    Icon: FaTruck,
    link: "/waste-collection",
    alt: "Waste collection and transportation icon"
  },
  {
    title: "Document Shredding",
    description: "Secure document destruction services with POPIA compliance and data protection for confidential information.",
    Icon: FaFileAlt,
    link: "/document-shredding",
    alt: "Document shredding and secure disposal icon"
  }
];