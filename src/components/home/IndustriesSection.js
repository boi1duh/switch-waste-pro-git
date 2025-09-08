import React, { memo } from "react";
import { useIntersectionObserver } from "../../hooks";

const IndustriesSection = memo(({ industries }) => {
  const { ref: industriesRef, isIntersecting: industriesVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  if (!industries || industries.length === 0) {
    return null; // Handle empty industries gracefully
  }

  return (
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
              key={industry.id || index} // Use industry.id if available
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
  );
});

IndustriesSection.displayName = 'IndustriesSection';

export default IndustriesSection;