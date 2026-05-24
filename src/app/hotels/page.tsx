"use client";

import React, { useState } from "react";
import { hotels } from "@/data/hotels";
import StarRating from "@/components/ui/StarRating";
import PriceTag from "@/components/ui/PriceTag";

const starFilters = ["All", "3", "4", "5"] as const;

export default function HotelsPage() {
  const [starFilter, setStarFilter] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = hotels.filter(
    (h) => starFilter === "All" || h.starRating === Number(starFilter)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hotels</h1>
          <p className="mt-2 text-gray-600">
            From cozy 3-star hotels to world-class luxury resorts, find your
            perfect stay in Bhutan.
          </p>
        </div>

        <div className="mb-6">
          <div className="inline-flex gap-2 flex-wrap">
            {starFilters.map((star) => (
              <button
                key={star}
                onClick={() => setStarFilter(star)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  starFilter === star
                    ? "bg-primary-800 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {star === "All" ? "All" : `${star}-Star`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel) => {
            const minPrice = Math.min(...hotel.roomTypes.map((r) => r.price));
            const maxPrice = Math.max(...hotel.roomTypes.map((r) => r.price));
            const isExpanded = expandedId === hotel.id;

            return (
              <div
                key={hotel.id}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {hotel.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={hotel.starRating} />
                    <span className="text-sm text-gray-500">
                      {hotel.location}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">From </span>
                    <PriceTag amount={minPrice} suffix="per night" size="sm" />
                    {minPrice !== maxPrice && (
                      <span className="text-sm text-gray-500">
                        {" "}to ${maxPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {hotel.amenities.slice(0, 5).map((a, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                      >
                        {a}
                      </span>
                    ))}
                    {hotel.amenities.length > 5 && (
                      <span className="text-xs text-gray-500">
                        +{hotel.amenities.length - 5} more
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : hotel.id)
                    }
                    className="text-sm text-primary-700 hover:text-primary-900 font-medium"
                  >
                    {isExpanded
                      ? "Hide room types"
                      : `View ${hotel.roomTypes.length} room types`}
                  </button>
                  {isExpanded && (
                    <div className="mt-3 border-t border-gray-100 pt-3 space-y-2">
                      {hotel.roomTypes.map((room, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-700">{room.name}</span>
                          <span className="font-medium text-primary-800">
                            ${room.price}/night
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No hotels match the selected star rating.
          </p>
        )}
      </div>
    </div>
  );
}
