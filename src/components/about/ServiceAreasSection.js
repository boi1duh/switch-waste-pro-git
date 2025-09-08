import React from "react";
import { serviceAreas } from "../../constants/AboutData";

const ServiceAreasSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Areas</h2>
          <p className="text-lg text-gray-600">We provide professional waste management services throughout Johannesburg and surrounding areas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-map-marker-alt text-blue-600" aria-hidden="true"></i>
                <h3 className="text-lg font-semibold text-gray-800">{area.name}</h3>
              </div>
              <p className="text-gray-600">{area.areas}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;