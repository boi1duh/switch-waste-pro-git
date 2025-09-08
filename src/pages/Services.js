import React from "react";
import SEO from "../components/SEO";
import { servicesData } from "../constants/ServicesData";
import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <>
      <SEO
        title="Professional Waste Management Services | Healthcare & General Waste | Johannesburg"
        description="Comprehensive waste management services including healthcare risk waste, pharmaceutical disposal, hazardous waste, and general recycling. SANS compliant with environmental responsibility."
        keywords="waste management services, healthcare waste, pharmaceutical waste, hazardous waste, recycling, Johannesburg, SANS compliant"
        canonical="/services"
        ogImage="/assets/logo/switch_Pro_logo.png"
      />

      <ServicesHero />
      <ServicesGrid services={servicesData} />
      <ServicesCTA />
    </>
  );
};

export default Services;