import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

const Hero = () => {
  const navigate = useNavigate();

  const handleBrowseProducts = () => {
    navigate('/products');
  };

  const handleBookService = () => {
    navigate('/services');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2/5 h-3/5 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">

        {/* Content Side */}
        <div className="animate-fade-in text-center md:text-left order-2 md:order-1">
          <div className="inline-block px-5 py-2.5 bg-white/15 backdrop-blur-md text-white rounded-full font-semibold text-sm mb-6 border border-white/20 tracking-wide">
            #1 Rated RO Sales & Service in Madurai
          </div>
          <h1 className="text-white mb-6 leading-[1.1] font-extrabold text-4xl md:text-6xl">
            Premium <span className="text-cyan-300">RO Sales</span> & <br className="hidden md:block" />
            Expert Services
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/85 leading-relaxed max-w-lg mx-auto md:mx-0">
            Buy top-rated RO purifiers at wholesale prices. Expert installation, repair, and AMC services delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleBrowseProducts}
              className="px-8 py-4 bg-white text-cyan-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Browse Products
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button
              onClick={handleBookService}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/50 font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Book a Service
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap gap-8 justify-center md:justify-start">
            <div className="text-center md:text-left">
              <div className="font-bold text-3xl text-white">500+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold text-3xl text-white flex items-center justify-center md:justify-start gap-1">
                4.9/5 <span className="text-yellow-400 text-2xl">★</span>
              </div>
              <div className="text-sm text-white/70">Google Rated</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold text-3xl text-white">60min</div>
              <div className="text-sm text-white/70">Response Time</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold text-3xl text-white">10+ Yrs</div>
              <div className="text-sm text-white/70">Experience</div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative animate-fade-in order-1 md:order-2">
          {/* Main Image Card */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl transform rotate-1 md:rotate-2">
            <OptimizedImage
              src="/images/hero_service.png"
              alt="Aqua Plus RO Tech technician installing RO purifier"
              width={1200}
              height={800}
              priority={true}
              className="rounded-xl w-full h-[280px] md:h-[420px]"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg flex items-center gap-3 md:gap-4 max-w-[200px] md:max-w-xs">
              <div className="bg-green-100 p-2.5 rounded-full flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">100% Guaranteed</div>
                <div className="text-xs md:text-sm text-slate-500">Pure TDS Check</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
