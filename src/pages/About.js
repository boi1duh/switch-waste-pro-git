import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const missionPoints = [
    {
      icon: "fas fa-leaf",
      title: "Environmental Protection",
      description: "Prioritizing eco-friendly solutions that reduce environmental impact"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safety First",
      description: "Ensuring the highest safety standards for communities and healthcare workers"
    },
    {
      icon: "fas fa-handshake",
      title: "Partnership Approach",
      description: "Building long-term relationships based on trust and transparency"
    }
  ];

  const expertiseAreas = [
    {
      icon: "fas fa-hospital",
      title: "Healthcare Facilities",
      description: "Hospitals, clinics, medical practices, and laboratories"
    },
    {
      icon: "fas fa-building",
      title: "Corporate Clients",
      description: "Office buildings, retail centers, and industrial facilities"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Educational Institutions",
      description: "Schools, universities, and research facilities"
    },
    {
      icon: "fas fa-home",
      title: "Residential Services",
      description: "Apartment complexes, gated communities, and housing estates"
    }
  ];

  const serviceAreas = [
    { name: "Johannesburg Central", areas: "CBD, Newtown, Braamfontein, Hillbrow" },
    { name: "East Rand", areas: "Edenvale, Germiston, Boksburg, Benoni" },
    { name: "West Rand", areas: "Roodepoort, Krugersdorp, Randburg, Sandton" },
    { name: "Southern Suburbs", areas: "Alberton, Glenvista, Turffontein, Johannesburg South" },
    { name: "Northern Suburbs", areas: "Midrand, Fourways, Pretoria areas" },
    { name: "Custom Areas", areas: "Contact us for other Gauteng locations" }
  ];

  const faqs = [
    {
      question: "What types of waste do you handle?",
      answer: "We handle healthcare risk waste (sharps, pathological specimens, pharmaceutical waste), general waste, recyclables (paper, glass, plastics), and provide specialized disposal services. All waste is managed according to SANS guidelines and environmental regulations."
    },
    {
      question: "How quickly can you start service?",
      answer: "We can typically begin service within 24-48 hours of your request. Emergency collections can be arranged within hours. We'll conduct a site assessment and provide containers and documentation immediately upon agreement."
    },
    {
      question: "Do you provide containers and supplies?",
      answer: "Yes, we provide all necessary containers, including sharps containers, waste bags, and specialized containers. We also supply reusable container systems that are environmentally friendly and cost-effective."
    },
    {
      question: "What documentation do you provide?",
      answer: "We provide complete documentation including collection certificates, treatment certificates, disposal certificates, and access to our online document management system (DMS) for tracking and compliance records."
    },
    {
      question: "Do you offer training for our staff?",
      answer: "Absolutely! We provide comprehensive staff training on waste segregation, safety procedures, regulatory compliance, and best practices. Training sessions can be conducted at your facility or our training center."
    },
    {
      question: "What are your pricing structures?",
      answer: "We offer transparent pricing with no hidden costs. Pricing depends on waste type, volume, collection frequency, and location. We provide detailed quotes after assessing your specific needs. Contact us for a free consultation and customized quote."
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏆</span>
            <span>20+ Years Experience</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Switch Waste Management Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated to environmental protection through professional waste management services with complete regulatory compliance.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">SANS Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">Trusted Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Switch Waste Management Solutions, we are committed to providing exceptional waste management services that ensure a safe environment free from hazardous waste. We specialize in comprehensive solutions for both healthcare sectors and general waste needs while maintaining strict compliance with all regulations to protect our planet.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission extends beyond simple waste collection. We believe in creating lasting partnerships with our clients, providing them with the knowledge, tools, and support necessary to achieve complete compliance in waste management while minimizing environmental impact.
              </p>
            </div>
            <div>
              <img
                src="/assets/environmental-impact.jpg"
                alt="Environmental sustainability and waste management impact"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${point.icon} text-blue-600 text-2xl`}></i>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-leaf text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600">We prioritize eco-friendly solutions in all our operations, continuously seeking opportunities to reduce environmental impact through sustainable practices and innovative technologies.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrity & Transparency</h3>
              <p className="text-gray-600">We conduct our business with complete honesty and transparency, providing clear costing structures with no hidden costs to help you budget accurately and effectively.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety & Compliance</h3>
              <p className="text-gray-600">Ensuring a safe environment is at the heart of everything we do. We implement the highest safety standards and maintain strict regulatory compliance to protect healthcare workers, patients, and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Industry Expertise & Experience</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 20 years of experience in the waste management industry, Switch Waste Solutions has developed extensive knowledge of the stringent regulations, legislation, by-laws, and SANS guidelines governing the healthcare risk waste sector.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expert team provides comprehensive support throughout the entire 'cradle to grave' process of healthcare risk waste treatment and disposal. We understand the critical importance of compliance and work diligently to ensure your organization meets all regulatory requirements.
              </p>
            </div>
            <div>
              <img
                src="/assets/team-experts.jpg"
                alt="Professional waste management team and certified experts"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${area.icon} text-blue-600 text-xl`}></i>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">We provide professional waste management services throughout Johannesburg and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <i className="fas fa-map-marker-alt text-blue-600"></i>
                  <h3 className="text-lg font-semibold text-gray-800">{area.name}</h3>
                </div>
                <p className="text-gray-600">{area.areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Switch Waste Solutions</h2>
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