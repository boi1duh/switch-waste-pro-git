import React from "react";

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-leaf text-green-600 text-xl" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Environmental Responsibility</h3>
            <p className="text-gray-600">We prioritize eco-friendly solutions in all our operations, continuously seeking opportunities to reduce environmental impact through sustainable practices and innovative technologies.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-handshake text-blue-600 text-xl" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrity & Transparency</h3>
            <p className="text-gray-600">We conduct our business with complete honesty and transparency, providing clear costing structures with no hidden costs to help you budget accurately and effectively.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-red-600 text-xl" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety & Compliance</h3>
            <p className="text-gray-600">Ensuring a safe environment is at the heart of everything we do. We implement the highest safety standards and maintain strict regulatory compliance to protect healthcare workers, patients, and communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;