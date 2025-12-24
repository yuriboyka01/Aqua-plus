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
      background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0891b2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle decorative elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.08), transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05), transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container grid-cols-2 flex-center hero-grid" style={{
        minHeight: '600px',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gap: '3rem',
        alignItems: 'center'
      }}>

        {/* Content Side */}
        <div className="animate-fade-in">
          <div style={{
            display: 'inline-block',
            padding: '0.625rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            borderRadius: '99px',
            fontWeight: 600,
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            letterSpacing: '0.025em'
          }}>
            #1 Rated Water Service in Madurai
          </div>
          <h1 style={{ color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Experience <span style={{ color: '#22d3ee' }}>Pure Water</span>, <br />
            Experience Health.
          </h1>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2.5rem',
            maxWidth: '500px',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.7'
          }}>
            Advanced RO purifiers and expert maintenance services delivered to your doorstep. Join 500+ happy families today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-buttons">
            <button
              onClick={handleBrowseProducts}
              className="btn"
              style={{
                background: 'white',
                color: '#0369a1',
                fontWeight: 600,
                padding: '1rem 2rem',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
              }}
            >
              Browse Products
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button
              onClick={handleBookService}
              className="btn"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                fontWeight: 600,
                padding: '1rem 2rem'
              }}
            >
              Book a Service
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '2rem'
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.75rem', color: 'white' }}>500+</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>Happy Clients</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.75rem', color: 'white' }}>60min</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>Response Time</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.75rem', color: 'white' }}>10+ Yrs</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>Experience</div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div style={{ position: 'relative' }} className="animate-fade-in hero-visual">
          {/* Main Image Card */}
          <div style={{
            background: 'white',
            padding: '0.75rem',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <img
              src="/images/hero_service.png"
              alt="Aqua Plus RO Tech technician installing RO purifier"
              style={{ borderRadius: '0.75rem', height: '420px', width: '100%', objectFit: 'cover' }}
            />
            {/* Floating Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              background: 'white',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem'
            }} className="hero-badge">
              <div style={{
                background: '#dcfce7',
                padding: '0.625rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9375rem' }}>100% Guaranteed</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Pure TDS Check</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles for all devices */}
      <style jsx>{`
        /* Desktop - Default */
        .hero-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        /* Mobile phones (up to 767px) */
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            gap: 2rem !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .hero-visual {
            order: -1;
          }
          
          .hero-visual img {
            height: 280px !important;
          }
          
          .hero-badge {
            padding: 0.875rem 1rem !important;
            bottom: -10px !important;
            left: 10px !important;
            right: auto !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
          }
          
          .hero-buttons .btn {
            width: 100% !important;
            justify-content: center;
          }
        }
        
        /* Small phones - iPhone SE (up to 375px) */
        @media (max-width: 375px) {
          .hero-visual img {
            height: 220px !important;
          }
          
          .hero-badge {
            padding: 0.75rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        /* Tablets (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-grid {
            gap: 2rem !important;
          }
          
          .hero-visual img {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
