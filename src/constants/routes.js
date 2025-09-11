/**
 * Application routes configuration
 * Centralizes all route definitions for better maintainability
 */

// Route paths
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PRODUCTS: '/products',
  ABOUT: '/about',
  CONTACT: '/contact',
  CLIENTS: '/clients',

  // Waste management services
  MEDICAL_WASTE: '/medical-waste',
  PHARMACEUTICAL_WASTE: '/pharmaceutical-waste',
  GENERAL_WASTE: '/general-waste',
  HAZARDOUS_WASTE: '/hazardous-waste',
  WASTE_COLLECTION: '/waste-collection',
  COMPLIANCE_CONSULTING: '/compliance-consulting',
  HEALTHCARE_FACILITIES: '/healthcare-facilities',
  COMMERCIAL_BUSINESSES: '/commercial-businesses',
  RESIDENTIAL: '/residential',
  UNIVERSAL_WASTE: '/universal-waste',
  CONTROLLED_SUBSTANCE_WASTE: '/controlled-substance-waste',
  INCINERATION_TREATMENT: '/incineration-treatment',
  PATHOLOGICAL_WASTE: '/pathological-waste',
  DOCUMENT_SHREDDING: '/document-shredding',
  COMPLIANCE_TRAINING: '/compliance-training',

  // Legal pages
  POLICIES: '/policies',
  TERMS: '/terms',
  PRIVACY: '/privacy',

  // Error pages
  NOT_FOUND: '/404'
};

// Route groups for navigation
export const ROUTE_GROUPS = {
  MAIN: [
    { path: ROUTES.HOME, label: 'Home', exact: true },
    { path: ROUTES.SERVICES, label: 'Services' },
    { path: ROUTES.PRODUCTS, label: 'Products' },
    { path: ROUTES.ABOUT, label: 'About' },
    { path: ROUTES.CONTACT, label: 'Contact' },
    { path: ROUTES.CLIENTS, label: 'Clients' }
  ],

  SERVICES: [
    { path: ROUTES.MEDICAL_WASTE, label: 'Medical Waste' },
    { path: ROUTES.PHARMACEUTICAL_WASTE, label: 'Pharmaceutical Waste' },
    { path: ROUTES.GENERAL_WASTE, label: 'General Waste' },
    { path: ROUTES.HAZARDOUS_WASTE, label: 'Hazardous Waste' },
    { path: ROUTES.WASTE_COLLECTION, label: 'Waste Collection' },
    { path: ROUTES.COMPLIANCE_CONSULTING, label: 'Compliance Consulting' },
    { path: ROUTES.HEALTHCARE_FACILITIES, label: 'Healthcare Facilities' },
    { path: ROUTES.COMMERCIAL_BUSINESSES, label: 'Commercial Businesses' },
    { path: ROUTES.RESIDENTIAL, label: 'Residential' },
    { path: ROUTES.UNIVERSAL_WASTE, label: 'Universal Waste' },
    { path: ROUTES.CONTROLLED_SUBSTANCE_WASTE, label: 'Controlled Substance Waste' },
    { path: ROUTES.INCINERATION_TREATMENT, label: 'Incineration Treatment' },
    { path: ROUTES.PATHOLOGICAL_WASTE, label: 'Pathological Waste' },
    { path: ROUTES.DOCUMENT_SHREDDING, label: 'Document Shredding' },
    { path: ROUTES.COMPLIANCE_TRAINING, label: 'Compliance Training' }
  ],

  LEGAL: [
    { path: ROUTES.POLICIES, label: 'Policies' },
    { path: ROUTES.TERMS, label: 'Terms of Service' },
    { path: ROUTES.PRIVACY, label: 'Privacy Policy' }
  ]
};

// Route metadata for SEO and analytics
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: 'Switch Waste Pro - Professional Waste Management Solutions',
    description: 'Leading waste management company in Johannesburg providing comprehensive waste disposal, recycling, and compliance solutions for healthcare, commercial, and residential sectors.'
  },
  [ROUTES.SERVICES]: {
    title: 'Waste Management Services - Switch Waste Pro',
    description: 'Complete waste management services including medical waste, hazardous waste, pharmaceutical waste, and general waste collection in Johannesburg.'
  },
  [ROUTES.ABOUT]: {
    title: 'About Switch Waste Pro - Waste Management Experts',
    description: 'Learn about Switch Waste Pro, Johannesburg\'s premier waste management company with over 10 years of experience in professional waste disposal and recycling.'
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Switch Waste Pro - Get a Free Quote',
    description: 'Contact Switch Waste Pro for professional waste management solutions. Get a free quote for your waste disposal and recycling needs in Johannesburg.'
  }
};

// Helper functions
export const getRouteTitle = (path) => {
  return ROUTE_METADATA[path]?.title || 'Switch Waste Pro - Professional Waste Management';
};

export const getRouteDescription = (path) => {
  return ROUTE_METADATA[path]?.description || 'Professional waste management solutions in Johannesburg, South Africa.';
};

export const isActiveRoute = (currentPath, routePath, exact = false) => {
  if (exact) {
    return currentPath === routePath;
  }
  return currentPath.startsWith(routePath);
};

export default ROUTES;