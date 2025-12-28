import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Settings, MapPin, ShoppingBag } from 'lucide-react';
import { scrollToBooking, scrollToAMCPlans } from '../../utils/scrollUtils';

const Services = () => {
  const navigate = useNavigate();

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

  const handleViewProducts = () => {
    navigate('/products');
  };

  const services = [
    {
      icon: ShoppingBag,
      title: 'RO Purifier Sales',
      description: 'Buy top-rated RO purifiers at wholesale prices. Domestic & commercial models available with free installation.',
      features: ['Best Market Price', 'Free Installation', '1 Year Warranty'],
      buttonText: 'View Products',
      buttonAction: handleViewProducts,
      highlight: true
    },
    {
      icon: MapPin,
      title: 'Installation',
      description: 'Professional installation by certified technicians. We ensure leakage-free setup with high-quality connectors.',
      features: ['Certified Technicians', 'Leakage-Free Setup', 'Quality Connectors'],
      buttonText: 'Book Install',
      buttonAction: handleBookInstall
    },
    {
      icon: Settings,
      title: 'Maintenance & AMC',
      description: 'Peace of mind with our annual maintenance plans. Includes regular filter checks and quality testing.',
      features: ['Annual Plans', 'Filter Checks', 'TDS Testing'],
      buttonText: 'View Plans',
      buttonAction: handleViewPlans
    },
    {
      icon: Wrench,
      title: 'Smart Repairs',
      description: 'Facing issues? We fix all major brands usually within 60 minutes. 100% genuine spares guarantee.',
      features: ['60 Min Response', 'All Brands', 'Genuine Parts'],
      buttonText: 'Schedule Repair',
      buttonAction: handleScheduleRepair
    }
  ];

  return (
    <section className="section-padding" id="services" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            Our Services
          </div>
          <h2 style={{
            color: '#0f172a',
            marginBottom: '1rem',
            fontSize: '2.25rem'
          }}>
            Expert Solutions for Pure Water
          </h2>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            color: '#64748b'
          }}>
            Comprehensive water purification solutions tailored for your home and office in <strong>Madurai & Thirunagar</strong>.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="card"
              style={{
                padding: '2.5rem 2rem',
                background: 'white',
                border: service.highlight ? '2px solid #0891b2' : '1px solid #e2e8f0',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: '#0891b2',
                  color: 'white',
                  padding: '0.375rem 1rem',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.025em'
                }}>
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                background: service.highlight ? 'linear-gradient(135deg, #0891b2, #0369a1)' : '#f0f9ff',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <service.icon
                  size={28}
                  color={service.highlight ? 'white' : '#0891b2'}
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3 style={{
                marginBottom: '0.875rem',
                fontSize: '1.375rem',
                color: '#0f172a'
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                color: '#64748b',
                fontSize: '0.9375rem'
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
                    color: '#475569'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={service.buttonAction}
                className="btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.9375rem',
                  background: service.highlight ? 'linear-gradient(135deg, #0891b2, #0369a1)' : 'transparent',
                  color: service.highlight ? 'white' : '#0891b2',
                  border: service.highlight ? 'none' : '2px solid #0891b2',
                  fontWeight: 600
                }}
              >
                {service.buttonText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '3rem',
          background: 'white',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '0.75rem',
            color: '#0f172a'
          }}>
            Not sure which service you need?
          </h3>
          <p style={{
            marginBottom: '1.5rem',
            fontSize: '1rem',
            color: '#64748b'
          }}>
            Our experts are here to help. Get a free consultation today!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.open('https://wa.me/917010329920', '_blank')}
              className="btn"
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                fontWeight: 600,
                padding: '0.875rem 1.5rem'
              }}
            >
              WhatsApp Us
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToBooking();
              }}
              className="btn"
              style={{
                background: 'transparent',
                color: '#0891b2',
                border: '2px solid #0891b2',
                fontWeight: 600,
                padding: '0.875rem 1.5rem'
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
