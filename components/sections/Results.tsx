import { Quote } from "lucide-react";

export function Results() {
  const testimonials = [
    {
      name: "David K.",
      result: "Lost 18kg in 16 weeks",
      quote: "The structure I needed to finally break through my plateau. The accountability is unmatched."
    },
    {
      name: "Sarah M.",
      result: "Contest Prep Coach",
      quote: "Rob's approach to prep is science-based and sustainable. I stepped on stage looking my best ever."
    },
    {
      name: "James L.",
      result: "Muscle Gain Phase",
      quote: "I've added significant size while staying lean. The programming adapts to my schedule perfectly."
    }
  ];

  return (
    <section className="py-32 bg-background border-t border-white/[0.03]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white text-center mb-24 text-balance">
          Real People. Real Progress.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group p-10 border border-white/[0.05] hover:border-white/10 transition-colors duration-500 relative flex flex-col">
              <Quote className="w-6 h-6 text-white/10 mb-8" />
              <p className="text-white/80 font-serif text-2xl mb-10 leading-relaxed flex-grow text-pretty">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-white/[0.05]">
                <p className="text-[10px] text-[var(--accent)] uppercase tracking-[0.2em] mb-2">{testimonial.result}</p>
                <p className="text-white/40 text-sm">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
