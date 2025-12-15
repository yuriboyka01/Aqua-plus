import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleBrowseProducts = () => {
    navigate('/products');
  };

  const handleBookService = () => {
    navigate('/services');
  };

  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient-shift 15s ease infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Colorful floating shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(251, 207, 232, 0.6), transparent)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(165, 243, 252, 0.6), transparent)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s'
      }} />

      <div className="container grid-cols-2 flex-center" style={{
        minHeight: '600px',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        alignItems: 'center'
      }}>

        {/* Content Side */}
        <div className="animate-fade-in">
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: 'white',
            borderRadius: '99px',
            fontWeight: 700,
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.5)',
            animation: 'pulse-scale 2s ease-in-out infinite'
          }}>
            ✨ #1 Rated Water Service in Madurai
          </div>
          <h1>
            Experience <span className="text-gradient">Pure Water</span>, <br />
            Experience Health.
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Advanced RO purifiers and expert maintenance services delivered to your doorstep. Join 500+ happy families today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-buttons">
            <button
              onClick={handleBrowseProducts}
              className="btn btn-primary hover-scale"
            >
              Browse Products
              {/* Arrow Right Icon */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button
              onClick={handleBookService}
              className="btn btn-secondary hover-scale"
            >
              Book a Service
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-dark)' }}>500+</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Happy Clients</div>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-dark)' }}>60min</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Response Time</div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div style={{ position: 'relative' }} className="animate-fade-in hero-visual">
          {/* Main Image Card */}
          <div className="card" style={{ padding: '1rem', transform: 'rotate(-2deg)', border: 'none', boxShadow: 'var(--shadow-xl)' }}>
            <img
              src="/images/hero_service.png"
              alt="Aqua Plus RO Tech technician installing RO purifier"
              style={{ borderRadius: 'var(--radius-lg)', height: '400px', width: '100%', objectFit: 'cover' }}
            />
            {/* Floating Badge */}
            <div style={{
              position: 'absolute', bottom: '-20px', left: '-20px',
              background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '1rem'
            }} className="hero-badge">
              <div style={{ background: '#dcfce7', padding: '0.75rem', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>100% Guaranteed</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pure TDS Check</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container.grid-cols-2 {
            grid-template-columns: 1fr !important;
            min-height: 500px !important;
            gap: 2rem !important;
          }
          
          .hero-visual {
            order: -1;
          }
          
          .hero-visual .card {
            transform: rotate(0deg) !important;
          }
          
          .hero-visual img {
            height: 300px !important;
          }
          
          .hero-badge {
            padding: 1rem !important;
            bottom: -15px !important;
            left: -15px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
          }
          
          .hero-buttons .btn {
            width: 100% !important;
          }
        }
        
        @media (max-width: 375px) {
          .hero-visual img {
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
