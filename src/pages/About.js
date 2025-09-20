import React from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../hooks";
import Hero from "../components/ui/Hero";
import { FaLeaf, FaHandshake, FaShieldAlt, FaHospital, FaBuilding, FaSchool, FaHome, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const missionPoints = [
    {
      title: 'Environmental Protection',
      description: 'Prioritizing eco-friendly solutions that reduce environmental impact',
      icon: <FaLeaf />
    },
    {
      title: 'Safety First',
      description: 'Ensuring the highest safety standards for communities and healthcare workers',
      icon: <FaShieldAlt />
    },
    {
      title: 'Partnership Approach',
      description: 'Building long-term relationships based on trust and transparency',
      icon: <FaHandshake />
    }
  ];

  const expertiseAreas = [
    {
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, medical practices, and laboratories',
      icon: <FaHospital />
    },
    {
      title: 'Corporate Clients',
      description: 'Office buildings, retail centers, and industrial facilities',
      icon: <FaBuilding />
    },
    {
      title: 'Educational Institutions',
      description: 'Schools, universities, and research facilities',
      icon: <FaSchool />
    },
    {
      title: 'Residential Services',
      description: 'Apartment complexes, gated communities, and housing estates',
      icon: <FaHome />
    }
  ];

  const serviceAreas = [
    { name: 'Johannesburg Central', areas: 'CBD, Newtown, Braamfontein, Hillbrow' },
    { name: 'East Rand', areas: 'Edenvale, Germiston, Boksburg, Benoni' },
    { name: 'West Rand', areas: 'Roodepoort, Krugersdorp, Randburg, Sandton'},
    { name: 'Southern Suburbs', areas: 'Alberton, Glenvista, Turffontein, Johannesburg South'},
    { name: 'Northern Suburbs', areas: 'Midrand, Fourways, Pretoria areas'},
    { name: 'Custom Areas', areas: 'Contact us for other Gauteng locations' }
  ];

  const faqs = [
    {
      question: 'What types of waste do you handle?',
      answer: 'We handle healthcare risk waste (sharps, pathological specimens, pharmaceutical waste), general waste, recyclables (paper, glass, plastics), and provide specialized disposal services. All waste is managed according to SANS guidelines and environmental regulations.'
    },
    {
      question: 'How quickly can you start service?',
      answer: 'We can typically begin service within 24-48 hours of your request. Emergency collections can be arranged within hours. We\'ll conduct a site assessment and provide containers and documentation immediately upon agreement.'
    },
    {
      question: 'Do you provide containers and supplies?',
      answer: 'Yes, we provide all necessary containers, including sharps containers, waste bags, and specialized containers. We also supply reusable container systems that are environmentally friendly and cost-effective.'
    },
    {
      question: 'What documentation do you provide?',
      answer: 'We provide complete documentation including collection certificates, treatment certificates, disposal certificates, and access to our online document management system (DMS) for tracking and compliance records.'
    },
    {
      question: 'Do you offer training for our staff?',
      answer: 'Absolutely! We provide comprehensive staff training on waste segregation, safety procedures, regulatory compliance, and best practices. Training sessions can be conducted at your facility or our training center.'
    },
    {
      question: 'What are your pricing structures?',
      answer: 'We offer transparent pricing with no hidden costs. Pricing depends on waste type, volume, collection frequency, and location. We provide detailed quotes after assessing your specific needs. Contact us for a free consultation and customized quote.'
    }
  ];

  // Carousel slides for About page
  const aboutSlides = [
    {
      title: "20+ Years of Excellence",
      subtitle: "Trusted Waste Management",
      description: "Leading environmental solutions with complete regulatory compliance and sustainable practices.",
      ctaText: "Our Services",
      ctaLink: "/services"
    },
    {
      title: "SANS Certified Operations",
      subtitle: "Quality Assurance",
      description: "All operations meet the highest South African National Standards for waste management excellence.",
      ctaText: "View Certifications",
      ctaLink: "/about"
    },
    {
      title: "Environmental Leadership",
      subtitle: "Sustainable Solutions",
      description: "Committed to reducing environmental impact through innovative waste management technologies.",
      ctaText: "Learn More",
      ctaLink: "/about"
    }
  ];

  // Initialize carousel
  const { currentSlide, goToSlide } = useCarousel(aboutSlides);

  return (
    <>
      <Hero
        title="About Switch Waste"
        subtitle="Your trusted partner in environmental responsibility and regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back3.jpg`}
      />

      {/* About Carousel */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Carousel Content */}
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-white/30">
                  {aboutSlides[currentSlide]?.subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                {aboutSlides[currentSlide]?.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
                {aboutSlides[currentSlide]?.description}
              </p>
              <div className="flex justify-center gap-6">
                <Link
                  to={aboutSlides[currentSlide]?.ctaLink}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  {aboutSlides[currentSlide]?.ctaText}
                </Link>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {aboutSlides.map((_, index) => (
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

      {/* Mission Section */}
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Switch Waste Management Solutions, we are committed to providing exceptional waste management services that ensure a safe environment free from hazardous waste. We specialize in comprehensive solutions for both healthcare sectors and general waste needs while maintaining strict compliance with all regulations to protect our planet.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission extends beyond simple waste collection. We believe in creating lasting partnerships with our clients, providing them with the knowledge, tools, and support necessary to achieve complete compliance in waste management while minimizing environmental impact.
              </p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/environmental-impact.jpg`}
                alt="Environmental sustainability and waste management impact"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 text-xl rounded-full flex items-center justify-center mb-6">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600">We prioritize eco-friendly solutions in all our operations, continuously seeking opportunities to reduce environmental impact through sustainable practices and innovative technologies.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 text-xl rounded-full flex items-center justify-center mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrity & Transparency</h3>
              <p className="text-gray-600">We conduct our business with complete honesty and transparency, providing clear costing structures with no hidden costs to help you budget accurately and effectively.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 text-red-600 text-xl rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety & Compliance</h3>
              <p className="text-gray-600">Ensuring a safe environment is at the heart of everything we do. We implement the highest safety standards and maintain strict regulatory compliance to protect healthcare workers, patients, and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Industry Expertise & Experience</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 20 years of experience in the waste management industry, Switch Waste Solutions has developed extensive knowledge of the stringent regulations, legislation, by-laws, and SANS guidelines governing the healthcare risk waste sector.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expert team provides comprehensive support throughout the entire &apos;cradle to grave&apos; process of healthcare risk waste treatment and disposal. We understand the critical importance of compliance and work diligently to ensure your organization meets all regulatory requirements.
              </p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/team-experts.jpg`}
                alt="Professional waste management team and certified experts"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">We provide professional waste management services throughout Johannesburg and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-blue-600">
                  <FaMapMarkerAlt />
                  <h3 className="text-lg font-semibold text-gray-800">{area.name}</h3>
                </div>
                <p className="text-gray-600">{area.areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 bg-white">
        {/* Grey overlay for consistency with Home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our waste management services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Partner with Switch Waste Solutions</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the difference that professional, reliable, and environmentally responsible waste management can make for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us Today
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;