import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServicesList from "./ServicesList";
import { STYLES, BACKGROUND_IMAGE_URL, FALLBACK_BACKGROUND } from "../../constants/PharmaceuticalConstants";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const backgroundImage = imageError ? FALLBACK_BACKGROUND : `url('${BACKGROUND_IMAGE_URL}')`;

  return (
    <section
      className={STYLES.heroSection}
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Overlay for better text readability */}
      <div className={STYLES.overlay} aria-hidden="true"></div>

      <div className={STYLES.container}>
        <div className={STYLES.grid}>
          <div className={STYLES.card}>
            <h2
              id="hero-heading"
              className={STYLES.heading}
            >
              Pharmaceutical Waste
            </h2>
            <h1 className={STYLES.subheading}>
              Safe Pharmaceutical Disposal
            </h1>
            <p className={STYLES.paragraph}>
              Secure disposal of expired medications, unused pharmaceuticals, and controlled substances. We ensure proper handling and destruction with complete audit trails and regulatory compliance.
            </p>
            <div className={STYLES.buttonContainer}>
              <Link
                to="/contact"
                className={STYLES.primaryButton}
                aria-label="Get a quote for pharmaceutical waste disposal"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className={STYLES.secondaryButton}
                aria-label="View all services"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ServicesList />
          </div>
        </div>
      </div>
      {/* Hidden image for error handling */}
      {!imageError && (
        <img
          src={BACKGROUND_IMAGE_URL}
          alt=""
          onError={handleImageError}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default HeroSection;