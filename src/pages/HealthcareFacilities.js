import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaHospital, FaClipboardList, FaUserMd, FaVial } from 'react-icons/fa';

const HealthcareFacilities = () => {
  return (
    <>
      <Hero
        subtitle="Healthcare Facilities"
        title="Specialized Medical Waste Solutions"
        description="Comprehensive waste management services tailored for hospitals, clinics, medical practices, and healthcare facilities. Compliant with SANS guidelines and Department of Health regulations."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/services/healthcare-waste.png`}
        primaryCta={{ text: 'Get Healthcare Quote', link: '/contact' }}
        secondaryCta={{ text: 'Medical Waste Services', link: '/medical-waste' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Healthcare Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaHospital className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Hospital Waste Management</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaClipboardList className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Clinic Support Services</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaUserMd className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Medical Practice Solutions</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaVial className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Laboratory Waste Services</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Healthcare Waste Management Regulations">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
            <FaHospital className="text-2xl mr-2" />
            Healthcare-Specific Compliance Requirements
          </h3>
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
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Required Documentation</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Waste manifest records</li>
                <li>• Treatment certificates</li>
                <li>• Staff training records</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Healthcare Waste Management Services"
        subtitle="Specialized solutions designed specifically for healthcare facilities' unique waste management needs"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaHospital className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Services</h3>
            <p className="text-gray-600">Comprehensive waste management for large hospitals including emergency departments and surgical suites.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaClipboardList className="text-4xl mb-4 mx-auto text-green-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Clinic Support</h3>
            <p className="text-gray-600">Tailored services for medical clinics, dental practices, and specialized healthcare facilities.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaVial className="text-4xl mb-4 mx-auto text-purple-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Services</h3>
            <p className="text-gray-600">Specialized handling of laboratory waste including chemical, biological, and radioactive materials.</p>
          </div>
        </div>
      </ContentSection>

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