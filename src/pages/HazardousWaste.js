import React, { useState } from "react";
import { Link } from "react-router-dom";

// Constants for better maintainability
const HAZARDOUS_WASTE_DATA = {
  hero: {
    title: "Hazardous Waste Management",
    subtitle: "Specialized Hazardous Solutions",
    description: "Expert handling of hazardous waste in compliance with South African legislation including the Hazardous Substances Act and NEMWA regulations. Licensed treatment, transportation, and disposal services.",
    backgroundImage: "/assets/services/hazardous-waste.jpg",
    categories: [
      { icon: "⚠️", name: "Chemical Waste" },
      { icon: "🔋", name: "Battery Waste" },
      { icon: "🧪", name: "Laboratory Waste" },
      { icon: "🏭", name: "Industrial Waste" }
    ]
  },
  regulatory: {
    title: "South African Hazardous Waste Regulations",
    warningTitle: "⚠️ Critical Compliance Requirements",
    description: "Hazardous waste management in South Africa is strictly regulated under multiple pieces of legislation requiring specialized handling, transportation, and disposal procedures.",
    legislation: [
      "National Environmental Management: Waste Act (NEMWA)",
      "Hazardous Substances Act 15 of 1973",
      "Occupational Health and Safety Act",
      "Transportation regulations"
    ],
    permits: [
      "Hazardous Waste License",
      "Transportation permits",
      "Treatment facility authorization",
      "Emergency response certification"
    ]
  },
  services: [
    {
      icon: "🚛",
      title: "Licensed Transportation",
      description: "DEAT-approved transportation with GPS tracking, emergency response, and spill prevention protocols.",
      features: ["ADR compliant vehicles", "Emergency spill kits", "24/7 monitoring", "Route risk assessment"]
    },
    {
      icon: "🏭",
      title: "Treatment Facilities",
      description: "State-of-the-art treatment facilities meeting international standards for hazardous waste processing.",
      features: ["Chemical neutralization", "Incineration services", "Stabilization processes", "Waste minimization"]
    },
    {
      icon: "📋",
      title: "Documentation & Compliance",
      description: "Complete regulatory documentation, manifest tracking, and compliance reporting for all hazardous waste activities.",
      features: ["Waste manifest system", "Regulatory reporting", "Audit preparation", "Compliance training"]
    }
  ],
  safety: [
    { icon: "🛡️", title: "Personal Protective Equipment", description: "Specialized PPE for all hazardous waste handling personnel" },
    { icon: "🚨", title: "Emergency Response", description: "24/7 emergency response team with specialized hazardous spill equipment" },
    { icon: "📊", title: "Risk Assessment", description: "Comprehensive risk assessments and management plans for all operations" }
  ],
  cta: {
    title: "Need Hazardous Waste Management?",
    description: "Contact our certified hazardous waste specialists for a comprehensive assessment and customized solution that meets all South African regulatory requirements.",
    buttons: [
      { to: "/contact", text: "Request Hazardous Waste Assessment", primary: true },
      { to: "/about", text: "View Our Certifications", primary: false }
    ]
  }
};

// Sub-components for better readability and maintainability
const HeroSection = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: imageError ? 'none' : `url('${data.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: imageError ? '#1f2937' : 'transparent' // Fallback color
      }}
      role="banner"
      aria-labelledby="hero-title"
    >
      <img
        src={data.backgroundImage}
        alt="Hazardous waste management background"
        onError={() => setImageError(true)}
        style={{ display: 'none' }} // Hidden image for error handling
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2 id="hero-title" className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              {data.title}
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              {data.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                aria-label="Get a quote for hazardous waste services"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                aria-label="View all services"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Hazardous Waste Categories</h3>
              <div className="grid grid-cols-1 gap-4">
                {data.categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl" role="img" aria-label={category.name}>{category.icon}</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegulatoryOverview = ({ data }) => (
  <section className="py-16 bg-white" aria-labelledby="regulatory-title">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 id="regulatory-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">{data.title}</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4">{data.warningTitle}</h3>
          <p className="text-red-700 mb-4">{data.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-red-800 mb-2">Key Legislation</h4>
              <ul className="text-red-700 space-y-1 text-sm" role="list">
                {data.legislation.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-800 mb-2">Required Permits</h4>
              <ul className="text-red-700 space-y-1 text-sm" role="list">
                {data.permits.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = ({ services }) => (
  <section className="py-16 bg-gray-50" aria-labelledby="services-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="services-title" className="text-3xl font-bold text-gray-800 mb-4">Our Hazardous Waste Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Specialized handling of hazardous materials with full regulatory compliance and environmental protection
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4" role="img" aria-label={service.title}>{service.icon}</div>
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
);

const SafetySection = ({ safety }) => (
  <section className="py-16 bg-red-600 text-white" aria-labelledby="safety-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="safety-title" className="text-3xl font-bold mb-4">Safety First Approach</h2>
        <p className="text-xl text-red-100 max-w-3xl mx-auto">
          Our hazardous waste management prioritizes safety, environmental protection, and regulatory compliance
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {safety.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label={item.title}>{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-red-100">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ data }) => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white" aria-labelledby="cta-title">
    <div className="container mx-auto px-4 text-center">
      <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">{data.description}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {data.buttons.map((button, index) => (
          <Link
            key={index}
            to={button.to}
            className={button.primary
              ? "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              : "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            }
            aria-label={button.text}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const HazardousWaste = () => {
  return (
    <React.Fragment>
      <HeroSection data={HAZARDOUS_WASTE_DATA.hero} />
      <RegulatoryOverview data={HAZARDOUS_WASTE_DATA.regulatory} />
      <ServicesSection services={HAZARDOUS_WASTE_DATA.services} />
      <SafetySection safety={HAZARDOUS_WASTE_DATA.safety} />
      <CTASection data={HAZARDOUS_WASTE_DATA.cta} />
    </React.Fragment>
  );
};

export default HazardousWaste;