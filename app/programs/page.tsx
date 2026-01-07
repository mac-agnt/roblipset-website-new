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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Train with Structure. <br />
            <span className="text-[var(--accent)]">Train with Purpose.</span>
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. My programs provide the structure, accountability, and proven system you need to build a sustainable, powerful physique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg">Join the Program</Button>
            <Button variant="ghost" size="lg">See What's Included</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differences() {
  const pillars = [
    { title: "Structured Progression", desc: "No random workouts. Every session builds on the last to ensure consistent results." },
    { title: "Coaching Philosophy", desc: "Built on science and experience, not trends. We focus on what actually works." },
    { title: "Holistic Approach", desc: "Training, nutrition, and mindset integrated into one cohesive system." },
    { title: "Built for Consistency", desc: "Sustainable routines that fit your lifestyle, avoiding burnout and extremes." }
  ];

  return (
    <section className="py-20 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">More Than Just a Workout Plan</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-6 bg-white/5 border border-white/5 hover:border-[var(--accent)] transition-colors">
              <h3 className="font-serif text-xl text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{pillar.desc}</p>
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
      name: "1:1 Online Coaching",
      target: "For those wanting maximum accountability",
      outcome: "Complete transformation",
      desc: "My online coaching provides you with a customised training plan, tailored diet, and access to my private Facebook Group.",
      cta: "Apply for Coaching",
      variant: "primary" as const
    },
    {
      name: "The Game Plan App",
      target: "For the self-driven athlete",
      outcome: "Structure on your terms",
      desc: "Unlock the best version of yourself. Access structured workout programs, nutrition tracking, and mindset guides anywhere.",
      cta: "Start Your Free Trial",
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div key={program.name} className="flex flex-col bg-[#0f0f0f] border border-white/10 p-8 md:p-12 hover:border-[var(--accent)]/50 transition-all duration-300">
              <div className="mb-6">
                 <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">{program.target}</span>
                 <h3 className="font-serif text-3xl text-white mt-2 mb-4">{program.name}</h3>
                 <p className="text-white/60 leading-relaxed">{program.desc}</p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-sm text-white/40 mb-4 uppercase tracking-wide">Outcome: <span className="text-white/80 normal-case">{program.outcome}</span></p>
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
    "Structured training plans designed for progression",
    "Access to the Lipsett Fitness App features",
    "Ongoing updates and new program drops",
    "Guidance on nutrition and macronutrients",
    "Mindset resources to build discipline",
    "Community access for support and accountability"
  ];

  return (
    <section className="py-20 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <span className="text-white/80">{item}</span>
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
    { text: "The structure I needed to finally break through my plateau. The accountability is unmatched.", author: "David K." },
    { text: "Rob's approach is science-based and sustainable. I stepped on stage looking my best ever.", author: "Sarah M." },
    { text: "I've added significant size while staying lean. The programming adapts to my schedule.", author: "James L." }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">Real People. Real Progress.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/5 p-8 border border-white/5">
              <p className="text-white/80 italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="font-serif text-[var(--accent)]">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Choose Your Program", desc: "Select 1:1 Coaching or App Access based on your needs." },
    { num: "02", title: "Get Instant Access", desc: "Receive your plan and login details immediately." },
    { num: "03", title: "Train With Purpose", desc: "Follow the structured workouts and track your progress." },
    { num: "04", title: "See Results", desc: "Build consistency and transform your physique." }
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-[11px] top-0 w-5 h-5 bg-[#050505] border border-[var(--accent)] rounded-full" />
              <span className="text-xs font-mono text-[var(--accent)] mb-2 block">{step.num}</span>
              <h3 className="font-serif text-lg text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Who is this for?", a: "Anyone from beginners to advanced athletes looking for structured, science-based training." },
    { q: "What level do I need to be?", a: "Programs are adaptable to all fitness levels, with scalability built in." },
    { q: "How long do I get access?", a: "App subscriptions are monthly or yearly. Coaching is duration-based as agreed." },
    { q: "Can I train at home?", a: "Yes, the app includes home workout options with minimal equipment." },
    { q: "Is nutrition included?", a: "Yes, both the app and coaching provide nutrition guidance and macro tracking." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 p-6 bg-white/5">
              <h3 className="font-medium text-white mb-2">{faq.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
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
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Start Training with Purpose</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">Join the Program</Button>
          <Button variant="ghost" size="lg">Need Help Choosing?</Button>
        </div>
      </div>
    </section>
  );
}
