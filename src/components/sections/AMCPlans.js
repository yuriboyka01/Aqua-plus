import React from 'react';
import { CheckCircle } from 'lucide-react';

const AMCPlans = () => {
    const openWhatsApp = () => {
        window.open('https://wa.me/917010329920?text=Hi%20Aqua%20Plus,%20I%20want%20to%20know%20about%20AMC%20plans', '_blank');
    };

    const amcPlans = [
        {
            name: "Silver Plan",
            price: "₹2,500",
            duration: "/year",
            features: ["2 Free Services", "No Spares Included", "Priority Support", "Wastage Check"],
            recommended: false
        },
        {
            name: "Gold Plan",
            price: "₹4,500",
            duration: "/year",
            features: ["3 Free Services", "Filters Included", "Membrane Discount 20%", "24hr Response Time"],
            recommended: true
        },
        {
            name: "Platinum Plan",
            price: "₹6,500",
            duration: "/year",
            features: ["Unlimited Service Visits", "All Spares Included", "Regular TDS Check", "Dedicated Technician"],
            recommended: false
        }
    ];

    return (
        <section id="amc-plans" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="md:w-2/3">
                        <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">Annual Maintenance</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-2" style={{ color: '#FFD700' }}>Peace of Mind Plans</h2>
                        <p className="text-slate-400 mt-4 text-lg">Pay once a year, forget about repair costs. We take care of everything.</p>
                    </div>
                    <div className="bg-white/10 px-6 py-2 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm">
                        Most Popular: Gold Plan
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {amcPlans.map((plan, idx) => (
                        <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${plan.recommended ? 'bg-blue-600 border-blue-500 shadow-2xl scale-105 z-10' : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'}`}>
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-md">
                                    Best Value
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-black">{plan.price}</span>
                                <span className="text-slate-300/80 ml-1 text-sm">{plan.duration}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <CheckCircle size={18} className={plan.recommended ? 'text-blue-200' : 'text-blue-500'} />
                                        <span className={plan.recommended ? 'text-white' : 'text-slate-300'}>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={openWhatsApp}
                                className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${plan.recommended ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
                            >
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AMCPlans;
