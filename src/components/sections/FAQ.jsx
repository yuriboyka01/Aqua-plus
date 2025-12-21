import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
    {
        question: "What areas do you cover in Madurai for RO service?",
        answer: "We provide RO service across all areas of Madurai including Thirunagar, Anna Nagar, K.Pudur, Sellur, Pasumalai, Nagamalai, Vilangudi, Goripalayam, Avaniyapuram, and surrounding areas. We offer same-day service in most locations within city limits."
    },
    {
        question: "How much does RO installation cost in Madurai?",
        answer: "RO installation costs vary based on the model and requirements. Basic residential RO installation starts from ₹6,500 including the purifier. We offer models ranging from ₹6,500 to ₹11,500 for home use. Industrial RO plants (25 LPH to 2000 LPH) are priced based on capacity and specifications. Contact us for a free quote!"
    },
    {
        question: "What is included in your Annual Maintenance Contract (AMC)?",
        answer: "Our AMC plans include: Regular filter replacements, periodic TDS testing, technician visits (2-4 times per year depending on plan), priority service, discounts on spare parts, and free service calls. Plans start from ₹2,500/year for basic coverage up to ₹6,500/year for comprehensive coverage including all spare parts."
    },
    {
        question: "How often should I change RO filters?",
        answer: "Sediment and carbon filters should be replaced every 6-9 months. RO membrane typically lasts 2-3 years depending on water quality and usage. UV lamp should be changed annually. We send reminders to our AMC customers and can schedule replacements at the right time."
    },
    {
        question: "Do you service all brands of RO water purifiers?",
        answer: "Yes! We service all major brands including Kent, Aquaguard, Pureit, Livpure, Blue Star, HUL, and all local brands. We use genuine spare parts and our technicians are trained to handle all models. We also sell and install our own Aqua Plus branded purifiers with excellent quality."
    },
    {
        question: "How long does RO repair take?",
        answer: "Most RO repairs are completed within 1-2 hours on the same visit. For simple issues like filter changes or minor leaks, we fix it immediately. If spare parts need ordering, it typically takes 1-2 days. We strive for 60-minute service response in Thirunagar and nearby areas."
    },
    {
        question: "What is the difference between 7-stage, 8-stage, and 10-stage purifiers?",
        answer: "More stages mean more purification layers: 7-stage includes sediment filter, pre-carbon, RO membrane, UV, UF, post-carbon, and mineralizer. 8-stage adds copper-zinc cartridge for added health benefits. 10-stage includes alkaline filter, TDS controller, and extra mineral enhancers for taste improvement. We recommend based on your water TDS level."
    },
    {
        question: "Why is my RO water purifier leaking?",
        answer: "Common causes of RO leakage: loose pipe connections, damaged O-rings, cracked water tank, faulty solenoid valve, or worn-out RO membrane. Most leaks can be fixed within an hour by our technicians. Don't delay as water damage can affect electrical components. Call us immediately for emergency repairs!"
    },
    {
        question: "What TDS level is safe for drinking water?",
        answer: "Ideal TDS for drinking water is 50-150 ppm. Below 50 may lack essential minerals, above 300 may taste bad and cause health issues. Madurai water TDS ranges from 500-2000 ppm, so RO purification is essential. We provide free TDS testing with every service visit to ensure your water quality."
    },
    {
        question: "Do you provide industrial RO plants for offices and factories?",
        answer: "Yes! We supply and install commercial/industrial RO plants from 25 LPH to 2000 LPH capacity. Suitable for offices, schools, restaurants, hospitals, factories, and bottling plants. All plants come with stainless steel frames, automatic operation, and 1-year warranty. We also provide AMC for industrial units."
    },
    {
        question: "How can I check if my RO membrane needs replacement?",
        answer: "Signs you need RO membrane replacement: water tastes salty or different, TDS reading increased significantly (above 50 ppm), water flow reduced drastically, or it's been 2-3 years since last change. We offer free water testing - bring a water sample or call us for home testing service."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Cash, Google Pay, PhonePe, Paytm, and all UPI payments. For AMC plans and products, we also accept card payments. No hidden charges - we provide transparent quotations before starting any work."
    },
    {
        question: "Is installation included in the product price?",
        answer: "Yes, all our RO purifiers come with free installation within Madurai city limits. Installation includes: wall mounting/countertop setup, pipe connections, initial filter setup, and basic plumbing (up to 10 feet). Extra charges apply only for complex installations or locations beyond city limits."
    },
    {
        question: "How long is the warranty on water purifiers?",
        answer: "Our Aqua Plus purifiers come with 1-year manufacturer warranty on all parts (excluding filters and membranes). Extended warranty up to 10 years available on select models. Branded purifiers like Kent, Aquaguard have their respective company warranties which we honor for service and repairs."
    },
    {
        question: "Can I get a free water quality test?",
        answer: "Absolutely! We provide FREE TDS testing and water quality assessment for all customers in Madurai. Our technician will visit your location, test the water, and recommend the best purification solution based on your water condition, family size, and budget. No obligation - call us today!"
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* FAQ Schema for Rich Snippets */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": FAQ_DATA.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>

            <section id="faq" className="section-padding container" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        ❓ Got Questions?
                    </div>
                    <h2 style={{
                        fontSize: '2.75rem',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.125rem',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Everything you need to know about RO water purifiers, installation, repair, and maintenance in Madurai
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {FAQ_DATA.map((faq, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                marginBottom: '1rem',
                                overflow: 'hidden',
                                border: '1px solid #e5e7eb',
                                transition: 'all 0.3s ease',
                                background: openIndex === index ? 'linear-gradient(135deg, #eff6ff, #dbeafe)' : 'white'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    gap: '1rem'
                                }}
                                aria-expanded={openIndex === index}
                            >
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    color: openIndex === index ? 'var(--primary)' : 'var(--text-main)',
                                    margin: 0,
                                    flex: 1
                                }}>
                                    {faq.question}
                                </h3>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: openIndex === index ? 'var(--primary)' : '#e5e7eb',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    flexShrink: 0
                                }}>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} color="white" />
                                    ) : (
                                        <ChevronDown size={20} color="#666" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div
                                    style={{
                                        padding: '0 1.5rem 1.5rem 1.5rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '1rem',
                                        lineHeight: '1.8',
                                        animation: 'fadeIn 0.3s ease-in'
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '3rem',
                    background: 'white',
                    borderRadius: 'var(--radius-2xl)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    maxWidth: '700px',
                    margin: '4rem auto 0'
                }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        Still have questions?
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                        Our expert team is here to help! Get instant answers via WhatsApp or call us directly.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20have%20a%20question%20about%20RO%20service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary hover-lift"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                        <a
                            href="tel:+917010329920"
                            className="btn btn-secondary hover-lift"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Call: 7010329920
                        </a>
                    </div>
                </div>

                {/* Add fadeIn animation */}
                <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
            </section>
        </>
    );
};

export default FAQ;
