import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/ui/Hero';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for using the services of Switch Waste Management Solutions."
        canonical="/terms"
      />
      <Hero
        title="Terms & Conditions"
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back3.jpg`}
      />
      <div className="container mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our site and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2>2. Services</h2>
          <p>
            Switch Waste Management Solutions provides waste management services as described on our website. All services are subject to the execution of a formal service agreement.
          </p>

          <h2>3. Use of Website</h2>
          <p>
            This website is provided for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this website.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Switch Waste Management Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days&apos; notice prior to any new terms taking effect.
          </p>
        </article>
      </div>
    </>
  );
};

export default Terms;