import React from "react";

const RegulatoryOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Healthcare Waste Management Regulations</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">🏥 Healthcare-Specific Compliance Requirements</h3>
            <p className="text-green-700 mb-4">
              Healthcare facilities in South Africa are subject to stringent waste management regulations under the Health Professions Council of South Africa (HPCSA) guidelines and SANS standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-800 mb-2">Key Standards</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• SANS 10248: Healthcare risk waste</li>
                  <li>• HPCSA waste management guidelines</li>
                  <li>• Department of Health regulations</li>
                  <li>• Infection control protocols</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-800 mb-2">Required Documentation</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Waste manifest records</li>
                  <li>• Treatment certificates</li>
                  <li>• Staff training records</li>
                  <li>• Compliance audit reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryOverviewSection;