import React from "react";
import { SERVICES } from "../../constants/PathologicalWasteData";

const ServicesSection = () => {

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-3xl font-bold text-gray-800 mb-4">
            Pathological Waste Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respectful and compliant management of anatomical and pathological waste materials with specialized handling protocols
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4" aria-hidden="true">{service.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-1 text-sm" role="list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
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