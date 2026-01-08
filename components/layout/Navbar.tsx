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
    <header 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 ease-out rounded-full border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]",
        isScrolled ? "bg-black/60 backdrop-blur-xl py-2" : "bg-black/30 backdrop-blur-md py-3"
      )}
    >
      <nav className="container mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center" aria-label="Primary navigation">
        
        {/* 1. Logo (Larger) */}
        <Link href="/" className="relative block h-12 w-48 opacity-90 hover:opacity-100 transition-opacity duration-300 justify-self-start">
          <Image 
            src="/rob-lipsett-logo.png" 
            alt="Rob Lipsett" 
            fill 
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* 2. Nav Links (Center, Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8 justify-self-center w-full">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group text-[10px] font-medium text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-[#cfa777] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </div>

        {/* 3. CTA + Mobile Toggle (Right) */}
        <div className="justify-self-end flex items-center gap-6">
          <Link 
            href="/programs"
            className="hidden md:inline-flex items-center justify-center h-8 px-6 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#cfa777] hover:bg-[#d9b15f] hover:-translate-y-px text-[#0a0a0a] rounded-full transition-all duration-200"
          >
            Start Training
          </Link>
          
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-8 space-y-8 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg text-white/70 hover:text-white transition-colors uppercase tracking-[0.15em] font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 w-full max-w-xs">
            <Link 
              href="/programs"
              className="flex items-center justify-center h-12 w-full text-xs font-bold uppercase tracking-[0.2em] bg-[#cfa777] text-[#0a0a0a]"
              onClick={() => setIsOpen(false)}
            >
              Start Training
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
