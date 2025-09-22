export const CONTACT_SLIDES = [
  {
    title: "Get Your Free Quote Today",
    subtitle: "Professional Consultation",
    description: "Contact our experts for a comprehensive waste management assessment and customized solution.",
    ctaText: "Call Now",
    ctaLink: "tel:0100069158"
  },
  {
    title: "Emergency Waste Services",
    subtitle: "24/7 Support Available",
    description: "Urgent waste management situations? Our emergency response team is ready to help.",
    ctaText: "Emergency Contact",
    ctaLink: "tel:0616004720"
  },
  {
    title: "Site Assessment & Planning",
    subtitle: "Expert Evaluation",
    description: "Our team conducts thorough site assessments to design the perfect waste management solution.",
    ctaText: "Schedule Assessment",
    ctaLink: "/contact"
  }
];

export const CONTACT_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Switch Waste Management Solutions",
  "description": "Get in touch with Switch Waste Solutions for professional waste management services in Johannesburg. Free quotes and emergency services available.",
  "url": "/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Switch Waste Management Solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 16th Avenue",
      "addressLocality": "Edenvale",
      "addressRegion": "Johannesburg",
      "postalCode": "1609",
      "addressCountry": "ZA"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+27-10-006-9158",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+27-61-600-4720",
        "contactType": "emergency",
        "availableLanguage": "English",
        "description": "Emergency waste management services"
      }
    ],
    "email": "info@switchwaste.co.za"
  }
};