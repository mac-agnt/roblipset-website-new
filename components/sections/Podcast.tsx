import { Button } from "@/components/ui/Button";
import { Mic, Play } from "lucide-react";

export function Podcast() {
  const episodes = [
    "Building a 7-Figure Fitness Business",
    "3 Strategies to Accelerate Fat Loss",
    "32 Life Lessons I've Learned So Far"
  ];

  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="md:w-1/2 space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              The Rob Lipsett <br /> Podcast
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Weekly interviews with the most influential minds on the planet, covering fitness, business, and mindset.
            </p>
            
            <div className="space-y-4 pt-4">
              {episodes.map((episode) => (
                <div key={episode} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-[var(--accent)] transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                    <Play className="w-4 h-4 text-white group-hover:text-black ml-1" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">{episode}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <Button variant="outline" size="lg">
                Listen Now
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
            {/* Visual representation of a mic or podcast art */}
             <div className="relative z-10 w-full max-w-md aspect-square bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                <Mic className="w-32 h-32 text-white/5" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
                <span className="absolute bottom-8 left-8 text-white/20 font-serif text-4xl">The Game Plan</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
