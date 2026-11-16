import React from 'react';
import { ArrowRight, ShieldCheck, HardHat, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[620px] lg:min-h-[720px] flex items-center bg-[#15181e] text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(21, 24, 30, 0.95) 0%, rgba(21, 24, 30, 0.85) 50%, rgba(21, 24, 30, 0.4) 100%), url('/assets/slide-2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#fdb813]/20 border border-[#fdb813]/40 px-3.5 py-1.5 rounded-full">
              <HardHat className="w-4 h-4 text-[#fdb813]" />
              <span className="text-[#fdb813] text-xs sm:text-sm font-bold tracking-widest uppercase">
                Why Choose Us?
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight">
              We'll get it done, <br />
              <span className="text-[#fdb813]">like us there are none</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Committed to superior quality and results. Don’t get framed by the competition, trust our solid reputation in commercial & residential construction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="bg-[#fdb813] hover:bg-[#e09f00] text-black font-extrabold text-sm uppercase px-8 py-4 rounded tracking-wider shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Start New Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="border-2 border-white/80 hover:border-[#fdb813] hover:text-[#fdb813] font-bold text-sm uppercase px-8 py-3.5 rounded tracking-wider transition-all"
              >
                Our Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-gray-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-[#fdb813]" />
                <div>
                  <h4 className="text-sm font-bold text-white">ISO Certified</h4>
                  <p className="text-xs text-gray-400">100% Quality Standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#fdb813] text-black font-black text-xs flex items-center justify-center">
                  25+
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Years Active</h4>
                  <p className="text-xs text-gray-400">Since 1999</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <PhoneCall className="w-7 h-7 text-[#fdb813]" />
                <div>
                  <h4 className="text-sm font-bold text-white">24/7 Support</h4>
                  <p className="text-xs text-gray-400">Direct Engineer Line</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Model (Worker cutout) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end relative">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-[#fdb813]/20 rounded-full blur-3xl -z-10"></div>
              
              <img 
                src="/assets/man-model.png" 
                alt="Expert Construction Engineer" 
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"
              />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-2xl border-l-4 border-[#fdb813]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-[#15181e]">99.8%</span>
                  <div className="text-xs font-semibold leading-snug">
                    Project Success & <br />Safety Rate
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
