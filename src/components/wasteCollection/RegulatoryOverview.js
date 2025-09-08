import React from "react";
import { regulatoryData } from "../../constants/WasteCollectionData";

const RegulatoryOverview = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="regulatory-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            id="regulatory-title"
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            {regulatoryData.title}
          </h2>
          <div className="bg-blue-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {regulatoryData.framework.title}
            </h3>
            <p className="text-blue-700 mb-6 leading-relaxed">
              {regulatoryData.framework.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-800 mb-2">Required Licenses</h4>
                <ul className="text-blue-700 space-y-1" role="list">
                  {regulatoryData.framework.licenses.map((license, index) => (
                    <li key={index}>• {license}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-800 mb-2">Safety Requirements</h4>
                <ul className="text-blue-700 space-y-1" role="list">
                  {regulatoryData.framework.safety.map((requirement, index) => (
                    <li key={index}>• {requirement}</li>
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