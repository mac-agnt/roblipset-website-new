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
    <section className="py-20 bg-[#0a0a0a] border-b border-white/[0.03]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale mix-blend-screen">
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
