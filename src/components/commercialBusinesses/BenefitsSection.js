import React from 'react';
import { COMMERCIAL_BENEFITS } from '../../constants/CommercialBusinessesData';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="benefits-heading"
            className="text-3xl font-bold mb-4"
          >
            Commercial Partnership Benefits
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional waste management that supports your business operations and environmental responsibility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {COMMERCIAL_BENEFITS.map((benefit, index) => (
            <div key={index} className="text-center" role="listitem">
              <div className="text-4xl mb-4" aria-hidden="true">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;