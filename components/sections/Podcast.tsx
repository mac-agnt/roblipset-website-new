import { Button } from "@/components/ui/Button";
import { PerformanceModule } from "@/components/ui/PerformanceModule";
import { Mic, Play } from "lucide-react";
import Image from "next/image";

export function Podcast() {
  const episodes = [
    "Building a 7-Figure Fitness Business",
    "3 Strategies to Accelerate Fat Loss",
    "32 Life Lessons I've Learned So Far"
  ];

  return (
    <section className="py-32 bg-background border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="md:w-1/2 space-y-10">
            <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-[0.9]">
              The Rob Lipsett <br /> Podcast.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md text-pretty">
              Interviews with the most influential minds. Fitness. Business. Mindset.
            </p>
            
            <div className="space-y-4 pt-6">
              {episodes.map((episode, i) => (
                <PerformanceModule
                  key={episode}
                  label={`EPISODE ${i + 1}`}
                  title={episode}
                  className="p-6 md:p-6"
                  action={
                    <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-medium tracking-widest uppercase mt-2 group-hover:text-white transition-colors">
                      <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                        <Play className="w-2 h-2 fill-current" />
                      </div>
                      Play Episode
                    </div>
                  }
                />
              ))}
            </div>

            <div className="pt-6">
               <Button variant="outline" size="lg">
                Listen Now
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
             <div className="relative z-10 w-full max-w-sm aspect-square bg-[var(--panel)] border border-white/5 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] hover:border-white/10 transition-colors duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-white/5 opacity-50 z-20" />
                
                <Image
                  src="/game-plan-podcast.png"
                  alt="The Game Plan Podcast"
                  fill
                  className="object-cover"
                />
                
                {/* Subtle overlay for cinematic integration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
