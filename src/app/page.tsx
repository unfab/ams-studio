'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardNav } from '@/components/CardNav';
import { SpecularButton } from '@/components/SpecularButton';
import { ProjectCalculator } from '@/components/ProjectCalculator';
import { LogoFull } from '@/components/ui/LogoFull';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { ArrowRight, CheckCircle2, ShieldCheck, Code2, Globe2, Layout, Database, Bot, Sparkles, Laptop, Smartphone } from 'lucide-react';

export default function Home() {
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
            Explore our products
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
            [01] IN-HOUSE PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d]">
            We build our own software too.
          </h2>
        </div>

        <div className="bg-white border border-[#E4E2DC] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Architecture Area */}
          <div className="lg:col-span-6 bg-[#FAF9F6] border-b lg:border-b-0 lg:border-r border-[#E4E2DC] p-8 md:p-12 flex flex-col justify-between min-h-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#2E6FF2] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E6FF2] animate-pulse" />
                ACTIVE DEVELOPMENT
              </span>
              <span className="font-mono text-xs text-[#08182d]/50">v1.0-alpha</span>
            </div>

            {/* Architecture Card UI */}
            <div className="bg-white border border-[#E4E2DC] rounded-lg p-6 my-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <LogoIcon className="w-6 h-6 text-[#08182d]" />
                <span className="font-bold text-sm text-[#08182d]">Tremble Architecture</span>
              </div>
              <div className="space-y-2.5 font-mono text-xs text-[#08182d]/70">
                <div className="p-2 bg-[#FAF9F6] border border-[#E4E2DC] rounded flex justify-between">
                  <span>DISCOVERY:</span>
                  <span className="text-[#2E6FF2]">Proximity Geohash</span>
                </div>
                <div className="p-2 bg-[#FAF9F6] border border-[#E4E2DC] rounded flex justify-between">
                  <span>COMPUTE:</span>
                  <span className="text-[#2E6FF2]">RAM Ephemeral Processing</span>
                </div>
                <div className="p-2 bg-[#FAF9F6] border border-[#E4E2DC] rounded flex justify-between">
                  <span>PRIVACY:</span>
                  <span className="text-[#2E6FF2]">Zero Location Storage</span>
                </div>
              </div>
            </div>

            <p className="font-mono text-xs text-[#08182d]/60">
              Architecture engineered for zero persistent tracking logs.
            </p>
          </div>

          {/* Text Info */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-[#FAF9F6] border border-[#E4E2DC] rounded text-xs font-mono text-[#08182d] mb-6">
                Tremble Engine
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#08182d] mb-4">
                Proximity Discovery Engine
              </h3>
              <p className="text-[#08182d]/80 leading-relaxed mb-6">
                Tremble is our proprietary proximity-discovery platform built for mobile and web. It solves real-time localized discovery without storing continuous GPS telemetry or harvesting sensitive personal location history.
              </p>
              <ul className="space-y-2 mb-8 font-medium text-sm text-[#08182d]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6FF2]" />
                  <span>Sub-second match resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6FF2]" />
                  <span>Privacy-first architecture by default</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6FF2]" />
                  <span>Cross-platform iOS & Android compatibility</span>
                </li>
              </ul>
            </div>

            <a
              href="#calculator"
              className="text-[#2E6FF2] font-semibold text-sm inline-flex items-center gap-1 hover:underline group"
            >
              <span>Inquire about licensing or tech partnership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (WITH TECHNICAL BADGES) */}
      <section id="services" className="py-28 px-6 md:px-12 border-t border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
              [02] SERVICES
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

      {/* 5. CONCEPT BUILDS & PROJECT CARDS */}
      <section id="concept-builds" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
            [03] CONCEPT BUILDS & PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#08182d] mb-3">
            Self-initiated work.
          </h2>
          <p className="text-base text-[#08182d]/70 max-w-2xl">
            Internal experiments and concept builds we created to refine our tech stack, test user interfaces, and showcase capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Concept Card 1 */}
          <div className="bg-white border border-[#E4E2DC] rounded-xl p-6 shadow-sm hover:border-[#2E6FF2]/50 transition-colors group">
            <div className="bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg p-6 mb-5 aspect-[16/10] flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-white border border-[#E4E2DC] rounded p-4 font-mono text-xs space-y-3 shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#E4E2DC]">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E4E2DC]" />
                    <span className="w-2 h-2 rounded-full bg-[#E4E2DC]" />
                    <span className="w-2 h-2 rounded-full bg-[#E4E2DC]" />
                  </div>
                  <span className="text-[10px] text-[#08182d]/40">workspace.ams</span>
                </div>
                <div className="h-4 bg-[#FAF9F6] border border-[#E4E2DC] rounded w-1/3" />
                <div className="h-16 bg-[#FAF9F6] border border-[#E4E2DC] rounded w-full flex items-center justify-center text-[#2E6FF2] font-semibold">
                  METRICS & WORKFLOW ENGINE
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/60">
                SAAS DASHBOARD
              </span>
              <span className="font-mono text-xs text-[#08182d]/50">Concept — 2026</span>
            </div>
            <h4 className="font-bold text-lg text-[#08182d] group-hover:text-[#2E6FF2] transition-colors">
              Analytical Workspace & Metrics UI
            </h4>
          </div>

          {/* Concept Card 2 */}
          <div className="bg-white border border-[#E4E2DC] rounded-xl p-6 shadow-sm hover:border-[#2E6FF2]/50 transition-colors group">
            <div className="bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg p-6 mb-5 aspect-[16/10] flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-white border border-[#E4E2DC] rounded p-4 font-mono text-xs space-y-3 shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#E4E2DC]">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E4E2DC]" />
                    <span className="w-2 h-2 rounded-full bg-[#E4E2DC]" />
                  </div>
                  <span className="text-[10px] text-[#08182d]/40">automation.n8n</span>
                </div>
                <div className="h-4 bg-[#FAF9F6] border border-[#E4E2DC] rounded w-1/2" />
                <div className="h-16 bg-[#2E6FF2]/10 border border-[#2E6FF2]/20 rounded w-full flex items-center justify-center text-[#2E6FF2] font-semibold">
                  AUTOMATED LEAD PIPELINE
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase bg-[#FAF9F6] border border-[#E4E2DC] px-2 py-0.5 rounded text-[#08182d]/60">
                AUTOMATION
              </span>
              <span className="font-mono text-xs text-[#08182d]/50">Concept — 2026</span>
            </div>
            <h4 className="font-bold text-lg text-[#08182d] group-hover:text-[#2E6FF2] transition-colors">
              Internal Lead Processing Pipeline
            </h4>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (PROCESS + GUARANTEE) */}
      <section id="process" className="py-28 px-6 md:px-12 border-t border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
              [04] HOW WE WORK
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

      {/* 7. INTERACTIVE PROJECT CALCULATOR / SCOPE BUILDER SECTION */}
      <section id="calculator" className="py-28 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#08182d]/60 mb-3 block">
            [05] INTERACTIVE PROJECT CALCULATOR
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

      {/* 8. FOOTER */}
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
