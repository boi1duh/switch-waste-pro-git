import React from "react";
import { SERVICES_DATA } from "../../constants/ComplianceConsultingData";

const ServicesSection = React.memo(() => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-3xl font-bold text-gray-800 mb-4">
            {SERVICES_DATA.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {SERVICES_DATA.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label={service.title}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-1 text-sm" role="list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;