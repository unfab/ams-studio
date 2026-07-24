'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles } from 'lucide-react';

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
  // Duplicate array for seamless infinite marquee loop
  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="relative group w-full overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#2E6FF2] font-semibold flex items-center gap-2 mb-1">
          <Sparkles className="w-3.5 h-3.5" /> WHAT WE CAN BUILD FOR YOU
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-[#08182d]">
          Industry Demos & Design Systems
        </h3>
      </div>

      {/* Smooth Continuous Infinite Marquee Track (Right to Left, No Hover Stop) */}
      <div className="w-full overflow-hidden relative">
        
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-5 py-2">
          {marqueeProjects.map((project, idx) => {
            const IconComponent = project.icon;
            const domain = project.url.replace('https://', '').replace('/', '');

            return (
              <div
                key={idx}
                className="w-[280px] sm:w-[310px] flex-shrink-0 bg-white border border-[#E4E2DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2E6FF2]/40 transition-all duration-300 group/card flex flex-col justify-between"
              >
                {/* Browser Window Frame Header & Image */}
                <div className="bg-[#08182d] p-2.5 border-b border-[#E4E2DC] relative">
                  <div className="h-6 bg-[#0c223f] border border-white/10 rounded-t-lg px-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="font-mono text-[9px] text-white/60 truncate max-w-[140px]">{domain}</span>
                    <span className="w-2" />
                  </div>
                  
                  {/* Screenshot Image Preview */}
                  <div className="relative w-full h-[135px] overflow-hidden rounded-b-lg border-x border-b border-white/10 bg-[#0B1424]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top opacity-90 group-hover/card:scale-105 transition-transform duration-500"
                        sizes="310px"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                        <span className="font-bold text-white text-sm">{project.title}</span>
                        <span className="font-mono text-[9px] text-[#2E6FF2] uppercase mt-1">{project.category}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Simplified Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-md bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5 text-[#2E6FF2]" />
                      </div>
                      <span className="font-mono text-[10px] tracking-wider text-[#08182d]/50 uppercase truncate font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#08182d]">{project.title}</h4>
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
    </div>
  );
}
