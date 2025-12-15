import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Star, Check } from 'lucide-react';
import { openWhatsApp, createProductEnquiry } from '../../utils/whatsappUtils';

const BestSellers = () => {
    // Select specific products as best sellers
    const bestSellers = PRODUCTS.filter(product =>
        ['water-lily', 'aqua-mars', 'aqua-xl'].includes(product.id)
    );

    const handleEnquire = (product) => {
        const message = createProductEnquiry(product);
        openWhatsApp(message);
    };

    return (
        <section className="section particle-bg" style={{ background: 'var(--surface-alt)', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <div className="enquiry-badge" style={{ marginBottom: '1rem' }}>
                        ⭐ Top Rated
                    </div>
                    <h2 className="heading-primary text-gradient-vibrant" style={{ marginBottom: '1rem' }}>Our Best Sellers</h2>
                    <p className="section-description">
                        Discover our most popular water purification solutions loved by thousands of families.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {bestSellers.map((product, index) => (
                        <div
                            key={product.id}
                            className="card hover-lift animate-slide-up"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                animationDelay: `${index * 0.15}s`,
                                position: 'relative'
                            }}
                        >
                            <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    className="hover-scale-large"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'var(--gradient-accent)',
                                    color: 'white',
                                    padding: '0.35rem 0.85rem',
                                    borderRadius: '20px',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.5)',
                                    animation: 'pulse-scale 2s ease-in-out infinite'
                                }}>
                                    ⭐ Best Seller
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark)' }}>{product.name}</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < Math.floor(product.rating) ? "#fbbf24" : "none"}
                                            color={i < Math.floor(product.rating) ? "#fbbf24" : "#e5e7eb"}
                                        />
                                    ))}
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                                        ({product.rating})
                                    </span>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                        <strong>Features:</strong>
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                                            <li key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--text-light)' }}>
                                                <Check size={14} color="var(--primary)" />
                                                <span>{key}: {Array.isArray(value) ? value.join(', ').substring(0, 30) + '...' : value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Removed Price Display */}

                                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                                    <Link
                                        to="/products"
                                        className="btn btn-secondary hover-scale"
                                        style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', textAlign: 'center' }}
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => handleEnquire(product)}
                                        className="btn-enquire btn-pulse hover-scale"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        Enquire Now
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link to="/products" className="btn btn-primary btn-pulse hover-scale" style={{ padding: '1rem 2.5rem' }}>
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;

