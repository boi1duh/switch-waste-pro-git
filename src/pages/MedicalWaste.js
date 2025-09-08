import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Constants for better maintainability
const HERO_BACKGROUND_IMAGE = '/assets/backgrounds/Index.Hero.jpg';
const FALLBACK_BACKGROUND_IMAGE = '/assets/backgrounds/fallback.jpg'; // Add a fallback image

const MEDICAL_SERVICES = [
  { emoji: '🏥', title: 'Sharps Management' },
  { emoji: '🩸', title: 'Pathological Waste' },
  { emoji: '💊', title: 'Pharmaceutical Disposal' },
  { emoji: '🧴', title: 'Contaminated PPE' },
];

const SHARPS_FEATURES = [
  'FDA-approved containers',
  'Various sizes available',
  'Secure locking mechanisms',
  'Regular collection service',
];

const PATHOLOGICAL_FEATURES = [
  'Dignified treatment',
  'Incineration services',
  'Complete documentation',
  'Regulatory compliance',
];

/**
 * MedicalWaste component for displaying medical waste management services
 * @returns {JSX.Element} The MedicalWaste page component
 */
const MedicalWaste = () => {
  const [backgroundImage, setBackgroundImage] = useState(HERO_BACKGROUND_IMAGE);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_BACKGROUND_IMAGE;
    img.onerror = () => setBackgroundImage(FALLBACK_BACKGROUND_IMAGE);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-label="Medical waste management hero section"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Regulated Medical Waste
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Healthcare Risk Waste Management
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Complete regulated medical waste solutions for healthcare facilities including sharps, pathological specimens, pharmaceutical waste, and contaminated materials. SANS compliant with complete documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                  aria-label="Get a quote for medical waste services"
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Medical Waste Services</h3>
                <div className="grid grid-cols-1 gap-4" role="list">
                  {MEDICAL_SERVICES.map((service, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm" role="listitem">
                      <span className="text-green-400 text-2xl" aria-hidden="true">{service.emoji}</span>
                      <span className="text-white text-lg font-medium drop-shadow-md">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white" aria-labelledby="solutions-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="solutions-heading" className="text-3xl font-bold text-gray-800 mb-8 text-center">Medical Waste Management Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <article className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sharps Containers</h3>
                <p className="text-gray-600 mb-4">Safe collection and disposal of needles, syringes, and other sharp medical instruments.</p>
                <ul className="text-gray-600 space-y-2" role="list">
                  {SHARPS_FEATURES.map((feature, index) => (
                    <li key={index} role="listitem">• {feature}</li>
                  ))}
                </ul>
              </article>
              <article className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pathological Waste</h3>
                <p className="text-gray-600 mb-4">Proper handling of human tissues, organs, and laboratory specimens.</p>
                <ul className="text-gray-600 space-y-2" role="list">
                  {PATHOLOGICAL_FEATURES.map((feature, index) => (
                    <li key={index} role="listitem">• {feature}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="text-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block" aria-label="Request medical waste service">
                Request Medical Waste Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(MedicalWaste);