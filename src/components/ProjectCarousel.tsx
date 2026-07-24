'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  url: string;
  image: string;
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
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#2E6FF2] font-semibold flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> WHAT WE CAN BUILD FOR YOU
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#08182d]">
            Industry Demos & Design Systems
          </h3>
        </div>

        <span className="font-tech text-xs text-[#08182d]/50 bg-[#FAF9F6] border border-[#E4E2DC] px-3 py-1.5 rounded-full self-start md:self-auto font-medium">
          ← Hover to pause & explore →
        </span>
      </div>

      {/* Smooth Continuous Infinite Marquee Track (Right to Left) */}
      <div className="w-full overflow-hidden relative">
        
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 py-3">
          {marqueeProjects.map((project, idx) => {
            const IconComponent = project.icon;
            const domain = project.url.replace('https://', '').replace('/', '');

            return (
              <div
                key={idx}
                className="w-[290px] sm:w-[320px] flex-shrink-0 bg-white border border-[#E4E2DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2E6FF2]/50 transition-all duration-300 group/card flex flex-col justify-between"
              >
                {/* Browser Window Frame & Actual Screenshot Image */}
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
                  
                  {/* Real Screenshot Preview Container */}
                  <div className="relative w-full h-[145px] overflow-hidden rounded-b-lg border-x border-b border-white/10 bg-[#0B1424]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-95 group-hover/card:scale-105 transition-transform duration-700"
                      sizes="320px"
                    />
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
    </div>
  );
}
