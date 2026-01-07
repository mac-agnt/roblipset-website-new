import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Check, X } from "lucide-react";

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <CoachingHero />
      <FitSection />
      <Inclusions />
      <ClientResults />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function CoachingHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-95" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
            Personal Coaching. <br />
            <span className="text-white/40">The Inner Circle.</span>
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-lg mx-auto leading-relaxed text-pretty">
            High-touch. Selective. Designed for those ready to commit entirely to the process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button variant="primary" size="lg">Apply Now</Button>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 pt-4 sm:pt-0">Limited Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-24">
          Who is this for?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* For You Column */}
          <div className="bg-[#0a0a0a] border border-white/[0.05] p-12">
            <h3 className="font-serif text-3xl text-white mb-10">The Committed</h3>
            <ul className="space-y-6">
              {[
                "Demands structure and accountability",
                "Focused on long-term progression",
                "Follows the system without deviation",
                "Values direct, honest feedback"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform" />
                  <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You Column */}
          <div className="bg-[#0a0a0a] border border-white/[0.05] p-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <h3 className="font-serif text-3xl text-white mb-10">The Casual</h3>
            <ul className="space-y-6">
              {[
                "Looking for quick fixes",
                "Motivation without discipline",
                "Unwilling to track metrics",
                "Not ready to invest in themselves"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-white/60 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Inclusions() {
  const inclusions = [
    { title: "Personalised Guidance", desc: "Protocols designed for your unique physiology." },
    { title: "Direct Access", desc: "Communication when you need it." },
    { title: "Structured Approach", desc: "A clear roadmap. No guesswork." },
    { title: "Ongoing Support", desc: "Adjustments to break plateaus." }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-24">The Standard</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {inclusions.map((item) => (
              <div key={item.title} className="group">
                 <div className="w-8 h-[1px] bg-[var(--accent)] mb-6 group-hover:w-16 transition-all duration-500" />
                 <div>
                   <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                   <p className="text-white/50 text-lg leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientResults() {
  return (
    <section className="py-32 bg-[#080808] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-24">Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { quote: "I never knew what true structure was until this.", name: "Mark T." },
            { quote: "Professional, detailed, and actually cares.", name: "Emma R." },
            { quote: "Finally broke through a 2-year plateau.", name: "Jason L." }
          ].map((result, i) => (
            <div key={i} className="group p-8 border-l border-white/10 hover:border-[var(--accent)] transition-colors duration-500 pl-8">
              <p className="text-white/80 font-serif text-2xl mb-8 leading-relaxed">"{result.quote}"</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">{result.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Apply", desc: "Submit your details." },
    { num: "02", title: "Review", desc: "I assess fit personally." },
    { num: "03", title: "Begin", desc: "Onboarding starts immediately." }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-24">The Process</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto border-t border-white/[0.05] pt-12">
          {steps.map((step) => (
            <div key={step.num} className="group">
              <span className="text-[10px] font-mono text-white/20 mb-6 block tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors">{step.num}</span>
              <h3 className="font-serif text-3xl text-white mb-4">{step.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/[0.03] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9]">Apply.</h2>
          <p className="text-white/50 text-lg">
            Commit to the standard.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" className="min-w-[200px]">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
