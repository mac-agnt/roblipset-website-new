"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Method() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      system: "SYSTEM 01",
      title: "Physique",
      statement: "Progressive training built for sustainable results.",
      tags: ["Progressive Overload", "Hypertrophy", "Sustainability"],
      output: "Strength + Aesthetics",
      align: "left"
    },
    {
      system: "SYSTEM 02",
      title: "Nutrition",
      statement: "Performance fueling without restriction.",
      tags: ["Macro Flexibility", "Performance Fuel", "Zero Restriction"],
      output: "Energy + Composition",
      align: "right"
    },
    {
      system: "SYSTEM 03",
      title: "Mindset",
      statement: "Mental resilience to match your physical strength.",
      tags: ["Discipline", "Goal Clarity", "Resilience"],
      output: "Focus + Consistency",
      align: "left"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden"
    >
      {/* === CINEMATIC ATMOSPHERE LAYERS === */}
      
      {/* 1. Base Grid Hints */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 2. Film Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />

      {/* 3. Diagonal Light Sweep (Slow Drift) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          animation: 'sweepDrift 60s ease-in-out infinite alternate'
        }}
      />
      
      {/* 4. Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]/90 pointer-events-none" />


      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* === INTRO === */}
        <div 
          className={cn(
            "text-center mb-24 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-6">The Method</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">The Lipsett Method</h2>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto">
            A three-part system. Built in order. Repeated for life.
          </p>
        </div>

        {/* === JOURNEY AREA === */}
        <div className="relative">
          
          {/* Central Spine Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-12 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 -translate-x-1/2 md:-translate-x-1/2" />

          {/* Pillars List */}
          <div className="space-y-16 md:space-y-24">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center w-full transition-all duration-700 ease-out group pl-12 md:pl-0",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  pillar.align === 'right' ? 'md:flex-row-reverse' : ''
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Node Dot on Spine */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-[#0a0a0a] border border-white/20 rounded-full -translate-x-1/2 z-20 group-hover:border-[#cfa777] group-hover:bg-[#cfa777]/10 transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-[3px] bg-white/20 rounded-full group-hover:bg-[#cfa777] transition-colors duration-500" />
                </div>

                {/* Module Container (Half Width on Desktop) */}
                <div className={cn(
                  "md:w-[calc(50%-3rem)] w-full",
                  pillar.align === 'left' ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                )}>
                  
                  {/* Performance Module */}
                  <div className={cn(
                    "relative bg-[#111] border border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-white/10 hover:bg-[#151515]",
                    "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
                    // Sharp corners aesthetic
                    "rounded-sm shadow-2xl"
                  )}>
                    
                    {/* Header: System + Title */}
                    <div className={cn(
                      "flex flex-col gap-2 mb-6 border-b border-white/5 pb-6",
                      pillar.align === 'left' ? 'md:items-end' : 'md:items-start'
                    )}>
                      <span className="text-[10px] font-mono text-[#cfa777] tracking-[0.2em]">{pillar.system}</span>
                      <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide">{pillar.title}</h3>
                    </div>

                    {/* Content */}
                    <div className={cn(
                      "flex flex-col gap-6",
                      pillar.align === 'left' ? 'md:items-end' : 'md:items-start'
                    )}>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {pillar.statement}
                      </p>

                      {/* Tags */}
                      <div className={cn(
                        "flex flex-wrap gap-2 max-w-[300px]",
                        pillar.align === 'left' ? 'md:justify-end' : 'md:justify-start'
                      )}>
                        {pillar.tags.map(tag => (
                          <span key={tag} className="text-[9px] uppercase tracking-wider text-white/40 border border-white/5 px-2 py-1 bg-white/[0.02]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Primary Output */}
                      <div className={cn(
                        "mt-4 pt-4 border-t border-white/5 w-full flex flex-col gap-1",
                        pillar.align === 'left' ? 'md:items-end' : 'md:items-start'
                      )}>
                        <span className="text-[9px] font-mono text-white/30 tracking-[0.1em] uppercase">Primary Output</span>
                        <span className="text-sm font-medium text-white/90">{pillar.output}</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Spine Footer Node */}
          <div className="absolute left-[20px] md:left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
            <div className="w-2 h-2 bg-white/20 rounded-full" />
            <span className="text-[9px] font-mono text-white/20 tracking-[0.2em] whitespace-nowrap hidden md:block">
              SYSTEM COMPLETE → REPEAT
            </span>
          </div>

        </div>

        {/* === OUTRO === */}
        <div 
          className={cn(
            "text-center mt-32 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link 
            href="/method"
            className="inline-flex items-center gap-3 text-white/50 hover:text-[#cfa777] transition-colors duration-300 group text-xs tracking-[0.2em] uppercase"
          >
            Explore the Method
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes sweepDrift {
          0% { transform: translateX(-10%) rotate(0deg); }
          100% { transform: translateX(10%) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}
