import { Button } from "@/components/ui/Button";

export function AppShowcase() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="md:w-1/2 space-y-8 order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              Train Anywhere with the <br />
              <span className="text-[var(--accent)]">Lipsett Fitness App</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Access the same training methods I use myself. Whether you're at home or in the gym, 
              get structured workouts, nutrition guidance, and progress tracking in your pocket.
            </p>
            <div className="pt-4">
              <Button variant="outline" size="lg">
                Download the App
              </Button>
            </div>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
             <div className="relative z-10 w-64 h-[500px] bg-neutral-900 border-8 border-neutral-800 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse opacity-50"></div>
                <span className="text-white/20 font-mono text-xs z-20">App Interface</span>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
