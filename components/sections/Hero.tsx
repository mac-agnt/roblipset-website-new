"use client";

import Image from "next/image";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";

const HERO_SPONSORS = [
  { src: "/game-plan.png", alt: "Game Plan", width: 360, height: 72 },
  { src: "/alphaletelogo.png", alt: "Alphalete", width: 384, height: 64 },
  { src: "/fuelcakes.png", alt: "Fuel Cakes", width: 168, height: 84 },
  { src: "/ghostlogo.png", alt: "Ghost", width: 256, height: 64 },
] as const;

function HeroSponsorsStrip() {
  const segment = Array.from({ length: 10 }, () => HERO_SPONSORS).flat();

  return (
    <div
      className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-[110px] lg:bottom-[126px] z-[3] w-[110vw] lg:w-[120vw] pointer-events-none"
      aria-hidden="true"
    >
      <div className="-rotate-[8deg] -skew-x-[6deg]">
        <div className="relative h-14 overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md">
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="hero-marquee-track flex w-max h-full items-center gap-12">
            <div className="flex items-center gap-12 px-10">
              {segment.map((sponsor, index) => (
                <div key={`segment-a-${sponsor.alt}-${index}`} className="shrink-0 [transform:skewX(6deg)] opacity-80">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="h-5 lg:h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-12 px-10" aria-hidden="true">
              {segment.map((sponsor, index) => (
                <div key={`segment-b-${sponsor.alt}-${index}`} className="shrink-0 [transform:skewX(6deg)] opacity-80">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="h-5 lg:h-6 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-visible bg-[#080808]">
      {/* ── Layer 0: Animated Background Paths (UNCHANGED) ── */}
      <BackgroundPaths />

      {/* ── Layer 1: Dim overlay for contrast against animation ── */}
      <div className="absolute inset-0 z-[1] bg-black/35 pointer-events-none" />

      {/* ── Layer 2: Giant LIPSETT wordmark ── */}
      <div
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-sans font-black uppercase whitespace-nowrap text-white/25 tracking-[-0.03em] leading-[0.8]"
          style={{
            fontSize: "clamp(64px, 22vw, 430px)",
          }}
        >
          LIPSETT
        </span>
      </div>

      {/* ── Layer 2.5: Tilted sponsors strip (desktop only) ── */}
      <HeroSponsorsStrip />

      {/* ── Layer 3: Rob — centered subject with depth ── */}
      <div className="absolute inset-x-0 bottom-0 z-[4] flex justify-center pointer-events-none">
        <div className="relative h-[62vh] sm:h-[70vh] md:h-[82vh] w-auto">
          <Image
            src="/rob-hero.png"
            alt="Rob Lipsett"
            width={1200}
            height={1800}
            priority
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_60px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-48 md:h-64 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent pointer-events-none" />

      {/* ── Layer 4: Bottom UI ── */}
      <div className="absolute inset-x-0 bottom-0 z-[30] px-5 md:px-8 lg:px-12 pb-24 md:pb-10 pointer-events-none">
        <div className="flex items-end justify-between gap-4">
          <div className="pointer-events-auto">
            <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-1">
              Rob Lipsett
            </p>
            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-white/30 whitespace-nowrap">
              Coach&#8201;·&#8201;Creator&#8201;·&#8201;Athlete
            </p>
            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.06em] text-white/20 mt-1 hidden sm:block">
              Physique. Nutrition. Mindset.
            </p>
          </div>

          <Link
            href="/programs"
            className="pointer-events-auto inline-flex items-center justify-center h-8 md:h-9 px-5 md:px-7 text-[10px] md:text-[11px] font-semibold tracking-[0.03em] bg-[#cfa777] hover:bg-[#d9b15f] text-[#0a0a0a] rounded-full transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Start training
          </Link>
        </div>
      </div>

      {/* ── Mobile Brand Ticker (bottom, preserved) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[20] md:hidden overflow-hidden h-20 bg-gradient-to-t from-[#080808] to-transparent">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent z-20" />
        <div className="flex w-full h-full items-end pb-5 overflow-hidden">
          <div className="flex items-center gap-12 animate-infinite-scroll pl-4 whitespace-nowrap will-change-transform">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 shrink-0">
                <div className="relative h-[36px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/game-plan.png" alt="Game Plan" height={72} width={360} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[32px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/alphaletelogo.png" alt="Alphalete" height={64} width={384} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[42px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/fuelcakes.png" alt="Fuel Cakes" height={84} width={168} className="h-full w-auto object-contain" />
                </div>
                <div className="relative h-[32px] w-auto opacity-50 grayscale mix-blend-screen">
                  <Image src="/ghostlogo.png" alt="Ghost" height={64} width={256} className="h-full w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
