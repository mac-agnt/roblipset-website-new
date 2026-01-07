"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Clock, Users, Globe, Video, ChevronRight } from "lucide-react";

export function Programs() {
  const [activeTab, setActiveTab] = useState<'coaching' | 'programs'>('coaching');

  const content = {
    coaching: {
      title: "1:1 Online Coaching",
      specs: [
        { icon: Video, label: "Weekly Video Calls" },
        { icon: Clock, label: "Daily Support" },
        { icon: Globe, label: "Custom App" }
      ],
      cta: "Apply for Coaching",
      link: "/coaching"
    },
    programs: {
      title: "Programs + App Access",
      specs: [
        { icon: Users, label: "Community Access" },
        { icon: Clock, label: "Self-Paced" },
        { icon: Globe, label: "Full Library" }
      ],
      cta: "Start Program",
      link: "/programs"
    }
  };

  const schedule = [
    { day: "Mon", date: "08" },
    { day: "Tue", date: "09" },
    { day: "Wed", date: "10" },
    { day: "Thu", date: "11" }
  ];

  return (
    <section className="py-24 md:py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#cfa777] uppercase block mb-6">Train with Rob</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Speak with Rob</h2>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-md mx-auto">
            Pick your level. Book in minutes.
          </p>
        </div>

        {/* === BOOKING HUB === */}
        <div className="grid md:grid-cols-2 bg-[#0e0e0e] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          
          {/* LEFT: VISUAL PANEL */}
          <div className="relative h-[300px] md:h-auto min-h-[450px] border-b md:border-b-0 md:border-r border-white/10 group">
            <Image
              src="/call-image.png"
              alt="Rob Lipsett Coaching"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[#0e0e0e]/20 mix-blend-multiply" />
            <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] pointer-events-none" />
            
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.15em] text-white/80 rounded-full">
                {activeTab === 'coaching' ? 'Private Coaching' : 'App Access'}
              </span>
            </div>
          </div>

          {/* RIGHT: BOOKING UI PANEL */}
          <div className="relative flex flex-col">
            {/* Grid Hint */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* 1. TABS */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab('coaching')}
                className={cn(
                  "flex-1 py-6 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 relative",
                  activeTab === 'coaching' 
                    ? "text-white bg-white/[0.02]" 
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.01]"
                )}
              >
                1:1 Online Coaching
                {activeTab === 'coaching' && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#cfa777] shadow-[0_-1px_8px_rgba(207,167,119,0.3)]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={cn(
                  "flex-1 py-6 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 relative",
                  activeTab === 'programs' 
                    ? "text-white bg-white/[0.02]" 
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.01]"
                )}
              >
                Programs + App
                {activeTab === 'programs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#cfa777] shadow-[0_-1px_8px_rgba(207,167,119,0.3)]" />
                )}
              </button>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-8 flex-1 flex flex-col gap-8">
              
              {/* 2. SPECS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl md:text-2xl text-white">{content[activeTab].title}</h3>
                  <span className="text-xs text-[#cfa777] tracking-wider uppercase opacity-80">Available</span>
                </div>
                
                <div className="flex gap-6 border-b border-white/5 pb-4">
                  {content[activeTab].specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-2 text-white/50">
                      <spec.icon size={14} className="text-[#cfa777]/70" />
                      <span className="text-[10px] uppercase tracking-wide">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. SCHEDULE CHIPS (Simulated Booking) */}
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.1em] block">Select Availability</span>
                
                {/* Morning Row */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-wide mb-1 px-1">
                    <span>Morning</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {schedule.map((slot, i) => (
                      <button 
                        key={`am-${i}`}
                        className={cn(
                          "h-10 border text-[10px] font-medium transition-all duration-200 flex flex-col items-center justify-center rounded-sm",
                          i === 1 && activeTab === 'coaching' // Simulate selected state
                            ? "border-[#cfa777]/50 bg-[#cfa777]/10 text-white" 
                            : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60 hover:bg-white/[0.02]"
                        )}
                      >
                        <span className="opacity-50 text-[8px] uppercase">{slot.day}</span>
                        <span>{slot.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Row */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-wide mb-1 px-1">
                    <span>Afternoon</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {schedule.map((slot, i) => (
                      <button 
                        key={`pm-${i}`}
                        className={cn(
                          "h-10 border text-[10px] font-medium transition-all duration-200 flex flex-col items-center justify-center rounded-sm",
                          i === 2 && activeTab === 'programs' // Simulate selected state
                            ? "border-[#cfa777]/50 bg-[#cfa777]/10 text-white" 
                            : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60 hover:bg-white/[0.02]"
                        )}
                      >
                        <span className="opacity-50 text-[8px] uppercase">{slot.day}</span>
                        <span>{slot.date}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. ACTIONS */}
              <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                <Link 
                  href={content[activeTab].link}
                  className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  View full details
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href={content[activeTab].link}
                  className="inline-flex items-center justify-center h-10 px-8 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#cfa777] hover:bg-[#d9b15f] hover:-translate-y-px text-[#0a0a0a] rounded-sm transition-all duration-200 min-w-[160px]"
                >
                  {content[activeTab].cta}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
