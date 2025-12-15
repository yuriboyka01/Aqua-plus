import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container flex-between">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', zIndex: 1002, position: 'relative' }} onClick={closeMenu}>
          {/* Logo Container */}
          <img src="/images/logo.jpg" alt="Aqua Plus RO Tech" style={{
            height: '48px', width: 'auto', borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(6, 182, 212, 0.3)'
          }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--primary-dark)' }}>
              Aqua Plus RO Tech
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pure Water Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden-mobile">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/process" className="nav-link">Process</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', color: 'white', textDecoration: 'none' }}>Book Service</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle hidden-desktop" onClick={toggleMenu} aria-label="Toggle menu">
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
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/process" className="mobile-nav-link" onClick={closeMenu}>Process</Link>
            <Link to="/products" className="mobile-nav-link" onClick={closeMenu}>Products</Link>
            <Link to="/services" className="mobile-nav-link" onClick={closeMenu}>Services</Link>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }} onClick={closeMenu}>Book Service</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
