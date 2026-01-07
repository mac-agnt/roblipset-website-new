import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <AboutHero />
      <TheJourney />
      <Philosophy />
      <Credibility />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#050505] to-[#000000] opacity-80" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center justify-end h-full pb-32">
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tight leading-[0.9]">
          The Mission.
        </h1>
        <p className="font-sans text-lg text-white/50 max-w-xl mx-auto mb-12 tracking-wide text-pretty">
          Coach. Athlete. Mentor.
        </p>
      </div>
    </section>
  );
}

function TheJourney() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 text-center">Evolution</h2>
        <div className="space-y-10 text-white/50 leading-relaxed text-xl font-serif">
          <p>
            It started with a simple desire: to change. To look better. To feel better.
          </p>
          <p>
            That pursuit evolved. I realized that discipline in the gym is discipline in life. The weights don't lie. The effort you put in is exactly what you get out.
          </p>
          <p>
            Today, my focus is singular. To help others cut through the noise. To provide the structure, the accountability, and the truth about what it takes to build a high-performance life.
          </p>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    { title: "Consistency", desc: "Intensity is overrated. Consistency is undefeated. Show up." },
    { title: "Structure", desc: "Chaos breeds failure. A plan breeds success. Measure everything." },
    { title: "Patience", desc: "Real change takes time. We don't rush. We build." }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-24 text-center">Principles</h2>
          <div className="space-y-16">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col md:flex-row gap-8 md:gap-16 border-l border-white/[0.05] pl-10 hover:border-white/20 transition-colors duration-500">
                <h3 className="font-serif text-4xl text-white md:w-1/3">{p.title}.</h3>
                <p className="text-white/50 leading-relaxed md:w-2/3 text-lg">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const brands = ["Alphalete", "Ghost", "Fuel Cakes", "Men's Health", "Gymshark"];
  
  return (
    <section className="py-32 bg-[#080808] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-[10px] text-white/20 mb-16 text-center uppercase tracking-[0.25em]">Recognition & Partnerships</h2>
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 mix-blend-screen">
          {brands.map((brand) => (
            <span key={brand} className="text-xl md:text-3xl font-serif text-white uppercase tracking-widest">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-6xl text-white">Join the Movement.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button variant="primary" size="lg">View the Programs</Button>
            <Button variant="outline" size="lg">Apply for Coaching</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
