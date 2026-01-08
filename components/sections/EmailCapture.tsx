"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const valueItems = [
    "Training updates",
    "Drops & offers", 
    "Members-only announcements"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
    >
      {/* === CINEMATIC BACKGROUND === */}
      
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
      
      {/* Subtle radial glow behind panel area */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(207,167,119,0.03),transparent)] pointer-events-none" />
      
      {/* Film grain */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Slow diagonal sweep - respects reduced motion */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] motion-safe:animate-sweep"
        style={{
          background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        
        {/* === SIGNAL INVITE PANEL === */}
        <div 
          className={cn(
            "relative bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Animated signal strip at top */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-[#cfa777]/40 to-transparent motion-safe:animate-signal-sweep" />
          </div>

          {/* Grid hint inside panel */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          {/* Membership stamp badge */}
          <div className="absolute top-6 right-6 hidden md:block">
            <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/20 border border-white/10 px-2 py-1">
              Members Access
            </span>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
            
            {/* LEFT: Copy + Benefits */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-4">
                  Inner Circle
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-4">
                  Join the Inner Circle
                </h2>
                <p className="text-white/50 text-sm md:text-base tracking-wide">
                  Drops. Discounts. Training updates. First access.
                </p>
              </div>

              {/* Value list */}
              <ul className="space-y-3 pt-4 border-t border-white/5">
                {valueItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/40 text-sm">
                    <span className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                      <Check className="w-2.5 h-2.5 text-[#cfa777]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Form */}
            <div className="flex flex-col justify-center">
              <form className="space-y-6">
                {/* Input + Button Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <label htmlFor="email-input" className="sr-only">Email address</label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your email"
                      required
                      className={cn(
                        "w-full h-14 px-5 bg-[#0d0d0d] border text-white text-sm placeholder:text-white/30 transition-all duration-300 focus:outline-none",
                        isFocused 
                          ? "border-white/30" 
                          : "border-white/10 hover:border-white/15"
                      )}
                    />
                    {/* Focus underline accent */}
                    <div 
                      className={cn(
                        "absolute bottom-0 left-0 right-0 h-px bg-[#cfa777] transition-all duration-300",
                        isFocused ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="h-14 px-10 bg-[#cfa777] hover:bg-[#d9b15f] text-black text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
                  >
                    Join Now
                  </button>
                </div>

                {/* Trust lines */}
                <div className="space-y-2">
                  <p className="text-[10px] text-white/30 tracking-wide">
                    Training updates, drops & offers. No spam.
                  </p>
                  <p className="text-[10px] text-white/20 tracking-wide">
                    Unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>

      {/* Keyframe for signal sweep animation */}
      <style jsx>{`
        @keyframes signal-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes sweep {
          0% { transform: translateX(-30%); }
          100% { transform: translateX(30%); }
        }
        :global(.motion-safe\\:animate-signal-sweep) {
          animation: signal-sweep 4s ease-in-out infinite;
        }
        :global(.motion-safe\\:animate-sweep) {
          animation: sweep 45s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.motion-safe\\:animate-signal-sweep),
          :global(.motion-safe\\:animate-sweep) {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
