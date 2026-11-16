import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';

export default function QuoteBanner() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Building Construction'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Building Construction'
      });
    }, 4500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 relative text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(21, 24, 30, 0.94) 0%, rgba(21, 24, 30, 0.88) 100%), url('/assets/row-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#fdb813] font-extrabold text-xs sm:text-sm tracking-widest uppercase block">
              Interested In Construction?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
              Request A Free & <br />
              <span className="text-[#fdb813]">Fair Construction Quote</span>
            </h2>
            <div className="w-16 h-1 bg-[#fdb813]"></div>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Have an upcoming commercial build, residential estate, or road infrastructure project? Send us your requirements for an immediate, transparent estimate with no hidden costs.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-[#fdb813] text-black flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Direct Hotline</div>
                <div className="text-lg sm:text-xl font-bold text-white">+1 (818) 23 45 678</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#1e2229]/95 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-[#fdb813]/20 rounded-full flex items-center justify-center mx-auto text-[#fdb813]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white">Thank You, {formData.name}!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your quote request has been received. Our chief project engineer will call you shortly at <span className="text-[#fdb813] font-bold">{formData.phone}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (818) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Service Required
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fdb813] transition-colors"
                      >
                        <option value="Building Construction">Building Construction</option>
                        <option value="Road Construction">Road Construction</option>
                        <option value="Facility Maintenance">Facility Maintenance</option>
                        <option value="Architectural Design">Architectural Design</option>
                        <option value="Full Renovation">Full Renovation</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#fdb813] hover:bg-[#e09f00] text-black font-extrabold text-sm uppercase py-4 rounded-lg tracking-wider shadow-lg hover:shadow-yellow-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
