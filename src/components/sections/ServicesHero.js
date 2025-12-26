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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="animate-slide-up order-2 md:order-1">
                        {/* Premium Badge */}
                        <div className="premium-badge mb-6">
                            <Award size={18} />
                            <span>Certified Service Excellence</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                            Professional Water Solutions at Your Doorstep
                        </h1>

                        {/* Subheadline */}
                        <p className="text-muted text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                            From expert installation to comprehensive maintenance, we ensure your water purifier delivers pure, healthy water every single day.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={handleBookNow}
                                className="btn btn-primary btn-ripple hover-lift justify-center"
                                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                            >
                                Book Service Now
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={handleViewPlans}
                                className="btn btn-secondary hover-lift justify-center"
                                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
                            >
                                View AMC Plans
                            </button>

                            <button
                                onClick={handleWhatsApp}
                                className="glass-button justify-center sm:justify-start"
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
                        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200">
                            <div className="animate-slide-up stagger-1">
                                <div className="font-extrabold text-2xl md:text-3xl text-cyan-600 mb-1">
                                    10+
                                </div>
                                <div className="text-sm text-slate-500">
                                    Years Experience
                                </div>
                            </div>

                            <div className="animate-slide-up stagger-2">
                                <div className="font-extrabold text-2xl md:text-3xl text-cyan-600 mb-1">
                                    500+
                                </div>
                                <div className="text-sm text-slate-500">
                                    Happy Customers
                                </div>
                            </div>

                            <div className="animate-slide-up stagger-3">
                                <div className="font-extrabold text-2xl md:text-3xl text-cyan-600 mb-1">
                                    60min
                                </div>
                                <div className="text-sm text-slate-500">
                                    Avg Response
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="animate-slide-up stagger-2 relative order-1 md:order-2 mb-12 md:mb-0">
                        {/* Main Service Image Card */}
                        <div className="card hover-lift relative z-10 bg-white p-6 rounded-3xl transform -rotate-2 md:-rotate-3 shadow-xl">
                            <img
                                src="/images/hero_service.png"
                                alt="Professional RO Service Technician"
                                className="w-full h-[280px] md:h-[450px] object-cover rounded-2xl"
                            />

                            {/* Floating Certification Badge - Mobile Optimized */}
                            <div className="md:absolute md:bottom-8 md:-left-8 mt-4 md:mt-0 glass-card p-4 md:p-6 rounded-2xl flex items-center gap-4 max-w-full md:max-w-xs shadow-lg bg-white/90 backdrop-blur-sm">
                                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 md:p-4 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle size={28} className="text-green-700" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-base text-slate-900">
                                        100% Certified
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        Genuine Parts Only
                                    </div>
                                </div>
                            </div>

                            {/* Floating Service Stats - Mobile Optimized */}
                            <div className="md:absolute md:top-8 md:-right-8 mt-4 md:mt-0 glass-card p-4 md:p-6 rounded-2xl flex items-center gap-4 shadow-lg bg-white/90 backdrop-blur-sm animation-delay-1000">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={24} className="text-blue-700" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <div className="font-bold text-base text-slate-900">
                                        Same Day Service
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        Available 24/7
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-60 md:h-60 bg-amber-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>

                {/* Service Highlights */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: CheckCircle, title: 'Certified Technicians', desc: 'Trained & experienced' },
                        { icon: Award, title: 'Genuine Parts', desc: '100% authentic spares' },
                        { icon: Clock, title: 'Quick Response', desc: 'Usually within 60 min' },
                        { icon: Users, title: 'Trusted by 500+', desc: 'Happy families' }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="card hover-lift animate-slide-up bg-white p-6 text-center border border-slate-200"
                            style={{
                                animationDelay: `${idx * 0.1}s`,
                            }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl inline-flex">
                                    <item.icon size={28} className="text-cyan-600" strokeWidth={2} />
                                </div>
                            </div>
                            <h4 className="text-base font-bold mb-2 text-slate-900">
                                {item.title}
                            </h4>
                            <p className="text-sm text-slate-500 m-0">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;

