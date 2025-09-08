import React from "react";
import { Link } from "react-router-dom";

const ComplianceConsulting = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/services/compliance-training.jpg')`,
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
                Compliance Consulting
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Regulatory Excellence
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Expert guidance on South African waste management regulations. Comprehensive compliance consulting, training programs, and audit preparation services to ensure your organization meets all legal requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Compliance Assessment
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Compliance Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Regulatory Audits</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🎓</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Staff Training</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📊</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Compliance Reporting</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🔍</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Gap Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">South African Waste Management Compliance</h2>
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">📋 Key Regulatory Framework</h3>
              <p className="text-blue-700 mb-6 leading-relaxed">
                South African waste management is governed by comprehensive legislation requiring businesses to maintain strict compliance standards. Our consulting services ensure your organization meets all legal obligations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Primary Legislation</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• NEMWA (Act 59 of 2008)</li>
                    <li>• NEMA (Act 107 of 1998)</li>
                    <li>• Hazardous Substances Act</li>
                    <li>• Occupational Health & Safety Act</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">Compliance Requirements</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Waste Management License</li>
                    <li>• Environmental Impact Assessment</li>
                    <li>• Annual compliance reporting</li>
                    <li>• Emergency response planning</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Compliance Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive regulatory compliance support tailored to South African waste management requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Audits</h3>
              <p className="text-gray-600 mb-4">Comprehensive waste management compliance audits identifying gaps and recommending corrective actions.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Regulatory compliance assessment</li>
                <li>• Documentation review</li>
                <li>• Process evaluation</li>
                <li>• Corrective action plans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Staff Training</h3>
              <p className="text-gray-600 mb-4">Certified training programs for waste management personnel covering regulatory requirements and best practices.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Waste classification training</li>
                <li>• Safety procedures</li>
                <li>• Emergency response</li>
                <li>• Documentation requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reporting Services</h3>
              <p className="text-gray-600 mb-4">Preparation and submission of regulatory reports, waste manifests, and compliance documentation.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Annual compliance reports</li>
                <li>• Waste manifest management</li>
                <li>• DEFF submissions</li>
                <li>• Audit trail maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Training Programs</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive training solutions designed to meet South African regulatory requirements and industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare Waste Training</h3>
              <p className="text-blue-100">Specialized training for healthcare facilities covering SANS guidelines and medical waste regulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Industrial Compliance</h3>
              <p className="text-blue-100">Training programs for manufacturing and industrial facilities on hazardous waste management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Commercial Training</h3>
              <p className="text-blue-100">Compliance training for offices, retail spaces, and commercial properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Regulatory Compliance</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't risk penalties and legal issues. Contact our compliance experts for a comprehensive assessment and customized compliance program that meets all South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Schedule Compliance Assessment
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

export default ComplianceConsulting;