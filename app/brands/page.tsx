import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
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
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-background border-b border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151515] via-[#050505] to-[#000000] opacity-95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Brands Rob Works With
          </h1>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            I only partner with brands that align with my values and that I use daily as part of my own routine.
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
      desc: "Premium fitness wear built for performance and lifestyle, designed to withstand rigorous training while looking sharp.",
      link: "https://alphaleteathletics.com",
      cta: "Shop with Code ROB",
      logoText: "ALPHALETE"
    },
    {
      name: "Fuel Cakes",
      desc: "Convenient, high-protein mug cakes that provide a nutritious option for satisfying cravings without compromising goals.",
      link: "https://fuelcakes.com",
      cta: "Explore Brand",
      logoText: "FUEL CAKES"
    },
    {
      name: "Ghost",
      desc: "Lifestyle sports nutrition products that deliver transparency in labeling and effective formulas for training support.",
      link: "https://www.ghostlifestyle.com",
      cta: "Shop with Code ROB",
      logoText: "GHOST"
    }
  ];

  return (
    <section className="bg-background">
      {brands.map((brand, index) => (
        <div key={brand.name} className={`py-24 border-b border-white/5 ${index % 2 === 0 ? 'bg-[#050505]' : 'bg-background'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              {/* Logo / Brand Visual Placeholder */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-64 h-32 flex items-center justify-center border border-white/10 bg-white/5">
                  <span className="font-serif text-2xl tracking-widest text-white/80 uppercase">{brand.logoText}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
                <h2 className="font-serif text-3xl text-white">{brand.name}</h2>
                <p className="text-white/60 leading-relaxed text-lg max-w-xl">
                  {brand.desc}
                </p>
                <div className="pt-2">
                  <a 
                    href={brand.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[var(--accent)] hover:text-white transition-colors uppercase tracking-widest text-sm font-medium"
                  >
                    {brand.cta} <ArrowUpRight className="ml-2 w-4 h-4" />
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
    <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/30 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
          Transparency Note: Some partnerships listed on this page may include affiliate codes or links. 
          While I may earn a commission from these, my endorsement is always based on my independent use and belief in the product's quality.
        </p>
      </div>
    </section>
  );
}
