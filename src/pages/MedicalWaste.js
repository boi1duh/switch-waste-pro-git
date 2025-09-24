import Hero from "../components/ui/Hero";
import Carousel from "../components/ui/Carousel";
import ContentSection from "../components/ui/ContentSection";

const MedicalWaste = () => {
  // Carousel slides for Medical Waste page
  const medicalSlides = [
    {
      title: "Sharps Management Excellence",
      subtitle: "Safe Needle Disposal",
      description: "FDA-approved containers and secure handling for all sharp medical instruments and needles.",
      ctaText: "Get Quote",
      ctaLink: "/contact"
    },
    {
      title: "Pathological Waste Solutions",
      subtitle: "Dignified Treatment",
      description: "Proper handling and incineration of human tissues, organs, and laboratory specimens.",
      ctaText: "Learn More",
      ctaLink: "/services"
    },
    {
      title: "Complete Compliance",
      subtitle: "SANS Certified",
      description: "All medical waste management meets the highest South African National Standards.",
      ctaText: "View Services",
      ctaLink: "/services"
    }
  ];

  return (
    <>
      <Hero
        subtitle="Regulated Medical Waste"
        title="Healthcare Risk Waste Management"
        description="Complete regulated medical waste solutions for healthcare facilities including sharps, pathological specimens, pharmaceutical waste, and contaminated materials. SANS compliant with complete documentation."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/Index.Hero.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Our Medical Waste Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Sharps Management</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Pathological Waste</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Pharmaceutical Disposal</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Contaminated PPE</span>
            </div>
          </div>
        </div>
      </Hero>

      <Carousel slides={medicalSlides} />

      <ContentSection
        title="Medical Waste Management Solutions"
        hasOverlay
        items={[
          {
            title: 'Sharps Containers',
            description: 'Safe collection and disposal of needles, syringes, and other sharp medical instruments.',
            points: ['FDA-approved containers', 'Various sizes available', 'Secure locking mechanisms', 'Regular collection service'],
          },
          {
            title: 'Pathological Waste',
            description: 'Proper handling of human tissues, organs, and laboratory specimens.',
            points: ['Dignified treatment', 'Incineration services', 'Complete documentation', 'Regulatory compliance'],
          },
        ]}
        cta={{
          text: 'Request Medical Waste Service',
          link: '/contact',
        }}
      />
    </>
  );
};

export default MedicalWaste;