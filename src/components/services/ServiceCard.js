import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = React.memo(({ service, index }) => {
  return (
    <div
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
  );
});

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;