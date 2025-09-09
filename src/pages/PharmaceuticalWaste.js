import React from "react";
import { Link } from "react-router-dom";

const PharmaceuticalWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/Index.Hero.jpg')`,
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
                Pharmaceutical Waste
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Safe Pharmaceutical Disposal
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Secure disposal of expired medications, unused pharmaceuticals, and controlled substances. We ensure proper handling and destruction with complete audit trails and regulatory compliance.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Pharmaceutical Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">💊</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Expired Medications</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🩺</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Controlled Substances</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Chemotherapy Drugs</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🔬</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Veterinary Pharmaceuticals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Pharmaceutical Waste Disposal Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Controlled Substances</h3>
                <p className="text-gray-600 mb-4">Secure handling and disposal of DEA Schedule II-V controlled substances.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• DEA-compliant destruction</li>
                  <li>• Chain of custody documentation</li>
                  <li>• Witnessed destruction process</li>
                  <li>• Regulatory reporting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Expired Medications</h3>
                <p className="text-gray-600 mb-4">Safe disposal of expired or unused prescription and over-the-counter medications.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Environmental protection</li>
                  <li>• Prevents misuse</li>
                  <li>• Community safety</li>
                  <li>• Proper incineration</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                Request Pharmaceutical Waste Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmaceuticalWaste;