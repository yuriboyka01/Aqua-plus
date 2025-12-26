import React, { useState, useEffect } from 'react';
import { Droplet, Wrench, Shield, TrendingUp, X } from 'lucide-react';

const BLOG_POSTS = [
    {
        id: 1,
        icon: Droplet,
        iconColor: '#0891b2',
        iconBg: '#f0f9ff',
        title: '5 Signs Your RO Membrane Needs Replacement',
        excerpt: 'Learn to identify when your RO membrane is failing. Common signs include increased TDS levels, reduced water flow, and changes in water taste. Regular testing can save you from health risks.',
        readTime: '3 min read',
        fullContent: {
            intro: 'The RO membrane is the heart of your water purifier. It removes 90-95% of dissolved solids, bacteria, and contaminants. However, like all filters, it has a limited lifespan. Here are the key signs that indicate your RO membrane needs immediate replacement.',
            sections: [
                {
                    title: '1. Increased TDS Levels',
                    content: 'If your TDS meter shows readings above 50-100 ppm (when input water is 500+ ppm), your membrane is losing efficiency. A healthy membrane should reduce TDS by 90-95%. We recommend testing TDS monthly.'
                },
                {
                    title: '2. Reduced Water Flow',
                    content: 'A clogged or damaged membrane significantly reduces water output. If filling a glass takes noticeably longer than before, it\'s time for a check. Normal flow rate should be 10-15 liters per hour for home ROs.'
                },
                {
                    title: '3. Changes in Water Taste',
                    content: 'Metallic, salty, or unusual taste indicates contaminants are passing through. Fresh RO water should be tasteless and odorless. Any change in taste warrants immediate inspection.'
                },
                {
                    title: '4. Membrane Age (2+ Years)',
                    content: 'Even with low usage, RO membranes degrade over time. The polymeric structure breaks down, reducing filtration efficiency. Replace every 2-3 years regardless of visual condition.'
                },
                {
                    title: '5. Visible Discoloration',
                    content: 'If you can see your membrane and it appears yellow, brown, or has deposits, it\'s beyond cleaning. Healthy membranes are white/cream colored.'
                }
            ],
            conclusion: 'Don\'t compromise on water safety. If you notice any of these signs, contact Aqua Plus for a free membrane check and genuine replacement parts.',
            cta: 'Book a free membrane check today!'
        }
    },
    {
        id: 2,
        icon: Wrench,
        iconColor: '#f59e0b',
        iconBg: '#fef3c7',
        title: 'RO vs UV vs UF: Which Water Purifier is Best for Madurai?',
        excerpt: 'Madurai water has high TDS (500-2000 ppm). RO is essential for removing dissolved solids, while UV kills bacteria. Learn which combination works best for your area and water source.',
        readTime: '5 min read',
        fullContent: {
            intro: 'Choosing the right water purifier in Madurai depends on your water source (corporation, borewell, or tanker) and TDS levels. Here\'s a comprehensive comparison to help you decide.',
            sections: [
                {
                    title: 'Understanding Madurai\'s Water Quality',
                    content: 'Corporation water: 300-600 TDS | Borewell water: 800-2000 TDS | Tanker water: Variable (500-1500 TDS). Most areas in Madurai, especially Thirunagar, Mattuthavani, and K.K. Nagar, have high TDS levels requiring RO purification.'
                },
                {
                    title: 'RO (Reverse Osmosis) - Best for High TDS',
                    content: 'Removes dissolved salts, heavy metals, fluoride, and arsenic. Essential when TDS > 300 ppm. Uses a semi-permeable membrane at 0.0001 micron. Reduces TDS by 90-95%. Best choice for Madurai\'s groundwater.'
                },
                {
                    title: 'UV (Ultraviolet) - Best for Bacteria',
                    content: 'Kills 99.99% of bacteria, viruses, and microorganisms using UV-C light. Does NOT remove dissolved solids or chemicals. Ideal for low TDS water with bacterial contamination. Used as an add-on to RO systems.'
                },
                {
                    title: 'UF (Ultrafiltration) - Chemical-Free Option',
                    content: 'Removes bacteria and cysts without electricity. Cannot remove dissolved solids. Best for corporation water with TDS < 200 ppm. Not suitable for most Madurai areas due to high TDS.'
                },
                {
                    title: 'Our Recommendation for Madurai',
                    content: 'For most Madurai homes: RO + UV + UF combination. This ensures complete protection against dissolved solids, bacteria, and viruses. For corporation water areas: RO + UV is sufficient.'
                }
            ],
            conclusion: 'The best purifier depends on your specific water source. We offer free water testing to determine the exact TDS and recommend the most suitable purifier for your home.',
            cta: 'Get free water testing today!'
        }
    },
    {
        id: 3,
        icon: Shield,
        iconColor: '#10b981',
        iconBg: '#dcfce7',
        title: 'How to Choose the Right Capacity RO for Your Home',
        excerpt: 'Family of 4? Need 10-12L tank. Larger families or offices need 25-100 LPH industrial units. Calculate based on daily consumption, peak usage times, and water source TDS levels.',
        readTime: '4 min read',
        fullContent: {
            intro: 'Selecting the right RO capacity is crucial - too small means waiting for water, too large means unnecessary expense. Here\'s how to calculate the perfect size for your needs.',
            sections: [
                {
                    title: 'Understanding RO Capacity Units',
                    content: 'Tank Capacity (Liters): Storage in the built-in tank. LPH (Liters Per Hour): Production rate of purified water. For homes, tank capacity matters more. For commercial use, LPH is the key metric.'
                },
                {
                    title: 'Capacity Guide by Family Size',
                    content: '1-2 members: 7-8L tank (8-10 LPH) | 3-4 members: 10-12L tank (12-15 LPH) | 5-6 members: 12-15L tank (15-20 LPH) | 7+ members: 15-20L tank or commercial unit (25+ LPH)'
                },
                {
                    title: 'Factor in Water Usage',
                    content: 'Drinking: 2-3L per person/day | Cooking: 3-5L per day | Morning rush hours need higher tank capacity. Calculate: (Members × 3L drinking) + 5L cooking = Daily minimum requirement.'
                },
                {
                    title: 'Consider Input Water Quality',
                    content: 'Higher TDS = Lower RO efficiency = More reject water. For 1500+ TDS water, choose 20-30% higher capacity. Also consider: power cuts (larger tank = more backup), summer consumption increase.'
                },
                {
                    title: 'Commercial/Office Requirements',
                    content: '10-20 employees: 25-50 LPH industrial unit | 20-50 employees: 50-100 LPH unit | 50+ employees: 100-250 LPH plant. We specialize in industrial RO installations for offices and factories.'
                }
            ],
            conclusion: 'Still confused? Our experts can visit your home, assess your needs, and recommend the perfect capacity RO system with a free demonstration.',
            cta: 'Schedule a free home assessment!'
        }
    },
    {
        id: 4,
        icon: TrendingUp,
        iconColor: '#8b5cf6',
        iconBg: '#f5f3ff',
        title: 'AMC vs Per-Service: Which is More Cost-Effective?',
        excerpt: 'Annual Maintenance Contracts start at ₹2,500/year. Compare with individual service costs (₹500-₹1500 per visit). AMC includes filter changes, priority service, and peace of mind.',
        readTime: '3 min read',
        fullContent: {
            intro: 'Should you opt for an Annual Maintenance Contract or pay for each service visit? Let\'s break down the costs and benefits to help you make an informed decision.',
            sections: [
                {
                    title: 'Per-Service Cost Breakdown',
                    content: 'Service visit: ₹300-₹500 | Sediment filter: ₹150-₹250 | Carbon filters: ₹400-₹600 | RO membrane: ₹2,000-₹3,500 | UV lamp: ₹800-₹1,200. Average annual cost with 2-3 services: ₹3,000-₹5,000.'
                },
                {
                    title: 'AMC Package Benefits',
                    content: 'Basic AMC (₹2,500/year): 3 services, all sediment and carbon filters included, labor free. Premium AMC (₹4,500/year): Includes RO membrane, unlimited services, priority response within 2 hours.'
                },
                {
                    title: 'Cost Comparison',
                    content: 'Without AMC: ₹4,500-₹6,000/year (with membrane change every 2 years). With Premium AMC: ₹4,500/year flat + membrane included. Savings: ₹500-₹1,500/year + zero surprise costs.'
                },
                {
                    title: 'Hidden Benefits of AMC',
                    content: '1. Priority service - 2-hour response time | 2. Genuine spare parts guaranteed | 3. Regular preventive maintenance | 4. No surprise repair bills | 5. Extended equipment lifespan'
                },
                {
                    title: 'Our Recommendation',
                    content: 'For ROs older than 2 years: Premium AMC is highly recommended. For new ROs: Basic AMC for first 2 years, then upgrade. For commercial units: Custom AMC plans available with SLA guarantees.'
                }
            ],
            conclusion: 'AMC provides peace of mind and consistent water quality. With our plans, you never have to worry about unexpected breakdowns or service delays.',
            cta: 'View our AMC plans!'
        }
    }
];

const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = '';
        setTimeout(() => setSelectedPost(null), 300);
    };

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <section className="section-padding" style={{ background: '#f8fafc' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: '#dcfce7',
                        color: '#166534',
                        borderRadius: '99px',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Expert Tips
                    </div>
                    <h2 style={{
                        fontSize: '2.25rem',
                        marginBottom: '0.75rem',
                        color: '#0f172a'
                    }}>
                        Water Purifier Care & Maintenance Guide
                    </h2>
                    <p style={{
                        color: '#64748b',
                        fontSize: '1.0625rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.7'
                    }}>
                        Expert insights and tips from 10+ years of RO service experience in Madurai
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article
                            key={post.id}
                            className="card"
                            onClick={() => openModal(post)}
                            style={{
                                padding: '2rem',
                                borderLeft: `4px solid ${post.iconColor}`,
                                cursor: 'pointer',
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderLeftWidth: '4px',
                                borderLeftColor: post.iconColor,
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '0.75rem',
                                background: post.iconBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                <post.icon size={28} color={post.iconColor} strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#0f172a',
                                marginBottom: '0.875rem',
                                lineHeight: '1.4'
                            }}>
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p style={{
                                color: '#64748b',
                                fontSize: '0.9375rem',
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
                                borderTop: '1px solid #e2e8f0'
                            }}>
                                <div style={{
                                    fontSize: '0.8125rem',
                                    color: '#64748b',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.375rem'
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {post.readTime}
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: '#0891b2',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.375rem'
                                }}>
                                    Read More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '3.5rem',
                    padding: '2.5rem',
                    background: 'white',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                    <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem', color: '#0f172a' }}>
                        Need Expert Advice on RO Water Purifiers?
                    </h3>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1rem' }}>
                        Our team has 10+ years of experience serving Madurai. Get personalized recommendations!
                    </p>
                    <a
                        href="https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20need%20advice%20on%20choosing%20the%20right%20RO%20purifier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                            color: 'white',
                            border: 'none',
                            fontWeight: 600,
                            padding: '0.875rem 1.5rem'
                        }}
                    >
                        Get Free Consultation
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Modal Overlay */}
            <div
                className={`blog-modal-overlay ${isModalOpen ? 'active' : ''}`}
                onClick={closeModal}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 9998,
                    opacity: isModalOpen ? 1 : 0,
                    visibility: isModalOpen ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease'
                }}
            />

            {/* Modal Content */}
            <div
                className={`blog-modal ${isModalOpen ? 'active' : ''}`}
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: isModalOpen
                        ? 'translate(-50%, -50%) scale(1)'
                        : 'translate(-50%, -50%) scale(0.9)',
                    width: '90%',
                    maxWidth: '800px',
                    maxHeight: '90vh',
                    background: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    zIndex: 9999,
                    overflow: 'hidden',
                    opacity: isModalOpen ? 1 : 0,
                    visibility: isModalOpen ? 'visible' : 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                {selectedPost && (
                    <>
                        {/* Modal Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            background: `linear-gradient(135deg, ${selectedPost.iconBg}, white)`,
                            borderBottom: '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '0.75rem',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}>
                                <selectedPost.icon size={28} color={selectedPost.iconColor} strokeWidth={2} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '0.375rem',
                                    lineHeight: '1.3'
                                }}>
                                    {selectedPost.title}
                                </h2>
                                <div style={{
                                    fontSize: '0.8125rem',
                                    color: '#64748b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.375rem'
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    {selectedPost.readTime}
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'white',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    flexShrink: 0
                                }}
                            >
                                <X size={20} color="#64748b" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{
                            padding: '2rem',
                            maxHeight: 'calc(90vh - 200px)',
                            overflowY: 'auto'
                        }}>
                            {/* Introduction */}
                            <p style={{
                                fontSize: '1.0625rem',
                                color: '#475569',
                                lineHeight: '1.8',
                                marginBottom: '2rem',
                                paddingBottom: '1.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>
                                {selectedPost.fullContent.intro}
                            </p>

                            {/* Sections */}
                            {selectedPost.fullContent.sections.map((section, index) => (
                                <div
                                    key={index}
                                    style={{
                                        marginBottom: '1.75rem',
                                        animation: `fadeSlideIn 0.4s ease ${index * 0.1}s both`
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        color: '#0f172a',
                                        marginBottom: '0.625rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: selectedPost.iconColor
                                        }}></span>
                                        {section.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9375rem',
                                        color: '#64748b',
                                        lineHeight: '1.75',
                                        paddingLeft: '1rem'
                                    }}>
                                        {section.content}
                                    </p>
                                </div>
                            ))}

                            {/* Conclusion */}
                            <div style={{
                                marginTop: '2rem',
                                padding: '1.5rem',
                                background: selectedPost.iconBg,
                                borderRadius: '0.75rem',
                                borderLeft: `4px solid ${selectedPost.iconColor}`
                            }}>
                                <p style={{
                                    fontSize: '0.9375rem',
                                    color: '#475569',
                                    lineHeight: '1.7',
                                    marginBottom: '1rem'
                                }}>
                                    <strong>Conclusion:</strong> {selectedPost.fullContent.conclusion}
                                </p>
                                <a
                                    href="https://wa.me/917010329920"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: selectedPost.iconColor,
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: 600,
                                        padding: '0.75rem 1.25rem',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {selectedPost.fullContent.cta}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 767px) {
                    .blog-modal {
                        width: 95% !important;
                        max-height: 85vh !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default BlogSection;
