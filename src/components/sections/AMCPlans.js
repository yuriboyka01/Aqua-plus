import React from 'react';
import { CheckCircle, Shield, Star, Clock, Wrench, Phone } from 'lucide-react';

const AMCPlans = () => {
    const openWhatsApp = (planName) => {
        window.open(`https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20want%20to%20subscribe%20to%20the%20${planName}`, '_blank');
    };

    const amcPlans = [
        {
            name: "Silver Plan",
            tagline: "Essential Care",
            price: "₹2,500",
            originalPrice: "₹3,500",
            savings: "Save ₹1,000",
            duration: "/year",
            features: [
                "2 Free Service Visits",
                "Basic Filter Check",
                "TDS Testing Included",
                "Priority Support",
                "Wastage Monitoring",
                "Phone Support 24/7"
            ],
            recommended: false,
            icon: Shield,
            bestFor: "Small families (2-3 members)"
        },
        {
            name: "Gold Plan",
            tagline: "Most Popular Choice",
            price: "₹4,500",
            originalPrice: "₹6,500",
            savings: "Save ₹2,000",
            duration: "/year",
            features: [
                "3 Free Service Visits",
                "All Filters Included",
                "RO Membrane 20% OFF",
                "24hr Emergency Response",
                "Free TDS Testing",
                "Installation Check",
                "Dedicated Technician",
                "WhatsApp Support"
            ],
            recommended: true,
            icon: Star,
            bestFor: "Medium families (4-6 members)",
            popular: true
        },
        {
            name: "Platinum Plan",
            tagline: "Complete Protection",
            price: "₹6,500",
            originalPrice: "₹9,500",
            savings: "Save ₹3,000",
            duration: "/year",
            features: [
                "Unlimited Service Visits",
                "All Spares Included FREE",
                "Monthly TDS Check",
                "Immediate Response",
                "Dedicated Technician",
                "Annual Deep Cleaning",
                "UV Lamp Replacement",
                "100% Genuine Parts"
            ],
            recommended: false,
            icon: Wrench,
            bestFor: "Large families & offices"
        }
    ];

    const benefits = [
        {
            icon: Clock,
            title: "Time Savings",
            description: "No need to remember service dates - we'll remind you!"
        },
        {
            icon: Phone,
            title: "Priority Service",
            description: "AMC customers get fastest response times"
        },
        {
            icon: Shield,
            title: "Peace of Mind",
            description: "Fixed annual cost, no surprise repair bills"
        }
    ];

    return (
        <section id="amc-plans" className="section-padding" style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        💎 Annual Maintenance
                    </div>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        color: '#FFD700',
                        fontWeight: '900'
                    }}>
                        Peace of Mind Plans
                    </h2>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto 2rem'
                    }}>
                        Pay once a year, forget about repair costs. We take care of everything.
                    </p>

                    {/* Most Popular Badge */}
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '99px',
                        color: '#fbbf24',
                        fontWeight: '600',
                        fontSize: '0.875rem'
                    }}>
                        ⭐ Most Popular: Gold Plan - Chosen by 65% of customers
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {amcPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="hover-lift"
                            style={{
                                background: plan.recommended
                                    ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                                    : 'rgba(30, 41, 59, 0.6)',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                border: plan.recommended ? '2px solid #60a5fa' : '1px solid rgba(148, 163, 184, 0.2)',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                                transition: 'all 0.3s ease',
                                boxShadow: plan.recommended
                                    ? '0 20px 60px rgba(59, 130, 246, 0.4)'
                                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                                zIndex: plan.recommended ? 10 : 1
                            }}
                        >
                            {/* Best Value Badge */}
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                    color: '#1e293b',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '99px',
                                    fontSize: '0.75rem',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    boxShadow: '0 4px 20px rgba(251, 191, 36, 0.5)'
                                }}>
                                    ⚡ BEST VALUE
                                </div>
                            )}

                            {/* Plan Icon */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                background: plan.recommended
                                    ? 'rgba(255, 255, 255, 0.2)'
                                    : 'rgba(59, 130, 246, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <plan.icon size={32} color={plan.recommended ? 'white' : '#3b82f6'} strokeWidth={2.5} />
                            </div>

                            {/* Plan Name & Tagline */}
                            <h3 style={{
                                fontSize: '1.75rem',
                                fontWeight: '800',
                                marginBottom: '0.25rem',
                                color: plan.recommended ? 'white' : '#f1f5f9'
                            }}>
                                {plan.name}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: plan.recommended ? 'rgba(255,255,255,0.8)' : '#94a3b8',
                                marginBottom: '1.5rem'
                            }}>
                                {plan.tagline}
                            </p>

                            {/* Pricing */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{
                                        fontSize: '3rem',
                                        fontWeight: '900',
                                        color: plan.recommended ? 'white' : '#fde047'
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: plan.recommended ? 'rgba(255,255,255,0.7)' : '#94a3b8'
                                    }}>
                                        {plan.duration}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{
                                        fontSize: '0.875rem',
                                        color: plan.recommended ? 'rgba(255,255,255,0.6)' : '#64748b',
                                        textDecoration: 'line-through'
                                    }}>
                                        {plan.originalPrice}
                                    </span>
                                    <span style={{
                                        background: plan.recommended ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                                        color: '#22c55e',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '99px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700'
                                    }}>
                                        {plan.savings}
                                    </span>
                                </div>
                            </div>

                            {/* Best For */}
                            <div style={{
                                background: plan.recommended
                                    ? 'rgba(255, 255, 255, 0.1)'
                                    : 'rgba(59, 130, 246, 0.1)',
                                border: `1px solid ${plan.recommended ? 'rgba(255,255,255,0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                marginBottom: '2rem'
                            }}>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: plan.recommended ? 'rgba(255,255,255,0.9)' : '#cbd5e1',
                                    margin: 0,
                                    fontWeight: '600'
                                }}>
                                    👥 Best for: {plan.bestFor}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 2rem 0',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {plan.features.map((feat, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        fontSize: '0.9375rem',
                                        color: plan.recommended ? 'white' : '#e2e8f0'
                                    }}>
                                        <CheckCircle
                                            size={20}
                                            color={plan.recommended ? '#22c55e' : '#3b82f6'}
                                            style={{ flexShrink: 0, marginTop: '2px' }}
                                        />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => openWhatsApp(plan.name)}
                                className="hover-scale"
                                style={{
                                    width: '100%',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: plan.recommended
                                        ? 'white'
                                        : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                                    color: plan.recommended ? '#2563eb' : 'white',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: plan.recommended
                                        ? '0 4px 20px rgba(255, 255, 255, 0.3)'
                                        : '0 4px 20px rgba(59, 130, 246, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Select {plan.name}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    padding: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '3rem'
                }}>
                    <h3 style={{
                        fontSize: '1.75rem',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '2.5rem',
                        fontWeight: '700'
                    }}>
                        Why Choose Our AMC Plans?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    border: '2px solid rgba(59, 130, 246, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem'
                                }}>
                                    <benefit.icon size={32} color="#60a5fa" strokeWidth={2} />
                                </div>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    color: 'white',
                                    marginBottom: '0.5rem',
                                    fontWeight: '700'
                                }}>
                                    {benefit.title}
                                </h4>
                                <p style={{
                                    fontSize: '0.9375rem',
                                    color: '#cbd5e1',
                                    lineHeight: '1.6'
                                }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{
                        color: '#cbd5e1',
                        fontSize: '1.125rem',
                        marginBottom: '1.5rem'
                    }}>
                        🎯 <strong style={{ color: 'white' }}>500+ families in Madurai</strong> trust our AMC plans for worry-free water!
                    </p>
                    <a
                        href="https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20want%20to%20know%20more%20about%20AMC%20plans"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary hover-lift"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1.0625rem'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Need Help Choosing? WhatsApp Us!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AMCPlans;
