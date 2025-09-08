import React from "react";
import HeroSection from "../components/pharmaceutical/HeroSection";
import ContentSection from "../components/pharmaceutical/ContentSection";

const PharmaceuticalWaste = React.memo(() => {
  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
});

export default PharmaceuticalWaste;