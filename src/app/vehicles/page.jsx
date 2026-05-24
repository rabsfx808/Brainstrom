"use client";

import React, { useState } from "react";
import { vehicles } from "@/data/vehicles";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const categories = [
  "All",
  "Luxury SUV",
  "Electric",
  "Bus",
  "Sedan",
  "Premium",
];

export default function VehiclesPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = vehicles.filter(
    (v) => categoryFilter === "All" || v.category === categoryFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Vehicles
          </h1>
          <p className="mt-2 text-gray-600">
            Select the perfect vehicle for your Bhutan journey, from luxury SUVs
            to eco-friendly electric options.
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
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <Card
              key={vehicle.id}
              title={vehicle.name}
              price={vehicle.pricePerDay}
              priceSuffix="/day"
              className="h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge label={vehicle.category} variant="default" />
                  <span className="text-sm text-gray-500">
                    {vehicle.capacity} seats
                  </span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {vehicle.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <svg
                        className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No vehicles match the selected category.
          </p>
        )}
      </div>
    </div>
  );
}
