"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#mechanism", label: "Why It Works" },
  { href: "#included", label: "What You Get" },
];

export function MentorshipNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const prefersReducedMotion = useReducedMotion();

  // Scroll-aware condensing
  useEffect(() => {
    const handleScroll = () => {
      setIsCondensed(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["mechanism", "included", "apply"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    setIsOpen(false);
  }, [prefersReducedMotion]);

  return (
    <header
      className={cn(
        "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 ease-out rounded-full border border-[#cfa777]/[0.15] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.5)]",
        isCondensed
          ? "bg-black/70 backdrop-blur-2xl py-2 md:py-2"
          : "bg-black/40 backdrop-blur-xl py-3 md:py-3.5"
      )}
    >
      <nav
        className="container mx-auto px-5 md:px-6 grid grid-cols-[auto_1fr_auto] items-center h-full"
        aria-label="Mentorship navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative block h-8 w-32 md:h-10 md:w-40 opacity-90 hover:opacity-100 transition-opacity duration-300 justify-self-start"
        >
          <Image
            src="/rob-lipsett-logo.png"
            alt="Rob Lipsett"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 768px) 128px, 160px"
          />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8 justify-self-center w-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              aria-current={activeSection === link.href ? "true" : undefined}
              className={cn(
                "relative text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-1 py-0.5",
                activeSection === link.href
                  ? "text-[#cfa777]"
                  : "text-white/60 hover:text-white"
              )}
            >
              {link.label}
              {/* Active underline */}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-[#cfa777]"
                initial={false}
                animate={{
                  scaleX: activeSection === link.href ? 1 : 0,
                  opacity: activeSection === link.href ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
            </a>
          ))}
        </div>

        {/* Right: CTA + Mobile Toggle */}
        <div className="justify-self-end flex items-center gap-4">
          <a
            href="#apply"
            onClick={(e) => scrollToSection(e, "#apply")}
            className={cn(
              "hidden md:inline-flex items-center justify-center font-semibold uppercase tracking-[0.15em] bg-[#cfa777] hover:bg-[#d9b88a] text-[#0a0a0a] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(207,167,119,0.2)] hover:shadow-[0_0_30px_rgba(207,167,119,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              isCondensed ? "h-8 px-5 text-[9px]" : "h-9 px-6 text-[10px]"
            )}
          >
            Apply
          </a>

          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-2xl rounded-3xl border border-[#cfa777]/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "text-base uppercase tracking-[0.15em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]/50 rounded px-2 py-1",
                    activeSection === link.href
                      ? "text-[#cfa777]"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 w-full max-w-xs">
                <a
                  href="#apply"
                  onClick={(e) => scrollToSection(e, "#apply")}
                  className="flex items-center justify-center h-12 w-full text-xs font-bold uppercase tracking-[0.2em] bg-[#cfa777] text-[#0a0a0a] rounded-full hover:bg-[#d9b88a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa777]"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
