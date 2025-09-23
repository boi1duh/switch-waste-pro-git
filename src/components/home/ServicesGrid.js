import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicesGrid = ({ services, servicesVisible }) => {
  return (
    <>
      <div className="relative py-16 bg-white">
        {/* Continued overlay from hero banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We provide end-to-end waste management solutions tailored to your specific needs, ensuring compliance and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:scale-105 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 text-primary-600">
                  {service.Icon && (
                    <service.Icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-all duration-300 group-hover:translate-x-2"
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
      </div>
    </>
  );
};

ServicesGrid.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Icon: PropTypes.elementType,
    })
  ).isRequired,
  servicesVisible: PropTypes.bool,
};

export default memo(ServicesGrid);