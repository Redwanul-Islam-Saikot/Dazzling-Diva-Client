"use client"; 

import React from 'react';
import { MapPin, Mail, Copy } from 'lucide-react';

export default function LuxuryFooter() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@dazzling.com');
    alert('Email copied to clipboard!');
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#430825] text-white font-sans selection:bg-pink-800 selection:text-white">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200')` 
        }}
      />

      {/* Main Footer Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-12">
        
        {/* TOP SECTION: Brand Identity */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="mb-4 flex items-center justify-center w-14 h-14 border-[3px] border-white rounded-xl rotate-45 transform transition-transform duration-300 hover:rotate-[135deg]">
            <span className="text-3xl font-black tracking-tighter text-white -rotate-45 block">D</span>
          </div>
          
          <h2 className="text-2xl font-bold tracking-wide mb-4">Dazzling Diva</h2>
          <p className="text-sm md:text-base leading-relaxed text-neutral-300/90 font-light">
            We Only Carry Designs We Believe In Ethically And Aesthetically – Original, Authentic Pieces That Are Made To Last.
          </p>
        </div>

        {/* MIDDLE SECTION: Navigation Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-6 border-b border-white/10 pb-12">
          
          {/* Column 1: Contact Panel */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-start gap-3 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 mt-1 shrink-0 opacity-80" />
              <span>29 SE 2nd Ave, Miami Florida<br />33131, United States</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <Mail className="w-4 h-4 shrink-0 opacity-80" />
              <span className="truncate">info@dazzling.com</span>
              <button 
                onClick={handleCopyEmail}
                className="p-1 hover:bg-white/10 rounded transition-colors text-neutral-400 hover:text-white"
                title="Copy Email"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-2">
              <a href="tel:+9239427879" className="text-lg font-bold tracking-wide hover:text-neutral-300 transition-colors">
                (+92) 3942 7879
              </a>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Pages</h3>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundle Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Column 3: Shopping */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Shopping</h3>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop by Category</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Information</h3>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Track My Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Enquires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 5: Account */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Account</h3>
            <ul className="space-y-3 text-sm text-neutral-300 font-light">
              <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">My Orders</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM RIBBON BAR */}
      <div className="w-full bg-[#35051c] text-xs font-light py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-300">
          
          <div>
            Copyright © <span className="text-white font-medium hover:underline cursor-pointer">Orbixon</span> 2026. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 py-2 md:py-0">
            {/* Facebook */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2c4.477-10 10-10c4.991 0 9.101 3.657 9.895 8.438h-6.997V13.5h6.997v5.625C20.312 21.242 16.5 22 12 22a10 10 0 01-10-10z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Teams & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
}