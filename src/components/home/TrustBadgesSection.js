import React, { useState, memo } from "react";

const TrustBadgesSection = memo(() => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (badgeKey) => {
    setImageErrors(prev => ({ ...prev, [badgeKey]: true }));
  };

  const badges = [
    {
      key: 'iso',
      src: '/assets/trust-badges/ISO_trust.png',
      alt: 'ISO Certification',
      label: 'ISO Certified'
    },
    {
      key: 'iso14001',
      src: '/assets/trust-badges/iso_14001_trust.png',
      alt: 'ISO 14001 Environmental Management',
      label: 'ISO 14001'
    },
    {
      key: 'hpcsa',
      src: '/assets/trust-badges/hpcsa_logo_trust.png',
      alt: 'HPCSA Certified',
      label: 'HPCSA Certified'
    },
    {
      key: 'dea',
      src: '/assets/trust-badges/dea_logo_trust.png',
      alt: 'Department of Environmental Affairs',
      label: 'DEA Approved'
    },
    {
      key: 'beee',
      src: '/assets/trust-badges/beee.logo.trust.png',
      alt: 'BEE Certified',
      label: 'BEE Certified'
    },
    {
      key: 'professional',
      src: '/assets/trust-badges/trust1.png',
      alt: 'Professional Certification',
      label: 'Professional'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Certified & Compliant</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry certifications and regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.key} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              {!imageErrors[badge.key] ? (
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                  loading="lazy"
                  onError={() => handleImageError(badge.key)}
                />
              ) : (
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Image</span>
                </div>
              )}
              <p className="text-sm font-medium text-gray-700">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustBadgesSection.displayName = 'TrustBadgesSection';

export default TrustBadgesSection;