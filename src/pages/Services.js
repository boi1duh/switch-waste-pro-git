import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Services = () => {
  const services = [
    {
      title: "Healthcare Risk Waste",
      description: "Complete regulated medical waste solutions for healthcare facilities including sharps, pathological specimens, and pharmaceutical waste with SANS compliance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/healthcare-facilities",
      alt: "Healthcare risk waste management icon"
    },
    {
      title: "Pharmaceutical Waste",
      description: "Safe disposal of expired, unused, and contaminated medications with complete audit trails and DEA registration compliance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/pharmaceutical-waste",
      alt: "Pharmaceutical waste disposal icon"
    },
    {
      title: "Hazardous Waste",
      description: "Specialized handling and disposal of hazardous materials with safety protocols and environmental protection measures.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      link: "/hazardous-waste",
      alt: "Hazardous waste management icon"
    },
    {
      title: "General Waste & Recycling",
      description: "Comprehensive recycling solutions for paper, glass, plastic, and general waste with NEMWA compliance and sustainability focus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      link: "/general-waste",
      alt: "General waste and recycling icon"
    },
    {
      title: "Compliance Consulting",
      description: "Expert consulting services for regulatory compliance, waste management audits, and training programs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: "/compliance-consulting",
      alt: "Compliance consulting and training icon"
    },
    {
      title: "Waste Collection & Transportation",
      description: "Professional waste collection and transportation services with GPS tracking and scheduled delivery routes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414A1 1 0 0121 12v4a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4-8a2 2 0 114 0m4-8a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/waste-collection",
      alt: "Waste collection and transportation icon"
    },
    {
      title: "Document Shredding",
      description: "Secure document destruction services with POPIA compliance and data protection for confidential information.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
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
            <span>H</span>
            <span>Professional Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
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
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Comprehensive Waste Management Solutions</h2>
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
                      {typeof service.icon === 'string' ? service.icon : service.icon}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Switch to Professional Waste Management?</h2>
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