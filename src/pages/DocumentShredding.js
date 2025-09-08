import React, { useState, memo } from "react";
import { Link } from "react-router-dom";

// Constants for better maintainability
const HERO_DATA = {
  title: "Secure Document Shredding",
  subtitle: "Data Protection & Destruction",
  description: "Professional document destruction services ensuring complete data security and regulatory compliance. POPIA and GDPR compliant shredding with secure chain of custody and destruction certificates.",
  services: [
    { icon: "📄", text: "Paper Document Shredding" },
    { icon: "💳", text: "Credit Card Destruction" },
    { icon: "💿", text: "Media & Hard Drive Destruction" },
    { icon: "🏢", text: "On-Site Shredding" }
  ]
};

const REGULATORY_DATA = {
  title: "Data Protection Regulations",
  complianceTitle: "🔒 POPIA & GDPR Compliance",
  complianceDescription: "Document shredding services must comply with South Africa's Protection of Personal Information Act (POPIA) and international data protection standards. We ensure complete data destruction and regulatory compliance.",
  securityStandards: [
    "DIN 66399 security levels",
    "POPIA compliance",
    "Secure chain of custody",
    "Destruction certificates",
    "NAID certification"
  ],
  documentTypes: [
    "Financial records",
    "Medical records",
    "Legal documents",
    "Personal information",
    "Classified materials"
  ]
};

const SERVICES_DATA = {
  title: "Document Shredding Services",
  description: "Comprehensive document destruction services with multiple security levels and complete regulatory compliance",
  services: [
    {
      icon: "🏢",
      title: "On-Site Shredding",
      description: "Mobile shredding trucks bring secure destruction directly to your facility, ensuring maximum security and convenience.",
      features: [
        "Mobile shredding units",
        "Witnessed destruction",
        "Immediate certificate",
        "No transportation risk"
      ]
    },
    {
      icon: "📦",
      title: "Off-Site Shredding",
      description: "Secure collection and transportation to our facility for professional shredding with complete chain of custody.",
      features: [
        "Secure collection bins",
        "GPS-tracked transport",
        "Facility security",
        "Scheduled pickups"
      ]
    },
    {
      icon: "💿",
      title: "Media Destruction",
      description: "Specialized destruction of hard drives, CDs, DVDs, USB drives, and other electronic media containing sensitive data.",
      features: [
        "Hard drive degaussing",
        "Physical destruction",
        "Data recovery prevention",
        "NIST 800-88 compliance"
      ]
    }
  ]
};

const SECURITY_LEVELS_DATA = {
  title: "Security Levels & Standards",
  description: "Multiple security levels ensure appropriate protection for different types of sensitive documents",
  levels: [
    {
      icon: "1️⃣",
      title: "Level 1 - Strip Cut",
      description: "Basic security for general documents, 38mm strip width, suitable for non-sensitive materials"
    },
    {
      icon: "2️⃣",
      title: "Level 2 - Cross Cut",
      description: "Medium security for confidential documents, 4x40mm particle size, POPIA compliant"
    },
    {
      icon: "3️⃣",
      title: "Level 3 - Micro Cut",
      description: "High security for classified documents, 2x15mm particle size, maximum data protection"
    }
  ]
};

const CTA_DATA = {
  title: "Need Secure Document Shredding?",
  description: "Protect your sensitive information with our professional document destruction services. POPIA compliant with complete security and documentation.",
  buttons: [
    { to: "/contact", text: "Request Shredding Assessment", primary: true },
    { to: "/about", text: "View Security Standards", primary: false }
  ]
};

// Hero Section Component
const HeroSection = memo(() => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      <img
        src={imageError ? "/assets/fallback.jpg" : "/assets/clean-1024x657.jpeg"}
        alt="Clean professional background representing secure document shredding services"
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setImageError(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2
              id="hero-title"
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg"
            >
              {HERO_DATA.title}
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              {HERO_DATA.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              {HERO_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                aria-label="Get a quote for document shredding services"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                aria-label="View all available services"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Shredding Services</h3>
              <div className="grid grid-cols-1 gap-4" role="list">
                {HERO_DATA.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm" role="listitem">
                    <span className="text-blue-400 text-2xl" aria-hidden="true">{service.icon}</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Regulatory Overview Component
const RegulatoryOverview = memo(() => (
  <section className="py-16 bg-white" aria-labelledby="regulatory-title">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 id="regulatory-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {REGULATORY_DATA.title}
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4">{REGULATORY_DATA.complianceTitle}</h3>
          <p className="text-blue-700 mb-4">{REGULATORY_DATA.complianceDescription}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Security Standards</h4>
              <ul className="text-blue-700 space-y-1" role="list">
                {REGULATORY_DATA.securityStandards.map((standard, index) => (
                  <li key={index}>• {standard}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Document Types</h4>
              <ul className="text-blue-700 space-y-1" role="list">
                {REGULATORY_DATA.documentTypes.map((type, index) => (
                  <li key={index}>• {type}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

// Services Section Component
const ServicesSection = memo(() => (
  <section className="py-16 bg-gray-50" aria-labelledby="services-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="services-title" className="text-3xl font-bold text-gray-800 mb-4">
          {SERVICES_DATA.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {SERVICES_DATA.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {SERVICES_DATA.services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" role="listitem">
            <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="text-gray-600 space-y-1 text-sm" role="list">
              {service.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
));

// Security Levels Component
const SecurityLevels = memo(() => (
  <section className="py-16 bg-blue-600 text-white" aria-labelledby="security-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="security-title" className="text-3xl font-bold mb-4">
          {SECURITY_LEVELS_DATA.title}
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          {SECURITY_LEVELS_DATA.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8" role="list">
        {SECURITY_LEVELS_DATA.levels.map((level, index) => (
          <div key={index} className="text-center" role="listitem">
            <div className="text-4xl mb-4" aria-hidden="true">{level.icon}</div>
            <h3 className="text-xl font-bold mb-2">{level.title}</h3>
            <p className="text-blue-100">{level.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

// CTA Section Component
const CTASection = memo(() => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white" aria-labelledby="cta-title">
    <div className="container mx-auto px-4 text-center">
      <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
        {CTA_DATA.title}
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        {CTA_DATA.description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {CTA_DATA.buttons.map((button, index) => (
          <Link
            key={index}
            to={button.to}
            className={`px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg ${
              button.primary
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : "border-2 border-white text-white hover:bg-white hover:text-blue-600"
            }`}
            aria-label={button.text}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  </section>
));

// Main Component
const DocumentShredding = () => {
  return (
    <>
      <HeroSection />
      <RegulatoryOverview />
      <ServicesSection />
      <SecurityLevels />
      <CTASection />
    </>
  );
};

export default DocumentShredding;