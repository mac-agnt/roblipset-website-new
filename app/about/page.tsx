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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center justify-end h-full pb-20">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
          About Rob Lipsett
        </h1>
        <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto mb-8 tracking-wide">
          Athlete. Coach. Mentor.
        </p>
        <Button variant="ghost" size="lg">Explore the Programs</Button>
      </div>
    </section>
  );
}

function TheJourney() {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">The Journey</h2>
        <div className="space-y-8 text-white/70 leading-relaxed text-lg">
          <p>
            I started training for the same reason many do: I wanted to change how I looked and felt. What began as a pursuit of physical change quickly evolved into something deeper—a realization that discipline in the gym translates to every other area of life.
          </p>
          <p>
            Over the last decade in the fitness industry, I’ve seen trends come and go. I’ve seen the damage that unsustainable diets and "hustle culture" training plans can do. My own journey shifted from chasing short-term aesthetics to building a sustainable, high-performance lifestyle.
          </p>
          <p>
            Today, my focus is no longer just on my own progression, but on helping others navigate their own. I’ve built a system that strips away the noise and focuses on what actually works: consistency, structure, and patience.
          </p>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    { title: "Consistency Over Extremes", desc: "Intensity makes for good social media clips, but consistency builds physiques. We don't rely on 100% effort every day; we rely on showing up every day." },
    { title: "Structure Over Chaos", desc: "You cannot manage what you do not measure. A structured plan removes decision fatigue and ensures that every rep, meal, and habit moves you forward." },
    { title: "Long-Term Thinking", desc: "There are no shortcuts. Real transformation takes time. We reject quick fixes in favor of habits that last a lifetime." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-16 text-center">What I Believe In</h2>
          <div className="space-y-12">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-white/10 pl-8">
                <h3 className="font-serif text-2xl text-white md:w-1/3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed md:w-2/3">{p.desc}</p>
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
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-2xl text-white/40 mb-12 text-center uppercase tracking-widest text-sm">Recognition & Partnerships</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
          {brands.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-serif text-white uppercase tracking-wider font-bold">
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
    <section className="py-24 bg-[#0a0a0a] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Train with Purpose</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg">View the Programs</Button>
            <Button variant="outline" size="lg">Apply for Coaching</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
