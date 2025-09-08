import React from "react";

const TechnologyOverview = React.memo(() => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Advanced Treatment Technologies</h2>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-orange-800 mb-4">
              <span aria-label="Microscope emoji">🔬</span> State-of-the-Art Processing Facilities
            </h3>
            <p className="text-orange-700 mb-4">
              Our advanced treatment facilities utilize cutting-edge technologies to safely and effectively process medical, hazardous, and industrial waste while minimizing environmental impact and ensuring regulatory compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-800 mb-2">Primary Technologies</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Controlled air incineration</li>
                  <li>• Rotary kiln incineration</li>
                  <li>• Plasma arc gasification</li>
                  <li>• Chemical neutralization</li>
                  <li>• Thermal desorption</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-800 mb-2">Environmental Controls</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Advanced scrubber systems</li>
                  <li>• HEPA filtration</li>
                  <li>• Continuous emissions monitoring</li>
                  <li>• Ash residue management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TechnologyOverview.displayName = 'TechnologyOverview';

export default TechnologyOverview;