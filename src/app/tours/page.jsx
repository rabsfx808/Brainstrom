"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tours } from "@/data/tours";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const tiers = ["all", "premium", "luxury"];
const categories = [
  "all",
  "honeymoon",
  "anniversary",
  "cultural",
  "adventure",
  "festival",
];

export default function ToursPage() {
  const [tierFilter, setTierFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filtered = tours.filter((tour) => {
    const matchesTier = tierFilter === "all" || tour.tier === tierFilter;
    const matchesCategory =
      categoryFilter === "all" || tour.category === categoryFilter;
    return matchesTier && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tours & Packages
          </h1>
          <p className="mt-2 text-gray-600">
            Choose from our curated collection of premium and luxury Bhutan tour
            packages.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-700 mr-3">
              Tier:
            </span>
            <div className="inline-flex gap-2 flex-wrap">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tier)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    tierFilter === tier
                      ? "bg-primary-800 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 mr-3">
              Category:
            </span>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`}>
              <Card
                title={tour.name}
                description={tour.description}
                price={tour.pricePerPerson}
                priceSuffix="/person"
                className="h-full cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      label={tour.tier}
                      variant={tour.tier === "luxury" ? "luxury" : "premium"}
                    />
                    <Badge label={tour.category} variant="default" />
                    <span className="text-sm text-gray-500">
                      {tour.duration} days
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">
                      Highlights:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      {tour.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-secondary-500">&#8226;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No tours match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
