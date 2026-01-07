import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { Programs } from "@/components/sections/Programs";
import { Method } from "@/components/sections/Method";
import { Results } from "@/components/sections/Results";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Collaborations } from "@/components/sections/Collaborations";
import { Podcast } from "@/components/sections/Podcast";
import { EmailCapture } from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Programs />
      <Method />
      <Results />
      <AppShowcase />
      <Collaborations />
      <Podcast />
      <EmailCapture />
      <Footer />
    </main>
  );
}
