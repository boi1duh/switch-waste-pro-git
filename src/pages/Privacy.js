import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Switch Waste Management Solutions"
        canonical="/privacy"
      />
      <Helmet>
        <title>Privacy Policy | Switch Waste Management Solutions</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information necessary to provide our waste management services, including contact details, service addresses, and waste management requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To provide waste management services</li>
                  <li>To communicate about service updates and changes</li>
                  <li>To ensure compliance with regulatory requirements</li>
                  <li>To improve our services and customer experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required for service provision or by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
                <p className="text-gray-600 mb-4">
                  We retain your information for as long as necessary to provide services and comply with legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information (subject to legal requirements)</li>
                  <li>Objection to processing in certain circumstances</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Phone: +27 10 006 9158</p>
                  <p className="text-gray-600">Email: info@switchwaste.co.za</p>
                  <p className="text-gray-600">Address: 48 16th Avenue, Edenvale, 1609, Johannesburg</p>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-ZA')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;