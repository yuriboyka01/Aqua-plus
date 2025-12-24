import React from 'react';
import { Phone, Award, Clock, Users, CheckCircle } from 'lucide-react';
import { scrollToBooking, scrollToAMCPlans } from '../../utils/scrollUtils';

const ServicesHero = () => {
    const handleBookNow = () => {
        scrollToBooking();
    };

    const handleViewPlans = () => {
        scrollToAMCPlans();
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20need%20service', '_blank');
    };

    return (
        <section className="section-premium-bg gradient-mesh" style={{
            paddingTop: '120px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                {/* Main Content */}
                <div className="grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>

                    {/* Left Content */}
                    <div className="animate-slide-up">
                        {/* Premium Badge */}
                        <div className="premium-badge" style={{ marginBottom: '1.5rem' }}>
                            <Award size={18} />
                            <span>Certified Service Excellence</span>
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontSize: '3.5rem',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            fontWeight: '800'
                        }}>
                            Professional Water Solutions at Your Doorstep
                        </h1>

                        {/* Subheadline */}
                        <p className="text-muted" style={{
                            fontSize: '1.25rem',
                            marginBottom: '2.5rem',
                            maxWidth: '550px',
                            lineHeight: '1.7'
                        }}>
                            From expert installation to comprehensive maintenance, we ensure your water purifier delivers pure, healthy water every single day.
                        </p>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={handleBookNow}
                                className="btn btn-primary btn-ripple hover-lift"
                                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                            >
                                Book Service Now
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={handleViewPlans}
                                className="btn btn-secondary hover-lift"
                                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                            >
                                View AMC Plans
                            </button>

                            <button
                                onClick={handleWhatsApp}
                                className="glass-button"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    color: 'var(--primary)'
                                }}
                            >
                                <Phone size={20} />
                                Quick Contact
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border)'
                        }}>
                            <div className="animate-slide-up stagger-1">
                                <div style={{
                                    fontWeight: '800',
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    marginBottom: '0.25rem'
                                }}>
                                    10+
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    Years Experience
                                </div>
                            </div>

                            <div className="animate-slide-up stagger-2">
                                <div style={{
                                    fontWeight: '800',
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    marginBottom: '0.25rem'
                                }}>
                                    500+
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    Happy Customers
                                </div>
                            </div>

                            <div className="animate-slide-up stagger-3">
                                <div style={{
                                    fontWeight: '800',
                                    fontSize: '2rem',
                                    color: 'var(--primary)',
                                    marginBottom: '0.25rem'
                                }}>
                                    60min
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    Avg Response
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="animate-slide-up stagger-2" style={{ position: 'relative' }}>
                        {/* Main Service Image Card */}
                        <div className="card hover-lift" style={{
                            padding: '1.5rem',
                            background: 'white',
                            borderRadius: 'var(--radius-2xl)',
                            transform: 'rotate(-3deg)',
                            boxShadow: 'var(--shadow-xl)'
                        }}>
                            <img
                                src="/images/hero_service.png"
                                alt="Professional RO Service Technician"
                                style={{
                                    width: '100%',
                                    height: '450px',
                                    objectFit: 'cover',
                                    borderRadius: 'var(--radius-xl)'
                                }}
                            />

                            {/* Floating Certification Badge */}
                            <div className="floating-badge glass-card" style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '-30px',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                maxWidth: '250px'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle size={32} color="#166534" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)' }}>
                                        100% Certified
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                        Genuine Parts Only
                                    </div>
                                </div>
                            </div>

                            {/* Floating Service Stats */}
                            <div className="floating-badge glass-card" style={{
                                position: 'absolute',
                                top: '30px',
                                right: '-30px',
                                padding: '1.25rem 1.5rem',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                animationDelay: '1s'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                                    padding: '0.75rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Clock size={24} color="#1e40af" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                                        Same Day Service
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        Available 24/7
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(2, 132, 199, 0.1))',
                            borderRadius: '50%',
                            filter: 'blur(40px)',
                            zIndex: -1
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            width: '200px',
                            height: '200px',
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))',
                            borderRadius: '50%',
                            filter: 'blur(50px)',
                            zIndex: -1
                        }} />
                    </div>
                </div>

                {/* Service Highlights */}
                <div style={{
                    marginTop: '5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem'
                }}>
                    {[
                        { icon: CheckCircle, title: 'Certified Technicians', desc: 'Trained & experienced' },
                        { icon: Award, title: 'Genuine Parts', desc: '100% authentic spares' },
                        { icon: Clock, title: 'Quick Response', desc: 'Usually within 60 min' },
                        { icon: Users, title: 'Trusted by 500+', desc: 'Happy families' }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="card hover-lift animate-slide-up"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'center',
                                animationDelay: `${idx * 0.1}s`,
                                border: '1px solid var(--border)',
                                background: 'white'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '1rem'
                            }}>
                                <div className="service-card-icon" style={{
                                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-lg)',
                                    display: 'inline-flex'
                                }}>
                                    <item.icon size={28} color="var(--primary)" strokeWidth={2} />
                                </div>
                            </div>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                color: 'var(--text-main)'
                            }}>
                                {item.title}
                            </h4>
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                margin: 0
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          .floating-badge {
            position: static !important;
            margin-top: 1rem !important;
          }
          
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
        </section>
    );
};

export default ServicesHero;
