import React, { memo } from "react";
import HeroSection from "../components/healthcare/HeroSection";
import RegulatoryOverviewSection from "../components/healthcare/RegulatoryOverviewSection";
import ServicesSection from "../components/healthcare/ServicesSection";
import BenefitsSection from "../components/healthcare/BenefitsSection";
import CTASection from "../components/healthcare/CTASection";

/**
 * HealthcareFacilities Page Component
 *
 * Displays comprehensive information about healthcare waste management services,
 * including regulatory compliance, specialized services, and benefits.
 *
 * This component is memoized for performance optimization to prevent unnecessary re-renders.
 */
const HealthcareFacilities = memo(() => {
  return (
    <>
      <HeroSection />
      <RegulatoryOverviewSection />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
});

HealthcareFacilities.displayName = "HealthcareFacilities";

export default HealthcareFacilities;