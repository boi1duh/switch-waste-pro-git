import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Healthcare Waste Management Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized solutions designed specifically for healthcare facilities' unique waste management needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4" role="img" aria-label="Hospital">🏥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Services</h3>
            <p className="text-gray-600 mb-4">Comprehensive waste management for large hospitals including emergency departments and surgical suites.</p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• 24/7 emergency response</li>
              <li>• Multiple waste stream handling</li>
              <li>• Large volume containers</li>
              <li>• Specialized collection routes</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4" role="img" aria-label="Clinic">🩺</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Clinic Support</h3>
            <p className="text-gray-600 mb-4">Tailored services for medical clinics, dental practices, and specialized healthcare facilities.</p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Flexible collection schedules</li>
              <li>• Smaller container sizes</li>
              <li>• Cost-effective solutions</li>
              <li>• Regulatory compliance support</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4" role="img" aria-label="Laboratory">🔬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Services</h3>
            <p className="text-gray-600 mb-4">Specialized handling of laboratory waste including chemical, biological, and radioactive materials.</p>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Chemical waste neutralization</li>
              <li>• Biohazard containment</li>
              <li>• Radioactive waste handling</li>
              <li>• Laboratory-specific protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;