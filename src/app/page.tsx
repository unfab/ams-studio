'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CardNav } from '@/components/CardNav';
import { SpecularButton } from '@/components/SpecularButton';
import { ProjectCalculator } from '@/components/ProjectCalculator';
import { TrembleShowcase } from '@/components/TrembleShowcase';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { LogoIcon } from '@/components/ui/LogoIcon';
import { 
  ArrowRight, ArrowUpRight, ShieldCheck, Code2, Globe2, Sparkles, 
  Activity, Truck, Calculator, Utensils, Building2, Mountain,
  Terminal, Workflow, Database, Layers, LayoutGrid, CheckCircle2, ChevronRight, RefreshCw, Cpu, Hammer
} from 'lucide-react';

export default function Home() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const activeProjects = [
    {
      title: 'Portšped d.o.o.',
      category: 'LOGISTICS & FREIGHT FORWARDING',
      url: 'https://portsped.netlify.app/',
      image: '/portsped-screenshot.png',
      before: 'Manual logistics coordination through emails and scattered spreadsheets.',
      after: 'Centralized platform for managing international freight, customs clearance, and 3D global logistics visualization.',
      status: 'IN DEVELOPMENT · PHASE 2 ROLLOUT',
      icon: Truck,
    },
    {
      title: 'Lenova Računovodstvo',
      category: 'FINANCIAL & TAX ADVISORY',
      url: 'https://lenova-racunovodstvo.netlify.app/',
      image: '/lenova-screenshot.png',
      before: 'Fragmented client communication and manual tax document handling.',
      after: 'Modern financial portal, automated client document workflows, and digital tax advisory system.',
      status: 'IN DEVELOPMENT · STAGING ACTIVE',
      icon: Calculator,
    },
  ];

  // REAL NETLIFY DEMO BUILDS SUBMITTED BY USER
  const conceptDemos = [
    {
      title: 'Piran Inštalacije',
      category: 'HVAC & MECH ENGINEERING',
      url: 'https://piran-instalacije.netlify.app/',
      tags: ['HVAC', 'ENGINEERING', 'ENERGY'],
      icon: Building2,
    },
    {
      title: 'Formus d.o.o.',
      category: 'CNC & METALWORK',
      url: 'https://formus-doo.netlify.app/',
      tags: ['INDUSTRIAL', 'CNC', 'MANUFACTURING'],
      icon: Building2,
    },
    {
      title: 'Astra Group',
      category: 'CONSTRUCTION & INFRASTRUCTURE',
      url: 'https://astra-group.netlify.app/',
      tags: ['CONSTRUCTION', 'CIVIL', 'B2B'],
      icon: Building2,
    },
    {
      title: 'VV Inženiring',
      category: 'ENGINEERING & ARCHITECTURE',
      url: 'https://vv-inzeniring.netlify.app/',
      tags: ['ENGINEERING', 'ARCHITECTURE', 'B2B'],
      icon: Mountain,
    },
    {
      title: 'Luft Bistro',
      category: 'GASTRONOMY & HOSPITALITY',
      url: 'https://luft-bistro.netlify.app/',
      tags: ['GASTRONOMY', 'HOSPITALITY', 'MENU'],
      icon: Utensils,
    },
    {
      title: 'Počkaj d.o.o.',
      category: 'STEEL STRUCTURES',
      url: 'https://pockaj.netlify.app/',
      tags: ['STEEL', 'INDUSTRIAL', 'INFRASTRUCTURE'],
      icon: Building2,
    },
    {
      title: 'Gopack d.o.o.',
      category: 'PACKAGING AUTOMATION',
      url: 'https://gopack-doo.netlify.app/',
      tags: ['AUTOMATION', 'PACKAGING', 'MACHINERY'],
      icon: Cpu,
    },
    {
      title: 'Kleparstvo Kodelja',
      category: 'ROOFING & SHEET METAL',
      url: 'https://kleparstvo-kodelja.netlify.app/',
      tags: ['ROOFING', 'TINWORK', 'CRAFT'],
      icon: Building2,
    },
    {
      title: 'Restavracija Delfin',
      category: 'HOSPITALITY & DINING',
      url: 'https://restavracija-delfin.netlify.app/',
      tags: ['GASTRONOMY', 'RESERVATIONS', 'SEASIDE'],
      icon: Utensils,
    },
    {
      title: 'Ferokor',
      category: 'METALLURGY & TRADING',
      url: 'https://ferokor.netlify.app/',
      tags: ['METALS', 'LOGISTICS', 'TRADING'],
      icon: Truck,
    },
    {
      title: 'Krovstvo Šuštar',
      category: 'ROOFING & BUILDING',
      url: 'https://krovstvo-sustar.netlify.app/',
      tags: ['ROOFING', 'CONSTRUCTION', 'CRAFT'],
      icon: Building2,
    },
    {
      title: 'Mizarstvo Likar',
      category: 'CUSTOM JOINERY & WOOD',
      url: 'https://mizarstvo-likar.netlify.app/',
      tags: ['WOODWORK', 'INTERIOR', 'CUSTOM'],
      icon: Hammer,
    },
    {
      title: 'GM Marc',
      category: 'CIVIL CONSTRUCTION',
      url: 'https://gm-marc.netlify.app/',
      tags: ['CIVIL', 'EARTHWORKS', 'HEAVY'],
      icon: Building2,
    },
  ];

  const servicesData = [
    {
      id: 'custom-software',
      title: 'Custom Software Systems',
      subtitle: 'Bespoke internal tools & operational ERPs',
      icon: Terminal,
      desc: 'We engineer internal management platforms, inventory systems, and operational backends built specifically around your company&apos;s unique daily workflow.',
      features: [
        'Direct integration with existing databases & legacy systems',
        'Custom administrative dashboards & role-based access',
        'High-performance backend API architecture in Node / Go',
        'Zero monthly per-user licensing fees'
      ],
      codeSnippet: `// Custom Warehouse Routing Engine
export async function processShipment(orderId: string) {
  const shipment = await db.orders.findUnique({ where: { id: orderId } });
  const optimalRoute = await routingEngine.calculate(shipment.origin, shipment.dest);
  return await dispatchCarrier(shipment, optimalRoute);
}`,
    },
    {
      id: 'saas-platforms',
      title: 'SaaS Platform Engineering',
      subtitle: 'From technical architecture to market launch',
      icon: Layers,
      desc: 'We help founders and businesses build scalable SaaS products from the ground up, with production-ready multi-tenant infrastructure and payment processing.',
      features: [
        'Stripe & e-commerce billing integration',
        'Multi-tenant database schema & security rules',
        'High-converting modern UI/UX design language',
        'Scalable deployment on Cloudflare & AWS'
      ],
      codeSnippet: `// Multi-Tenant Tenant Isolation Middleware
export function withTenantGuard(req: NextRequest) {
  const tenantId = req.headers.get("x-tenant-id");
  if (!tenantId) throw new SecurityError("Unauthorized tenant");
  return setContext({ tenantId });
}`,
    },
    {
      id: 'business-automation',
      title: 'Business Automation & AI',
      subtitle: 'Automated workflows & API pipelines',
      icon: Workflow,
      desc: 'Replace hundreds of hours of manual copy-pasting, lead distribution, and invoicing with automated n8n workflows and AI-assisted data processing.',
      features: [
        'Automated CRM & lead intake pipelines',
        'Custom webhooks, Zapier & n8n workflow bridges',
        'AI document parsing & automated email responses',
        'Real-time Slack & Telegram notification bots'
      ],
      codeSnippet: `// Automated Lead Enrichment Pipeline
workflow.on('new_lead', async (lead) => {
  const enriched = font.enrich(lead.email);
  await crm.leads.create({ ...lead, ...enriched });
  await slack.notify('#sales-leads', \`New lead: \${lead.company}\`);
});`,
    },
    {
      id: 'digital-portals',
      title: 'Digital Storefronts & Portals',
      subtitle: 'High-converting web platforms & B2B portals',
      icon: LayoutGrid,
      desc: 'We build ultra-fast, modern web platforms and B2B portals engineered for speed, search engine authority, and high conversion rates.',
      features: [
        'Sub-second page load times on global Edge CDN',
        'Shopify Hydrogen & headless e-commerce store-fronts',
        'Dynamic interactive 3D & custom animation components',
        'B2B customer self-service portals & quoting engines'
      ],
      codeSnippet: `// Edge-Rendered Dynamic Quoting Engine
export const config = { runtime: 'edge' };
export default async function handler(req: Request) {
  const quote = await calculateB2BQuote(await req.json());
  return new Response(JSON.stringify(quote), { headers: { 'content-type': 'application/json' } });
}`,
    },
  ];

  return (
    <main className="min-h-[100dvh] w-full overflow-x-hidden bg-[#FAF9F6] text-[#08182d] selection:bg-[#2E6FF2] selection:text-white relative">
      <CardNav />

      {/* 1. HERO SECTION (FULL WIDTH GRID BACKGROUND) */}
      <section className="w-full bg-dev-grid border-b border-[#E4E2DC] pt-48 pb-32 px-6 md:px-12 relative overflow-hidden">
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] bg-[#2E6FF2]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl leading-[1.08] text-[#08182d]"
            >
              We build software products and systems <span className="text-[#08182d]/40 font-normal">that companies actually use.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#08182d]/70 max-w-2xl mb-10 leading-relaxed font-normal"
            >
              Custom SaaS platforms, internal business tools, and digital products built by an elite engineering team from Slovenia. We solve operational problems with custom technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <SpecularButton size="lg" onClick={() => (window.location.href = '#calculator')}>
                Start a project <ArrowRight className="w-4 h-4 ml-2 inline" />
              </SpecularButton>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-xl border border-[#E4E2DC] bg-white text-[#08182d] hover:bg-[#FAF9F6] hover:border-[#08182d]/30 transition-all shadow-sm"
              >
                Explore our products
              </a>
            </motion.div>
          </div>

          {/* Hero Visual Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full rounded-2xl border border-[#E4E2DC] bg-white shadow-2xl overflow-hidden relative">
              
              <div className="h-10 bg-[#08182d] px-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-tech text-xs text-white/50 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#2E6FF2]" /> ams-core-engine.ts
                </span>
                <span className="w-4" />
              </div>

              <div className="p-6 bg-[#0B1424] text-white font-tech text-xs leading-relaxed space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/40">
                  <span>// AMS STUDIO SYSTEM STATUS</span>
                  <span className="text-[#2E6FF2] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 animate-pulse" /> OPERATIONAL
                  </span>
                </div>

                <div className="space-y-1 text-white/80">
                  <p><span className="text-[#F4436C]">const</span> studio = <span className="text-[#F5C842]">new</span> AMSSolutions();</p>
                  <p><span className="text-[#2E6FF2]">await</span> studio.deploySystem(&#123;</p>
                  <p className="pl-4">client: <span className="text-green-400">&quot;Enterprise Logistics&quot;</span>,</p>
                  <p className="pl-4">architecture: <span className="text-green-400">&quot;Custom SaaS & ERP&quot;</span>,</p>
                  <p className="pl-4">codeOwnership: <span className="text-[#F5C842]">100%</span>,</p>
                  <p>&#125;);</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 font-sans mt-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span>LIVE PIPELINE METRICS</span>
                    <span className="text-green-400">99.99% SLA Uptime</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2E6FF2] h-full w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40 font-mono pt-1">
                    <span>Latency: 14ms</span>
                    <span>Direct GitHub Delivery</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FLAGSHIP PRODUCT (TREMBLE - HIGH-CONTRAST DARK/ROSE PAGE-BREAK SECTION) */}
      <section id="products" className="py-28 px-6 md:px-12 bg-[#1A1A18] text-white border-y border-black relative overflow-hidden">
        
        {/* Tremble Signature Radial Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-[#F4436C]/[0.12] blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <span className="font-tech text-xs uppercase tracking-widest text-[#F4436C] mb-3 block font-semibold">
              IN-HOUSE FLAGSHIP PRODUCT
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
              Tremble<span className="text-[#F4436C]">.</span>
            </h2>
            <p className="font-display text-lg md:text-xl italic text-white/70 max-w-2xl mx-auto">
              The Proximity Discovery Experience. Engineered from scratch by AMS Solutions.
            </p>
          </div>

          <TrembleShowcase />
        </div>
      </section>

      {/* 3. CLIENT SYSTEMS */}
      <section id="active-builds" className="py-28 px-6 md:px-12 border-b border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-tech text-xs uppercase tracking-widest text-[#2E6FF2] mb-3 block font-semibold">
              REAL WORLD IMPLEMENTATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#08182d] mb-4">
              Client Systems
            </h2>
            <p className="text-base md:text-lg text-[#08182d]/70 max-w-2xl leading-relaxed">
              We solve operational bottlenecks with custom software. Below are active enterprise builds currently undergoing phased staging & deployment.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {activeProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white border border-[#E4E2DC] rounded-3xl p-8 md:p-12 shadow-sm">
                  
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E4E2DC] flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-[#2E6FF2]" />
                      </div>
                      <span className="font-tech text-xs uppercase text-[#08182d]/60 font-semibold tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-700 text-xs font-tech font-semibold mb-6">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      <span>{project.status}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#08182d] mb-6">{project.title}</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <span className="font-tech text-[11px] uppercase tracking-widest text-[#08182d]/50 block mb-2 font-semibold">BEFORE AMS</span>
                        <p className="text-sm text-[#08182d]/70 leading-relaxed border-l-2 border-[#E4E2DC] pl-4">
                          {project.before}
                        </p>
                      </div>
                      <div>
                        <span className="font-tech text-[11px] uppercase tracking-widest text-[#2E6FF2] block mb-2 font-semibold">AFTER AMS</span>
                        <p className="text-sm text-[#08182d] leading-relaxed border-l-2 border-[#2E6FF2] pl-4 font-semibold">
                          {project.after}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E4E2DC] text-xs font-semibold text-[#08182d] hover:border-[#2E6FF2] hover:text-[#2E6FF2] transition-all group"
                    >
                      <span>View Staging Preview (In Development)</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <div className="bg-[#08182d] p-3 rounded-2xl border border-[#E4E2DC] shadow-lg relative group">
                      <div className="h-7 bg-[#0c223f] border-b border-white/10 px-3 flex items-center justify-between rounded-t-lg">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                        </div>
                        <span className="font-tech text-[10px] text-white/50">{project.url.replace('https://', '')}</span>
                        <span className="w-4" />
                      </div>
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-b-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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

      {/* 4. COMPACT CONCEPT CAROUSEL ("WHAT WE CAN BUILD FOR YOU") */}
      <section id="concept-builds" className="py-24 px-6 md:px-12 border-b border-[#E4E2DC] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ProjectCarousel projects={conceptDemos} />
        </div>
      </section>

      {/* 5. INTERACTIVE SERVICES ("CARD STACK / SHUFFLE") */}
      <section id="services" className="py-28 px-6 md:px-12 border-b border-[#E4E2DC] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="font-tech text-xs uppercase tracking-widest text-[#2E6FF2] mb-3 block font-semibold">
              ENGINEERING PILLARS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#08182d] mb-4">
              We build systems around your business.
            </h2>
            <p className="text-base md:text-lg text-[#08182d]/70 leading-relaxed">
              Not generic templates or bloated software. Select a pillar to explore our system capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Service Navigation Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {servicesData.map((service, idx) => {
                const IconComp = service.icon;
                const isActive = activeServiceTab === idx;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceTab(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      isActive 
                        ? 'bg-white border-[#2E6FF2] shadow-md ring-1 ring-[#2E6FF2]/30' 
                        : 'bg-white/60 border-[#E4E2DC] hover:bg-white hover:border-[#08182d]/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#08182d] text-white' : 'bg-[#FAF9F6] border border-[#E4E2DC] text-[#08182d]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-base text-[#08182d]">{service.title}</h4>
                        {isActive && <ChevronRight className="w-4 h-4 text-[#2E6FF2]" />}
                      </div>
                      <p className="text-xs text-[#08182d]/60 mt-1 font-medium">{service.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Pillar Showcase Detail Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-white border border-[#E4E2DC] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#08182d] text-white flex items-center justify-center">
                        {React.createElement(servicesData[activeServiceTab].icon, { className: "w-5 h-5" })}
                      </div>
                      <div>
                        <span className="font-tech text-[10px] uppercase tracking-widest text-[#2E6FF2] font-semibold block">PILLAR 0{activeServiceTab + 1}</span>
                        <h3 className="text-2xl font-bold text-[#08182d]">{servicesData[activeServiceTab].title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-[#08182d]/80 leading-relaxed mb-8 font-normal">
                      {servicesData[activeServiceTab].desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {servicesData[activeServiceTab].features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-medium text-[#08182d]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#2E6FF2] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#08182d] rounded-2xl p-4 border border-white/10 text-white font-tech text-[11px] overflow-x-auto">
                    <div className="flex items-center justify-between text-white/40 pb-2 mb-2 border-b border-white/10 text-[10px]">
                      <span>SYSTEM ARCHITECTURE SNIPPET</span>
                      <span>TypeScript / Node</span>
                    </div>
                    <pre className="text-white/80 leading-relaxed overflow-x-auto">
                      <code>{servicesData[activeServiceTab].codeSnippet}</code>
                    </pre>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PROCESS & GUARANTEE */}
      <section id="process" className="py-28 px-6 md:px-12 border-b border-[#E4E2DC] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <span className="font-tech text-xs uppercase tracking-widest text-[#2E6FF2] mb-3 block font-semibold">
                THE STUDIO METHOD
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#08182d] mb-12">
                Direct engineering.<br/>Clear milestones.
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <span className="font-tech text-sm font-bold text-[#2E6FF2] pt-0.5">01</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#08182d] mb-1.5">Discover & Scope</h4>
                    <p className="text-sm text-[#08182d]/70 leading-relaxed">Analyze operational bottlenecks, define exact technical scope, and establish database architecture.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-tech text-sm font-bold text-[#2E6FF2] pt-0.5">02</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#08182d] mb-1.5">Design & Prototype</h4>
                    <p className="text-sm text-[#08182d]/70 leading-relaxed">Create modern component design systems, wireframes, and API data models.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-tech text-sm font-bold text-[#2E6FF2] pt-0.5">03</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#08182d] mb-1.5">Sprint Build</h4>
                    <p className="text-sm text-[#08182d]/70 leading-relaxed">Develop and test features with weekly live staging builds and direct GitHub code access.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-tech text-sm font-bold text-[#2E6FF2] pt-0.5">04</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#08182d] mb-1.5">Deploy & Support</h4>
                    <p className="text-sm text-[#08182d]/70 leading-relaxed">Production deployment into your infrastructure with ongoing maintenance and SLA monitoring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-10 md:p-12 rounded-3xl bg-[#FAF9F6] border border-[#E4E2DC] shadow-sm relative overflow-hidden">
                <Database className="absolute -right-8 -bottom-8 w-60 h-60 text-[#08182d]/[0.03]" />
                
                <div className="font-tech text-xs uppercase tracking-widest text-[#2E6FF2] mb-6 flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#2E6FF2]" />
                  Code Ownership Guarantee
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-bold text-[#08182d] leading-snug mb-6">
                  &ldquo;Every project is delivered directly to the client&apos;s own GitHub organization. You own 100% of the source code and systems we create.&rdquo;
                </blockquote>
                
                <p className="text-xs text-[#08182d]/60 font-tech">
                  No proprietary framework lock-in. No hidden subscription traps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT MANIFESTO */}
      <section className="py-28 px-6 md:px-12 border-b border-[#E4E2DC] bg-[#08182d] flex items-center justify-center text-center text-white">
        <div className="max-w-3xl mx-auto">
          <LogoIcon className="w-10 h-10 text-white/30 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
            AMS Solutions was founded on one principle: companies should not have to adapt their processes to rigid software. <span className="text-[#2E6FF2] font-medium">Software should adapt to companies.</span>
          </p>
          <span className="font-tech text-xs uppercase tracking-widest text-white/40">
            A Software Product Studio from Slovenia
          </span>
        </div>
      </section>

      {/* 8. CTA FUNNEL (PROJECT SCOPE CALCULATOR) */}
      <section id="calculator" className="py-28 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-tech text-xs uppercase tracking-widest text-[#2E6FF2] mb-3 block font-semibold">
              START A CONVERSATION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#08182d] mb-4">
              Build your next system
            </h2>
            <p className="text-base md:text-lg text-[#08182d]/70 max-w-lg mx-auto">
              Complete our 4-step scope builder so our engineering team can review your project specs.
            </p>
          </div>

          <ProjectCalculator />
        </div>
      </section>

    </main>
  );
}
