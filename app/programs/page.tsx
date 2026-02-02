import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Method } from "@/components/sections/Method";
import { Results } from "@/components/sections/Results";
import { Ebooks } from "@/components/sections/Ebooks";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <ProgramsHero />
      <Differences />
      <ProgramOptions />
      <Ebooks />
      <Method />
      <Results />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function ProgramsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-end md:items-center">
      {/* ─────────────────────────────────────────────────────────────────
          BACKGROUND IMAGE (Podcast + Mentorship style treatment)
      ───────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
        
        {/* Hero Image */}
        <Image 
          src="/AR509644.jpg"
          alt="Rob Lipsett - Programs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] md:object-[50%_20%] scale-[1.05] md:scale-100 origin-center"
          quality={85}
        />
        
        {/* Gradient Overlays for Text Legibility (matching Podcast/Mentorship heroes) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-[0.97] md:opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-50" />
        
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          CONTENT: Premium editorial hero layout
      ───────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32 md:pt-0">
        <div className="max-w-3xl">
          {/* Eyebrow Badge (matching Podcast/Mentorship style) */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#cfa777] font-medium">
              Training Programs
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Structure. Purpose. <br />
            <span className="text-white/40">Progression.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-8">
            Stop guessing. My system provides the accountability and structure you need to build a powerful physique.
          </p>

          {/* CTA Cluster (matching Mentorship hero pattern) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
            <a
              href="#options"
              className="inline-flex items-center gap-2 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#cfa777]/20"
            >
              View Programs
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
            >
              <span>Apply for Coaching</span>
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-white/30 text-xs">
            1:1 Coaching or Self-Guided App · Your choice
          </p>
        </div>
      </div>

      {/* Bottom Fade Transition (matching Mentorship hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
}

function Differences() {
  const pillars = [
    { title: "Accountability", desc: "Be fully honest about where you're at — then do the work." },
    { title: "Structure", desc: "A clear plan you can follow daily, even when motivation dips." },
    { title: "Simplicity", desc: "No trends. Just the basics done properly, consistently." },
    { title: "Consistency", desc: "Progress rewards reps — not hype." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] border-b border-white/[0.04]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
            The Foundation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
            What Sets This Apart
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.title} 
              className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Number indicator */}
              <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] mb-4 block">
                0{i + 1}
              </span>
              
              <h3 className="font-serif text-xl md:text-2xl text-white mb-3 group-hover:text-[#cfa777] transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {pillar.desc}
              </p>
              
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-[#cfa777]/0 to-transparent group-hover:via-[#cfa777]/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramOptions() {
  return (
    <section id="options" className="py-24 md:py-32 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
            Choose Your Path
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">
            Two Ways to Train With Me
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Whether you want hands-on coaching or a self-guided system, there's a clear path forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* 1:1 COACHING CARD */}
          <div className="group relative flex flex-col bg-[#0a0a0a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/call-image.png"
                alt="1:1 Coaching with Rob Lipsett"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#cfa777]/10 border border-[#cfa777]/20 rounded-full text-[10px] uppercase tracking-[0.15em] text-[#cfa777] font-medium">
                  Premium
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
              <span className="text-[10px] font-medium text-[#cfa777] uppercase tracking-[0.2em] mb-2">
                Maximum Accountability
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                1:1 Coaching
              </h3>
              <p className="text-white/50 leading-relaxed mb-6 flex-1">
                Customised training and nutrition. Direct access. Weekly check-ins. For those who want the full transformation experience.
              </p>
              
              {/* CTA */}
              <Link
                href="/coaching"
                className="group/btn inline-flex items-center justify-center gap-2 w-full bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Apply for Coaching
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* THE APP CARD */}
          <div className="group relative flex flex-col bg-[#0a0a0a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
              <Image
                src="/Habit+Tracker+Mockup-1920w.webp"
                alt="The Lipsett Fitness App"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.15em] text-white/60 font-medium">
                  Self-Guided
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
              <span className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em] mb-2">
                Structure on Demand
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                The App
              </h3>
              <p className="text-white/50 leading-relaxed mb-6 flex-1">
                Workout programs. Nutrition tracking. Mindset resources. Everything you need to train with structure — at your own pace.
              </p>
              
              {/* CTA */}
              <Link
                href="/app"
                className="group/btn inline-flex items-center justify-center gap-2 w-full bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.12] hover:border-white/[0.20] text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore the App
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

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
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Centered Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
            The Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
            How It Works
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="group text-center">
              <span className="text-[10px] font-mono text-white/20 mb-4 block tracking-[0.2em] group-hover:text-[#cfa777] transition-colors">{step.num}</span>
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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Centered Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
            Questions
          </h2>
        </div>
        
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
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/[0.04] text-center">
      <div className="container mx-auto px-4">
        <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
          Ready to Begin
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Start Training.
        </h2>
        <p className="text-white/40 text-base md:text-lg mb-10 max-w-md mx-auto">
          Choose coaching for hands-on accountability or the app for self-guided structure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/coaching"
            className="inline-flex items-center gap-2 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Apply for Coaching
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/app" 
            className="inline-flex items-center gap-2 px-8 py-4 text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
          >
            Explore the App
          </Link>
        </div>
      </div>
    </section>
  );
}
