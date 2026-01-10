"use client";

import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { cn } from "@/lib/utils";

export function Hero() {
  const pillars = ["Physique", "Nutrition", "Mindset"];

  return (
    <section className="relative min-h-0 md:min-h-[100dvh] flex flex-col justify-start md:justify-center overflow-hidden bg-[#080808]">
      
      {/* === PREMIUM POLISH (MOBILE ONLY) === */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden mix-blend-overlay opacity-30 bg-noise" />
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden bg-gradient-spotlight opacity-40" />

      {/* === ANIMATED BACKGROUND PATHS (UNCHANGED) === */}
      <BackgroundPaths />

      {/* === HERO CONTENT GRID === */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-start md:justify-center flex-grow pt-16 md:pt-0 pb-0">
        
        {/* Main Grid Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-y-0 md:gap-8 items-start md:items-center h-full md:min-h-[85vh]"
        >

          {/* === LEFT ZONE: HEADLINE + LOGOS (5 cols) === */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center gap-2 md:gap-10 order-2 md:order-1 relative z-30 pb-0 md:pb-0 pointer-events-none md:pointer-events-auto">
            
            {/* Headline Stack - Forced 3 Lines */}
            <div className="absolute left-0 bottom-[15vh] z-30 md:relative md:bottom-auto md:z-auto w-full px-4 text-left">
              <h1 className="font-serif font-medium text-[2.15rem] leading-[1.0] tracking-tight text-white mb-3 md:text-[clamp(2.5rem,5vw,5rem)] md:leading-[1.05] md:mb-0 drop-shadow-lg md:drop-shadow-none whitespace-nowrap">
                <span className="block">Build the body.</span>
                <span className="block">Build the mindset.</span>
                <span className="block text-white/40">Build the life.</span>
              </h1>

              {/* Mobile Pillars (Inline Row) - Moved here to close the gap */}
              <div className="md:hidden flex justify-start items-center gap-2.5 opacity-90">
                 {pillars.map((pillar, index) => (
                    <span key={pillar} className="text-[0.65rem] font-sans font-medium tracking-[0.15em] uppercase text-white/70 flex items-center gap-2.5 drop-shadow-md">
                      {pillar}
                      {index < pillars.length - 1 && <span className="text-white/20 text-[0.5rem]">•</span>}
                    </span>
                  ))}
              </div>
            </div>

            {/* Brand Partnerships (Hidden on mobile) */}
            <div className="hidden md:block space-y-6 pt-2">
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
          <div className="relative w-full h-[90vh] md:h-full md:col-span-6 lg:col-span-4 flex items-end justify-center order-1 md:order-2 pointer-events-none select-none z-0 -mb-4 md:-mb-16 md:self-end">
            {/* Image Wrapper - Anchored to bottom */}
            <div className="relative w-full h-full flex items-end justify-center z-10">
               <Image
                src="/rob-hero.png"
                alt="Rob Lipsett"
                width={1200}
                height={1800}
                priority
                className="w-auto max-w-none h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ 
                  maxHeight: '90%',
                  width: 'auto'
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
             {/* Gradient Fade for seamless bottom blend */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-20 md:z-0" />
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
      

      {/* Mobile Brand Ticker (Bottom Fixed) */}
      <div className="absolute bottom-0 left-0 right-0 z-40 md:hidden overflow-hidden h-20 bg-gradient-to-t from-[#080808] to-transparent">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-20" />
        
        {/* Scrolling Track */}
        <div className="flex w-full h-full items-end pb-5 overflow-hidden">
          <div className="flex items-center gap-12 animate-infinite-scroll pl-4 whitespace-nowrap will-change-transform">
            {/* Quadruple the logos for seamless loop (-25% translate) */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 shrink-0">
                <div className="relative h-[36px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/GymsharkLogo.png" alt="Gymshark" height={72} width={360} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[32px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/alphaletelogo.png" alt="Alphalete" height={64} width={384} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[42px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/fuelcakes.png" alt="Fuel Cakes" height={84} width={168} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[32px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/ghostlogo.png" alt="Ghost" height={64} width={256} className="h-full w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

