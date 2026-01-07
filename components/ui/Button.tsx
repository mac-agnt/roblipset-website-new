import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-none font-medium transition-colors duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-[0.2em] uppercase text-xs md:text-sm";
    
    const variants = {
      primary: "bg-[var(--accent)] text-black hover:bg-[#c5a028]",
      secondary: "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
      outline: "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5", // Mapping outline to secondary style
      ghost: "text-white/60 hover:text-white bg-transparent p-0 hover:bg-transparent h-auto", // True text link
    };

    const sizes = {
      sm: "h-10 px-6",
      md: "h-12 px-8",
      lg: "h-14 px-10",
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
