import { Button } from "@/components/ui/Button";
import { PerformanceModule } from "@/components/ui/PerformanceModule";

const programs = [
  {
    label: "MODULE 01",
    title: "1:1 Online Coaching",
    description: "The ultimate level of accountability. I will personally design your training and nutrition protocols to guarantee results.",
    outcome: "Complete transformation of physique and lifestyle.",
    cta: "Apply for Coaching",
    variant: "primary" as const,
    href: "/coaching"
  },
  {
    label: "MODULE 02",
    title: "The Game Plan App",
    description: "Structured workout programs and nutrition guides you can follow anywhere, anytime.",
    outcome: "Structure and guidance on your terms.",
    cta: "View App Features",
    variant: "ghost" as const,
    href: "/app"
  }
];

export function Programs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-spotlight opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Train with Rob
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed text-balance">
            Structured training with real accountability. Choose the level of support you need to reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <PerformanceModule
              key={program.title}
              label={program.label}
              title={program.title}
              description={program.description}
              outcomeLabel="Primary Outcome"
              outcomeValue={program.outcome}
              action={
                <Button 
                  variant={program.variant}
                  fullWidth={program.variant === 'primary'}
                  className={program.variant === 'ghost' ? "pl-0 justify-start hover:bg-transparent hover:text-[var(--accent)]" : ""}
                >
                  {program.cta}
                </Button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
