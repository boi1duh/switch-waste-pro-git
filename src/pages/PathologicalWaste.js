import React from "react";
import { Link } from "react-router-dom";

const PathologicalWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/back4.png')`,
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
                Pathological Waste Management
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Dignified & Safe Processing
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Specialized handling of human tissues, organs, body parts, and other pathological specimens. We ensure respectful treatment and complete destruction while maintaining strict regulatory compliance.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Pathological Materials</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-purple-400 text-2xl">🫀</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Human Organs & Tissues</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-purple-400 text-2xl">🩸</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Blood & Body Fluids</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-purple-400 text-2xl">🧬</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Laboratory Specimens</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-purple-400 text-2xl">🦴</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Surgical Waste</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pathological Waste Regulations</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-purple-800 mb-4">⚕️ Healthcare & Anatomical Waste Compliance</h3>
              <p className="text-purple-700 mb-4">
                Pathological waste is classified as anatomical waste under South African regulations and requires specialized handling protocols. We ensure complete compliance with HPCSA guidelines and environmental legislation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-800 mb-2">Waste Categories</h4>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Human tissues and organs</li>
                    <li>• Body parts and surgical specimens</li>
                    <li>• Blood and blood products</li>
                    <li>• Amniotic fluid and placenta</li>
                    <li>• Laboratory cultures</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-800 mb-2">Regulatory Requirements</h4>
                  <ul className="text-purple-700 space-y-1">
                    <li>• HPCSA anatomical waste guidelines</li>
                    <li>• SANS 10248 compliance</li>
                    <li>• Dignified handling protocols</li>
                    <li>• Complete documentation</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pathological Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Respectful and compliant management of anatomical and pathological waste materials with specialized handling protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Tissue Management</h3>
              <p className="text-gray-600 mb-4">Specialized collection and processing of surgical tissues, organs, and anatomical specimens from hospitals and medical facilities.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Dignified collection procedures</li>
                <li>• Secure transportation protocols</li>
                <li>• Temperature-controlled storage</li>
                <li>• Chain of custody documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Specimen Handling</h3>
              <p className="text-gray-600 mb-4">Professional management of laboratory-generated pathological specimens including cultures, biopsies, and research materials.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Biohazard containment</li>
                <li>• Pathogen risk assessment</li>
                <li>• Laboratory waste segregation</li>
                <li>• Research facility protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚰️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Funeral Service Support</h3>
              <p className="text-gray-600 mb-4">Support for funeral services and crematoriums with proper handling of anatomical remains and related materials.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Crematorium waste management</li>
                <li>• Anatomical remains handling</li>
                <li>• Embalming waste processing</li>
                <li>• Regulatory compliance support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dignity & Respect Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dignity & Respect in Processing</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We handle pathological waste with the utmost dignity and respect, ensuring proper protocols are followed throughout the entire process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold mb-2">Respectful Handling</h3>
              <p className="text-purple-100">All anatomical materials are handled with dignity and respect by trained, compassionate professionals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Processing</h3>
              <p className="text-purple-100">Complete privacy and security maintained throughout collection, transportation, and processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Complete Documentation</h3>
              <p className="text-purple-100">Full traceability and documentation provided for all pathological waste processing activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Pathological Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our specialized team for dignified and compliant management of pathological and anatomical waste materials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Pathological Waste Assessment
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

export default PathologicalWaste;