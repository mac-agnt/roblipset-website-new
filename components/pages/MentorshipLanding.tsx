"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight, Star, Clock, Users, Shield, MessageCircle, Dumbbell, Brain, TrendingUp, Play, ChevronDown } from "lucide-react";
import { useState } from "react";

// ============================================================================
// SECTION 0 — PRE-FILTER BANNER
// ============================================================================

function PreFilterBanner() {
  return (
    <div className="bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-white/50 text-xs tracking-widest uppercase">
          Serious applicants only · Limited availability
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// SECTION 1 — HERO
// ============================================================================

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#030303]" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Gold accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cfa777]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-6 font-medium">
            1:1 Mentorship with Rob Lipsett
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
            Build the Physique, Business & Life You Actually Want
          </h1>

          {/* Subheadline */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A proven system for ambitious men ready to transform their body, scale their income, and design a life of freedom.
          </p>

          {/* CTA */}
          <a
            href="#apply"
            className="inline-flex items-center gap-3 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#cfa777]/20"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust indicator */}
          <p className="text-white/30 text-sm mt-6">
            Application takes 2–3 minutes
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/20" />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2 — ABOVE-THE-FOLD SOCIAL PROOF
// ============================================================================

function SocialProofSection() {
  const metrics = [
    { value: "10+", label: "Years Documented" },
    { value: "1.2M+", label: "Social Following" },
    { value: "500+", label: "Clients Transformed" },
    { value: "150+", label: "Podcast Episodes" },
  ];

  const brands = [
    "Gymshark", "MyProtein", "YouTube", "Spotify"
  ];

  return (
    <section className="bg-[#030303] py-16 md:py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <p className="text-[#cfa777] font-serif text-3xl md:text-4xl mb-1">{metric.value}</p>
              <p className="text-white/40 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Brand logos placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
          {brands.map((brand, i) => (
            <span key={i} className="text-white/60 text-sm tracking-widest uppercase">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3 — WHO THIS IS FOR / NOT FOR
// ============================================================================

function QualificationSection() {
  const forYou = [
    "You're already successful but know you're capable of more",
    "You want accountability from someone who's done it",
    "You're ready to invest in yourself at the highest level",
    "You value systems over shortcuts",
    "You're committed to a 12-month transformation",
  ];

  const notForYou = [
    "You're looking for a quick fix or magic pill",
    "You're not willing to put in the work",
    "You expect results without consistency",
    "You're not ready to be challenged",
    "You're just browsing for free advice",
  ];

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">Before You Apply</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              This Isn't for Everyone
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* For you */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8">
              <h3 className="text-[#cfa777] font-semibold text-lg mb-6 flex items-center gap-2">
                <Check className="w-5 h-5" />
                This is for you if...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-4 h-4 text-[#cfa777] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8">
              <h3 className="text-white/40 font-semibold text-lg mb-6 flex items-center gap-2">
                <X className="w-5 h-5" />
                This is NOT for you if...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50">
                    <X className="w-4 h-4 text-white/30 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 4 — CORE PROMISE (TRANSFORMATION)
// ============================================================================

function TransformationSection() {
  return (
    <section className="bg-[#030303] py-20 md:py-28 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">The Transformation</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              From Where You Are to Where You Want to Be
            </h2>
          </div>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Before */}
            <div className="text-center md:text-right">
              <p className="text-white/30 text-sm tracking-widest uppercase mb-4">Before</p>
              <ul className="space-y-3 text-white/50">
                <li>Inconsistent with training and nutrition</li>
                <li>Overwhelmed by conflicting information</li>
                <li>Stuck at the same income level</li>
                <li>Lacking clarity on what you actually want</li>
                <li>Going through the motions</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#cfa777]/30 to-transparent" />

            {/* After */}
            <div className="text-center md:text-left">
              <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">After</p>
              <ul className="space-y-3 text-white/80">
                <li>Dialled-in physique you're proud of</li>
                <li>Clear systems that run on autopilot</li>
                <li>Multiple income streams growing</li>
                <li>Unshakeable confidence and clarity</li>
                <li>Living intentionally, not reactively</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5 — THE METHOD (PROPRIETARY SYSTEM)
// ============================================================================

function MethodSection() {
  const pillars = [
    {
      number: "01",
      title: "Physique Mastery",
      description: "Build a body that commands respect and gives you energy for everything else.",
    },
    {
      number: "02",
      title: "Business Architecture",
      description: "Design income systems that scale without trading more time for money.",
    },
    {
      number: "03",
      title: "Mindset Engineering",
      description: "Develop the mental frameworks that make discipline feel effortless.",
    },
    {
      number: "04",
      title: "Lifestyle Design",
      description: "Create a life structure that supports your goals instead of fighting them.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">The System</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              The Game Plan Method
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              A proven framework refined over 10+ years of personal application and client results.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-[#cfa777]/20 transition-colors duration-300"
              >
                <span className="text-[#cfa777]/40 font-serif text-4xl">{pillar.number}</span>
                <h3 className="text-white font-semibold text-xl mt-4 mb-3">{pillar.title}</h3>
                <p className="text-white/50">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6 — WHAT YOU GET (DELIVERABLES)
// ============================================================================

function DeliverablesSection() {
  const deliverables = [
    {
      category: "Coaching",
      items: [
        { title: "Weekly 1:1 Calls", description: "Direct access to Rob for strategy, accountability, and course correction." },
        { title: "Unlimited Voice Notes", description: "Real-time support between calls for when you need guidance." },
      ]
    },
    {
      category: "Systems",
      items: [
        { title: "Custom Training Program", description: "Periodised programming built around your goals, schedule, and equipment." },
        { title: "Nutrition Framework", description: "Flexible protocols that fit your lifestyle, not rigid meal plans." },
      ]
    },
    {
      category: "Access",
      items: [
        { title: "Private Client Portal", description: "All your programs, resources, and progress tracking in one place." },
        { title: "The Game Plan App", description: "Full access to the training app with video demonstrations." },
      ]
    },
    {
      category: "Community",
      items: [
        { title: "Private Mastermind", description: "Connect with other high-performers on the same journey." },
        { title: "Quarterly Retreats", description: "In-person events for deeper connection and accelerated growth." },
      ]
    },
  ];

  return (
    <section className="bg-[#030303] py-20 md:py-28 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">What's Included</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Everything You Need to Transform
            </h2>
          </div>

          {/* Deliverables grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((group, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-[#cfa777] font-semibold text-sm tracking-widest uppercase">
                  {group.category}
                </h3>
                {group.items.map((item, j) => (
                  <div key={j} className="bg-[#0a0a0a] border border-white/5 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7 — PROOF ENGINE
// ============================================================================

function ProofSection() {
  const testimonials = [
    {
      quote: "I've lost 15kg, doubled my income, and actually enjoy the process. Rob's system just works.",
      name: "James M.",
      result: "Lost 15kg in 6 months",
    },
    {
      quote: "The accountability changed everything. For the first time, I'm actually consistent.",
      name: "David K.",
      result: "Built first 6-figure business",
    },
    {
      quote: "I thought I knew what I was doing. Rob showed me I was leaving 80% on the table.",
      name: "Michael T.",
      result: "Competed in first show at 42",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">Results</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Real Transformations
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#cfa777] text-[#cfa777]" />
                  ))}
                </div>
                <p className="text-white/70 italic mb-6 flex-1">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-[#cfa777] text-sm">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8 — AUTHORITY STACK (WHY ROB)
// ============================================================================

function AuthoritySection() {
  return (
    <section className="bg-[#030303] py-20 md:py-28 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-[#0a0a0a] rounded-xl overflow-hidden">
              <Image
                src="/rob-hero.png"
                alt="Rob Lipsett"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div>
              <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">Why Rob</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Lived, Not Theorised
              </h2>
              
              <div className="space-y-4 text-white/60">
                <p>
                  Over the past decade, I've built everything I teach—publicly. From competing on stage to building multiple businesses, from 1.2M+ followers to hosting 150+ podcast episodes with world-class guests.
                </p>
                <p>
                  I'm not a coach who read a book. I'm someone who's documented the entire journey, made the mistakes, and refined the systems that actually work.
                </p>
                <p>
                  This mentorship is the distillation of everything I've learned—delivered directly to you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-[#cfa777] font-serif text-2xl">10+</p>
                  <p className="text-white/40 text-sm">Years in the game</p>
                </div>
                <div>
                  <p className="text-[#cfa777] font-serif text-2xl">500+</p>
                  <p className="text-white/40 text-sm">Clients coached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 9 — OBJECTION HANDLING (FAQ)
// ============================================================================

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much time do I need to commit?",
      answer: "The program is designed for busy professionals. Expect 4-6 hours per week for training, plus our weekly calls. The systems are built to integrate into your life, not take it over."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "This mentorship is for those with some foundation who want to accelerate. If you're brand new to fitness or business, this isn't the right fit—yet. Build some basics first, then apply."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients see noticeable physical changes within 8-12 weeks. Business and mindset shifts often happen faster. The full transformation unfolds over 12 months."
    },
    {
      question: "What's the investment?",
      answer: "Investment details are shared on our call after your application is reviewed. This is a premium, high-touch program priced accordingly. If budget is your primary concern, this isn't for you."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "The system works when you work it. We're selective about who we accept specifically to ensure fit. If you show up and do the work, results follow."
    },
  ];

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Before You Decide
            </h2>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/50">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10 — THE OFFER
// ============================================================================

function OfferSection() {
  return (
    <section className="bg-[#030303] py-20 md:py-28 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#cfa777] text-sm tracking-widest uppercase mb-4">The Mentorship</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            12 Months of Direct Access
          </h2>
          
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            This is not a course. Not a group program. This is 1:1 mentorship with direct access to Rob for a full year. Weekly calls, unlimited support, and complete accountability.
          </p>

          <div className="bg-[#0a0a0a] border border-[#cfa777]/20 rounded-xl p-8 mb-8">
            <p className="text-white/40 text-sm mb-2">What to expect:</p>
            <ul className="text-white/70 space-y-2">
              <li>• 52 weekly 1:1 coaching calls</li>
              <li>• Unlimited voice note access</li>
              <li>• Custom training & nutrition programming</li>
              <li>• Business strategy & accountability</li>
              <li>• Private mastermind community access</li>
            </ul>
          </div>

          <p className="text-white/40 text-sm">
            Limited to 20 active clients at any time to ensure quality.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 11 — PRIMARY APPLICATION CTA
// ============================================================================

function PrimaryCTASection() {
  return (
    <section id="apply" className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-white/60 mb-8">
            Start with a short application. If we're a fit, we'll schedule a call to discuss your goals and how the mentorship can help you achieve them.
          </p>

          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#cfa777]/20 text-lg"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-white/30 text-sm mt-4">
            Takes 2–3 minutes · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 12 — APPLICATION PREVIEW
// ============================================================================

function ApplicationPreviewSection() {
  return (
    <section className="bg-[#030303] py-16 md:py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#cfa777]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#cfa777] font-semibold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Apply</h3>
              <p className="text-white/50 text-sm">Complete a short application about your goals and current situation.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#cfa777]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#cfa777] font-semibold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Review</h3>
              <p className="text-white/50 text-sm">Rob personally reviews every application within 48 hours.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#cfa777]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#cfa777] font-semibold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Call</h3>
              <p className="text-white/50 text-sm">If there's a fit, we'll schedule a call to discuss next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 13 — SCARCITY & CONTROL
// ============================================================================

function ScarcitySection() {
  return (
    <section className="bg-[#050505] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#cfa777]/10 border border-[#cfa777]/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#cfa777] animate-pulse" />
            <span className="text-[#cfa777] text-sm font-medium">Limited Availability</span>
          </div>
          
          <p className="text-white/60">
            To maintain quality, Rob works with a maximum of 20 clients at any time. Applications are reviewed on a rolling basis. When spots fill, a waitlist opens.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 14 — FINAL PROOF REMINDER
// ============================================================================

function FinalProofSection() {
  return (
    <section className="bg-[#030303] py-16 md:py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
              <p className="text-[#cfa777] font-serif text-3xl mb-2">500+</p>
              <p className="text-white/50 text-sm">Clients transformed through Rob's systems</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
              <p className="text-[#cfa777] font-serif text-3xl mb-2">10+ Years</p>
              <p className="text-white/50 text-sm">Documented publicly on YouTube & social</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
              <p className="text-[#cfa777] font-serif text-3xl mb-2">1.2M+</p>
              <p className="text-white/50 text-sm">People following the journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 15 — FINAL CTA
// ============================================================================

function FinalCTASection() {
  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Your Next Chapter Starts Here
          </h2>

          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold px-10 py-5 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#cfa777]/20 text-lg"
          >
            Apply for Mentorship
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 16 — TRUST FOOTER
// ============================================================================

function TrustFooter() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="text-white font-semibold mb-1">Rob Lipsett</p>
              <p className="text-white/40 text-sm">Dublin, Ireland</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:team@roblipsett.com" className="text-white/40 hover:text-white/60 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Rob Lipsett. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function MentorshipLanding() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <PreFilterBanner />
      <HeroSection />
      <SocialProofSection />
      <QualificationSection />
      <TransformationSection />
      <MethodSection />
      <DeliverablesSection />
      <ProofSection />
      <AuthoritySection />
      <FAQSection />
      <OfferSection />
      <PrimaryCTASection />
      <ApplicationPreviewSection />
      <ScarcitySection />
      <FinalProofSection />
      <FinalCTASection />
      <TrustFooter />
    </main>
  );
}
