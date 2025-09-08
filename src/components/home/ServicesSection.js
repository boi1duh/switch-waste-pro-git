import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks";

const ServicesSection = memo(({ services }) => {
  const { ref: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  if (!services || services.length === 0) {
    return null; // Handle empty services gracefully
  }

  return (
    <section ref={servicesRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end waste management solutions tailored to your specific needs, ensuring compliance and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index} // Use service.id if available, fallback to index
              className={`bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer group ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;