import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Play, Mic, Headphones, ArrowRight } from "lucide-react";

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <PodcastHero />
      <PodcastDescription />
      <LatestEpisodes />
      <PlatformLinks />
      <PodcastEmailCapture />
      <ProgramCTA />
      <Footer />
    </main>
  );
}

function PodcastHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            The Rob Lipsett Podcast
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Conversations on training, mindset, discipline, and building a better life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              <Headphones className="mr-2 w-4 h-4" /> Listen on Spotify
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Mic className="mr-2 w-4 h-4" /> Listen on Apple
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PodcastDescription() {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl text-white">About the Podcast</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            The Rob Lipsett Podcast dives deep into the principles that drive high performance. I sit down with world-class athletes, entrepreneurs, and thinkers to explore what it takes to succeed physically, mentally, and professionally.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            This isn't just about lifting weights. It's about the mindset required to show up every day, the discipline to execute when you don't feel like it, and the strategies to build a life you're proud of.
          </p>
        </div>
      </div>
    </section>
  );
}

function LatestEpisodes() {
  const episodes = [
    { title: "Building a 7-Figure Fitness Business", desc: "Tips from a decade in the industry on scaling, branding, and longevity." },
    { title: "3 Strategies to Accelerate Fat Loss", desc: "Practical, science-based approaches to efficient and sustainable fat loss." },
    { title: "32 Life Lessons I've Learned So Far", desc: "Reflections on business, relationships, and personal growth." },
    { title: "Mastering Your Mindset", desc: "How to build the mental resilience needed to smash your goals." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl text-white mb-12 text-center">Latest Episodes</h2>
        
        {/* Featured Episode (First item prominent) */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/5 border border-white/10 p-8 md:p-10 hover:border-[var(--accent)] transition-colors duration-300">
          <span className="text-[var(--accent)] text-xs font-mono uppercase tracking-widest mb-3 block">Featured Episode</span>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{episodes[0].title}</h3>
          <p className="text-white/60 leading-relaxed mb-8">{episodes[0].desc}</p>
          <Button variant="outline" size="sm">Listen Now <Play className="ml-2 w-3 h-3" /></Button>
        </div>

        {/* Recent List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {episodes.slice(1).map((ep, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
              <div>
                <h4 className="font-serif text-xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">{ep.title}</h4>
                <p className="text-white/50 text-sm">{ep.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-white/40 text-xs uppercase tracking-widest flex items-center group-hover:text-white transition-colors">
                  Listen <ArrowRight className="ml-2 w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformLinks() {
  const platforms = [
    { name: "Spotify", url: "https://open.spotify.com" },
    { name: "Apple Podcasts", url: "https://podcasts.apple.com" },
    { name: "YouTube", url: "https://youtube.com" }
  ];

  return (
    <section className="py-20 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-2xl text-white mb-12">Listen Anywhere</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {platforms.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                <Headphones className="w-6 h-6 text-white group-hover:text-[var(--accent)] transition-colors" />
              </div>
              <span className="text-sm font-medium text-white tracking-wide uppercase">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastEmailCapture() {
  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Never Miss an Episode
          </h2>
          <p className="text-white/60">
            Training insights, updates, drops & offers directly to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none"
              required
            />
            <Button variant="primary" className="sm:w-auto">
              Join the List
            </Button>
          </form>
          
          <p className="text-xs text-white/20">
            No spam. Value only.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgramCTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Put the Lessons Into Action</h2>
          <p className="text-white/60">
            Ready to apply these principles to your own training and life?
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">Explore the Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
