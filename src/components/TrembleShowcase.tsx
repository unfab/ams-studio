'use client';

import React from 'react';
import Image from 'next/image';
import { Radio, Timer, ShieldCheck, ArrowUpRight, Lock, Zap } from 'lucide-react';

export const TrembleShowcase: React.FC = () => {
  return (
    <div className="bg-[#FAFAF7] border border-[#E2E2DC] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 my-8 relative">
      
      {/* Product Content Area - Tremble Brand Identity */}
      <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between order-2 lg:order-1 relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-[#1A1A18] text-white rounded-full text-xs font-mono tracking-wider uppercase font-semibold">
              FLAGSHIP PRODUCT
            </span>
            <span className="px-3 py-1 bg-[#F4436C]/10 border border-[#F4436C]/20 rounded-full text-xs font-mono text-[#F4436C] font-semibold">
              PROXIMITY DISCOVERY PLATFORM
            </span>
          </div>

          {/* Tremble Identity Logo & Title */}
          <div className="mb-4">
            <h3 className="font-display text-4xl md:text-5xl font-black text-[#1A1A18] tracking-tight mb-2">
              Tremble<span className="text-[#F4436C]">.</span>
            </h3>
            <p className="font-display text-lg md:text-xl italic text-[#F4436C] font-medium tracking-tight">
              &ldquo;Meet Someone Real. Without the App.&rdquo;
            </p>
          </div>

          <p className="text-[#6B6B63] text-sm md:text-base leading-relaxed mb-10 font-normal">
            Tremble is an in-house engineered zero-swiping proximity platform for iOS & Android. Running passively in the background, Tremble discreetly alerts compatible individuals when they cross paths in the physical world.
          </p>

          {/* Core Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-white border border-[#E2E2DC] rounded-2xl shadow-sm hover:border-[#F4436C]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A18] mb-2 font-mono">
                <Radio className="w-4 h-4 text-[#F4436C]" />
                <span>BLE Proximity Engine</span>
              </div>
              <p className="text-xs text-[#6B6B63] leading-relaxed">
                Passive Bluetooth Low Energy hardware scanning with &lt;1% daily battery draw.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E2E2DC] rounded-2xl shadow-sm hover:border-[#F4436C]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A18] mb-2 font-mono">
                <Timer className="w-4 h-4 text-[#F4436C]" />
                <span>30-Min Radar Window</span>
              </div>
              <p className="text-xs text-[#6B6B63] leading-relaxed">
                Ephemeral 30-minute encounter window opens on mutual wave. No chat rooms.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="pt-6 border-t border-[#E2E2DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#A0A09A]">
            Designed & Engineered by AMS Solutions
          </span>
          <a
            href="https://tremble.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#F4436C] hover:bg-[#C02048] text-white rounded-xl font-semibold text-xs inline-flex items-center gap-2 transition-colors shadow-md shadow-[#F4436C]/20"
          >
            <span>Visit tremble.app</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tremble Platform Showcase Frame */}
      <div className="lg:col-span-6 bg-[#1A1A18] p-6 md:p-12 flex flex-col justify-center relative overflow-hidden text-white min-h-[440px] order-1 lg:order-2 border-l border-[#E2E2DC]">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#F4436C]/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Browser Showcase Window */}
        <div className="relative z-10 w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#111110] group">
          {/* Header */}
          <div className="h-8 bg-[#242422] border-b border-white/10 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4436C] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D9B6F] inline-block" />
            </div>
            <span className="font-mono text-[10px] text-white/50 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#F4436C]" /> tremble.app
            </span>
            <span className="w-4" />
          </div>

          {/* Screenshot */}
          <div className="relative w-full h-auto overflow-hidden">
            <Image
              src="/tremble-live-screenshot.png"
              alt="Tremble Proximity Discovery Experience"
              width={1280}
              height={800}
              className="w-full h-auto object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>

        {/* Security & Architecture Badges */}
        <div className="relative z-10 mt-6 flex items-center justify-between text-xs font-mono text-white/60 px-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#F4436C]" /> Zero Location History
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#F5C842]" /> RAM Ephemeral Storage
          </span>
        </div>
      </div>

    </div>
  );
};
