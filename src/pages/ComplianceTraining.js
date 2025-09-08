import React from "react";
import { Link } from "react-router-dom";

const ComplianceTraining = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/environmental-impact.jpg')`,
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
                Compliance Training Programs
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Staff Education & Certification
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Comprehensive training programs ensuring your staff understands waste management regulations, safety protocols, and compliance requirements. Certified trainers with industry expertise.
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Training Programs</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Healthcare Waste Training</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏢</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">General Waste Compliance</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">⚠️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Hazardous Waste Safety</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Regulatory Compliance</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Training & Compliance Standards</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">📚 NEMWA & HPCSA Training Requirements</h3>
              <p className="text-green-700 mb-4">
                South African waste management regulations require specific training for staff handling medical, hazardous, and general waste. Our certified training programs ensure complete compliance with NEMWA, HPCSA, and other regulatory requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">Mandatory Training</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Healthcare risk waste handling</li>
                    <li>• Hazardous waste management</li>
                    <li>• Personal protective equipment</li>
                    <li>• Emergency response procedures</li>
                    <li>• Waste segregation protocols</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">Certification Types</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• HPCSA waste management</li>
                    <li>• NEMWA compliance</li>
                    <li>• SANS 10248 certification</li>
                    <li>• First aid and safety</li>
                    <li>• Refresher training</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Training Programs & Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive education and certification programs designed to ensure regulatory compliance and workplace safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare Waste Training</h3>
              <p className="text-gray-600 mb-4">Specialized training for healthcare facilities covering medical waste handling, segregation, and regulatory compliance.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Medical waste classification</li>
                <li>• Safe handling procedures</li>
                <li>• PPE usage and safety</li>
                <li>• Emergency protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">General Waste Compliance</h3>
              <p className="text-gray-600 mb-4">Training for offices, retail, and commercial facilities on waste segregation, recycling, and environmental responsibility.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Waste segregation training</li>
                <li>• Recycling program education</li>
                <li>• Environmental awareness</li>
                <li>• Cost reduction strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hazardous Waste Safety</h3>
              <p className="text-gray-600 mb-4">Advanced training for handling hazardous chemicals, batteries, and dangerous materials with safety protocols.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chemical hazard recognition</li>
                <li>• Spill response training</li>
                <li>• Personal protective equipment</li>
                <li>• Emergency evacuation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Program Benefits</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Professional training programs that ensure compliance, improve safety, and reduce operational costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-green-100">Ensure your staff meets all NEMWA, HPCSA, and other regulatory training requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Workplace Safety</h3>
              <p className="text-green-100">Reduce accidents and injuries through proper training and safety awareness</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Reduction</h3>
              <p className="text-green-100">Minimize fines, reduce waste volumes, and improve operational efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Staff Training & Compliance Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ensure your team is properly trained and certified. Contact our training specialists for customized compliance programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Training Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComplianceTraining;