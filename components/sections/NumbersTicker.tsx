"use client";

// ============================================================================
// NUMBERS TICKER — Single-line horizontal marquee
// Displays: YouTube Subscribers, Instagram Followers, TikTok Followers
// Compact pills, seamless loop, no TikTok likes
// ============================================================================

const STATS = [
  { platform: "YouTube", metric: "Subscribers", value: "492K", color: "#FF0000" },
  { platform: "Instagram", metric: "Followers", value: "686K", color: "#E4405F" },
  { platform: "TikTok", metric: "Followers", value: "40.9K", color: "#00F2EA" },
];

function StatPill({ platform, metric, value, color }: typeof STATS[0]) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 bg-[#0a0a0a] border border-white/[0.08] rounded-full shrink-0">
      {/* Platform indicator dot */}
      <div 
        className="w-2 h-2 rounded-full shrink-0" 
        style={{ backgroundColor: color }}
      />
      
      {/* Stats */}
      <div className="flex items-baseline gap-2">
        <span className="text-white font-bold text-lg md:text-xl tracking-tight">{value}</span>
        <span className="text-white/40 text-xs md:text-sm font-medium">{platform} {metric}</span>
      </div>
    </div>
  );
}

export function NumbersTicker() {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505] border-y border-white/[0.04] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-10 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white">
          Numbers speak for themselves.
        </h2>
      </div>

      {/* Ticker Container */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Ticker Track */}
        <div 
          className="flex w-max will-change-transform motion-safe:animate-ticker-scroll motion-reduce:justify-center"
          aria-label="Social media statistics"
        >
          {/* First set */}
          <div className="flex shrink-0 items-center gap-4 md:gap-6 px-2 md:px-3">
            {STATS.map((stat) => (
              <StatPill key={`set1-${stat.platform}`} {...stat} />
            ))}
          </div>
          
          {/* Second set (duplicate for seamless loop) */}
          <div className="flex shrink-0 items-center gap-4 md:gap-6 px-2 md:px-3 motion-reduce:hidden">
            {STATS.map((stat) => (
              <StatPill key={`set2-${stat.platform}`} {...stat} />
            ))}
          </div>
          
          {/* Third set (for extra smoothness) */}
          <div className="flex shrink-0 items-center gap-4 md:gap-6 px-2 md:px-3 motion-reduce:hidden">
            {STATS.map((stat) => (
              <StatPill key={`set3-${stat.platform}`} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for ticker animation */}
      <style jsx>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        :global(.animate-ticker-scroll) {
          animation: ticker-scroll 20s linear infinite;
        }
        :global(.animate-ticker-scroll:hover) {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          :global(.animate-ticker-scroll) {
            animation: ticker-scroll 15s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.animate-ticker-scroll) {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
