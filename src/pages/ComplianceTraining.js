import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";
import { FaHospital, FaBuilding, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa';

const ComplianceTraining = () => {
  return (
    <>
      <Hero
        subtitle="Compliance Training Programs"
        title="Staff Education & Certification"
        description="Comprehensive training programs ensuring your staff understands waste management regulations, safety protocols, and compliance requirements. Certified trainers with industry expertise."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/environmental-impact.jpg`}
        primaryCta={{ text: 'Get Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Training Programs</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaHospital className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Healthcare Waste Training</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaBuilding className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">General Waste Compliance</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaExclamationTriangle className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Hazardous Waste Safety</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <FaClipboardList className="h-6 w-6 text-green-300" />
              <span className="text-white text-lg font-medium drop-shadow-md">Regulatory Compliance</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Training & Compliance Standards">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-4">📚 NEMWA & HPCSA Training Requirements</h3>
          <p className="text-green-700 mb-4">
            South African waste management regulations require specific training for staff handling medical, hazardous, and general waste. Our certified training programs ensure complete compliance with NEMWA, HPCSA, and other regulatory requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Mandatory Training</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Healthcare risk waste handling</li>
                <li>• Hazardous waste management</li>
                <li>• Personal protective equipment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Certification Types</h4>
              <ul className="text-green-700 space-y-1">
                <li>• HPCSA waste management</li>
                <li>• NEMWA compliance</li>
                <li>• SANS 10248 certification</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Training Programs & Services"
        subtitle="Comprehensive education and certification programs designed to ensure regulatory compliance and workplace safety"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare Waste Training</h3>
            <p className="text-gray-600">Specialized training for healthcare facilities covering medical waste handling, segregation, and regulatory compliance.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">General Waste Compliance</h3>
            <p className="text-gray-600">Training for offices, retail, and commercial facilities on waste segregation, recycling, and environmental responsibility.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hazardous Waste Safety</h3>
            <p className="text-gray-600">Advanced training for handling hazardous chemicals, batteries, and dangerous materials with safety protocols.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Training Program Benefits"
        subtitle="Professional training programs that ensure compliance, improve safety, and reduce operational costs"
        bgColor="bg-green-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
            <p className="text-green-100">Ensure your staff meets all NEMWA, HPCSA, and other regulatory training requirements</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Workplace Safety</h3>
            <p className="text-green-100">Reduce accidents and injuries through proper training and safety awareness</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Cost Reduction</h3>
            <p className="text-green-100">Minimize fines, reduce waste volumes, and improve operational efficiency</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Staff Training & Compliance Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ensure your team is properly trained and certified. Contact our training specialists for customized compliance programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Training Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComplianceTraining;