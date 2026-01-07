import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Dumbbell, Utensils, Brain } from "lucide-react";

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
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background border-b border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#000000] opacity-95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            The Lipsett Method
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A system built on consistency, discipline, and long-term thinking.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhysiqueSection() {
  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-24">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6">
              <Dumbbell className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Physique</h2>
            <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-medium">Structure Over Chaos</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-lg text-white/70 leading-relaxed">
            <p>
              Training is not about destroying yourself in the gym every single day. It is about sustainable, structured progression. Too many people equate intensity with progress, but without a plan, intensity is just noise.
            </p>
            <p>
              My approach focuses on progressive overload—doing slightly more over time, with perfect form and intent. We build the physique not by guessing, but by following a roadmap that prioritizes longevity and function alongside aesthetics.
            </p>
            <p>
              We reject the extremes. We do not train to burn calories; we train to build the machine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NutritionSection() {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-24">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6">
              <Utensils className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Nutrition</h2>
            <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-medium">Fuel, Not Restriction</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-lg text-white/70 leading-relaxed">
            <p>
              Nutrition is often overcomplicated to sell products. The reality is simpler: feed your body what it needs to perform, recover, and grow.
            </p>
            <p>
              I do not believe in demonizing food groups or aggressive, unsustainable caloric deficits. These approaches may work for a week, but they fail over a lifetime. Instead, we focus on macronutrient balance—ensuring you get enough protein, fats, and carbohydrates to support your goals while allowing for flexibility.
            </p>
            <p>
              Consistency in nutrition comes from enjoyment. If you hate your diet, you will not stick to it. We build habits that allow you to live your life while still reaching your physique goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MindsetSection() {
  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 max-w-6xl mx-auto">
          <div className="md:w-1/3 sticky top-24">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Mindset</h2>
            <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-medium">Discipline is Freedom</p>
          </div>
          
          <div className="md:w-2/3 space-y-8 text-lg text-white/70 leading-relaxed">
            <p>
              Motivation is a feeling; discipline is a practice. You will not always feel like doing the work, and that is where the Lipsett Method separates itself.
            </p>
            <p>
              We view fitness not as a temporary fix, but as a fundamental part of who you are. By showing up when you don't want to, you build resilience that translates to every other area of your life—business, relationships, and personal growth.
            </p>
            <p>
              Long-term consistency always beats short-term intensity. We play the long game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Put the Method Into Practice</h2>
          <p className="text-white/60">
            If this philosophy resonates with you, I have the tools to help you implement it.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">Explore the Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
