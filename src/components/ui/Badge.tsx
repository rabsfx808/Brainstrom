import React from "react";

interface BadgeProps {
  label: string;
  variant?: "premium" | "luxury" | "cultural" | "adventure" | "romantic" | "wellness" | "default";
  className?: string;
}

const variantStyles: Record<string, string> = {
  premium: "bg-secondary-100 text-secondary-800 border-secondary-300",
  luxury: "bg-primary-100 text-primary-800 border-primary-300",
  cultural: "bg-blue-100 text-blue-800 border-blue-300",
  adventure: "bg-orange-100 text-orange-800 border-orange-300",
  romantic: "bg-pink-100 text-pink-800 border-pink-300",
  wellness: "bg-accent-100 text-accent-800 border-accent-300",
  default: "bg-gray-100 text-gray-800 border-gray-300",
};

export default function Badge({ label, variant = "default", className = "" }: BadgeProps) {
  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles} ${className}`}
    >
      {label}
    </span>
  );
}
