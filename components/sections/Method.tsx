import { Button } from "@/components/ui/Button";

export function Method() {
  const pillars = [
    {
      title: "Physique",
      description: "Training shouldn't be a chore. I build programs that focus on progressive overload, proper form, and sustainability.",
      bullets: ["Structured progression", "Hypertrophy focus", "Sustainable routine"],
      cta: "Learn More"
    },
    {
      title: "Nutrition",
      description: "No more restrictive diets. Learn how to fuel your body for performance while still enjoying the foods you love.",
      bullets: ["Macro-based flexibility", "Performance fueling", "No restriction"],
      cta: "Learn More"
    },
    {
      title: "Mindset",
      description: "A strong body starts with a strong mind. We work on building the discipline and resilience needed to smash your goals.",
      bullets: ["Discipline building", "Goal clarity", "Mental resilience"],
      cta: "Learn More"
    }
  ];

  return (
    <section className="py-32 bg-background border-t border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            The Lipsett Method
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
             A holistic approach to transformation that goes beyond the gym floor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="group flex flex-col items-center text-center border-t border-white/[0.05] pt-10 hover:border-white/20 transition-colors duration-500">
              <span className="text-[var(--accent)] text-[10px] font-medium tracking-[0.25em] mb-8 block uppercase">
                0{index + 1}
              </span>
              <h3 className="font-serif text-3xl text-white mb-6">
                {pillar.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-10 flex-grow text-pretty">
                {pillar.description}
              </p>
              
              <ul className="mb-10 space-y-3 text-xs md:text-sm text-white/40 tracking-wide uppercase">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <Button variant="ghost">
                {pillar.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
