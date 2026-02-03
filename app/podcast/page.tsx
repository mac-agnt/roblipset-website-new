import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Podcast } from "@/components/sections/Podcast";
import Image from "next/image";

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <PodcastHero />
      <Podcast />
      <PlatformLinks />
      <PodcastEmailCapture />
      <ProgramCTA />
      <Footer />
    </main>
  );
}

function PodcastHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-end md:items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/AR509651.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[50%_40%]"
          quality={75}
        />
        
        {/* Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-40" />
        
        {/* Optional Subtle Grain */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32 md:pt-0">
        <div className="max-w-3xl">
          {/* Optional Studio Meta Tag */}
          <div className="mb-6 motion-safe:animate-[fadeIn_0.6s_ease-out]">
            <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-white/50 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Studio Live
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-6 motion-safe:animate-[fadeIn_0.8s_ease-out_0.1s_backwards]">
            The Rob Lipsett Podcast
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl motion-safe:animate-[fadeIn_1s_ease-out_0.2s_backwards]">
            Conversations on high performance, training, business, and life.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 motion-safe:animate-[fadeIn_1.2s_ease-out_0.3s_backwards]">
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-[180px] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-black"
            >
              Listen Now
            </Button>

            {/* Secondary Platform Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://open.spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Spotify
              </a>
              <a 
                href="https://podcasts.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Apple
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
}

function PlatformLinks() {
  const platforms = [
    { 
      name: "Spotify", 
      url: "https://open.spotify.com/show/0jBThD6WYPfERwXqJaWiJN",
      logo: "/podcast/spotify-logo.svg",
      ariaLabel: "Listen on Spotify"
    },
    { 
      name: "Apple Podcasts", 
      url: "https://podcasts.apple.com/us/podcast/the-game-plan/id1680909287",
      logo: "/podcast/apple-podcasts-logo.svg",
      ariaLabel: "Listen on Apple Podcasts"
    },
    { 
      name: "YouTube", 
      url: "https://www.youtube.com/@TheGamePlanClips",
      logo: "/podcast/youtube-logo.svg",
      ariaLabel: "Watch on YouTube"
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-xl text-white mb-12 uppercase tracking-widest">Listen Anywhere</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {platforms.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.ariaLabel}
              className="group opacity-70 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#cfa777]/50 focus:ring-offset-4 focus:ring-offset-[#080808] motion-reduce:transition-none"
            >
              <img 
                src={platform.logo}
                alt=""
                className="h-10 w-auto group-hover:brightness-110 group-focus:brightness-110 transition-all duration-200 motion-reduce:transition-none"
              />
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
          <p className="text-white/50 text-lg max-w-none">
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
          
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] max-w-none">
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
