import React from 'react';

const WhyUs = () => (
  <section className="section-padding container" style={{
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Decorative blob */}
    <div style={{
      position: 'absolute',
      bottom: '-10%',
      left: '-5%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(168, 237, 234, 0.5), transparent)',
      borderRadius: '50%',
      filter: 'blur(80px)'
    }} />

    <h2 className="text-center text-gradient-vibrant" style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>Why Aqua Plus RO Tech?</h2>
    <div className="grid-cols-3" style={{ position: 'relative', zIndex: 1 }}>
      <div className="card hover-lift" style={{
        border: 'none',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)'
        }}>1</div>
        <h3 style={{ color: 'var(--text-main)' }}>Certified Technicians</h3>
        <p className="text-muted">Every technician is background-checked and rigorously trained in all RO brands.</p>
      </div>
      <div className="card hover-lift" style={{
        border: 'none',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #f093fb, #f5576c)',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          boxShadow: '0 8px 20px rgba(240, 147, 251, 0.4)'
        }}>2</div>
        <h3 style={{ color: 'var(--text-main)' }}>Transparent Pricing</h3>
        <p className="text-muted">Zero hidden costs. You approve the quote before we start any repair work.</p>
      </div>
      <div className="card hover-lift" style={{
        border: 'none',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          boxShadow: '0 8px 20px rgba(79, 172, 254, 0.4)'
        }}>3</div>
        <h3 style={{ color: 'var(--text-main)' }}>Warranty Support</h3>
        <p className="text-muted">We handle manufacturer warranty claims and provide service waranties on our repairs.</p>
      </div>
    </div>
  </section>
);

export default WhyUs;

