import Image from "next/image";

export function TrustLogos() {
  const brands = [
    { 
      name: "Gymshark", 
      src: "/GymsharkLogo.png",
      className: "h-10 md:h-12 w-auto" 
    },
    { 
      name: "Alphalete", 
      src: "/alphaletelogo.png",
      className: "h-8 md:h-10 w-auto" 
    },
    { 
      name: "Fuel Cakes", 
      src: "/fuelcakes.png",
      className: "h-12 md:h-16 w-auto"
    },
    { 
      name: "Ghost", 
      src: "/ghostlogo.png",
      className: "h-10 md:h-12 w-auto"
    }
  ];

  return (
    <section className="py-10 bg-[#080808] border-b border-white/5 md:hidden">
      <div className="container mx-auto px-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 text-center mb-8">
          Brand Partnerships
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale mix-blend-screen">
          {brands.map((brand) => (
            <div key={brand.name} className="relative flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.name}
                width={200}
                height={100}
                className={`object-contain ${brand.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
