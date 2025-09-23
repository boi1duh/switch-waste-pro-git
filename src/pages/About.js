import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";
import ServicesGrid from "../components/home/ServicesGrid";
import { MISSION_POINTS, EXPERTISE_AREAS, SERVICE_AREAS, FAQS, ABOUT_SLIDES } from "../constants/AboutData";

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
        backgroundImage={`${process.env.PUBLIC_URL}/assets/services/office-facility.jpg`}
        description="With over 20 years of experience in the waste management industry, Switch Waste provides comprehensive solutions for healthcare facilities, commercial businesses, and residential clients across Johannesburg and Gauteng."
      />

      {/* About Sections */}
      <main id="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            {/* Slides as simple section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Switch Waste?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {ABOUT_SLIDES.slice(0, 3).map((slide, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{slide.title}</h3>
                      <p className="text-gray-600 mb-4">{slide.description}</p>
                      <Link to={slide.ctaLink} className="text-blue-600 font-semibold hover:text-blue-700">
                        {slide.ctaText} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Mission Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
                <ServicesGrid services={MISSION_POINTS} servicesVisible={true} />
              </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
                <ServicesGrid services={[
                  {title: 'Integrity', description: 'Honesty in all operations and transparent business practices', Icon: null},
                  {title: 'Innovation', description: 'Cutting-edge solutions and continuous improvement', Icon: null},
                  {title: 'Sustainability', description: 'Eco-friendly practices and environmental responsibility', Icon: null},
                  {title: 'Safety', description: 'Prioritizing safety for our team and clients', Icon: null}
                ]} servicesVisible={true} />
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Expertise</h2>
                <ServicesGrid services={EXPERTISE_AREAS} servicesVisible={true} />
              </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Service Areas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {SERVICE_AREAS.map((area, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                      <p className="text-gray-600">{area.areas}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {FAQS.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-8">Contact us today for a free consultation and customized waste management solution.</p>
                <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get a Quote
                </a>
              </div>
            </section>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default About;