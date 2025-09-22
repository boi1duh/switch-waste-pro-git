import React from "react";
import { FaPills, FaLock, FaBiohazard, FaTruck } from 'react-icons/fa';
import Hero from "../components/ui/Hero";
import Carousel from "../components/ui/Carousel";
import ContentSection from "../components/ui/ContentSection";

const PharmaceuticalWaste = () => {
  // Carousel slides for Pharmaceutical Waste page
  const pharmaSlides = [
    {
      title: "Controlled Substances Management",
      subtitle: "DEA Compliant Disposal",
      description: "Secure handling and destruction of Schedule II-V controlled substances with complete chain of custody.",
      ctaText: "Get Quote",
      ctaLink: "/contact"
    },
    {
      title: "Expired Medications Disposal",
      subtitle: "Safe Pharmaceutical Waste",
      description: "Proper disposal of expired or unused prescription and over-the-counter medications.",
      ctaText: "Learn More",
      ctaLink: "/services"
    },
    {
      title: "Chemotherapy Drug Handling",
      subtitle: "Specialized Treatment",
      description: "Expert handling and disposal of chemotherapy drugs and hazardous pharmaceuticals.",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  return (
    <>
      <Hero
        subtitle="Pharmaceutical Waste"
        title="Safe Pharmaceutical Disposal"
        description="Secure disposal of expired medications, unused pharmaceuticals, and controlled substances. We ensure proper handling and destruction with complete audit trails and regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/Index.Hero.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="large"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Pharmaceutical Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaPills className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Expired Medications</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaLock className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Controlled Substances</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaBiohazard className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Chemotherapy Drugs</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-green-300">
              <FaTruck className="h-6 w-6" />
              <span className="text-white text-lg font-medium drop-shadow-md">Veterinary Pharmaceuticals</span>
            </div>
          </div>
        </div>
      </Hero>

      <Carousel slides={pharmaSlides} />

      <ContentSection
        title="Pharmaceutical Waste Disposal Solutions"
        hasOverlay
        items={[
          {
            title: 'Controlled Substances',
            description: 'Secure handling and disposal of DEA Schedule II-V controlled substances.',
            points: ['DEA-compliant destruction', 'Chain of custody documentation', 'Witnessed destruction process', 'Regulatory reporting'],
          },
          {
            title: 'Expired Medications',
            description: 'Safe disposal of expired or unused prescription and over-the-counter medications.',
            points: ['Environmental protection', 'Prevents misuse', 'Community safety', 'Proper incineration'],
          },
        ]}
        cta={{
          text: 'Request Pharmaceutical Waste Service',
          link: '/contact',
        }}
      />
    </>
  );
};

export default PharmaceuticalWaste;