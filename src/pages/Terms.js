import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for Switch Waste Management Solutions services"
        canonical="/terms"
      />
      <Helmet>
        <title>Terms & Conditions | Switch Waste Management Solutions</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms & Conditions</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Switch Waste Management Solutions&apos; services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
                <p className="text-gray-600 mb-4">
                  Switch Waste provides professional waste management services including healthcare risk waste, pharmaceutical waste, hazardous waste, and general waste collection and disposal services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Compliance and Regulations</h2>
                <p className="text-gray-600 mb-4">
                  All services are provided in accordance with South African National Standards (SANS) and relevant environmental regulations. We maintain full compliance with all applicable laws and regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Service Terms</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Services are provided on a contractual basis</li>
                  <li>Collection schedules must be adhered to as agreed</li>
                  <li>Proper waste segregation is required from clients</li>
                  <li>Emergency services are available 24/7</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Invoices are issued monthly and payment is due within 30 days of invoice date. Late payments may incur additional charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Liability</h2>
                <p className="text-gray-600 mb-4">
                  Switch Waste maintains comprehensive insurance coverage. However, clients are responsible for ensuring their waste is properly prepared and labeled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For any questions regarding these terms, please contact us at:
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

export default Terms;