import React from "react";
import Link from "next/link";
import { tours } from "@/data/tours";
import Badge from "@/components/ui/Badge";
import PriceTag from "@/components/ui/PriceTag";

export function generateStaticParams() {
  return tours.map((t) => ({ id: t.id }));
}

export default function TourDetailPage({ params }) {
  const tour = tours.find((t) => t.id === params.id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Tour not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link
          href="/tours"
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
          Back to Tours
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <Badge
              label={tour.tier}
              variant={tour.tier === "luxury" ? "luxury" : "premium"}
            />
            <Badge label={tour.category} variant="default" />
            <span className="text-sm text-gray-500">
              {tour.duration} days
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{tour.name}</h1>
          <p className="mt-3 text-gray-600 text-lg">{tour.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Itinerary
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="relative pl-6 border-l-2 border-primary-200"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-800 rounded-full" />
                    <h3 className="font-semibold text-gray-900">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {day.description}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {day.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex items-start gap-1"
                        >
                          <span className="text-secondary-500">&#8226;</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Pricing
              </h2>
              <PriceTag
                amount={tour.pricePerPerson}
                suffix="per person"
                size="lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                {tour.duration}-day package
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Inclusions
                </h3>
                <ul className="space-y-1.5">
                  {tour.inclusions.map((inc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
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
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/customize"
                className="mt-6 block w-full text-center bg-primary-800 text-white py-3 rounded-lg font-medium hover:bg-primary-900 transition-colors"
              >
                Customize This Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
