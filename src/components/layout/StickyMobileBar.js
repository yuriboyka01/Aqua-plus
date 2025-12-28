import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsappUtils';

const StickyMobileBar = () => {
    // Only show on mobile devices (hidden on md and up)
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden safe-area-bottom">
            <div className="flex h-16">
                {/* Call Button */}
                <a
                    href="tel:+917010329920"
                    className="flex-1 flex flex-col items-center justify-center gap-1 bg-white text-slate-700 active:bg-slate-50 transition-colors border-r border-slate-100"
                >
                    <Phone size={20} className="text-cyan-600" />
                    <span className="text-xs font-semibold">Call Now</span>
                </a>

                {/* WhatsApp Button */}
                <button
                    onClick={() => openWhatsApp("Hi! I need RO service/enquiry.")}
                    className="flex-1 flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white active:opacity-90 transition-opacity"
                >
                    <MessageCircle size={20} fill="white" className="text-white" />
                    <span className="text-xs font-semibold">WhatsApp</span>
                </button>
            </div>
        </div>
    );
};

export default StickyMobileBar;
