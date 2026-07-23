'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardNav } from '@/components/CardNav';
import { SpecularButton } from '@/components/SpecularButton';
import { ProjectCalculator } from '@/components/ProjectCalculator';
import { TrembleShowcase } from '@/components/TrembleShowcase';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { ArrowRight, ArrowUpRight, ShieldCheck, Code2, Globe2, Sparkles, ExternalLink, Activity, Truck, Calculator, Utensils, Building2, Mountain } from 'lucide-react';

export default function Home() {
  const activeProjects = [
    {
      title: 'Portšped d.o.o.',
      category: 'LOGISTICS & FREIGHT FORWARDING',
      url: 'https://portsped.netlify.app/',
      image: '/portsped-screenshot.png',
      desc: 'International logistics, cargo transport management, and supply chain portal with 3D global shipping visualization.',
      tags: ['NEXT.JS 14', 'THREE.JS 3D', 'TAILWIND CSS'],
      status: 'IN DEVELOPMENT',
      icon: Truck,
    },
    {
      title: 'Lenova Računovodstvo',
      category: 'FINANCIAL SERVICES & ACCOUNTING',
      url: 'https://lenova-racunovodstvo.netlify.app/',
      image: '/lenova-screenshot.png',
      desc: 'Modern financial operations, tax advisory portal, and client document management platform for accounting firms.',
      tags: ['NEXT.JS 14', 'INTERACTIVE CALCULATORS', 'FINANCIAL UX'],
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
      category: 'TOURISM & REGIONAL HOSPITALITY',
      url: 'https://pod-slavnikom.netlify.app/',
      image: '/slavnik-screenshot.png',
      desc: 'Regional tourism, local gastronomy, and countryside accommodation booking showcase.',
      tags: ['TOURISM', 'ACCOMMODATION', 'LOCAL FOOD'],
      icon: Mountain,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#08182d] selection:bg-[#2E6FF2] selection:text-white relative">
      {/* Floating Card Navigation */}
      <CardNav />

      {/* 1. HERO SECTION */}
      <section className="pt-44 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-[#08182d]/60 mb-6 block font-medium">
            PRODUCT STUDIO · SLOVENIA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#08182d] leading-[1.08] tracking-tight mb-8 max-w-4xl"
        >
          We build software. <br className="hidden sm:inline" />
          <span className="text-[#08182d]/70">Sometimes it&apos;s a website.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#08182d]/80 max-w-2xl mb-12 leading-relaxed font-normal"
        >
          AMS Solutions is a software product studio. We build custom web applications, specialized SaaS platforms, and internal tools for companies — alongside our own software products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
        >
          <SpecularButton size="lg" onClick={() => (window.location.href = '#calculator')}>
            Build Project Scope <Sparkles className="w-4 h-4 ml-2 inline" />
          </SpecularButton>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-md border border-[#E4E2DC] text-[#08182d] hover:bg-black/5 transition-colors"
          >
            Explore our products & builds
          </a>
        </motion.div>
      </section>

      {/* 2. PROOF STRIP */}
      <section className="border-y border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-sm font-medium text-[#08182d]/80">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-[#2E6FF2] shrink-0" />
              <span>Full-stack: React, Next.js, Node.js, Flutter, Firebase.</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2E6FF2] shrink-0" />
              <span>Code ships directly to your own GitHub organization.</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-[#2E6FF2] shrink-0" />
              <span>Based in Koper, working with clients across EU & global.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION (TREMBLE FOCUS) */}
      <section id="products" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
            [01] IN-HOUSE FLAGSHIP PRODUCT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d]">
            We build our own software too.
          </h2>
        </div>

        {/* Dedicated Tremble Showcase */}
        <TrembleShowcase />
      </section>

      {/* 4. WHAT WE ARE BUILDING (ACTIVE CLIENT BUILDS) */}
      <section id="active-builds" className="py-24 px-6 md:px-12 border-t border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
                [02] ACTIVE CLIENT BUILDS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d]">
                What we are building.
              </h2>
            </div>
            <p className="font-mono text-xs text-[#2E6FF2] flex items-center gap-2">
              <Activity className="w-4 h-4 animate-pulse" />
              STAGING & DEVELOPMENT IN PROGRESS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E4E2DC] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#2E6FF2]/50 transition-colors group"
                >
                  {/* Real Screenshot Preview Frame */}
                  <div className="bg-[#08182d] p-4 border-b border-[#E4E2DC] relative">
                    <div className="h-6 bg-[#0c223f] border border-white/10 rounded-t px-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <span className="font-mono text-[9px] text-white/50">{project.url.replace('https://', '')}</span>
                      <span className="w-3" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-b border-x border-b border-white/10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1280}
                        height={800}
                        className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center text-[#08182d]">
                            <IconComponent className="w-3.5 h-3.5 text-[#2E6FF2]" />
                          </div>
                          <span className="font-mono text-[10px] uppercase text-[#08182d]/60 font-medium">
                            {project.category}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase bg-[#2E6FF2]/10 border border-[#2E6FF2]/20 px-2 py-0.5 rounded text-[#2E6FF2] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6FF2] animate-pulse" />
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#08182d] mb-2 group-hover:text-[#2E6FF2] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#08182d]/80 leading-relaxed mb-6">
                        {project.desc}
                      </p>

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
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-4 border-t border-[#E4E2DC] text-[#2E6FF2] font-semibold text-xs inline-flex items-center justify-between group-hover:underline"
                    >
                      <span>View Live Staging Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONCEPT BUILDS & CAPABILITY DEMOS */}
      <section id="concept-demos" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
            [03] DEMOS & CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d] mb-3">
            What we can build for you.
          </h2>
          <p className="text-base text-[#08182d]/70 max-w-2xl">
            Live interactive demos showcasing our design aesthetic, component architecture, and industry capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptDemos.map((demo, idx) => {
            const IconComponent = demo.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E4E2DC] rounded-xl overflow-hidden shadow-sm hover:border-[#2E6FF2]/50 transition-all group flex flex-col justify-between"
              >
                {/* Real Screenshot Preview Frame */}
                <div className="bg-[#08182d] p-3 border-b border-[#E4E2DC] relative">
                  <div className="h-5 bg-[#0c223f] border border-white/10 rounded-t px-2 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="font-mono text-[8px] text-white/50">{demo.url.replace('https://', '')}</span>
                    <span className="w-2" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-b border-x border-b border-white/10">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      width={1280}
                      height={800}
                      className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/60 flex items-center gap-1.5">
                        <IconComponent className="w-3 h-3 text-[#2E6FF2]" />
                        {demo.category}
                      </span>
                      <span className="font-mono text-[10px] text-[#08182d]/40">INTERACTIVE DEMO</span>
                    </div>

                    <h4 className="font-bold text-lg text-[#08182d] mb-2 group-hover:text-[#2E6FF2] transition-colors">
                      {demo.title}
                    </h4>
                    <p className="text-xs text-[#08182d]/75 leading-relaxed mb-4">
                      {demo.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {demo.tags.map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] bg-[#FAF9F6] border border-[#E4E2DC] px-1.5 py-0.5 rounded text-[#08182d]/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 border-t border-[#E4E2DC] text-[#08182d] hover:text-[#2E6FF2] font-semibold text-xs inline-flex items-center justify-between transition-colors"
                  >
                    <span>Launch Live Demo Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#2E6FF2]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="py-28 px-6 md:px-12 border-t border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
              [04] SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d]">
              What we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E4E2DC] rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#08182d]/40">[01]</span>
                  <span className="font-mono text-[10px] uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#2E6FF2]">
                    CUSTOM BUILD
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#08182d] mb-3">Software Engineering</h3>
                <p className="text-sm text-[#08182d]/80 leading-relaxed mb-6">
                  Custom web applications, specialized SaaS platforms, internal business tools, complex n8n style workflow automation, and custom API integrations.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E4E2DC]">
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">NEXT.JS 14</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">NODE / PYTHON</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">N8N WORKFLOWS</span>
              </div>
            </div>

            <div className="bg-white border border-[#E4E2DC] rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#08182d]/40">[02]</span>
                  <span className="font-mono text-[10px] uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#2E6FF2]">
                    STOREFRONTS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#08182d] mb-3">Web & Shopify</h3>
                <p className="text-sm text-[#08182d]/80 leading-relaxed mb-6">
                  High-converting corporate marketing websites, custom Shopify implementations, component design systems, and rigorous UI/UX performance optimization.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E4E2DC]">
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">SHOPIFY HYDROGEN</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">TAILWIND CSS</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">DESIGN SYSTEMS</span>
              </div>
            </div>

            <div className="bg-white border border-[#E4E2DC] rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#08182d]/40">[03]</span>
                  <span className="font-mono text-[10px] uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#2E6FF2]">
                    SLA & SUPPORT
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#08182d] mb-3">Ongoing Partnership</h3>
                <p className="text-sm text-[#08182d]/80 leading-relaxed mb-6">
                  Dedicated maintenance SLAs, security updates, continuous feature development, and infrastructure monitoring for active digital products.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E4E2DC]">
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">SLA GUARANTEE</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">24/7 MONITORING</span>
                <span className="font-mono text-[10px] bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/70">FEATURE SPRINTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (PROCESS + GUARANTEE) */}
      <section id="process" className="py-28 px-6 md:px-12 border-t border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
              [05] HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d]">
              Direct engineering. Clear milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="border-t-2 border-[#08182d] pt-4">
              <span className="font-mono text-xs text-[#2E6FF2] block mb-2">Phase 01 · 1-2 wks</span>
              <h4 className="font-bold text-lg mb-2">Discovery & Audit</h4>
              <p className="text-sm text-[#08182d]/70">Architecture definition, scope boundaries, and technical audit.</p>
            </div>
            <div className="border-t-2 border-[#08182d] pt-4">
              <span className="font-mono text-xs text-[#2E6FF2] block mb-2">Phase 02 · 2 wks</span>
              <h4 className="font-bold text-lg mb-2">UX & Architecture</h4>
              <p className="text-sm text-[#08182d]/70">Wireframes, component design system, and API structure.</p>
            </div>
            <div className="border-t-2 border-[#08182d] pt-4">
              <span className="font-mono text-xs text-[#2E6FF2] block mb-2">Phase 03 · 4-8 wks</span>
              <h4 className="font-bold text-lg mb-2">Sprint Engineering</h4>
              <p className="text-sm text-[#08182d]/70">Weekly staging deployments and code reviews in your repo.</p>
            </div>
            <div className="border-t-2 border-[#08182d] pt-4">
              <span className="font-mono text-xs text-[#2E6FF2] block mb-2">Phase 04 · Ongoing</span>
              <h4 className="font-bold text-lg mb-2">Launch & Support</h4>
              <p className="text-sm text-[#08182d]/70">Deployment, QA verification, and ongoing feature updates.</p>
            </div>
          </div>

          {/* Code Ownership Guarantee Quote */}
          <div className="bg-white border-l-4 border-[#2E6FF2] border-y border-r border-[#E4E2DC] p-8 md:p-10 rounded-r-xl shadow-sm">
            <blockquote className="text-xl md:text-2xl font-semibold text-[#08182d] leading-relaxed mb-3">
              &ldquo;Your code lives directly in your GitHub organization from day one. It transfers completely on final payment. No lock-in, no hostage situations.&rdquo;
            </blockquote>
            <span className="font-mono text-xs text-[#08182d]/60 uppercase tracking-wider block">
              AMS Solutions Engineering Principle
            </span>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROJECT CALCULATOR / SCOPE BUILDER SECTION */}
      <section id="calculator" className="py-28 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
            [06] INTERACTIVE PROJECT CALCULATOR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d] mb-4">
            Build your project scope in 60 seconds.
          </h2>
          <p className="text-base text-[#08182d]/70 max-w-xl mx-auto">
            Answer 4 quick questions about your project to get an estimated architecture scope and tailored proposal.
          </p>
        </div>

        {/* Multi-step Project Scope Builder */}
        <ProjectCalculator />
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-[#E4E2DC] bg-[#FAF9F6] py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <LogoIcon className="w-7 h-7 text-[#08182d]" />
            <span className="font-bold text-[#08182d] text-lg tracking-tight">AMS Solutions d.o.o.</span>
          </div>

          <p className="text-xs font-mono text-[#08182d]/60 text-center md:text-right">
            © {new Date().getFullYear()} AMS Solutions d.o.o. · Koper, Slovenia · hello@amssolutions.si
          </p>
        </div>
      </footer>
    </main>
  );
}
