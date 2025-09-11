/**
 * Application configuration
 * Centralizes all configuration values and environment variables
 */

// Environment detection
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';

// API Configuration
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.switchwaste.co.za',
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  retries: parseInt(process.env.REACT_APP_API_RETRIES) || 3,
  retryDelay: parseInt(process.env.REACT_APP_API_RETRY_DELAY) || 1000
};

// Application Configuration
export const APP_CONFIG = {
  name: 'Switch Waste Pro',
  version: process.env.REACT_APP_VERSION || '1.0.0',
  description: 'Professional waste management solutions in Johannesburg',
  contact: {
    email: 'info@switchwaste.co.za',
    phone: '+27 11 123 4567',
    address: '123 Industrial Road, Johannesburg, South Africa'
  },
  social: {
    linkedin: 'https://linkedin.com/company/switch-waste',
    twitter: 'https://twitter.com/switchwaste',
    facebook: 'https://facebook.com/switchwaste'
  }
};

// Feature Flags
export const FEATURES = {
  analytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  errorReporting: process.env.REACT_APP_ENABLE_ERROR_REPORTING === 'true',
  performanceMonitoring: process.env.REACT_APP_ENABLE_PERFORMANCE_MONITORING === 'true',
  newsletter: process.env.REACT_APP_ENABLE_NEWSLETTER === 'true',
  contactForm: process.env.REACT_APP_ENABLE_CONTACT_FORM === 'true',
  serviceInquiries: process.env.REACT_APP_ENABLE_SERVICE_INQUIRIES === 'true'
};

// UI Configuration
export const UI_CONFIG = {
  theme: {
    primary: '#1f2937', // gray-800
    secondary: '#3b82f6', // blue-500
    accent: '#10b981', // emerald-500
    danger: '#ef4444', // red-500
    warning: '#f59e0b', // amber-500
    success: '#10b981' // emerald-500
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    }
  }
};

// Validation Configuration
export const VALIDATION_CONFIG = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: false,
    pattern: /^(\+27|0)[6-8][0-9]{8}$/,
    country: 'ZA'
  },
  postalCode: {
    required: true,
    pattern: /^[0-9]{4}$/,
    country: 'ZA'
  },
  name: {
    minLength: 2,
    maxLength: 100,
    required: true
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    required: true
  }
};

// File Upload Configuration
export const UPLOAD_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
  maxFiles: 5
};

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.REACT_APP_GA_ID,
  facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID,
  hotjarId: process.env.REACT_APP_HOTJAR_ID,
  mixpanelToken: process.env.REACT_APP_MIXPANEL_TOKEN
};

// Error Reporting Configuration
export const ERROR_REPORTING_CONFIG = {
  sentry: {
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: process.env.REACT_APP_VERSION
  },
  rollbar: {
    accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    environment: process.env.NODE_ENV
  }
};

// Performance Monitoring Configuration
export const PERFORMANCE_CONFIG = {
  webVitals: {
    enabled: FEATURES.performanceMonitoring,
    reportAllChanges: isDevelopment
  },
  longTaskThreshold: 50, // ms
  clsThreshold: 0.1,
  fidThreshold: 100,
  fcpThreshold: 1800,
  lcpThreshold: 2500,
  ttfbThreshold: 800
};

// Cache Configuration
export const CACHE_CONFIG = {
  defaultTtl: 5 * 60 * 1000, // 5 minutes
  maxAge: {
    static: 24 * 60 * 60 * 1000, // 24 hours
    dynamic: 60 * 60 * 1000, // 1 hour
    api: 5 * 60 * 1000 // 5 minutes
  }
};

// Security Configuration
export const SECURITY_CONFIG = {
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:', 'https:'],
    connectSrc: ["'self'", 'https://api.switchwaste.co.za'],
    fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"]
  },
  cors: {
    origin: process.env.REACT_APP_CORS_ORIGIN || 'https://switchwaste.co.za',
    credentials: true
  }
};

// Third-party Services Configuration
export const SERVICES_CONFIG = {
  recaptcha: {
    siteKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    secretKey: process.env.REACT_APP_RECAPTCHA_SECRET_KEY
  },
  stripe: {
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.REACT_APP_STRIPE_SECRET_KEY
  },
  mailchimp: {
    apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
    listId: process.env.REACT_APP_MAILCHIMP_LIST_ID
  }
};

// Development Configuration
export const DEV_CONFIG = {
  mockApi: process.env.REACT_APP_MOCK_API === 'true',
  debugMode: process.env.REACT_APP_DEBUG_MODE === 'true',
  logLevel: process.env.REACT_APP_LOG_LEVEL || 'info',
  enableReduxDevTools: process.env.REACT_APP_ENABLE_REDUX_DEVTOOLS === 'true'
};

// Export all configurations
export default {
  isDevelopment,
  isProduction,
  isTest,
  API_CONFIG,
  APP_CONFIG,
  FEATURES,
  UI_CONFIG,
  VALIDATION_CONFIG,
  UPLOAD_CONFIG,
  ANALYTICS_CONFIG,
  ERROR_REPORTING_CONFIG,
  PERFORMANCE_CONFIG,
  CACHE_CONFIG,
  SECURITY_CONFIG,
  SERVICES_CONFIG,
  DEV_CONFIG
};