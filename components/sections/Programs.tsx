import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const programs = [
  {
    title: "1:1 Online Coaching",
    description: "The ultimate level of accountability. I will personally design your training and nutrition protocols to guarantee results.",
    outcome: "Complete transformation of physique and lifestyle.",
    cta: "Apply for Coaching",
    variant: "primary" as const,
    href: "/coaching"
  },
  {
    title: "The Game Plan App",
    description: "Structured workout programs and nutrition guides you can follow anywhere, anytime.",
    outcome: "Structure and guidance on your terms.",
    cta: "View App Features",
    variant: "outline" as const,
    href: "/app"
  }
];

export function Programs() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            Train with Rob
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
            Structured training with real accountability. Choose the level of support you need to reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.title}
              className="group relative p-10 md:p-14 bg-[#0a0a0a] border border-white/[0.05] hover:border-white/10 transition-colors duration-500 flex flex-col"
            >
              
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {program.title}
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed text-pretty">
                {program.description}
              </p>
              
              <div className="mb-10 flex-grow border-t border-white/[0.05] pt-6">
                <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em] mb-3">Primary Outcome</p>
                <p className="text-white/80 font-serif text-lg italic">{program.outcome}</p>
              </div>

              <Button 
                variant={program.variant}
                fullWidth
              >
                {program.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
