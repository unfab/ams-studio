import React from 'react';
import Link from 'next/link';
import { LogoIcon } from './ui/LogoIcon';
import { Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08182d] text-white py-16 px-6 md:px-12 xl:px-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Dev Dot Texture */}
      <div className="absolute inset-0 bg-dev-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 group mb-4">
                <LogoIcon className="w-8 h-8 text-white group-hover:text-[#2E6FF2] transition-colors" />
                <span className="font-bold text-xl text-white tracking-tight">AMS Solutions</span>
              </Link>
              <p className="text-white/70 text-sm max-w-sm leading-relaxed mb-6 font-light">
                Software product studio from Slovenia. Building custom software systems, SaaS platforms, and operational tools for ambitious businesses.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-white/50">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2E6FF2]" /> Koper, Slovenia · Europe
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2E6FF2]" /> info@amssolutions.biz
              </p>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#products" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                  <span>Tremble Engine</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  In-House Software
                </a>
              </li>
              <li>
                <a href="#active-builds" className="hover:text-white transition-colors">
                  Client Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SaaS Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Storefronts
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
              Studio
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors text-[#2E6FF2] font-semibold">
                  Start a Project
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors flex items-center gap-1 text-xs text-white/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E6FF2]" /> Code Guarantee
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <p>© {currentYear} AMS Solutions d.o.o. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
            <a href="mailto:info@amssolutions.biz" className="hover:text-white/80 transition-colors">Contact Engineering</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
