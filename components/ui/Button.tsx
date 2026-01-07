import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-none font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-[0.25em] uppercase text-[10px] md:text-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:-translate-y-px active:translate-y-0";
    
    const variants = {
      primary: "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)] shadow-none",
      secondary: "bg-[var(--panel)] border border-white/5 text-foreground hover:border-white/10 hover:bg-white/5",
      outline: "bg-transparent border border-white/10 text-foreground hover:border-white/20 hover:bg-white/5",
      ghost: "text-muted-foreground hover:text-foreground bg-transparent p-0 hover:bg-transparent h-auto shadow-none hover:translate-y-0 tracking-[0.2em]",
    };

    const sizes = {
      sm: "h-9 px-5",
      md: "h-11 px-7",
      lg: "h-12 px-9",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          widthClass,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
