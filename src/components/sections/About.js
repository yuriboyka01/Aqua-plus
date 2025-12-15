import React from 'react';

const About = () => (
    <section id="about" className="section-padding container" style={{
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)',
        position: 'relative',
        overflow: 'hidden'
    }}>
        {/* Decorative elements */}
        <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent)',
            borderRadius: '50%',
            filter: 'blur(60px)'
        }} />

        <div className="grid-cols-2 flex-center" style={{ position: 'relative', zIndex: 1 }}>
            <div className="animate-fade-in">
                <h2 className="text-gradient-vibrant">About Aqua Plus RO Tech</h2>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#7c2d12' }}>
                    Madurai's Most Trusted RO Service Partner
                </h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#78350f' }}>
                    At Aqua Plus RO Tech, we believe that clean water is the foundation of good health. Established in Thirunagar,
                    we have grown to serve over 500+ families across Madurai with a singular mission: **Zero Compromise on Water Quality.**
                </p>
                <p className="text-muted" style={{ marginBottom: '2rem', color: '#78350f' }}>
                    Whether it's a routine filter change, a complex repair, or a new installation, our certified technicians
                    bring expertise and genuine spare parts to your doorstep. We are not just service providers;
                    we are your water safety guardians.
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                        color: 'white',
                        minWidth: '120px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: '1.8rem' }}>10+ Years</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Experience</div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 8px 20px rgba(240, 147, 251, 0.4)',
                        color: 'white',
                        minWidth: '120px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: '1.8rem' }}>24/7</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Support</div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: '0 8px 20px rgba(79, 172, 254, 0.4)',
                        color: 'white',
                        minWidth: '120px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: '1.8rem' }}>100%</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Satisfaction</div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden', border: 'none', transform: 'rotate(2deg)' }}>
                <img
                    src="/images/about_team.png"
                    alt="Aqua Plus RO Tech service team"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </div>
    </section>
);

export default About;
