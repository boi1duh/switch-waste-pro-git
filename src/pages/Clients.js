import React from "react";
import { Link } from "react-router-dom";

const Clients = () => {
  const clients = [
    {
      name: "Advanced Renal Care",
      logo: `${process.env.PUBLIC_URL}/assets/partners/avanced.renal.care_client.jpg`,
      description: "Leading provider of dialysis services and renal care in South Africa, specializing in kidney disease treatment and management.",
      website: "https://advancedrenalcare.co.za",
      services: "Medical waste management for dialysis centers",
      location: "Johannesburg, South Africa"
    },
    {
      name: "Hersol Laboratories",
      logo: `${process.env.PUBLIC_URL}/assets/partners/hersol.laboritories-logo-client.png`,
      description: "Premier medical laboratory services offering comprehensive diagnostic testing and pathology services across South Africa.",
      website: "https://hersol.co.za",
      services: "Pathological waste and laboratory waste management",
      location: "Gauteng, South Africa"
    },
    {
      name: "Pinnacle Hygiene Company",
      logo: `${process.env.PUBLIC_URL}/assets/partners/pinnacle.hygiene.company.logo.client.jpg`,
      description: "Professional cleaning and hygiene services provider, specializing in healthcare facility sanitation and infection control.",
      website: "https://pinnaclehygiene.co.za",
      services: "Integrated waste and hygiene management solutions",
      location: "Johannesburg, South Africa"
    },
    {
      name: "Unjani Clinic",
      logo: `${process.env.PUBLIC_URL}/assets/partners/unjani.clinic.logo_client.png`,
      description: "Community healthcare provider offering comprehensive medical services with a focus on accessible healthcare delivery.",
      website: "https://unjani.co.za",
      services: "Medical waste collection and disposal services",
      location: "Gauteng, South Africa"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/backgrounds/Index.Hero.jpg')`,
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
                Trusted Partners
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Our Valued Clients
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Switch Waste proudly partners with leading healthcare providers, laboratories, and service companies across South Africa. Our trusted relationships are built on reliability, compliance, and exceptional service delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Partnership Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🤝</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Reliable Service Delivery</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">📋</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">⏰</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🎯</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Tailored Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to partner with leading healthcare and service providers across South Africa, delivering reliable waste management solutions that meet the highest standards of compliance and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {client.description}
                    </p>
                    <div className="space-y-1 text-xs text-gray-500 mb-4">
                      <p><strong>Services:</strong> {client.services}</p>
                      <p><strong>Location:</strong> {client.location}</p>
                    </div>
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Switch Waste?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our partnerships are built on trust, reliability, and a shared commitment to environmental responsibility and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-blue-100">Over 20 years of reliable service delivery to healthcare and commercial clients across South Africa.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold mb-2">Full Compliance</h3>
              <p className="text-blue-100">Complete adherence to NEMWA, HPCSA guidelines, and all relevant South African environmental regulations.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
              <p className="text-blue-100">Continuous investment in new technologies and processes to improve service quality and environmental outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our valued partners about their experience working with Switch Waste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                &quot;Switch Waste has been an invaluable partner for our dialysis centers. Their reliable service and strict compliance with medical waste regulations give us complete peace of mind.&quot;
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Advanced Renal Care Management
              </cite>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                &quot;Their professional approach to laboratory waste management and commitment to safety protocols aligns perfectly with our quality standards.&quot;
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Hersol Laboratories Quality Manager
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Network of Trusted Partners</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a healthcare provider, laboratory, or commercial facility, Switch Waste offers tailored waste management solutions that meet your specific needs and regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start a Partnership
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;