"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================================================
// MOBILE TICKER CARD
// ============================================================================

function TickerCard({
  system,
  title,
  statement,
  tags,
  output,
  isPressed,
  onPressStart,
  onPressEnd,
}: {
  system: string;
  title: string;
  statement: string;
  tags: string[];
  output: string;
  isPressed?: boolean;
  onPressStart?: () => void;
  onPressEnd?: () => void;
}) {
  return (
    <div
      className={cn(
        "w-[85vw] max-w-[340px] min-w-[300px] flex-shrink-0 transition-transform duration-150 select-none",
        isPressed && "scale-[0.98]"
      )}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onMouseLeave={onPressEnd}
    >
      <div 
        className={cn(
          "relative flex flex-col h-[340px] bg-[#111]/90 backdrop-blur-xl border rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-150",
          isPressed 
            ? "border-[#cfa777]/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03),0_0_20px_rgba(207,167,119,0.1)]" 
            : "border-white/[0.08]"
        )}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(207,167,119,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Header */}
        <div className="relative mb-5 pb-5 border-b border-white/[0.06]">
          <span className="text-[10px] font-mono text-[#cfa777] tracking-[0.25em] block mb-2">{system}</span>
          <h3 className="font-serif text-3xl text-white">{title}</h3>
        </div>

        {/* Statement */}
        <p className="text-white/60 text-sm leading-relaxed relative">
          {statement}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 relative">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="text-[9px] uppercase tracking-wider text-white/50 border border-white/[0.08] px-2.5 py-1 rounded-full bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="mt-auto" />

        {/* Primary Output */}
        <div className="pt-4 border-t border-white/[0.06] relative">
          <span className="text-[9px] font-mono text-white/30 tracking-[0.15em] uppercase block mb-1">Primary Output</span>
          <span className="text-sm font-medium text-white/90">{output}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TICKER CONTROLS
// ============================================================================

function TickerControls({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
  activeIndex,
  totalCards,
  showPlayPause,
}: {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  activeIndex: number;
  totalCards: number;
  showPlayPause: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* Controls Row */}
      <div className="flex items-center gap-4">
        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
          aria-label="Previous system"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Play/Pause Button */}
        {showPlayPause && (
          <button
            onClick={onTogglePlay}
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
              isPlaying 
                ? "border-[#cfa777]/30 text-[#cfa777]" 
                : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
            )}
            aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
          aria-label="Next system"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalCards }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              activeIndex === i 
                ? "w-6 bg-[#cfa777]" 
                : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="text-white/30 text-[10px] tracking-wider uppercase">
        Swipe to explore
      </p>
    </div>
  );
}

// ============================================================================
// MAIN METHOD COMPONENT
// ============================================================================

export function Method() {
  const sectionRef = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [pressedCard, setPressedCard] = useState<number | null>(null);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Section visibility for animations
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

  // Ticker viewport visibility (pause when off-screen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (tickerRef.current) {
      observer.observe(tickerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle scroll position for reduced motion mode
  const handleScroll = useCallback(() => {
    if (!tickerRef.current || !prefersReducedMotion) return;
    const scrollLeft = tickerRef.current.scrollLeft;
    const cardWidth = 340 + 16; // max-w-[340px] + gap
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, 2));
  }, [prefersReducedMotion]);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker || !prefersReducedMotion) return;
    
    ticker.addEventListener("scroll", handleScroll, { passive: true });
    return () => ticker.removeEventListener("scroll", handleScroll);
  }, [handleScroll, prefersReducedMotion]);

  // Track animation position for active index (marquee mode)
  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return;
    
    const updateActiveIndex = () => {
      if (!trackRef.current) return;
      const style = window.getComputedStyle(trackRef.current);
      const matrix = new DOMMatrix(style.transform);
      const translateX = Math.abs(matrix.m41);
      const cardWidth = 340 + 16;
      const totalWidth = cardWidth * 3;
      const normalizedX = translateX % totalWidth;
      const newIndex = Math.floor(normalizedX / cardWidth) % 3;
      setActiveIndex(newIndex);
    };

    const interval = setInterval(updateActiveIndex, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Navigation functions
  const scrollToCard = useCallback((index: number) => {
    if (prefersReducedMotion && tickerRef.current) {
      const cardWidth = 340 + 16;
      tickerRef.current.scrollTo({ 
        left: cardWidth * index, 
        behavior: 'smooth' 
      });
    }
    setActiveIndex(index);
  }, [prefersReducedMotion]);

  const handlePrev = useCallback(() => {
    const newIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    scrollToCard(newIndex);
  }, [activeIndex, scrollToCard]);

  const handleNext = useCallback(() => {
    const newIndex = activeIndex === 2 ? 0 : activeIndex + 1;
    scrollToCard(newIndex);
  }, [activeIndex, scrollToCard]);

  const handleTogglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Pause on interaction
  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  const shouldAnimate = isPlaying && isInViewport && !isInteracting && !prefersReducedMotion;

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
      id="method"
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
          animation: prefersReducedMotion ? 'none' : 'sweepDrift 60s ease-in-out infinite alternate'
        }}
      />
      
      {/* 4. Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]/90 pointer-events-none" />


      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* === INTRO === */}
        <div 
          className={cn(
            "text-center mb-16 md:mb-24 transition-all ease-out",
            prefersReducedMotion ? "duration-0" : "duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-6">The Method</span>
          <h2 className="font-serif text-4xl md:text-7xl text-white mb-4 md:mb-6">The Lipsett Method</h2>
          <p className="text-white/60 text-base md:text-xl font-light tracking-wide max-w-lg mx-auto">
            A three-part system. Built in order. Repeated for life.
          </p>
        </div>

        {/* === MOBILE TICKER === */}
        <div className="md:hidden">
          {/* Ticker Container with Fade Edges */}
          <div 
            ref={tickerRef}
            className={cn(
              "relative",
              prefersReducedMotion 
                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide" 
                : "overflow-hidden"
            )}
            style={{
              maskImage: prefersReducedMotion ? 'none' : 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: prefersReducedMotion ? 'none' : 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            role="region"
            aria-label="System ticker"
          >
            {/* Marquee Track (auto-scroll mode) */}
            {!prefersReducedMotion && (
              <div 
                ref={trackRef}
                className="flex gap-4 py-2"
                style={{
                  animationName: 'marquee',
                  animationDuration: '45s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                  animationPlayState: shouldAnimate ? 'running' : 'paused',
                  width: 'max-content',
                }}
              >
                {/* First set of cards */}
                {pillars.map((pillar, index) => (
                  <TickerCard
                    key={`a-${pillar.title}`}
                    {...pillar}
                    isPressed={pressedCard === index}
                    onPressStart={() => setPressedCard(index)}
                    onPressEnd={() => setPressedCard(null)}
                  />
                ))}
                {/* Duplicate set for seamless loop */}
                {pillars.map((pillar, index) => (
                  <TickerCard
                    key={`b-${pillar.title}`}
                    {...pillar}
                    isPressed={pressedCard === index + 3}
                    onPressStart={() => setPressedCard(index + 3)}
                    onPressEnd={() => setPressedCard(null)}
                  />
                ))}
              </div>
            )}

            {/* Manual Scroll Track (reduced motion mode) */}
            {prefersReducedMotion && (
              <div className="flex gap-4 py-2 px-4 -mx-4">
                {pillars.map((pillar, index) => (
                  <div key={pillar.title} className="snap-center">
                    <TickerCard
                      {...pillar}
                      isPressed={pressedCard === index}
                      onPressStart={() => setPressedCard(index)}
                      onPressEnd={() => setPressedCard(null)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ticker Controls */}
          <TickerControls
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onPrev={handlePrev}
            onNext={handleNext}
            activeIndex={activeIndex}
            totalCards={3}
            showPlayPause={!prefersReducedMotion}
          />
        </div>

        {/* === DESKTOP JOURNEY AREA === */}
        <div className="relative hidden md:block">
          
          {/* Central Spine Line (Desktop: Center) */}
          <div className="absolute left-1/2 top-0 bottom-12 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 -translate-x-1/2" />

          {/* Pillars List */}
          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className={cn(
                  "relative flex flex-row items-center w-full transition-all duration-700 ease-out group",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  pillar.align === 'right' ? 'flex-row-reverse' : ''
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Node Dot on Spine */}
                <div className="absolute left-1/2 w-3 h-3 bg-[#0a0a0a] border border-white/20 rounded-full -translate-x-1/2 z-20 group-hover:border-[#cfa777] group-hover:bg-[#cfa777]/10 transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-[3px] bg-white/20 rounded-full group-hover:bg-[#cfa777] transition-colors duration-500" />
                </div>

                {/* Module Container (Half Width on Desktop) */}
                <div className={cn(
                  "w-[calc(50%-3rem)]",
                  pillar.align === 'left' ? 'mr-auto text-right' : 'ml-auto text-left'
                )}>
                  
                  {/* Performance Module */}
                  <div className={cn(
                    "relative flex flex-col min-h-[340px] bg-[#111] border border-white/5 p-10 transition-all duration-500 hover:border-white/10 hover:bg-[#151515]",
                    "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
                    "rounded-sm shadow-2xl"
                  )}>
                    
                    {/* Header: System + Title */}
                    <div className={cn(
                      "flex flex-col gap-2 mb-6 border-b border-white/5 pb-6",
                      pillar.align === 'left' ? 'items-end' : 'items-start'
                    )}>
                      <span className="text-[10px] font-mono text-[#cfa777] tracking-[0.2em]">{pillar.system}</span>
                      <h3 className="font-serif text-4xl text-white tracking-wide">{pillar.title}</h3>
                    </div>

                    {/* Content */}
                    <div className={cn(
                      "flex flex-col",
                      pillar.align === 'left' ? 'items-end' : 'items-start'
                    )}>
                      <p className="text-white/60 text-base leading-relaxed">
                        {pillar.statement}
                      </p>

                      {/* Tags */}
                      <div className={cn(
                        "flex flex-wrap gap-2 max-w-[300px] mt-6",
                        pillar.align === 'left' ? 'justify-end' : 'justify-start'
                      )}>
                        {pillar.tags.map(tag => (
                          <span key={tag} className="text-[9px] uppercase tracking-wider text-white/40 border border-white/5 px-2 py-1 bg-white/[0.02]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="mt-auto" />

                    {/* Primary Output */}
                    <div className={cn(
                      "pt-4 border-t border-white/5 w-full flex flex-col gap-1",
                      pillar.align === 'left' ? 'items-end' : 'items-start'
                    )}>
                      <span className="text-[9px] font-mono text-white/30 tracking-[0.1em] uppercase">Primary Output</span>
                      <span className="text-sm font-medium text-white/90">{pillar.output}</span>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Spine Footer Node */}
          <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
            <div className="w-2 h-2 bg-white/20 rounded-full" />
            <span className="text-[9px] font-mono text-white/20 tracking-[0.2em] whitespace-nowrap">
              SYSTEM COMPLETE → REPEAT
            </span>
          </div>

        </div>

        {/* === OUTRO === */}
        <div 
          className={cn(
            "text-center mt-20 md:mt-32 transition-all ease-out",
            prefersReducedMotion ? "duration-0 delay-0" : "duration-1000 delay-500",
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
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
