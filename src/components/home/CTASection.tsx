import React, { memo } from "react";
import { Link } from "react-router-dom";
import type { ServicesProps } from "../../types";

// CTA Section component with typed props
const CTASection: React.FC<ServicesProps> = ({ services, industries }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Switch to Professional Waste Management?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get a free consultation and customized quote for your waste management needs. Our expert team is ready to help you achieve complete compliance and environmental responsibility.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="Get a free quote for waste management services"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="View all waste management services"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

CTASection.displayName = 'CTASection';

export default CTASection;