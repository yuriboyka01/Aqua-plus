import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Footer = () => {
  const location = {
    address: "Thirunagar 5th Stop, Madurai-625006",
    // Google Maps embed URL for Thirunagar 5th Stop, Madurai (Lat: 9.88625, Lng: 78.05315)
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d78.05315!3d9.88625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c7e8d8a9f6c9%3A0x5c8a7b6c5d4e3f2a!2sThirunagar%205th%20Stop%2C%20Madurai%2C%20Tamil%20Nadu%20625006!5e0!3m2!1sen!2sin!4v1703234567890!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir//9.88625,78.05315/@9.88625,78.05315,17z"
  };

  return (
    <footer style={{ marginTop: 40 }}>
      {/* Map Section */}
      <section style={{
        background: '#f8fafc',
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: '#f0f9ff',
              color: '#0369a1',
              borderRadius: '99px',
              fontWeight: 600,
              fontSize: '0.8125rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Find Us
            </div>
            <h2 style={{ color: '#0f172a', fontSize: '2.25rem', marginBottom: '0.75rem' }}>
              Visit Our Location
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.0625rem', maxWidth: '600px', margin: '0 auto' }}>
              Come visit us at our office in Thirunagar, Madurai. We're here to serve you!
            </p>
          </div>

          {/* Map Container */}
          <div style={{
            padding: '0',
            overflow: 'hidden',
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            {/* Map Embed */}
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aqua Plus Location - Thirunagar 5th Stop, Madurai"
              ></iframe>
            </div>

            {/* Location Info Overlay */}
            <div style={{
              padding: '1.5rem 2rem',
              background: 'white',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: '1', minWidth: '250px' }}>
                <div style={{
                  background: '#f0f9ff',
                  padding: '0.875rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="#0891b2" strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', color: '#0f172a' }}>
                    Our Office
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.9375rem' }}>
                    {location.address}
                  </div>
                </div>
              </div>

              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  padding: '0.75rem 1.5rem'
                }}
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '3rem auto 0'
          }}>
            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                background: '#f0f9ff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Call Us</div>
              <a href="tel:+917010329920" style={{ display: 'block', color: '#0891b2', fontWeight: 600, fontSize: '0.9375rem' }}>
                +91 70103 29920
              </a>
            </div>

            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                background: '#dcfce7',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>WhatsApp</div>
              <a href="https://wa.me/917010329920" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#25D366', fontWeight: 600, fontSize: '0.9375rem' }}>
                Chat with Us
              </a>
            </div>

            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                background: '#f0f9ff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Email Us</div>
              <a href="mailto:aquaplusrosales@gmail.com" style={{ display: 'block', color: '#0891b2', fontWeight: 600, fontSize: '0.8125rem', wordBreak: 'break-all' }}>
                aquaplusrosales@gmail.com
              </a>
            </div>

            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                background: '#fdf2f8',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Instagram</div>
              <a href="https://www.instagram.com/aquaplus.ro.service/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#db2777', fontWeight: 600, fontSize: '0.9375rem' }}>
                @aquaplus.ro.service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Original Footer Content */}
      <div style={{ padding: '3rem 0', background: '#0f172a', color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src="/images/logo.jpg" alt="logo" style={{ height: 40, borderRadius: '0.25rem' }} />
              <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'white' }}>Aqua Plus RO Tech</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.7' }}>
              Madurai's trusted partner for clean and safe drinking water. We provide sales, service, and AMC for all RO brands.
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white', fontWeight: 600 }}>Contact Info</h4>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
              <p style={{ margin: 0 }}>Thirunagar 5th Stop, Madurai-625006</p>
              <p style={{ margin: 0 }}>+91 70103 29920</p>
              <p style={{ margin: 0 }}>+91 63857 86516</p>
              <p style={{ margin: 0 }}>aquaplusrosales@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white', fontWeight: 600 }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="https://www.facebook.com/share/1DDwHNUk4T/" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/aquaplus.ro.service/" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                Instagram
              </a>
            </div>
          </div>

        </div>
        <div className="container" style={{ borderTop: '1px solid #334155', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8125rem', color: '#64748b' }}>
          © {new Date().getFullYear()} Aqua Plus RO Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
