import React from 'react';

const About = () => (
    <section id="about" className="section-padding" style={{
        background: 'white',
        position: 'relative'
    }}>
        <div className="container">
            <div className="grid-cols-2 flex-center" style={{ gap: '4rem' }}>
                <div className="animate-fade-in">
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: '#f0f9ff',
                        color: '#0369a1',
                        borderRadius: '99px',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        marginBottom: '1.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        About Us
                    </div>
                    <h2 style={{
                        color: '#0f172a',
                        fontSize: '2.25rem',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Madurai's Most Trusted RO Service Partner
                    </h2>
                    <p style={{
                        marginBottom: '1.25rem',
                        fontSize: '1.0625rem',
                        color: '#475569',
                        lineHeight: '1.7'
                    }}>
                        At Aqua Plus RO Tech, we believe that clean water is the foundation of good health. Established in Thirunagar,
                        we have grown to serve over 500+ families across Madurai with a singular mission: <strong>Zero Compromise on Water Quality.</strong>
                    </p>
                    <p style={{
                        marginBottom: '2.5rem',
                        color: '#475569',
                        lineHeight: '1.7'
                    }}>
                        Whether it's a routine filter change, a complex repair, or a new installation, our certified technicians
                        bring expertise and genuine spare parts to your doorstep. We are not just service providers;
                        we are your water safety guardians.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{
                            background: '#f8fafc',
                            padding: '1.5rem 2rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            minWidth: '130px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontWeight: 700, fontSize: '1.75rem', color: '#0891b2' }}>10+</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>Years Experience</div>
                        </div>
                        <div style={{
                            background: '#f8fafc',
                            padding: '1.5rem 2rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            minWidth: '130px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontWeight: 700, fontSize: '1.75rem', color: '#0891b2' }}>24/7</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>Support Available</div>
                        </div>
                        <div style={{
                            background: '#f8fafc',
                            padding: '1.5rem 2rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #e2e8f0',
                            minWidth: '130px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontWeight: 700, fontSize: '1.75rem', color: '#0891b2' }}>100%</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>Satisfaction</div>
                        </div>
                    </div>
                </div>

                <div style={{
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)'
                }}>
                    <img
                        src="/images/about_team.png"
                        alt="Aqua Plus RO Tech service team"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default About;
