import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaHospital, FaExclamationTriangle, FaVial, FaFire, FaGlobeEurope, FaChartLine } from 'react-icons/fa';

const IncinerationTreatment = () => {
  return (
    <>
      <Hero
        subtitle="Incineration & Treatment"
        title="Advanced Waste Processing"
        description="State-of-the-art incineration facilities and treatment technologies for medical, hazardous, and industrial waste. EPA and NEMWA compliant processing with advanced emission control systems."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back3.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Treatment Technologies</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">High-Temperature Incineration</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Chemical Treatment</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Thermal Desorption</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Plasma Arc Technology</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Advanced Treatment Technologies">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">🔥</span>
            State-of-the-Art Processing Facilities
          </h3>
          <p className="text-orange-700 mb-4">
            Our advanced treatment facilities utilize cutting-edge technologies to safely and effectively process medical, hazardous, and industrial waste while minimizing environmental impact and ensuring regulatory compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-800 mb-2">Primary Technologies</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• Controlled air incineration</li>
                <li>• Rotary kiln incineration</li>
                <li>• Plasma arc gasification</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-800 mb-2">Environmental Controls</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• Advanced scrubber systems</li>
                <li>• HEPA filtration</li>
                <li>• Continuous emissions monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Incineration & Treatment Services"
        subtitle="Comprehensive waste treatment solutions using advanced technologies for safe and environmentally responsible processing"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaHospital className="text-4xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Medical Waste Incineration</h3>
            <p className="text-gray-600">High-temperature incineration of medical waste including sharps, pathological materials, and contaminated PPE.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaExclamationTriangle className="text-4xl mb-4 text-red-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hazardous Waste Treatment</h3>
            <p className="text-gray-600">Advanced treatment of hazardous chemicals, solvents, and industrial waste using thermal and chemical processes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaVial className="text-4xl mb-4 text-purple-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Waste Processing</h3>
            <p className="text-gray-600">Specialized treatment of laboratory chemicals, biohazardous materials, and research waste.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Advanced Treatment Benefits"
        subtitle="Our state-of-the-art treatment technologies ensure maximum safety, compliance, and environmental protection"
        bgColor="bg-orange-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <FaFire className="text-4xl mb-4 mx-auto text-orange-300" />
            <h3 className="text-xl font-bold mb-2">Complete Destruction</h3>
            <p className="text-orange-100">Pathogens, chemicals, and hazardous materials are completely destroyed through high-temperature processing</p>
          </div>
          <div className="text-center">
            <FaGlobeEurope className="text-4xl mb-4 mx-auto text-orange-300" />
            <h3 className="text-xl font-bold mb-2">Environmental Protection</h3>
            <p className="text-orange-100">Advanced emission control systems ensure compliance with strict environmental regulations</p>
          </div>
          <div className="text-center">
            <FaChartLine className="text-4xl mb-4 mx-auto text-orange-300" />
            <h3 className="text-xl font-bold mb-2">Volume Reduction</h3>
            <p className="text-orange-100">Significant reduction in waste volume through incineration and treatment processes</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Advanced Waste Treatment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our treatment specialists to discuss your incineration and advanced processing needs. We provide comprehensive solutions for all types of hazardous and medical waste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Treatment Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Facilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncinerationTreatment;