import React from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../hooks";

const MedicalWaste = () => {
  // Carousel slides for Medical Waste page
  const medicalSlides = [
    {
      title: "Sharps Management Excellence",
      subtitle: "Safe Needle Disposal",
      description: "FDA-approved containers and secure handling for all sharp medical instruments and needles.",
      ctaText: "Get Quote",
      ctaLink: "/contact"
    },
    {
      title: "Pathological Waste Solutions",
      subtitle: "Dignified Treatment",
      description: "Proper handling and incineration of human tissues, organs, and laboratory specimens.",
      ctaText: "Learn More",
      ctaLink: "/services"
    },
    {
      title: "Complete Compliance",
      subtitle: "SANS Certified",
      description: "All medical waste management meets the highest South African National Standards.",
      ctaText: "View Services",
      ctaLink: "/services"
    }
  ];

  // Initialize carousel
  const { currentSlide, goToSlide, nextSlide, prevSlide, isPaused } = useCarousel(medicalSlides);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/Index.Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Medical Waste Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-white text-lg font-medium drop-shadow-md">Sharps Management</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-white text-lg font-medium drop-shadow-md">Pathological Waste</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="text-white text-lg font-medium drop-shadow-md">Pharmaceutical Disposal</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                    <span className="text-white text-lg font-medium drop-shadow-md">Contaminated PPE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Waste Carousel */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Carousel Content */}
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-white/30">
                  {medicalSlides[currentSlide]?.subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                {medicalSlides[currentSlide]?.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
                {medicalSlides[currentSlide]?.description}
              </p>
              <div className="flex justify-center gap-6">
                <Link
                  to={medicalSlides[currentSlide]?.ctaLink}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  {medicalSlides[currentSlide]?.ctaText}
                </Link>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {medicalSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Medical Waste Management Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Sharps Containers</h3>
                <p className="text-gray-600 mb-4">Safe collection and disposal of needles, syringes, and other sharp medical instruments.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• FDA-approved containers</li>
                  <li>• Various sizes available</li>
                  <li>• Secure locking mechanisms</li>
                  <li>• Regular collection service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Pathological Waste</h3>
                <p className="text-gray-600 mb-4">Proper handling of human tissues, organs, and laboratory specimens.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Dignified treatment</li>
                  <li>• Incineration services</li>
                  <li>• Complete documentation</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                Request Medical Waste Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalWaste;