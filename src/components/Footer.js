import React from "react";
import { Link } from "react-router-dom";

// Constants for maintainability
const FOOTER_CLASSES = {
  container: "bg-gray-800 text-white pt-16 pb-8",
  innerContainer: "container mx-auto px-4",
  grid: "grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12", // Added sm breakpoint for edge cases
  link: "text-gray-400 hover:text-white transition-colors",
  socialIcon: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors",
};

// Config for static data (improve maintainability)
const FOOTER_CONFIG = {
  logo: { src: "/assets/logo/switch_Pro_logo.png", alt: "Switch Waste Solutions Logo" },
  company: { name: "Switch Waste", tagline: "For A Healthier Environment" },
  address: "48 16th Avenue, Edenvale, 1609, Johannesburg, South Africa",
  contact: { phone: "+27 10 006 9158", mobile: "061 600 4720", person: "Nicholas" },
  links: {
    company: [
      { to: "/about", text: "About Us" },
      { to: "/services", text: "Services" },
      { to: "/contact", text: "Contact Us" },
    ],
    services: [
      { to: "/services", text: "Healthcare Risk Waste" },
      { to: "/services", text: "Pharmaceutical Waste" },
      { to: "/services", text: "Hazardous Waste" },
      { to: "/services", text: "Recycling Programs" },
    ],
  },
  social: [
    { href: "https://linkedin.com/company/switch-waste", icon: "linkedin", ariaLabel: "LinkedIn" }, // Replace with real URLs
    { href: "https://twitter.com/switchwaste", icon: "twitter", ariaLabel: "Twitter" },
    { href: "https://github.com/switchwaste", icon: "github", ariaLabel: "GitHub" },
  ],
  bottom: {
    message: "Committed to environmental responsibility and regulatory compliance",
    legal: [
      { href: "#", text: "Terms & Conditions" },
      { href: "#", text: "Privacy Policy" },
      { href: "#", text: "Sitemap" },
    ],
  },
};

// Sub-components for readability
const FooterLogo = () => (
  <div>
    <Link to="/" className="flex items-center mb-4" aria-label="Go to homepage">
      <img
        src={FOOTER_CONFIG.logo.src}
        alt={FOOTER_CONFIG.logo.alt}
        className="h-10 w-auto mr-3 brightness-0 invert"
        loading="lazy"
        onError={(e) => { e.target.src = "/assets/logo/fallback.png"; }} // Fallback for error handling
      />
      <div>
        <h3 className="text-lg font-bold">{FOOTER_CONFIG.company.name}</h3>
        <p className="text-sm text-gray-400">{FOOTER_CONFIG.company.tagline}</p>
      </div>
    </Link>
    <p className="text-gray-400 mb-4">{FOOTER_CONFIG.address}</p>
    <p className="text-gray-400">
      <strong>Phone:</strong> {FOOTER_CONFIG.contact.phone}<br />
      <strong>Mobile:</strong> {FOOTER_CONFIG.contact.mobile}<br />
      <strong>Contact:</strong> {FOOTER_CONFIG.contact.person}
    </p>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} className={FOOTER_CLASSES.link}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterSocial = () => (
  <div>
    <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
    <div className="flex space-x-4 mb-6">
      {FOOTER_CONFIG.social.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className={FOOTER_CLASSES.socialIcon}
          aria-label={social.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Inline SVG for simplicity; consider extracting to a component */}
          {social.icon === "linkedin" && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )}
          {/* Add similar for other icons */}
        </a>
      ))}
    </div>
    <p className="text-gray-400">© 2025 Switch Waste Management Solutions</p>
  </div>
);

// Main Footer component with memo for performance
const Footer = React.memo(() => {
  return (
    <footer className={FOOTER_CLASSES.container}>
      <div className={FOOTER_CLASSES.innerContainer}>
        <div className={FOOTER_CLASSES.grid}>
          <FooterLogo />
          <FooterLinks title="Company" links={FOOTER_CONFIG.links.company} />
          <FooterLinks title="Services" links={FOOTER_CONFIG.links.services} />
          <FooterSocial />
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {FOOTER_CONFIG.bottom.message}
          </p>
          <div className="flex space-x-6 text-sm">
            {FOOTER_CONFIG.bottom.legal.map((item, index) => (
              <a key={index} href={item.href} className={FOOTER_CLASSES.link}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;