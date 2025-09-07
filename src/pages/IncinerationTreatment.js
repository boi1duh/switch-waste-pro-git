import React from "react";
import { Link } from "react-router-dom";

const IncinerationTreatment = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/backgrounds/back3.jpg')`,
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
                Incineration & Treatment
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
                Advanced Waste Processing
              </h1>
              <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95">
                State-of-the-art incineration facilities and treatment technologies for medical, hazardous, and industrial waste. EPA and NEMWA compliant processing with advanced emission control systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg"
                >
                  Get Quote
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
                <h3 className="font-bold text-white mb-6 text-2xl drop-shadow-lg">Treatment Technologies</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-orange-400 text-2xl">🔥</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">High-Temperature Incineration</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-orange-400 text-2xl">🧪</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Chemical Treatment</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-orange-400 text-2xl">♻️</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Thermal Desorption</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <span className="text-orange-400 text-2xl">⚡</span>
                    <span className="text-white text-lg font-medium drop-shadow-md">Plasma Arc Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Advanced Treatment Technologies</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-800 mb-4">🔬 State-of-the-Art Processing Facilities</h3>
              <p className="text-orange-700 mb-4">
                Our advanced treatment facilities utilize cutting-edge technologies to safely and effectively process medical, hazardous, and industrial waste while minimizing environmental impact and ensuring regulatory compliance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Primary Technologies</h4>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Controlled air incineration</li>
                    <li>• Rotary kiln incineration</li>
                    <li>• Plasma arc gasification</li>
                    <li>• Chemical neutralization</li>
                    <li>• Thermal desorption</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Environmental Controls</h4>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Advanced scrubber systems</li>
                    <li>• HEPA filtration</li>
                    <li>• Continuous emissions monitoring</li>
                    <li>• Ash residue management</li>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Incineration & Treatment Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive waste treatment solutions using advanced technologies for safe and environmentally responsible processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Medical Waste Incineration</h3>
              <p className="text-gray-600 mb-4">High-temperature incineration of medical waste including sharps, pathological materials, and contaminated PPE.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 1200°C minimum temperature</li>
                <li>• Complete pathogen destruction</li>
                <li>• Ash volume reduction by 95%</li>
                <li>• EPA-compliant emissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hazardous Waste Treatment</h3>
              <p className="text-gray-600 mb-4">Advanced treatment of hazardous chemicals, solvents, and industrial waste using thermal and chemical processes.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Chemical neutralization</li>
                <li>• Thermal oxidation</li>
                <li>• Solvent recovery systems</li>
                <li>• Heavy metal stabilization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Waste Processing</h3>
              <p className="text-gray-600 mb-4">Specialized treatment of laboratory chemicals, biohazardous materials, and research waste.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Acid/base neutralization</li>
                <li>• Organic waste oxidation</li>
                <li>• Radioactive waste handling</li>
                <li>• Mixed waste segregation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced Treatment Benefits</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Our state-of-the-art treatment technologies ensure maximum safety, compliance, and environmental protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">Complete Destruction</h3>
              <p className="text-orange-100">Pathogens, chemicals, and hazardous materials are completely destroyed through high-temperature processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Environmental Protection</h3>
              <p className="text-orange-100">Advanced emission control systems ensure compliance with strict environmental regulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Volume Reduction</h3>
              <p className="text-orange-100">Significant reduction in waste volume through incineration and treatment processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Advanced Waste Treatment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our treatment specialists to discuss your incineration and advanced processing needs. We provide comprehensive solutions for all types of hazardous and medical waste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request Treatment Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Facilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncinerationTreatment;