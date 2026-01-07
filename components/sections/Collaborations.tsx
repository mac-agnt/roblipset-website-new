import { ArrowUpRight } from "lucide-react";

export function Collaborations() {
  const brands = [
    {
      name: "Alphalete",
      link: "https://alphaleteathletics.com"
    },
    {
      name: "Fuel Cakes",
      link: "https://fuelcakes.com"
    },
    {
      name: "Ghost",
      link: "https://www.ghostlifestyle.com"
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-vignette opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16">
          Trusted Partners
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">
          {brands.map((brand) => (
            <a 
              key={brand.name}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center opacity-40 hover:opacity-100 transition-opacity duration-500"
            >
              <div className="h-24 flex items-center justify-center">
                 {/* Replaced H3 with a visual placeholder for logo-like feel */}
                 <span className="font-serif text-2xl md:text-4xl text-foreground uppercase tracking-widest">{brand.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
