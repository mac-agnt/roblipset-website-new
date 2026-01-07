export function TrustLogos() {
  const brandPartnerships = [
    "Gymshark",
    "MyProtein",
    "Whoop",
    "Fitbit",
    "Alphalete",
    "Ghost"
  ];

  const featuredIn = [
    "Men's Health",
    "GQ",
    "Business Insider",
    "The Irish Times"
  ];

  return (
    <section className="py-16 bg-background border-b border-white/[0.03]">
      <div className="container mx-auto px-4">
        
        {/* Brand Partnerships Row */}
        <div className="mb-12">
          <p className="text-center text-[10px] font-sans text-white/20 uppercase tracking-[0.25em] mb-6">
            Brand Partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 mix-blend-screen">
            {brandPartnerships.map((brand) => (
              <span 
                key={brand} 
                className="text-lg font-serif text-white uppercase tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Featured In Row */}
        <div>
          <p className="text-center text-[10px] font-sans text-white/20 uppercase tracking-[0.25em] mb-6">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 mix-blend-screen">
            {featuredIn.map((media) => (
              <span 
                key={media} 
                className="text-lg font-serif text-white uppercase tracking-widest"
              >
                {media}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
