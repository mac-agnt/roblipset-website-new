import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <MethodHero />
      <PhysiqueSection />
      <NutritionSection />
      <MindsetSection />
      <MethodCTA />
      <Footer />
    </main>
  );
}

function MethodHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background border-b border-white/[0.03]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#000000] opacity-95" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tight">
            The System.
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-xl mx-auto leading-relaxed text-pretty">
            Consistency. Discipline. Long-term thinking.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhysiqueSection() {
  return (
    <section className="py-32 bg-background border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Structure.</h2>
            <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-[10px] font-medium">Physique</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-xl md:text-2xl text-white/60 leading-relaxed font-serif">
            <p>
              Training is not about destruction. It is about construction.
            </p>
            <p>
              We reject random intensity. We embrace progressive overload. Every rep has a purpose. Every session builds on the last.
            </p>
            <p className="text-white">
              We do not guess. We execute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NutritionSection() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Fuel.</h2>
            <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-[10px] font-medium">Nutrition</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-xl md:text-2xl text-white/60 leading-relaxed font-serif">
            <p>
              Food is performance. Not punishment.
            </p>
            <p>
              We ignore restrictive trends. We focus on macronutrient balance. Feed the body what it needs to recover and grow.
            </p>
            <p className="text-white">
              Sustainability is the only metric that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MindsetSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Focus.</h2>
            <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-[10px] font-medium">Mindset</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-xl md:text-2xl text-white/60 leading-relaxed font-serif">
            <p>
              Motivation is fleeting. Discipline is forever.
            </p>
            <p>
              Fitness is the physical expression of mental resilience. Showing up when you don't want to builds a strength that carries into business, relationships, and life.
            </p>
            <p className="text-white">
              We play the long game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/[0.03] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-6xl text-white">Execute.</h2>
          <p className="text-white/50 text-lg">
            The philosophy is simple. The work is hard.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">Explore the Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
