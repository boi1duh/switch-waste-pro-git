import React from "react";
import { STYLES } from "../../constants/PharmaceuticalConstants";

const services = [
  { icon: "💊", label: "Expired Medications" },
  { icon: "🩺", label: "Controlled Substances" },
  { icon: "🏥", label: "Chemotherapy Drugs" },
  { icon: "🔬", label: "Veterinary Pharmaceuticals" },
];

const ServicesList = () => {
  return (
    <div className={STYLES.servicesCard}>
      <h3 className={STYLES.servicesHeading}>Pharmaceutical Services</h3>
      <div className={STYLES.servicesGrid}>
        {services.map((service, index) => (
          <div
            key={index}
            className={STYLES.serviceItem}
            role="listitem"
          >
            <span className={STYLES.icon} aria-hidden="true">{service.icon}</span>
            <span className={STYLES.serviceLabel}>{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;