import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = ({
  isMenuOpen,
  toggleMenu,
  activeMegaMenu,
  toggleMegaMenu,
  setActiveMegaMenu,
  serviceMenuItems,
}) => {  
  const handleMenuClose = () => {
    setActiveMegaMenu(null);
    if (isMenuOpen) {
      toggleMenu();
    }
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" onClick={handleMenuClose}>
          <img src="/assets/logo/switch_Pro_logo.png" alt="Switch Waste Pro Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>About</NavLink>
          
          {/* Mega Menu for Services */}
          <div className="relative">
            <button onClick={() => toggleMegaMenu('services')} className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMegaMenu === 'services' && (
              <div className="absolute -left-8 mt-2 w-screen max-w-xs bg-white rounded-lg shadow-lg z-50">
                <div className="p-4">
                  {serviceMenuItems.map((item) => (
                    <Link key={item} to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">{item}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Contact</NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>Home</NavLink>
            <NavLink to="/about" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>About</NavLink>
            
            {/* Mobile Services Accordion */}
            <div>
              <button onClick={() => toggleMegaMenu('services')} className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Services</span>
                <svg className={`w-5 h-5 transform transition-transform ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeMegaMenu === 'services' && (
                <div className="pl-4 mt-2 space-y-1">
                  {serviceMenuItems.map((item) => (
                    <Link key={item} to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{item}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  activeMegaMenu: PropTypes.string,
  toggleMegaMenu: PropTypes.func.isRequired,
  setActiveMegaMenu: PropTypes.func.isRequired,
  serviceMenuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
