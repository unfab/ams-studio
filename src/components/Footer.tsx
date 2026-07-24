import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A0A0A] text-white py-12 md:py-16 px-6 md:px-12 xl:px-24 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand & Boutique Local SEO */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-[#2E6FF2] transition-colors">
            AMS Studio.
          </Link>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Izdelava premium spletnih rešitev in aplikacij.
          </p>
          <p className="text-white/40 text-xs mt-1">
            Koper, Slovenija
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 md:gap-10 text-sm font-medium text-white/80">
          <Link href="mailto:info@amssolutions.biz" className="hover:text-white transition-colors">
            Kontakt
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Storitve
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Projekti
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {currentYear} AMS Solutions d.o.o. Vse pravice pridržane.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white/80 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
