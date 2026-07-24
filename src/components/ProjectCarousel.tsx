'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  url: string;
  image: string;
  desc: string;
  tags: string[];
  icon: React.ElementType;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Scroll Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E6FF2] font-semibold flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> WHAT WE CAN BUILD FOR YOU
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[#08182d]">
            Industry UI & Design Systems
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={scrollLeft}
            className="w-9 h-9 bg-white border border-[#E4E2DC] rounded-xl flex items-center justify-center text-[#08182d] hover:bg-[#FAF9F6] hover:border-[#08182d]/30 transition-all shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-9 h-9 bg-white border border-[#E4E2DC] rounded-xl flex items-center justify-center text-[#08182d] hover:bg-[#FAF9F6] hover:border-[#08182d]/30 transition-all shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Compact Cards Track */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-5 pb-6 pt-1 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
      >
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start bg-white border border-[#E4E2DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2E6FF2]/40 transition-all duration-300 group/card flex flex-col justify-between"
            >
              {/* Compact Screenshot Preview */}
              <div className="bg-[#08182d] p-2 border-b border-[#E4E2DC] relative">
                <div className="h-5 bg-[#0c223f] border border-white/10 rounded-t px-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[8px] text-white/50 truncate max-w-[130px]">{project.url.replace('https://', '').replace('/', '')}</span>
                  <span className="w-2" />
                </div>
                
                {/* Fixed compact aspect ratio */}
                <div className="relative w-full h-[140px] overflow-hidden rounded-b border-x border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center shrink-0">
                      <IconComponent className="w-3.5 h-3.5 text-[#2E6FF2]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-[#08182d]/50 uppercase truncate font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#08182d] mb-1.5">{project.title}</h4>
                  <p className="text-xs text-[#08182d]/70 leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/60 font-medium"
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
                    <span>Explore Concept Demo</span>
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
