import { Button } from "@/components/ui/Button";

export function AppShowcase() {
  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-sweep opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="md:w-1/2 space-y-8 md:text-left text-center z-10">
            <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
              The Lipsett <br /> Fitness App.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm text-pretty mx-auto md:mx-0">
              Your coach, anywhere. Structured workouts. Nutrition guidance. Real results.
            </p>
            <div className="pt-4">
              <Button variant="outline" size="lg">
                Get the App
              </Button>
            </div>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="md:w-1/2 flex justify-center relative">
             <div className="relative z-10 w-[280px] h-[560px] bg-[var(--panel)] border border-white/10 rounded-[3rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50"></div>
                <span className="text-muted-foreground/30 font-mono text-xs z-20 uppercase tracking-widest">Interface View</span>
             </div>
             {/* Cinematic light sweep behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-sweep opacity-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
