"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { Play, Heart, Share2, MoreHorizontal, SkipBack, SkipForward, Volume2, Grid3X3, Film, Bookmark, Plus } from "lucide-react";

// ============================================================================
// CONFIG - All platform data in one place
// ============================================================================

const CONFIG = {
  youtube: {
    handle: "@RobLipsett",
    name: "Rob Lipsett",
    subscribers: "492K",
    videoCount: "856",
    videos: [
      { title: "Full Day of Eating for Fat Loss", duration: "21:59", views: "156K", thumbnail: "/yt_thumb1.webp" },
      { title: "My Current Training Split", duration: "18:32", views: "89K", thumbnail: "/yt_thumb2.webp" },
      { title: "What I Eat in a Day | Cutting", duration: "15:47", views: "234K", thumbnail: "/yt_thumb3.webp" },
      { title: "Morning Routine 2024", duration: "12:24", views: "67K", thumbnail: "/yt_thumb4.webp" },
      { title: "Build Muscle as a Beginner", duration: "24:15", views: "312K", thumbnail: "/yt_thumb7.avif" },
      { title: "Supplement Stack I Use", duration: "16:08", views: "145K", thumbnail: "/yt_thumb1.webp" },
      { title: "Physique Update | 12 Weeks Out", duration: "19:45", views: "198K", thumbnail: "/yt_thumb2.webp" },
      { title: "Leg Day Full Workout", duration: "22:30", views: "87K", thumbnail: "/yt_thumb3.webp" },
    ],
  },
  instagram: {
    handle: "roblipsett",
    name: "Rob Lipsett",
    posts: "3,097",
    followers: "686K",
    following: "2,868",
    bio: "Fitness • Business • Lifestyle\nHost of The Game Plan Podcast 🎙️",
    gridImages: [
      { src: "/ig_post1.png", likes: "12.4K" },
      { src: "/ig_post2.png", likes: "8.7K" },
      { src: "/ig_post3.png", likes: "15.2K" },
      { src: "/ig_post4.png", likes: "9.1K" },
      { src: "/ig_post5.png", likes: "11.8K" },
      { src: "/tiktok_03.png", likes: "7.3K" },
    ],
  },
  tiktok: {
    handle: "@roblipsett",
    name: "Rob Lipsett",
    following: "100",
    followers: "40.9K",
    likes: "570.5K",
    videos: [
      { src: "/tiktok_01.png", views: "1.2M", pinned: true },
      { src: "/tiktok_02.png", views: "856K", pinned: true },
      { src: "/tiktok_03.png", views: "543K", pinned: false },
      { src: "/tiktok_04.png", views: "378K", pinned: false },
      { src: "/tiktok_05.png", views: "245K", pinned: false },
      { src: "/tiktok_06.png", views: "189K", pinned: false },
    ],
  },
  spotify: {
    showTitle: "The Game Plan",
    author: "Rob Lipsett",
    rating: "4.9",
    ratingCount: "679",
    category: "Business & Fitness",
    description: "Real conversations about fitness, business, and building a life you love. New episodes every week featuring entrepreneurs, athletes, and thought leaders.",
    episodes: [
      { num: 156, title: "Building a Fitness Empire from Zero", duration: "1:24:32", date: "Jan 8", plays: "12.4K" },
      { num: 155, title: "The Truth About Supplements in 2024", duration: "58:17", date: "Jan 1", plays: "9.8K" },
      { num: 154, title: "How I Structure My Training Week", duration: "1:12:45", date: "Dec 25", plays: "11.2K" },
      { num: 153, title: "Mindset Shifts That Changed Everything", duration: "1:05:23", date: "Dec 18", plays: "8.5K" },
      { num: 152, title: "From YouTube to Business Empire", duration: "1:18:42", date: "Dec 11", plays: "14.1K" },
    ],
  },
};

interface PlatformData {
  id: string;
  name: string;
  description: string;
}

const platforms: PlatformData[] = [
  { id: "youtube", name: "YouTube", description: "Long-form depth" },
  { id: "instagram", name: "Instagram", description: "Daily consistency" },
  { id: "tiktok", name: "TikTok", description: "Reach & virality" },
  { id: "spotify", name: "Spotify", description: "Long-form conversations" },
];

const AUTO_CYCLE_INTERVAL = 5000;
const MANUAL_PAUSE_DURATION = 10000;

// ============================================================================
// HOOKS
// ============================================================================

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
}

// ============================================================================
// MOBILE PANELS (Native App Replicas)
// ============================================================================

function YouTubeMobilePanel() {
  const { videos, handle, name, subscribers, videoCount } = CONFIG.youtube;
  // Mobile YouTube: larger header, list of videos with real thumbnails
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] overflow-hidden">
      {/* Channel Header */}
      <div className="px-4 py-4 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
            <Image src="/rob-hero.png" alt={name} fill className="object-cover object-top" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-white mb-0.5">{name}</h3>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <span>{handle}</span>
              <VerifiedBadge size="sm" />
            </div>
            <div className="flex items-center gap-2 mt-1.5 text-[11px] font-medium">
              <span className="text-white">{subscribers} subscribers</span>
              <span className="text-white/30">•</span>
              <span className="text-white">{videoCount} videos</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-2">
           <button className="flex-1 h-9 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all">
             Subscribe
           </button>
           <button className="h-9 px-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all">
             Join
           </button>
        </div>
      </div>

      {/* Video List with real thumbnails */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {videos.slice(0, 5).map((v, i) => (
            <div key={i} className="flex flex-col gap-2 p-3 active:bg-white/5 transition-colors">
              {/* Thumbnail */}
              <div className="relative aspect-video w-full bg-[#1a1a1a] rounded-xl overflow-hidden">
                <Image 
                  src={v.thumbnail} 
                  alt={v.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 text-[10px] text-white font-medium rounded-md backdrop-blur-sm">
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>
              </div>
              {/* Meta */}
              <div className="flex gap-3">
                 <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0 mt-0.5">
                    <Image src="/rob-hero.png" alt={name} fill className="object-cover object-top" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-white font-medium leading-snug line-clamp-2 mb-0.5">{v.title}</h4>
                    <div className="flex items-center gap-1 text-[11px] text-white/50">
                       <span>{name}</span>
                       <span>•</span>
                       <span>{v.views} views</span>
                       <span>•</span>
                       <span>2 days ago</span>
                    </div>
                 </div>
                 <MoreHorizontal className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InstagramMobilePanel() {
  const { handle, name, posts, followers, following, bio, gridImages } = CONFIG.instagram;
  const stats = [
    { value: posts, label: "Posts" },
    { value: followers, label: "Followers" },
    { value: following, label: "Following" },
  ];

  return (
    <div className="flex flex-col bg-black text-white">
       {/* Top Nav */}
       <div className="px-4 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-1">
             <span className="font-bold text-base">{handle}</span>
             <VerifiedBadge size="sm" />
          </div>
          <div className="flex gap-4">
             <Plus className="w-6 h-6" />
             <div className="w-6 h-6 relative">
               <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
               <Share2 className="w-6 h-6" />
             </div>
          </div>
       </div>

       {/* Profile Header */}
       <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
             <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#cfa777] via-[#d9b15f] to-[#cfa777] shrink-0">
               <div className="w-full h-full rounded-full overflow-hidden border-2 border-black relative">
                 <Image src="/rob-hero.png" alt={handle} fill className="object-cover object-top" />
               </div>
             </div>
             <div className="flex-1 flex justify-around ml-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <span className="font-bold text-base">{stat.value}</span>
                     <span className="text-sm text-white/80">{stat.label}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="mb-4">
             <div className="font-bold text-sm mb-0.5">{name}</div>
             <div className="text-sm whitespace-pre-line leading-snug">{bio}</div>
             <div className="text-sm text-[#cfa777] font-medium mt-1">linktr.ee/roblipsett</div>
          </div>

          <div className="flex gap-2">
             <button className="flex-1 h-8 bg-[#cfa777] text-black text-sm font-semibold rounded-lg">Follow</button>
             <button className="flex-1 h-8 bg-white/10 text-white text-sm font-semibold rounded-lg">Message</button>
             <button className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-lg">
                <div className="rotate-180"><span className="text-xs">▼</span></div>
             </button>
          </div>
       </div>

       {/* Grid Tabs */}
       <div className="flex border-t border-white/10">
          <div className="flex-1 py-2.5 border-b-2 border-white flex justify-center"><Grid3X3 className="w-6 h-6" /></div>
          <div className="flex-1 py-2.5 border-b-2 border-transparent flex justify-center"><Film className="w-6 h-6 text-white/40" /></div>
          <div className="flex-1 py-2.5 border-b-2 border-transparent flex justify-center"><Bookmark className="w-6 h-6 text-white/40" /></div>
       </div>

       {/* 3-column Instagram Grid - all 6 tiles visible */}
       <div className="grid grid-cols-3 gap-[1px]">
          {gridImages.map((post, i) => (
            <div key={i} className="aspect-square bg-[#1a1a1a] relative group overflow-hidden">
               <Image 
                 src={post.src} 
                 alt={`Instagram post ${i + 1}`} 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 768px) 33vw, 200px"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-white text-xs font-semibold">
                     <Heart className="w-4 h-4 fill-white" /> {post.likes}
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
}

function TikTokMobilePanel() {
  const { handle, name, following, followers, likes, videos } = CONFIG.tiktok;
  return (
    <div className="flex flex-col bg-black text-white">
      {/* Top Nav */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
         <div className="w-8" />
         <div className="font-bold text-base flex items-center gap-1">
            {name} <div className="bg-[#cfa777] rounded-full w-3 h-3 flex items-center justify-center text-[8px] text-black">✓</div>
         </div>
         <MoreHorizontal className="w-6 h-6" />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center py-6">
         <div className="relative w-24 h-24 rounded-full border-2 border-white/20 mb-3">
             <Image src="/rob-hero.png" alt={handle} fill className="object-cover object-top rounded-full" />
         </div>
         <div className="text-sm font-bold mb-1">{handle}</div>
         
         <div className="flex items-center gap-6 mt-3 mb-4 text-center">
            <div>
               <div className="font-bold text-lg text-white">{following}</div>
               <div className="text-xs text-white/60">Following</div>
            </div>
            <div>
               <div className="font-bold text-lg text-[#cfa777]">{followers}</div>
               <div className="text-xs text-white/60">Followers</div>
            </div>
            <div>
               <div className="font-bold text-lg text-[#cfa777]">{likes}</div>
               <div className="text-xs text-white/60">Likes</div>
            </div>
         </div>

         <div className="flex gap-2 w-full px-12">
            <button className="flex-1 h-11 bg-[#cfa777] text-black font-bold rounded-sm">Follow</button>
            <button className="w-11 h-11 bg-white/10 flex items-center justify-center rounded-sm"><Share2 className="w-5 h-5" /></button>
         </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
         <div className="flex-1 py-3 text-center text-sm font-semibold border-b-2 border-white">Videos</div>
         <div className="flex-1 py-3 text-center text-sm font-semibold text-white/40 border-b-2 border-transparent">Liked</div>
      </div>

      {/* 3x2 Grid - all 6 tiles visible */}
      <div className="grid grid-cols-3 gap-[1px]">
         {videos.slice(0, 6).map((v, i) => (
           <div key={i} className="aspect-[9/16] bg-[#1a1a1a] relative overflow-hidden">
              <Image 
                src={v.src} 
                alt={`TikTok video ${i + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 150px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              {v.pinned && <div className="absolute top-1 left-1 bg-[#cfa777] text-black text-[8px] px-1 rounded-sm font-bold z-10">Pinned</div>}
              <div className="absolute bottom-1 left-1 flex items-center gap-0.5 text-xs font-medium drop-shadow-md z-10">
                 <Play className="w-3 h-3 fill-white" /> {v.views}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

function SpotifyMobilePanel() {
  const { showTitle, author, rating, ratingCount, category, episodes } = CONFIG.spotify;
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#4a3f35] to-[#121212] text-white">
      {/* Header */}
      <div className="px-4 pt-8 pb-4 flex flex-col items-center shrink-0">
         <div className="w-32 h-32 shadow-xl mb-4 relative rounded-md overflow-hidden">
            <Image 
              src="/game-plan-podcast.png" 
              alt="The Game Plan Podcast cover" 
              fill 
              className="object-cover"
              sizes="128px"
            />
         </div>
         <h2 className="text-2xl font-bold text-center mb-1">{showTitle}</h2>
         <p className="text-[#cfa777] font-semibold text-sm mb-3">Podcast</p>
         
         <div className="flex gap-3 w-full max-w-xs">
            <button className="flex-1 h-10 bg-[#cfa777] rounded-full font-bold text-black hover:scale-105 transition-transform">Resume</button>
            <button className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/10"><Plus className="w-5 h-5" /></button>
            <button className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/10"><Share2 className="w-5 h-5" /></button>
         </div>
      </div>

      {/* Filter Chips */}
      <div className="px-4 py-2 flex gap-2 shrink-0 overflow-x-auto no-scrollbar">
         <div className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium">Episodes</div>
         <div className="px-3 py-1.5 bg-transparent border border-white/20 rounded-full text-xs font-medium">About</div>
         <div className="px-3 py-1.5 bg-transparent border border-white/20 rounded-full text-xs font-medium">More Like This</div>
      </div>

      {/* Episode List */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
         {episodes.slice(0, 4).map((ep, i) => (
           <div key={i} className="mb-4 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                 <h4 className="font-bold text-sm line-clamp-2 leading-snug">{ep.title}</h4>
                 <MoreHorizontal className="w-4 h-4 text-white/50 shrink-0 mt-1" />
              </div>
              <div className="text-xs text-white/60 line-clamp-2 mb-1">
                 {CONFIG.spotify.description}
              </div>
              <div className="flex items-center gap-3 mt-1">
                 <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><Play className="w-3 h-3 fill-black text-black" /></div>
                 <div className="text-[10px] text-white/50 font-medium">
                    {ep.date} • {ep.duration}
                 </div>
              </div>
              <div className="h-[1px] bg-white/10 w-full mt-3" />
           </div>
         ))}
      </div>
    </div>
  );
}

// ============================================================================
// YOUTUBE PANEL - Desktop: grid, Mobile: list feed
// ============================================================================

function YouTubePanel() {
  const { videos, handle, name, subscribers, videoCount } = CONFIG.youtube;
  const displayVideos = videos.slice(0, 8);
  const reducedMotion = useReducedMotion();

  return (
    <div className="h-full flex flex-col bg-[#0f0f0f]">
      {/* Desktop: Compact Header */}
      <div className="hidden lg:flex px-3 py-2.5 items-center gap-3 border-b border-white/5 shrink-0">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
          <Image src="/rob-hero.png" alt={name} fill className="object-cover object-top" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-sm text-white truncate">{name}</h3>
            <VerifiedBadge size="sm" />
          </div>
          <div className="flex items-center gap-1.5 text-white/50 text-[10px]">
            <span className="text-[#cfa777] font-medium">{subscribers}</span>
            <span>•</span>
            <span>{videoCount} videos</span>
          </div>
        </div>
        <button className="h-7 px-3 bg-[#cfa777] text-black text-[10px] font-semibold rounded-full hover:bg-[#d9b15f] transition-all shrink-0">
          Subscribe
        </button>
      </div>

      {/* Mobile: Large Channel Header */}
      <div className="lg:hidden px-4 py-4 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
            <Image src="/rob-hero.png" alt={name} fill className="object-cover object-top" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-white">{name}</h3>
              <VerifiedBadge size="sm" />
            </div>
            <p className="text-white/50 text-xs">{handle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-3">
          <div className="text-center">
            <p className="text-[#cfa777] font-bold text-base">{subscribers}</p>
            <p className="text-white/40 text-[10px]">subscribers</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-base">{videoCount}</p>
            <p className="text-white/40 text-[10px]">videos</p>
          </div>
        </div>
        <p className="text-white/50 text-xs mb-3">Food, Fitness and Business</p>
        <button className="w-full h-9 bg-[#cfa777] text-black text-sm font-semibold rounded-full hover:bg-[#d9b15f] transition-all">
          Subscribe
        </button>
      </div>

      {/* Desktop: Grid layout (8 videos) with hover preview */}
      <div className="hidden lg:block flex-1 overflow-hidden p-3">
        <div className="grid grid-cols-4 gap-3 h-full">
          {displayVideos.map((v, i) => (
            <div key={i} className="group cursor-pointer flex flex-col focus-within:ring-2 focus-within:ring-[#cfa777]/50 rounded-lg" tabIndex={0}>
              <div className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden mb-2 group-hover:ring-1 group-focus-within:ring-1 ring-[#cfa777]/40 transition-all duration-200">
                {/* Thumbnail with Ken Burns hover effect */}
                <Image 
                  src={v.thumbnail} 
                  alt={v.title} 
                  fill 
                  className={cn(
                    "object-cover transition-transform duration-[2000ms] ease-out",
                    !reducedMotion && "group-hover:scale-110 group-focus-within:scale-110"
                  )}
                  sizes="(max-width: 1024px) 50vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-1.5 right-1.5 bg-black/90 px-1 py-0.5 text-[9px] text-white font-medium rounded z-10">{v.duration}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#cfa777] flex items-center justify-center shadow-lg shadow-[#cfa777]/30">
                    <Play className="w-4 h-4 text-black ml-0.5 fill-black" />
                  </div>
                </div>
              </div>
              <h4 className="text-[11px] text-white font-medium leading-tight line-clamp-2 group-hover:text-[#cfa777] group-focus-within:text-[#cfa777] transition-colors">{v.title}</h4>
              <p className="text-[10px] text-white/40 mt-0.5">{v.views} views</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: List feed (exactly 4 videos) - static thumbnails, no hover preview */}
      <div className="lg:hidden flex-1 overflow-hidden">
        <div className="flex flex-col gap-3 p-3">
          {videos.slice(0, 4).map((v, i) => (
            <div key={i} className="cursor-pointer">
              <div className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden mb-2">
                <Image 
                  src={v.thumbnail} 
                  alt={v.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-2 right-2 bg-black/90 px-1.5 py-0.5 text-xs text-white font-medium rounded">{v.duration}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>
              </div>
              <h4 className="text-sm text-white font-medium leading-snug line-clamp-2">{v.title}</h4>
              <p className="text-xs text-white/40 mt-0.5">{v.views} views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// INSTAGRAM PANEL - Desktop: profile+grid, Mobile: 3x2 grid
// ============================================================================

function InstagramPanel() {
  const { handle, name, posts, followers, following, bio, gridImages } = CONFIG.instagram;
  const stats = [
    { value: posts, label: "posts" },
    { value: followers, label: "followers" },
    { value: following, label: "following" },
  ];

  return (
    <div className="flex flex-col bg-[#000000]">
      {/* Top Bar - Compact */}
      <div className="px-3 py-2 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-semibold text-sm">{handle}</span>
          <VerifiedBadge size="sm" />
        </div>
        <div className="flex items-center gap-3">
          <Plus className="w-5 h-5 text-white/70" />
          <MoreHorizontal className="w-5 h-5 text-white/60" />
        </div>
      </div>

      {/* Desktop: Profile Header */}
      <div className="hidden lg:flex px-4 py-3 items-center gap-5 border-b border-white/5 shrink-0">
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#cfa777] via-[#d9b15f] to-[#cfa777]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
              <Image src="/rob-hero.png" alt={handle} fill className="object-cover object-top" />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-6 mb-1.5">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-white font-bold text-sm">{stat.value}</p>
                <p className="text-white/50 text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-[10px] line-clamp-1">{bio.split('\n')[0]}</p>
        </div>
        <button className="h-7 px-4 bg-[#cfa777] text-black text-[10px] font-semibold rounded-md hover:bg-[#d9b15f] transition-all shrink-0">
          Follow
        </button>
      </div>

      {/* Grid Tabs */}
      <div className="flex border-b border-white/10 shrink-0">
        <button className="flex-1 py-2 border-b border-white">
          <Grid3X3 className="w-4 h-4 mx-auto text-white" />
        </button>
        <button className="flex-1 py-2 border-b border-transparent">
          <Film className="w-4 h-4 mx-auto text-white/40" />
        </button>
        <button className="flex-1 py-2 border-b border-transparent">
          <Bookmark className="w-4 h-4 mx-auto text-white/40" />
        </button>
      </div>

      {/* Photo Grid - Desktop: 3 cols with 4:5 aspect, Mobile: 3x2 square */}
      <div>
        {/* Desktop: 4:5 aspect ratio tiles */}
        <div className="hidden lg:grid grid-cols-3 gap-[1px]">
          {gridImages.map((post, i) => (
            <button key={i} className="aspect-[4/5] bg-[#1a1a1a] relative overflow-hidden group">
              <Image 
                src={post.src} 
                alt={`Instagram post ${i + 1}`} 
                fill 
                className="object-cover" 
                sizes="200px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 text-white text-xs font-semibold">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
              </div>
              <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-[#cfa777]/40 transition-all pointer-events-none" />
            </button>
          ))}
        </div>
        {/* Mobile: square tiles */}
        <div className="lg:hidden grid grid-cols-3 gap-[1px]">
          {gridImages.map((post, i) => (
            <button key={i} className="aspect-square bg-[#1a1a1a] relative overflow-hidden group">
              <Image 
                src={post.src} 
                alt={`Instagram post ${i + 1}`} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 33vw, 200px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 text-white text-xs font-semibold">
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
              </div>
              <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-[#cfa777]/40 transition-all pointer-events-none" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TIKTOK PANEL - Desktop: profile+grid, Mobile: 3x2 grid
// ============================================================================

function TikTokPanel() {
  const { handle, name, following, followers, likes, videos } = CONFIG.tiktok;

  return (
    <div className="flex flex-col bg-[#000000]">
      {/* Desktop: Profile Header */}
      <div className="hidden lg:flex px-4 py-3 items-center gap-4 border-b border-white/10 shrink-0">
        <div className="relative w-14 h-14 shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
            <Image src="/rob-hero.png" alt={handle} fill className="object-cover object-top" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <h3 className="text-white font-bold text-sm">{handle}</h3>
            <VerifiedBadge size="sm" />
          </div>
          <div className="flex items-center gap-5 text-[10px]">
            <span><span className="text-white font-bold">{following}</span> <span className="text-white/50">Following</span></span>
            <span><span className="text-[#cfa777] font-bold">{followers}</span> <span className="text-white/50">Followers</span></span>
            <span><span className="text-[#cfa777] font-bold">{likes}</span> <span className="text-white/50">Likes</span></span>
          </div>
        </div>
        <button className="h-7 px-5 bg-[#cfa777] text-black text-[10px] font-bold rounded-sm hover:bg-[#d9b15f] transition-all shrink-0">
          Follow
        </button>
      </div>

      {/* Mobile: Compact header */}
      <div className="lg:hidden px-3 py-2 flex items-center gap-3 border-b border-white/10 shrink-0">
        <div className="relative w-10 h-10 shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
            <Image src="/rob-hero.png" alt={handle} fill className="object-cover object-top" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-white font-bold text-sm">{handle}</h3>
            <VerifiedBadge size="sm" />
          </div>
          <p className="text-[#cfa777] text-[10px] font-medium">{followers} followers</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 shrink-0">
        <button className="flex-1 py-2 text-white text-xs font-semibold border-b border-white">Videos</button>
        <button className="flex-1 py-2 text-white/40 text-xs font-semibold border-b border-transparent">Liked</button>
      </div>

      {/* Video Grid - 9:16 portrait tiles */}
      <div className="p-[1px]">
        <div className="grid grid-cols-3 gap-[1px]">
          {videos.slice(0, 6).map((video, i) => (
            <button key={i} className="aspect-[9/16] bg-[#1a1a1a] relative overflow-hidden group">
              <Image 
                src={video.src} 
                alt={`TikTok video ${i + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 150px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              {video.pinned && (
                <div className="absolute top-1.5 left-1.5 bg-[#cfa777] text-black text-[8px] font-bold px-1.5 py-0.5 rounded-sm z-10">
                  Pinned
                </div>
              )}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 z-10">
                <Play className="w-3 h-3 text-white fill-white" />
                <span className="text-white text-[10px] font-medium">{video.views}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Play className="w-8 h-8 text-white fill-white/90" />
                </div>
              </div>
              <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-[#cfa777]/40 transition-all pointer-events-none" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SPOTIFY PANEL - Compact podcast-style layout
// ============================================================================

function SpotifyPanel() {
  const { showTitle, author, rating, ratingCount, category, episodes } = CONFIG.spotify;

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#1a1510] via-[#0a0a0a] to-[#0a0a0a]">
      {/* Show Header - Compact */}
      <div className="p-4 flex gap-4 border-b border-white/5 shrink-0">
        {/* Cover Art */}
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg shrink-0 shadow-lg shadow-[#cfa777]/20 relative overflow-hidden">
          <Image 
            src="/game-plan-podcast.png" 
            alt="The Game Plan Podcast cover" 
            fill 
            className="object-cover"
            sizes="(max-width: 1024px) 80px, 96px"
          />
        </div>

        {/* Show Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <span className="text-white/50 text-[9px] uppercase tracking-wider mb-0.5">Podcast</span>
          <h2 className="font-bold text-base lg:text-lg text-white mb-1 truncate">{showTitle}</h2>
          <p className="text-[#cfa777] text-xs font-medium mb-2">{author}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="h-5 px-2 bg-[#cfa777]/15 border border-[#cfa777]/30 text-[#cfa777] text-[9px] font-medium rounded-full flex items-center gap-1">
              <span>★</span> {rating}
              <span className="text-[#cfa777]/50">({ratingCount})</span>
            </span>
            <span className="h-5 px-2 bg-white/5 border border-white/10 text-white/50 text-[9px] rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="w-10 h-10 rounded-full bg-[#cfa777] flex items-center justify-center hover:scale-105 hover:bg-[#d9b15f] transition-all shadow-lg shadow-[#cfa777]/30">
            <Play className="w-4 h-4 text-black ml-0.5 fill-black" />
          </button>
          <button className="hidden lg:flex h-7 px-3 border border-white/20 text-white text-[10px] font-medium rounded-full hover:border-[#cfa777]/50 hover:text-[#cfa777] transition-all items-center">
            Follow
          </button>
        </div>
      </div>

      {/* Episode List */}
      <div className="flex-1 overflow-hidden">
        <div className="px-2 py-2">
          {episodes.map((ep, i) => (
            <button key={i} className="w-full flex items-center gap-3 px-2 py-2.5 hover:bg-white/[0.04] rounded-lg transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:bg-[#cfa777]/20 transition-all duration-200">
                <Play className="w-4 h-4 text-[#cfa777] ml-0.5" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-white text-xs font-medium truncate group-hover:text-[#cfa777] transition-colors">
                  #{ep.num}: {ep.title}
                </p>
                <div className="flex items-center gap-2 text-white/40 text-[10px]">
                  <span>{ep.date}</span>
                  <span>•</span>
                  <span>{ep.duration}</span>
                  <span className="hidden lg:inline text-[#cfa777]/50">{ep.plays}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Now Playing Bar - Compact */}
      <div className="p-3 bg-gradient-to-r from-[#181818] to-[#252525] border-t border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md shrink-0 relative overflow-hidden">
            <Image 
              src="/game-plan-podcast.png" 
              alt="The Game Plan Podcast cover" 
              fill 
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[11px] font-medium truncate">Ep. 156: Building a Fitness Empire</p>
            <p className="text-white/40 text-[10px]">{author}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <SkipBack className="w-4 h-4 text-white/40 hidden lg:block" />
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all">
              <Play className="w-3.5 h-3.5 text-black ml-0.5 fill-black" />
            </button>
            <SkipForward className="w-4 h-4 text-white/40 hidden lg:block" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white/30 text-[9px] tabular-nums">24:15</span>
          <div className="flex-1 h-1 bg-white/15 rounded-full overflow-hidden">
            <div className="h-full w-[28%] bg-[#cfa777] rounded-full" />
          </div>
          <span className="text-white/30 text-[9px] tabular-nums">1:24:32</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PLATFORM PANEL - Stable container with fade transition
// ============================================================================

function PlatformPanel({ activeId, isTransitioning }: { activeId: string; isTransitioning: boolean }) {
  const desktopPanels: Record<string, React.ReactNode> = {
    youtube: <YouTubePanel />,
    instagram: <InstagramPanel />,
    tiktok: <TikTokPanel />,
    spotify: <SpotifyPanel />,
  };

  const mobilePanels: Record<string, React.ReactNode> = {
    youtube: <YouTubeMobilePanel />,
    instagram: <InstagramMobilePanel />,
    tiktok: <TikTokMobilePanel />,
    spotify: <SpotifyMobilePanel />,
  };

  return (
    <div className="relative w-full md:h-[clamp(400px,50vh,520px)] lg:h-[clamp(480px,58vh,620px)] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none z-10" />
      
      {/* Desktop View - absolute positioning for fixed height */}
      <div
        className={cn(
          "hidden lg:block absolute inset-0 transition-all duration-[280ms] ease-out motion-reduce:transition-none",
          isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        )}
      >
        {desktopPanels[activeId]}
      </div>
      
      {/* Mobile View - relative positioning for auto height */}
      <div
        className={cn(
          "lg:hidden transition-all duration-[280ms] ease-out motion-reduce:transition-none",
          isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        )}
      >
        {mobilePanels[activeId]}
      </div>
    </div>
  );
}

// ============================================================================
// PLATFORM TICKER - Auto-cycling vertical list
// ============================================================================

interface PlatformTickerProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  isPaused: boolean;
  onPauseChange: (paused: boolean) => void;
}

function PlatformTicker({ activeIndex, onSelect, isPaused, onPauseChange }: PlatformTickerProps) {
  return (
    <div
      className="space-y-1"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocus={() => onPauseChange(true)}
      onBlur={() => onPauseChange(false)}
    >
      {platforms.map((platform, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={platform.id}
            onClick={() => onSelect(index)}
            aria-selected={isActive}
            className={cn(
              "w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-left transition-all duration-200 relative overflow-hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50",
              isActive
                ? "bg-white/[0.03]"
                : "hover:bg-white/[0.02]"
            )}
          >
            {/* Gold indicator bar */}
            <div
              className={cn(
                "w-1 h-8 rounded-full transition-all duration-300 relative z-10",
                isActive ? "bg-[#cfa777]" : "bg-white/10"
              )}
            />
            <div className="flex-1 min-w-0 relative z-10">
              <span
                className={cn(
                  "block font-serif text-lg lg:text-xl transition-colors duration-200",
                  isActive ? "text-[#cfa777]" : "text-white/40 group-hover:text-white/60"
                )}
              >
                {platform.name}
              </span>
              <span
                className={cn(
                  "block text-xs transition-colors duration-200",
                  isActive ? "text-white/50" : "text-white/20"
                )}
              >
                {platform.description}
              </span>
            </div>
            
            {/* Progress Bar (Mobile/Active) */}
            {isActive && !isPaused && (
               <div className="absolute bottom-0 left-0 h-[2px] bg-[#cfa777]/50 w-full origin-left animate-progress" />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ============================================================================
// MAIN SECTION
// ============================================================================

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const reducedMotion = useReducedMotion();

  const activePlatform = platforms[activeIndex];

  const goToIndex = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    
    // No manual pause duration; interaction just resets the cycle naturally via useEffect dependency
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  }, [activeIndex]);

  const nextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % platforms.length;
    goToIndex(nextIndex);
  }, [activeIndex, goToIndex]);

  // Auto-cycle effect
  useEffect(() => {
    if (reducedMotion || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Reset interval whenever activeIndex changes (including manual clicks)
    intervalRef.current = setInterval(nextSlide, AUTO_CYCLE_INTERVAL);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reducedMotion, isPaused, nextSlide]); // nextSlide depends on activeIndex, so this resets on change

  return (
    <section className="bg-[#050505] relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#050505] to-[#080808]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* DESKTOP LAYOUT: 1/3 ticker (left) + 2/3 panel (right) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left: Header + Ticker (col-span-4 ≈ 1/3) */}
          <div className="col-span-4">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#cfa777] uppercase block mb-4">
              Social Proof
            </span>

            <h2 className="font-serif text-3xl xl:text-4xl text-white mb-3 leading-[1.1]">
              Built in public.
            </h2>

            <p className="text-white/50 text-sm leading-relaxed mb-8">
              A decade of documented progress across every major platform.
            </p>

            {/* Ticker */}
            <PlatformTicker
              activeIndex={activeIndex}
              onSelect={(i) => goToIndex(i)}
              isPaused={isPaused}
              onPauseChange={setIsPaused}
            />
          </div>

          {/* Right: Platform Panel (col-span-8 ≈ 2/3) */}
          <div className="col-span-8">
            <PlatformPanel activeId={activePlatform.id} isTransitioning={isTransitioning} />
          </div>
        </div>

        {/* MOBILE/TABLET LAYOUT: Stacked */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="mb-6">
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#cfa777] uppercase block mb-3">
              Social Proof
            </span>

            <h2 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-[1.1]">
              Built in public.
            </h2>

            <p className="text-white/50 text-sm leading-relaxed">
              A decade of documented progress across every major platform.
            </p>
          </div>

          {/* Horizontal pill selector (Ticker) */}
          <div className="flex gap-2 flex-wrap mb-6">
            {platforms.map((platform, index) => {
               const isActive = activeIndex === index;
               return (
                  <button
                    key={platform.id}
                    onClick={() => goToIndex(index)}
                    aria-selected={isActive}
                    className={cn(
                      "h-9 px-4 rounded-full text-sm font-medium transition-all duration-200 relative overflow-hidden",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50",
                      isActive
                        ? "bg-[#cfa777] text-black"
                        : "text-white/60 border border-white/15 hover:border-white/30"
                    )}
                  >
                    <span className="relative z-10">{platform.name}</span>
                    {isActive && !isPaused && (
                       <div className="absolute bottom-0 left-0 h-[3px] bg-black/20 w-full origin-left animate-progress" />
                    )}
                  </button>
               );
            })}
          </div>

          {/* Platform Panel */}
          <PlatformPanel activeId={activePlatform.id} isTransitioning={isTransitioning} />
        </div>
      </div>
    </section>
  );
}
