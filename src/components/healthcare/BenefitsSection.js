import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Healthcare Industry Benefits</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Partnering with Switch Waste ensures your healthcare facility maintains the highest standards of infection control and regulatory compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Shield">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Infection Control</h3>
            <p className="text-green-100">Minimize infection risks through proper waste segregation and disposal</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Clipboard">📋</div>
            <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
            <p className="text-green-100">Full compliance with HPCSA and Department of Health requirements</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Money">💰</div>
            <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
            <p className="text-green-100">Optimized waste management reduces operational costs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;