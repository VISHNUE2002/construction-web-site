import React from 'react';
import { FileText, Hammer, CheckSquare, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Agency / Bidding',
      subtitle: 'Planning & Analysis',
      desc: 'We analyze blueprints, calculate comprehensive material estimates, review zoning laws, and submit transparent bidding documents without hidden fees.',
      icon: <FileText className="w-8 h-8 text-[#fdb813]" />
    },
    {
      step: '02',
      title: 'Construction',
      subtitle: 'Execution on Site',
      desc: 'Our certified crews manage ground excavation, concrete foundation pour, structural steel framing, mechanical systems, and exterior envelope.',
      icon: <Hammer className="w-8 h-8 text-[#fdb813]" />
    },
    {
      step: '03',
      title: 'Project Execution',
      subtitle: 'Handover & Warranty',
      desc: 'Rigorous 100-point safety and building code quality audits, final cosmetic polishing, municipal sign-off, and client walkthrough handover.',
      icon: <CheckSquare className="w-8 h-8 text-[#fdb813]" />
    }
  ];

  return (
    <section 
      id="process" 
      className="py-20 sm:py-28 relative bg-[#15181e] text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 24, 30, 0.94), rgba(21, 24, 30, 0.94)), url('/assets/process.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fdb813] font-extrabold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            Process Of Construction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase">
            How It Works In Construction?
          </h2>
          <div className="w-16 h-1 bg-[#fdb813] mx-auto mt-4"></div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#1e2229]/90 border border-gray-800 hover:border-[#fdb813] rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-xl bg-gray-800/80 group-hover:bg-[#fdb813] flex items-center justify-center transition-colors">
                  <div className="group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                </div>

                <span className="text-5xl font-black text-gray-700/60 group-hover:text-[#fdb813] transition-colors font-mono">
                  {item.step}
                </span>
              </div>

              {/* Step Content */}
              <div>
                <span className="text-xs uppercase tracking-wider text-[#fdb813] font-bold block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-bold uppercase text-white group-hover:text-[#fdb813] transition-colors mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent indicator */}
              <div className="w-full h-1 bg-gray-800 group-hover:bg-[#fdb813] transition-colors rounded"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
