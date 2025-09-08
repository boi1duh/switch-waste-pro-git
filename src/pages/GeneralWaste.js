import React, { Suspense } from "react";
import HeroSection from "../components/generalWaste/HeroSection";
import OverviewSection from "../components/generalWaste/OverviewSection";
import ServicesSection from "../components/generalWaste/ServicesSection";
import BenefitsSection from "../components/generalWaste/BenefitsSection";
import CTASection from "../components/generalWaste/CTASection";

// Loading component for Suspense
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const GeneralWaste = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <>
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <BenefitsSection />
        <CTASection />
      </>
    </Suspense>
  );
};

export default GeneralWaste;