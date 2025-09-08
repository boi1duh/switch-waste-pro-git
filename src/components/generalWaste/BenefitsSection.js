import React from "react";
import { BENEFITS_DATA } from "../../constants/GeneralWasteData";

const BenefitsSection = () => {
  const { title, subtitle, benefits } = BENEFITS_DATA;

  return (
    <section className="py-16 bg-blue-600 text-white" aria-labelledby="benefits-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="benefits-title" className="text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label={benefit.title}>
                {benefit.icon}
              </div>
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