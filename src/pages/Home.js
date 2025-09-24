import { useEffect, lazy, Suspense, useMemo } from "react";
import { useIntersectionObserver, useAnimatedCounter } from "../hooks";
import { FaClinicMedical, FaPills, FaRecycle } from 'react-icons/fa';
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";
import { SERVICES_DATA, INDUSTRIES_DATA } from "../constants/appData";
import { HERO_SLIDES, HOME_PAGE_STRUCTURED_DATA } from "../constants/HomeData";

// Lazy load components for better performance
const HeroCarousel = lazy(() => import("../components/home/HeroCarousel"));
const ServicesGrid = lazy(() => import("../components/home/ServicesGrid"));
const StatsCounter = lazy(() => import("../components/home/StatsCounter"));
const TrustBadges = lazy(() => import("../components/home/TrustBadges"));
const TestimonialsSection = lazy(() => import("../components/home/TestimonialsSection"));
const CTASection = lazy(() => import("../components/home/CTASection"));

// This object is static and does not need to be recreated on every render.
// Moving it outside the component improves performance.
const professionalIcons = {
  "Healthcare Risk Waste": <FaClinicMedical className="w-12 h-12 text-primary-600" />,
  "Pharmaceutical Waste": <FaPills className="w-12 h-12 text-primary-600" />,
  "General Waste & Recycling": <FaRecycle className="w-12 h-12 text-primary-600" />,
};

const Home = () => {
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
  const yearsCounter = useAnimatedCounter(10, 2000, false);
  const complianceCounter = useAnimatedCounter(100, 2000, false);
  const supportCounter = useAnimatedCounter(24, 2000, false);
  const clientsCounter = useAnimatedCounter(50, 2000, false);

  // Start counters when stats section comes into view
  useEffect(() => {
    if (statsVisible) {
      yearsCounter.startAnimation();
      setTimeout(() => complianceCounter.startAnimation(), 200);
      setTimeout(() => supportCounter.startAnimation(), 400);
      setTimeout(() => clientsCounter.startAnimation(), 600);
    }
  }, [statsVisible, yearsCounter, complianceCounter, supportCounter, clientsCounter]);

  const updatedServices = useMemo(() => SERVICES_DATA.map(service => ({
    ...service,
    Icon: professionalIcons[service.title] ? () => professionalIcons[service.title] : service.Icon
  })), []);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg transition-all"
      >
        Skip to main content
      </a>

      <SEO
        title="Professional Waste Management Services | Healthcare & General Waste | Johannesburg"
        description="Switch Waste Management Solutions provides professional healthcare risk waste, pharmaceutical disposal, and general waste management services in Johannesburg. SANS compliant, environmentally responsible waste disposal."
        keywords="waste management Johannesburg, healthcare waste disposal, medical waste services, pharmaceutical waste, environmental services, SANS compliant, Gauteng waste management"
        canonical="/"
        ogImage="/assets/logo/switch_Pro_logo.png"
        structuredData={HOME_PAGE_STRUCTURED_DATA}
      >
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/backgrounds/index.herobanner.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </SEO>

      <main id="main-content" role="main">
        {/* Hero Section - Dynamic Carousel */}
        <ErrorBoundary>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div></div>}>
            <HeroCarousel slides={HERO_SLIDES} />
          </Suspense>
        </ErrorBoundary>

        {/* Services Section */}
        <section ref={servicesRef}>
          <ErrorBoundary>
            <Suspense fallback={<div className="py-16 bg-white flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div></div>}>
              <ServicesGrid services={updatedServices} servicesVisible={servicesVisible} />
            </Suspense>
          </ErrorBoundary>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="relative"
          aria-live="polite"
        >
          {/* Grey overlay matching services section */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <ErrorBoundary>
              <Suspense fallback={<div className="py-16 bg-primary-600 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
                <StatsCounter
                  yearsCounter={yearsCounter}
                  complianceCounter={complianceCounter}
                  supportCounter={supportCounter}
                  clientsCounter={clientsCounter}
                  statsVisible={statsVisible}
                />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        {/* Industries Served */}
        <section
          ref={industriesRef}
          className="relative py-16"
          style={{ backgroundColor: '#f9fafb' }}
          aria-labelledby="industries-heading"
        >
          {/* Grey overlay matching services section */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 id="industries-heading" className="text-5xl font-bold text-primary-600 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored waste management solutions for diverse sectors across Johannesburg and Gauteng Province.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {INDUSTRIES_DATA.map((industry, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-1000 ${
                    industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ul className="space-y-2">
                    {industry.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
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
        <ErrorBoundary>
          <Suspense fallback={<div className="py-16 bg-gray-50 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div></div>}>
            <TrustBadges />
          </Suspense>
        </ErrorBoundary>

        {/* Testimonials Section */}
        <ErrorBoundary>
          <Suspense fallback={<div className="py-16 bg-white flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div></div>}>
            <TestimonialsSection />
          </Suspense>
        </ErrorBoundary>

        {/* CTA Section */}
        <ErrorBoundary>
          <Suspense fallback={<div className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div></div>}>
            <CTASection />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
};

Home.propTypes = {}; // No longer receives props from App.js

export default Home;