import React, { useState } from 'react';
import { Droplet, Filter, Shield, Sparkles, Wind, Zap, Plus } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

const FiltrationProcess = () => {
    const [expandedStage, setExpandedStage] = useState(null);

    const filtrationStages = [
        {
            id: 1,
            name: 'Pre-Sediment Filter',
            subtitle: '5 Micron',
            icon: Filter,
            color: '#f59e0b',
            bgColor: '#fef3c7',
            description: 'Removes large particles like dust, dirt, sand, and rust from water.',
            details: [
                'Filters particles larger than 5 microns',
                'Protects subsequent filters from clogging',
                'Extends life of carbon and RO membrane',
                'Typical lifespan: 6-12 months'
            ],
            removes: ['Dust', 'Dirt', 'Sand', 'Rust', 'Sediment']
        },
        {
            id: 2,
            name: 'Activated Carbon Filter',
            subtitle: 'Pre-Carbon',
            icon: Wind,
            color: '#0891b2',
            bgColor: '#cffafe',
            description: 'Removes chlorine, bad taste, odor, and organic compounds.',
            details: [
                'Adsorbs chlorine and chloramines',
                'Removes volatile organic compounds (VOCs)',
                'Eliminates bad taste and odor',
                'Typical lifespan: 6-12 months'
            ],
            removes: ['Chlorine', 'Bad Odor', 'Bad Taste', 'Organic Compounds', 'VOCs']
        },
        {
            id: 3,
            name: 'Carbon Block Filter',
            subtitle: 'Pre-Treatment',
            icon: Shield,
            color: '#8b5cf6',
            bgColor: '#ede9fe',
            description: 'Further removes fine particles and residual chlorine before RO membrane.',
            details: [
                'Finer filtration than granular carbon',
                'Removes particles down to 1 micron',
                'Protects RO membrane from damage',
                'Typical lifespan: 6-12 months'
            ],
            removes: ['Fine Particles', 'Residual Chlorine', 'Pesticides', 'Herbicides']
        },
        {
            id: 4,
            name: 'RO Membrane',
            subtitle: '0.0001 Micron',
            icon: Droplet,
            color: '#0891b2',
            bgColor: '#e0f2fe',
            description: 'The heart of the system. Removes dissolved salts, heavy metals, bacteria, and viruses.',
            details: [
                'Removes 90-95% of Total Dissolved Solids (TDS)',
                'Filters particles as small as 0.0001 microns',
                'Removes heavy metals (lead, arsenic, mercury)',
                'Eliminates bacteria and viruses',
                'Typical lifespan: 2-3 years'
            ],
            removes: ['Dissolved Salts', 'Heavy Metals', 'Bacteria', 'Viruses', 'Fluoride', 'Arsenic', 'Lead']
        },
        {
            id: 5,
            name: 'Post-Carbon Filter',
            subtitle: 'Taste Enhancement',
            icon: Sparkles,
            color: '#10b981',
            bgColor: '#d1fae5',
            description: 'Enhances taste and removes any residual odors from the storage tank.',
            details: [
                'Polishes water for better taste',
                'Removes any storage tank odors',
                'Final stage of purification',
                'Typical lifespan: 12 months'
            ],
            removes: ['Residual Odors', 'Tank Smell', 'Aftertaste']
        },
        {
            id: 6,
            name: 'UV Filter',
            subtitle: 'Optional',
            icon: Zap,
            color: '#f59e0b',
            bgColor: '#fef3c7',
            description: 'Kills 99.99% of bacteria and viruses using ultraviolet light.',
            details: [
                'UV-C light destroys microorganisms',
                'No chemicals added to water',
                'Effective against bacteria and viruses',
                'Lamp replacement: 12 months'
            ],
            removes: ['Bacteria', 'Viruses', 'Microorganisms', 'E.coli', 'Salmonella']
        },
        {
            id: 7,
            name: 'Mineralizer',
            subtitle: 'Optional',
            icon: Plus,
            color: '#ec4899',
            bgColor: '#fce7f3',
            description: 'Adds essential minerals back to water for health benefits.',
            details: [
                'Adds calcium and magnesium',
                'Balances pH levels (7.0-8.5)',
                'Improves water taste',
                'Maintenance-free for 12 months'
            ],
            removes: []
        }
    ];

    const toggleStage = (id) => {
        setExpandedStage(expandedStage === id ? null : id);
    };

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        Advanced Technology
                    </div>
                    <h2 style={{ color: '#0f172a', fontSize: '2.25rem', marginBottom: '0.75rem' }}>5-7 Stage Advanced Filtration</h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>How we ensure every drop is pure, safe, and healthy.</p>
                </div>

                {/* Filtration Diagram */}
                <div className="card" style={{ padding: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
                    <OptimizedImage
                        src="/images/filtration_diagram.png"
                        alt="5-7 Stage RO Filtration Process Diagram"
                        width={1000}
                        height={1000}
                        objectFit="contain"
                    />
                </div>

                {/* Filtration Stages Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {filtrationStages.map((stage) => {
                        const Icon = stage.icon;
                        const isExpanded = expandedStage === stage.id;

                        return (
                            <div
                                key={stage.id}
                                className="card hover-lift"
                                style={{
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    borderTop: `4px solid ${stage.color}`,
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => toggleStage(stage.id)}
                            >
                                {/* Stage Header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        background: stage.bgColor,
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Icon size={28} color={stage.color} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{
                                                background: stage.color,
                                                color: 'white',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.75rem',
                                                fontWeight: '700'
                                            }}>
                                                {stage.id}
                                            </span>
                                            <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>{stage.name}</h3>
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                            {stage.subtitle}
                                        </div>
                                    </div>
                                </div>

                                {/* Stage Description */}
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                    {stage.description}
                                </p>

                                {/* Removes Tags */}
                                {stage.removes.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                        {stage.removes.slice(0, isExpanded ? stage.removes.length : 3).map((item, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    background: stage.bgColor,
                                                    color: stage.color,
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '99px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                        {!isExpanded && stage.removes.length > 3 && (
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                +{stage.removes.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Expanded Details */}
                                {isExpanded && (
                                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                        <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                                            {stage.details.map((detail, idx) => (
                                                <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Expand/Collapse Indicator */}
                                <div style={{ textAlign: 'center', marginTop: '1rem', color: stage.color, fontSize: '0.875rem', fontWeight: '600' }}>
                                    {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Before & After Comparison */}
                <div className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-dark)' }}>
                        Water Quality: Before & After
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>
                                500-2000
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                TDS Before (ppm)
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Contains dissolved salts, minerals, and contaminants
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10b981', marginBottom: '0.5rem' }}>
                                50-150
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                TDS After (ppm)
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Pure, safe, and healthy drinking water
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '0.5rem', textAlign: 'center' }}>
                        <strong style={{ color: 'var(--primary-dark)' }}>90-95% TDS Reduction</strong>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Removes harmful contaminants while retaining essential minerals
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiltrationProcess;
