import React from 'react';

const WhyUs = () => (
  <section className="section-padding" style={{
    background: '#f8fafc',
    position: 'relative'
  }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{
          color: '#0f172a',
          marginBottom: '1rem',
          fontSize: '2.25rem'
        }}>
          Why Choose Aqua Plus RO Tech?
        </h2>
        <p style={{
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1.0625rem',
          lineHeight: '1.7'
        }}>
          Trusted by 500+ families in Madurai for quality water purification solutions
        </p>
      </div>

      <div className="grid-cols-3" style={{ gap: '2rem' }}>
        <div className="card" style={{
          border: '1px solid #e2e8f0',
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          padding: '2.5rem 2rem',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
            borderRadius: '1rem',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.5rem'
          }}>1</div>
          <h3 style={{ color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Certified Technicians</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.9375rem' }}>
            Every technician is background-checked and rigorously trained in all RO brands.
          </p>
        </div>

        <div className="card" style={{
          border: '1px solid #e2e8f0',
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          padding: '2.5rem 2rem',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
            borderRadius: '1rem',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.5rem'
          }}>2</div>
          <h3 style={{ color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Transparent Pricing</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.9375rem' }}>
            Zero hidden costs. You approve the quote before we start any repair work.
          </p>
        </div>

        <div className="card" style={{
          border: '1px solid #e2e8f0',
          background: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          padding: '2.5rem 2rem',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
            borderRadius: '1rem',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.5rem'
          }}>3</div>
          <h3 style={{ color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Warranty Support</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.9375rem' }}>
            We handle manufacturer warranty claims and provide service warranties on our repairs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
