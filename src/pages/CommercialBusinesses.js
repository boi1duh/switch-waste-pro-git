import { Link } from "react-router-dom";
import { FaBuilding, FaShoppingCart, FaIndustry, FaGraduationCap, FaClock, FaDollarSign, FaClipboardCheck } from 'react-icons/fa';
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

const CommercialBusinesses = () => {
  return (
    <>
      <Hero
        subtitle="Commercial Waste Solutions"
        title="Office Buildings & Retail"
        description="Comprehensive waste management solutions for commercial properties, office buildings, retail centers, and industrial facilities. Tailored services that minimize operational disruption while ensuring regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back2.jpg`}
        primaryCta={{ text: 'Get Commercial Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="large"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Commercial Sectors</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaBuilding className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Office Buildings</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaShoppingCart className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Retail Centers</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaIndustry className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Industrial Facilities</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm text-blue-300">
              <FaGraduationCap className="text-2xl" />
              <span className="text-white text-lg font-medium drop-shadow-md">Educational Institutions</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Commercial Waste Management Solutions">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FaBuilding /> Tailored Solutions for Commercial Properties
          </h3>
          <p className="text-blue-700 mb-4">
            Commercial waste management requires specialized approaches that minimize operational disruption while ensuring compliance with South African environmental regulations. Our solutions are designed specifically for the unique needs of commercial facilities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Key Challenges</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• High-volume waste generation</li>
                <li>• Mixed waste streams</li>
                <li>• Operational continuity</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Our Solutions</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Scheduled collection services</li>
                <li>• Waste segregation programs</li>
                <li>• Recycling initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Commercial Waste Services"
        subtitle="Specialized waste management services designed for commercial and industrial facilities"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaBuilding className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Office Building Services</h3>
            <p className="text-gray-600">Comprehensive waste management for office buildings including general waste, recycling, and confidential document destruction.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaShoppingCart className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Retail Center Solutions</h3>
            <p className="text-gray-600">Specialized waste management for shopping centers, retail stores, and commercial complexes with high-traffic operations.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center text-blue-600"><FaIndustry className="inline-block" /></div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Industrial Facilities</h3>
            <p className="text-gray-600">Heavy-duty waste management solutions for manufacturing plants, warehouses, and industrial operations.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Commercial Partnership Benefits"
        subtitle="Professional waste management that supports your business operations and environmental responsibility"
        bgColor="bg-blue-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <FaClock className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Operational Continuity</h3>
            <p className="text-blue-100">Reliable waste collection schedules that don&apos;t disrupt your business operations</p>
          </div>
          <div className="text-center">
            <FaDollarSign className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Cost Optimization</h3>
            <p className="text-blue-100">Efficient waste management reduces disposal costs and improves resource recovery</p>
          </div>
          <div className="text-center">
            <FaClipboardCheck className="text-4xl mb-4 mx-auto text-blue-300" />
            <h3 className="text-xl font-bold mb-2">Compliance Assurance</h3>
            <p className="text-blue-100">Complete regulatory compliance with NEMWA and local environmental bylaws</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Commercial Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our commercial waste specialists for a customized solution that meets your facility&apos;s specific needs and regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Commercial Assessment
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

export default CommercialBusinesses;