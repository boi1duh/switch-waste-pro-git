import React from "react";
import { Link } from "react-router-dom";

const DocumentShredding = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/clean-1024x657.jpeg')`,
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
                Secure Document Shredding
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Data Protection & Destruction
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Professional document destruction services ensuring complete data security and regulatory compliance. POPIA and GDPR compliant shredding with secure chain of custody and destruction certificates.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Shredding Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">📄</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Paper Document Shredding</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">💳</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Credit Card Destruction</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">💿</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Media & Hard Drive Destruction</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-blue-400 text-2xl">🏢</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">On-Site Shredding</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Data Protection Regulations</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🔒 POPIA & GDPR Compliance</h3>
              <p className="text-blue-700 mb-4">
                Document shredding services must comply with South Africa&apos;s Protection of Personal Information Act (POPIA) and international data protection standards. We ensure complete data destruction and regulatory compliance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Security Standards</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• DIN 66399 security levels</li>
                    <li>• POPIA compliance</li>
                    <li>• Secure chain of custody</li>
                    <li>• Destruction certificates</li>
                    <li>• NAID certification</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Document Types</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Financial records</li>
                    <li>• Medical records</li>
                    <li>• Legal documents</li>
                    <li>• Personal information</li>
                    <li>• Classified materials</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Document Shredding Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive document destruction services with multiple security levels and complete regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">On-Site Shredding</h3>
              <p className="text-gray-600 mb-4">Mobile shredding trucks bring secure destruction directly to your facility, ensuring maximum security and convenience.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Mobile shredding units</li>
                <li>• Witnessed destruction</li>
                <li>• Immediate certificate</li>
                <li>• No transportation risk</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Off-Site Shredding</h3>
              <p className="text-gray-600 mb-4">Secure collection and transportation to our facility for professional shredding with complete chain of custody.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Secure collection bins</li>
                <li>• GPS-tracked transport</li>
                <li>• Facility security</li>
                <li>• Scheduled pickups</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💿</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Media Destruction</h3>
              <p className="text-gray-600 mb-4">Specialized destruction of hard drives, CDs, DVDs, USB drives, and other electronic media containing sensitive data.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Hard drive degaussing</li>
                <li>• Physical destruction</li>
                <li>• Data recovery prevention</li>
                <li>• NIST 800-88 compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Levels */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Levels & Standards</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Multiple security levels ensure appropriate protection for different types of sensitive documents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">Level 1 - Strip Cut</h3>
              <p className="text-blue-100">Basic security for general documents, 38mm strip width, suitable for non-sensitive materials</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">Level 2 - Cross Cut</h3>
              <p className="text-blue-100">Medium security for confidential documents, 4x40mm particle size, POPIA compliant</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">Level 3 - Micro Cut</h3>
              <p className="text-blue-100">High security for classified documents, 2x15mm particle size, maximum data protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Secure Document Shredding?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protect your sensitive information with our professional document destruction services. POPIA compliant with complete security and documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Shredding Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Security Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentShredding;