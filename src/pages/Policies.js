import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/ui/Hero';

const Policies = () => {
  return (
    <>
      <SEO
        title="Company Policies"
        description="Company policies for Switch Waste Management Solutions, including our commitment to safety, environment, and quality."
        canonical="/policies"
      />
      <Hero
        title="Our Policies"
        backgroundImage={`${process.env.PUBLIC_URL}/assets/backgrounds/back4.png`}
      />
      <div className="container mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <h2>Health and Safety Policy</h2>
          <p>
            Switch Waste Management Solutions is committed to providing a safe and healthy working environment for all employees, contractors, and visitors. We adhere strictly to the Occupational Health and Safety Act and strive to eliminate all workplace incidents through continuous training, risk assessment, and the provision of appropriate personal protective equipment (PPE).
          </p>

          <h2>Environmental Policy</h2>
          <p>
            We are dedicated to protecting the environment by minimizing the impact of our operations. Our environmental policy focuses on:
          </p>
          <ul>
            <li>Promoting waste reduction, reuse, and recycling.</li>
            <li>Ensuring all waste is treated and disposed of in an environmentally responsible manner.</li>
            <li>Complying with all relevant environmental legislation, including NEMWA.</li>
            <li>Continuously improving our environmental performance.</li>
          </ul>

          <h2>Quality Assurance Policy</h2>
          <p>
            Our goal is to provide the highest quality of service to our clients. We achieve this by implementing a robust quality management system that includes regular audits, client feedback mechanisms, and continuous professional development for our staff. We are committed to meeting and exceeding client expectations while ensuring full regulatory compliance.
          </p>
        </article>
      </div>
    </>
  );
};

export default Policies;