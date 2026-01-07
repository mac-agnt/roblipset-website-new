import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const pillars = ["Physique", "Nutrition", "Mindset"];

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background & Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-95" />
        <div className="bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left pt-20 md:pt-0 space-y-10 md:space-y-12 z-20">
          <h5 className="text-[var(--accent)] font-medium tracking-[0.2em] uppercase text-xs animate-fade-in">
            Coach. Athlete. Mentor.
          </h5>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white tracking-tight text-balance">
            Build the body. <br />
            Build the mindset. <br />
            <span className="italic text-white/80">Build the life.</span>
          </h1>
          
          <p className="font-sans text-lg text-white/60 max-w-lg leading-relaxed hidden md:block text-pretty">
            I help driven individuals master their physique and mindset through proven, science-based coaching strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 pt-6">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Start Your Journey
            </Button>
            <a href="/programs" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-medium">
              Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Pillars */}
        <div className="hidden md:flex flex-col justify-center gap-16 text-right absolute right-8 top-1/2 -translate-y-1/2 z-20">
          {pillars.map((pillar) => (
            <div key={pillar} className="group cursor-pointer">
              <span className="block text-[10px] text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2 tracking-[0.25em] uppercase">
                Explore
              </span>
              <span className="text-xl font-serif text-white/30 group-hover:text-white transition-colors duration-500 tracking-wide">
                {pillar}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
