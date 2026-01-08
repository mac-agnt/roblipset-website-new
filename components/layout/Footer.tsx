"use client";

import Link from "next/link";
import { Instagram, Youtube, Twitter, Facebook, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const navLinks = [
    { label: "Coaching", href: "/coaching" },
    { label: "Programs", href: "/programs" },
    { label: "App", href: "/app" },
    { label: "Podcast", href: "/podcast" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/5">
      {/* Grid hint background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* === TOP ROW: Brand + Social === */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-white tracking-wide mb-1">Rob Lipsett</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Official Personal Brand</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors duration-200 group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* === MIDDLE ROW: Navigation Grid === */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-b border-white/5">
          
          {/* Column 1: Navigation */}
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/20 block mb-5">Navigation</span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 relative group inline-block w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#cfa777] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Legal */}
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/20 block mb-5">Legal</span>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 relative group inline-block w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#cfa777] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Signature Info */}
          <div className="space-y-6">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/20 block mb-2">Location</span>
              <p className="text-white/50 text-sm">Online Worldwide</p>
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/20 block mb-2">Focus</span>
              <p className="text-white/50 text-sm">Physique • Nutrition • Mindset</p>
            </div>
          </div>

        </div>

        {/* === BOTTOM ROW: Copyright + Back to Top === */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-[10px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} Rob Lipsett. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}
