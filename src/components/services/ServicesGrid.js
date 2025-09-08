import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

const ServicesGrid = React.memo(({ services }) => {
  if (!services || services.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">No services available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
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
            <ServiceCard key={service.link} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesGrid.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ServicesGrid.displayName = "ServicesGrid";

export default ServicesGrid;