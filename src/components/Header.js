import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ isMenuOpen, toggleMenu, activeMegaMenu, setActiveMegaMenu, serviceMenuItems }) => {
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        toggleMenu();
      }

      // Close mega menus when clicking outside
      if (
        activeMegaMenu &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setActiveMegaMenu(null);
      }
    };

    if (isMenuOpen || activeMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, activeMegaMenu, toggleMenu]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen, toggleMenu]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, toggleMenu]);

  // Handle link clicks to close menu
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
    // Close any open mega menus
    if (activeMegaMenu) {
      setActiveMegaMenu(null);
    }
  };

  // Handle mouse enter for mega menu buttons
  const handleMegaMenuEnter = (menu) => {
    setActiveMegaMenu(menu);
  };

  // Handle mouse leave for mega menu containers
  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };
  return (
    <header
      ref={headerRef}
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="/" className="transition-all duration-300 hover:scale-110 group">
            <div className="relative p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <img
                src="/assets/logo/switch_Pro_logo.png"
                alt="Switch Waste Solutions Logo"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="relative group">
              <button
                onMouseEnter={() => handleMegaMenuEnter("services")}
                className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Services
              </button>
              {activeMegaMenu === "services" && (
                <div
                  className="absolute left-0 mt-3 w-96 bg-white shadow-2xl rounded-2xl p-6 z-50 border border-gray-200"
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {serviceMenuItems.map((service, index) => {
                      // Create URL-friendly paths for service links
                      const servicePath = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                      return (
                        <Link
                          key={index}
                          to={servicePath === 'regulated-medical-waste' ? '/medical-waste' :
                              servicePath === 'pharmaceutical-waste' ? '/pharmaceutical-waste' :
                              servicePath === 'general-waste' ? '/general-waste' :
                              servicePath === 'hazardous-waste' ? '/hazardous-waste' :
                              servicePath === 'universal-waste' ? '/universal-waste' :
                              servicePath === 'controlled-substance-waste' ? '/controlled-substance-waste' :
                              servicePath === 'pathological-chemotherapeutic-waste' ? '/pathological-waste' :
                              servicePath === 'incineration-treatment' ? '/incineration-treatment' :
                              servicePath === 'document-shredding' ? '/document-shredding' :
                              servicePath === 'compliance-training' ? '/compliance-training' :
                              servicePath === 'waste-collection-transportation' ? '/waste-collection' :
                              servicePath === 'waste-treatment-disposal' ? '/services' :
                              servicePath === 'compliance-consulting' ? '/compliance-consulting' :
                              '/services'}
                          className="text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                          onClick={handleLinkClick}
                        >
                          {service}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onMouseEnter={() => handleMegaMenuEnter("markets")}
                className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Markets Served
              </button>
              {activeMegaMenu === "markets" && (
                <div
                  className="absolute left-0 mt-3 w-80 bg-white shadow-2xl rounded-2xl p-6 z-50 border border-gray-200"
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <div className="space-y-3">
                    <Link
                      to="/healthcare-facilities"
                      className="block text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                      onClick={handleLinkClick}
                    >
                      Healthcare Providers
                    </Link>
                    <Link
                      to="/commercial-businesses"
                      className="block text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                      onClick={handleLinkClick}
                    >
                      Commercial Businesses
                    </Link>
                    <Link
                      to="/residential"
                      className="block text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                      onClick={handleLinkClick}
                    >
                      Residential
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>
              Products
            </Link>
            <Link to="/clients" className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>
              Clients
            </Link>
            <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>
              About Us
            </Link>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>
              Contact
            </Link>
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/27100069158"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-primary-600 hover:text-primary-700 hover:bg-gray-50 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-4">
              <Link to="/services" className="block text-gray-700 hover:text-primary-600 py-2" onClick={handleLinkClick}>Services</Link>
              <div className="pl-4 space-y-2">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Markets Served</div>
                <Link to="/healthcare-facilities" className="block text-gray-700 hover:text-primary-600 py-1 text-sm" onClick={handleLinkClick}>Healthcare Providers</Link>
                <Link to="/commercial-businesses" className="block text-gray-700 hover:text-primary-600 py-1 text-sm" onClick={handleLinkClick}>Commercial Businesses</Link>
                <Link to="/residential" className="block text-gray-700 hover:text-primary-600 py-1 text-sm" onClick={handleLinkClick}>Residential</Link>
              </div>
              <Link to="/products" className="block text-gray-700 hover:text-primary-600 py-2" onClick={handleLinkClick}>Products</Link>
              <Link to="/clients" className="block text-gray-700 hover:text-primary-600 py-2" onClick={handleLinkClick}>Clients</Link>
              <Link to="/about" className="block text-gray-700 hover:text-primary-600 py-2" onClick={handleLinkClick}>About Us</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-primary-600 py-2" onClick={handleLinkClick}>Contact</Link>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/27100069158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
                  onClick={handleLinkClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;