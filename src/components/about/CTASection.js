import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Switch Waste Solutions</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Experience the difference that professional, reliable, and environmentally responsible waste management can make for your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us Today
          </Link>
          <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;