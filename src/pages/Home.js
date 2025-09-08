import React from "react";
import SEO from "../components/SEO";
import HeroCarousel from "../components/home/HeroCarousel";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection";
import IndustriesSection from "../components/home/IndustriesSection";
import TrustBadgesSection from "../components/home/TrustBadgesSection";
import CTASection from "../components/home/CTASection";
import { structuredData } from "../constants/HomeData";

const Home = ({ services, industries }) => {

  return (
    <>
      <SEO
        title="Professional Waste Management Services | Healthcare & General Waste | Johannesburg"
        description="Switch Waste Management Solutions provides professional healthcare risk waste, pharmaceutical disposal, and general waste management services in Johannesburg. SANS compliant, environmentally responsible waste disposal."
        keywords="waste management Johannesburg, healthcare waste disposal, medical waste services, pharmaceutical waste, environmental services, SANS compliant, Gauteng waste management"
        canonical="/"
        ogImage="/assets/logo/switch_Pro_logo.png"
        structuredData={structuredData}
      />

      <HeroCarousel />
      <ServicesSection services={services} />
      <StatsSection />
      <IndustriesSection industries={industries} />
      <TrustBadgesSection />
      <CTASection />
    </>
  );
};

export default Home;