import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-[#1e2229] text-gray-300 text-xs py-2.5 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a 
            href="tel:+18182345678" 
            className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#fdb813]" />
            <span>+1 (818) 23 45 678</span>
          </a>
          <a 
            href="mailto:info@construction2.com" 
            className="flex items-center gap-2 hover:text-[#fdb813] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#fdb813]" />
            <span>info@construction2.com</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-[#fdb813]" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400 hidden lg:inline mr-1">Follow Us:</span>
          <a 
            href="#facebook" 
            aria-label="Facebook"
            className="w-7 h-7 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-[#fdb813] hover:text-black transition-all"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a 
            href="#twitter" 
            aria-label="Twitter"
            className="w-7 h-7 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-[#fdb813] hover:text-black transition-all"
          >
            <TwitterIcon className="w-3.5 h-3.5" />
          </a>
          <a 
            href="#linkedin" 
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-[#fdb813] hover:text-black transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a 
            href="#instagram" 
            aria-label="Instagram"
            className="w-7 h-7 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-[#fdb813] hover:text-black transition-all"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
