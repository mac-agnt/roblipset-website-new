"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ArrowRight, Mic, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---
const EPISODES = [
  {
    id: 1,
    title: "Building a 7-Figure Fitness Business",
    category: "Business",
    duration: "45:12",
    image: "/game-plan-podcast.png", // Using existing asset
  },
  {
    id: 2,
    title: "3 Strategies to Accelerate Fat Loss",
    category: "Fitness",
    duration: "38:45",
    image: "/game-plan-podcast.png",
  },
  {
    id: 3,
    title: "32 Life Lessons I've Learned So Far",
    category: "Mindset",
    duration: "52:10",
    image: "/game-plan-podcast.png",
  }
];

export function Podcast() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate featured episode every 8s if not playing
  useEffect(() => {
    if (isPlaying) return;

    autoRotateRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EPISODES.length);
    }, 8000);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isPlaying]);

  const activeEpisode = EPISODES[activeIndex];

  // Manual select handler
  const handleSelect = (index: number) => {
    setActiveIndex(index);
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      // Restart timer
      autoRotateRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % EPISODES.length);
      }, 8000);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* 1) SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase">Podcast</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">The Rob Lipsett Podcast.</h2>
                <p className="text-white/40 text-sm md:text-base tracking-wide">Fitness. Business. Mindset.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2) STUDIO HERO (2-COLUMN PANEL) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-0 border border-white/10 bg-[#0a0a0a] relative group overflow-hidden"
        >
          {/* Top Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-20" />

          {/* LEFT: STUDIO INFO PANEL */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
            {/* Grid Hint */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.02]" 
              style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 font-mono">Studio Live</span>
              </div>
              
              <h3 className="text-xl md:text-2xl text-white font-light mb-6 leading-relaxed">
                Raw conversations with <br/>
                <span className="text-white/40">world-class performers.</span>
              </h3>
              
              <div className="flex gap-3 mb-8">
                {['Spotify', 'Apple', 'YouTube'].map(platform => (
                  <span key={platform} className="px-3 py-1 border border-white/10 rounded-full text-[9px] uppercase tracking-wider text-white/40">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-4 items-start">
              <button className="bg-[#cfa777] hover:bg-[#d9b15f] text-black text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all hover:translate-y-[-1px]">
                Listen Now
              </button>
              <Link href="#" className="text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors flex items-center gap-2 group/link">
                View All Episodes
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: NOW PLAYING PANEL */}
          <div className="relative bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-end min-h-[300px] md:min-h-[400px] overflow-hidden">
            {/* Artwork Background Blur */}
            <div className="absolute inset-0 opacity-20 blur-3xl scale-110 pointer-events-none transition-colors duration-1000">
               {/* Could put dynamic color here based on episode if needed */}
               <div className="w-full h-full bg-[#1a1a1a]" />
            </div>

            <div className="absolute top-8 right-8 z-10">
               <span className="text-[9px] uppercase tracking-[0.15em] text-[#cfa777] border border-[#cfa777]/20 px-2 py-1 bg-[#cfa777]/5">Now Playing</span>
            </div>

            <div className="relative z-10 mt-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEpisode.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex gap-6 items-end">
                    <div className="relative w-24 h-24 shrink-0 border border-white/10 shadow-2xl">
                      <Image 
                        src={activeEpisode.image} 
                        alt="Cover" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 pb-1">
                      <div className="flex items-center gap-3">
                         <span className="text-[9px] font-mono text-white/40">EP.{String(activeEpisode.id).padStart(2, '0')}</span>
                         <span className="text-[9px] uppercase tracking-wider text-white/40 px-1.5 py-0.5 border border-white/5 bg-white/5">{activeEpisode.category}</span>
                      </div>
                      <h4 className="text-xl md:text-2xl text-white font-serif leading-tight line-clamp-2">
                        {activeEpisode.title}
                      </h4>
                    </div>
                  </div>

                  {/* Player Controls */}
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-[#cfa777] hover:text-[#cfa777] transition-all group"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                      <div className="h-px bg-white/10 flex-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#cfa777] w-1/3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[10px] font-mono text-white/40">{activeEpisode.duration}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* 3) EPISODE RAIL */}
        <div className="mt-8 md:mt-12 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex md:grid md:grid-cols-3 gap-4 min-w-[300px]"
          >
            {EPISODES.map((ep, idx) => (
              <div 
                key={ep.id}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "flex-shrink-0 w-[280px] md:w-auto p-6 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer group hover:-translate-y-px",
                  activeIndex === idx ? "border-[#cfa777]/30 bg-[#cfa777]/[0.02]" : ""
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={cn(
                    "text-[9px] font-mono tracking-wider",
                    activeIndex === idx ? "text-[#cfa777]" : "text-white/30"
                  )}>
                    EPISODE {String(ep.id).padStart(2, '0')}
                  </span>
                  {activeIndex === idx && (
                    <div className="flex items-center gap-1">
                      <span className="w-0.5 h-2 bg-[#cfa777] animate-[pulse_1s_ease-in-out_infinite]" />
                      <span className="w-0.5 h-3 bg-[#cfa777] animate-[pulse_1.2s_ease-in-out_infinite]" />
                      <span className="w-0.5 h-1.5 bg-[#cfa777] animate-[pulse_0.8s_ease-in-out_infinite]" />
                    </div>
                  )}
                </div>
                
                <h5 className={cn(
                  "text-sm md:text-base text-white font-medium mb-6 line-clamp-2 min-h-[3rem]",
                  activeIndex === idx ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                )}>
                  {ep.title}
                </h5>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    Listen <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </span>
                  <div className="h-px w-12 bg-white/10 overflow-hidden">
                    <div className="h-full bg-white/40 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
