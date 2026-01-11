"use client";

import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function VerifiedBadge({ size = "md", className }: VerifiedBadgeProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], "shrink-0", className)}
      aria-label="Verified"
      role="img"
    >
      {/* Spiky/rosette outer shape */}
      <path
        d="M12 2L14.09 4.26L17 3.64L17.18 6.57L19.79 8.12L18.36 10.68L19.79 13.24L17.18 14.79L17 17.72L14.09 17.1L12 19.36L9.91 17.1L7 17.72L6.82 14.79L4.21 13.24L5.64 10.68L4.21 8.12L6.82 6.57L7 3.64L9.91 4.26L12 2Z"
        fill="#cfa777"
        stroke="#b8956a"
        strokeWidth="0.5"
      />
      {/* Check mark */}
      <path
        d="M9 12L11 14L15 10"
        stroke="#0a0a0a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
