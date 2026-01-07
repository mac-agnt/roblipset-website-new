"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Collaborations() {
  const brands = [
    {
      name: "Alphalete",
      src: "/alphaletelogo.png",
      link: "https://alphaleteathletics.com",
      containerClass: "h-12 w-64 md:h-[4.5rem] md:w-96"
    },
    {
      name: "Fuel Cakes",
      src: "/fuelcakes.png",
      link: "https://fuelcakes.com",
      containerClass: "h-28 w-56 md:h-40 md:w-72"
    },
    {
      name: "Ghost",
      src: "/ghostlogo.png",
      link: "https://www.ghostlifestyle.com",
      containerClass: "h-16 w-64 md:h-[5.5rem] md:w-88"
    }
  ];

  // Duplicate for ticker effect (x4 for safety on wide screens)
  const tickerBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-vignette opacity-30" />
      
      <div className="relative z-10 w-full">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground text-center mb-20">
          Trusted Partners
        </h2>

        <div className="relative w-full overflow-hidden mask-fade-sides">
          <div 
            className="flex w-max items-center gap-12 md:gap-20 animate-ticker hover:[animation-play-state:paused]"
          >
            {tickerBrands.map((brand, index) => (
              <a 
                key={`${brand.name}-${index}`}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center opacity-50 hover:opacity-100 transition-opacity duration-500"
              >
                <div className="h-40 flex items-center justify-center">
                   <div className={`relative ${brand.containerClass} grayscale group-hover:grayscale-0 transition-all duration-500`}>
                     <Image 
                       src={brand.src} 
                       alt={brand.name} 
                       fill 
                       className="object-contain"
                     />
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-ticker {
          animation: ticker 28s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
