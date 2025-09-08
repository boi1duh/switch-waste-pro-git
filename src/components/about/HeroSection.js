import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="hero-badge inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>🏆</span>
          <span>20+ Years Experience</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          About Switch Waste Management Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dedicated to environmental protection through professional waste management services with complete regulatory compliance.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span>✓</span>
            <span className="text-sm">SANS Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span>✓</span>
            <span className="text-sm">Eco-Friendly</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
            <span>✓</span>
            <span className="text-sm">Trusted Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;