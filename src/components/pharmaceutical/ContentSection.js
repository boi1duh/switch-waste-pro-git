import React from "react";
import { Link } from "react-router-dom";
import { STYLES } from "../../constants/PharmaceuticalConstants";

const servicesData = [
  {
    title: "Controlled Substances",
    description: "Secure handling and disposal of DEA Schedule II-V controlled substances.",
    features: [
      "DEA-compliant destruction",
      "Chain of custody documentation",
      "Witnessed destruction process",
      "Regulatory reporting",
    ],
  },
  {
    title: "Expired Medications",
    description: "Safe disposal of expired or unused prescription and over-the-counter medications.",
    features: [
      "Environmental protection",
      "Prevents misuse",
      "Community safety",
      "Proper incineration",
    ],
  },
];

const ContentSection = () => {
  return (
    <section className={STYLES.contentSection} aria-labelledby="content-heading">
      <div className="container mx-auto px-4">
        <div className={STYLES.contentContainer}>
          <h2
            id="content-heading"
            className={STYLES.contentHeading}
          >
            Pharmaceutical Waste Disposal Solutions
          </h2>
          <div className={STYLES.contentGrid}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={STYLES.contentCard}
                role="article"
                aria-labelledby={`service-${index}-title`}
              >
                <h3
                  id={`service-${index}-title`}
                  className={STYLES.contentCardHeading}
                >
                  {service.title}
                </h3>
                <p className={STYLES.contentCardParagraph}>{service.description}</p>
                <ul className={STYLES.contentList} role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={STYLES.contentListItem} role="listitem">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={STYLES.centerText}>
            <Link
              to="/contact"
              className={STYLES.ctaButton}
              aria-label="Request pharmaceutical waste service"
            >
              Request Pharmaceutical Waste Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;