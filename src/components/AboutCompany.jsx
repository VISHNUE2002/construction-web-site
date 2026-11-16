import React from 'react';
import { CheckCircle2, ArrowRight, Award, Users, HardHat } from 'lucide-react';

export default function AboutCompany() {
  const highlights = [
    'Full-service project management from blueprint to completion',
    'Experienced civil engineers & licensed master tradesmen',
    'Strict on-time delivery & transparent budget adherence',
    'Eco-friendly, sustainable green building standards'
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
                <img 
                  src="/assets/about-company.jpg" 
                  alt="About Construction 2 Company" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Decorative back-border */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#fdb813] rounded-2xl -z-0 hidden sm:block"></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-6 sm:bottom-8 sm:-right-6 bg-[#1e2229] text-white p-5 sm:p-6 rounded-xl shadow-2xl z-20 flex items-center gap-4 border-l-4 border-[#fdb813]">
                <Award className="w-10 h-10 text-[#fdb813] shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#fdb813]">25+ Years</div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-medium">Proven Industry Experience</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Checkpoints */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-block">
              <span className="text-[#fdb813] text-xs sm:text-sm font-extrabold tracking-widest uppercase block mb-2">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15181e] uppercase leading-tight">
                Always dedicated <br />
                <span className="text-[#fdb813]">& devoted to excellence</span>
              </h2>
              <div className="w-16 h-1 bg-[#fdb813] mt-3"></div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              We are a recognized leader in commercial and residential construction, built upon an unwavering foundation of integrity, safety, and craftsmanship. Every foundation we lay and every structure we raise stands as a testament to our relentless pursuit of perfection.
            </p>

            {/* Checkpoints */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fdb813] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Founder note / CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-6">
              <a
                href="#services"
                className="bg-[#1e2229] hover:bg-[#fdb813] hover:text-black text-white font-bold text-xs uppercase px-7 py-3.5 rounded tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 border-l-2 border-gray-200 pl-6">
                <HardHat className="w-8 h-8 text-[#fdb813]" />
                <div>
                  <div className="text-sm font-bold text-gray-900">David Miller</div>
                  <div className="text-xs text-gray-500 font-medium">Chief Executive Officer</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
