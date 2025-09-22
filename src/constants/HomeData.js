// Home page data constants
export const HERO_SLIDES = [
  {
    title: "We Solve Compliance Problems With Sustainable Solutions",
    subtitle: "Professional waste management services for Johannesburg and surrounding areas",
    description: "At Switch Waste, we are dedicated to providing exceptional waste management services. Our mission is to ensure a safe environment free from hazardous waste while maintaining compliance with all regulations to protect our planet.",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  },
  {
    title: "Healthcare Risk Waste Management",
    subtitle: "Specialized solutions for medical facilities",
    description: "Complete regulated medical waste solutions including sharps, pathological specimens, pharmaceutical waste, and contaminated materials. SANS compliant with complete documentation.",
    ctaText: "Our Services",
    ctaLink: "/services"
  },
  {
    title: "Environmental Responsibility First",
    subtitle: "Sustainable waste management practices",
    description: "We prioritize eco-friendly solutions in all our operations, continuously seeking opportunities to reduce environmental impact through sustainable practices and innovative technologies.",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  {
    title: "Why Choose Switch Waste?",
    subtitle: "Your trusted waste management partner for over 10 years",
    description: "We combine regulatory compliance, environmental responsibility, and exceptional customer service to deliver comprehensive waste management solutions tailored to Johannesburg and surrounding areas.",
    ctaText: "Get Started",
    ctaLink: "/contact",
    features: [
      "✓ Environmental Responsibility",
      "✓ Regulatory Compliance",
      "✓ Safety First Approach",
      "✓ Local Johannesburg Service"
    ]
  }
];

// Structured data for the Home page SEO
export const HOME_PAGE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Switch Waste Management Solutions",
  "url": "https://www.switchwaste.co.za",
  "logo": "https://www.switchwaste.co.za/assets/logo/switch_Pro_logo.png",
  "description": "Professional waste management services for healthcare and general waste in Johannesburg. SANS compliant, environmentally responsible waste disposal solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "48 16th Avenue",
    "addressLocality": "Edenvale",
    "addressRegion": "Johannesburg",
    "postalCode": "1609",
    "addressCountry": "ZA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27-10-006-9158",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/switchwaste",
    "https://www.linkedin.com/company/switch-waste"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "geoRadius": 50000
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Waste Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Healthcare Risk Waste Management" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Pharmaceutical Waste Disposal" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "General Waste & Recycling" }
      }
    ]
  }
};