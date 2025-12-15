import React from 'react';
import { Wrench, Settings, MapPin } from 'lucide-react';
import { scrollToBooking, scrollToAMCPlans } from '../../utils/scrollUtils';

const Services = () => {
  const handleBookInstall = (e) => {
    e.preventDefault();
    scrollToBooking('installation');
  };

  const handleViewPlans = (e) => {
    e.preventDefault();
    scrollToAMCPlans();
  };

  const handleScheduleRepair = (e) => {
    e.preventDefault();
    scrollToBooking('repair');
  };

  const services = [
    {
      icon: MapPin,
      title: 'Installation',
      description: 'Professional installation by certified technicians. We ensure leakage-free setup with high-quality connectors.',
      features: ['Certified Technicians', 'Leakage-Free Setup', 'Quality Connectors'],
      buttonText: 'Book Install',
      buttonAction: handleBookInstall,
      isPrimary: false,
      iconBg: '#eff6ff',
      iconColor: 'var(--primary)',
      cardBg: 'white'
    },
    {
      icon: Settings,
      title: 'Maintenance & AMC',
      description: 'Peace of mind with our annual maintenance plans. Includes regular filter checks and quality testing.',
      features: ['Annual Plans', 'Filter Checks', 'TDS Testing'],
      buttonText: 'View Plans',
      buttonAction: handleViewPlans,
      isPrimary: true,
      iconBg: 'white',
      iconColor: 'var(--secondary)',
      cardBg: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
      highlight: true
    },
    {
      icon: Wrench,
      title: 'Smart Repairs',
      description: 'Facing issues? We fix all major brands usually within 60 minutes. 100% genuine spares guarantee.',
      features: ['60 Min Response', 'All Brands', 'Genuine Parts'],
      buttonText: 'Schedule Repair',
      buttonAction: handleScheduleRepair,
      isPrimary: false,
      iconBg: '#fff7ed',
      iconColor: 'var(--accent)',
      cardBg: 'white'
    }
  ];

  return (
    <section className="section-padding container section-premium-bg" id="services">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="premium-badge" style={{ marginBottom: '1rem' }}>
          ⚡ Expert Services
        </div>
        <h2 className="text-gradient" style={{ marginBottom: '1rem', fontSize: '2.75rem' }}>
          Our Expertise
        </h2>
        <p className="text-muted" style={{
          maxWidth: '650px',
          margin: '0 auto',
          fontSize: '1.125rem',
          lineHeight: '1.7'
        }}>
          Comprehensive water purification solutions tailored for your home and office in <strong>Madurai & Thirunagar</strong>.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid-cols-3" style={{ gap: '2.5rem' }}>
        {services.map((service, index) => (
          <article
            key={index}
            className={`card hover-lift animate-slide-up stagger-${index + 1}`}
            style={{
              padding: '2.5rem 2rem',
              background: service.cardBg,
              border: service.highlight ? '2px solid var(--secondary)' : '1px solid var(--border)',
              position: 'relative',
              overflow: 'visible'
            }}
          >
            {/* Highlight Badge */}
            {service.highlight && (
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                background: 'linear-gradient(135deg, var(--accent), #fbbf24)',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
              }}>
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div style={{
              width: '70px',
              height: '70px',
              background: service.iconBg,
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
            }} className="service-card-icon">
              <service.icon size={32} color={service.iconColor} strokeWidth={2} />
            </div>

            {/* Title */}
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              color: service.highlight ? 'var(--primary-dark)' : 'var(--text-main)'
            }}>
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted" style={{
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              color: service.highlight ? '#475569' : 'var(--text-muted)'
            }}>
              {service.description}
            </p>

            {/* Features List */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {service.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            {service.isPrimary ? (
              <button
                onClick={service.buttonAction}
                className="btn btn-primary btn-ripple hover-glow"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.95rem'
                }}
              >
                {service.buttonText}
              </button>
            ) : (
              <button
                onClick={service.buttonAction}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}
                className="hover-scale"
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem';
                }}
              >
                {service.buttonText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Decorative Gradient Overlay on Hover */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.03), rgba(6, 182, 212, 0.03))',
              borderRadius: 'inherit',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              zIndex: 0
            }} className="card-overlay" />
          </article>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div style={{
        marginTop: '4rem',
        textAlign: 'center',
        padding: '3rem',
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid #bfdbfe'
      }} className="glass-card animate-slide-up stagger-4">
        <h3 style={{
          fontSize: '1.75rem',
          marginBottom: '1rem',
          color: 'var(--primary-dark)'
        }}>
          Not sure which service you need?
        </h3>
        <p className="text-muted" style={{
          marginBottom: '2rem',
          fontSize: '1.05rem'
        }}>
          Our experts are here to help. Get a free consultation today!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => window.open('https://wa.me/917010329920', '_blank')}
            className="btn btn-primary btn-ripple hover-lift"
          >
            WhatsApp Us
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToBooking();
            }}
            className="btn btn-secondary hover-lift"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Add hover effect for card overlay */}
      <style jsx>{`
        .card:hover .card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Services;

