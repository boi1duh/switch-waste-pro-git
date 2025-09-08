import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = React.memo(() => {
  const [bgImageError, setBgImageError] = useState(false);

  const handleBgImageError = () => {
    setBgImageError(true);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: bgImageError
          ? "linear-gradient(to right, #1e3a8a, #3b82f6)"
          : `url('/assets/backgrounds/back3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Fallback image for error handling */}
      {!bgImageError && (
        <img
          src="/assets/backgrounds/back3.jpg"
          alt=""
          onError={handleBgImageError}
          style={{ display: 'none' }}
        />
      )}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Incineration & Treatment
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              Advanced Waste Processing
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
              State-of-the-art incineration facilities and treatment technologies for medical, hazardous, and industrial waste. EPA and NEMWA compliant processing with advanced emission control systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
              >
                Get Quote
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
              <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Treatment Technologies</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <span className="text-orange-400 text-2xl" aria-label="Fire emoji">🔥</span>
                  <span className="text-white text-lg font-medium drop-shadow-md">High-Temperature Incineration</span>
                </div>
                <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <span className="text-orange-400 text-2xl" aria-label="Test tube emoji">🧪</span>
                  <span className="text-white text-lg font-medium drop-shadow-md">Chemical Treatment</span>
                </div>
                <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <span className="text-orange-400 text-2xl" aria-label="Recycling emoji">♻️</span>
                  <span className="text-white text-lg font-medium drop-shadow-md">Thermal Desorption</span>
                </div>
                <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <span className="text-orange-400 text-2xl" aria-label="Lightning emoji">⚡</span>
                  <span className="text-white text-lg font-medium drop-shadow-md">Plasma Arc Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;