import React from 'react';
import { cn } from "@/lib/utils";

interface PerformanceModuleProps {
  label?: string;
  title: string;
  description?: string;
  outcomeLabel?: string;
  outcomeValue?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function PerformanceModule({
  label,
  title,
  description,
  outcomeLabel,
  outcomeValue,
  action,
  children,
  className
}: PerformanceModuleProps) {
  return (
    <div className={cn(
      "group relative flex flex-col p-8 md:p-10",
      "bg-[var(--panel)] border border-white/5",
      "hover:border-white/10 hover:-translate-y-px",
      "transition-all duration-300 ease-out",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]",
      className
    )}>
      {/* Optional Top Highlight Line - Low Opacity */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5 opacity-50" />
      
      {/* Micro Label */}
      {label && (
        <span className="microtype mb-6 block opacity-70">
          {label}
        </span>
      )}

      {/* Title */}
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-tight">
        {title}
      </h3>

      {/* Description - Short supporting line */}
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
          {description}
        </p>
      )}

      {/* Flexible Content (Bullets, etc) */}
      {children && (
        <div className="mb-8 flex-grow">
          {children}
        </div>
      )}

      {/* Outcome Data Callout */}
      {(outcomeLabel || outcomeValue) && (
        <div className="mt-auto pt-6 border-t border-white/5 mb-8">
          {outcomeLabel && (
            <span className="microtype block mb-2 opacity-60">
              {outcomeLabel}
            </span>
          )}
          {outcomeValue && (
            <p className="font-serif text-lg text-foreground/90 italic">
              {outcomeValue}
            </p>
          )}
        </div>
      )}

      {/* Action */}
      {action && (
        <div className="mt-auto">
          {action}
        </div>
      )}
    </div>
  );
}
