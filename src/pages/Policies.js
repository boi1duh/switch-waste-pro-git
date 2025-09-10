import React from 'react';
import { Helmet } from 'react-helmet-async';

const Policies = () => {
  return (
    <>
      <Helmet>
        <title>Policies & Compliance - Switch Waste Management Solutions</title>
        <meta name="description" content="Comprehensive policies and compliance information for Switch Waste Management Solutions, including regulatory compliance, safety standards, and environmental policies." />
        <meta name="keywords" content="waste management policies, compliance, regulatory standards, environmental policies, safety procedures" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Policies & Compliance
              </h1>
              <p className="text-xl text-blue-100">
                Our commitment to regulatory compliance, safety standards, and environmental responsibility
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            {/* Regulatory Compliance */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Regulatory Compliance
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">South African Legislation</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>National Environmental Management: Waste Act (Act 59 of 2008)</strong>
                          <p className="text-sm mt-1">Comprehensive waste management framework</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Health Professions Council of South Africa (HPCSA) Guidelines</strong>
                          <p className="text-sm mt-1">Healthcare risk waste management standards</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>National Health Act (Act 61 of 2003)</strong>
                          <p className="text-sm mt-1">Healthcare waste classification and handling</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">International Standards</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>ISO 14001:2015</strong>
                          <p className="text-sm mt-1">Environmental Management Systems</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>ISO 45001:2018</strong>
                          <p className="text-sm mt-1">Occupational Health and Safety Management</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>WHO Guidelines</strong>
                          <p className="text-sm mt-1">Safe management of wastes from health-care activities</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Waste Classification & Handling */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Waste Classification & Handling
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">Healthcare Risk Waste</h3>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• Sharps and needles</li>
                      <li>• Blood and body fluids</li>
                      <li>• Pathological waste</li>
                      <li>• Pharmaceutical waste</li>
                      <li>• Chemical waste</li>
                    </ul>
                    <p className="text-xs text-red-600 mt-3 font-medium">Requires specialized treatment and disposal</p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Hazardous Waste</h3>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Toxic chemicals</li>
                      <li>• Heavy metals</li>
                      <li>• Radioactive materials</li>
                      <li>• Flammable substances</li>
                      <li>• Corrosive materials</li>
                    </ul>
                    <p className="text-xs text-yellow-600 mt-3 font-medium">Special handling and documentation required</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">General Waste</h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• Office waste</li>
                      <li>• Packaging materials</li>
                      <li>• Food waste</li>
                      <li>• Construction debris</li>
                      <li>• Municipal waste</li>
                    </ul>
                    <p className="text-xs text-blue-600 mt-3 font-medium">Standard disposal procedures</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety & Environmental Policies */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Safety & Environmental Policies
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Health & Safety Standards</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Personal Protective Equipment (PPE)</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Safety gloves and boots</li>
                          <li>• Protective clothing and eyewear</li>
                          <li>• Respiratory protection</li>
                          <li>• Hearing protection</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Training Requirements</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Hazardous waste handling certification</li>
                          <li>• Emergency response training</li>
                          <li>• Equipment operation training</li>
                          <li>• Safety protocol updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Environmental Protection</h3>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6">
                      <h4 className="font-semibold text-green-800 mb-3">Our Commitment</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li>• <strong>Zero landfill policy</strong> for hazardous waste where possible</li>
                        <li>• <strong>Recycling programs</strong> for recoverable materials</li>
                        <li>• <strong>Carbon footprint reduction</strong> through efficient transportation</li>
                        <li>• <strong>Community education</strong> on proper waste management</li>
                        <li>• <strong>Regular environmental impact assessments</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality Assurance */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Quality Assurance & Documentation
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Quality Control Measures</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Chain of Custody Documentation</strong>
                          <p className="text-sm mt-1">Complete tracking from collection to disposal</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Waste Manifest System</strong>
                          <p className="text-sm mt-1">Detailed records of all waste transactions</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Regular Audits</strong>
                          <p className="text-sm mt-1">Internal and external compliance audits</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Documentation Standards</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Digital Record Keeping</strong>
                          <p className="text-sm mt-1">Secure electronic documentation system</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Regulatory Reporting</strong>
                          <p className="text-sm mt-1">Timely submission of required reports</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✓</span>
                        <div>
                          <strong>Client Certificates</strong>
                          <p className="text-sm mt-1">Disposal certificates for all transactions</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications & Licenses */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Certifications & Licenses
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Certifications</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">Active</span>
                          <span className="ml-2 text-sm text-gray-500">Expires: Dec 2025</span>
                        </div>
                        <h4 className="font-semibold text-gray-800">Waste Management License</h4>
                        <p className="text-sm text-gray-600">Department of Environment, Forestry and Fisheries</p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">Active</span>
                          <span className="ml-2 text-sm text-gray-500">Expires: Jun 2025</span>
                        </div>
                        <h4 className="font-semibold text-gray-800">Healthcare Risk Waste Permit</h4>
                        <p className="text-sm text-gray-600">Department of Health</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Industry Memberships</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800">IWMSA</h4>
                        <p className="text-sm text-gray-600">Institute of Waste Management of Southern Africa</p>
                        <p className="text-xs text-gray-500 mt-1">Member since 2020</p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800">SAWIC</h4>
                        <p className="text-sm text-gray-600">Southern African Waste Information Centre</p>
                        <p className="text-xs text-gray-500 mt-1">Certified member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Response */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Emergency Response & Contingency
                </h2>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">24/7 Emergency Response</h3>
                  <p className="text-red-700 mb-4">
                    Switch Waste maintains a comprehensive emergency response system to handle any incidents involving hazardous materials or waste spills.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-600 font-bold">24</span>
                      </div>
                      <p className="text-sm font-medium text-red-800">Hour Response</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-600 font-bold">7</span>
                      </div>
                      <p className="text-sm font-medium text-red-800">Days a Week</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-600 font-bold">365</span>
                      </div>
                      <p className="text-sm font-medium text-red-800">Days a Year</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Emergency Contacts</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li><strong>Emergency Hotline:</strong> +27 10 006 9158</li>
                      <li><strong>Mobile:</strong> 061 600 4720</li>
                      <li><strong>Contact:</strong> Nicholas (Operations Manager)</li>
                      <li><strong>Secondary Contact:</strong> Available 24/7</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Response Capabilities</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Hazardous spill containment</li>
                      <li>• Emergency transportation</li>
                      <li>• Regulatory notification</li>
                      <li>• Environmental assessment</li>
                      <li>• Cleanup and remediation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-800 text-white rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
                <p className="text-gray-300 mb-6">
                  Contact us for detailed compliance documentation or to discuss your specific waste management requirements.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">+27 10 006 9158</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">admin@switchwaste.co.za</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-300">48 16th Avenue, Edenvale<br />Johannesburg 1609</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;