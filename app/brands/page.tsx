import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <BrandsHero />
      <BrandList />
      <TransparencyNote />
      <Footer />
    </main>
  );
}

function BrandsHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-background border-b border-white/[0.03]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151515] via-[#050505] to-[#000000] opacity-95" />
        <div className="bg-noise" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
            Trusted Partners.
          </h1>
          <p className="font-sans text-lg text-white/50 max-w-xl mx-auto leading-relaxed text-pretty">
            Aligned with my values. Essential to my routine.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandList() {
  const brands = [
    {
      name: "Alphalete",
      desc: "Premium fitness wear built for performance and lifestyle.",
      link: "https://alphaleteathletics.com",
      cta: "Shop Alphalete",
      logoText: "ALPHALETE"
    },
    {
      name: "Fuel Cakes",
      desc: "Convenient, high-protein mug cakes.",
      link: "https://fuelcakes.com",
      cta: "Explore Fuel Cakes",
      logoText: "FUEL CAKES"
    },
    {
      name: "Ghost",
      desc: "Lifestyle sports nutrition.",
      link: "https://www.ghostlifestyle.com",
      cta: "Shop Ghost",
      logoText: "GHOST"
    }
  ];

  return (
    <section className="bg-background">
      {brands.map((brand, index) => (
        <div key={brand.name} className={`py-32 border-b border-white/[0.03] ${index % 2 === 0 ? 'bg-[#050505]' : 'bg-background'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
              {/* Logo / Brand Visual Placeholder */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <span className="font-serif text-4xl tracking-widest text-white/20 uppercase">{brand.logoText}</span>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
                <h2 className="font-serif text-3xl text-white">{brand.name}</h2>
                <p className="text-white/50 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
                  {brand.desc}
                </p>
                <div className="pt-2">
                  <a 
                    href={brand.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[var(--accent)] hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-medium"
                  >
                    {brand.cta} <ArrowUpRight className="ml-2 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function TransparencyNote() {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
          Transparency: Some partnerships include affiliate codes. My endorsement is always independent.
        </p>
      </div>
    </section>
  );
}
