import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close menu on route change
  React.useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/process', label: 'Process' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/logo.jpg"
            alt="Aqua Plus RO Tech"
            className="navbar-logo-img"
          />
          <div className="navbar-logo-text">
            <span className="navbar-brand">Aqua Plus RO Tech</span>
            <span className="navbar-tagline">Pure Water Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation - Visible on tablets and desktops */}
        <nav className="navbar-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="navbar-cta">
            Book Service
          </Link>
        </nav>

        {/* Mobile Menu Toggle - Only visible on mobile */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>

        <nav className={`navbar-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-mobile-content">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="navbar-mobile-cta"
              onClick={closeMenu}
            >
              Book Service
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
