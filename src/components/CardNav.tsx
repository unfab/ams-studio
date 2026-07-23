'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LogoFull } from './ui/LogoFull';
import { LogoIcon } from './ui/LogoIcon';
import { SpecularButton } from './SpecularButton';
import { ArrowUpRight } from 'lucide-react';

export const CardNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navHeight, setNavHeight] = useState(64);
  const navRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      label: 'Products',
      links: [
        { label: 'Tremble Discovery Engine', href: '#products' },
        { label: 'In-House Software', href: '#products' },
      ],
    },
    {
      label: 'Services',
      links: [
        { label: 'Software Engineering', href: '#services' },
        { label: 'Web & Shopify Storefronts', href: '#services' },
        { label: 'Ongoing Maintenance & Support', href: '#services' },
      ],
    },
    {
      label: 'Studio',
      links: [
        { label: 'Concept Builds', href: '#concept-builds' },
        { label: 'How We Work', href: '#process' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
  ];

  useEffect(() => {
    if (isExpanded) {
      const isMobile = window.innerWidth <= 768;
      setNavHeight(isMobile ? 380 : 260);
    } else {
      setNavHeight(64);
    }
  }, [isExpanded]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <nav
        ref={navRef}
        className="bg-[#FAF9F6] border border-[#E4E2DC] rounded-xl shadow-lg shadow-black/5 overflow-hidden transition-all duration-300 ease-out relative"
        style={{ height: `${navHeight}px` }}
      >
        {/* Top Bar */}
        <div className="h-[64px] px-5 flex items-center justify-between relative z-20">
          <a href="#" className="flex items-center gap-3 group">
            <LogoIcon className="w-8 h-8 text-[#08182d] group-hover:text-[#2E6FF2] transition-colors" />
            <span className="font-bold text-[#08182d] text-lg tracking-tight">AMS Solutions</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#08182d]/80">
            <a href="#products" className="hover:text-[#2E6FF2] transition-colors">
              Products
            </a>
            <a href="#services" className="hover:text-[#2E6FF2] transition-colors">
              Services
            </a>
            <a href="#concept-builds" className="hover:text-[#2E6FF2] transition-colors">
              Concept Builds
            </a>
            <a href="#process" className="hover:text-[#2E6FF2] transition-colors">
              Process
            </a>
          </div>

          <div className="flex items-center gap-4">
            <SpecularButton
              size="md"
              onClick={() => (window.location.href = '#contact')}
              className="hidden sm:inline-flex"
            >
              Start a Project
            </SpecularButton>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-5 h-0.5 bg-[#08182d] transition-all duration-300 ${
                  isExpanded ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#08182d] transition-all duration-300 ${
                  isExpanded ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={`absolute left-0 right-0 top-[64px] p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-300 ${
            isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E2DC] rounded-lg p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#08182d]/50 block mb-3">
                  [{`0${idx + 1}`}] {item.label}
                </span>
                <div className="flex flex-col gap-2">
                  {item.links.map((lnk, i) => (
                    <a
                      key={i}
                      href={lnk.href}
                      onClick={() => setIsExpanded(false)}
                      className="text-sm font-medium text-[#08182d] hover:text-[#2E6FF2] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{lnk.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
