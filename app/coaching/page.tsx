"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <ProductsHero />
      <FuelCakesSection />
      <PartnersSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// ============================================================================
// HERO — Full-bleed background image with Mentorship-style overlay treatment
// ============================================================================

function ProductsHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black flex items-end">
      {/* Background Image with Mentorship-style treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
        
        {/* Hero Image — Anchored lower to preserve head clearance above navbar */}
        <Image 
          src="/AR509616.jpg"
          alt="Rob Lipsett - Products & Partners"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_70%] sm:object-[50%_60%] lg:object-[50%_50%]"
          quality={85}
        />
        
        {/* Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-30" />
        
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Content — Positioned at bottom with safe spacing */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 sm:pb-20 md:pb-28 pt-[40vh] sm:pt-[45vh] md:pt-[50vh]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#cfa777] font-medium">
              Products & Partners
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            What I Use. <br />
            <span className="text-white/40">What I Build.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mb-8">
            Brands I trust. Products I created. Code LIPSETT saves you 10%.
          </p>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
            <div className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10" />
    </section>
  );
}

// ============================================================================
// FUEL CAKES — Flagship Product Card (Founder-Owned)
// ============================================================================

function FuelCakesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cfa777]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#cfa777]/10 border border-[#cfa777]/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#cfa777] font-medium">
              Founder
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Fuel Cakes
          </h2>
        </div>

        {/* Flagship Card */}
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.10] transition-all duration-300">
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cfa777]/30 to-transparent z-10" />
            
            <div className="grid md:grid-cols-2">
              {/* Left: Media — Rob with Fuel Cakes */}
              <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#080808]">
                <Image
                  src="/podcast/fuel-cakes .webp"
                  alt="Rob Lipsett with Fuel Cakes"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay for blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                {/* Logo — Centered & Bigger */}
                <div className="flex justify-center mb-8">
                  <div className="relative h-12 w-36 md:h-16 md:w-48 opacity-70">
                    <Image
                      src="/fuelcakes.png"
                      alt="Fuel Cakes Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 144px, 192px"
                    />
                  </div>
                </div>

                {/* Tagline */}
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">
                  High-protein pancakes.<br />Built for convenience.
                </h3>
                
                <p className="text-white/50 text-base leading-relaxed mb-6 max-w-sm">
                  20g protein per serving. Ready in 3 minutes. No compromise on taste.
                </p>

                {/* Discount Code */}
                <div className="bg-[#cfa777]/[0.08] border border-[#cfa777]/20 rounded-lg p-4 mb-6">
                  <p className="text-[#cfa777] text-sm font-medium">
                    Use code <span className="font-bold">LIPSETT</span> for 10% off
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://fuelcakes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-3 bg-[#cfa777] hover:bg-[#d9b88a] text-black font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-full md:w-auto"
                >
                  Shop Fuel Cakes
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PARTNERS — Ghost & Alphalete (Unified Card System)
// ============================================================================

function PartnersSection() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-y border-white/[0.04]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <p className="text-[#cfa777]/60 text-[10px] tracking-[0.4em] uppercase font-medium max-w-none inline-block">
              Trusted Partners
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
            Brands I Use Daily
          </h2>
        </div>

        {/* Partner Cards — Identical Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Ghost Card */}
          <PartnerCard
            name="Ghost"
            tagline="Supplements that work."
            description="Pre-workout. Protein. Lifestyle supps for people who train."
            image="/podcast/Rop_Lipsett.webp"
            imageAlt="Rob Lipsett using Ghost"
            url="https://ghostlifestyle.com/"
            logo="/ghostlogo.png"
          />

          {/* Alphalete Card */}
          <PartnerCard
            name="Alphalete"
            tagline="Training apparel. No gimmicks."
            description="Functional fit. Clean design. Built for performance."
            image="/lipsett alphalete.jpeg"
            imageAlt="Rob Lipsett wearing Alphalete"
            url="https://alphaleteathletics.com/"
            logo="/alphaletelogo.png"
          />

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PARTNER CARD — Unified Component for Consistent Sizing
// ============================================================================

interface PartnerCardProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  logo?: string;
  useImageAsLogo?: boolean;
}

function PartnerCard({ 
  name, 
  tagline, 
  description, 
  image, 
  imageAlt, 
  url, 
  logo,
  useImageAsLogo 
}: PartnerCardProps) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.10] transition-all duration-300 hover:-translate-y-1">
      {/* Image Container — Fixed Aspect Ratio for Consistency */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
        {useImageAsLogo ? (
          // Logo-only treatment (centered, contained)
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-48 h-20">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                sizes="192px"
              />
            </div>
          </div>
        ) : (
          // Photo treatment (cover, with overlay)
          <>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Logo (if separate from image) */}
        {logo && (
          <div className="relative h-8 w-32 mb-6 opacity-70">
            <Image
              src={logo}
              alt={`${name} Logo`}
              fill
              className="object-contain object-left filter brightness-0 invert"
              sizes="128px"
            />
          </div>
        )}

        {/* Tagline */}
        <h3 className="font-serif text-xl md:text-2xl text-white mb-3 leading-tight">
          {tagline}
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Discount + CTA */}
        <div className="pt-5 border-t border-white/[0.06]">
          <p className="text-white/40 text-sm mb-4">
            Use code <span className="text-[#cfa777] font-semibold">LIPSETT</span> for 10% off
          </p>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 w-full bg-white/[0.06] hover:bg-white/[0.10] text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Shop {name}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FINAL CTA — Premium Offer Module with Copy-to-Clipboard
// ============================================================================

function FinalCTA() {
  const [copied, setCopied] = useState(false);

  const brands = [
    {
      name: "Fuel Cakes",
      logo: "/fuelcakes.png",
      url: "https://fuelcakes.com/",
      invert: false
    },
    {
      name: "Ghost",
      logo: "/ghostlogo.png",
      url: "https://ghostlifestyle.com/",
      invert: true
    },
    {
      name: "Alphalete",
      logo: "/alphaletelogo.png",
      url: "https://alphaleteathletics.com/",
      invert: true
    }
  ];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("LIPSETT");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      // Fallback: select the code text
      const codeElement = document.getElementById("discount-code");
      if (codeElement) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Premium Offer Panel */}
          <div className="relative bg-[#080808] border border-white/[0.08] rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Top inner highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Offer Chip */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#cfa777]/10 border border-[#cfa777]/30 rounded-full text-[10px] uppercase tracking-[0.25em] text-[#cfa777] font-semibold">
                10% OFF
              </span>
            </div>

              {/* Content */}
              <div className="text-center space-y-8 flex flex-col items-center max-w-4xl mx-auto">
              
                {/* Headline */}
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3 tracking-tight leading-tight">
                    Same Brands. Lower Price.
                  </h2>
                  <div>
                    <p className="text-white/40 text-base max-w-none inline-block">
                      Use code LIPSETT for 10% off your order
                    </p>
                  </div>
                </div>

                {/* Code Badge with Copy Button */}
                <div className="flex flex-col items-center gap-6">
                  <div className="relative inline-flex items-center gap-3 bg-[#0a0a0a] border-2 border-[#cfa777]/20 rounded-xl px-6 py-4 md:px-8 md:py-5">
                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-[#cfa777]/5 rounded-xl blur-sm -z-10" />
                    
                    {/* Code Text */}
                    <span 
                      id="discount-code"
                      className="text-[#cfa777] font-bold text-3xl md:text-4xl tracking-[0.15em] font-mono select-all"
                    >
                      LIPSETT
                    </span>
                    
                    {/* Copy Button */}
                    <button
                      onClick={copyCode}
                      className="p-2 hover:bg-white/[0.08] rounded-lg transition-colors duration-150 group"
                      aria-label="Copy discount code"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-[#cfa777]" />
                      ) : (
                        <Copy className="w-5 h-5 text-white/40 group-hover:text-white/60" />
                      )}
                    </button>
                  </div>

                  {/* Copied Feedback */}
                  {copied && (
                    <span className="text-[#cfa777] text-sm font-medium animate-in fade-in duration-150">
                      ✓ Copied to clipboard
                    </span>
                  )}
                </div>

                {/* Brand CTAs — Clear Shopping Buttons */}
                <div className="space-y-6 pt-6 w-full">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 max-w-none inline-block">
                      Shop With Discount
                    </p>
                  </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {brands.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-3 p-6 bg-[#0a0a0a] hover:bg-[#0f0f0f] border border-white/[0.06] hover:border-white/[0.12] rounded-xl transition-all duration-200 hover:-translate-y-1"
                    >
                      {/* Logo */}
                      <div className="relative w-24 h-8">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          fill
                          className={`object-contain transition-opacity duration-200 ${
                            brand.invert 
                              ? 'filter brightness-0 invert opacity-50 group-hover:opacity-80' 
                              : 'opacity-60 group-hover:opacity-90'
                          }`}
                          sizes="96px"
                        />
                      </div>
                      
                      {/* CTA Text */}
                      <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                        Shop {brand.name}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Proof — Small Logo Row */}
              <div className="pt-8 border-t border-white/[0.04]">
                <div className="flex items-center justify-center gap-8 opacity-40">
                  {brands.map((brand) => (
                    <div key={`proof-${brand.name}`} className="relative w-16 h-6">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className={`object-contain ${brand.invert ? 'filter brightness-0 invert' : ''}`}
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
