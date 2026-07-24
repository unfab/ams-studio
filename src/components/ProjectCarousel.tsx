'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Globe, Building2, Utensils, Mountain, Truck, Calculator, Cpu, Hammer } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  url: string;
  image?: string;
  tags: string[];
  icon: React.ElementType;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Header & Controls */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E6FF2] font-semibold flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> WHAT WE CAN BUILD FOR YOU
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#08182d]">
            Industry Demos & Design Systems
          </h3>
        </div>

        {/* Left & Right Scroll Controls */}
        <div className="flex items-center gap-3">
          <span className="font-tech text-xs text-[#08182d]/50 hidden sm:inline-block">
            Use arrows or drag to explore
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleScrollLeft}
              className="w-10 h-10 bg-white border border-[#E4E2DC] rounded-xl flex items-center justify-center text-[#08182d] hover:bg-[#2E6FF2] hover:text-white hover:border-[#2E6FF2] transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleScrollRight}
              className="w-10 h-10 bg-white border border-[#E4E2DC] rounded-xl flex items-center justify-center text-[#08182d] hover:bg-[#2E6FF2] hover:text-white hover:border-[#2E6FF2] transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-5 pb-6 pt-1 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
      >
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          const domain = project.url.replace('https://', '').replace('/', '');
          const hasSpecificImage = project.image && project.image !== '';

          return (
            <div
              key={idx}
              className="w-[290px] sm:w-[320px] flex-shrink-0 snap-start bg-white border border-[#E4E2DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2E6FF2]/50 transition-all duration-300 group/card flex flex-col justify-between"
            >
              {/* Browser Window Header & Preview */}
              <div className="bg-[#08182d] p-3 border-b border-[#E4E2DC] relative">
                <div className="h-6 bg-[#0c223f] border border-white/10 rounded-t-lg px-2.5 flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[9px] text-white/70 truncate max-w-[140px]">{domain}</span>
                  <span className="w-2" />
                </div>
                
                {/* Screenshot or Dynamic High-Contrast Preview Card */}
                <div className="relative w-full h-[145px] overflow-hidden rounded-b-lg border-x border-b border-white/10 bg-gradient-to-br from-[#0B1424] via-[#08182d] to-[#0d223e]">
                  {hasSpecificImage ? (
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-95 group-hover/card:scale-105 transition-transform duration-500"
                      sizes="320px"
                    />
                  ) : (
                    /* High-End Themed Developer Mockup Graphic (No Mismatched Photos!) */
                    <div className="w-full h-full p-4 flex flex-col justify-between relative overflow-hidden text-white font-tech">
                      <div className="flex items-center justify-between text-[10px] text-white/50 border-b border-white/10 pb-2">
                        <span className="flex items-center gap-1 text-[#2E6FF2] font-semibold">
                          <Globe className="w-3 h-3" /> LIVE STAGING
                        </span>
                        <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9px]">NETLIFY</span>
                      </div>

                      <div className="my-auto py-2">
                        <span className="font-mono text-[9px] text-[#2E6FF2] uppercase tracking-wider block mb-1 font-semibold">
                          {project.category}
                        </span>
                        <h5 className="font-bold text-white text-base tracking-tight truncate font-sans">
                          {project.title}
                        </h5>
                      </div>

                      <div className="flex items-center justify-between text-[9px] text-white/40 border-t border-white/10 pt-2">
                        <span>AMS Studio Build</span>
                        <span>{domain}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Simplified Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center shrink-0">
                      <IconComponent className="w-3.5 h-3.5 text-[#2E6FF2]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-[#08182d]/60 uppercase truncate font-bold">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#08182d]">{project.title}</h4>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 border-t border-[#E4E2DC] text-[#2E6FF2] font-semibold text-xs inline-flex w-full items-center justify-between group-hover/card:underline"
                  >
                    <span>Click here to view the demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
