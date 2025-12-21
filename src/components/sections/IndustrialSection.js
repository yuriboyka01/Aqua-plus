import React from 'react';
import { PRODUCTS } from '../../data/products';
import { Factory, Zap, Settings, Truck } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsappUtils';

const IndustrialSection = () => {
    // Filter for Industrial RO plants (capacity >= 25 LPH)
    const industrialProducts = PRODUCTS.filter(product => product.capacityLph >= 25).sort((a, b) => a.capacityLph - b.capacityLph);

    const handleEnquire = (product) => {
        const message = `Hi, I'm interested in the ${product.capacityLph} LPH Industrial RO Plant (${product.stages} Stage). Please provide more details and pricing.`;
        openWhatsApp(message);
    };

    return (
        <section className="section" id="industrial-solutions" style={{ background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--primary-light)',
                        color: 'var(--primary-dark)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        marginBottom: '1rem',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        <Factory size={18} />
                        <span>Commercial & Industrial Grade</span>
                    </div>
                    <h2 className="heading-primary">Industrial RO Systems</h2>
                    <p className="section-description">
                        High-capacity water treatment solutions for factories, offices, schools, and hospitals.
                        From 25 LPH to 2000 LPH, we have efficient solutions for every scale.
                    </p>
                </div>

                <div className="grid">
                    {industrialProducts.map((product) => (
                        <div key={product.id} className="card" style={{ padding: '2rem', transition: 'all 0.3s ease', borderTop: '4px solid var(--primary)' }}>
                            {/* Product Image */}
                            <div style={{
                                width: '100%',
                                height: '280px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                background: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #e5e7eb'
                            }}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        padding: '0.5rem'
                                    }}
                                    loading="lazy"
                                />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                                {product.capacityLph} LPH Plant
                            </h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                Suitable for {product.capacityLph < 100 ? 'small offices & cafes' : product.capacityLph < 500 ? 'schools & restaurants' : 'large factories & bottling plants'}.
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                                        <Zap size={16} /> Power
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{product.specs.Power}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                                        <Truck size={16} /> Delivery
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{product.stock > 0 ? 'Ready Stock' : 'Made to Order'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                                        <Settings size={16} /> Stages
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{product.stages} Stage Purification</span>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button
                                    className="btn btn-outline hover-scale"
                                    style={{ padding: '0.5rem 1rem', width: '100%' }}
                                    onClick={() => handleEnquire(product)}
                                >
                                    Enquire
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrialSection;
