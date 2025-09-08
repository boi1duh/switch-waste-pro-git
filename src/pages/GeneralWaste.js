import React from "react";
import { Link } from "react-router-dom";

const GeneralWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/services/waste-collection.jpg')`,
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
                General Waste Management
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Comprehensive Waste Solutions
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Professional general waste management services compliant with South African National Environmental Management: Waste Act (NEMWA). From collection to responsible disposal, we ensure your waste is handled sustainably and legally.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our General Waste Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">♻️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Recycling Programs</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🚛</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Collection & Transportation</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏭</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Waste Treatment</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Compliance Consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">General Waste Management in South Africa</h2>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Framework</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In South Africa, general waste management is governed by the National Environmental Management: Waste Act (Act 59 of 2008) and its associated regulations. The Department of Environment, Forestry and Fisheries (DEFF) oversees waste management activities to ensure environmental protection and sustainable development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Key Legislation</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• National Environmental Management: Waste Act (NEMWA)</li>
                    <li>• Waste Classification and Management Regulations</li>
                    <li>• National Waste Management Strategy</li>
                    <li>• Provincial Environmental Management Acts</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">Licensing Requirements</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Waste Management License (Category A or B)</li>
                    <li>• Transportation permits</li>
                    <li>• Treatment facility authorization</li>
                    <li>• Environmental impact assessments</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our General Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive waste management solutions tailored to South African businesses and municipalities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Recycling Programs</h3>
              <p className="text-gray-600 mb-4">Comprehensive recycling solutions for paper, glass, plastic, and metals in compliance with South African recycling standards.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Material recovery facilities</li>
                <li>• Sorting and processing</li>
                <li>• Market linkages</li>
                <li>• Environmental reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Collection & Transportation</h3>
              <p className="text-gray-600 mb-4">Licensed waste collection and transportation services with GPS tracking and compliance documentation.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Scheduled collections</li>
                <li>• Emergency response</li>
                <li>• Route optimization</li>
                <li>• Spill prevention</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Waste Treatment</h3>
              <p className="text-gray-600 mb-4">Advanced waste treatment facilities meeting South African environmental standards and DEFF requirements.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Mechanical treatment</li>
                <li>• Biological treatment</li>
                <li>• Landfill management</li>
                <li>• Energy recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Professional Waste Management</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Partnering with Switch Waste ensures compliance, cost savings, and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-blue-100">Full compliance with NEMWA and provincial regulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
              <p className="text-blue-100">Reduced waste management costs through efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Environmental Protection</h3>
              <p className="text-blue-100">Minimized environmental impact and carbon footprint</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Risk Management</h3>
              <p className="text-blue-100">Comprehensive liability protection and insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss your general waste management needs and receive a customized solution that meets South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get Free Consultation
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

export default GeneralWaste;