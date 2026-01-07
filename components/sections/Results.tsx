"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "David K.",
      metric: "-18kg",
      duration: "16 weeks",
      phase: "Fat Loss Phase",
      quote: "The structure I needed to finally break through my plateau. The accountability is unmatched."
    },
    {
      name: "Sarah M.",
      metric: "Stage Ready",
      duration: "12 weeks",
      phase: "Contest Prep",
      quote: "Rob's approach to prep is science-based and sustainable. I stepped on stage looking my best ever."
    },
    {
      name: "James L.",
      metric: "+8kg Lean",
      duration: "20 weeks",
      phase: "Muscle Gain",
      quote: "I've added significant size while staying lean. The programming adapts to my schedule perfectly."
    }
  ];

  const signalItems = [
    "-18kg / 16 weeks",
    "Contest Prep",
    "Muscle Gain",
    "Accountability",
    "Sustainable Programming",
    "Science-Based",
    "Custom Plans"
  ];

  // Crossfade testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <section className="py-24 md:py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Background Grid Hint */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-6">Proof Engine</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Real People. Real Progress.</h2>
          <p className="text-white/50 text-lg font-light tracking-wide max-w-md mx-auto">
            Verified transformations. Documented results.
          </p>
        </div>

        {/* === MAIN CONTENT GRID === */}
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr] gap-8 mb-16">
          
          {/* LEFT: RESULTS TICKER */}
          <div 
            className="relative h-[400px] md:h-[500px] order-2 md:order-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade Masks */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080808] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
            
            {/* Ticker Container */}
            <div 
              ref={tickerRef}
              className="h-full overflow-hidden"
            >
              <div 
                className={cn(
                  "flex flex-col gap-4",
                  !prefersReducedMotion && "animate-ticker-vertical"
                )}
                style={{
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {/* Duplicate items for seamless loop */}
                {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-[#0e0e0e] border border-white/5 p-6 rounded-sm hover:border-white/10 transition-colors duration-300 group"
                  >
                    {/* Grid Hint Inside */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-[0.02] rounded-sm"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    {/* Metric - Strongest Element */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-white tracking-tight">{item.metric}</span>
                      <span className="text-xs text-white/30">/ {item.duration}</span>
                    </div>
                    
                    {/* Phase + Name */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#cfa777]/80">{item.phase}</span>
                      <span className="text-xs text-white/40">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: FEATURED TESTIMONIAL PANEL */}
          <div className="relative order-1 md:order-2">
            <div className="relative bg-[#0c0c0c] border border-white/5 p-8 md:p-12 rounded-sm min-h-[400px] md:min-h-[500px] flex flex-col justify-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
              {/* Top Highlight Line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* Grid Hint */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.02] rounded-sm"
                style={{
                  backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Testimonials with Crossfade */}
              <div className="relative flex-1 flex flex-col justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ease-in-out",
                      activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  >
                    {/* Quote */}
                    <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10 text-balance">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <div className="space-y-1">
                        <p className="text-white/90 text-sm font-medium">{testimonial.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#cfa777]">{testimonial.phase}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">{testimonial.metric}</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-wide">{testimonial.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "h-px transition-all duration-500",
                      activeIndex === index 
                        ? "w-8 bg-[#cfa777]" 
                        : "w-4 bg-white/20"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === SIGNAL BAR MARQUEE === */}
        <div className="relative overflow-hidden py-6 border-t border-b border-white/5 hidden md:block">
          {/* Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
          
          <div className={cn(
            "flex gap-12 w-max",
            !prefersReducedMotion && "animate-signal-marquee"
          )}>
            {[...signalItems, ...signalItems, ...signalItems, ...signalItems].map((item, i) => (
              <span 
                key={i}
                className="text-[10px] uppercase tracking-[0.2em] text-white/20 whitespace-nowrap flex items-center gap-3"
              >
                <span className="w-1 h-1 bg-[#cfa777]/30 rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes tickerVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        .animate-ticker-vertical {
          animation: tickerVertical 30s linear infinite;
        }
        @keyframes signalMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-signal-marquee {
          animation: signalMarquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
