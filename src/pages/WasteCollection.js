import React from "react";
import { Link } from "react-router-dom";

const WasteCollection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/services/collection.transportation-1-768x564.jpg')`,
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
                Waste Collection & Transportation
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Reliable & Compliant Transport
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Licensed waste collection and transportation services throughout South Africa. GPS-tracked vehicles, emergency response capabilities, and full compliance with Department of Transport regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Schedule Collection
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Transportation Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🚛</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Scheduled Collections</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🚨</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Emergency Response</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📍</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">GPS Tracking</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Compliance Documentation</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">South African Transportation Regulations</h2>
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">🚛 Transportation Compliance Framework</h3>
              <p className="text-blue-700 mb-6 leading-relaxed">
                Waste transportation in South Africa is regulated by the Department of Transport and must comply with the National Road Traffic Act, Hazardous Substances Act, and provincial environmental legislation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Required Licenses</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Road Transportation Permit</li>
                    <li>• Hazardous Goods License</li>
                    <li>• Provincial Operating License</li>
                    <li>• Vehicle Roadworthy Certificate</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Safety Requirements</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Driver training certification</li>
                    <li>• Emergency response equipment</li>
                    <li>• Spill prevention measures</li>
                    <li>• Route risk assessments</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collection & Transportation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive waste transportation solutions with full regulatory compliance and safety protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scheduled Collections</h3>
              <p className="text-gray-600 mb-4">Regular waste collection services with flexible scheduling to meet your operational needs.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Daily, weekly, monthly schedules</li>
                <li>• Container sizing assessment</li>
                <li>• Route optimization</li>
                <li>• Collection confirmations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Response</h3>
              <p className="text-gray-600 mb-4">24/7 emergency waste collection and transportation services for urgent situations.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Same-day response</li>
                <li>• After-hours service</li>
                <li>• Specialized equipment</li>
                <li>• Priority routing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">GPS Tracking</h3>
              <p className="text-gray-600 mb-4">Real-time GPS tracking of all waste transportation vehicles for transparency and accountability.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Real-time location monitoring</li>
                <li>• Route verification</li>
                <li>• ETA notifications</li>
                <li>• Digital manifest tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Transportation Fleet</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Modern, well-maintained vehicles designed for safe and efficient waste transportation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-2">Heavy Duty Trucks</h3>
              <p className="text-blue-100">For large-scale industrial and commercial waste collection with specialized compartments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-xl font-bold mb-2">Compact Vehicles</h3>
              <p className="text-blue-100">Maneuverable vehicles for urban areas and smaller collection requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚒</div>
              <h3 className="text-xl font-bold mb-2">Specialized Units</h3>
              <p className="text-blue-100">Hazardous waste and emergency response vehicles with advanced safety features</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Waste Collection Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our transportation specialists to discuss your waste collection needs and receive a customized transportation solution that meets all South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Collection Service
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteCollection;