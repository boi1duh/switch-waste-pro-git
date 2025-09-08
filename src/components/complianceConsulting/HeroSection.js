import React from "react";
import { Link } from "react-router-dom";
import { HERO_DATA, BACKGROUND_IMAGE } from "../../constants/ComplianceConsultingData";

const HeroSection = React.memo(() => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGE}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="Hero section for Compliance Consulting"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              {HERO_DATA.title}
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              {HERO_DATA.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              {HERO_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to={HERO_DATA.primaryButton.link}
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                aria-label={HERO_DATA.primaryButton.text}
              >
                {HERO_DATA.primaryButton.text}
              </Link>
              <Link
                to={HERO_DATA.secondaryButton.link}
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                aria-label={HERO_DATA.secondaryButton.text}
              >
                {HERO_DATA.secondaryButton.text}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Compliance Services</h3>
              <div className="grid grid-cols-1 gap-4">
                {HERO_DATA.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl" role="img" aria-label={service.text}>{service.icon}</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;