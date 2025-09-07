import React from "react";
import { Link } from "react-router-dom";

const CommercialBusinesses = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/bins.jpg')`,
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
                Commercial Waste Solutions
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Office Buildings & Retail
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Comprehensive waste management solutions for commercial properties, office buildings, retail centers, and industrial facilities. Tailored services that minimize operational disruption while ensuring regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Commercial Quote
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Commercial Sectors</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">🏢</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Office Buildings</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">🛍️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Retail Centers</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">🏭</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Industrial Facilities</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">🎓</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Educational Institutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Commercial Waste Management Solutions</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🏢 Tailored Solutions for Commercial Properties</h3>
              <p className="text-blue-700 mb-4">
                Commercial waste management requires specialized approaches that minimize operational disruption while ensuring compliance with South African environmental regulations. Our solutions are designed specifically for the unique needs of commercial facilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Key Challenges</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• High-volume waste generation</li>
                    <li>• Mixed waste streams</li>
                    <li>• Operational continuity requirements</li>
                    <li>• Regulatory compliance costs</li>
                    <li>• Environmental impact concerns</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Our Solutions</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Scheduled collection services</li>
                    <li>• Waste segregation programs</li>
                    <li>• Recycling initiatives</li>
                    <li>• Compliance documentation</li>
                    <li>• Cost optimization strategies</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commercial Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized waste management services designed for commercial and industrial facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Office Building Services</h3>
              <p className="text-gray-600 mb-4">Comprehensive waste management for office buildings including general waste, recycling, and confidential document destruction.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Daily waste collection</li>
                <li>• Recycling program setup</li>
                <li>• Document shredding services</li>
                <li>• Waste audit and consulting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Retail Center Solutions</h3>
              <p className="text-gray-600 mb-4">Specialized waste management for shopping centers, retail stores, and commercial complexes with high-traffic operations.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• High-volume collection</li>
                <li>• Food waste management</li>
                <li>• Packaging waste recycling</li>
                <li>• Seasonal waste planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industrial Facilities</h3>
              <p className="text-gray-600 mb-4">Heavy-duty waste management solutions for manufacturing plants, warehouses, and industrial operations.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Hazardous waste handling</li>
                <li>• Bulk waste collection</li>
                <li>• Industrial waste treatment</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Partnership Benefits</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional waste management that supports your business operations and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Operational Continuity</h3>
              <p className="text-blue-100">Reliable waste collection schedules that don't disrupt your business operations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
              <p className="text-blue-100">Efficient waste management reduces disposal costs and improves resource recovery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-2">Compliance Assurance</h3>
              <p className="text-blue-100">Complete regulatory compliance with NEMWA and local environmental bylaws</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Commercial Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our commercial waste specialists for a customized solution that meets your facility's specific needs and regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Commercial Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialBusinesses;