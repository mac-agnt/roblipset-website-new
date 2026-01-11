"use client";

import { cn } from "@/lib/utils";

interface ProofTile {
  id: string;
  platform: string;
  stat: string;
  descriptor: string;
  url: string;
  priority: number;
}

const proofTiles: ProofTile[] = [
  { id: "youtube", platform: "YouTube", stat: "492K", descriptor: "Subscribers", url: "https://www.youtube.com/@RobLipsett", priority: 1 },
  { id: "instagram", platform: "Instagram", stat: "685K", descriptor: "Followers", url: "https://www.instagram.com/roblipsett", priority: 2 },
  { id: "tiktok-followers", platform: "TikTok", stat: "40.9K", descriptor: "Followers", url: "https://www.tiktok.com/@roblipsett", priority: 3 },
  { id: "tiktok-likes", platform: "TikTok", stat: "570.5K", descriptor: "Likes", url: "https://www.tiktok.com/@roblipsett", priority: 4 },
  { id: "podcast-rating", platform: "Podcast", stat: "4.9★", descriptor: "Rating (679)", url: "https://open.spotify.com/show/the-game-plan", priority: 5 },
  { id: "podcast-episodes", platform: "Podcast", stat: "Weekly", descriptor: "Episodes", url: "https://open.spotify.com/show/the-game-plan", priority: 6 },
];

function ProofTileCard({ tile }: { tile: ProofTile }) {
  const content = (
    <>
      {/* Subtle corner accent on hover */}
      <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#cfa777]/60" />
        <div className="absolute top-0 right-0 w-[1px] h-4 bg-[#cfa777]/60" />
      </div>

      {/* Platform name */}
      <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-[#cfa777]/60 uppercase mb-2 group-hover:text-[#cfa777]/80 transition-colors duration-200">
        {tile.platform}
      </span>

      {/* Large stat */}
      <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#cfa777] leading-none mb-2 tabular-nums group-hover:text-[#d9b15f] transition-colors duration-200">
        {tile.stat}
      </span>

      {/* Descriptor */}
      <span className="text-[11px] md:text-xs text-white/40 group-hover:text-white/60 transition-colors duration-200">
        {tile.descriptor}
      </span>

      {/* Internal sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm" />
    </>
  );

  return (
    <a
      href={tile.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 md:p-8 lg:p-10",
        "bg-[#0a0a0a] border border-white/[0.08] rounded-sm",
        "transition-all duration-200 motion-reduce:transition-none",
        "hover:-translate-y-1 hover:border-[#cfa777]/25 hover:shadow-[0_12px_32px_rgba(207,167,119,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      )}
    >
      {content}
    </a>
  );
}

export function Collaborations() {
  const mobileTiles = proofTiles.filter(t => t.priority <= 4);

  return (
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#050505] to-[#080808]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.25em] text-[#cfa777] uppercase block mb-3">
            Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            The numbers speak.
          </h2>
        </div>

        {/* Desktop Grid: 3 columns, 2 rows (6 tiles) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {proofTiles.map((tile) => (
            <ProofTileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* Mobile Grid: 1 column, 4 tiles only */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {mobileTiles.map((tile) => (
            <ProofTileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
