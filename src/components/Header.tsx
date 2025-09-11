import React from 'react';
import { Link } from 'react-router-dom';
import type { Industry, HeaderProps } from '../types';

const Header = React.memo(({
  isMenuOpen,
  toggleMenu,
  activeMegaMenu,
  toggleMegaMenu,
  setActiveMegaMenu,
  serviceMenuItems,
  industries
}: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SW</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Switch Waste Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</Link>

            {/* Services Mega Menu Trigger */}
            <button
              onClick={() => toggleMegaMenu('services')}
              className="text-gray-700 hover:text-primary-600 transition-colors relative"
              aria-haspopup="true"
              aria-expanded={activeMegaMenu === 'services'}
            >
              Services
              {activeMegaMenu === 'services' && (
                <div className="absolute -top-2 right-0 w-2 h-2 bg-primary-600 rounded-full"></div>
              )}
            </button>

            {/* Industries Mega Menu Trigger */}
            <button
              onClick={() => toggleMegaMenu('industries')}
              className="text-gray-700 hover:text-primary-600 transition-colors relative"
              aria-haspopup="true"
              aria-expanded={activeMegaMenu === 'industries'}
            >
              Industries
              {activeMegaMenu === 'industries' && (
                <div className="absolute -top-2 right-0 w-2 h-2 bg-primary-600 rounded-full"></div>
              )}
            </button>
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-primary-600">Services</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-primary-600">Products</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-primary-600">About</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary-600">Contact</Link>
            <Link to="/clients" className="block py-2 text-gray-700 hover:text-primary-600">Clients</Link>
            <Link
              to="/contact"
              className="block w-full bg-primary-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}

      {/* Mega Menus */}
      {activeMegaMenu === 'services' && (
        <div className="hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg border">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Waste Management Services</h3>
                <ul className="space-y-2">
                  {serviceMenuItems.slice(0, 8).map((item, index) => (
                    <li key={index}>
                      <Link to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-primary-600 block py-1">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Get Started</h3>
                <Link to="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block">
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMegaMenu === 'industries' && (
        <div className="hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg border">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <ul className="space-y-1">
                    {industry.items.map((item, i) => (
                      <li key={i}>
                        <Link to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-primary-600 text-sm block">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;