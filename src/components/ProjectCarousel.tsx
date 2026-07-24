import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

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
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Desktop Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E4E2DC] rounded-full items-center justify-center shadow-lg text-[#08182d] hover:bg-[#FAF9F6] transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button 
        onClick={scrollRight}
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E4E2DC] rounded-full items-center justify-center shadow-lg text-[#08182d] hover:bg-[#FAF9F6] transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-8 pt-2 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <div
              key={idx}
              className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center md:snap-start bg-white border border-[#E4E2DC] rounded-2xl overflow-hidden shadow-sm hover:border-[#2E6FF2]/50 transition-all group/card flex flex-col justify-between"
            >
              {/* Real Screenshot Preview Frame */}
              <div className="bg-[#08182d] p-4 border-b border-[#E4E2DC] relative">
                <div className="h-6 bg-[#0c223f] border border-white/10 rounded-t px-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[9px] text-white/50 truncate max-w-[150px]">{project.url.replace('https://', '').replace('/', '')}</span>
                  <span className="w-4" />
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-b border-x border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                    sizes="(max-width: 768px) 85vw, 400px"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 text-[#08182d]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-[#08182d]/60 uppercase truncate">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#08182d] mb-3">{project.title}</h3>
                  <p className="text-sm text-[#08182d]/80 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 border-t border-[#E4E2DC] text-[#2E6FF2] font-semibold text-xs inline-flex w-full items-center justify-between group-hover/card:underline"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Mobile hint */}
      <div className="mt-2 text-center md:hidden">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#08182d]/40">← Swipe to explore →</span>
      </div>
    </div>
  );
}
