import React, { useState } from "react";
import {
  HeroSection,
  SolutionsOverview,
  ServicesSection,
  BenefitsSection,
  CTASection
} from "../components/commercialBusinesses";

const CommercialBusinesses = React.memo(() => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <HeroSection onImageError={handleImageError} imageError={imageError} />
      <SolutionsOverview />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
});

CommercialBusinesses.displayName = 'CommercialBusinesses';

export default CommercialBusinesses;