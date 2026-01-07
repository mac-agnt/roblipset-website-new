import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <ProgramsHero />
      <Differences />
      <ProgramOptions />
      <ValueStack />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function ProgramsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-95" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight text-balance">
            Structure. Purpose. <br />
            <span className="text-white/40">Progression.</span>
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-lg mx-auto leading-relaxed text-pretty">
            Stop guessing. My system provides the accountability and structure you need to build a powerful physique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button variant="primary" size="lg">Join the Program</Button>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 pt-4 sm:pt-0">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differences() {
  const pillars = [
    { title: "Progression", desc: "Every session builds on the last." },
    { title: "Philosophy", desc: "Science-based. No trends." },
    { title: "Holistic", desc: "Training. Nutrition. Mindset." },
    { title: "Consistency", desc: "Sustainable routines. No burnout." }
  ];

  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group">
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-500">{pillar.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramOptions() {
  const programs = [
    {
      name: "1:1 Coaching",
      target: "Maximum Accountability",
      outcome: "Total Transformation",
      desc: "Customised training. Tailored diet. Private access.",
      cta: "Apply Now",
      variant: "primary" as const
    },
    {
      name: "The App",
      target: "Self-Driven Athlete",
      outcome: "Structure on Demand",
      desc: "Workout programs. Nutrition tracking. Mindset guides.",
      cta: "Start Free Trial",
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div key={program.name} className="flex flex-col bg-[#0a0a0a] border border-white/[0.05] p-12 hover:border-white/10 transition-all duration-500">
              <div className="mb-8">
                 <span className="text-[10px] font-medium text-[var(--accent)] uppercase tracking-[0.2em]">{program.target}</span>
                 <h3 className="font-serif text-4xl text-white mt-4 mb-6">{program.name}</h3>
                 <p className="text-white/50 leading-relaxed text-lg">{program.desc}</p>
              </div>
              <div className="mt-auto pt-10 border-t border-white/[0.05]">
                <Button variant={program.variant} fullWidth>{program.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueStack() {
  const items = [
    "Structured training plans",
    "Lipsett Fitness App access",
    "Ongoing program updates",
    "Nutrition guidance",
    "Mindset resources",
    "Community accountability"
  ];

  return (
    <section className="py-32 bg-[#050505] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-4 group">
                <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[var(--accent)] transition-colors" />
                <span className="text-white/60 text-lg group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "The structure I needed to finally break through my plateau.", author: "David K." },
    { text: "Science-based and sustainable. Best shape of my life.", author: "Sarah M." },
    { text: "Added significant size while staying lean.", author: "James L." }
  ];

  return (
    <section className="py-32 bg-background overflow-hidden border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-24">Real Progress</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="group p-8 border-l border-white/10 hover:border-[var(--accent)] transition-colors duration-500 pl-8">
              <p className="text-white/70 font-serif text-xl mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Choose", desc: "Select Coaching or App." },
    { num: "02", title: "Access", desc: "Get your plan instantly." },
    { num: "03", title: "Train", desc: "Follow the structure." },
    { num: "04", title: "Transform", desc: "Build consistency." }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 border-t border-white/[0.05] pt-12">
          {steps.map((step) => (
            <div key={step.num} className="group">
              <span className="text-[10px] font-mono text-white/20 mb-4 block tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors">{step.num}</span>
              <h3 className="font-serif text-xl text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/40">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Who is this for?", a: "Beginners to advanced athletes seeking structure." },
    { q: "What level do I need to be?", a: "Scalable to all levels." },
    { q: "How long do I get access?", a: "Monthly or yearly options available." },
    { q: "Can I train at home?", a: "Yes. Home options included." },
    { q: "Is nutrition included?", a: "Yes. Guidance and tracking provided." }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/[0.05] pb-6 group">
              <h3 className="font-medium text-white mb-2 group-hover:text-white/80 transition-colors">{faq.q}</h3>
              <p className="text-white/40 text-sm">{faq.a}</p>
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
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Start Training.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" size="lg">Join the Program</Button>
          <a href="/coaching" className="text-white/40 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">Need Help Choosing?</a>
        </div>
      </div>
    </section>
  );
}
