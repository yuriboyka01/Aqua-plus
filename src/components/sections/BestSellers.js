import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Star, Check } from 'lucide-react';
import { openWhatsApp, createProductEnquiry } from '../../utils/whatsappUtils';

const BestSellers = () => {
    const bestSellers = PRODUCTS.filter(product =>
        ['water-lily', 'aqua-mars', 'aqua-xl'].includes(product.id)
    );

    const handleEnquire = (product) => {
        const message = createProductEnquiry(product);
        openWhatsApp(message);
    };

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: '#fef3c7',
                        color: '#b45309',
                        borderRadius: '99px',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Top Rated
                    </div>
                    <h2 style={{
                        color: '#0f172a',
                        marginBottom: '1rem',
                        fontSize: '2.25rem'
                    }}>
                        Our Best Sellers
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.0625rem',
                        lineHeight: '1.7'
                    }}>
                        Discover our most popular water purification solutions loved by thousands of families.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: '#0891b2',
                                    color: 'white',
                                    padding: '0.375rem 0.875rem',
                                    borderRadius: '99px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600
                                }}>
                                    Best Seller
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '0.5rem'
                                }}>
                                    {product.name}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                                            color={i < Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                                        />
                                    ))}
                                    <span style={{ fontSize: '0.875rem', color: '#64748b', marginLeft: '0.5rem' }}>
                                        ({product.rating})
                                    </span>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{
                                        fontSize: '0.8125rem',
                                        color: '#64748b',
                                        marginBottom: '0.5rem',
                                        fontWeight: 600
                                    }}>
                                        Key Features:
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                                            <li key={key} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '0.8125rem',
                                                marginBottom: '0.375rem',
                                                color: '#475569'
                                            }}>
                                                <Check size={14} color="#0891b2" />
                                                <span>{key}: {Array.isArray(value) ? value.join(', ').substring(0, 30) + '...' : value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                                    <Link
                                        to="/products"
                                        className="btn"
                                        style={{
                                            padding: '0.75rem 1rem',
                                            fontSize: '0.875rem',
                                            textAlign: 'center',
                                            background: 'transparent',
                                            color: '#0891b2',
                                            border: '1px solid #e2e8f0',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            display: 'block'
                                        }}
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => handleEnquire(product)}
                                        className="btn"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.75rem 1rem',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        Enquire Now
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link
                        to="/products"
                        className="btn"
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'linear-gradient(135deg, #0891b2, #0369a1)',
                            color: 'white',
                            border: 'none',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        View All Products
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
