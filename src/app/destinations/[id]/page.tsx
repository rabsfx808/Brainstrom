import React from "react";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import PriceTag from "@/components/ui/PriceTag";
import Badge from "@/components/ui/Badge";

export function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }));
}

export default function DzongkhagDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const dzongkhag = destinations.find((d) => d.id === params.id);

  if (!dzongkhag) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Dzongkhag not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/destinations"
          className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-6"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Destinations
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {dzongkhag.name}
          </h1>
          <p className="mt-3 text-gray-600 text-lg">{dzongkhag.description}</p>
        </div>

        <div className="mb-10 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Facts
          </h2>
          <ul className="space-y-2">
            {dzongkhag.facts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-secondary-500 mt-1">&#9679;</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Places to Visit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dzongkhag.places.map((place, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {place.name}
                </h3>
                {place.entryFee !== null ? (
                  <PriceTag amount={place.entryFee} size="sm" />
                ) : (
                  <Badge label="Free" variant="default" />
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3">{place.description}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm text-accent-800 font-medium">
                  Why visit:
                </p>
                <p className="text-sm text-gray-600">{place.whyVisit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
