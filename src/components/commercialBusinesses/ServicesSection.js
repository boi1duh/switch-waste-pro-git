import React from 'react';
import { COMMERCIAL_SERVICES } from '../../constants/CommercialBusinessesData';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Commercial Waste Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized waste management services designed for commercial and industrial facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {COMMERCIAL_SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" role="listitem">
              <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-1 text-sm" role="list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} role="listitem">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;