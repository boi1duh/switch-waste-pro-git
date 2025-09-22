import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaRecycle, FaTruck, FaIndustry, FaClipboardCheck, FaDollarSign, FaLeaf, FaShieldAlt, FaClipboardList } from 'react-icons/fa';

const GeneralWaste = () => {
  return (
    <>
      <Hero
        subtitle="General Waste Management"
        title="Comprehensive Waste Solutions"
        description="Professional general waste management services compliant with South African National Environmental Management: Waste Act (NEMWA). From collection to responsible disposal, we ensure your waste is handled sustainably and legally."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/services/waste-collection.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our General Waste Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaRecycle className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Recycling Programs</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaTruck className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Collection & Transportation</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaIndustry className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Waste Treatment</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaClipboardList className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Compliance Consulting</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="General Waste Management in South Africa">
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Framework</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In South Africa, general waste management is governed by the National Environmental Management: Waste Act (Act 59 of 2008) and its associated regulations. The Department of Environment, Forestry and Fisheries (DEFF) oversees waste management activities to ensure environmental protection and sustainable development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Key Legislation</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• National Environmental Management: Waste Act (NEMWA)</li>
                <li>• Waste Classification and Management Regulations</li>
                <li>• National Waste Management Strategy</li>
                <li>• Provincial Environmental Management Acts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Licensing Requirements</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Waste Management License (Category A or B)</li>
                <li>• Transportation permits</li>
                <li>• Treatment facility authorization</li>
                <li>• Environmental impact assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our General Waste Services"
        subtitle="Comprehensive waste management solutions tailored to South African businesses and municipalities"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in">
            <FaRecycle className="text-4xl mb-4 text-secondary-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Recycling Programs</h3>
            <p className="text-gray-600 mb-4">Comprehensive recycling solutions for paper, glass, plastic, and metals in compliance with South African recycling standards.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
            <FaTruck className="text-4xl mb-4 text-primary-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Collection & Transportation</h3>
            <p className="text-gray-600 mb-4">Licensed waste collection and transportation services with GPS tracking and compliance documentation.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <FaIndustry className="text-4xl mb-4 text-gray-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Waste Treatment</h3>
            <p className="text-gray-600 mb-4">Advanced waste treatment facilities meeting South African environmental standards and DEFF requirements.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Benefits of Professional Waste Management"
        subtitle="Partnering with Switch Waste ensures compliance, cost savings, and environmental responsibility"
        bgColor="bg-blue-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="text-center">
            <FaClipboardCheck className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
            <p className="text-blue-100">Full compliance with NEMWA and provincial regulations</p>
          </div>
          <div className="text-center">
            <FaDollarSign className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
            <p className="text-blue-100">Reduced waste management costs through efficiency</p>
          </div>
          <div className="text-center">
            <FaLeaf className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Environmental Protection</h3>
            <p className="text-blue-100">Minimized environmental impact and carbon footprint</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Risk Management</h3>
            <p className="text-blue-100">Comprehensive liability protection and insurance</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss your general waste management needs and receive a customized solution that meets South African regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get Free Consultation
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

export default GeneralWaste;