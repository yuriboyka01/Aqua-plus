import React, { useState, useEffect } from 'react';
import { Droplet, Wrench, Shield, TrendingUp, X, Clock, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
    {
        id: 1,
        icon: Droplet,
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
        borderColor: 'border-l-cyan-600',
        title: '5 Signs Your RO Membrane Needs Replacement',
        excerpt: 'Learn to identify when your RO membrane is failing. Common signs include increased TDS levels, reduced water flow, and changes in water taste.',
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
            cta: 'Book a free membrane check today!',
            ctaLink: 'https://wa.me/917010329920?text=I%20need%20a%20free%20RO%20membrane%20check'
        }
    },
    {
        id: 2,
        icon: Wrench,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-50',
        borderColor: 'border-l-amber-500',
        title: 'RO vs UV vs UF: Which Water Purifier is Best for Madurai?',
        excerpt: 'Madurai water has high TDS (500-2000 ppm). RO is essential for removing dissolved solids, while UV kills bacteria. Learn which combination works best.',
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
            cta: 'Get free water testing today!',
            ctaLink: 'https://wa.me/917010329920?text=I%20want%20free%20water%20testing'
        }
    },
    {
        id: 3,
        icon: Shield,
        iconColor: 'text-emerald-500',
        iconBg: 'bg-emerald-50',
        borderColor: 'border-l-emerald-500',
        title: 'How to Choose the Right Capacity RO for Your Home',
        excerpt: 'Family of 4? Need 10-12L tank. Larger families or offices need 25-100 LPH industrial units. Calculate based on daily consumption and peak usage.',
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
            cta: 'Schedule a free home assessment!',
            ctaLink: 'https://wa.me/917010329920?text=I%20need%20help%20choosing%20RO%20capacity'
        }
    },
    {
        id: 4,
        icon: TrendingUp,
        iconColor: 'text-violet-500',
        iconBg: 'bg-violet-50',
        borderColor: 'border-l-violet-500',
        title: 'AMC vs Per-Service: Which is More Cost-Effective?',
        excerpt: 'Annual Maintenance Contracts start at ₹2,500/year. Compare with individual service costs. AMC includes filter changes and priority service.',
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
            cta: 'View our AMC plans!',
            ctaLink: '/services'
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

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
                        Expert Tips
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Water Purifier Care & Maintenance Guide
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Expert insights and tips from 10+ years of RO service experience in Madurai
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {BLOG_POSTS.map((post) => (
                        <article
                            key={post.id}
                            onClick={() => openModal(post)}
                            className={`group bg-white rounded-2xl p-8 border border-slate-200 border-l-4 ${post.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${post.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <post.icon size={28} className={post.iconColor} strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-slate-500 text-base leading-relaxed mb-6 flex-grow">
                                {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex justify-between items-center pt-5 border-t border-slate-100 mt-auto">
                                <div className="text-sm text-slate-400 font-medium flex items-center gap-2">
                                    <Clock size={16} />
                                    {post.readTime}
                                </div>
                                <div className="text-sm text-cyan-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Read More
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm text-center mt-14 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Need Expert Advice on RO Water Purifiers?
                    </h3>
                    <p className="text-slate-500 mb-6 text-base">
                        Our team has 10+ years of experience serving Madurai. Get personalized recommendations!
                    </p>
                    <a
                        href="https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20need%20advice%20on%20choosing%20the%20right%20RO%20purifier"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Get Free Consultation
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* Modal Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ${isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'}`}
            >
                {selectedPost && (
                    <>
                        {/* Modal Header */}
                        <div className={`p-6 md:p-8 bg-gradient-to-br from-white to-slate-50 border-b border-slate-100 flex items-start gap-5`}>
                            <div className={`w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100`}>
                                <selectedPost.icon size={28} className={selectedPost.iconColor} strokeWidth={2} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                                    {selectedPost.title}
                                </h2>
                                <div className="text-sm text-slate-500 flex items-center gap-2">
                                    <Clock size={14} />
                                    {selectedPost.readTime}
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors flex-shrink-0"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 pb-6 border-b border-slate-100 font-medium">
                                {selectedPost.fullContent.intro}
                            </p>

                            <div className="space-y-8">
                                {selectedPost.fullContent.sections.map((section, index) => (
                                    <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                                            <span className={`w-2 h-2 rounded-full ${selectedPost.iconColor.replace('text-', 'bg-')}`}></span>
                                            {section.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed pl-5 border-l-2 border-slate-100">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Conclusion */}
                            <div className={`mt-10 p-6 rounded-xl ${selectedPost.iconBg} border border-slate-100`}>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    <strong className="block mb-2 text-slate-900">Conclusion:</strong>
                                    {selectedPost.fullContent.conclusion}
                                </p>
                                <a
                                    href={selectedPost.fullContent.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 ${selectedPost.iconColor.replace('text-', 'bg-')} text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm`}
                                >
                                    {selectedPost.fullContent.cta}
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
