import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/ui/Hero';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Switch Waste Management Solutions."
        canonical="/privacy"
      />
      <Hero
        title="Privacy Policy"
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back.webp`}
      />
      <div className="container mx-auto px-4 py-16">
        {/* By adding the `prose` class here, all child elements get styled automatically. */}
        <article className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Switch Waste Management Solutions. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site.
          </p>
          <ul>
            <li>Contact information (such as name, email address, and phone number).</li>
            <li>Company information (such as company name and waste volume).</li>
            <li>Information you provide in your messages to us.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect in the following ways:
          </p>
          <ol>
            <li>To provide, operate, and maintain our website.</li>
            <li>To improve, personalize, and expand our website.</li>
            <li>To understand and analyze how you use our website.</li>
            <li>To communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          </ol>

          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@switchwaste.co.za">info@switchwaste.co.za</a>.
          </p>
        </article>
      </div>
    </>
  );
};

export default Privacy;