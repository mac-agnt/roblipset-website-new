"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight, Star, ChevronDown, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { MentorshipNavbar } from "@/components/mentorship/MentorshipNavbar";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }
    if (startOnView && !isInView) return;
    if (hasStarted) return;
    
    setHasStarted(true);
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView, startOnView, hasStarted, prefersReducedMotion]);

  return { count, ref };
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } }
};

// ============================================================================
// SECTION REVEAL WRAPPER
// ============================================================================

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// GLASS CARD COMPONENT
// ============================================================================

function GlassCard({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`
      relative bg-[#0a0a0a]/80 backdrop-blur-xl 
      border border-white/[0.08] rounded-2xl 
      shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)]
      ${hover ? 'hover:border-[#cfa777]/20 hover:shadow-[0_8px_32px_rgba(207,167,119,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}

// ============================================================================
// SCROLL PROGRESS INDICATOR
// ============================================================================

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#cfa777] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// ============================================================================
// STICKY CTA
// ============================================================================

function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const heroHeight = window.innerHeight * 0.9;
      const footerStart = document.body.scrollHeight - window.innerHeight * 2;
      setIsVisible(latest > heroHeight && latest < footerStart);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 hidden md:block"
        >
          <a
            href="#apply"
            className="group flex items-center gap-2 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-5 py-3 rounded-full shadow-lg shadow-[#cfa777]/30 transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm">Apply Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mobile sticky bar
function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const heroHeight = window.innerHeight * 0.9;
      const footerStart = document.body.scrollHeight - window.innerHeight * 1.5;
      setIsVisible(latest > heroHeight && latest < footerStart);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-[#030303] via-[#030303]/95 to-transparent"
        >
          <a
            href="#apply"
            className="flex items-center justify-center gap-2 w-full bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold py-4 rounded-xl shadow-lg shadow-[#cfa777]/30 transition-all"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// SECTION 0 — PRE-FILTER BANNER
// ============================================================================

function PreFilterBanner() {
  return (
    <div className="bg-[#0a0a0a] border-b border-white/5 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 py-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-white/50 text-xs tracking-[0.25em] uppercase">
          Serious applicants only · Limited availability
        </p>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SECTION 1 — HERO
// ============================================================================

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#030303] overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#030303]" />
        
        {/* Animated gold orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#cfa777]/[0.03] rounded-full blur-[120px]"
          animate={prefersReducedMotion ? {} : { 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#cfa777]/[0.02] rounded-full blur-[100px]"
          animate={prefersReducedMotion ? {} : { 
            x: [0, -40, 0], 
            y: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(#cfa777 1px, transparent 1px), linear-gradient(90deg, #cfa777 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Animated path lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,400 Q400,350 800,400 T1600,400"
          stroke="#cfa777"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M0,500 Q500,450 1000,500 T2000,500"
          stroke="#cfa777"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      <motion.div 
        className="container mx-auto px-4 md:px-8 relative z-10"
        style={prefersReducedMotion ? {} : { y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center pt-20">
          {/* Eyebrow */}
          <motion.p 
            className="text-[#cfa777] text-sm tracking-[0.3em] uppercase mb-8 font-medium"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            1:1 Mentorship with Rob Lipsett
          </motion.p>

          {/* Headline */}
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Build the Physique, Business & Life You Actually Want
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A proven system for ambitious men ready to transform their body, scale their income, and design a life of freedom.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="#apply"
              className="group relative inline-flex items-center gap-3 bg-[#cfa777] text-black font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(207,167,119,0.3)] hover:shadow-[0_0_60px_rgba(207,167,119,0.4)] overflow-hidden"
            >
              {/* Sheen effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative text-lg">Apply for Mentorship</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust indicator */}
          <motion.p 
            className="text-white/30 text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Application takes 2–3 minutes
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// SECTION 2 — ABOVE-THE-FOLD SOCIAL PROOF
// ============================================================================

function StatCard({ value, numericValue, label, suffix = "" }: { value: string; numericValue: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(numericValue, 2000);
  
  return (
    <div ref={ref} className="text-center">
      <GlassCard className="p-6 md:p-8" hover={false}>
        <p className="text-[#cfa777] font-serif text-3xl md:text-4xl lg:text-5xl mb-2">
          {count}{suffix}
        </p>
        <p className="text-white/40 text-sm">{label}</p>
      </GlassCard>
    </div>
  );
}

function SocialProofSection() {
  const metrics = [
    { value: "10+", numericValue: 10, label: "Years Documented", suffix: "+" },
    { value: "1.2M+", numericValue: 1.2, label: "Social Following", suffix: "M+" },
    { value: "500+", numericValue: 500, label: "Clients Transformed", suffix: "+" },
    { value: "150+", numericValue: 150, label: "Podcast Episodes", suffix: "+" },
  ];

  const brands = ["Gymshark", "MyProtein", "YouTube", "Spotify", "Apple Podcasts"];

  return (
    <section className="relative bg-[#030303] py-20 md:py-28 border-y border-white/5 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#030303] to-[#030303]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          {/* Metrics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {metrics.map((metric, i) => (
              <motion.div key={i} variants={staggerItem}>
                <StatCard {...metric} />
              </motion.div>
            ))}
          </motion.div>

          {/* Brand marquee */}
          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10" />
            
            <motion.div 
              className="flex gap-12 items-center"
              animate={{ x: [0, -400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <span key={i} className="text-white/30 text-sm tracking-[0.2em] uppercase whitespace-nowrap font-medium">
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3 — WHO THIS IS FOR / NOT FOR
// ============================================================================

function QualifyBullet({ 
  lead, 
  detail, 
  isPositive, 
  delay 
}: { 
  lead: string; 
  detail: string; 
  isPositive: boolean; 
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.li
      className="flex items-start gap-4 group"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: isPositive ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div 
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
          isPositive 
            ? 'bg-[#cfa777]/15 border border-[#cfa777]/20' 
            : 'bg-white/[0.04] border border-white/[0.08]'
        }`}
        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {isPositive ? (
          <Check className="w-3.5 h-3.5 text-[#cfa777]" />
        ) : (
          <X className="w-3.5 h-3.5 text-white/30" />
        )}
      </motion.div>
      <div>
        <span className={`font-semibold ${isPositive ? 'text-white' : 'text-white/50'}`}>
          {lead}
        </span>
        <span className={isPositive ? 'text-white/60' : 'text-white/35'}>
          {' — '}{detail}
        </span>
      </div>
    </motion.li>
  );
}

function QualifyCard({ 
  title, 
  items, 
  isPositive, 
  delay 
}: { 
  title: string; 
  items: { lead: string; detail: string }[]; 
  isPositive: boolean; 
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className="relative group h-full"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-[1px] rounded-2xl blur-sm transition-opacity duration-300 ${
        isPositive 
          ? 'bg-gradient-to-b from-[#cfa777]/25 via-[#cfa777]/5 to-[#cfa777]/15 opacity-60 group-hover:opacity-100' 
          : 'bg-gradient-to-b from-white/10 via-white/[0.02] to-white/5 opacity-40 group-hover:opacity-70'
      }`} />
      
      {/* Card */}
      <div className={`relative h-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 border transition-all duration-300 ${
        isPositive 
          ? 'border-[#cfa777]/15 group-hover:border-[#cfa777]/30 shadow-[inset_0_1px_0_rgba(207,167,119,0.1),0_8px_32px_rgba(0,0,0,0.4)]' 
          : 'border-white/[0.06] group-hover:border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.4)]'
      }`}>
        {/* Inner glow */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isPositive 
            ? 'bg-[radial-gradient(ellipse_at_top,rgba(207,167,119,0.03)_0%,transparent_60%)]' 
            : 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.01)_0%,transparent_60%)]'
        }`} />
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 relative">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isPositive 
              ? 'bg-[#cfa777]/10 border border-[#cfa777]/20' 
              : 'bg-white/[0.04] border border-white/[0.08]'
          }`}>
            {isPositive ? (
              <Check className="w-5 h-5 text-[#cfa777]" />
            ) : (
              <X className="w-5 h-5 text-white/40" />
            )}
          </div>
          <h3 className={`font-semibold text-lg ${isPositive ? 'text-[#cfa777]' : 'text-white/50'}`}>
            {title}
          </h3>
        </div>
        
        {/* Bullets */}
        <ul className="space-y-5 relative">
          {items.map((item, i) => (
            <QualifyBullet 
              key={i} 
              lead={item.lead} 
              detail={item.detail} 
              isPositive={isPositive} 
              delay={delay + 0.1 + i * 0.08}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function QualificationSection() {
  const prefersReducedMotion = useReducedMotion();
  
  const forYou = [
    { lead: "You're capable of more", detail: "and you're done tolerating half-effort results." },
    { lead: "You want real accountability", detail: "not motivation that disappears after a week." },
    { lead: "You value systems", detail: "you'd rather build repeatable structure than rely on willpower." },
    { lead: "You're coachable", detail: "you can take feedback fast and implement it." },
    { lead: "You're in for the full transformation", detail: "body, money, and standards for how you live." },
  ];

  const notForYou = [
    { lead: "You're looking for shortcuts", detail: "you want outcomes without uncomfortable execution." },
    { lead: "You want 'nice' coaching", detail: "not honest correction and higher standards." },
    { lead: "You're inconsistent by default", detail: "and you're not ready to fix that." },
    { lead: "You're only curious", detail: "browsing content instead of committing to change." },
    { lead: "You're not willing to invest", detail: "time, effort, and focus for 12 months." },
  ];

  const scrollToApply = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#apply");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  return (
    <section id="qualify" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden scroll-mt-28">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#cfa777]/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#cfa777]/[0.01] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[#cfa777]/70 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Qualification
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              This isn't for everyone.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              If you're accepted, you'll be expected to execute.
            </p>
          </motion.div>

          {/* Two Premium Panels */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <QualifyCard 
              title="This is for you if…" 
              items={forYou} 
              isPositive={true} 
              delay={0.2}
            />
            <QualifyCard 
              title="This is NOT for you if…" 
              items={notForYou} 
              isPositive={false} 
              delay={0.35}
            />
          </div>

          {/* Self-Selection Mini CTA */}
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-xl p-5 md:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/60 text-sm md:text-base text-center sm:text-left">
                  If you're reading this and thinking <span className="text-white/80 font-medium">"this is me"</span> — apply.
                </p>
                <a
                  href="#apply"
                  onClick={scrollToApply}
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-[#cfa777]/10 hover:bg-[#cfa777]/20 border border-[#cfa777]/20 hover:border-[#cfa777]/30 text-[#cfa777] text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Apply
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              {/* Trust line */}
              <p className="text-white/30 text-xs text-center sm:text-left mt-4 pt-4 border-t border-white/[0.04]">
                Applications reviewed personally within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// IMAGE DIVIDER — VISUAL RESET
// ============================================================================

function ImageDivider() {
  return (
    <div className="relative h-24 md:h-32 bg-[#030303] overflow-hidden">
      {/* Darkened editorial image strip */}
      <div className="absolute inset-0">
        <Image
          src="/rob-hero.png"
          alt=""
          fill
          className="object-cover object-top opacity-[0.08] grayscale"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
      </div>
      {/* Subtle gold line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-[#cfa777]/20" />
    </div>
  );
}

// ============================================================================
// SECTION 3B — GAME PLAN FUNNEL SPLIT
// ============================================================================

function GamePlanBridgeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#030303] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Label */}
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4 font-medium">
              Start with the System
            </p>

            {/* Headline */}
            <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-4">
              Not Ready for 1:1 Enforcement Yet?
            </h3>

            {/* Subtext */}
            <p className="text-white/50 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              The Game Plan contains the exact framework behind this mentorship — without the direct accountability layer.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary: Mentorship */}
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 bg-[#cfa777] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(207,167,119,0.2)]"
              >
                <span>Apply for Mentorship</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary: Game Plan */}
              <a
                href="/gameplan"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white/60 hover:text-white/80 font-medium rounded-xl transition-all duration-300"
              >
                <span>Start with the Game Plan</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Reinforcement line */}
            <p className="text-white/30 text-xs mt-6">
              Most long-term clients complete this before applying.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 4 — CORE PROMISE (TRANSFORMATION)
// ============================================================================

function TransformationColumn({
  title,
  subtitle,
  items,
  variant,
  delay,
}: {
  title: string;
  subtitle: string;
  items: string[];
  variant: "muted" | "bridge" | "strong";
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  const cardStyles = {
    muted: "border-white/[0.06] bg-[#0a0a0a]/60",
    bridge: "border-[#cfa777]/20 bg-[#0a0a0a]/80 lg:-my-4 lg:py-12",
    strong: "border-white/[0.08] bg-[#0a0a0a]/70",
  };

  const titleStyles = {
    muted: "text-white/50",
    bridge: "text-[#cfa777]",
    strong: "text-white",
  };

  const subtitleStyles = {
    muted: "text-white/30",
    bridge: "text-[#cfa777]/70",
    strong: "text-white/50",
  };

  const bulletStyles = {
    muted: "text-white/40",
    bridge: "text-white/70",
    strong: "text-white/70",
  };

  return (
    <motion.div
      className="relative group h-full"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      {/* Glow for bridge column */}
      {variant === "bridge" && (
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#cfa777]/25 via-[#cfa777]/5 to-[#cfa777]/15 blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className={`relative h-full rounded-2xl p-6 md:p-8 border backdrop-blur-xl transition-all duration-300 group-hover:border-opacity-150 ${cardStyles[variant]} ${
        variant === "bridge" ? "shadow-[inset_0_1px_0_rgba(207,167,119,0.1),0_8px_32px_rgba(0,0,0,0.4)]" : "shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3)]"
      }`}>
        {/* Progress line for bridge */}
        {variant === "bridge" && (
          <div className="absolute left-6 top-24 bottom-8 w-px bg-gradient-to-b from-[#cfa777]/40 via-[#cfa777]/20 to-transparent hidden md:block" />
        )}

        {/* Header */}
        <div className="mb-6">
          <h3 className={`font-semibold text-lg mb-1 ${titleStyles[variant]}`}>{title}</h3>
          <p className={`text-sm ${subtitleStyles[variant]}`}>{subtitle}</p>
        </div>

        {/* Items */}
        <ul className={`space-y-4 ${variant === "bridge" ? "md:pl-4" : ""}`}>
          {items.map((item, i) => (
            <motion.li
              key={i}
              className={`text-sm leading-relaxed ${bulletStyles[variant]} ${variant === "bridge" ? "relative" : ""}`}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.15 + i * 0.06 }}
            >
              {variant === "bridge" && (
                <span className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-[#cfa777]/60 hidden md:block" />
              )}
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function OutcomePillar({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex items-start gap-3 p-4"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="w-9 h-9 rounded-lg bg-[#cfa777]/10 border border-[#cfa777]/15 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[#cfa777]" />
      </div>
      <div>
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-white/40 text-xs">{description}</p>
      </div>
    </motion.div>
  );
}

function TransformationSection() {
  const prefersReducedMotion = useReducedMotion();

  const currentReality = [
    "Training hard but plateaued — results don't match effort",
    "Busy, reactive, and pulled in too many directions",
    "Making money, but without structure or predictability",
    "Consuming information, struggling to execute consistently",
    "Progress feels fragile — one bad week derails everything",
  ];

  const theBridge = [
    "Clear standards and non-negotiables",
    "Weekly accountability and decision review",
    "Simple, repeatable systems for training, income, and time",
    "Removal of noise, shortcuts, and indecision",
    "Coaching that corrects in real time",
  ];

  const desiredState = [
    "A physique that reflects discipline, not luck",
    "Clear priorities and structured weeks",
    "Income systems that compound instead of stall",
    "Confidence built on proof, not motivation",
    "Momentum that doesn't disappear under pressure",
  ];

  return (
    <section id="transformation" className="relative bg-[#030303] py-20 md:py-28 border-y border-white/5 overflow-hidden scroll-mt-28">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#cfa777]/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#cfa777]/[0.01] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#cfa777]/70 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              The Gap
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              From where you are <span className="text-[#cfa777]">→</span> to where you want to be
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Most men know what they want. Very few build the systems to get there.
            </p>
          </motion.div>

          {/* 3-Column Transformation Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 mb-16 items-stretch">
            <TransformationColumn
              title="Where you are now"
              subtitle="High potential. Low leverage."
              items={currentReality}
              variant="muted"
              delay={0.1}
            />
            <TransformationColumn
              title="What changes"
              subtitle="Structure replaces guesswork."
              items={theBridge}
              variant="bridge"
              delay={0.25}
            />
            <TransformationColumn
              title="Where you're going"
              subtitle="Controlled. Consistent. Confident."
              items={desiredState}
              variant="strong"
              delay={0.4}
            />
          </div>

          {/* Outcome Snapshot Bar */}
          <motion.div
            className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-xl mb-16 overflow-hidden"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              <OutcomePillar
                icon={Star}
                title="Physique"
                description="Leaner, stronger, sustainable"
                delay={0.6}
              />
              <OutcomePillar
                icon={ArrowRight}
                title="Income"
                description="Structured growth, not guesswork"
                delay={0.7}
              />
              <OutcomePillar
                icon={Check}
                title="Time"
                description="Control your week instead of reacting"
                delay={0.8}
              />
              <OutcomePillar
                icon={ChevronDown}
                title="Standards"
                description="Higher baseline for how you operate"
                delay={0.9}
              />
            </div>
          </motion.div>

          {/* Truth Statement */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
              "The difference isn't motivation. It's having the right standards, systems, and someone who won't let you lie to yourself."
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#cfa777]/40 to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Micro-Transition */}
          <motion.div
            className="text-center"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <p className="text-white/40 text-sm mb-3">
              This is the framework everything else is built on.
            </p>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-[#cfa777]/40 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5 — THE METHOD (PROPRIETARY SYSTEM)
// ============================================================================

function MethodSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { number: "01", title: "Physique Mastery", description: "Build a body that commands respect and gives you energy for everything else." },
    { number: "02", title: "Business Architecture", description: "Design income systems that scale without trading more time for money." },
    { number: "03", title: "Mindset Engineering", description: "Develop the mental frameworks that make discipline feel effortless." },
    { number: "04", title: "Lifestyle Design", description: "Create a life structure that supports your goals instead of fighting them." },
  ];

  return (
    <section id="method" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-[#cfa777] text-sm tracking-[0.2em] uppercase mb-4 font-medium">The System</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                The Game Plan Method
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                A proven framework refined over 10+ years of personal application and client results.
              </p>
            </div>
          </SectionReveal>

          {/* Timeline pillars */}
          <div ref={ref} className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#cfa777]/0 via-[#cfa777]/30 to-[#cfa777]/0 md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#cfa777] md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(207,167,119,0.5)]"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
                  />

                  {/* Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <GlassCard className="p-6 md:p-8">
                      <span className="text-[#cfa777]/60 font-serif text-3xl md:text-4xl">{pillar.number}</span>
                      <h3 className="text-white font-semibold text-xl mt-3 mb-2">{pillar.title}</h3>
                      <p className="text-white/50">{pillar.description}</p>
                    </GlassCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6 — WHAT YOU GET (DELIVERABLES)
// ============================================================================

function SystemPillar({
  number,
  title,
  positioning,
  components,
  outcome,
  isPrimary,
  delay,
}: {
  number: string;
  title: string;
  positioning: string;
  components: string[];
  outcome: string;
  isPrimary?: boolean;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative group h-full"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-[1px] rounded-2xl blur-sm transition-opacity duration-300 ${
        isPrimary
          ? "bg-gradient-to-b from-[#cfa777]/30 via-[#cfa777]/10 to-[#cfa777]/20 opacity-80 group-hover:opacity-100"
          : "bg-gradient-to-b from-white/10 via-white/[0.02] to-white/5 opacity-40 group-hover:opacity-70"
      }`} />

      <div className={`relative h-full rounded-2xl p-6 md:p-8 border backdrop-blur-xl transition-all duration-300 ${
        isPrimary
          ? "border-[#cfa777]/25 group-hover:border-[#cfa777]/40 bg-[#0a0a0a]/90 shadow-[inset_0_1px_0_rgba(207,167,119,0.15),0_8px_32px_rgba(0,0,0,0.5)]"
          : "border-white/[0.08] group-hover:border-white/[0.15] bg-[#0a0a0a]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.4)]"
      }`}>
        {/* Inner glow */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isPrimary
            ? "bg-[radial-gradient(ellipse_at_top,rgba(207,167,119,0.05)_0%,transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)]"
        }`} />

        {/* Header */}
        <div className="relative mb-6">
          <span className={`text-xs font-medium tracking-[0.2em] uppercase ${isPrimary ? "text-[#cfa777]/60" : "text-white/30"}`}>
            {number}
          </span>
          <h3 className={`text-xl font-semibold mt-2 mb-1 ${isPrimary ? "text-[#cfa777]" : "text-white"}`}>
            {title}
          </h3>
          <p className={`text-sm italic ${isPrimary ? "text-[#cfa777]/70" : "text-white/40"}`}>
            {positioning}
          </p>
        </div>

        {/* Components */}
        <ul className="space-y-3 mb-6 relative">
          {components.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-sm text-white/60"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.15 + i * 0.05 }}
            >
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isPrimary ? "bg-[#cfa777]/60" : "bg-white/30"}`} />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Outcome */}
        <div className={`pt-4 border-t relative ${isPrimary ? "border-[#cfa777]/15" : "border-white/[0.06]"}`}>
          <p className="text-xs">
            <span className={`font-semibold ${isPrimary ? "text-[#cfa777]" : "text-white/70"}`}>Outcome:</span>
            <span className="text-white/50 ml-1">{outcome}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DeliveryItem({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex items-center justify-center gap-2 p-4 text-center"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Check className="w-4 h-4 text-[#cfa777]/70" />
      <span className="text-white/60 text-sm">{label}</span>
    </motion.div>
  );
}

function DeliverablesSection() {
  const prefersReducedMotion = useReducedMotion();

  const pillars = [
    {
      number: "Pillar 01",
      title: "Coaching & Accountability",
      positioning: "Direct correction. No drift.",
      components: [
        "Weekly 1:1 coaching calls (strategy, review, correction)",
        "Direct access between calls for real-time decisions",
        "External standards enforced consistently",
        "Progress reviewed weekly, not reactively",
      ],
      outcome: "Consistent execution without relying on motivation.",
      isPrimary: true,
    },
    {
      number: "Pillar 02",
      title: "Training & Physique Systems",
      positioning: "Build a body that supports everything else.",
      components: [
        "Fully personalised training architecture",
        "Periodised programming built for sustainability",
        "Technique review and form correction",
        "Adaptation as life, schedule, and goals change",
      ],
      outcome: "A physique that reflects discipline, not luck.",
    },
    {
      number: "Pillar 03",
      title: "Nutrition & Energy Framework",
      positioning: "Fuel performance without restriction.",
      components: [
        "Flexible nutrition framework (not rigid meal plans)",
        "Energy and recovery optimisation",
        "Decision-making rules instead of guesswork",
        "Adjustments based on performance, not emotion",
      ],
      outcome: "Stable energy, composure, and body composition.",
    },
    {
      number: "Pillar 04",
      title: "Business & Life Structure",
      positioning: "Structure replaces chaos.",
      components: [
        "Weekly structure and priority planning",
        "Income and business systems guidance",
        "Time leverage and decision filters",
        "Removal of noise, distraction, and low-value effort",
      ],
      outcome: "Controlled weeks and predictable progress.",
    },
    {
      number: "Pillar 05",
      title: "Environment & Peer Context",
      positioning: "Raise your baseline.",
      components: [
        "Private client environment",
        "Access to other high-standard operators",
        "In-person experiences (where applicable)",
        "Long-term context beyond short-term goals",
      ],
      outcome: "Higher standards become normal.",
    },
  ];

  const deliveryItems = [
    "1:1 (not group)",
    "Ongoing (not a course)",
    "Systems-driven (not motivation)",
    "Long-term (not a quick fix)",
  ];

  return (
    <section id="included" className="relative bg-[#030303] py-24 md:py-32 border-y border-white/5 overflow-hidden scroll-mt-28">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#cfa777]/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#cfa777]/[0.01] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#cfa777]/70 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              What You Get
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Everything you need to transform
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Every system, standard, and support layer required to build results that last — delivered with direct accountability.
            </p>
          </motion.div>

          {/* 5 System Pillars - Primary pillar full width, others in 2x2 grid */}
          <div className="space-y-6 mb-16">
            {/* Primary Pillar - Full Width */}
            <SystemPillar
              {...pillars[0]}
              delay={0.1}
            />

            {/* Remaining Pillars - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.slice(1).map((pillar, i) => (
                <SystemPillar
                  key={i}
                  {...pillar}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Delivery Model Strip */}
          <motion.div
            className="mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-center text-white/40 text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              How this is delivered
            </p>
            <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-xl overflow-hidden">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                {deliveryItems.map((item, i) => (
                  <DeliveryItem key={i} label={item} delay={0.6 + i * 0.08} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Truth Statement */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
              "Most people don't fail because they lack information. They fail because no one is enforcing standards when motivation disappears."
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#cfa777]/40 to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Micro-Transition */}
          <motion.div
            className="text-center"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <p className="text-white/40 text-sm mb-3">
              This is what allows the results below to compound.
            </p>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-[#cfa777]/40 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7 — PROOF ENGINE (PATTERN BREAK)
// ============================================================================

function ResultsCategory({
  title,
  outcomes,
  explanation,
  delay,
}: {
  title: string;
  outcomes: string[];
  explanation: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="text-center md:text-left"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h4 className="text-[#cfa777] font-semibold text-lg mb-4">{title}</h4>
      <ul className="space-y-2 mb-4">
        {outcomes.map((outcome, i) => (
          <li key={i} className="text-white/70 text-sm">{outcome}</li>
        ))}
      </ul>
      <p className="text-white/40 text-xs leading-relaxed">{explanation}</p>
    </motion.div>
  );
}

// ============================================================================
// PROOF WALL — Auto-scrolling comparison cards
// ============================================================================

function ComparisonCard({ 
  outcome, 
  timeframe, 
  category 
}: { 
  outcome: string; 
  timeframe: string; 
  category: string;
}) {
  return (
    <div className="flex-shrink-0 w-full p-3">
      <div className="bg-[#0f0f0f] border border-white/[0.06] rounded-xl overflow-hidden">
        {/* Before/After Images */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
          <div className="relative aspect-[3/4] bg-[#151515]">
            <Image
              src="/rob-hero.png"
              alt="Before transformation"
              fill
              className="object-cover object-top opacity-70 grayscale"
              sizes="150px"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] text-white/60 uppercase tracking-wider">Before</div>
          </div>
          <div className="relative aspect-[3/4] bg-[#151515]">
            <Image
              src="/rob-hero.png"
              alt="After transformation"
              fill
              className="object-cover object-top"
              sizes="150px"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] text-white/60 uppercase tracking-wider">After</div>
          </div>
        </div>
        {/* Metadata */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[#cfa777] font-medium text-sm">{outcome}</span>
            <span className="text-white/40 text-xs">{timeframe}</span>
          </div>
          <span className="inline-block px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-[9px] text-white/50 uppercase tracking-wider">{category}</span>
        </div>
      </div>
    </div>
  );
}

function ProofWall({ isPaused }: { isPaused: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  
  const transformations = [
    { outcome: "-15kg", timeframe: "6 months", category: "Physique" },
    { outcome: "+8kg lean", timeframe: "8 months", category: "Physique" },
    { outcome: "6-figure year", timeframe: "12 months", category: "Income" },
    { outcome: "-12kg", timeframe: "4 months", category: "Physique" },
    { outcome: "2x income", timeframe: "10 months", category: "Income" },
    { outcome: "Daily structure", timeframe: "3 months", category: "Standards" },
  ];

  // Duplicate for seamless loop
  const allCards = [...transformations, ...transformations];

  if (prefersReducedMotion) {
    return (
      <div className="h-[500px] overflow-y-auto scrollbar-hide space-y-3 pr-2">
        {transformations.map((t, i) => (
          <ComparisonCard key={i} {...t} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <div 
        className="flex flex-col"
        style={{
          animation: isPaused ? 'none' : 'scrollUp 30s linear infinite',
        }}
      >
        {allCards.map((t, i) => (
          <ComparisonCard key={i} {...t} />
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}

function ProofSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isWallPaused, setIsWallPaused] = useState(false);

  const repeatabilityData = [
    { outcome: "-10 to -20kg", timeframe: "4-8 months", change: "Leaner" },
    { outcome: "+5 to +12kg muscle", timeframe: "6-12 months", change: "Stronger" },
    { outcome: "First 6-figures", timeframe: "8-14 months", change: "Structured" },
    { outcome: "Daily non-negotiables", timeframe: "2-4 months", change: "Consistent" },
  ];

  return (
    <section id="results" className="relative bg-[#0a0a0a] py-24 md:py-36 overflow-hidden scroll-mt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505_0%,#0a0a0a_15%,#0a0a0a_85%,#050505_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* ═══════════════════════════════════════════════════════════════════
              1. SECTION HEADER
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[#cfa777] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
              Proof
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Real transformations.<br className="hidden sm:block" /> Real people.
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              2. PROOF WALL + MECHANISM — Split layout
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            className="mb-24"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              {/* Left: Proof Wall */}
              <div 
                className="order-2 lg:order-1"
                onMouseEnter={() => setIsWallPaused(true)}
                onMouseLeave={() => setIsWallPaused(false)}
                onFocus={() => setIsWallPaused(true)}
                onBlur={() => setIsWallPaused(false)}
              >
                <ProofWall isPaused={isWallPaused} />
              </div>

              {/* Right: Mechanism Narrative */}
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    These aren't testimonials. They're outcomes from enforced standards — the same system, applied consistently, producing repeatable results.
                  </p>

                  {/* Mechanism Block */}
                  <div className="bg-[#0f0f0f]/80 border border-white/[0.06] rounded-xl p-6 mb-8">
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">
                      What creates these outcomes
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cfa777] mt-2 shrink-0" />
                        <div>
                          <span className="text-white font-medium text-sm">Standards</span>
                          <span className="text-white/50 text-sm"> — non-negotiables that don't bend</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cfa777] mt-2 shrink-0" />
                        <div>
                          <span className="text-white font-medium text-sm">Systems</span>
                          <span className="text-white/50 text-sm"> — weekly structure that compounds</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cfa777] mt-2 shrink-0" />
                        <div>
                          <span className="text-white font-medium text-sm">Enforcement</span>
                          <span className="text-white/50 text-sm"> — correction in real time</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-white/40 text-sm">
                    The variable isn't information — it's accountability that doesn't disappear when motivation does.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              3. REPEATABILITY BAND — Evidence of consistency
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            className="mb-24"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-center text-white/50 text-base mb-3">
              This isn't one success story. It's repeatable — because the process is the same.
            </p>
            <p className="text-center text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8 font-medium">
              Typical outcomes across clients
            </p>
            
            {/* Repeatability Table */}
            <div className="bg-[#0f0f0f]/60 border border-white/[0.04] rounded-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 px-6 py-3 border-b border-white/[0.04] bg-white/[0.02]">
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Outcome</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Timeframe</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-medium">What changed</span>
              </div>
              {/* Rows */}
              {repeatabilityData.map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/[0.02] last:border-b-0"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <span className="text-[#cfa777] font-medium text-sm">{row.outcome}</span>
                  <span className="text-white/60 text-sm">{row.timeframe}</span>
                  <span className="text-white/50 text-sm">{row.change}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              4. THE CONSTANT — Editorial figure + caption
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            className="mb-20"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
              {/* Figure */}
              <figure className="mx-auto lg:mx-0">
                <div className="relative aspect-square w-full max-w-[280px] rounded-xl overflow-hidden">
                  <Image
                    src="/rob-hero.png"
                    alt="Rob Lipsett"
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <figcaption className="text-center lg:text-left mt-3">
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">The constant</p>
                </figcaption>
              </figure>

              {/* Caption content */}
              <div className="flex flex-col justify-center text-center lg:text-left">
                <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-4 font-serif">
                  Same framework. Same standards. Applied repeatedly.
                </p>
                <p className="text-white/50 text-base leading-relaxed mb-4">
                  Every client above followed the same system. The difference is enforcement — accountability that doesn't disappear when motivation does.
                </p>
                <p className="text-white/40 text-sm">
                  The variable isn't information. It's consistency under pressure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              5. CLOSING STATEMENT
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            className="text-center pt-8 border-t border-white/[0.04]"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif">
              These results are not accidental. They are the product of standards applied over time.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#cfa777]/40 to-transparent mx-auto mt-8" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8 — AUTHORITY STACK (WHY ROB)
// ============================================================================

function AuthoritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const storyBeats = [
    {
      label: "Built publicly",
      title: "10+ years documented",
      description: "Every phase of the journey — competing, building, failing, refining — captured on YouTube and social. Nothing hidden.",
    },
    {
      label: "Pressure-tested",
      title: "Competed. Built. Failed. Logged.",
      description: "Stage competitions, multiple businesses, 1.2M+ followers, 150+ podcast episodes with world-class guests. Real stakes, real lessons.",
    },
    {
      label: "Refined into a system",
      title: "Distilled into mentorship",
      description: "Not theory from a book. A system extracted from a decade of documented execution — delivered directly to you.",
    },
  ];

  const credibilityMetrics = [
    { value: "10+", label: "Years" },
    { value: "500+", label: "Clients" },
    { value: "1.2M+", label: "Following" },
    { value: "150+", label: "Episodes" },
  ];

  return (
    <section className="relative bg-[#030303] py-24 md:py-32 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#cfa777] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Why Rob</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
              Lived, Not Theorised
            </h2>
          </motion.div>

          {/* Two-column layout: Image + Story beats */}
          <div ref={ref} className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 mb-16">
            {/* Left: Rob Image with montage strip */}
            <motion.div
              className="relative"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/rob-hero.png"
                  alt="Rob Lipsett"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
              </div>
              {/* Montage strip */}
              <div className="grid grid-cols-3 gap-1 mt-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-square rounded overflow-hidden">
                    <Image
                      src="/rob-hero.png"
                      alt=""
                      fill
                      className="object-cover object-center opacity-60 grayscale"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Story beats */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {storyBeats.map((beat, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-6 border-l border-white/[0.08]"
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    {/* Beat marker */}
                    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-[#cfa777]/60 -translate-x-[5px]" />
                    
                    <p className="text-[#cfa777]/70 text-[10px] tracking-[0.2em] uppercase mb-2 font-medium">
                      {beat.label}
                    </p>
                    <h3 className="text-white font-medium text-lg mb-2">
                      {beat.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {beat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Credibility Metrics Row */}
          <motion.div
            className="border-t border-white/[0.04] pt-10"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {credibilityMetrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#cfa777] font-serif text-3xl md:text-4xl">{metric.value}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 9 — OBJECTION HANDLING (FAQ)
// ============================================================================

function FAQItem({ question, answer, isOpen, onToggle, index }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) {
  return (
    <GlassCard className="overflow-hidden" hover={false}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus className="w-5 h-5 text-[#cfa777]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-6 pb-6">
              <p className="text-white/50 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How much time do I need to commit?", answer: "The program is designed for busy professionals. Expect 4-6 hours per week for training, plus our weekly calls. The systems are built to integrate into your life, not take it over." },
    { question: "What if I'm a complete beginner?", answer: "This mentorship is for those with some foundation who want to accelerate. If you're brand new to fitness or business, this isn't the right fit—yet. Build some basics first, then apply." },
    { question: "How long until I see results?", answer: "Most clients see noticeable physical changes within 8-12 weeks. Business and mindset shifts often happen faster. The full transformation unfolds over 12 months." },
    { question: "What's the investment?", answer: "Investment details are shared on our call after your application is reviewed. This is a premium, high-touch program priced accordingly. If budget is your primary concern, this isn't for you." },
    { question: "What if it doesn't work for me?", answer: "The system works when you work it. We're selective about who we accept specifically to ensure fit. If you show up and do the work, results follow." },
  ];

  return (
    <section id="faq" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-[#cfa777] text-sm tracking-[0.2em] uppercase mb-4 font-medium">Questions</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
                Before You Decide
              </h2>
            </div>
          </SectionReveal>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={staggerItem}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  index={i}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10 — THE OFFER
// ============================================================================

function OfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offerings = [
    "52 weekly 1:1 coaching calls",
    "Unlimited voice note access",
    "Custom training & nutrition programming",
    "Business strategy & accountability",
    "Private mastermind community access",
  ];

  return (
    <section className="relative bg-[#030303] py-24 md:py-32 border-y border-white/5 overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#cfa777]/[0.03] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-[#cfa777] text-sm tracking-[0.2em] uppercase mb-4 font-medium">The Mentorship</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                12 Months of Direct Access
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                This is not a course. Not a group program. This is 1:1 mentorship with direct access to Rob for a full year. Weekly calls, unlimited support, and complete accountability.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div ref={ref} className="relative">
              {/* Featured card with glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#cfa777]/30 via-[#cfa777]/10 to-[#cfa777]/20 rounded-2xl blur-sm" />
              <GlassCard className="p-8 md:p-10 relative" hover={false}>
                <p className="text-white/40 text-sm mb-4 text-center">What to expect:</p>
                <motion.ul 
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {offerings.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-3 text-white/70"
                      variants={staggerItem}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#cfa777]/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#cfa777]" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </GlassCard>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="text-white/40 text-sm text-center mt-8">
              Limited to 20 active clients at any time to ensure quality.
            </p>
          </SectionReveal>

          <SectionReveal>
            <p className="text-white/30 text-sm text-center mt-6">
              The Game Plan installs the systems. Mentorship enforces them.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 11 — PRIMARY APPLICATION CTA
// ============================================================================

function PrimaryCTASection() {
  return (
    <section id="apply" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#cfa777]/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#cfa777]/[0.02] rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to Transform?
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Start with a short application. If we're a fit, we'll schedule a call to discuss your goals and how the mentorship can help you achieve them.
            </p>

            <motion.a
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#cfa777] text-black font-semibold px-12 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_50px_rgba(207,167,119,0.3)] hover:shadow-[0_0_70px_rgba(207,167,119,0.4)] text-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">Apply for Mentorship</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-white/30 text-sm mt-6">
              Takes 2–3 minutes · No commitment required
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 12 — APPLICATION PREVIEW
// ============================================================================

function ApplicationPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { num: "1", title: "Apply", desc: "Complete a short application about your goals and current situation." },
    { num: "2", title: "Review", desc: "Rob personally reviews every application within 48 hours." },
    { num: "3", title: "Call", desc: "If there's a fit, we'll schedule a call to discuss next steps." },
  ];

  return (
    <section className="relative bg-[#030303] py-20 md:py-24 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <motion.div 
              className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#cfa777]/0 via-[#cfa777]/30 to-[#cfa777]/0"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-[#cfa777]/10 border border-[#cfa777]/20 flex items-center justify-center mx-auto mb-4 relative z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
                >
                  <span className="text-[#cfa777] font-semibold">{step.num}</span>
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 13 — SCARCITY & CONTROL
// ============================================================================

function ScarcitySection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#cfa777]/10 border border-[#cfa777]/20 rounded-full px-5 py-2.5 mb-6"
              animate={{ boxShadow: ["0 0 20px rgba(207,167,119,0.1)", "0 0 30px rgba(207,167,119,0.2)", "0 0 20px rgba(207,167,119,0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-[#cfa777] animate-pulse" />
              <span className="text-[#cfa777] text-sm font-medium">Limited Availability</span>
            </motion.div>
            
            <p className="text-white/60 leading-relaxed">
              To maintain quality, Rob works with a maximum of 20 clients at any time. Applications are reviewed on a rolling basis. When spots fill, a waitlist opens.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 14 — FINAL PROOF REMINDER
// ============================================================================

function FinalProofSection() {
  const stats = [
    { value: "500+", label: "Clients transformed through Rob's systems" },
    { value: "10+ Years", label: "Documented publicly on YouTube & social" },
    { value: "1.2M+", label: "People following the journey" },
  ];

  return (
    <section className="relative bg-[#030303] py-20 md:py-24 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={staggerItem}>
              <GlassCard className="p-6 text-center" hover={false}>
                <p className="text-[#cfa777] font-serif text-3xl mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 15 — FINAL CTA
// ============================================================================

function FinalCTASection() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#050505] to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cfa777]/[0.03] rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-10">
              Your Next Chapter Starts Here
            </h2>

            {/* Dual CTAs */}
            <div className="flex flex-col items-center gap-4">
              {/* Primary: Mentorship */}
              <motion.a
                href="https://forms.gle/example"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-[#cfa777] text-black font-semibold px-12 py-6 rounded-xl transition-all duration-300 shadow-[0_0_50px_rgba(207,167,119,0.3)] hover:shadow-[0_0_70px_rgba(207,167,119,0.4)] text-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Apply for Mentorship</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary: Game Plan */}
              <a
                href="/gameplan"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm font-medium transition-colors duration-300 mt-2"
              >
                <span>Or start with the Game Plan</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 16 — TRUST FOOTER
// ============================================================================

function TrustFooter() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold mb-1">Rob Lipsett</p>
              <p className="text-white/40 text-sm">Dublin, Ireland</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:team@roblipsett.com" className="text-white/40 hover:text-white/60 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
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
      <ScrollProgress />
      <MentorshipNavbar />
      <StickyCTA />
      <MobileStickyCTA />
      <MentorshipHero />
      <QualificationSection />
      <ImageDivider />
      <GamePlanBridgeSection />
      <TransformationSection />
      <MethodSection />
      <DeliverablesSection />
      <ProofSection />
      <AuthoritySection />
      <FAQSection />
      <OfferSection />
      <PrimaryCTASection />
      <ApplicationPreviewSection />
      <ScarcitySection />
      <FinalProofSection />
      <FinalCTASection />
      <TrustFooter />
    </main>
  );
}
