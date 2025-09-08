import React from "react";
import { OVERVIEW_DATA } from "../../constants/GeneralWasteData";

const OverviewSection = () => {
  const { title, regulatoryTitle, regulatoryDescription, legislation, licensing } = OVERVIEW_DATA;

  return (
    <section className="py-16 bg-white" aria-labelledby="overview-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="overview-title" className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {title}
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{regulatoryTitle}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {regulatoryDescription}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Key Legislation</h4>
                <ul className="text-gray-600 space-y-1" role="list">
                  {legislation.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2">Licensing Requirements</h4>
                <ul className="text-gray-600 space-y-1" role="list">
                  {licensing.map((item, index) => (
                    <li key={index}>• {item}</li>
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

export default OverviewSection;