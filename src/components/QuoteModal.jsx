import React, { useState } from 'react';
import { X, Send, CheckCircle2, HardHat } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Commercial Building',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#1e2229] border border-gray-800 text-white w-full max-w-lg rounded-2xl p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-800 hover:bg-[#fdb813] hover:text-black flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#fdb813]/20 rounded-full flex items-center justify-center mx-auto text-[#fdb813]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold uppercase">Quote Request Received!</h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Thank you! Our chief estimator will review your details and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HardHat className="w-5 h-5 text-[#fdb813]" />
              <span className="text-[#fdb813] text-xs font-bold uppercase tracking-widest">
                Fast & Fair Estimation
              </span>
            </div>
            <h3 className="text-2xl font-extrabold uppercase mb-1">
              Request A Construction Quote
            </h3>
            <p className="text-gray-400 text-xs mb-6">
              Fill in your project details and our team will get back to you with a free breakdown.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-gray-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (818) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#fdb813]"
                  >
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Road / Civil Work">Road / Civil Work</option>
                    <option value="Renovation & Remodel">Renovation & Remodel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-300 mb-1.5">
                  Project Notes / Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the scope, timeline, and location..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fdb813] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fdb813] hover:bg-[#e09f00] text-black font-extrabold text-xs uppercase py-3.5 rounded-lg tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Estimate Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
