'use client';

import React from 'react';
import Image from 'next/image';
import { Radio, Timer, Lock, ArrowRight } from 'lucide-react';

export const TrembleShowcase: React.FC = () => {
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 my-8 relative">
      
      {/* Product Content Area */}
      <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between order-2 lg:order-1 relative z-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-white/70">
              IN-HOUSE PRODUCT
            </span>
            <span className="px-3 py-1 bg-[#FF2E93]/10 border border-[#FF2E93]/20 rounded-md text-xs font-mono text-[#FF2E93]">
              PROXIMITY DISCOVERY PLATFORM
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tremble Dating
          </h3>
          <p className="font-mono text-xs text-[#FF2E93] uppercase tracking-wider mb-8 font-semibold">
            &ldquo;Meet Someone Real. Without the App.&rdquo;
          </p>

          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10">
            Tremble is a zero-swiping proximity discovery platform built for iOS & Android. Instead of endless profile swiping and chat rooms, Tremble runs silently in the background and discreetly alerts compatible people when they cross paths in the physical world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#FF2E93]/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
                <Radio className="w-4 h-4 text-[#FF2E93]" />
                <span>BLE Proximity Engine</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                Passive Bluetooth Low Energy scanning with &lt;1% daily battery consumption.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#FF2E93]/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
                <Timer className="w-4 h-4 text-[#FF2E93]" />
                <span>30-Min Radar Window</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                Real-world radar window opens on mutual wave. No chat rooms.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-white/40">
            Engineered in-house by AMS Solutions
          </span>
          <a
            href="https://tremble.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF2E93] font-semibold text-xs inline-flex items-center gap-1 hover:underline"
          >
            <span>Visit tremble.app</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Real Website Screenshot & Frame Area */}
      <div className="lg:col-span-6 bg-[#0A0A0A] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden text-white min-h-[420px] order-1 lg:order-2 border-l border-white/10">
        
        {/* Real Screenshot Browser Frame */}
        <div className="relative z-10 w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#111] group">
          {/* Browser Window Header */}
          <div className="h-8 bg-[#151515] border-b border-white/10 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="font-mono text-[10px] text-white/40 flex items-center gap-2">
              <Lock className="w-3 h-3 text-white/20" /> tremble.app
            </span>
            <span className="w-4" />
          </div>

          {/* Actual Tremble Website Screenshot */}
          <div className="relative w-full h-auto overflow-hidden">
            <Image
              src="/tremble-live-screenshot.png"
              alt="Tremble Website Live Screenshot"
              width={1280}
              height={800}
              className="w-full h-auto object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs font-mono text-white/40">
          <span className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#FF2E93]" /> Zero Location Logs
          </span>
          <span>RAM Ephemeral</span>
        </div>
      </div>
    </div>
  );
};
