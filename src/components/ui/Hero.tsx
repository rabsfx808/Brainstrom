import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, description, children }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-accent-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-secondary-400 font-medium text-sm md:text-base uppercase tracking-wider mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
