"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Users, Mic, Award } from "lucide-react";
import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ============================================================================
// PROOF STAT — Compact inline stat
// ============================================================================

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-3 md:px-4">
      <p className="text-[#cfa777] font-serif text-lg md:text-xl">{value}</p>
      <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wider">{label}</p>
    </div>
  );
}

// ============================================================================
// MAIN HERO COMPONENT
// ============================================================================

export function MentorshipHero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  const proofStats = [
    { value: "10+", label: "Years" },
    { value: "500+", label: "Clients" },
    { value: "1.2M", label: "Following" },
    { value: "150+", label: "Episodes" },
  ];

  return (
    <section className="relative min-h-screen bg-[#030303] overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          BACKGROUND — Static, hero-scoped only (NO scroll-based fade)
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        {/* Base solid */}
        <div className="absolute inset-0 bg-[#030303]" />
        
        {/* Subtle radial accent — contained */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#cfa777]/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#cfa777]/[0.01] rounded-full blur-[100px]" />
      </div>

      {/* Hero-scoped bottom fade — resolves completely within hero */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />

      {/* ═══════════════════════════════════════════════════════════════════
          CONTENT — 2-column cover composition
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-200px)]">
            
            {/* ─────────────────────────────────────────────────────────────
                LEFT COLUMN — Text + CTAs + Proof
            ───────────────────────────────────────────────────────────── */}
            <div className="order-2 lg:order-1">
              {/* Kicker */}
              <motion.div
                className="flex items-center gap-2 mb-6"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#cfa777]" />
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-medium">
                  Serious Applicants Only · Limited Availability
                </p>
              </motion.div>

              {/* Eyebrow */}
              <motion.p
                className="text-[#cfa777] text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-4"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                1:1 Mentorship with Rob Lipsett
              </motion.p>

              {/* Headline */}
              <motion.h1
                className="font-serif text-[2.5rem] md:text-5xl lg:text-[3.25rem] xl:text-6xl text-white leading-[1.1] tracking-tight mb-6"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Build the Physique,{" "}
                <br className="hidden sm:block" />
                Business & Life{" "}
                <span className="text-[#cfa777]">You Actually Want</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-8"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                A proven system for ambitious men ready to transform their body, scale their income, and design a life of freedom.
              </motion.p>

              {/* CTA Cluster */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <a
                  href="#apply"
                  onClick={(e) => scrollToSection(e, "#apply")}
                  className="group inline-flex items-center gap-2.5 bg-[#cfa777] text-black font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(207,167,119,0.2)]"
                >
                  <span>Apply for Mentorship</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#results"
                  onClick={(e) => scrollToSection(e, "#results")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
                >
                  <span>See Results</span>
                </a>
              </motion.div>

              {/* Microcopy */}
              <motion.p
                className="text-white/30 text-xs mb-10"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Takes 2–3 minutes · Reviewed by Rob
              </motion.p>

              {/* Proof Row — Desktop: inline, Mobile: 2x2 grid */}
              <motion.div
                className="pt-6 border-t border-white/[0.06]"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {/* Desktop: inline row */}
                <div className="hidden sm:flex items-center divide-x divide-white/[0.06]">
                  {proofStats.map((stat, i) => (
                    <ProofStat key={i} {...stat} />
                  ))}
                </div>
                {/* Mobile: 2x2 grid */}
                <div className="sm:hidden grid grid-cols-2 gap-4">
                  {proofStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-[#cfa777] font-serif text-xl">{stat.value}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT COLUMN — Rob Image (Portrait)
            ───────────────────────────────────────────────────────────── */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Image container — tall portrait, rounded, no borders */}
              <div className="relative aspect-[3/4] md:aspect-[3/4] lg:aspect-[3/4] w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[#0a0a0a]">
                <Image
                  src="/rob-hero.png"
                  alt="Rob Lipsett"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 480px"
                  priority
                />
                {/* Subtle bottom gradient for text legibility if needed */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030303]/80 to-transparent" />
              </div>

              {/* Floating badge — optional authority cue */}
              <motion.div
                className="absolute -bottom-4 left-4 right-4 lg:left-6 lg:right-6"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#cfa777]" />
                    <span className="text-white/70 text-xs font-medium">500+ clients transformed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="text-white/40 text-[10px]">Accepting applications</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
