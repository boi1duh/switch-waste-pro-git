import React from "react";
import { Link } from "react-router-dom";

const HealthcareFacilities = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/services/healthcare-waste.png')`,
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
                Healthcare Facilities
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Specialized Medical Waste Solutions
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Comprehensive waste management services tailored for hospitals, clinics, medical practices, and healthcare facilities. Compliant with SANS guidelines and Department of Health regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Healthcare Quote
                </Link>
                <Link
                  to="/medical-waste"
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                >
                  Medical Waste Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Healthcare Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Hospital Waste Management</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🩺</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Clinic Support Services</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Medical Practice Solutions</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🔬</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Laboratory Waste Services</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Healthcare Waste Management Regulations</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">🏥 Healthcare-Specific Compliance Requirements</h3>
              <p className="text-green-700 mb-4">
                Healthcare facilities in South Africa are subject to stringent waste management regulations under the Health Professions Council of South Africa (HPCSA) guidelines and SANS standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">Key Standards</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• SANS 10248: Healthcare risk waste</li>
                    <li>• HPCSA waste management guidelines</li>
                    <li>• Department of Health regulations</li>
                    <li>• Infection control protocols</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">Required Documentation</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Waste manifest records</li>
                    <li>• Treatment certificates</li>
                    <li>• Staff training records</li>
                    <li>• Compliance audit reports</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Healthcare Waste Management Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed specifically for healthcare facilities' unique waste management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Services</h3>
              <p className="text-gray-600 mb-4">Comprehensive waste management for large hospitals including emergency departments and surgical suites.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 24/7 emergency response</li>
                <li>• Multiple waste stream handling</li>
                <li>• Large volume containers</li>
                <li>• Specialized collection routes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clinic Support</h3>
              <p className="text-gray-600 mb-4">Tailored services for medical clinics, dental practices, and specialized healthcare facilities.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Flexible collection schedules</li>
                <li>• Smaller container sizes</li>
                <li>• Cost-effective solutions</li>
                <li>• Regulatory compliance support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Services</h3>
              <p className="text-gray-600 mb-4">Specialized handling of laboratory waste including chemical, biological, and radioactive materials.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chemical waste neutralization</li>
                <li>• Biohazard containment</li>
                <li>• Radioactive waste handling</li>
                <li>• Laboratory-specific protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Healthcare Industry Benefits</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Partnering with Switch Waste ensures your healthcare facility maintains the highest standards of infection control and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Infection Control</h3>
              <p className="text-green-100">Minimize infection risks through proper waste segregation and disposal</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-green-100">Full compliance with HPCSA and Department of Health requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-green-100">Optimized waste management reduces operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Waste Management Solutions</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ensure your healthcare facility maintains the highest standards of infection control and regulatory compliance. Contact our healthcare waste specialists for a comprehensive assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Healthcare Assessment
            </Link>
            <Link to="/compliance-consulting" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Compliance Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareFacilities;