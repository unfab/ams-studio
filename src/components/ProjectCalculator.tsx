'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpecularButton } from './SpecularButton';
import { ArrowRight, ArrowLeft, Check, Code, ShoppingBag, Bot, Wrench, Rocket, TrendingUp, Cpu, RefreshCw } from 'lucide-react';

interface FormState {
  projectType: string;
  objective: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
}

export const ProjectCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    projectType: '',
    objective: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    details: '',
  });

  const projectTypes = [
    {
      id: 'webapp',
      title: 'Custom Web App / SaaS',
      desc: 'Bespoke web applications, SaaS platforms, complex backend logic.',
      icon: Code,
    },
    {
      id: 'website',
      title: 'Digital Platform',
      desc: 'High-converting marketing site or custom e-commerce implementation.',
      icon: ShoppingBag,
    },
    {
      id: 'automation',
      title: 'Business Automation',
      desc: 'Lead processing, n8n style internal workflows, custom AI tools.',
      icon: Bot,
    },
    {
      id: 'partnership',
      title: 'Ongoing SLA & Support',
      desc: 'Dedicated maintenance, SLA monitoring, and iterative feature development.',
      icon: Wrench,
    },
  ];

  const objectives = [
    {
      id: 'launch',
      title: 'Launch a New Product',
      desc: 'Bring a new web app, SaaS, or digital product to market from scratch.',
      icon: Rocket,
    },
    {
      id: 'scale',
      title: 'Scale & Convert',
      desc: 'Optimize existing digital storefront or website to convert more visitors.',
      icon: TrendingUp,
    },
    {
      id: 'automate',
      title: 'Automate Internal Workflows',
      desc: 'Replace manual business processes with automated software systems.',
      icon: Cpu,
    },
    {
      id: 'redesign',
      title: 'Redesign & Re-engineer',
      desc: 'Modernize legacy codebases, improve UI/UX, or upgrade tech stack.',
      icon: RefreshCw,
    },
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP / Within 1 Month', desc: 'High priority sprint execution.' },
    { id: 'standard', label: '1 - 3 Months', desc: 'Standard engineering timeline.' },
    { id: 'flexible', label: '3+ Months / Flexible', desc: 'Planning and phased rollout.' },
  ];

  const handleSelectType = (id: string) => {
    setFormData((prev) => ({ ...prev, projectType: id }));
  };

  const handleSelectObjective = (id: string) => {
    setFormData((prev) => ({ ...prev, objective: id }));
  };

  const handleSelectTimeline = (id: string) => {
    setFormData((prev) => ({ ...prev, timeline: id }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-[#E4E2DC] rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
      {/* Progress Bar Header */}
      {!submitted && (
        <div className="mb-10">
          <div className="flex items-center justify-between font-mono text-xs text-[#08182d]/50 mb-4">
            <span>PROJECT SCOPE BUILDER</span>
            <span>STEP {step} OF 4</span>
          </div>
          <div className="w-full h-1.5 bg-[#FAF9F6] border border-[#E4E2DC] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2E6FF2] transition-all duration-300 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="submitted"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-center py-16 space-y-4"
          >
            <div className="w-16 h-16 bg-[#2E6FF2]/10 border border-[#2E6FF2]/20 rounded-full flex items-center justify-center mx-auto text-[#2E6FF2] mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-[#08182d]">Inquiry Received</h3>
            <p className="text-[#08182d]/60 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              Thank you, {formData.name}. We have logged your project specifications and will reply within 24 hours with an initial technical scope proposal.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  projectType: '',
                  objective: '',
                  timeline: '',
                  name: '',
                  email: '',
                  company: '',
                  details: '',
                });
              }}
              className="text-xs font-mono text-[#2E6FF2] underline pt-6 inline-block hover:opacity-80"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#08182d] mb-3">
                What are you looking to build?
              </h3>
              <p className="text-sm md:text-base text-[#08182d]/60">
                Select the primary scope for your upcoming digital project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((item) => {
                const IconComponent = item.icon;
                const isSelected = formData.projectType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectType(item.id)}
                    className={`text-left p-5 rounded-xl border transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#2E6FF2] bg-[#2E6FF2]/5 ring-1 ring-[#2E6FF2]'
                        : 'border-[#E4E2DC] bg-[#FAF9F6] hover:border-[#08182d]/30 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E2DC] flex items-center justify-center text-[#08182d]">
                        <IconComponent className="w-5 h-5 text-[#2E6FF2]" />
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#2E6FF2] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#08182d] mb-1.5">{item.title}</h4>
                      <p className="text-xs text-[#08182d]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex justify-end border-t border-[#E4E2DC]">
              <SpecularButton
                size="md"
                disabled={!formData.projectType}
                onClick={() => setStep(2)}
                className={!formData.projectType ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Next Step <ArrowRight className="w-4 h-4 ml-1 inline" />
              </SpecularButton>
            </div>
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#08182d] mb-3">
                What is your primary objective?
              </h3>
              <p className="text-sm md:text-base text-[#08182d]/60">
                Help us understand the main goal behind your build.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {objectives.map((item) => {
                const IconComponent = item.icon;
                const isSelected = formData.objective === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectObjective(item.id)}
                    className={`text-left p-5 rounded-xl border transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#2E6FF2] bg-[#2E6FF2]/5 ring-1 ring-[#2E6FF2]'
                        : 'border-[#E4E2DC] bg-[#FAF9F6] hover:border-[#08182d]/30 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E2DC] flex items-center justify-center text-[#08182d]">
                        <IconComponent className="w-5 h-5 text-[#2E6FF2]" />
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#2E6FF2] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#08182d] mb-1.5">{item.title}</h4>
                      <p className="text-xs text-[#08182d]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex justify-between items-center border-t border-[#E4E2DC]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono text-[#08182d]/50 hover:text-[#08182d] inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <SpecularButton
                size="md"
                disabled={!formData.objective}
                onClick={() => setStep(3)}
                className={!formData.objective ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Next Step <ArrowRight className="w-4 h-4 ml-1 inline" />
              </SpecularButton>
            </div>
          </motion.div>
        ) : step === 3 ? (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#08182d] mb-3">
                What is your target timeline?
              </h3>
              <p className="text-sm md:text-base text-[#08182d]/60">
                Select your preferred deployment timeframe.
              </p>
            </div>

            <div className="space-y-3">
              {timelines.map((item) => {
                const isSelected = formData.timeline === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectTimeline(item.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#2E6FF2] bg-[#2E6FF2]/5 ring-1 ring-[#2E6FF2]'
                        : 'border-[#E4E2DC] bg-[#FAF9F6] hover:border-[#08182d]/30 hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-base text-[#08182d] mb-1">{item.label}</h4>
                      <p className="text-xs text-[#08182d]/60">{item.desc}</p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#2E6FF2] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex justify-between items-center border-t border-[#E4E2DC]">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-mono text-[#08182d]/50 hover:text-[#08182d] inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <SpecularButton
                size="md"
                disabled={!formData.timeline}
                onClick={() => setStep(4)}
                className={!formData.timeline ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Final Step <ArrowRight className="w-4 h-4 ml-1 inline" />
              </SpecularButton>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#08182d] mb-3">
                Where should we send the scope & quote?
              </h3>
              <p className="text-sm md:text-base text-[#08182d]/60">
                Provide your details so our engineering team can review your specifications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#08182d]/60 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg px-4 py-3 text-sm text-[#08182d] placeholder-[#08182d]/30 focus:outline-none focus:border-[#2E6FF2] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#08182d]/60 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg px-4 py-3 text-sm text-[#08182d] placeholder-[#08182d]/30 focus:outline-none focus:border-[#2E6FF2] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#08182d]/60 mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg px-4 py-3 text-sm text-[#08182d] placeholder-[#08182d]/30 focus:outline-none focus:border-[#2E6FF2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#08182d]/60 mb-2">
                  Brief Project Details
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us any specific features, technical requirements, or goals..."
                  className="w-full bg-[#FAF9F6] border border-[#E4E2DC] rounded-lg px-4 py-3 text-sm text-[#08182d] placeholder-[#08182d]/30 focus:outline-none focus:border-[#2E6FF2] transition-colors resize-none"
                />
              </div>

              <div className="pt-6 flex justify-between items-center border-t border-[#E4E2DC] mt-8">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs font-mono text-[#08182d]/50 hover:text-[#08182d] inline-flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button type="submit" className="bg-[#08182d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#08182d]/90 transition-colors flex items-center justify-center gap-2">
                  Submit Project Scope <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
