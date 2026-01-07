import Link from "next/link";
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const quickLinks = [
    { label: "Coaching", href: "/coaching" },
    { label: "Programs", href: "/programs" },
    { label: "App", href: "/app" },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-12 relative">
      <div className="absolute inset-0 bg-gradient-fade-top opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl text-foreground mb-1 uppercase tracking-widest">Rob Lipsett</h4>
            <p className="text-muted-foreground/60 text-xs tracking-wider">Official Personal Brand</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {quickLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground/40 font-sans uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Rob Lipsett. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
