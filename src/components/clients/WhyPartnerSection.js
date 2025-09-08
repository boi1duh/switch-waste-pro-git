import React from "react";
import { whyPartnerData } from "../../constants/ClientsData";

const WhyPartnerSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Partner With Switch Waste?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our partnerships are built on trust, reliability, and a shared commitment to environmental responsibility and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyPartnerData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label={item.title}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;