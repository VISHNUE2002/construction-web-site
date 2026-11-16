import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ArrowRight } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#15181e] text-gray-300 pt-16 pb-8 border-t-4 border-[#fdb813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-800">
          
          {/* Column 1: Logo & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <img 
              src="/assets/footer-logo-construction.png" 
              alt="Construction 2 Footer Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Certified construction and heavy civil engineering contractor. Building durable landmarks, highways, and residential sanctuaries with unwavering passion since 1999.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1e2229] hover:bg-[#fdb813] hover:text-black flex items-center justify-center transition-all">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1e2229] hover:bg-[#fdb813] hover:text-black flex items-center justify-center transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#1e2229] hover:bg-[#fdb813] hover:text-black flex items-center justify-center transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#1e2229] hover:bg-[#fdb813] hover:text-black flex items-center justify-center transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider border-l-2 border-[#fdb813] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Latest Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Construction Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider border-l-2 border-[#fdb813] pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Building Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Road & Highway Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Facility Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Architectural Planning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#fdb813]" /> Interior Fit-out & Remodel
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider border-l-2 border-[#fdb813] pl-3">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#fdb813] shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  742 Evergreen Terrace, Construction Plaza, Suite 400
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#fdb813] shrink-0" />
                <a href="tel:+18182345678" className="hover:text-[#fdb813] transition-colors">
                  +1 (818) 23 45 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#fdb813] shrink-0" />
                <a href="mailto:info@construction2.com" className="hover:text-[#fdb813] transition-colors">
                  info@construction2.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#fdb813] shrink-0" />
                <span className="text-gray-400">
                  Mon - Sat: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Construction 2</span>. All Rights Reserved. Built for Jayam Web Solutions Assessment.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop} 
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-[#fdb813] text-black flex items-center justify-center hover:bg-[#e09f00] transition-colors shadow-lg ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 font-bold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
