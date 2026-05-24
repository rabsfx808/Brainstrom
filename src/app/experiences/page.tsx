"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experiences";
import Badge from "@/components/ui/Badge";
import PriceTag from "@/components/ui/PriceTag";

const categories = ["all", "cultural", "romantic", "adventure", "wellness"] as const;

function getPriceTypeSuffix(
  priceType: "per_person" | "per_couple" | "per_day"
): "per person" | "per couple" | "per day" {
  const map: Record<string, "per person" | "per couple" | "per day"> = {
    per_person: "per person",
    per_couple: "per couple",
    per_day: "per day",
  };
  return map[priceType];
}

function getCategoryVariant(
  category: string
): "cultural" | "romantic" | "adventure" | "wellness" | "default" {
  const map: Record<string, "cultural" | "romantic" | "adventure" | "wellness"> = {
    cultural: "cultural",
    romantic: "romantic",
    adventure: "adventure",
    wellness: "wellness",
  };
  return map[category] || "default";
}

export default function ExperiencesPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filtered = experiences.filter(
    (e) => categoryFilter === "all" || e.category === categoryFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Experiences
          </h1>
          <p className="mt-2 text-gray-600">
            Immerse yourself in Bhutan with unique cultural, romantic, adventure,
            and wellness experiences.
          </p>
        </div>

        <div className="mb-6">
          <div className="inline-flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === cat
                    ? "bg-primary-800 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.name}
                  </h3>
                  <Badge
                    label={exp.category}
                    variant={getCategoryVariant(exp.category)}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {exp.description}
                </p>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between flex-wrap gap-2">
                  <PriceTag
                    amount={exp.price}
                    suffix={getPriceTypeSuffix(exp.priceType)}
                    size="sm"
                  />
                  <div className="text-xs text-gray-500 space-x-3">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No experiences match the selected category.
          </p>
        )}
      </div>
    </div>
  );
}
