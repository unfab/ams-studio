'use client';

import React from 'react';
import Image from 'next/image';
import { Radio, Timer, ShieldCheck, ArrowUpRight, Lock, Zap, Apple, Play } from 'lucide-react';

export const TrembleShowcase: React.FC = () => {
  return (
    <div className="bg-[#FAFAF7] border-2 border-[#F4436C]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#F4436C]/10 grid grid-cols-1 lg:grid-cols-12 my-8 relative">
      
      {/* Top Rose Accent Gradient Bar */}
      <div className="col-span-full h-2 bg-gradient-to-r from-[#F4436C] via-[#F9839E] to-[#F4436C]" />

      {/* Product Content Area - Tremble Brand Identity */}
      <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between order-2 lg:order-1 relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3.5 py-1 bg-[#1A1A18] text-white rounded-full text-xs font-mono tracking-wider uppercase font-bold">
              FLAGSHIP PRODUCT
            </span>
            <span className="px-3.5 py-1 bg-[#F4436C] text-white rounded-full text-xs font-mono font-bold shadow-md shadow-[#F4436C]/30">
              PROXIMITY DISCOVERY PLATFORM
            </span>
          </div>

          {/* Tremble Identity Logo & Title */}
          <div className="mb-6">
            <h3 className="font-display text-5xl md:text-6xl font-black text-[#1A1A18] tracking-tight mb-3">
              Tremble<span className="text-[#F4436C]">.</span>
            </h3>
            <p className="font-display text-xl md:text-2xl italic text-[#F4436C] font-semibold tracking-tight">
              &ldquo;Meet Someone Real. Without the App.&rdquo;
            </p>
          </div>

          <p className="text-[#1A1A18]/80 text-sm md:text-base leading-relaxed mb-8 font-normal">
            Tremble is an in-house engineered zero-swiping proximity platform for iOS & Android. Running passively in the background, Tremble discreetly alerts compatible individuals when they cross paths in the physical world.
          </p>

          {/* App Store Coming Soon Badges + Waitlist Button */}
          <div className="mb-8 p-6 bg-white border border-[#F4436C]/30 rounded-2xl shadow-md shadow-[#F4436C]/5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#1A1A18]/60 uppercase tracking-wider font-bold">
                APP STORES STATUS
              </span>
              <span className="px-3 py-1 bg-[#F4436C]/10 border border-[#F4436C]/30 text-[#F4436C] rounded-full font-mono text-[11px] font-bold">
                COMING SOON TO APP STORES
              </span>
            </div>

            {/* Store Buttons (Disabled / Coming Soon Style) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#FAFAF7] border border-[#E2E2DC] rounded-xl flex items-center gap-3 cursor-default opacity-90 hover:border-[#F4436C]/40 transition-colors">
                <Apple className="w-5 h-5 text-[#1A1A18]" />
                <div className="text-left">
                  <span className="block font-mono text-[9px] text-[#A0A09A] uppercase font-semibold">Download on</span>
                  <span className="block text-xs font-bold text-[#1A1A18]">Apple App Store</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAFAF7] border border-[#E2E2DC] rounded-xl flex items-center gap-3 cursor-default opacity-90 hover:border-[#F4436C]/40 transition-colors">
                <Play className="w-4 h-4 text-[#1A1A18] fill-current" />
                <div className="text-left">
                  <span className="block font-mono text-[9px] text-[#A0A09A] uppercase font-semibold">GET IT ON</span>
                  <span className="block text-xs font-bold text-[#1A1A18]">Google Play Store</span>
                </div>
              </div>
            </div>

            {/* Primary Rose Waitlist Button */}
            <a
              href="https://trembledating.com/#waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#F4436C] hover:bg-[#C02048] text-white rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#F4436C]/35 group"
            >
              <span>Join the Waitlist</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Core Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white border border-[#F4436C]/25 rounded-2xl shadow-sm hover:border-[#F4436C] transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A18] mb-2 font-mono">
                <Radio className="w-4 h-4 text-[#F4436C]" />
                <span>BLE Proximity Engine</span>
              </div>
              <p className="text-xs text-[#6B6B63] leading-relaxed">
                Passive Bluetooth Low Energy hardware scanning with &lt;1% daily battery draw.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#F4436C]/25 rounded-2xl shadow-sm hover:border-[#F4436C] transition-colors">
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
            href="https://trembledating.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-[#F4436C] hover:underline inline-flex items-center gap-1"
          >
            <span>trembledating.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Tremble Platform Showcase Frame */}
      <div className="lg:col-span-6 bg-[#1A1A18] p-6 md:p-12 flex flex-col justify-center relative overflow-hidden text-white min-h-[440px] order-1 lg:order-2 border-l border-[#F4436C]/30">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F4436C]/30 blur-[100px] rounded-full pointer-events-none" />

        {/* Browser Showcase Window */}
        <div className="relative z-10 w-full max-w-lg mx-auto rounded-2xl overflow-hidden border-2 border-[#F4436C]/40 shadow-2xl shadow-[#F4436C]/20 bg-[#111110] group">
          {/* Header */}
          <div className="h-8 bg-[#242422] border-b border-white/10 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4436C] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D9B6F] inline-block" />
            </div>
            <span className="font-mono text-[10px] text-white/70 flex items-center gap-1.5 font-semibold">
              <Lock className="w-3 h-3 text-[#F4436C]" /> trembledating.com
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
        <div className="relative z-10 mt-6 flex items-center justify-between text-xs font-mono text-white/70 px-2">
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
