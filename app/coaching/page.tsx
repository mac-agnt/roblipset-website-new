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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Personal Coaching with <br />
            <span className="text-[var(--accent)]">Rob Lipsett</span>
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            This is fully personalised, high-touch coaching for individuals ready for structured guidance. 
            I work with a limited number of clients to ensure direct focus and long-term progression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button variant="primary" size="lg">Apply for Coaching</Button>
            <Button variant="ghost" size="lg">Is This Right for Me?</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">
          Is 1:1 Coaching Right for You?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* For You Column */}
          <div className="bg-white/5 border border-white/10 p-10">
            <h3 className="font-serif text-2xl text-white mb-8">This is for you if:</h3>
            <ul className="space-y-6">
              {[
                "You want clear structure and accountability",
                "You are serious about long-term progress",
                "You are willing to follow a proven system",
                "You value direct feedback and adjustments"
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                  </div>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You Column */}
          <div className="bg-white/5 border border-white/10 p-10 opacity-75">
            <h3 className="font-serif text-2xl text-white/60 mb-8">This is NOT for you if:</h3>
            <ul className="space-y-6">
              {[
                "You are looking for shortcuts or quick fixes",
                "You want motivation without taking action",
                "You are not ready to commit to the process",
                "You are unwilling to track your progress"
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500/60" />
                  </div>
                  <span className="text-white/60 leading-relaxed">{item}</span>
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
    { title: "Personalised Guidance", desc: "Training and nutrition protocols designed specifically for your body and goals." },
    { title: "Direct Access", desc: "Direct communication for questions, form checks, and support when you need it." },
    { title: "Structured Approach", desc: "A clear roadmap for your progression, removing guesswork from your routine." },
    { title: "Ongoing Support", desc: "Regular check-ins and adjustments to keep you on track and breaking plateaus." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {inclusions.map((item) => (
              <div key={item.title} className="flex gap-6">
                 <div className="w-12 h-1 bg-[var(--accent)] mt-3 flex-shrink-0" />
                 <div>
                   <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                   <p className="text-white/60 leading-relaxed">{item.desc}</p>
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
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Client Results</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { quote: "I never knew what true structure was until this. The results speak for themselves.", name: "Mark T." },
            { quote: "Professional, detailed, and actually cares about your progress. Worth every penny.", name: "Emma R." },
            { quote: "Finally broke through a 2-year plateau. Rob's adjustments made all the difference.", name: "Jason L." }
          ].map((result, i) => (
            <div key={i} className="bg-white/5 p-8 border border-white/5">
              <p className="text-white/80 italic text-lg mb-6 leading-relaxed">"{result.quote}"</p>
              <p className="font-serif text-[var(--accent)]">{result.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Submit Application", desc: "Fill out the detailed application form so I can understand your goals and starting point." },
    { num: "02", title: "Review & Approval", desc: "I review every application personally to ensure we are a good fit for working together." },
    { num: "03", title: "Begin Coaching", desc: "If approved, we start with your onboarding and initial plan design immediately." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="relative pt-8 border-t border-white/10 group hover:border-[var(--accent)] transition-colors duration-500">
              <span className="text-xs font-mono text-[var(--accent)] mb-4 block tracking-widest">{step.num}</span>
              <h3 className="font-serif text-xl text-white mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Apply for 1:1 Coaching</h2>
          <p className="text-white/60">
            Availability is limited to ensure quality. If you are ready to commit to the process, I invite you to apply.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg" className="min-w-[200px]">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
