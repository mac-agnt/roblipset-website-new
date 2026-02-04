"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <AppHero />
      <WeeklyCallSection />
      <Footer />
    </main>
  );
}

function AppHero() {
  return (
    <section className="relative min-h-screen py-20 md:py-28 lg:py-36 bg-[#050505] overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#000000] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute w-[700px] h-[700px] top-1/4 right-1/4 rounded-full blur-[128px] opacity-[0.12] bg-[#cfa777] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* MOBILE LAYOUT (< sm): Headline → Phone (smaller) → Subheader → Features */}
        <div className="sm:hidden flex flex-col items-center text-center space-y-6">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#cfa777]/60" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-[#cfa777]/90 uppercase">
              The Training System
            </span>
            <div className="h-px w-10 bg-[#cfa777]/60" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl text-white leading-[1.05] tracking-tight max-w-sm">
            Everything you need to train with intent.
          </h1>

          {/* Phone Image - Smaller and centered */}
          <div className="relative w-full max-w-[240px] py-4">
            <div className="relative w-full" style={{ aspectRatio: '9/19' }}>
              <Image
                src="/Habit+Tracker+Mockup-1920w.webp"
                alt="App Interface"
                fill
                sizes="240px"
                className="object-contain rounded-xl"
                quality={95}
                priority
              />
            </div>
          </div>

          {/* Subhead */}
          <p className="text-white/50 text-base leading-relaxed max-w-md">
            Programs, tracking, and guidance in one place—with mentorship available when you want tighter feedback.
          </p>

          {/* System Loop */}
          <div className="space-y-4 pt-4 w-full max-w-md">
            <div className="text-[#cfa777]/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
              How It Works
            </div>
            {[
              { step: "01", label: "Plan", desc: "Custom program inside the app" },
              { step: "02", label: "Execute", desc: "Track every session, every day" },
              { step: "03", label: "Progress", desc: "See results, adjust as needed" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 text-left">
                <div className="flex items-center justify-center w-9 h-9 rounded-full border border-[#cfa777]/30 bg-[#cfa777]/5 flex-shrink-0">
                  <span className="text-[#cfa777] text-[11px] font-bold tracking-wider">{item.step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-base mb-0.5 tracking-tight">{item.label}</h3>
                  <p className="text-white/40 text-sm leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-6 space-y-3 w-full max-w-md">
            <Link href="/mentorship" className="block">
              <button className="w-full min-h-[48px] px-8 rounded-full bg-[#cfa777] text-black text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[#d4af85] shadow-lg shadow-[#cfa777]/20">
                Enter the Mentorship
              </button>
            </Link>
            <button className="w-full min-h-[48px] px-8 rounded-full border border-white/20 bg-white/[0.02] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/[0.06] hover:border-white/30 backdrop-blur-sm">
              Download the App
            </button>
          </div>

        </div>

        {/* TABLET+ LAYOUT: Original 2-column grid */}
        <div className="hidden sm:grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="space-y-8 max-w-xl">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#cfa777]/60" />
              <span className="text-[9px] font-bold tracking-[0.3em] text-[#cfa777]/90 uppercase">
                The Training System
              </span>
            </div>

            {/* Headline - Three copy options provided, implementing Option A */}
            {/* Option A: "Everything you need to train with intent." */}
            {/* Option B: "A simple system for consistent progress." */}
            {/* Option C: "Your training, organized." */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              Everything you need to train with intent.
            </h1>

            {/* Subhead */}
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
              Programs, tracking, and guidance in one place—with mentorship available when you want tighter feedback.
            </p>

            {/* System Loop */}
            <div className="space-y-4 pt-6">
              <div className="text-[#cfa777]/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                How It Works
              </div>
              {[
                { step: "01", label: "Plan", desc: "Custom program inside the app" },
                { step: "02", label: "Execute", desc: "Track every session, every day" },
                { step: "03", label: "Progress", desc: "See results, adjust as needed" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full border border-[#cfa777]/30 bg-[#cfa777]/5 flex-shrink-0 group-hover:border-[#cfa777]/60 group-hover:bg-[#cfa777]/10 transition-all duration-300">
                    <span className="text-[#cfa777] text-[11px] font-bold tracking-wider">{item.step}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-white font-semibold text-base mb-0.5 tracking-tight">{item.label}</h3>
                    <p className="text-white/40 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs - Improved styling */}
            <div className="pt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link href="/mentorship" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto min-h-[48px] px-8 rounded-full bg-[#cfa777] text-black text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[#d4af85] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] shadow-lg shadow-[#cfa777]/20">
                    Enter the Mentorship
                  </button>
                </Link>
                <button className="w-full sm:w-auto min-h-[48px] px-8 rounded-full border border-white/20 bg-white/[0.02] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/[0.06] hover:border-white/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] backdrop-blur-sm">
                  Download the App
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean App Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            
            {/* Clean App Screenshot - No device frame */}
            {/* Increased size: max-w bumped from 340px to 480px for better visual prominence */}
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
              <div className="relative w-full" style={{ aspectRatio: '9/19' }}>
                <Image
                  src="/Habit+Tracker+Mockup-1920w.webp"
                  alt="App Interface"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 480px"
                  className="object-contain rounded-xl"
                  quality={95}
                  priority
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function WeeklyCallSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/[0.03]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      {/* Subtle ambient glow */}
      <div className="absolute w-[600px] h-[600px] top-1/3 left-1/4 rounded-full blur-[120px] opacity-[0.08] bg-blue-500 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Call Image */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[640px] mx-auto lg:mx-0">
              {/* Fixed: Removed aspect-video constraint and changed object-cover to object-contain */}
              {/* This ensures the full image is visible without clipping */}
              <div className="relative w-full">
                <Image
                  src="/GAME+PLAN+MEETS+GRAPHIC-1920w.webp"
                  alt="Weekly Mentorship Call"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="w-full h-auto rounded-xl"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-8 max-w-xl order-1 lg:order-2">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#cfa777]/60" />
              <span className="text-[9px] font-bold tracking-[0.3em] text-[#cfa777]/90 uppercase">
                Weekly Call
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight">
              Adjust. Refine.<br />Move forward.
            </h2>

            {/* Subhead */}
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              A weekly check-in to spot issues early and adjust your plan. Mentorship keeps you from spinning your wheels.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 pt-4">
              {[
                "Review progress and troubleshoot sticking points",
                "Get course corrections before small issues compound",
                "Stay accountable to the plan you committed to"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#cfa777] flex-shrink-0" />
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link href="/mentorship">
                <button className="min-h-[48px] px-8 rounded-full bg-[#cfa777] text-black text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[#d4af85] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] shadow-lg shadow-[#cfa777]/20">
                  Learn About Mentorship
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
