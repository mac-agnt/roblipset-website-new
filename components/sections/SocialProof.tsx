"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";

interface VideoData {
  title: string;
  duration: string;
  views: string;
  viewsNum: number;
  time: string;
  weeksAgo: number;
}

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  
  return prefersReducedMotion;
}

function useTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || !enabled) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  }, [enabled]);
  
  const handleMouseLeave = useCallback(() => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  }, []);
  
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled, handleMouseMove, handleMouseLeave]);
  
  return { ref, style };
}

function VideoCard({ video, index }: { video: VideoData; index: number }) {
  const [tiltStyle, setTiltStyle] = useState({});
  const [sheenStyle, setSheenStyle] = useState({ opacity: 0, left: "0%", top: "0%" });
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (reducedMotion || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    
    setTiltStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
    });
    
    setSheenStyle({
      opacity: 0.15,
      left: `${(x / rect.width) * 100}%`,
      top: `${(y / rect.height) * 100}%`,
    });
  }, [reducedMotion]);
  
  const handleMouseLeave = useCallback(() => {
    setTiltStyle({});
    setSheenStyle({ opacity: 0, left: "0%", top: "0%" });
  }, []);
  
  return (
    <div
      ref={cardRef}
      className="group cursor-pointer transition-all duration-200"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[#151515] rounded-sm overflow-hidden mb-2 md:mb-3 border border-white/5 group-hover:border-[#cfa777]/30 transition-all duration-200">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        {/* Sheen overlay */}
        <div
          className="absolute w-32 h-32 rounded-full bg-white/30 blur-xl pointer-events-none transition-opacity duration-200"
          style={{
            opacity: sheenStyle.opacity,
            left: sheenStyle.left,
            top: sheenStyle.top,
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Duration pill */}
        <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 bg-black/80 px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] text-white/90 rounded-sm">
          {video.duration}
        </div>
      </div>
      {/* Info */}
      <h4 className="text-xs md:text-sm text-white/80 leading-snug line-clamp-2 group-hover:text-white transition-colors duration-200 mb-0.5 md:mb-1">
        {video.title}
      </h4>
      <p className="text-[10px] md:text-[11px] text-white/30">
        {video.views} views · {video.time}
      </p>
    </div>
  );
}

export function SocialProof() {
  const youtubeTabs = ["Home", "Videos", "Shorts", "Podcasts", "Playlists", "Posts"];
  const youtubeFilters = ["Latest", "Popular", "Oldest"] as const;
  
  const [activeTab, setActiveTab] = useState("Videos");
  const [activeFilter, setActiveFilter] = useState<typeof youtubeFilters[number]>("Latest");
  
  const baseVideos: VideoData[] = [
    { title: "Full Day of Eating for Fat Loss", duration: "21:59", views: "156K", viewsNum: 156000, time: "2 weeks ago", weeksAgo: 2 },
    { title: "My Current Training Split Explained", duration: "18:32", views: "89K", viewsNum: 89000, time: "1 month ago", weeksAgo: 4 },
    { title: "What I Eat in a Day | Cutting Phase", duration: "15:47", views: "234K", viewsNum: 234000, time: "3 weeks ago", weeksAgo: 3 },
    { title: "Morning Routine for Productivity", duration: "12:24", views: "67K", viewsNum: 67000, time: "1 month ago", weeksAgo: 5 },
    { title: "Supplement Stack 2024", duration: "14:18", views: "112K", viewsNum: 112000, time: "2 months ago", weeksAgo: 8 },
    { title: "Chest & Back Workout | Full Session", duration: "24:56", views: "198K", viewsNum: 198000, time: "3 weeks ago", weeksAgo: 3 },
  ];
  
  const sortedVideos = [...baseVideos].sort((a, b) => {
    if (activeFilter === "Latest") return a.weeksAgo - b.weeksAgo;
    if (activeFilter === "Popular") return b.viewsNum - a.viewsNum;
    if (activeFilter === "Oldest") return b.weeksAgo - a.weeksAgo;
    return 0;
  });

  const instagramHighlights = ["Marbella", "Food", "Life", "Supplements", "Training"];
  const instagramPosts = Array(9).fill(null);
  
  const reducedMotion = useReducedMotion();
  const enableTilt = !reducedMotion && typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
  
  const ytPanelTilt = useTilt(enableTilt);
  const igPanelTilt = useTilt(enableTilt);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#050505] to-[#080808]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* === SECTION HEADER === */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-4 md:mb-6">
            Social Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Built in public.
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg mx-auto">
            Training, business, and life — documented across platforms.
          </p>
        </div>

        {/* === PLATFORM PANELS GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          
          {/* ========== YOUTUBE PANEL (col-span-8) ========== */}
          <div 
            ref={ytPanelTilt.ref}
            className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden transition-transform duration-200 ease-out"
            style={enableTilt ? ytPanelTilt.style : undefined}
          >
            {/* Internal grid hint */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.015]"
              style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Channel Header */}
            <div className="p-4 md:p-6 lg:p-8 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                {/* Avatar + Info */}
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="relative w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <Image
                      src="/rob-hero.png"
                      alt="Rob Lipsett"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-white truncate">Rob Lipsett</h3>
                      <VerifiedBadge size="md" className="hidden md:block" />
                      <VerifiedBadge size="sm" className="md:hidden" />
                    </div>
                    <p className="text-[#cfa777] text-xs md:text-sm">@RobLipsett</p>
                    <p className="text-white/30 text-[10px] md:text-xs mt-0.5 md:mt-1">
                      <span className="text-[#cfa777]">492K</span> subscribers · <span className="text-[#cfa777]">856</span> videos
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                  <button className="h-7 md:h-9 px-3 md:px-5 border border-white/20 text-white/70 text-[9px] md:text-[10px] uppercase tracking-[0.15em] hover:border-[#cfa777]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 transition-all duration-200 rounded-sm">
                    Subscribed
                  </button>
                  <button className="h-7 md:h-9 px-3 md:px-5 bg-[#cfa777]/10 border border-[#cfa777]/30 text-[#cfa777] text-[9px] md:text-[10px] uppercase tracking-[0.15em] hover:bg-[#cfa777]/20 hover:border-[#cfa777]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 transition-all duration-200 rounded-sm">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Row */}
            <div className="border-b border-white/5 overflow-x-auto scrollbar-hide">
              <div className="flex px-4 md:px-6 lg:px-8 min-w-max">
                {youtubeTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "py-3 md:py-4 px-3 md:px-4 text-[10px] md:text-[11px] uppercase tracking-[0.1em] transition-all duration-200 relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-inset",
                      activeTab === tab
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    )}
                  >
                    {tab}
                    <div 
                      className={cn(
                        "absolute bottom-0 left-2 right-2 h-[2px] bg-[#cfa777] transition-all duration-200",
                        activeTab === tab ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 border-b border-white/5 overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-2 min-w-max">
                {youtubeFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "h-7 md:h-8 px-3 md:px-4 text-[9px] md:text-[10px] uppercase tracking-[0.1em] rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50",
                      activeFilter === filter
                        ? "bg-[#cfa777]/15 text-[#cfa777] border border-[#cfa777]/40 shadow-[0_0_8px_rgba(207,167,119,0.15)]"
                        : "text-white/40 border border-white/10 hover:border-white/25 hover:text-white/60 hover:-translate-y-0.5"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                {sortedVideos.map((video, index) => (
                  <VideoCard key={`${video.title}-${activeFilter}`} video={video} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* ========== INSTAGRAM PANEL (col-span-4) ========== */}
          <div 
            ref={igPanelTilt.ref}
            className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden transition-transform duration-200 ease-out"
            style={enableTilt ? igPanelTilt.style : undefined}
          >
            {/* Profile Header */}
            <div className="p-4 md:p-6 lg:p-8 border-b border-white/5">
              {/* Avatar + Username */}
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                  <Image
                    src="/rob-hero.png"
                    alt="roblipsett"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <h3 className="font-sans text-base md:text-lg text-white font-medium truncate">roblipsett</h3>
                    <VerifiedBadge size="sm" />
                  </div>
                  <button className="h-6 md:h-7 px-3 md:px-4 bg-white/10 text-white/70 text-[9px] md:text-[10px] uppercase tracking-[0.1em] rounded-sm hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 transition-all duration-200">
                    Following
                  </button>
                </div>
              </div>

              {/* Stats Row - Compact */}
              <div className="flex justify-between mb-4 md:mb-6">
                <div className="text-center flex-1">
                  <p className="text-[#cfa777] font-medium text-base md:text-lg">3,097</p>
                  <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wide">Posts</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[#cfa777] font-medium text-base md:text-lg">685K</p>
                  <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wide">Followers</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[#cfa777] font-medium text-base md:text-lg">2,868</p>
                  <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wide">Following</p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
                <p className="text-white/70">YouTuber</p>
                <p className="text-white/50 line-clamp-1">Owner <span className="text-[#cfa777]/80">@GamePlan</span> | <span className="text-[#cfa777]/80">@VillaLipsett</span> | <span className="text-[#cfa777]/80">@FuelCakes</span></p>
                <p className="text-white/50 line-clamp-1">Athlete: <span className="text-[#cfa777]/80">@Alphalete</span> | <span className="text-[#cfa777]/80">@GhostLifestyle</span></p>
                <a href="#" className="text-[#cfa777] text-[11px] md:text-xs mt-1.5 md:mt-2 block hover:text-[#e0c090] hover:underline transition-colors duration-200">link.me/roblipsett</a>
              </div>
            </div>

            {/* Highlight Chips */}
            <div className="relative border-b border-white/5">
              {/* Fade edges for scroll */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              
              <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-3 md:gap-4 min-w-max">
                  {instagramHighlights.map((highlight) => (
                    <button 
                      key={highlight} 
                      className="flex flex-col items-center gap-1.5 md:gap-2 group focus-visible:outline-none"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center group-hover:border-[#cfa777]/40 group-focus-visible:ring-2 group-focus-visible:ring-[#cfa777]/50 transition-all duration-200 group-hover:-translate-y-0.5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                      </div>
                      <span className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wide group-hover:text-white/60 transition-colors duration-200">{highlight}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Post Grid */}
            <div className="p-1.5 md:p-2">
              <div className="grid grid-cols-3 gap-0.5">
                {instagramPosts.map((_, index) => (
                  <button 
                    key={index} 
                    className="aspect-square bg-[#151515] border border-white/5 hover:border-[#cfa777]/30 transition-all duration-200 cursor-pointer relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-inset hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
