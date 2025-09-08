import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver, useSwipe, useAnimatedCounter } from "../hooks";
import SEO from "../components/SEO";

const Home = ({ services, industries }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intersection Observer hooks for scroll-triggered animations
  const { ref: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const { ref: industriesRef, isIntersecting: industriesVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Animated counters for stats section
  const yearsCounter = useAnimatedCounter(20, 2000, false);
  const complianceCounter = useAnimatedCounter(100, 2000, false);
  const supportCounter = useAnimatedCounter(24, 2000, false);
  const clientsCounter = useAnimatedCounter(500, 2000, false);

  // Start counters when stats section comes into view
  useEffect(() => {
    if (statsVisible) {
      yearsCounter.startAnimation();
      setTimeout(() => complianceCounter.startAnimation(), 200);
      setTimeout(() => supportCounter.startAnimation(), 400);
      setTimeout(() => clientsCounter.startAnimation(), 600);
    }
  }, [statsVisible, yearsCounter, complianceCounter, supportCounter, clientsCounter]);

  const slides = useMemo(() => [
    {
      title: "We Solve Compliance Problems With Sustainable Solutions",
      subtitle: "Professional waste management services for Johannesburg and surrounding areas",
      description: "At Switch Waste, we are dedicated to providing exceptional waste management services. Our mission is to ensure a safe environment free from hazardous waste while maintaining compliance with all regulations to protect our planet.",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    },
    {
      title: "Healthcare Risk Waste Management",
      subtitle: "Specialized solutions for medical facilities",
      description: "Complete regulated medical waste solutions including sharps, pathological specimens, pharmaceutical waste, and contaminated materials. SANS compliant with complete documentation.",
      ctaText: "Our Services",
      ctaLink: "/services"
    },
    {
      title: "Environmental Responsibility First",
      subtitle: "Sustainable waste management practices",
      description: "We prioritize eco-friendly solutions in all our operations, continuously seeking opportunities to reduce environmental impact through sustainable practices and innovative technologies.",
      ctaText: "Learn More",
      ctaLink: "/about"
    },
    {
      title: "Why Choose Switch Waste?",
      subtitle: "Your trusted waste management partner",
      description: "With over 10 years of experience, we provide comprehensive waste management solutions with regulatory compliance, environmental responsibility, and exceptional customer service.",
      ctaText: "Get Started",
      ctaLink: "/contact",
      features: [
        "✓ Environmental Responsibility",
        "✓ Regulatory Compliance",
        "✓ Safety First Approach",
        "✓ Local Johannesburg Service"
      ]
    }
  ], []);

  // Auto-play carousel - increased timing for better user experience
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Increased from 5000ms to 8000ms for slower, more readable transitions

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Swipe gesture handlers for mobile carousel
  const swipeHandlers = useSwipe(nextSlide, prevSlide, {
    minSwipeDistance: 50,
    maxVerticalDistance: 100,
    preventDefault: true
  });

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only handle keyboard navigation when carousel is in view/focus
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextSlide, prevSlide]);
  // Structured data for the organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Switch Waste Management Solutions",
    "url": "https://www.switchwaste.co.za",
    "logo": "https://www.switchwaste.co.za/assets/logo/switch_Pro_logo.png",
    "description": "Professional waste management services for healthcare and general waste in Johannesburg. SANS compliant, environmentally responsible waste disposal solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 16th Avenue",
      "addressLocality": "Edenvale",
      "addressRegion": "Johannesburg",
      "postalCode": "1609",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-10-006-9158",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/switchwaste",
      "https://www.linkedin.com/company/switch-waste"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
      },
      "geoRadius": 50000
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waste Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Risk Waste Management",
            "description": "Complete regulated medical waste solutions for healthcare facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pharmaceutical Waste Disposal",
            "description": "Safe disposal of expired, unused, and contaminated medications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Waste & Recycling",
            "description": "Comprehensive recycling solutions for paper, glass, plastic & cans"
          }
        }
      ]
    }
  };

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

      {/* Hero Section - Dynamic Carousel */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/index.herobanner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Enhanced Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Improved Watermark */}
        <div className="absolute bottom-6 right-6 w-36 h-18 bg-black/70 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl">
          <span className="text-white text-sm font-bold tracking-wide">SWITCH WASTE</span>
        </div>

        {/* Improved Carousel Container with better positioning */}
        <div
          className="container mx-auto px-6 py-20 md:py-32 relative z-10 w-full max-w-7xl"
          {...swipeHandlers}
          role="region"
          aria-label="Hero carousel - Use arrow keys to navigate"
          aria-live="polite"
          tabIndex="0"
        >
          {/* Enhanced Keyboard navigation hint */}
          <div className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:bg-black/80 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:text-sm focus:z-20 focus:shadow-lg">
            Use ← → arrow keys to navigate slides
          </div>

          {/* Improved Carousel Slides with better positioning */}
          <div className="relative min-h-[80vh] flex items-center" role="tabpanel" aria-labelledby={`slide-${currentSlide}`}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1500 ease-in-out absolute inset-0 flex items-center ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-16 items-center min-h-[75vh] w-full">
                   <div className="bg-black/40 backdrop-blur-lg p-10 md:p-14 rounded-3xl border border-white/40 shadow-2xl max-w-2xl">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white drop-shadow-2xl font-serif tracking-wide">
                       {slide.subtitle}
                     </h2>
                     <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-10 text-white drop-shadow-2xl font-serif tracking-wide">
                       {slide.title}
                     </h1>
                     <p className="text-xl md:text-2xl text-gray-50 mb-12 drop-shadow-xl leading-relaxed max-w-3xl opacity-95 font-medium">
                       {slide.description}
                     </p>
                    <div className="flex flex-col sm:flex-row gap-8">
                      <Link
                        to={slide.ctaLink}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-xl relative overflow-hidden group"
                        onMouseDown={(e) => {
                          e.currentTarget.style.transform = 'scale(0.95) translateY(4px)';
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        }}
                      >
                        <span className="relative z-10 drop-shadow-lg">{slide.ctaText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Link>
                      <Link
                        to="/services"
                        className="border-3 border-white/80 text-white px-12 py-6 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-500 shadow-2xl hover:shadow-white/25 hover:-translate-y-2 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-xl relative overflow-hidden group backdrop-blur-sm"
                        onMouseDown={(e) => {
                          e.currentTarget.style.transform = 'scale(0.95) translateY(4px)';
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        }}
                      >
                        <span className="relative z-10 drop-shadow-lg">View All Services</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {slide.features ? (
                      <div className="bg-black/30 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-xl border border-white/30">
                        <h3 className="font-bold text-white mb-8 text-3xl drop-shadow-2xl font-serif">{slide.title}</h3>
                        <div className="grid grid-cols-1 gap-6">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-6 bg-white/10 rounded-xl p-5 backdrop-blur-md border border-white/20">
                              <span className="text-green-300 text-3xl font-bold drop-shadow-lg">✓</span>
                              <span className="text-white text-xl font-semibold drop-shadow-lg">{feature.substring(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-black/30 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-xl border border-white/30">
                        <h3 className="font-bold text-white mb-8 text-3xl drop-shadow-2xl font-serif">Our Expertise</h3>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="flex items-center gap-6 bg-white/10 rounded-xl p-5 backdrop-blur-md border border-white/20">
                            <span className="text-blue-300 text-3xl font-bold drop-shadow-lg">H</span>
                            <span className="text-white text-xl font-semibold drop-shadow-lg">Healthcare Waste</span>
                          </div>
                          <div className="flex items-center gap-6 bg-white/10 rounded-xl p-5 backdrop-blur-md border border-white/20">
                            <span className="text-blue-300 text-3xl font-bold drop-shadow-lg">P</span>
                            <span className="text-white text-xl font-semibold drop-shadow-lg">Pharmaceutical Waste</span>
                          </div>
                          <div className="flex items-center gap-6 bg-white/10 rounded-xl p-5 backdrop-blur-md border border-white/20">
                            <span className="text-blue-300 text-3xl font-bold drop-shadow-lg">R</span>
                            <span className="text-white text-xl font-semibold drop-shadow-lg">Recycling Programs</span>
                          </div>
                          <div className="flex items-center gap-6 bg-white/10 rounded-xl p-5 backdrop-blur-md border border-white/20">
                            <span className="text-blue-300 text-3xl font-bold drop-shadow-lg">C</span>
                            <span className="text-white text-xl font-semibold drop-shadow-lg">Compliance Training</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Carousel Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-20 backdrop-blur-sm border border-white/20"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-20 backdrop-blur-sm border border-white/20"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end waste management solutions tailored to your specific needs, ensuring compliance and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer group ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 font-bold text-blue-600">
                   {service.icon === "🏥" ? "H" : service.icon === "💊" ? "P" : service.icon === "♻️" ? "R" : service.icon}
                 </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-4xl font-bold mb-2">{yearsCounter.count}+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl font-bold mb-2">{complianceCounter.count}%</div>
              <p className="text-blue-100">Compliance Rate</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl font-bold mb-2">{supportCounter.count}/7</div>
              <p className="text-blue-100">Hour Support</p>
            </div>
            <div className={`transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-4xl font-bold mb-2">{clientsCounter.count}+</div>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section ref={industriesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored waste management solutions for diverse sectors across Johannesburg and Gauteng Province.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-1000 ${
                  industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Certified & Compliant</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry certifications and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/ISO_trust.png"
                alt="ISO Certification"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">ISO Certified</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/iso_14001_trust.png"
                alt="ISO 14001 Environmental Management"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">ISO 14001</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/hpcsa_logo_trust.png"
                alt="HPCSA Certified"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">HPCSA Certified</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/dea_logo_trust.png"
                alt="Department of Environmental Affairs"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">DEA Approved</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/beee.logo.trust.png"
                alt="BEE Certified"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">BEE Certified</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <img
                src="/assets/trust-badges/trust1.png"
                alt="Professional Certification"
                className="w-16 h-16 mx-auto mb-3 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700">Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Switch to Better Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to learn how we can help your business maintain compliance while protecting the environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 relative overflow-hidden group"
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98) translateY(2px)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 active:translate-y-0 relative overflow-hidden group"
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98) translateY(2px)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            >
              <span className="relative z-10">Speak to an Expert</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;