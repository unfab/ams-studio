'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpecularButton } from './SpecularButton';
import { Shield, Radio, Timer, Sparkles, Smartphone, ArrowRight, Lock } from 'lucide-react';

export const TrembleShowcase: React.FC = () => {
  return (
    <div className="bg-white border border-[#E4E2DC] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 my-8">
      {/* Mockup / Mobile UI Area */}
      <div className="lg:col-span-6 bg-[#08182d] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden text-white min-h-[460px]">
        {/* Subtle background radar glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,111,242,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E6FF2] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2E6FF2] font-semibold">
              BLE PROXIMITY ACTIVE
            </span>
          </div>
          <span className="font-mono text-xs text-white/50 border border-white/10 px-2 py-0.5 rounded">
            iOS & Android Native
          </span>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="my-8 mx-auto w-full max-w-[260px] bg-[#0c223f] border-2 border-white/10 rounded-[36px] p-4 shadow-2xl relative">
          {/* Phone Top Notch */}
          <div className="w-24 h-4 bg-[#08182d] rounded-b-xl mx-auto mb-3 border-b border-x border-white/10 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>

          {/* App Screen Content */}
          <div className="bg-[#08182d] border border-white/10 rounded-[24px] p-5 text-center space-y-4">
            <div className="font-mono text-[10px] text-[#2E6FF2] uppercase tracking-widest">
              MUTUAL WAVE DETECTED
            </div>

            {/* Radar Pulse Circle */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#2E6FF2]/30 animate-ping" />
              <div className="absolute inset-2 rounded-full border border-[#2E6FF2]/50" />
              <div className="w-12 h-12 rounded-full bg-[#2E6FF2]/20 border border-[#2E6FF2] flex items-center justify-center text-white">
                <Radio className="w-6 h-6 text-[#2E6FF2]" />
              </div>

              {/* Pulsing Dots representing nearby users */}
              <div className="absolute top-2 left-4 w-2 h-2 rounded-full bg-[#2E6FF2]" />
              <div className="absolute bottom-4 right-5 w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white">Match Window Open</h4>
              <p className="font-mono text-xs text-white/60">30-Minute Real World Radar</p>
            </div>

            <div className="py-1 px-3 bg-[#2E6FF2]/10 border border-[#2E6FF2]/30 rounded-md text-[11px] font-mono text-[#2E6FF2]">
              Meet Someone Real. Without the App.
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/60 border-t border-white/10 pt-4">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#2E6FF2]" /> Zero Location History Logs
          </span>
          <span>RAM Ephemeral</span>
        </div>
      </div>

      {/* Product Content Area */}
      <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2.5 py-1 bg-[#FAF9F6] border border-[#E4E2DC] rounded text-xs font-mono text-[#08182d]">
              FLAGSHIP PRODUCT
            </span>
            <span className="px-2.5 py-1 bg-[#2E6FF2]/10 border border-[#2E6FF2]/20 rounded text-xs font-mono text-[#2E6FF2]">
              PROXIMITY DISCOVERY PLATFORM
            </span>
          </div>

          <h3 className="text-3xl font-bold text-[#08182d] mb-3">
            Tremble Dating
          </h3>
          <p className="font-mono text-xs text-[#2E6FF2] uppercase tracking-wider mb-6 font-semibold">
            &ldquo;Meet Someone Real. Without the App.&rdquo;
          </p>

          <p className="text-[#08182d]/80 text-sm md:text-base leading-relaxed mb-6">
            Tremble is a zero-swiping proximity discovery application for iOS & Android. Instead of endless profile swiping and endless chat rooms, Tremble runs silently in the background and discreetly alerts compatible people when they cross paths in the physical world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-3.5 bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#08182d] mb-1">
                <Radio className="w-4 h-4 text-[#2E6FF2]" />
                <span>BLE Proximity Engine</span>
              </div>
              <p className="text-xs text-[#08182d]/70 leading-relaxed">
                Passive Bluetooth Low Energy scanning with &lt;1% daily battery consumption.
              </p>
            </div>

            <div className="p-3.5 bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#08182d] mb-1">
                <Timer className="w-4 h-4 text-[#2E6FF2]" />
                <span>30-Min Trembling Window</span>
              </div>
              <p className="text-xs text-[#08182d]/70 leading-relaxed">
                Real-world radar window opens on mutual wave. No chat rooms.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E4E2DC] flex items-center justify-between">
          <span className="font-mono text-xs text-[#08182d]/60">
            Engineered in-house by AMS Solutions
          </span>
          <a
            href="#calculator"
            className="text-[#2E6FF2] font-semibold text-xs inline-flex items-center gap-1 hover:underline"
          >
            <span>Inquire for Product Licensing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
