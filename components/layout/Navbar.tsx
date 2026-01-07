"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/coaching", label: "Coaching" },
  { href: "/programs", label: "Programs" },
  { href: "/app", label: "App" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/90 backdrop-blur-md py-2 border-b border-white/5" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo - Optical Alignment */}
          <Link href="/" className="relative block h-7 w-48 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image 
              src="/logo-wordmark.svg" 
              alt="Rob Lipsett" 
              fill 
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-medium text-foreground/70 hover:text-foreground transition-all duration-300 uppercase tracking-[0.2em] hover:underline hover:decoration-1 hover:underline-offset-8"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <Link 
              href="/programs"
              className="hidden md:inline-flex items-center justify-center h-8 px-5 text-[10px] font-medium uppercase tracking-[0.2em] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black transition-colors duration-300"
            >
              Start Training
            </Link>
            
            <button
              className="md:hidden text-foreground/70 hover:text-foreground transition-colors p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 bg-background/95 backdrop-blur-lg md:hidden transition-all duration-500 ease-in-out overflow-hidden border-b border-white/5",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ top: isScrolled ? "65px" : "81px" }}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.15em]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/programs"
            className="inline-flex items-center justify-center h-10 px-6 text-[11px] font-medium uppercase tracking-[0.15em] bg-[var(--accent)] text-black mt-4 w-full"
            onClick={() => setIsOpen(false)}
          >
            Start Training
          </Link>
        </div>
      </div>
    </nav>
  );
}
