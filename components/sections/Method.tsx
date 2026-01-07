"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
      output: "Strength + Aesthetics"
    },
    {
      system: "SYSTEM 02",
      title: "Nutrition",
      statement: "Performance fueling without restriction.",
      tags: ["Macro Flexibility", "Performance Fuel", "Zero Restriction"],
      output: "Energy + Composition"
    },
    {
      system: "SYSTEM 03",
      title: "Mindset",
      statement: "Mental resilience to match your physical strength.",
      tags: ["Discipline", "Goal Clarity", "Resilience"],
      output: "Focus + Consistency"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-background overflow-hidden"
    >
      {/* === CINEMATIC BACKGROUND STACK === */}
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-vignette opacity-60 pointer-events-none" />
      
      {/* Light Sweep with Slow Drift */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
          animation: 'sweepDrift 45s ease-in-out infinite alternate'
        }}
      />
      
      {/* Faint Grid Hints */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Central Vertical Spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03] -translate-x-1/2 pointer-events-none" />
      
      {/* Spine Glow Dot at Center */}
      <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-[var(--accent)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

      {/* === CONTENT === */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-24 md:mb-32 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="microtype block mb-6 text-[var(--accent)]">THE METHOD</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-[-0.03em]">
            The Lipsett Method
          </h2>
        </div>

        {/* Performance System Pillars - Vertical Stack */}
        <div className="max-w-4xl mx-auto space-y-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Pillar Block */}
              <div className="relative py-16 md:py-20 border-t border-white/5 hover:bg-white/[0.01] transition-colors duration-500">
                
                {/* System Label - Left Aligned */}
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  
                  {/* Left: System Number */}
                  <div className="md:w-32 flex-shrink-0">
                    <span className="microtype text-[var(--accent)] block">{pillar.system}</span>
                  </div>

                  {/* Center: Main Content */}
                  <div className="flex-grow space-y-6">
                    
                    {/* Huge Title */}
                    <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground group-hover:text-white transition-colors duration-500 tracking-[-0.02em]">
                      {pillar.title}
                    </h3>
                    
                    {/* Statement */}
                    <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
                      {pillar.statement}
                    </p>
                    
                    {/* Micro Tags */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {pillar.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="microtype text-muted-foreground/50 border border-white/5 px-3 py-1.5 group-hover:border-white/10 group-hover:text-muted-foreground/70 transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Primary Output */}
                  <div className="md:w-48 flex-shrink-0 md:text-right mt-6 md:mt-0">
                    <span className="microtype block mb-2 opacity-40">Primary Output</span>
                    <span className="font-serif text-lg text-foreground/80 italic">{pillar.output}</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="max-w-4xl mx-auto border-t border-white/5" />

        {/* Explore Link */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Link 
            href="/method"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--accent)] transition-colors duration-300 group"
          >
            <span className="microtype">Explore the Method</span>
            <svg 
              className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>

      {/* CSS Animation for Light Sweep Drift */}
      <style jsx>{`
        @keyframes sweepDrift {
          0% { transform: translateX(-10%) rotate(0deg); }
          100% { transform: translateX(10%) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}
