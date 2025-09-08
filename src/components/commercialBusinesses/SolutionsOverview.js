import React from 'react';
import { KEY_CHALLENGES, OUR_SOLUTIONS } from '../../constants/CommercialBusinessesData';

const SolutionsOverview = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="solutions-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            id="solutions-heading"
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Commercial Waste Management Solutions
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">🏢 Tailored Solutions for Commercial Properties</h3>
            <p className="text-blue-700 mb-4">
              Commercial waste management requires specialized approaches that minimize operational disruption while ensuring compliance with South African environmental regulations. Our solutions are designed specifically for the unique needs of commercial facilities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-800 mb-2">Key Challenges</h4>
                <ul className="text-blue-700 space-y-1" role="list">
                  {KEY_CHALLENGES.map((challenge, index) => (
                    <li key={index} role="listitem">• {challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-800 mb-2">Our Solutions</h4>
                <ul className="text-blue-700 space-y-1" role="list">
                  {OUR_SOLUTIONS.map((solution, index) => (
                    <li key={index} role="listitem">• {solution}</li>
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

export default SolutionsOverview;