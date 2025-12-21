import React from 'react';
import { Droplet, Wrench, Shield, TrendingUp } from 'lucide-react';

const BLOG_POSTS = [
    {
        id: 1,
        icon: Droplet,
        iconColor: '#0ea5e9',
        iconBg: '#eff6ff',
        title: '5 Signs Your RO Membrane Needs Replacement',
        excerpt: 'Learn to identify when your RO membrane is failing. Common signs include increased TDS levels, reduced water flow, and changes in water taste. Regular testing can save you from health risks.',
        keywords: 'RO membrane replacement, water purifier maintenance, TDS levels',
        readTime: '3 min read'
    },
    {
        id: 2,
        icon: Wrench,
        iconColor: '#f59e0b',
        iconBg: '#fff7ed',
        title: 'RO vs UV vs UF: Which Water Purifier is Best for Madurai?',
        excerpt: 'Madurai water has high TDS (500-2000 ppm). RO is essential for removing dissolved solids, while UV kills bacteria. Learn which combination works best for your area and water source.',
        keywords: 'RO purifier Madurai, water purification technology, TDS removal',
        readTime: '5 min read'
    },
    {
        id: 3,
        icon: Shield,
        iconColor: '#10b981',
        iconBg: '#f0fdf4',
        title: 'How to Choose the Right Capacity RO for Your Home',
        excerpt: 'Family of 4? Need 10-12L tank. Larger families or offices need 25-100 LPH industrial units. Calculate based on daily consumption, peak usage times, and water source TDS levels.',
        keywords: 'RO capacity guide, home water purifier, industrial RO plant',
        readTime: '4 min read'
    },
    {
        id: 4,
        icon: TrendingUp,
        iconColor: '#8b5cf6',
        iconBg: '#faf5ff',
        title: 'AMC vs Per-Service: Which is More Cost-Effective?',
        excerpt: 'Annual Maintenance Contracts start at ₹2,500/year. Compare with individual service costs (₹500-₹1500 per visit). AMC includes filter changes, priority service, and peace of mind.',
        keywords: 'RO AMC plans Madurai, water purifier service cost, annual maintenance',
        readTime: '3 min read'
    }
];

const BlogSection = () => {
    return (
        <section className="section-padding container" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    💡 Expert Tips
                </div>
                <h2 style={{
                    fontSize: '2.75rem',
                    marginBottom: '1rem',
                    color: 'var(--text-main)',
                    fontWeight: '800'
                }}>
                    Water Purifier Care & Maintenance Guide
                </h2>
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.125rem',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    Expert insights and tips from 10+ years of RO service experience in Madurai
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid-cols-2" style={{ gap: '2rem' }}>
                {BLOG_POSTS.map((post, index) => (
                    <article
                        key={post.id}
                        className="card hover-lift"
                        style={{
                            padding: '2rem',
                            borderLeft: `4px solid ${post.iconColor}`,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Icon */}
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            background: post.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <post.icon size={32} color={post.iconColor} strokeWidth={2} />
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '1.375rem',
                            fontWeight: '700',
                            color: 'var(--text-main)',
                            marginBottom: '1rem',
                            lineHeight: '1.4'
                        }}>
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                            marginBottom: '1.5rem',
                            flex: 1
                        }}>
                            {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '1rem',
                            borderTop: '1px solid #e5e7eb'
                        }}>
                            <div style={{
                                fontSize: '0.875rem',
                                color: post.iconColor,
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                {post.readTime}
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--primary)',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Read More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* SEO Keywords (hidden) */}
                        <meta name="keywords" content={post.keywords} />
                    </article>
                ))}
            </div>

            {/* Bottom CTA */}
            <div style={{
                textAlign: 'center',
                marginTop: '4rem',
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                borderRadius: 'var(--radius-2xl)',
                border: '2px solid #bfdbfe'
            }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    Need Expert Advice on RO Water Purifiers?
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                    Our team has 10+ years of experience serving Madurai. Get personalized recommendations!
                </p>
                <a
                    href="https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20need%20advice%20on%20choosing%20the%20right%20RO%20purifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hover-lift"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    Get Free Consultation
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default BlogSection;
