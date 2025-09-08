import React from "react";
import HeroSection from "../components/complianceConsulting/HeroSection";
import RegulatoryFramework from "../components/complianceConsulting/RegulatoryFramework";
import ServicesSection from "../components/complianceConsulting/ServicesSection";
import TrainingPrograms from "../components/complianceConsulting/TrainingPrograms";
import CTASection from "../components/complianceConsulting/CTASection";

const ComplianceConsulting = React.memo(() => {
  return (
    <>
      <HeroSection />
      <RegulatoryFramework />
      <ServicesSection />
      <TrainingPrograms />
      <CTASection />
    </>
  );
});

ComplianceConsulting.displayName = "ComplianceConsulting";

export default ComplianceConsulting;