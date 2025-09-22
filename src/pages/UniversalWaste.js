import React from "react";
import { Link } from "react-router-dom";
import { FaBatteryFull, FaLightbulb, FaThermometerHalf, FaBug, FaRecycle, FaDollarSign, FaClipboardList } from 'react-icons/fa';
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

const UniversalWaste = () => {
  return (
    <>
      <Hero
        subtitle="Universal Waste Management"
        title="Common Recyclable Materials"
        description="Specialized handling of universal waste streams including batteries, mercury-containing equipment, lamps, and pesticides. EPA and DEA compliant processing with proper recycling and disposal protocols."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back.webp`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="large"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Universal Waste Categories</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaBatteryFull className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Batteries & Accumulators</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaLightbulb className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Fluorescent Lamps</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaThermometerHalf className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Mercury Equipment</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaBug className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Pesticides & Herbicides</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Universal Waste Regulations">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FaClipboardList /> EPA Universal Waste Rule Compliance
          </h3>
          <p className="text-blue-700 mb-4">
            Universal waste regulations provide streamlined handling requirements for certain widely generated hazardous wastes. In South Africa, these materials are regulated under the Hazardous Substances Act and NEMWA.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Key Categories</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Batteries (lead-acid, lithium-ion)</li>
                <li>• Mercury-containing equipment</li>
                <li>• Fluorescent lamps and bulbs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Regulatory Benefits</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Reduced regulatory burden</li>
                <li>• Extended storage times</li>
                <li>• Simplified recordkeeping</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Universal Waste Services"
        subtitle="Comprehensive management of universal waste streams with specialized handling and recycling protocols"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaBatteryFull className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Battery Management</h3>
            <p className="text-gray-600">Safe collection, transportation, and recycling of all battery types including lead-acid, lithium-ion, and nickel-cadmium batteries.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaLightbulb className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Lamp Recycling</h3>
            <p className="text-gray-600">Specialized handling of fluorescent lamps, LED bulbs, and mercury vapor lamps with mercury recovery and glass recycling.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaThermometerHalf className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Mercury Equipment</h3>
            <p className="text-gray-600">Professional management of mercury-containing devices including thermostats, switches, and measurement equipment.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Universal Waste Benefits"
        subtitle="Streamlined compliance and cost-effective management for commonly generated hazardous waste streams"
        bgColor="bg-blue-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <FaDollarSign className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
            <p className="text-blue-100">Reduced regulatory compliance costs through streamlined universal waste requirements</p>
          </div>
          <div className="text-center">
            <FaRecycle className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Resource Recovery</h3>
            <p className="text-blue-100">Valuable materials recovery including mercury, lead, and rare earth metals</p>
          </div>
          <div className="text-center">
            <FaClipboardList className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Simplified Compliance</h3>
            <p className="text-blue-100">Less complex recordkeeping and reporting requirements for universal waste</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Universal Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our universal waste specialists for comprehensive management of batteries, lamps, mercury equipment, and other universal waste streams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Universal Waste Assessment
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

export default UniversalWaste;