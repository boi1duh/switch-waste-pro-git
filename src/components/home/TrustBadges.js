import { memo } from "react";

const TrustBadges = () => {
  const badges = [
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/ISO_trust.png`,
      alt: "ISO Certification",
      label: "ISO Certified"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/iso_14001_trust.png`,
      alt: "ISO 14001 Environmental Management",
      label: "ISO 14001"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/hpcsa_logo_trust.png`,
      alt: "HPCSA Certified",
      label: "HPCSA Certified"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/dea_logo_trust.png`,
      alt: "Department of Environmental Affairs",
      label: "DEA Approved"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/beee.logo.trust.png`,
      alt: "BEE Certified",
      label: "BEE Certified"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/trust-badges/trust1.png`,
      alt: "Professional Certification",
      label: "Professional"
    }
  ];

  return (
    <section className="relative py-16" style={{ backgroundColor: '#f9fafb' }}>
      {/* Grey overlay matching services section */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-4">Certified & Compliant</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Our commitment to excellence is backed by industry certifications and regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 object-contain"
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
                style={{ aspectRatio: '1' }}
                fetchPriority="low"
                crossOrigin="anonymous"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-700">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(TrustBadges);