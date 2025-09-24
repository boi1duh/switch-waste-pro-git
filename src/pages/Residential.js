import { Link } from "react-router-dom";
import Hero from "../components/ui/Hero";
import ContentSection from "../components/ui/ContentSection";

const Residential = () => {
  return (
    <>
      <Hero
        subtitle="Residential Waste Solutions"
        title="Community & Home Services"
        description="Comprehensive waste management solutions for residential communities, apartment complexes, and housing estates. Eco-friendly services that support sustainable living while ensuring regulatory compliance."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/sustainability.jpg`}
        primaryCta={{ text: 'Get Residential Quote', link: '/contact' }}
        secondaryCta={{ text: 'All Services', link: '/services' }}
        layout="two-column"
        size="full"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
          <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Residential Services</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Housing Complexes</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Apartment Buildings</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Suburban Communities</span>
            </div>
            <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white text-lg font-medium drop-shadow-md">Estate Communities</span>
            </div>
          </div>
        </div>
      </Hero>

      <ContentSection title="Residential Waste Management Solutions">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">🏡</span>
            Community-Focused Waste Solutions
          </h3>
          <p className="text-green-700 mb-4">
            Residential waste management requires a community-oriented approach that balances convenience, environmental responsibility, and regulatory compliance. Our solutions are designed to support sustainable living while meeting the unique needs of residential communities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Residential Challenges</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Mixed waste streams</li>
                <li>• Seasonal waste variations</li>
                <li>• Community coordination</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Our Solutions</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Scheduled collection services</li>
                <li>• Recycling education programs</li>
                <li>• Community waste stations</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Residential Waste Services"
        subtitle="Specialized waste management services designed for residential communities and housing developments"
        bgColor="bg-gray-50"
        titleColor="text-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center">🏢</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Apartment Complexes</h3>
            <p className="text-gray-600">Comprehensive waste management for multi-unit residential buildings with centralized collection and recycling programs.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center">🏘️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Housing Estates</h3>
            <p className="text-gray-600">Tailored waste management solutions for gated communities and housing estates with security and convenience features.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-center">🏡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Suburban Communities</h3>
            <p className="text-gray-600">Efficient waste collection services for suburban neighborhoods with focus on environmental sustainability and community engagement.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        title="Community Partnership Benefits"
        subtitle="Building sustainable communities through responsible waste management and environmental education"
        bgColor="bg-green-600"
        titleColor="text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl mb-4 text-center">🌍</div>
            <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
            <p className="text-green-100">Reduced landfill waste and increased recycling rates through community education and efficient collection systems</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
            <p className="text-green-100">Active participation in environmental initiatives and sustainability programs that benefit the entire community</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4 text-center">❤️</div>
            <h3 className="text-xl font-bold mb-2">Sustainable Living</h3>
            <p className="text-green-100">Support for eco-friendly practices and sustainable living initiatives within residential communities</p>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Residential Waste Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our residential waste specialists for community-focused solutions that support sustainable living and environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Residential Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Our Community Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Residential;