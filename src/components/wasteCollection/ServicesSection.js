import React from "react";
import { servicesData } from "../../constants/WasteCollectionData";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="services-title"
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            {servicesData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              role="article"
              aria-labelledby={`service-${index}-title`}
            >
              <div className="text-4xl mb-4" role="img" aria-label={service.title}>
                {service.icon}
              </div>
              <h3
                id={`service-${index}-title`}
                className="text-xl font-bold text-gray-800 mb-3"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-1 text-sm" role="list">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ServicesSection);