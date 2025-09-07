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

  // Swipe gesture handlers for mobile carousel
  const swipeHandlers = useSwipe(nextSlide, prevSlide, {
    minSwipeDistance: 50,
    maxVerticalDistance: 100,
    preventDefault: true
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
      description: "With over 20 years of experience, we provide comprehensive waste management solutions with regulatory compliance, environmental responsibility, and exceptional customer service.",
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

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
          backgroundImage: `url('/assets/backgrounds/Index.Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Adobe Watermark Cover */}
        <div className="absolute bottom-4 right-4 w-32 h-16 bg-black bg-opacity-60 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
          <span className="text-white text-xs font-medium opacity-80">SWITCH WASTE</span>
        </div>

        {/* Carousel Container */}
        <div
          className="container mx-auto px-4 py-16 md:py-24 relative z-10 w-full"
          {...swipeHandlers}
          role="region"
          aria-label="Hero carousel - Use arrow keys to navigate"
          aria-live="polite"
          tabIndex="0"
        >
          {/* Keyboard navigation hint */}
          <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black focus:bg-opacity-75 focus:text-white focus:px-3 focus:py-2 focus:rounded focus:text-sm focus:z-20">
            Use ← → arrow keys to navigate slides
          </div>

          {/* Carousel Slides */}
          <div className="relative" role="tabpanel" aria-labelledby={`slide-${currentSlide}`}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                } absolute inset-0`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
                  <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <Link
                        to={slide.ctaLink}
                        className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group"
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
                        <span className="relative z-10">{slide.ctaText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                      <Link
                        to="/services"
                        className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center text-lg relative overflow-hidden group"
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
                        <span className="relative z-10">View All Services</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {slide.features ? (
                      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                        <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">{slide.title}</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                              <span className="text-green-400 text-2xl font-bold">✓</span>
                              <span className="text-white text-lg font-medium drop-shadow-md">{feature.substring(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                        <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Expertise</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="text-blue-400 text-2xl">🏥</span>
                            <span className="text-white text-lg font-medium drop-shadow-md">Healthcare Waste</span>
                          </div>
                          <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="text-blue-400 text-2xl">💊</span>
                            <span className="text-white text-lg font-medium drop-shadow-md">Pharmaceutical Waste</span>
                          </div>
                          <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="text-blue-400 text-2xl">♻️</span>
                            <span className="text-white text-lg font-medium drop-shadow-md">Recycling Programs</span>
                          </div>
                          <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="text-blue-400 text-2xl">📋</span>
                            <span className="text-white text-lg font-medium drop-shadow-md">Compliance Training</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
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