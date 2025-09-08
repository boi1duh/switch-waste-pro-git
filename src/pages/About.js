import React from "react";
import HeroSection from "../components/about/HeroSection";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/about/ValuesSection";
import ExperienceSection from "../components/about/ExperienceSection";
import ServiceAreasSection from "../components/about/ServiceAreasSection";
import FAQSection from "../components/about/FAQSection";
import CTASection from "../components/about/CTASection";

const About = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <ExperienceSection />
      <ServiceAreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default React.memo(About);