import React from "react";
import ClientsHero from "../components/clients/ClientsHero";
import ClientsGrid from "../components/clients/ClientsGrid";
import WhyPartnerSection from "../components/clients/WhyPartnerSection";
import TestimonialsSection from "../components/clients/TestimonialsSection";
import CTASection from "../components/clients/CTASection";

/**
 * Clients Page Component
 *
 * Displays information about Switch Waste's valued clients and partnerships.
 * Features hero section, client grid, partnership benefits, testimonials, and CTA.
 */
const Clients = () => {
  return (
    <>
      <ClientsHero />
      <ClientsGrid />
      <WhyPartnerSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Clients;