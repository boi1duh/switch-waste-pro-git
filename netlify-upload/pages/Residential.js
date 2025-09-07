import React from "react";
import { Link } from "react-router-dom";

const Residential = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/sustainability.jpg')`,
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
                Residential Waste Solutions
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Community & Home Services
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                Comprehensive waste management solutions for residential communities, apartment complexes, and housing estates. Eco-friendly services that support sustainable living while ensuring regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Residential Quote
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20">
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Residential Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏠</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Housing Complexes</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏢</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Apartment Buildings</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏘️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Suburban Communities</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-green-400 text-2xl">🏡</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Estate Communities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Residential Waste Management Solutions</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">🏠 Community-Focused Waste Solutions</h3>
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
                    <li>• Environmental awareness</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">Our Solutions</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Scheduled collection services</li>
                    <li>• Recycling education programs</li>
                    <li>• Community waste stations</li>
                    <li>• Environmental initiatives</li>
                    <li>• Regulatory compliance support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Residential Waste Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized waste management services designed for residential communities and housing developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Apartment Complexes</h3>
              <p className="text-gray-600 mb-4">Comprehensive waste management for multi-unit residential buildings with centralized collection and recycling programs.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Multi-unit waste collection</li>
                <li>• Centralized recycling centers</li>
                <li>• Compactor station management</li>
                <li>• Resident education programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Housing Estates</h3>
              <p className="text-gray-600 mb-4">Tailored waste management solutions for gated communities and housing estates with security and convenience features.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Estate-wide collection routes</li>
                <li>• Security-compliant procedures</li>
                <li>• Community recycling initiatives</li>
                <li>• Environmental awareness campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Suburban Communities</h3>
              <p className="text-gray-600 mb-4">Efficient waste collection services for suburban neighborhoods with focus on environmental sustainability and community engagement.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Neighborhood collection routes</li>
                <li>• Seasonal waste management</li>
                <li>• Community composting programs</li>
                <li>• Environmental education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Partnership Benefits</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Building sustainable communities through responsible waste management and environmental education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
              <p className="text-green-100">Reduced landfill waste and increased recycling rates through community education and efficient collection systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-green-100">Active participation in environmental initiatives and sustainability programs that benefit the entire community</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold mb-2">Sustainable Living</h3>
              <p className="text-green-100">Support for eco-friendly practices and sustainable living initiatives within residential communities</p>
            </div>
          </div>
        </div>
      </section>

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