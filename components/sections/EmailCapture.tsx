import { Button } from "@/components/ui/Button";

export function EmailCapture() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Stay in the Loop
          </h2>
          <p className="text-white/60">
            Training updates, drops & offers directly to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors rounded-none"
              required
            />
            <Button variant="primary" className="sm:w-auto">
              Join the List
            </Button>
          </form>
          
          <p className="text-xs text-white/20">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
