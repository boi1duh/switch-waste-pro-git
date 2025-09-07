import React from "react";
import { Link } from "react-router-dom";

const ControlledSubstanceWaste = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/back2.jpg')`,
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
                Controlled Substance Waste
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                DEA Compliant Disposal
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Specialized handling and disposal of controlled substances including pharmaceuticals, narcotics, and DEA Schedule I-V medications. Full compliance with DEA regulations and South African drug control legislation.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Controlled Substances</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">💊</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Schedule I-V Drugs</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🧪</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Narcotics & Opioids</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🏥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Hospital Medications</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-red-400 text-2xl">🔒</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">DEA Registered Facilities</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Controlled Substance Regulations</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ DEA & Drug Control Compliance</h3>
              <p className="text-red-700 mb-4">
                Controlled substance waste management is strictly regulated under the U.S. Drug Enforcement Administration (DEA) regulations and South African Medicines and Related Substances Act. Specialized handling protocols are required for all controlled substances.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-red-800 mb-2">DEA Schedules</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Schedule I: High abuse potential</li>
                    <li>• Schedule II: High abuse, medical use</li>
                    <li>• Schedule III-V: Lower abuse potential</li>
                    <li>• Anabolic steroids and hormones</li>
                    <li>• Immediate precursors</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-red-800 mb-2">Required Protocols</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• DEA registration and licensing</li>
                    <li>• Chain of custody documentation</li>
                    <li>• Secure transportation</li>
                    <li>• Witnessed destruction</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Controlled Substance Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized management of controlled substances with full regulatory compliance and secure destruction protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Collection</h3>
              <p className="text-gray-600 mb-4">DEA-compliant collection procedures with proper chain of custody and secure transportation protocols.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Licensed collectors only</li>
                <li>• Secure containment systems</li>
                <li>• GPS-tracked transportation</li>
                <li>• Real-time monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Documentation & Compliance</h3>
              <p className="text-gray-600 mb-4">Complete regulatory documentation including DEA Form 41, destruction certificates, and compliance reporting.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• DEA Form 41 completion</li>
                <li>• Witnessed destruction logs</li>
                <li>• Chain of custody records</li>
                <li>• Regulatory reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Destruction Methods</h3>
              <p className="text-gray-600 mb-4">Approved destruction methods including incineration, chemical neutralization, and secure landfill disposal.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• High-temperature incineration</li>
                <li>• Chemical neutralization</li>
                <li>• Secure landfill protocols</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security & Compliance Standards</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Our controlled substance waste management meets the highest security and regulatory standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">DEA Registration</h3>
              <p className="text-red-100">Fully registered and licensed by the Drug Enforcement Administration for controlled substance handling</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Facilities</h3>
              <p className="text-red-100">State-of-the-art secure storage and processing facilities with 24/7 surveillance and access control</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Witnessed Destruction</h3>
              <p className="text-red-100">All controlled substance destruction is witnessed by authorized personnel and fully documented</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Controlled Substance Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our DEA-compliant specialists for secure and regulatory-compliant management of controlled substances and pharmaceuticals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Controlled Substance Assessment
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

export default ControlledSubstanceWaste;