"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { MentorshipNavbar } from "@/components/mentorship/MentorshipNavbar";

// ============================================================================
// TYPEFORM URL (single source of truth)
// ============================================================================
const TYPEFORM_URL = "https://roblipsett.typeform.com/mentorship";

// ============================================================================
// TESTIMONIAL TRANSFORMATIONS DATA — Single source for marquee images
// Per-image crop overrides: scale (default 1.0), position (default "50% 50%")
// ============================================================================
const TESTIMONIAL_IMAGES = [
  { 
    key: "testimonial-1", 
    src: "/testimonial-1.webp", 
    alt: "Client transformation result", 
    scale: 1.06, 
    position: "50% 50%" 
  },
  { 
    key: "testimonial-2", 
    src: "/testimonial-2.webp", 
    alt: "Client transformation result", 
    scale: 1.06, 
    position: "50% 50%" 
  },
  { 
    key: "testimonial-3", 
    src: "/testimonial-3.webp", 
    alt: "Client transformation result", 
    scale: 1.06, 
    position: "50% 50%" 
  },
  { 
    key: "testimonial-4", 
    src: "/testimonial-4.webp", 
    alt: "Client transformation result", 
    scale: 1.18, // Stronger crop to hide white borders
    position: "50% 55%" 
  },
  { 
    key: "testimonial-5", 
    src: "/testimonial-5.webp", 
    alt: "Client transformation result", 
    scale: 1.08, 
    position: "50% 50%" 
  },
];

// ============================================================================
// SECTION 1 — HERO (Podcast-style with background image + sidebar)
// ============================================================================

function HeroSection() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-black flex items-end md:items-center">
      {/* ─────────────────────────────────────────────────────────────────
          BACKGROUND IMAGE (Podcast-style treatment)
      ───────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Primary hero image with fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
        <Image 
          src="/AR509644.jpg"
          alt="Rob Lipsett - Mentorship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] md:object-[50%_35%] scale-[1.05] md:scale-100 origin-center"
          quality={85}
          onError={(e) => {
            // Hide broken image, fallback gradient remains visible
            e.currentTarget.style.opacity = '0';
          }}
        />
        
        {/* Gradient Overlays for Text Legibility (matching Podcast hero) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-[0.97] md:opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-50" />
        
        {/* Optional Subtle Grain */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          CONTENT: 2-column layout (copy left, sidebar right)
      ───────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32 md:pt-0">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-end lg:items-center">
          
          {/* LEFT COLUMN: Hero Copy (decluttered) */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#cfa777] font-medium">
                1:1 Mentorship
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
              Build the physique and income you keep putting off.
            </h1>

            {/* Single Subhead Line */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              Structure, accountability, and enforcement for men who perform but lack systems.
            </p>
          </div>

          {/* RIGHT COLUMN: Apply Sidebar (simplified) */}
          <aside className="w-full lg:w-[300px]">
            <div className="bg-[#0a0a0a]/80 border border-white/[0.08] rounded-xl p-6">
              {/* Sidebar Title */}
              <h2 className="text-white font-semibold text-base mb-5">
                Apply for Mentorship
              </h2>

              {/* Primary CTA */}
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#cfa777] text-black font-semibold py-4 rounded-lg transition-all duration-200 hover:bg-[#d9b88a] hover:-translate-y-0.5 shadow-lg shadow-[#cfa777]/20 mb-3"
              >
                Start Application
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Microcopy */}
              <p className="text-white/30 text-xs text-center">
                2–3 minutes · Reviewed personally
              </p>
            </div>
          </aside>

        </div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10" />
    </header>
  );
}

// ============================================================================
// CLIENT TRANSFORMATIONS — Premium Marquee / Ticker
// ============================================================================

interface TestimonialTileProps {
  src: string;
  alt: string;
  scale: number;
  position: string;
}

function TestimonialTile({ src, alt, scale, position }: TestimonialTileProps) {
  return (
    <div className="relative h-52 md:h-72 lg:h-80 w-auto aspect-[4/5] bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden flex-shrink-0 group">
      {/* Image with per-tile crop override */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          sizes="(max-width: 768px) 220px, 320px"
          style={{
            transform: `scale(${scale})`,
            objectPosition: position,
          }}
        />
      </div>
      
      {/* Subtle inner shadow to mask any remaining bright edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none rounded-2xl" />
      
      {/* Bottom gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
    </div>
  );
}

function ClientTransformationsSection() {
  return (
    <section className="relative bg-[#030303] pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden">
      {/* Section header — Premium upgrade */}
      <div className="w-full px-4 md:px-6 mb-12 md:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#cfa777]/50 text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">
            Client Proof
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
            Repeatable Outcomes
          </h2>
          <p className="text-white/40 text-base md:text-lg">
            Same system. Executed consistently.
          </p>
        </div>
      </div>

      {/* Marquee Viewport — clips content and prevents page overflow */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        {/* Ticker Track — the only element that moves */}
        <div 
          className="flex w-max will-change-transform motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:overflow-x-auto motion-reduce:snap-x motion-reduce:snap-mandatory"
          aria-label="Client transformation testimonials"
        >
          {/* First set */}
          <div className="flex shrink-0 items-stretch gap-5 md:gap-8 pr-5 md:pr-8">
            {TESTIMONIAL_IMAGES.map((img) => (
              <div key={`set1-${img.key}`} className="shrink-0 motion-reduce:snap-center">
                <TestimonialTile
                  src={img.src}
                  alt={img.alt}
                  scale={img.scale}
                  position={img.position}
                />
              </div>
            ))}
          </div>
          {/* Second set (duplicate for seamless loop) */}
          <div className="flex shrink-0 items-stretch gap-5 md:gap-8 pr-5 md:pr-8">
            {TESTIMONIAL_IMAGES.map((img) => (
              <div key={`set2-${img.key}`} className="shrink-0 motion-reduce:snap-center">
                <TestimonialTile
                  src={img.src}
                  alt={img.alt}
                  scale={img.scale}
                  position={img.position}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        :global(.animate-marquee) {
          animation: marquee 55s linear infinite;
        }
        @media (max-width: 768px) {
          :global(.animate-marquee) {
            animation: marquee 75s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

// ============================================================================
// APPLY NOW BLOCK — Premium CTA directly under transformations
// ============================================================================

function ApplyNowBlock() {
  return (
    <section className="relative bg-[#030303] py-20 md:py-28 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Centered glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#cfa777]/[0.04] rounded-full blur-[100px]" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Premium bordered container */}
          <div className="relative border border-white/[0.08] rounded-3xl p-8 md:p-14 lg:p-16 bg-gradient-to-b from-white/[0.02] to-transparent">
            {/* Corner accents */}
            <div className="absolute top-0 left-8 md:left-14 w-16 h-[1px] bg-gradient-to-r from-[#cfa777]/40 to-transparent" />
            <div className="absolute top-0 right-8 md:right-14 w-16 h-[1px] bg-gradient-to-l from-[#cfa777]/40 to-transparent" />
            
            {/* Two-column layout on desktop */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
              {/* Left: Copy */}
              <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-none">
                <p className="text-[#cfa777]/60 text-[10px] tracking-[0.3em] uppercase mb-4 font-medium">
                  Limited Capacity
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-tight leading-tight">
                  Apply for 1:1 Mentorship
                </h2>
                <p className="text-white/50 text-base md:text-lg">
                  Selective intake. Serious applicants only.
                </p>
              </div>

              {/* Right: CTA Module */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <a
                  href={TYPEFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-[#cfa777] text-black font-semibold text-base md:text-lg px-10 md:px-14 py-5 md:py-6 rounded-xl transition-all duration-200 hover:bg-[#d9b88a] hover:-translate-y-0.5 shadow-lg shadow-[#cfa777]/20 focus:outline-none focus:ring-2 focus:ring-[#cfa777] focus:ring-offset-2 focus:ring-offset-[#030303]"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <p className="mt-5 text-white/30 text-sm">
                  2–3 minutes · Reviewed personally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2 — WHY THIS WORKS (Enforcement Loop)
// ============================================================================

function MechanismSection() {
  const loopNodes = [
    { 
      label: "Plan", 
      detail: "Weekly direction and targets",
      step: "01"
    },
    { 
      label: "Execute", 
      detail: "Daily action between calls",
      step: "02"
    },
    { 
      label: "Correct", 
      detail: "Direct correction before drift",
      step: "03"
    },
  ];

  return (
    <section id="mechanism" className="relative bg-[#050505] py-20 md:py-28 border-y border-white/[0.04] scroll-mt-24">
      <div className="w-full px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section header — Centered */}
          <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
              The Difference
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-5 tracking-tight">
              Why This Works
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
              Structure, accountability, and enforcement in a closed loop.
            </p>
          </div>

          {/* Enforcement Loop — 3 Nodes */}
          <div className="relative mb-12">
            {/* Container with border */}
            <div className="relative border border-white/[0.06] rounded-2xl bg-[#080808] p-6 md:p-10 overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/20 to-transparent" />
              
              {/* Loop label */}
              <div className="text-center mb-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-medium">
                  The Enforcement Loop
                </span>
              </div>

              {/* Desktop: Horizontal Rail */}
              <div className="hidden md:block">
                {/* Connecting line */}
                <div className="absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-[#cfa777]/20 via-white/10 to-[#cfa777]/20 translate-y-4" />
                
                <div className="grid grid-cols-3 gap-6">
                  {loopNodes.map((node, i) => (
                    <div 
                      key={i}
                      className="relative group flex flex-col items-center text-center"
                    >
                      {/* Step indicator */}
                      <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-[#cfa777]/20 flex items-center justify-center mb-4 transition-all duration-200 group-hover:border-[#cfa777]/40 group-hover:bg-[#cfa777]/[0.05] motion-reduce:transition-none">
                        <span className="text-[#cfa777] text-lg font-semibold">{node.step}</span>
                      </div>
                      
                      {/* Label */}
                      <h3 className="text-white font-semibold text-base mb-2">{node.label}</h3>
                      
                      {/* Detail */}
                      <p className="text-white/40 text-sm">{node.detail}</p>
                      
                      {/* Arrow connector (except last) */}
                      {i < loopNodes.length - 1 && (
                        <div className="absolute top-7 -right-3 w-6 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Vertical Stack */}
              <div className="md:hidden space-y-6">
                {loopNodes.map((node, i) => (
                  <div 
                    key={i}
                    className="relative flex items-start gap-4 group"
                  >
                    {/* Step indicator */}
                    <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#cfa777]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#cfa777] font-semibold">{node.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-white font-semibold text-base mb-1">{node.label}</h3>
                      <p className="text-white/40 text-sm">{node.detail}</p>
                    </div>
                    
                    {/* Vertical connector (except last) */}
                    {i < loopNodes.length - 1 && (
                      <div className="absolute left-6 top-14 w-px h-6 bg-gradient-to-b from-[#cfa777]/20 to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* Loop return indicator */}
              <div className="hidden md:flex items-center justify-center mt-8 pt-6 border-t border-white/[0.04]">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#cfa777]/[0.05] border border-[#cfa777]/10 rounded-full">
                  <svg className="w-4 h-4 text-[#cfa777]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-[11px] text-[#cfa777]/70 font-medium tracking-wide">Repeats weekly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="w-full">
            <p className="text-white/50 text-base text-center font-medium max-w-xl mx-auto">
              The difference is enforcement.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


// ============================================================================
// SECTION 5 — QUALIFICATION BLOCK (For you / Not for you)
// ============================================================================

function QualificationSection() {
  const forYou = [
    "Already performing but leaving results on the table",
    "Want external accountability, not information",
    "Ready to invest 12 months building systems",
    "Can take direct feedback and implement fast",
  ];

  const notForYou = [
    "Looking for shortcuts or quick fixes",
    "Want 'nice' coaching, not honest correction",
    "Not willing to commit time and focus",
    "Browsing, not ready to execute",
  ];

  return (
    <section className="relative bg-[#030303] py-24 md:py-32">
      <div className="w-full px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* ═══════════════════════════════════════════════════════════════
              GATE HEADER — Premium hierarchy
          ═══════════════════════════════════════════════════════════════ */}
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase font-medium">
                Qualification
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
                Selective intake
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-[1.1]">
              This isn't for everyone.
            </h2>
            
            <p className="text-white/40 text-base md:text-lg">
              If accepted, you're expected to execute.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              GATE PANELS — Unified container with vertical divider
          ═══════════════════════════════════════════════════════════════ */}
          <div className="relative border border-white/[0.06] rounded-2xl overflow-hidden mb-6">
            {/* Background */}
            <div className="absolute inset-0 bg-[#080808]" />
            
            {/* Vertical divider (desktop only) */}
            <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
            
            {/* Horizontal divider (mobile only) */}
            <div className="lg:hidden absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            <div className="relative grid lg:grid-cols-2">
              
              {/* LEFT PANEL: For you if */}
              <div className="relative p-8 md:p-10 lg:p-12">
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-8 md:left-10 lg:left-12 w-10 h-[1px] bg-[#cfa777]/30" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-[#cfa777]/[0.08] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#cfa777]/80" />
                  </div>
                  <h3 className="text-[#cfa777] font-medium text-sm tracking-wide">For you if</h3>
                </div>
                
                <div className="space-y-0">
                  {forYou.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 py-3.5 border-b border-white/[0.04] last:border-b-0"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#cfa777]/60 shrink-0" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT PANEL: Not for you if */}
              <div className="relative p-8 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.04]">
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-8 md:left-10 lg:left-12 w-10 h-[1px] bg-white/10" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center">
                    <X className="w-4 h-4 text-white/40" />
                  </div>
                  <h3 className="text-white/50 font-medium text-sm tracking-wide">Not for you if</h3>
                </div>
                
                <div className="space-y-0">
                  {notForYou.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 py-3.5 border-b border-white/[0.04] last:border-b-0"
                    >
                      <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                      <span className="text-white/40 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              DECISION MODULE — Premium CTA block
          ═══════════════════════════════════════════════════════════════ */}
          <div className="relative border border-[#cfa777]/15 rounded-2xl bg-gradient-to-b from-[#0d0b09] to-[#080808] overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/25 to-transparent" />
            
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Prompt */}
                <div className="text-center lg:text-left">
                  <p className="text-white/60 text-lg md:text-xl font-light">
                    If this sounds like you, apply.
                  </p>
                </div>
                
                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                  <a
                    href={TYPEFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-[#cfa777] text-[#0a0a0a] font-semibold text-base px-12 py-4 rounded-xl transition-all duration-200 hover:bg-[#d9b88a] hover:-translate-y-0.5 shadow-[0_8px_32px_-8px_rgba(207,167,119,0.3)] focus:outline-none focus:ring-2 focus:ring-[#cfa777] focus:ring-offset-2 focus:ring-offset-[#080808]"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <p className="text-white/25 text-xs tracking-wide">
                    2–3 minutes · Reviewed personally
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6 — DELIVERY OS (Premium Interactive)
// ============================================================================

function DeliverySection() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    { 
      title: "Weekly 1:1 Calls", 
      cadence: "Every week",
      detail: "Strategy review and direct correction",
      chips: ["Review", "Correction", "Next actions"],
      icon: "call"
    },
    { 
      title: "Direct Access", 
      cadence: "Between calls",
      detail: "Voice notes for real-time decisions",
      chips: ["Voice notes", "Quick decisions", "No waiting"],
      icon: "access"
    },
    { 
      title: "Custom Programming", 
      cadence: "Ongoing",
      detail: "Training and nutrition built for you",
      chips: ["Training", "Nutrition", "Adjustments"],
      icon: "program"
    },
    { 
      title: "Business Guidance", 
      cadence: "As needed",
      detail: "Structure and systems for income growth",
      chips: ["Structure", "Systems", "Growth"],
      icon: "business"
    },
  ];

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <section id="included" className="relative bg-[#050505] py-24 md:py-32 border-y border-white/[0.04] scroll-mt-24">
      <div className="w-full px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* ═══════════════════════════════════════════════════════════════
              HEADER — Premium hierarchy with comparison chips
          ═══════════════════════════════════════════════════════════════ */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
              What You Get
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight">
              12 months of direct access.
            </h2>
            
            {/* Not This / This Comparison Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              <span className="px-3 py-1.5 text-[11px] text-white/30 border border-white/[0.06] rounded-full line-through decoration-white/20">
                Not a course
              </span>
              <span className="px-3 py-1.5 text-[11px] text-white/30 border border-white/[0.06] rounded-full line-through decoration-white/20">
                Not group
              </span>
              <span className="px-3 py-1.5 text-[11px] text-white/30 border border-white/[0.06] rounded-full line-through decoration-white/20">
                Not motivation
              </span>
              <span className="px-4 py-1.5 text-[11px] text-[#cfa777] bg-[#cfa777]/[0.08] border border-[#cfa777]/20 rounded-full font-medium">
                Direct mentorship
              </span>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CADENCE TIMELINE RAIL — Horizontal indicator
          ═══════════════════════════════════════════════════════════════ */}
          <div className="mb-10">
            <div className="relative border border-white/[0.06] rounded-2xl bg-[#080808] p-6 md:p-8 overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/20 to-transparent" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">Delivery Cadence</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#cfa777]/50">12-Month System</span>
              </div>
              
              {/* Timeline Rail */}
              <div className="relative">
                {/* Rail line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#cfa777]/30 via-white/10 to-[#cfa777]/30 -translate-y-1/2" />
                
                {/* Rail nodes */}
                <div className="relative grid grid-cols-4 gap-2">
                  {modules.map((module, i) => (
                    <button
                      key={i}
                      onClick={() => toggleModule(i)}
                      className={`group relative flex flex-col items-center gap-3 py-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] rounded-lg motion-reduce:transition-none ${
                        activeModule === i ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                      }`}
                    >
                      {/* Node dot */}
                      <div className={`relative w-3 h-3 rounded-full transition-all duration-200 motion-reduce:transition-none ${
                        activeModule === i 
                          ? 'bg-[#cfa777] shadow-[0_0_12px_rgba(207,167,119,0.4)]' 
                          : 'bg-white/20 group-hover:bg-white/40'
                      }`}>
                        {activeModule === i && (
                          <div className="absolute inset-0 rounded-full bg-[#cfa777] animate-ping opacity-30" />
                        )}
                      </div>
                      
                      {/* Cadence label */}
                      <span className={`text-[10px] md:text-xs transition-colors duration-200 motion-reduce:transition-none ${
                        activeModule === i ? 'text-[#cfa777]' : 'text-white/40 group-hover:text-white/60'
                      }`}>
                        {module.cadence}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              INTERACTIVE FEATURE STACK — Expandable modules
          ═══════════════════════════════════════════════════════════════ */}
          <div className="space-y-3 mb-10">
            {modules.map((module, i) => (
              <div
                key={i}
                className={`relative border rounded-xl overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
                  activeModule === i 
                    ? 'border-[#cfa777]/25 bg-gradient-to-b from-[#0d0b09] to-[#080808]' 
                    : 'border-white/[0.06] bg-[#080808] hover:border-white/[0.10]'
                }`}
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#cfa777]/50 rounded-xl group"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon marker */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 motion-reduce:transition-none ${
                      activeModule === i 
                        ? 'bg-[#cfa777]/15 border border-[#cfa777]/25' 
                        : 'bg-white/[0.03] border border-white/[0.06] group-hover:bg-white/[0.05]'
                    }`}>
                      <div className={`w-2 h-2 rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                        activeModule === i ? 'bg-[#cfa777]' : 'bg-white/30'
                      }`} />
                    </div>
                    
                    {/* Title */}
                    <div>
                      <h3 className={`font-medium text-base transition-colors duration-200 motion-reduce:transition-none ${
                        activeModule === i ? 'text-white' : 'text-white/80'
                      }`}>
                        {module.title}
                      </h3>
                      <p className="text-white/30 text-xs mt-0.5">{module.cadence}</p>
                    </div>
                  </div>
                  
                  {/* Expand indicator */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 motion-reduce:transition-none ${
                    activeModule === i 
                      ? 'bg-[#cfa777]/10 rotate-180' 
                      : 'bg-white/[0.03] group-hover:bg-white/[0.05]'
                  }`}>
                    <svg 
                      className={`w-4 h-4 transition-colors duration-200 motion-reduce:transition-none ${
                        activeModule === i ? 'text-[#cfa777]' : 'text-white/40'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {/* Detail Tray (expanded) */}
                <div className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none ${
                  activeModule === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <div className="border-t border-white/[0.04] pt-4">
                      {/* Detail line */}
                      <p className="text-white/50 text-sm mb-4">{module.detail}</p>
                      
                      {/* Deliverable chips */}
                      <div className="flex flex-wrap gap-2">
                        {module.chips.map((chip, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 text-[10px] text-[#cfa777]/70 bg-[#cfa777]/[0.06] border border-[#cfa777]/10 rounded-full"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CAPACITY MICRO PANEL — Stats and standards
          ═══════════════════════════════════════════════════════════════ */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a]/60 border border-white/[0.06] rounded-full">
              <span className="text-[#cfa777] text-sm font-semibold">20</span>
              <span className="text-white/40 text-xs">max clients</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a]/60 border border-white/[0.06] rounded-full">
              <span className="text-[#cfa777] text-sm font-semibold">12</span>
              <span className="text-white/40 text-xs">months</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a]/60 border border-white/[0.06] rounded-full">
              <span className="text-[#cfa777] text-sm font-semibold">1:1</span>
              <span className="text-white/40 text-xs">direct access</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7 — FINAL DECISION SECTION
// ============================================================================

function FinalCTASection() {
  return (
    <section id="apply" className="relative bg-[#030303] py-24 md:py-32 scroll-mt-24">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cfa777]/[0.03] rounded-full blur-[120px]" />

      <div className="w-full px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Restate outcome */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Build the results you keep putting off.
          </h2>

          {/* Restate selectivity */}
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
            This is selective. If you're accepted, you'll have the structure, accountability, and enforcement to execute.
          </p>

          {/* Primary CTA */}
          <a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#cfa777] text-black font-semibold px-12 py-6 rounded-xl transition-all duration-200 hover:bg-[#d9b88a] hover:-translate-y-0.5 shadow-lg shadow-[#cfa777]/20 text-lg"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Micro-copy */}
          <p className="text-white/30 text-sm mt-6">
            Apply · 2–3 minutes · Reviewed personally
          </p>

          {/* ═══════════════════════════════════════════════════════════════
              ALTERNATIVE PATH — Premium Secondary CTA Module
          ═══════════════════════════════════════════════════════════════ */}
          <div className="mt-16 pt-10">
            <div className="relative border border-white/[0.08] rounded-2xl bg-gradient-to-b from-[#0a0a0a] to-[#080808] p-8 md:p-10 overflow-hidden max-w-2xl mx-auto">
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <div className="text-center">
                {/* Eyebrow */}
                <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4 font-medium">
                  Alternative Path
                </p>
                
                {/* Headline */}
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  Not ready for 1:1 yet?
                </h3>
                
                {/* Supporting line */}
                <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
                  Start with the Game Plan and build momentum.
                </p>
                
                {/* CTA Button */}
                <Link
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-3 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.12] hover:border-white/[0.20] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#080808]"
                >
                  Start with the Game Plan
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/[0.04] py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold mb-1">Rob Lipsett</p>
              <p className="text-white/40 text-sm">Dublin, Ireland</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors">
                Terms
              </Link>
              <a href="mailto:team@roblipsett.com" className="text-white/40 hover:text-white/60 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Rob Lipsett. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function MentorshipLanding() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <MentorshipNavbar />
      <HeroSection />
      <ClientTransformationsSection />
      <ApplyNowBlock />
      <MechanismSection />
      <QualificationSection />
      <DeliverySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
