import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = ({
  isMenuOpen,
  toggleMenu,
  activeMegaMenu,
  toggleMegaMenu,
  setActiveMegaMenu,
  serviceMenuItems,
  industries,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();

  const handleMenuClose = () => {
    setActiveMegaMenu(null);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };
  
  return (
    <header className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" onClick={handleMenuClose} className="flex-shrink-0">
          <img src={`${process.env.PUBLIC_URL}/assets/logo/switch_Pro_logo.png`} alt="Switch Waste Pro Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Home</NavLink>
          <div className="relative">
            <button onClick={() => toggleMegaMenu('company')} className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              Company
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMegaMenu === 'company' && (
              <div className="absolute -left-8 mt-2 w-56 bg-white rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <NavLink to="/about" onClick={handleMenuClose} className={({ isActive }) => `block px-4 py-2 text-sm rounded-md ${isActive ? 'bg-gray-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}>About Us</NavLink>
                  <NavLink to="/clients" onClick={handleMenuClose} className={({ isActive }) => `block px-4 py-2 text-sm rounded-md ${isActive ? 'bg-gray-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}>Our Clients</NavLink>
                </div>
              </div>
            )}
          </div>
          
          {/* Mega Menu for Services */}
          <div className="relative">
            <button onClick={() => toggleMegaMenu('services')} className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMegaMenu === 'services' && (
              <div className="absolute -left-8 mt-2 w-screen max-w-xs bg-white rounded-lg shadow-lg z-50">
                <div className="p-4">
                  {serviceMenuItems.map((item) => {
                    const path = item === "View All Services" ? "/services" : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
                    return (
                      <Link key={item} to={path} onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">{item}</Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mega Menu for Sectors */}
          <div className="relative">
            <button onClick={() => toggleMegaMenu('sectors')} className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              Sectors We Service
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMegaMenu === 'sectors' && (
              <div className="absolute -left-8 mt-2 w-screen max-w-xs bg-white rounded-lg shadow-lg z-50">
                <div className="p-4">
                  {industries.map((industry) => (
                    <Link key={industry.name} to={`/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/\//g, '-')}`} onClick={handleMenuClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">{industry.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/products" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Products</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Contact</NavLink>
          
          {/* Search Icon */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-500 hover:text-primary-600">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          {/* Search Icon Mobile */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-500 hover:text-primary-600">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>

          <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="container mx-auto px-6 py-2 animate-fade-in-down">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="search"
                placeholder="Search the site and press Enter..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute top-0 left-0 mt-2 ml-3"><svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
            </div>
          </form>
        </div>
      )}

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>Home</NavLink>
            
            {/* Mobile Company Accordion */}
            <div>
              <button onClick={() => toggleMegaMenu('company')} className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Company</span>
                <svg className={`w-5 h-5 transform transition-transform ${activeMegaMenu === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeMegaMenu === 'company' && (
                <div className="pl-4 mt-2 space-y-1">
                  <NavLink to="/about" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>About Us</NavLink>
                  <NavLink to="/clients" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>Our Clients</NavLink>
                </div>
              )}
            </div>
            
            {/* Mobile Services Accordion */}
            <div>
              <button onClick={() => toggleMegaMenu('services')} className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Services</span>
                <svg className={`w-5 h-5 transform transition-transform ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeMegaMenu === 'services' && (
                <div className="pl-4 mt-2 space-y-1">
                  {serviceMenuItems.map((item) => {
                    const path = item === "View All Services" ? "/services" : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
                    return (
                      <Link key={item} to={path} onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{item}</Link>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Mobile Sectors Accordion */}
            <div>
              <button onClick={() => toggleMegaMenu('sectors')} className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Sectors We Service</span>
                <svg className={`w-5 h-5 transform transition-transform ${activeMegaMenu === 'sectors' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {activeMegaMenu === 'sectors' && (
                <div className="pl-4 mt-2 space-y-1">
                  {industries.map((industry) => (
                    <Link key={industry.name} to={`/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/\//g, '-')}`} onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">{industry.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/products" onClick={handleMenuClose} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>Products</NavLink>
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
  industries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default Header;
