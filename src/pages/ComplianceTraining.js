import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";

// Constants for data
const TRAINING_PROGRAMS = [
  { icon: "🏥", title: "Healthcare Waste Training" },
  { icon: "🏢", title: "General Waste Compliance" },
  { icon: "⚠️", title: "Hazardous Waste Safety" },
  { icon: "📋", title: "Regulatory Compliance" },
];

const MANDATORY_TRAINING = [
  "Healthcare risk waste handling",
  "Hazardous waste management",
  "Personal protective equipment",
  "Emergency response procedures",
  "Waste segregation protocols",
];

const CERTIFICATION_TYPES = [
  "HPCSA waste management",
  "NEMWA compliance",
  "SANS 10248 certification",
  "First aid and safety",
  "Refresher training",
];

const SERVICES = [
  {
    icon: "🏥",
    title: "Healthcare Waste Training",
    description: "Specialized training for healthcare facilities covering medical waste handling, segregation, and regulatory compliance.",
    features: [
      "Medical waste classification",
      "Safe handling procedures",
      "PPE usage and safety",
      "Emergency protocols",
    ],
  },
  {
    icon: "🏢",
    title: "General Waste Compliance",
    description: "Training for offices, retail, and commercial facilities on waste segregation, recycling, and environmental responsibility.",
    features: [
      "Waste segregation training",
      "Recycling program education",
      "Environmental awareness",
      "Cost reduction strategies",
    ],
  },
  {
    icon: "⚠️",
    title: "Hazardous Waste Safety",
    description: "Advanced training for handling hazardous chemicals, batteries, and dangerous materials with safety protocols.",
    features: [
      "Chemical hazard recognition",
      "Spill response training",
      "Personal protective equipment",
      "Emergency evacuation",
    ],
  },
];

const BENEFITS = [
  {
    icon: "📜",
    title: "Regulatory Compliance",
    description: "Ensure your staff meets all NEMWA, HPCSA, and other regulatory training requirements",
  },
  {
    icon: "🛡️",
    title: "Workplace Safety",
    description: "Reduce accidents and injuries through proper training and safety awareness",
  },
  {
    icon: "💰",
    title: "Cost Reduction",
    description: "Minimize fines, reduce waste volumes, and improve operational efficiency",
  },
];

// Sub-components
const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = '/assets/environmental-impact.jpg';
  }, []);

  const backgroundStyle = imageLoaded && !imageError ? {
    backgroundImage: `url('/assets/environmental-impact.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={backgroundStyle}
      aria-labelledby="hero-title"
    >
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {imageError && (
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
          <span className="text-white text-lg">Image failed to load</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2 id="hero-title" className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Compliance Training Programs
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              Staff Education & Certification
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              Comprehensive training programs ensuring your staff understands waste management regulations, safety protocols, and compliance requirements. Certified trainers with industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                aria-label="Get a quote for training programs"
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
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Training Programs</h3>
              <div className="grid grid-cols-1 gap-4">
                {TRAINING_PROGRAMS.map((program, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl" role="img" aria-label={program.title}>{program.icon}</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">{program.title}</span>
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

const RegulatoryOverview = memo(() => (
  <section className="py-16 bg-white" aria-labelledby="regulatory-title">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 id="regulatory-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">Training & Compliance Standards</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-4">📚 NEMWA & HPCSA Training Requirements</h3>
          <p className="text-green-700 mb-4">
            South African waste management regulations require specific training for staff handling medical, hazardous, and general waste. Our certified training programs ensure complete compliance with NEMWA, HPCSA, and other regulatory requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Mandatory Training</h4>
              <ul className="text-green-700 space-y-1" role="list">
                {MANDATORY_TRAINING.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Certification Types</h4>
              <ul className="text-green-700 space-y-1" role="list">
                {CERTIFICATION_TYPES.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const ServicesSection = memo(() => (
  <section className="py-16 bg-gray-50" aria-labelledby="services-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="services-title" className="text-3xl font-bold text-gray-800 mb-4">Training Programs & Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive education and certification programs designed to ensure regulatory compliance and workplace safety
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
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
));

const TrainingBenefits = memo(() => (
  <section className="py-16 bg-green-600 text-white" aria-labelledby="benefits-title">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 id="benefits-title" className="text-3xl font-bold mb-4">Training Program Benefits</h2>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          Professional training programs that ensure compliance, improve safety, and reduce operational costs
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label={benefit.title}>{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-green-100">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

const CTASection = memo(() => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white" aria-labelledby="cta-title">
    <div className="container mx-auto px-4 text-center">
      <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">Need Staff Training & Compliance Support?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Ensure your team is properly trained and certified. Contact our training specialists for customized compliance programs.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Request a training assessment"
        >
          Request Training Assessment
        </Link>
        <Link
          to="/about"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          aria-label="View certifications"
        >
          View Certifications
        </Link>
      </div>
    </div>
  </section>
));

const ComplianceTraining = memo(() => {
  return (
    <>
      <HeroSection />
      <RegulatoryOverview />
      <ServicesSection />
      <TrainingBenefits />
      <CTASection />
    </>
  );
});

export default ComplianceTraining;