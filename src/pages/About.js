import React, { lazy, Suspense } from "react";
import Hero from "../components/ui/Hero";
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";
import { MISSION_POINTS, EXPERTISE_AREAS, SERVICE_AREAS, FAQS, ABOUT_SLIDES } from "../constants/AboutData";

// Lazy load section components for performance
const AboutCarousel = lazy(() => import('../components/about/AboutCarousel'));
const MissionSection = lazy(() => import('../components/about/MissionSection'));
const ValuesSection = lazy(() => import('../components/about/ValuesSection'));
const ExperienceSection = lazy(() => import('../components/about/ExperienceSection'));
const ServiceAreasSection = lazy(() => import('../components/about/ServiceAreasSection'));
const FAQSection = lazy(() => import('../components/about/FAQSection'));
const CTASection = lazy(() => import('../components/about/CTASection'));

const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
  </div>
);

const About = () => {
  return (
    <>
      <SEO
        title="About Switch Waste | Our Mission, Values, and Expertise"
        description="Learn about Switch Waste Management Solutions, our commitment to environmental responsibility, safety, and regulatory compliance. Discover our 20+ years of experience in the waste management industry."
        keywords="about switch waste, waste management company, environmental responsibility, SANS compliance, Johannesburg waste services"
        canonical="/about"
      />

      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg transition-all"
      >
        Skip to main content
      </a>

      <Hero
        title="About Switch Waste"
        subtitle="Your trusted partner in environmental responsibility and regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back3.jpg`}
      />

      {/* About Carousel */}
      <main id="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <AboutCarousel slides={ABOUT_SLIDES} />
            <MissionSection missionPoints={MISSION_POINTS} />
            <ValuesSection />
            <ExperienceSection expertiseAreas={EXPERTISE_AREAS} />
            <ServiceAreasSection serviceAreas={SERVICE_AREAS} />
            <FAQSection faqs={FAQS} />
            <CTASection />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default About;