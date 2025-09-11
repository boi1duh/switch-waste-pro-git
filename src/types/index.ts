// Shared TypeScript types for the application
import React from 'react';

// Basic types for services and industries
export interface Service {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  link?: string;
  alt?: string;
}

export interface Industry {
  name: string;
  items: string[];
}

// App state types
export interface MenuState {
  isOpen: boolean;
  activeMegaMenu: string | null;
}

export interface AppState {
  menu: MenuState;
  services: Service[];
  industries: Industry[];
  user: any; // Extend with user type if authentication is added
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
  language: string;
  notifications: { id: number; message: string; type: 'success' | 'error' | 'info' | 'warning' }[];
}

// Route types
export interface RouteConfig {
  path: string;
  component: string;
  exact?: boolean;
  title?: string;
  description?: string;
}

// Component props types
export interface ServicesProps {
  services: Service[];
  industries: Industry[];
}

// Header props
export interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeMegaMenu: string | null;
  toggleMegaMenu: (menu: string | null) => void;
  setActiveMegaMenu: (menu: string | null) => void;
  serviceMenuItems: string[];
  industries: Industry[];
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  waste_volume?: string;
  collection_frequency?: string;
  message: string;
  consent: boolean;
  newsletter: boolean;
}

// Cart item for Products
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  specifications: string;
  alt: string;
  category: string;
}

// Products page props
export interface ProductsProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// Quote form data
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  organizationType: string;
  urgency: string;
  additionalRequirements: string;
  preferredContact: string;
}

// Common component props
export interface BaseProps {
  className?: string;
}

// Form data types (for validation)
export interface ValidationError {
  [key: string]: string;
}

// API response types (example)
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export type ActionType<T = any> = { type: string; payload?: T };

// React component type alias
export type FCProps<T = {}> = React.FC<T & BaseProps>;

// Additional types for hooks and utilities
export interface Slide {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface CarouselProps {
  slides: Slide[];
}

export interface IntersectionObserverProps {
  threshold: number;
  rootMargin: string;
}

// For form validation
export interface FormErrors<T> {
  [K in keyof T]?: string;
}

// For API error
export interface ApiError {
  message: string;
  status: number;
  data?: any;
}

// For logger params
export interface LogParams {
  message: string;
  args: unknown[];
}

// For performance metrics
export interface PerformanceMetric {
  value: number;
  timestamp: number;
  type: string;
  element?: string;
}

export interface CustomMetric {
  name: string;
  value: number;
  metadata: Record<string, unknown>;
}

export interface PerformanceMetrics {
  cls: PerformanceMetric[];
  fid: PerformanceMetric[];
  lcp: PerformanceMetric[];
  fcp: PerformanceMetric[];
  ttfb: PerformanceMetric[];
  custom: Record<string, CustomMetric[]>;
}

// For product categories
export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// For client testimonials
export interface Testimonial {
  rating: number;
  quote: string;
  author: string;
  position: string;
}

// For trust badges
export interface TrustBadge {
  icon: string;
  text: string;
  ariaLabel: string;
}

// For SEO structured data
export interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: Array<{
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    availableLanguage: string;
    description?: string;
  }>;
  email: string;
}

// For client in Clients page
export interface Client {
  name: string;
  logo: string;
  description: string;
  website: string;
  services: string;
  location: string;
}

// For carousel in About and Contact pages
export interface CarouselSlide {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
