import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Services = () => {
  const services = [
    {
      title: "Healthcare Risk Waste",
      description: "Complete regulated medical waste solutions for healthcare facilities including sharps, pathological specimens, and pharmaceutical waste with SANS compliance.",
      icon: "🏥",
      link: "/healthcare-facilities",
      alt: "Healthcare risk waste management icon"
    },
    {
      title: "Pharmaceutical Waste",
      description: "Safe disposal of expired, unused, and contaminated medications with complete audit trails and DEA registration compliance.",
      icon: "💊",
      link: "/pharmaceutical-waste",
      alt: "Pharmaceutical waste disposal icon"
    },
    {
      title: "Hazardous Waste",
      description: "Specialized handling and disposal of hazardous materials with safety protocols and environmental protection measures.",
      icon: "⚠️",
      link: "/hazardous-waste",
      alt: "Hazardous waste management icon"
    },
    {
      title: "General Waste & Recycling",
      description: "Comprehensive recycling solutions for paper, glass, plastic, and general waste with NEMWA compliance and sustainability focus.",
      icon: "♻️",
      link: "/general-waste",
      alt: "General waste and recycling icon"
    },
    {
      title: "Compliance Consulting",
      description: "Expert consulting services for regulatory compliance, waste management audits, and training programs.",
      icon: "📋",
      link: "/compliance-consulting",
      alt: "Compliance consulting and training icon"
    },
    {
      title: "Waste Collection & Transportation",
      description: "Professional waste collection and transportation services with GPS tracking and scheduled delivery routes.",
      icon: "🚛",
      link: "/waste-collection",
      alt: "Waste collection and transportation icon"
    },
    {
      title: "Document Shredding",
      description: "Secure document destruction services with POPIA compliance and data protection for confidential information.",
      icon: "📄",
      link: "/document-shredding",
      alt: "Document shredding and secure disposal icon"
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏥</span>
            <span>Professional Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Waste Management Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for healthcare and general waste management needs with complete regulatory compliance and environmental responsibility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">SANS Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Waste Management Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional services tailored to meet your specific waste management needs with regulatory compliance and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                role="article"
                aria-labelledby={`service-title-${index}`}
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className="text-5xl mb-4 inline-block"
                      role="img"
                      aria-label={service.alt}
                    >
                      {service.icon}
                    </div>
                    <h3
                      id={`service-title-${index}`}
                      className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="text-center">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch to Professional Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free consultation and customized quote for your waste management needs. Our expert team is ready to help you achieve complete compliance and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Get Free Quote
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;