import React from "react";

const services = [
  {
    icon: "🏥",
    iconLabel: "Hospital emoji",
    title: "Medical Waste Incineration",
    description: "High-temperature incineration of medical waste including sharps, pathological materials, and contaminated PPE.",
    features: [
      "1200°C minimum temperature",
      "Complete pathogen destruction",
      "Ash volume reduction by 95%",
      "EPA-compliant emissions"
    ]
  },
  {
    icon: "⚠️",
    iconLabel: "Warning emoji",
    title: "Hazardous Waste Treatment",
    description: "Advanced treatment of hazardous chemicals, solvents, and industrial waste using thermal and chemical processes.",
    features: [
      "Chemical neutralization",
      "Thermal oxidation",
      "Solvent recovery systems",
      "Heavy metal stabilization"
    ]
  },
  {
    icon: "🔬",
    iconLabel: "Microscope emoji",
    title: "Laboratory Waste Processing",
    description: "Specialized treatment of laboratory chemicals, biohazardous materials, and research waste.",
    features: [
      "Acid/base neutralization",
      "Organic waste oxidation",
      "Radioactive waste handling",
      "Mixed waste segregation"
    ]
  }
];

const ServicesSection = React.memo(() => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Incineration & Treatment Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive waste treatment solutions using advanced technologies for safe and environmentally responsible processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4" aria-label={service.iconLabel}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;