import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Smartphone, BarChart2, Calendar, Layout } from "lucide-react";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <AppHero />
      <SupportRole />
      <AppFeatures />
      <AppVisuals />
      <AppFinalCTA />
      <Footer />
    </main>
  );
}

function AppHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-[#050505] to-[#000000] opacity-95" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tight">
            The App.
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-lg mx-auto leading-relaxed text-pretty">
            Structure in your pocket. Consistency on demand.
          </p>
          <div className="pt-6">
            <Button variant="primary" size="lg">Get the App</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportRole() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Your Pocket Coach.
          </h2>
          <p className="text-white/50 leading-relaxed text-lg max-w-2xl mx-auto text-pretty">
            Training without a plan is just exercise. My app bridges the gap between intention and execution.
            Every workout, every set, every meal—tracked, measured, and optimized.
          </p>
        </div>
      </div>
    </section>
  );
}

function AppFeatures() {
  const features = [
    { 
      title: "Training", 
      desc: "Instant access to structured plans."
    },
    { 
      title: "Tracking", 
      desc: "Log weights. Ensure overload."
    },
    { 
      title: "Guidance", 
      desc: "Video demos for every movement."
    },
    { 
      title: "Freedom", 
      desc: "Train anywhere. Anytime."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 border-t border-white/[0.05] pt-12">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-500">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppVisuals() {
  return (
    <section className="py-32 bg-[#080808] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">
          {/* Placeholder for App Screenshots */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-[9/19] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto w-full max-w-[280px]">
              <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
                <span className="text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">View {i}</span>
              </div>
              {/* Reflective shine effect */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            Clean. Intuitive. Distraction-free.
          </p>
        </div>
      </div>
    </section>
  );
}

function AppFinalCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/[0.03] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-6xl text-white">Start Today.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button variant="primary" size="lg">Get the App</Button>
            <Button variant="outline" size="lg">Explore Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
