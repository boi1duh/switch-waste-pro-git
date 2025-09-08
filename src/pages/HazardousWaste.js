import React from "react";
import { Link } from "react-router-dom";

const HazardousWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/services/hazardous-waste.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Hazardous Waste Management
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Specialized Hazardous Solutions
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Expert handling of hazardous waste in compliance with South African legislation including the Hazardous Substances Act and NEMWA regulations. Licensed treatment, transportation, and disposal services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Quote
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Hazardous Waste Categories</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">⚠️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Chemical Waste</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🔋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Battery Waste</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🧪</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Laboratory Waste</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🏭</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Industrial Waste</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">South African Hazardous Waste Regulations</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Critical Compliance Requirements</h3>
              <p className="text-red-700 mb-4">
                Hazardous waste management in South Africa is strictly regulated under multiple pieces of legislation requiring specialized handling, transportation, and disposal procedures.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Key Legislation</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• National Environmental Management: Waste Act (NEMWA)</li>
                    <li>• Hazardous Substances Act 15 of 1973</li>
                    <li>• Occupational Health and Safety Act</li>
                    <li>• Transportation regulations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Required Permits</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Hazardous Waste License</li>
                    <li>• Transportation permits</li>
                    <li>• Treatment facility authorization</li>
                    <li>• Emergency response certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Hazardous Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized handling of hazardous materials with full regulatory compliance and environmental protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Licensed Transportation</h3>
              <p className="text-gray-600 mb-4">DEAT-approved transportation with GPS tracking, emergency response, and spill prevention protocols.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• ADR compliant vehicles</li>
                <li>• Emergency spill kits</li>
                <li>• 24/7 monitoring</li>
                <li>• Route risk assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Treatment Facilities</h3>
              <p className="text-gray-600 mb-4">State-of-the-art treatment facilities meeting international standards for hazardous waste processing.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chemical neutralization</li>
                <li>• Incineration services</li>
                <li>• Stabilization processes</li>
                <li>• Waste minimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Documentation & Compliance</h3>
              <p className="text-gray-600 mb-4">Complete regulatory documentation, manifest tracking, and compliance reporting for all hazardous waste activities.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Waste manifest system</li>
                <li>• Regulatory reporting</li>
                <li>• Audit preparation</li>
                <li>• Compliance training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety First Approach</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Our hazardous waste management prioritizes safety, environmental protection, and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Personal Protective Equipment</h3>
              <p className="text-red-100">Specialized PPE for all hazardous waste handling personnel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
              <p className="text-red-100">24/7 emergency response team with specialized hazardous spill equipment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
              <p className="text-red-100">Comprehensive risk assessments and management plans for all operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Hazardous Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our certified hazardous waste specialists for a comprehensive assessment and customized solution that meets all South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Hazardous Waste Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HazardousWaste;