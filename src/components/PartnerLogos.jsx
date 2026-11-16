import React from 'react';

export default function PartnerLogos() {
  const partners = [
    { name: 'Partner 1', logo: '/assets/client-1.png' },
    { name: 'Partner 2', logo: '/assets/client-2.png' },
    { name: 'Partner 3', logo: '/assets/client-3.png' },
    { name: 'Partner 4', logo: '/assets/client-1.png' },
    { name: 'Partner 5', logo: '/assets/client-2.png' },
    { name: 'Partner 6', logo: '/assets/client-3.png' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Trusted By Leading Architectural & Engineering Enterprises
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((p, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center p-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={p.logo} 
                alt={p.name} 
                className="max-h-12 w-auto object-contain hover:scale-105 transition-transform" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
