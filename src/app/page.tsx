'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardNav } from '@/components/CardNav';
import { SpecularButton } from '@/components/SpecularButton';
import { ProjectCalculator } from '@/components/ProjectCalculator';
import { TrembleShowcase } from '@/components/TrembleShowcase';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { 
  ArrowRight, ArrowUpRight, ShieldCheck, Code2, Globe2, Sparkles, 
  ExternalLink, Activity, Truck, Calculator, Utensils, Building2, Mountain,
  Terminal, Workflow, Database, Layers, LayoutGrid, Zap, MoveRight
} from 'lucide-react';

export default function Home() {
  const activeProjects = [
    {
      title: 'Portšped d.o.o.',
      category: 'LOGISTICS & FREIGHT FORWARDING',
      url: 'https://portsped.netlify.app/',
      image: '/portsped-screenshot.png',
      before: 'Manual logistics coordination through emails and scattered spreadsheets.',
      after: 'A centralized platform for managing shipments, operations, and 3D global shipping visualization.',
      status: 'IN DEVELOPMENT',
      icon: Truck,
    },
    {
      title: 'Lenova Računovodstvo',
      category: 'FINANCIAL SERVICES',
      url: 'https://lenova-racunovodstvo.netlify.app/',
      image: '/lenova-screenshot.png',
      before: 'Fragmented client communication and manual tax document handling.',
      after: 'Modern financial operations, tax advisory portal, and automated client document management.',
      status: 'IN DEVELOPMENT',
      icon: Calculator,
    },
  ];

  const conceptDemos = [
    {
      title: 'Gostišče Pri Naju',
      category: 'CULINARY & GASTRONOMY',
      url: 'https://pri-naju.netlify.app/',
      image: '/prinaju-screenshot.png',
      desc: 'Boutique culinary experience, online menu showcase, and reservation flow for high-end dining.',
      tags: ['GASTRONOMY', 'RESERVATIONS', 'LUXURY UX'],
      icon: Utensils,
    },
    {
      title: 'Gostilna Spark',
      category: 'RESTAURANT & EVENTS',
      url: 'https://gostilna-spark.netlify.app/',
      image: '/spark-screenshot.png',
      desc: 'Traditional gastronomy & event catering showcase with modern digital menu system.',
      tags: ['HOSPITALITY', 'EVENTS', 'DIGITAL MENU'],
      icon: Utensils,
    },
    {
      title: 'Formus d.o.o.',
      category: 'CONSTRUCTION & ENGINEERING',
      url: 'https://formus-doo.netlify.app/',
      image: '/formus-screenshot.png',
      desc: 'Heavy industrial engineering, architectural metalworks, and construction portfolio platform.',
      tags: ['INDUSTRIAL', 'ENGINEERING', 'PORTFOLIO'],
      icon: Building2,
    },
    {
      title: 'Gostišče Pod Slavnikom',
      category: 'TOURISM',
      url: 'https://pod-slavnikom.netlify.app/',
      image: '/slavnik-screenshot.png',
      desc: 'Regional tourism, local gastronomy, and countryside accommodation booking showcase.',
      tags: ['TOURISM', 'ACCOMMODATION', 'LOCAL FOOD'],
      icon: Mountain,
    },
  ];

  return (
    <main className="min-h-[100dvh] w-full overflow-x-hidden bg-[#0A0A0A] text-white selection:bg-white/20 relative">
      <CardNav />

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-widest uppercase text-white/50 mb-6 block font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                PRODUCT STUDIO · SLOVENIA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 max-w-4xl leading-[1.1] text-white"
            >
              We build software products and systems <span className="text-white/40">that companies actually use.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed font-normal"
            >
              Custom SaaS platforms, internal tools, and digital products built by an elite product studio from Slovenia. We solve operational problems with custom technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button 
                onClick={() => (window.location.href = '#calculator')}
                className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                Explore our products
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Hero Visual Abstract Representation (Software/UI/Code) */}
            <div className="w-full aspect-square md:aspect-[4/5] rounded-2xl border border-white/10 bg-[#111] overflow-hidden relative shadow-2xl flex flex-col">
              <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#151515]">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden">
                <div className="w-full h-8 bg-white/5 rounded-md w-3/4 animate-pulse" />
                <div className="w-full h-32 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col gap-3">
                  <div className="w-full h-4 bg-white/10 rounded w-1/3" />
                  <div className="w-full h-2 bg-white/5 rounded w-full" />
                  <div className="w-full h-2 bg-white/5 rounded w-5/6" />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2 h-24 bg-white/5 rounded-lg border border-white/5" />
                  <div className="w-1/2 h-24 bg-[#FF2E93]/10 rounded-lg border border-[#FF2E93]/20 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#FF2E93]" />
                  </div>
                </div>
                
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FLAGSHIP PRODUCT (TREMBLE) */}
      <section id="products" className="py-32 px-6 md:px-12 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Tremble Pink Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[#FF2E93]/[0.05] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF2E93] mb-4 block font-medium">
              Built by AMS
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Tremble.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              The Proximity Discovery Experience. <br/>
              Tremble explores how technology can create meaningful real-world connections. Designed and built internally by AMS Solutions.
            </p>
          </div>

          {/* Tremble Showcase Component */}
          <TrembleShowcase />
        </div>
      </section>

      {/* 3. CLIENT CASE STUDIES */}
      <section id="active-builds" className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Client Systems
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              We don&apos;t just build websites. We solve operational problems with custom technology. Here is how we transform businesses.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {activeProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-mono text-xs uppercase text-white/50 tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-8">{project.title}</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">Before AMS</span>
                        <p className="text-white/70 leading-relaxed border-l-2 border-white/10 pl-4">
                          {project.before}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#2E6FF2] block mb-2">After AMS</span>
                        <p className="text-white leading-relaxed border-l-2 border-[#2E6FF2]/50 pl-4 font-medium">
                          {project.after}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                    >
                      View Live System <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <div className="bg-[#111] p-4 rounded-2xl border border-white/10 shadow-2xl relative group">
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                        <span className="font-mono text-[10px] text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6FF2] animate-pulse" />
                          {project.status}
                        </span>
                      </div>
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DEMOS CAROUSEL */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
            Capability Demos
          </h2>
          <p className="text-white/50">Component architecture and industry UI demonstrations.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <ProjectCarousel projects={conceptDemos} />
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              We build systems around your business.
            </h2>
            <p className="text-lg text-white/50">
              Not generic templates. Not bloated corporate software. We engineer exactly what your operations require to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
              <Terminal className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Custom Software</h3>
              <p className="text-white/60 leading-relaxed">
                Internal tools, ERP extensions, and operational platforms designed specifically around your unique business workflow.
              </p>
            </div>
            
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
              <Layers className="w-8 h-8 text-[#2E6FF2] mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">SaaS Development</h3>
              <p className="text-white/60 leading-relaxed">
                From technical architecture and idea validation to a scalable, market-ready software-as-a-service product.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
              <Workflow className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Business Automation</h3>
              <p className="text-white/60 leading-relaxed">
                Replacing repetitive manual processes, connecting APIs, and building automated data pipelines that save hundreds of hours.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
              <LayoutGrid className="w-8 h-8 text-white/40 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Platforms</h3>
              <p className="text-white/60 leading-relaxed">
                High-performance customer portals, B2B marketplaces, and complex web applications built for reliability and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS & GUARANTEE */}
      <section id="process" className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16">
                Direct engineering.<br/>Clear milestones.
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="font-mono text-sm text-white/30 pt-1">01</span>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Discover</h4>
                    <p className="text-white/50">Understand the operational problem, define architecture, and set scope boundaries.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-mono text-sm text-white/30 pt-1">02</span>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Design</h4>
                    <p className="text-white/50">Create the right solution through wireframes, system architecture, and API structure.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-mono text-sm text-white/30 pt-1">03</span>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Build</h4>
                    <p className="text-white/50">Develop and test the product with weekly staging deployments and transparent code reviews.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-mono text-sm text-white/30 pt-1">04</span>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Deliver</h4>
                    <p className="text-white/50">Deploy into your environment, QA verification, and establish ongoing support SLA.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-10 md:p-14 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden">
                <Database className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.02]" />
                
                <h3 className="font-mono text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#2E6FF2]" />
                  Code Ownership Guarantee
                </h3>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-white leading-tight mb-8">
                  "Every project is delivered directly to the client's own GitHub organization. You own the systems we create. No lock-in, no hostage situations."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT / MANIFESTO */}
      <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#111] flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <LogoIcon className="w-12 h-12 text-white/20 mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-light text-white leading-snug mb-8">
            AMS Solutions was created around one idea: companies should not have to adapt their processes to software. <span className="text-white/40">Software should adapt to companies.</span>
          </p>
          <span className="font-mono text-sm uppercase tracking-widest text-white/40">
            A Product Studio from Slovenia
          </span>
        </div>
      </section>

      {/* 8. CTA FUNNEL / CALCULATOR */}
      <section id="calculator" className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Start a project
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Answer 4 quick questions to help us understand your technical requirements and operational needs.
            </p>
          </div>

          <ProjectCalculator />
        </div>
      </section>
    </main>
  );
}
