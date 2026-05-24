"use client";

import React, { useState } from "react";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Card from "@/components/ui/Card";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Destinations
          </h1>
          <p className="mt-2 text-gray-600">
            Explore all 20 Dzongkhags of Bhutan and discover their unique places
            and cultural treasures.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Dzongkhags by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dzongkhag) => (
            <Link key={dzongkhag.id} href={`/destinations/${dzongkhag.id}`}>
              <Card
                title={dzongkhag.name}
                description={dzongkhag.description}
                className="h-full cursor-pointer"
              >
                <div className="flex items-center text-sm text-accent-700">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {dzongkhag.places.length} places to visit
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No Dzongkhags found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
