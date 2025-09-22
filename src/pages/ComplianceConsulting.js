import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaChalkboardTeacher, FaBuilding, FaIndustry, FaHospital, FaSearch, FaGraduationCap, FaChartBar, FaClipboardList } from 'react-icons/fa';

const ComplianceConsulting = () => {
  return (
    <>
      <Hero
        subtitle="Compliance Consulting"
        title="Regulatory Excellence"
        description="Expert guidance on South African waste management regulations. Comprehensive compliance consulting, training programs, and audit preparation services to ensure your organization meets all legal requirements."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/services/compliance-training.jpg`}
        primaryCta={{ text: 'Get Compliance Assessment', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Compliance Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaClipboardList className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Regulatory Audits</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaGraduationCap className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Staff Training</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaChartBar className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Compliance Reporting</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaSearch className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Gap Analysis</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="South African Waste Management Compliance">
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
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Compliance Requirements</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Waste Management License</li>
                <li>• Environmental Impact Assessment</li>
                <li>• Annual compliance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Our Compliance Consulting Services"
        subtitle="Comprehensive regulatory compliance support tailored to South African waste management requirements"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaSearch className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Audits</h3>
            <p className="text-gray-600">Comprehensive waste management compliance audits identifying gaps and recommending corrective actions.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaChalkboardTeacher className="text-4xl mb-4 mx-auto text-green-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Staff Training</h3>
            <p className="text-gray-600">Certified training programs for waste management personnel covering regulatory requirements and best practices.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaChartBar className="text-4xl mb-4 mx-auto text-purple-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Reporting Services</h3>
            <p className="text-gray-600">Preparation and submission of regulatory reports, waste manifests, and compliance documentation.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Professional Training Programs"
        subtitle="Comprehensive training solutions designed to meet South African regulatory requirements and industry standards"
        bgColor="bg-blue-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <FaHospital className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Healthcare Waste Training</h3>
            <p className="text-blue-100">Specialized training for healthcare facilities covering SANS guidelines and medical waste regulations</p>
          </div>
          <div className="text-center">
            <FaIndustry className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Industrial Compliance</h3>
            <p className="text-blue-100">Training programs for manufacturing and industrial facilities on hazardous waste management</p>
          </div>
          <div className="text-center">
            <FaBuilding className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Commercial Training</h3>
            <p className="text-blue-100">Compliance training for offices, retail spaces, and commercial properties</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Regulatory Compliance</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don&apos;t risk penalties and legal issues. Contact our compliance experts for a comprehensive assessment and customized compliance program that meets all South African regulatory requirements.
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