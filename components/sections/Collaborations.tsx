import { ArrowUpRight } from "lucide-react";

export function Collaborations() {
  const brands = [
    {
      name: "Alphalete",
      description: "Premium fitness wear built for performance and lifestyle.",
      link: "https://alphaleteathletics.com"
    },
    {
      name: "Fuel Cakes",
      description: "High protein mug cakes ready in minutes.",
      link: "https://fuelcakes.com"
    },
    {
      name: "Ghost",
      description: "Lifestyle sports nutrition products.",
      link: "https://www.ghostlifestyle.com"
    }
  ];

  return (
    <section className="py-24 bg-background border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-16">
          Brands Rob Works With
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <a 
              key={brand.name}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 p-10 border border-white/5 hover:border-[var(--accent)] transition-all duration-300 flex flex-col items-center text-center"
            >
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                {brand.name}
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                {brand.description}
              </p>
              <span className="inline-flex items-center text-xs font-medium text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                Explore Brand <ArrowUpRight className="ml-2 w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
