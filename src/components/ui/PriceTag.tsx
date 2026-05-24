import React from "react";

interface PriceTagProps {
  amount: number;
  suffix?: "per person" | "per night" | "per day" | "per couple";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PriceTag({
  amount,
  suffix,
  size = "md",
  className = "",
}: PriceTagProps) {
  const sizeStyles = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className={`font-bold text-primary-800 ${sizeStyles[size]}`}>
        ${amount.toLocaleString()}
      </span>
      {suffix && (
        <span className="text-xs text-gray-500">/{suffix.replace("per ", "")}</span>
      )}
    </div>
  );
}
