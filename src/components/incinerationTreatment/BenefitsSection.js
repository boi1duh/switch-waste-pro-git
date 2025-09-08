import React from "react";

const benefits = [
  {
    icon: "🔥",
    iconLabel: "Fire emoji",
    title: "Complete Destruction",
    description: "Pathogens, chemicals, and hazardous materials are completely destroyed through high-temperature processing"
  },
  {
    icon: "🌍",
    iconLabel: "Earth emoji",
    title: "Environmental Protection",
    description: "Advanced emission control systems ensure compliance with strict environmental regulations"
  },
  {
    icon: "📊",
    iconLabel: "Chart emoji",
    title: "Volume Reduction",
    description: "Significant reduction in waste volume through incineration and treatment processes"
  }
];

const BenefitsSection = React.memo(() => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Treatment Benefits</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Our state-of-the-art treatment technologies ensure maximum safety, compliance, and environmental protection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4" aria-label={benefit.iconLabel}>{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-orange-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

BenefitsSection.displayName = 'BenefitsSection';

export default BenefitsSection;