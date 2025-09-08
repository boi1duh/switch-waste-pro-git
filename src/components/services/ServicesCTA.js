import React from "react";
import { Link } from "react-router-dom";

const ServicesCTA = React.memo(() => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch to Professional Waste Management?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get a free consultation and customized quote for your waste management needs. Our expert team is ready to help you achieve complete compliance and environmental responsibility.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Get Free Quote
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
});

ServicesCTA.displayName = "ServicesCTA";

export default ServicesCTA;