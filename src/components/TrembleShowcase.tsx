'use client';

import React from 'react';
import Image from 'next/image';
import { Radio, Timer, Lock, ArrowRight } from 'lucide-react';

export const TrembleShowcase: React.FC = () => {
  return (
    <div className="bg-white border border-[#E4E2DC] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 my-8">
      {/* Real Website Screenshot & Frame Area */}
      <div className="lg:col-span-6 bg-[#08182d] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden text-white min-h-[420px]">
        <div className="flex items-center justify-between relative z-10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E6FF2] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#2E6FF2] font-semibold">
              FLAGSHIP PRODUCT
            </span>
          </div>
          <span className="font-mono text-xs text-white/60 border border-white/10 px-2 py-0.5 rounded">
            LIVE PLATFORM
          </span>
        </div>

        {/* Real Screenshot Browser Frame */}
        <div className="relative my-4 rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-[#0B1424] group">
          {/* Browser Window Header */}
          <div className="h-7 bg-[#0c223f] border-b border-white/10 px-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="font-mono text-[10px] text-white/50">tremble.app</span>
            <span className="w-4" />
          </div>

          {/* Actual Tremble Website Screenshot */}
          {/* Actual Tremble Website Screenshot */}
          <div className="relative w-full h-auto overflow-hidden">
            <Image
              src="/tremble-live-screenshot.png"
              alt="Tremble Website Live Screenshot"
              width={1280}
              height={800}
              className="w-full h-auto object-contain object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/70 border-t border-white/10 pt-4">
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
              IN-HOUSE PRODUCT
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
            Tremble is a zero-swiping proximity discovery platform built for iOS & Android. Instead of endless profile swiping and endless chat rooms, Tremble runs silently in the background and discreetly alerts compatible people when they cross paths in the physical world.
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
                <span>30-Min Radar Window</span>
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
