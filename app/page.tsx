import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NumbersTicker } from "@/components/sections/NumbersTicker";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { Programs } from "@/components/sections/Programs";
import { Method } from "@/components/sections/Method";
import { Ebooks } from "@/components/sections/Ebooks";
import { Results } from "@/components/sections/Results";
import { Collaborations } from "@/components/sections/Collaborations";
import { Podcast } from "@/components/sections/Podcast";
import { EmailCapture } from "@/components/sections/EmailCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--accent)] selection:text-black">
      <Navbar />
      <Hero />
      <NumbersTicker />
      <SocialProofSection />
      <Programs />
      <Method />
      <Ebooks />
      <Results />
      <Collaborations />
      <Podcast />
      <EmailCapture />
      <Footer />
    </main>
  );
}
