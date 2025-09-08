import React from "react";
import { Link } from "react-router-dom";

const UniversalWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/back.webp')`,
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
                Universal Waste Management
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Common Recyclable Materials
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Specialized handling of universal waste streams including batteries, mercury-containing equipment, lamps, and pesticides. EPA and DEA compliant processing with proper recycling and disposal protocols.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Universal Waste Categories</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🔋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Batteries & Accumulators</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">💡</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Fluorescent Lamps</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🖥️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Mercury Equipment</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🧪</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Pesticides & Herbicides</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Universal Waste Regulations</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">📋 EPA Universal Waste Rule Compliance</h3>
              <p className="text-blue-700 mb-4">
                Universal waste regulations provide streamlined handling requirements for certain widely generated hazardous wastes. In South Africa, these materials are regulated under the Hazardous Substances Act and NEMWA.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Key Categories</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Batteries (lead-acid, lithium-ion)</li>
                    <li>• Mercury-containing equipment</li>
                    <li>• Fluorescent lamps and bulbs</li>
                    <li>• Pesticides and herbicides</li>
                    <li>• Electronic equipment</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Regulatory Benefits</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Reduced regulatory burden</li>
                    <li>• Extended storage times</li>
                    <li>• Simplified recordkeeping</li>
                    <li>• Cost-effective compliance</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Universal Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive management of universal waste streams with specialized handling and recycling protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Battery Management</h3>
              <p className="text-gray-600 mb-4">Safe collection, transportation, and recycling of all battery types including lead-acid, lithium-ion, and nickel-cadmium batteries.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• EPA-compliant processing</li>
                <li>• Acid neutralization</li>
                <li>• Metal recovery and recycling</li>
                <li>• Environmental protection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lamp Recycling</h3>
              <p className="text-gray-600 mb-4">Specialized handling of fluorescent lamps, LED bulbs, and mercury vapor lamps with mercury recovery and glass recycling.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Mercury extraction and recovery</li>
                <li>• Glass and metal separation</li>
                <li>• Safe transportation protocols</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mercury Equipment</h3>
              <p className="text-gray-600 mb-4">Professional management of mercury-containing devices including thermostats, switches, and measurement equipment.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Mercury recovery processes</li>
                <li>• Equipment dismantling</li>
                <li>• Safe disposal methods</li>
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
            <h2 className="text-3xl font-bold mb-4">Universal Waste Benefits</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Streamlined compliance and cost-effective management for commonly generated hazardous waste streams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-blue-100">Reduced regulatory compliance costs through streamlined universal waste requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2">Resource Recovery</h3>
              <p className="text-blue-100">Valuable materials recovery including mercury, lead, and rare earth metals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Simplified Compliance</h3>
              <p className="text-blue-100">Less complex recordkeeping and reporting requirements for universal waste</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Universal Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our universal waste specialists for comprehensive management of batteries, lamps, mercury equipment, and other universal waste streams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Universal Waste Assessment
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

export default UniversalWaste;