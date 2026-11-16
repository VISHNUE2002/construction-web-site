import React from 'react';
import { Building2, Shield, Construction, ArrowRight } from 'lucide-react';

export default function FeaturesAtGlance() {
  const features = [
    {
      title: 'Building Engineering',
      desc: 'Expert architectural structural analysis, foundation engineering, and sustainable construction techniques.',
      icon: <Building2 className="w-8 h-8 text-[#fdb813]" />,
      link: '#services'
    },
    {
      title: 'Safety First',
      desc: 'Zero-harm workplace philosophy with rigorous safety protocols, OSHA compliance, and certified protective measures.',
      icon: <img src="/assets/safety-icon.png" alt="Safety First" className="w-8 h-8 object-contain" />,
      link: '#services'
    },
    {
      title: 'Road Construction',
      desc: 'High-durability highways, asphalt paving, urban bridges, and comprehensive civil infrastructure projects.',
      icon: <Construction className="w-8 h-8 text-[#fdb813]" />,
      link: '#services'
    }
  ];

  return (
    <section className="relative -mt-12 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 sm:p-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#fdb813] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            Features At A Glance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#15181e] uppercase">
            We Know What Your Needs Are
          </h2>
          <div className="w-16 h-1 bg-[#fdb813] mx-auto mt-3"></div>
        </div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="group p-6 sm:p-8 rounded-lg bg-gray-50/70 hover:bg-white border border-gray-200 hover:border-[#fdb813] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-white group-hover:bg-[#1e2229] flex items-center justify-center shadow-md mb-6 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 uppercase group-hover:text-[#fdb813] transition-colors mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              <a 
                href={feat.link}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#fdb813] transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
