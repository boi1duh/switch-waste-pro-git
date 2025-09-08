import React from "react";
import HeroSection from "../components/pathologicalWaste/HeroSection";
import RegulatoryOverview from "../components/pathologicalWaste/RegulatoryOverview";
import ServicesSection from "../components/pathologicalWaste/ServicesSection";
import DignityRespectSection from "../components/pathologicalWaste/DignityRespectSection";
import CTASection from "../components/pathologicalWaste/CTASection";

const PathologicalWaste = () => {
  return (
    <main>
      <HeroSection />
      <RegulatoryOverview />
      <ServicesSection />
      <DignityRespectSection />
      <CTASection />
    </main>
  );
};

export default PathologicalWaste;