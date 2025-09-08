import React from "react";

const ServicesHero = React.memo(() => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="hero-badge inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>🏥</span>
          <span>Professional Services</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Our Waste Management Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Comprehensive solutions for healthcare and general waste management needs with complete regulatory compliance and environmental responsibility.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-700">SANS Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-700">Eco-Friendly</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="text-green-600">✓</span>
            <span className="text-sm text-gray-700">20+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesHero.displayName = "ServicesHero";

export default ServicesHero;