import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaLock, FaFileSignature, FaFire, FaPills, FaVial, FaHospital } from 'react-icons/fa';

const ControlledSubstanceWaste = () => {
  return (
    <>
      <Hero
        subtitle="Controlled Substance Waste"
        title="DEA Compliant Disposal"
        description="Specialized handling and disposal of controlled substances including pharmaceuticals, narcotics, and DEA Schedule I-V medications. Full compliance with DEA regulations and South African drug control legislation."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back2.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Controlled Substances</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaPills className="h-6 w-6 text-red-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Schedule I-V Drugs</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaVial className="h-6 w-6 text-red-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Narcotics & Opioids</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaHospital className="h-6 w-6 text-red-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Hospital Medications</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaLock className="h-6 w-6 text-red-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">DEA Registered Facilities</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Controlled Substance Regulations">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ DEA & Drug Control Compliance</h3>
          <p className="text-red-700 mb-4">
            Controlled substance waste management is strictly regulated under the U.S. Drug Enforcement Administration (DEA) regulations and South African Medicines and Related Substances Act. Specialized handling protocols are required for all controlled substances.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800 mb-2">DEA Schedules</h4>
              <ul className="text-red-700 space-y-1">
                <li>• Schedule I: High abuse potential</li>
                <li>• Schedule II: High abuse, medical use</li>
                <li>• Schedule III-V: Lower abuse potential</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800 mb-2">Required Protocols</h4>
              <ul className="text-red-700 space-y-1">
                <li>• DEA registration and licensing</li>
                <li>• Chain of custody documentation</li>
                <li>• Secure transportation & Witnessed destruction</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Controlled Substance Waste Services"
        subtitle="Specialized management of controlled substances with full regulatory compliance and secure destruction protocols"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaLock className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Collection</h3>
            <p className="text-gray-600">DEA-compliant collection procedures with proper chain of custody and secure transportation protocols.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaFileSignature className="text-4xl mb-4 mx-auto text-green-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Documentation & Compliance</h3>
            <p className="text-gray-600">Complete regulatory documentation including DEA Form 41, destruction certificates, and compliance reporting.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <FaFire className="text-4xl mb-4 mx-auto text-red-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Destruction Methods</h3>
            <p className="text-gray-600">Approved destruction methods including incineration, chemical neutralization, and secure landfill disposal.</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Controlled Substance Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our DEA-compliant specialists for secure and regulatory-compliant management of controlled substances and pharmaceuticals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Controlled Substance Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ControlledSubstanceWaste;