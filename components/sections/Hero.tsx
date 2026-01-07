import Image from "next/image";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function Hero() {
  const pillars = ["Physique", "Nutrition", "Mindset"];

  return (
    <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-[#080808]">
      
      {/* === ANIMATED BACKGROUND PATHS === */}
      <BackgroundPaths />

      {/* === ROB - PRIMARY VISUAL ANCHOR === */}
      <div 
        className="absolute bottom-0 left-1/2 z-10 h-[100vh] w-auto pointer-events-none select-none"
        style={{ transform: 'translateX(-42%)' }}
      >
        <Image
          src="/rob-hero.png"
          alt="Rob Lipsett"
          width={1100}
          height={1650}
          className="h-full w-auto object-contain object-bottom"
          priority
        />
        {/* Bottom fade into background */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-12 h-full flex items-center justify-between">
        
        {/* Left Content */}
        <div className="flex-1 md:max-w-xl space-y-14 z-30">
          
          {/* Headline - Larger, More Breathing Room */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] xl:text-[6.5rem] leading-[1.05] text-foreground tracking-[-0.02em]">
            Build the body. <br />
            Build the mindset. <br />
            <span className="text-foreground/20 block mt-4">Build the life.</span>
          </h1>
          
          {/* CTA + Brand Stamps */}
          <div className="space-y-12">
            
            {/* Primary CTA - Calm Presence */}
            <Link 
              href="/programs"
              className="inline-flex items-center justify-center h-10 px-8 text-[10px] font-medium uppercase tracking-[0.2em] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black transition-colors duration-300"
            >
              Start Training
            </Link>
            
            {/* Brand Logos - Stamps - Strict Optical Alignment */}
            <div className="flex items-end gap-8 opacity-[0.18] grayscale select-none pointer-events-none">
              
              {/* Gymshark - Wide wordmark */}
              <div className="relative h-[14px] w-[90px]">
                <Image
                  src="/GymsharkLogo.png"
                  alt="Gymshark"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Alphalete - Condensed wordmark */}
              <div className="relative h-[11px] w-[72px]">
                <Image
                  src="/alphaletelogo.png"
                  alt="Alphalete"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Fuel Cakes - Badge/icon shape */}
              <div className="relative h-[22px] w-[44px]">
                <Image
                  src="/fuelcakes.png"
                  alt="Fuel Cakes"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Ghost - Wide wordmark */}
              <div className="relative h-[14px] w-[70px]">
                <Image
                  src="/ghostlogo.png"
                  alt="Ghost"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Right Pillars - Context Only */}
        <div className="hidden lg:flex flex-col justify-center gap-14 text-right z-30">
          {pillars.map((pillar) => (
            <div key={pillar} className="pr-2">
              <span className="text-[10px] font-sans text-foreground/15 tracking-[0.25em] block uppercase">
                {pillar}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
