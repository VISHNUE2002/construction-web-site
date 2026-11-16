import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Robert Jenkins',
      role: 'CEO, Apex Developments',
      avatar: '/assets/team1.jpg',
      rating: 5,
      content: 'Construction 2 delivered our 12-story commercial plaza 3 weeks ahead of schedule. Their attention to structural safety, code compliance, and cost control was exceptional.'
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      role: 'Director, Urban Living Homes',
      avatar: '/assets/team2.jpg',
      rating: 5,
      content: 'From the initial bidding phase to the final key handover, their engineering staff kept us informed at every single milestone. Outstanding craftsmanship and integrity!'
    },
    {
      id: 3,
      name: 'Marcus Vance',
      role: 'Senior Infrastructure Manager',
      avatar: '/assets/team3.jpg',
      rating: 5,
      content: 'Their road construction division transformed an extensive 15-mile transit corridor without causing traffic disruption. Truly a masterclass in heavy civil project execution.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fdb813] font-extrabold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            See What Says Our Happy Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15181e] uppercase">
            Our Happy Customers
          </h2>
          <div className="w-16 h-1 bg-[#fdb813] mx-auto mt-4"></div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 group-hover:text-[#fdb813]/30 transition-colors" />

              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fdb813] text-[#fdb813]" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#fdb813]"
                />
                <div>
                  <h4 className="text-base font-bold text-gray-900 uppercase">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {rev.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
