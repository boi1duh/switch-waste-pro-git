import React, { useState } from "react";
import { clients } from "../../constants/ClientsData";

const ClientCard = React.memo(({ client }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group border border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
            {!imageError ? (
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Logo
              </div>
            )}
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
            aria-label={`Visit ${client.name} website`}
          >
            Visit Website
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

const ClientsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with leading healthcare and service providers across South Africa, delivering reliable waste management solutions that meet the highest standards of compliance and safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsGrid;