"use client";

import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { cn } from "@/lib/utils";

export function Hero() {
  const pillars = ["Physique", "Nutrition", "Mindset"];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#080808]">
      
      {/* === ANIMATED BACKGROUND PATHS (UNCHANGED) === */}
      <BackgroundPaths />

      {/* === HERO CONTENT GRID === */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center flex-grow pt-20 md:pt-0">
        
        {/* Main Grid Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8 items-end md:items-center h-full"
          style={{ minHeight: 'clamp(680px, 85vh, 900px)' }}
        >

          {/* === LEFT ZONE: HEADLINE + LOGOS (5 cols) === */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center gap-10 order-1 md:order-1 relative z-30 pb-12 md:pb-0">
            
            {/* Headline Stack - Forced 3 Lines */}
            <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight text-white whitespace-nowrap">
              <span className="block">Build the body.</span>
              <span className="block">Build the mindset.</span>
              <span className="block text-white/40">Build the life.</span>
            </h1>

            {/* Brand Partnerships (Moved up, CTA removed) */}
            <div className="space-y-6 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 block">
                Brand Partnerships
              </span>
              <div className="flex flex-nowrap items-center gap-6 md:gap-8 opacity-60 grayscale mix-blend-screen overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                
                {/* Gymshark */}
                <div className="relative h-[32px] md:h-[40px] w-auto shrink-0">
                  <Image
                    src="/GymsharkLogo.png"
                    alt="Gymshark"
                    height={80}
                    width={400}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Alphalete */}
                <div className="relative h-[28px] md:h-[36px] w-auto shrink-0">
                  <Image
                    src="/alphaletelogo.png"
                    alt="Alphalete"
                    height={72}
                    width={432}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Fuel Cakes */}
                <div className="relative h-[36px] md:h-[48px] w-auto shrink-0">
                  <Image
                    src="/fuelcakes.png"
                    alt="Fuel Cakes"
                    height={96}
                    width={192}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Ghost */}
                <div className="relative h-[28px] md:h-[36px] w-auto shrink-0">
                  <Image
                    src="/ghostlogo.png"
                    alt="Ghost"
                    height={72}
                    width={288}
                    className="h-full w-auto object-contain"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* === CENTER ZONE: ROB IMAGE (4 cols) === */}
          <div className="md:col-span-6 lg:col-span-4 relative h-full flex items-end justify-center order-2 md:order-2 pointer-events-none select-none">
            {/* Image Wrapper - Anchored to bottom */}
            <div className="relative w-full h-[85%] flex items-end justify-center">
               <Image
                src="/rob-hero.png"
                alt="Rob Lipsett"
                width={1200}
                height={1800}
                priority
                className="w-auto max-w-none h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ 
                  maxHeight: '100%',
                  width: 'auto'
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
             {/* Gradient Fade for seamless bottom blend */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent z-20" />
          </div>

          {/* === RIGHT ZONE: PILLAR LIST (3 cols) === */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center items-start h-full order-3 relative z-10 pl-12">
            {/* Vertical Divider Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-[#cfa777] rounded-full shadow-[0_0_8px_rgba(207,167,119,0.5)]" />
            </div>

            <div className="flex flex-col gap-16 py-12">
              {pillars.map((pillar) => (
                <div key={pillar} className="group cursor-default">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 group-hover:text-white/40 transition-colors duration-500 block -ml-px border-l border-transparent group-hover:border-[#cfa777]/50 pl-6">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Pillars (Visible only on small screens, bottom aligned) */}
      <div className="lg:hidden container mx-auto px-4 pb-8 relative z-20 flex justify-center gap-8 md:gap-16 border-t border-white/5 pt-6 mt-auto">
         {pillars.map((pillar) => (
            <span key={pillar} className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30">
              {pillar}
            </span>
          ))}
      </div>

    </section>
  );
}
