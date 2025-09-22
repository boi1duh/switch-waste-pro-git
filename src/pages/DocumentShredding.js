import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaCreditCard, FaHdd, FaTruck, FaBox, FaLock } from 'react-icons/fa';
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

const DocumentShredding = () => {
  return (
    <>
      <Hero
        subtitle="Secure Document Shredding"
        title="Data Protection & Destruction"
        description="Professional document destruction services ensuring complete data security and regulatory compliance. POPIA and GDPR compliant shredding with secure chain of custody and destruction certificates."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back.webp`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="large"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Shredding Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaFileAlt className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Paper Document Shredding</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaCreditCard className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Credit Card Destruction</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaHdd className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Media & Hard Drive Destruction</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaTruck className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">On-Site Shredding</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Data Protection Regulations">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FaLock /> POPIA & GDPR Compliance
          </h3>
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
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Document Types</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Financial records</li>
                <li>• Medical records</li>
                <li>• Legal documents</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Document Shredding Services"
        subtitle="Comprehensive document destruction services with multiple security levels and complete regulatory compliance"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600">
              <FaTruck className="inline-block" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">On-Site Shredding</h3>
            <p className="text-gray-600">Mobile shredding trucks bring secure destruction directly to your facility, ensuring maximum security and convenience.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600">
              <FaBox className="inline-block" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Off-Site Shredding</h3>
            <p className="text-gray-600">Secure collection and transportation to our facility for professional shredding with complete chain of custody.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600">
              <FaHdd className="inline-block" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Media Destruction</h3>
            <p className="text-gray-600">Specialized destruction of hard drives, CDs, DVDs, USB drives, and other electronic media containing sensitive data.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Security Levels & Standards"
        subtitle="Multiple security levels ensure appropriate protection for different types of sensitive documents"
        bgColor="bg-blue-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl mb-4 font-bold">P-1</div>
            <h3 className="text-xl font-bold mb-2">Level 1 - Strip Cut</h3>
            <p className="text-blue-100">Basic security for general documents, 38mm strip width, suitable for non-sensitive materials</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 font-bold">P-4</div>
            <h3 className="text-xl font-bold mb-2">Level 2 - Cross Cut</h3>
            <p className="text-blue-100">Medium security for confidential documents, 4x40mm particle size, POPIA compliant</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 font-bold">P-5</div>
            <h3 className="text-xl font-bold mb-2">Level 3 - Micro Cut</h3>
            <p className="text-blue-100">High security for classified documents, 2x15mm particle size, maximum data protection</p>
          </div>
        </div>
      </ContentSection>

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