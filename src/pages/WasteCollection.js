import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaCalendarAlt, FaExclamationTriangle, FaMapMarkedAlt, FaTruck, FaClipboardList } from 'react-icons/fa';

const WasteCollection = () => {
  return (
    <>
      <Hero
        subtitle="Waste Collection & Transportation"
        title="Reliable & Compliant Transport"
        description="Licensed waste collection and transportation services throughout South Africa. GPS-tracked vehicles, emergency response capabilities, and full compliance with Department of Transport regulations."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/services/collection.transportation-1-768x564.jpg`}
        primaryCta={{ text: 'Schedule Collection', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Transportation Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaTruck className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Scheduled Collections</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaExclamationTriangle className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Emergency Response</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaMapMarkedAlt className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">GPS Tracking</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaClipboardList className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Compliance Documentation</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="South African Transportation Regulations">
        <div className="bg-blue-50 p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">🚛 Transportation Compliance Framework</h3>
          <p className="text-blue-700 mb-6 leading-relaxed">
            Waste transportation in South Africa is regulated by the Department of Transport and must comply with the National Road Traffic Act, Hazardous Substances Act, and provincial environmental legislation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Required Licenses</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Road Transportation Permit</li>
                <li>• Hazardous Goods License</li>
                <li>• Provincial Operating License</li>
                <li>• Vehicle Roadworthy Certificate</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Safety Requirements</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Driver training certification</li>
                <li>• Emergency response equipment</li>
                <li>• Spill prevention measures</li>
                <li>• Route risk assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Collection & Transportation Services"
        subtitle="Comprehensive waste transportation solutions with full regulatory compliance and safety protocols"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaCalendarAlt className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Scheduled Collections</h3>
            <p className="text-gray-600 mb-4">Regular waste collection services with flexible scheduling to meet your operational needs.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaExclamationTriangle className="text-4xl mb-4 mx-auto text-red-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Response</h3>
            <p className="text-gray-600 mb-4">24/7 emergency waste collection and transportation services for urgent situations.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaMapMarkedAlt className="text-4xl mb-4 mx-auto text-green-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">GPS Tracking</h3>
            <p className="text-gray-600 mb-4">Real-time GPS tracking of all waste transportation vehicles for transparency and accountability.</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Waste Collection Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our transportation specialists to discuss your waste collection needs and receive a customized transportation solution that meets all South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Collection Service
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteCollection;