import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      id: 1,
      title: 'Building Construction',
      category: 'Commercial & Residential',
      image: '/assets/service-1.jpg',
      icon: '/assets/s1.png',
      desc: 'From custom residential estates to multi-story commercial high-rises, our structural construction teams bring visions into physical reality with precision.'
    },
    {
      id: 2,
      title: 'Road Construction',
      category: 'Civil & Highways',
      image: '/assets/service-2.jpg',
      icon: '/assets/s2.png',
      desc: 'Heavy civil engineering, asphalt laying, highway design, bridge retrofitting, and robust municipal streetscapes built to withstand heavy industrial wear.'
    },
    {
      id: 3,
      title: 'Facility Maintenance',
      category: 'Renovation & Repair',
      image: '/assets/service-3.jpg',
      icon: '/assets/s3.png',
      desc: 'Comprehensive post-construction maintenance, structural health audits, exterior waterproofing, and modern energy-efficiency upgrades.'
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fdb813] font-extrabold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            What We Can Do For You
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15181e] uppercase">
            Our Construction Services
          </h2>
          <div className="w-16 h-1 bg-[#fdb813] mx-auto mt-4"></div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div 
              key={srv.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image thumbnail with zoom effect */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 w-14 h-14 rounded-lg bg-[#fdb813] p-2.5 shadow-lg flex items-center justify-center transform transition-transform group-hover:-translate-y-1">
                  <img src={srv.icon} alt={srv.title} className="w-full h-full object-contain filter brightness-0" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    {srv.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 uppercase group-hover:text-[#fdb813] transition-colors mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#fdb813] transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Quote Highlight Banner */}
        <div className="mt-16 bg-[#1e2229] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#fdb813]/10 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-[#fdb813] text-xs font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4" /> Ready to Build?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                Building a dream shouldn’t be a nightmare!
              </h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Partner with certified construction veterans who value your time, budget, and peace of mind.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="bg-[#fdb813] hover:bg-[#e09f00] text-black font-extrabold text-xs uppercase px-8 py-4 rounded tracking-wider shadow-lg hover:scale-105 transition-all shrink-0 cursor-pointer"
            >
              Get Free Fair Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
