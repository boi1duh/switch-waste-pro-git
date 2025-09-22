import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaVial, FaNotesMedical, FaSyringe, FaHospital, FaUserMd, FaCogs } from 'react-icons/fa';
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

const PathologicalWaste = () => {
  return (
    <>
      <Hero
        subtitle="Pathological Waste Management"
        title="Dignified & Safe Processing"
        description="Specialized handling of human tissues, organs, body parts, and other pathological specimens. We ensure respectful treatment and complete destruction while maintaining strict regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back4.png`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="large"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Pathological Materials</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-purple-300">
              <FaHeartbeat className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Human Organs & Tissues</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-purple-300">
              <FaSyringe className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Blood & Body Fluids</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-purple-300">
              <FaVial className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Laboratory Specimens</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-purple-300">
              <FaNotesMedical className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Surgical Waste</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Pathological Waste Regulations">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <FaHeartbeat className="text-purple-600" />
            Healthcare & Anatomical Waste Compliance
          </h3>
          <p className="text-purple-700 mb-4">
            Pathological waste is classified as anatomical waste under South African regulations and requires specialized handling protocols. We ensure complete compliance with HPCSA guidelines and environmental legislation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-purple-800 mb-2">Waste Categories</h4>
              <ul className="text-purple-700 space-y-1">
                <li>• Human tissues and organs</li>
                <li>• Blood and blood products</li>
                <li>• Laboratory cultures</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-purple-800 mb-2">Regulatory Requirements</h4>
              <ul className="text-purple-700 space-y-1">
                <li>• HPCSA anatomical waste guidelines</li>
                <li>• SANS 10248 compliance</li>
                <li>• Dignified handling protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Pathological Waste Services"
        subtitle="Respectful and compliant management of anatomical and pathological waste materials with specialized handling protocols"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaHospital className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Tissue Management</h3>
            <p className="text-gray-600">Specialized collection and processing of surgical tissues, organs, and anatomical specimens from hospitals and medical facilities.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaVial className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Specimen Handling</h3>
            <p className="text-gray-600">Professional management of laboratory-generated pathological specimens including cultures, biopsies, and research materials.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaUserMd className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Funeral Service Support</h3>
            <p className="text-gray-600">Support for funeral services and crematoriums with proper handling of anatomical remains and related materials.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Dignity & Respect in Processing"
        subtitle="We handle pathological waste with the utmost dignity and respect, ensuring proper protocols are followed throughout the entire process"
        bgColor="bg-purple-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl mb-4 text-purple-300"><FaHeartbeat className="inline-block" /></div>
            <h3 className="text-xl font-bold mb-2">Respectful Handling</h3>
            <p className="text-purple-100">All anatomical materials are handled with dignity and respect by trained, compassionate professionals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-purple-300"><FaCogs className="inline-block" /></div>
            <h3 className="text-xl font-bold mb-2">Secure Processing</h3>
            <p className="text-purple-100">Complete privacy and security maintained throughout collection, transportation, and processing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-purple-300"><FaNotesMedical className="inline-block" /></div>
            <h3 className="text-xl font-bold mb-2">Complete Documentation</h3>
            <p className="text-purple-100">Full traceability and documentation provided for all pathological waste processing activities</p>
          </div>
        </div>
      </ContentSection>

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