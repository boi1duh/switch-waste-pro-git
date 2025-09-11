/**
 * Application routing configuration
 * Centralizes route definitions and lazy loading setup
 */

import { lazy } from 'react';

// Lazy load all page components for code splitting
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Clients = lazy(() => import("../pages/Clients"));
const MedicalWaste = lazy(() => import("../pages/MedicalWaste"));
const PharmaceuticalWaste = lazy(() => import("../pages/PharmaceuticalWaste"));
const GeneralWaste = lazy(() => import("../pages/GeneralWaste"));
const HazardousWaste = lazy(() => import("../pages/HazardousWaste"));
const WasteCollection = lazy(() => import("../pages/WasteCollection"));
const ComplianceConsulting = lazy(() => import("../pages/ComplianceConsulting"));
const HealthcareFacilities = lazy(() => import("../pages/HealthcareFacilities"));
const CommercialBusinesses = lazy(() => import("../pages/CommercialBusinesses"));
const Residential = lazy(() => import("../pages/Residential"));
const UniversalWaste = lazy(() => import("../pages/UniversalWaste"));
const ControlledSubstanceWaste = lazy(() => import("../pages/ControlledSubstanceWaste"));
const IncinerationTreatment = lazy(() => import("../pages/IncinerationTreatment"));
const PathologicalWaste = lazy(() => import("../pages/PathologicalWaste"));
const DocumentShredding = lazy(() => import("../pages/DocumentShredding"));
const ComplianceTraining = lazy(() => import("../pages/ComplianceTraining"));
const Products = lazy(() => import("../pages/Products"));
const Policies = lazy(() => import("../pages/Policies"));
const Terms = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/Privacy"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Route component mapping
export const ROUTE_COMPONENTS = {
  Home,
  Services,
  About,
  Contact,
  Clients,
  MedicalWaste,
  PharmaceuticalWaste,
  GeneralWaste,
  HazardousWaste,
  WasteCollection,
  ComplianceConsulting,
  HealthcareFacilities,
  CommercialBusinesses,
  Residential,
  UniversalWaste,
  ControlledSubstanceWaste,
  IncinerationTreatment,
  PathologicalWaste,
  DocumentShredding,
  ComplianceTraining,
  Products,
  Policies,
  Terms,
  Privacy,
  NotFound
};

// Route configuration with metadata
export const ROUTE_CONFIG = [
  {
    path: "/",
    component: "Home",
    exact: true,
    title: "Switch Waste Pro - Professional Waste Management Solutions",
    description: "Leading waste management company in Johannesburg providing comprehensive waste disposal, recycling, and compliance solutions."
  },
  {
    path: "/services",
    component: "Services",
    title: "Waste Management Services - Switch Waste Pro",
    description: "Complete waste management services including medical waste, hazardous waste, pharmaceutical waste, and general waste collection."
  },
  {
    path: "/products",
    component: "Products",
    title: "Waste Management Products - Switch Waste Pro",
    description: "Professional waste management products and equipment for healthcare facilities and businesses."
  },
  {
    path: "/about",
    component: "About",
    title: "About Switch Waste Pro - Waste Management Experts",
    description: "Learn about Switch Waste Pro, Johannesburg's premier waste management company with extensive experience."
  },
  {
    path: "/contact",
    component: "Contact",
    title: "Contact Switch Waste Pro - Get a Free Quote",
    description: "Contact Switch Waste Pro for professional waste management solutions and get a free quote."
  },
  {
    path: "/clients",
    component: "Clients",
    title: "Our Clients - Switch Waste Pro",
    description: "Trusted by healthcare facilities, commercial businesses, and residential communities across Johannesburg."
  },
  // Waste management service routes
  { path: "/medical-waste", component: "MedicalWaste" },
  { path: "/pharmaceutical-waste", component: "PharmaceuticalWaste" },
  { path: "/general-waste", component: "GeneralWaste" },
  { path: "/hazardous-waste", component: "HazardousWaste" },
  { path: "/waste-collection", component: "WasteCollection" },
  { path: "/compliance-consulting", component: "ComplianceConsulting" },
  { path: "/healthcare-facilities", component: "HealthcareFacilities" },
  { path: "/commercial-businesses", component: "CommercialBusinesses" },
  { path: "/residential", component: "Residential" },
  { path: "/universal-waste", component: "UniversalWaste" },
  { path: "/controlled-substance-waste", component: "ControlledSubstanceWaste" },
  { path: "/incineration-treatment", component: "IncinerationTreatment" },
  { path: "/pathological-waste", component: "PathologicalWaste" },
  { path: "/document-shredding", component: "DocumentShredding" },
  { path: "/compliance-training", component: "ComplianceTraining" },
  // Legal pages
  { path: "/policies", component: "Policies" },
  { path: "/terms", component: "Terms" },
  { path: "/privacy", component: "Privacy" },
  // Error pages
  { path: "/404", component: "NotFound" },
  { path: "*", component: "NotFound" }
];

/**
 * Get route component by name
 */
export const getRouteComponent = (componentName) => {
  return ROUTE_COMPONENTS[componentName] || NotFound;
};

/**
 * Get route configuration by path
 */
export const getRouteConfig = (path) => {
  return ROUTE_CONFIG.find(route => route.path === path);
};

/**
 * Check if route requires authentication
 */
export const requiresAuth = (path) => {
  // Add paths that require authentication here
  const protectedRoutes = [];
  return protectedRoutes.includes(path);
};

/**
 * Get breadcrumb trail for a path
 */
export const getBreadcrumbs = (path) => {
  const breadcrumbs = [{ label: 'Home', path: '/' }];
  const pathSegments = path.split('/').filter(Boolean);

  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    const routeConfig = getRouteConfig(currentPath);
    if (routeConfig) {
      breadcrumbs.push({
        label: routeConfig.title?.split(' - ')[0] || segment.replace('-', ' '),
        path: currentPath
      });
    }
  });

  return breadcrumbs;
};

export default {
  ROUTE_COMPONENTS,
  ROUTE_CONFIG,
  getRouteComponent,
  getRouteConfig,
  requiresAuth,
  getBreadcrumbs
};