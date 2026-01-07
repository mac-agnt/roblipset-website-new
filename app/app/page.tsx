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
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            The Lipsett Fitness App
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Train smarter. Stay consistent. Track progress anywhere.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">Download the App</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportRole() {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Consistency is the Key
          </h2>
          <p className="text-white/60 leading-relaxed text-lg">
            The app isn't just a tool—it's your accountability partner. It enhances your adherence to the training principles by giving you a clear structure to follow every single day.
            My programs work best when paired with the app, ensuring you stay on track with your workouts, nutrition, and progress monitoring, no matter where life takes you.
          </p>
        </div>
      </div>
    </section>
  );
}

function AppFeatures() {
  const features = [
    { 
      title: "Training Access", 
      desc: "Instant access to your structured workout plans in a clean, easy-to-follow format.",
      icon: Layout
    },
    { 
      title: "Progress Tracking", 
      desc: "Log your weights, reps, and sets to ensure you are applying progressive overload.",
      icon: BarChart2
    },
    { 
      title: "Structured Guidance", 
      desc: "Video demonstrations and detailed instructions for every movement.",
      icon: Calendar
    },
    { 
      title: "Convenience", 
      desc: "Your coach in your pocket. Train at home, in the gym, or on the road.",
      icon: Smartphone
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 bg-white/5 border border-white/5 hover:border-[var(--accent)] transition-colors duration-300">
              <feature.icon className="w-8 h-8 text-[var(--accent)] mb-6 opacity-80" />
              <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppVisuals() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Placeholder for App Screenshots */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-[9/19] bg-neutral-900 border-8 border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto w-full max-w-[280px]">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-900">
                <span className="text-white/20 font-mono text-xs uppercase tracking-widest">Interface View {i}</span>
              </div>
              {/* Reflective shine effect */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm uppercase tracking-widest">
            Clean. Intuitive. Distraction-free.
          </p>
        </div>
      </div>
    </section>
  );
}

function AppFinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Start Training Today</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg">Get the App</Button>
            <Button variant="outline" size="lg">Explore Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
