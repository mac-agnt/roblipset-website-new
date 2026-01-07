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
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tight">
            The Podcast.
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-xl mx-auto leading-relaxed text-pretty">
            Conversations on high performance. Training. Business. Life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              <Headphones className="mr-2 w-4 h-4" /> Spotify
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Mic className="mr-2 w-4 h-4" /> Apple Podcasts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PodcastDescription() {
  return (
    <section className="py-32 bg-[#050505] border-b border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-white">Principles of Success</h2>
          <p className="text-white/50 text-lg leading-relaxed text-pretty">
            I sit down with world-class athletes, entrepreneurs, and thinkers. We explore what it takes to win. Physically. Mentally. Professionally.
          </p>
        </div>
      </div>
    </section>
  );
}

function LatestEpisodes() {
  const episodes = [
    { title: "Building a 7-Figure Fitness Business", desc: "Scaling. Branding. Longevity." },
    { title: "3 Strategies to Accelerate Fat Loss", desc: "Science-based efficiency." },
    { title: "32 Life Lessons I've Learned So Far", desc: "Business. Relationships. Growth." },
    { title: "Mastering Your Mindset", desc: "Mental resilience for big goals." }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl text-white mb-16 text-center">Latest Episodes</h2>
        
        {/* Featured Episode */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#0a0a0a] border border-white/[0.05] p-12 hover:border-white/10 transition-colors duration-500">
          <span className="text-[var(--accent)] text-[10px] font-medium uppercase tracking-[0.2em] mb-4 block">Featured</span>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">{episodes[0].title}</h3>
          <p className="text-white/50 leading-relaxed mb-8 text-lg">{episodes[0].desc}</p>
          <Button variant="outline" size="sm">Listen Now</Button>
        </div>

        {/* Recent List */}
        <div className="max-w-4xl mx-auto space-y-2">
          {episodes.slice(1).map((ep, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group cursor-pointer">
              <div>
                <h4 className="font-serif text-xl text-white mb-2 group-hover:text-[var(--accent)] transition-colors">{ep.title}</h4>
                <p className="text-white/40 text-sm">{ep.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:text-white transition-colors">
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
    <section className="py-24 bg-[#080808] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-xl text-white mb-12 uppercase tracking-widest">Listen Anywhere</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {platforms.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Headphones className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] font-medium text-white tracking-[0.2em] uppercase">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastEmailCapture() {
  return (
    <section className="py-32 bg-background border-b border-white/[0.03]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Never Miss an Episode
          </h2>
          <p className="text-white/50 text-lg">
            Insights directly to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-0 border border-white/10 p-1">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-14 px-6 bg-transparent text-white placeholder:text-white/30 focus:outline-none focus:bg-white/5 transition-colors"
              required
            />
            <Button variant="primary" className="sm:w-auto h-14 px-8">
              Join
            </Button>
          </form>
          
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            No spam. Value only.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgramCTA() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-6xl text-white">Apply the Lessons.</h2>
          <p className="text-white/50 text-lg">
            Ready to train?
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">Explore the Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
