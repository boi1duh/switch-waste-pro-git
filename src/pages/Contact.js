import React, { useMemo } from "react";
import SEO from "../components/SEO";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { CONTACT_INFO } from "../constants/ContactData";

// Memoize structured data to prevent unnecessary re-computations
const Contact = () => {
  const contactStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Switch Waste Management Solutions",
    "description": "Get in touch with Switch Waste Solutions for professional waste management services in Johannesburg. Free quotes and emergency services available.",
    "url": "https://www.switchwaste.co.za/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Switch Waste Management Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.street,
        "addressLocality": CONTACT_INFO.address.locality,
        "addressRegion": CONTACT_INFO.address.region,
        "postalCode": CONTACT_INFO.address.postalCode,
        "addressCountry": CONTACT_INFO.address.country
      },
      "contactPoint": CONTACT_INFO.phones.map(phone => ({
        "@type": "ContactPoint",
        "telephone": phone.number.replace(/\s/g, '-'),
        "contactType": phone.number.includes('061') ? "emergency" : "customer service",
        "availableLanguage": "English",
        "description": phone.number.includes('061') ? "Emergency waste management services" : undefined
      })),
      "email": CONTACT_INFO.email
    }
  }), []);

  return (
    <>
      <SEO
        title="Contact Switch Waste Solutions | Free Quote | Emergency Services | Johannesburg"
        description="Contact Switch Waste Solutions for professional waste management in Johannesburg. Free quotes, emergency pickups available 24/7. Call +27 10 006 9158 or email info@switchwaste.co.za."
        keywords="contact switch waste, waste management quote, emergency waste services, Johannesburg contact, medical waste disposal contact, Gauteng waste services"
        canonical="/contact"
        ogImage="/assets/logo/switch_Pro_logo.png"
        structuredData={contactStructuredData}
      />

      <ContactHero />

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;