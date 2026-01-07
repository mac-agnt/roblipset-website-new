import { Button } from "@/components/ui/Button";

export function EmailCapture() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-sweep opacity-10" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Join the Inner Circle
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            No spam. Just value.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-0 border border-white/10 p-1 bg-[var(--panel)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-12 px-6 bg-transparent text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:bg-white/5 transition-colors"
              required
            />
            <Button variant="primary" className="sm:w-auto h-12 px-8">
              Join
            </Button>
          </form>
          
          <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
