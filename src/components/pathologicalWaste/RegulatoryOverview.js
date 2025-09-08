import React from "react";
import { WASTE_CATEGORIES, REGULATORY_REQUIREMENTS } from "../../constants/PathologicalWasteData";

const RegulatoryOverview = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="regulatory-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="regulatory-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Pathological Waste Regulations
          </h2>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-800 mb-4">⚕️ Healthcare & Anatomical Waste Compliance</h3>
            <p className="text-purple-700 mb-4">
              Pathological waste is classified as anatomical waste under South African regulations and requires specialized handling protocols. We ensure complete compliance with HPCSA guidelines and environmental legislation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-purple-800 mb-2">Waste Categories</h4>
                <ul className="text-purple-700 space-y-1" role="list">
                  {WASTE_CATEGORIES.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-purple-800 mb-2">Regulatory Requirements</h4>
                <ul className="text-purple-700 space-y-1" role="list">
                  {REGULATORY_REQUIREMENTS.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(RegulatoryOverview);