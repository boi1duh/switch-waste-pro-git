import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare Waste Management Solutions</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Ensure your healthcare facility maintains the highest standards of infection control and regulatory compliance. Contact our healthcare waste specialists for a comprehensive assessment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Request Healthcare Assessment
          </Link>
          <Link to="/compliance-consulting" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Compliance Training
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;