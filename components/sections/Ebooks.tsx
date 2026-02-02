"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Ebooks() {
  const [isBundleHovered, setIsBundleHovered] = useState(false);
  const [hoveredGuide, setHoveredGuide] = useState<string | null>(null);

  return (
    <section className="relative py-32 md:py-44 bg-[#0a0a0a] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Header - Tighter Spacing */}
        <div className="mb-14 md:mb-16">
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-3">
            Guides
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.95]">
            The Method, Written Down.
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg">
            Two focused guides, or the complete cutting system.
          </p>
        </div>

        {/* Featured Bundle Panel */}
        <div 
          className="relative mb-10 md:mb-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent overflow-hidden"
          onMouseEnter={() => setIsBundleHovered(true)}
          onMouseLeave={() => setIsBundleHovered(false)}
        >
          {/* Accent Glow (top-left) */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#cfa777]/10 rounded-full blur-3xl pointer-events-none opacity-40" />
          
          {/* Best Value Pill */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
            <span className="inline-block bg-[#cfa777] text-black text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Best Value
            </span>
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
            
            {/* Left Column: Copy + CTA - Tighter Spacing */}
            <div className="flex flex-col justify-center space-y-5 md:space-y-6">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2 leading-tight">
                  Complete Cutting Bundle
                </h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed">
                  Training + Nutrition. The full methodology.
                </p>
              </div>

              {/* Bullets - Increased Line Height */}
              <ul className="space-y-2.5">
                {[
                  "4-week cutting framework",
                  "Training splits + progression rules",
                  "Macro targets + meal structure",
                  "Execution checklist for consistency"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm md:text-base leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#cfa777] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Price + CTA - Grouped Tightly */}
              <div className="pt-3 flex items-end gap-6">
                <div className="font-serif text-4xl md:text-5xl text-white leading-none">$49</div>
                <Link
                  href="#cutting-bundle"
                  className="inline-flex items-center justify-center h-12 md:h-13 px-8 md:px-10 bg-[#cfa777] hover:bg-[#d9b15f] text-black text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#cfa777] focus:ring-offset-4 focus:ring-offset-[#0a0a0a] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  Get the Bundle
                </Link>
              </div>
            </div>

            {/* Right Column: Paired Bundle Covers */}
            <div className="relative flex items-end justify-center md:justify-end">
              {/* Plinth Gradient */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-[#cfa777]/5 to-transparent blur-2xl pointer-events-none" />
              
              {/* Paired Cover Composition */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px]">
                
                {/* Back Cover (Nutrition) - Offset Up-Left */}
                <div 
                  className={cn(
                    "absolute top-0 left-0 w-full aspect-[3/4] transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none",
                    isBundleHovered 
                      ? "translate-x-[-20px] translate-y-[-20px] scale-[0.94] rotate-[-3deg] opacity-80" 
                      : "translate-x-[-16px] translate-y-[-16px] scale-[0.92] rotate-[-4deg] opacity-70"
                  )}
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src="/Gym & Fitness Training Instagram Story (5).png"
                    alt="Nutrition Guide"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-contain drop-shadow-lg"
                    quality={85}
                  />
                </div>

                {/* Front Cover (Training) - Primary */}
                <div 
                  className={cn(
                    "relative w-full aspect-[3/4] transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none",
                    isBundleHovered 
                      ? "translate-y-[-8px] rotate-0 drop-shadow-2xl" 
                      : "translate-y-0 rotate-[-2deg] drop-shadow-xl"
                  )}
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src="/Gym & Fitness Training Instagram Story (4).png"
                    alt="Training Guide"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-contain"
                    quality={90}
                    priority
                  />
                </div>

                {/* Subtle Plus Indicator */}
                <div 
                  className={cn(
                    "absolute top-1/2 left-0 -translate-y-1/2 -translate-x-3 w-6 h-6 rounded-full bg-[#cfa777] flex items-center justify-center text-black font-bold text-xs transition-opacity duration-300",
                    isBundleHovered ? "opacity-90" : "opacity-60"
                  )}
                  style={{ zIndex: 3 }}
                >
                  +
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Supporting Guides - Reduced Visual Weight */}
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">
            Or choose a guide
          </h4>

          <div className="grid md:grid-cols-2 gap-5">
            
            {/* Training Guide */}
            <Link
              href="#training-guide"
              onMouseEnter={() => setHoveredGuide("training")}
              onMouseLeave={() => setHoveredGuide(null)}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cfa777]/50 focus:ring-offset-4 focus:ring-offset-[#0a0a0a] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                
                {/* Thumbnail - Smaller */}
                <div className="relative w-20 md:w-24 aspect-[3/4] flex-shrink-0 rounded overflow-hidden border border-white/5">
                  <Image
                    src="/Gym & Fitness Training Instagram Story (4).png"
                    alt="Training Guide to Cutting"
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={75}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h5 className="font-serif text-2xl md:text-3xl text-white mb-1.5 leading-tight">
                    Training Guide to Cutting
                  </h5>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed mb-3">
                    Programming, splits, progression, execution.
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="font-serif text-xl md:text-2xl text-white">$29</span>
                    <span
                      className={cn(
                        "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-2",
                        hoveredGuide === "training" ? "text-[#cfa777]" : "text-white/40"
                      )}
                    >
                      View Guide
                      <span
                        className={cn(
                          "transition-transform duration-300",
                          hoveredGuide === "training" && "translate-x-1"
                        )}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>

              </div>
            </Link>

            {/* Nutrition Guide */}
            <Link
              href="#nutrition-guide"
              onMouseEnter={() => setHoveredGuide("nutrition")}
              onMouseLeave={() => setHoveredGuide(null)}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cfa777]/50 focus:ring-offset-4 focus:ring-offset-[#0a0a0a] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                
                {/* Thumbnail - Smaller */}
                <div className="relative w-20 md:w-24 aspect-[3/4] flex-shrink-0 rounded overflow-hidden border border-white/5">
                  <Image
                    src="/Gym & Fitness Training Instagram Story (5).png"
                    alt="Nutrition Guide to Cutting"
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={75}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h5 className="font-serif text-2xl md:text-3xl text-white mb-1.5 leading-tight">
                    Nutrition Guide to Cutting
                  </h5>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed mb-3">
                    Macros, meal structure, adherence.
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="font-serif text-xl md:text-2xl text-white">$29</span>
                    <span
                      className={cn(
                        "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-2",
                        hoveredGuide === "nutrition" ? "text-[#cfa777]" : "text-white/40"
                      )}
                    >
                      View Guide
                      <span
                        className={cn(
                          "transition-transform duration-300",
                          hoveredGuide === "nutrition" && "translate-x-1"
                        )}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>

              </div>
            </Link>

          </div>
        </div>

      </div>

      {/* Bottom Fade Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
