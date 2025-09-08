import React from "react";
import { Link } from "react-router-dom";
import { HERO_BACKGROUND_IMAGE, PATHOLOGICAL_MATERIALS } from "../../constants/PathologicalWasteData";

const HeroSection = () => {
  const handleImageError = (e) => {
    e.target.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onError={handleImageError}
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2
              id="hero-title"
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg"
            >
              Pathological Waste Management
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              Dignified & Safe Processing
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              Specialized handling of human tissues, organs, body parts, and other pathological specimens. We ensure respectful treatment and complete destruction while maintaining strict regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                aria-label="Get a quote for pathological waste management"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                aria-label="View all services"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Pathological Materials</h3>
              <div className="grid grid-cols-1 gap-4">
                {PATHOLOGICAL_MATERIALS.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-purple-400 text-2xl" aria-hidden="true">{item.emoji}</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);