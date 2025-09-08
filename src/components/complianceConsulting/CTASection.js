import React from "react";
import { Link } from "react-router-dom";
import { CTA_DATA } from "../../constants/ComplianceConsultingData";

const CTASection = React.memo(() => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
          {CTA_DATA.title}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {CTA_DATA.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to={CTA_DATA.primaryButton.link}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            aria-label={CTA_DATA.primaryButton.text}
          >
            {CTA_DATA.primaryButton.text}
          </Link>
          <Link
            to={CTA_DATA.secondaryButton.link}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            aria-label={CTA_DATA.secondaryButton.text}
          >
            {CTA_DATA.secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;