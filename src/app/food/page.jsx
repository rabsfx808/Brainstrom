import React from "react";
import { foodExperiences } from "@/data/food";
import PriceTag from "@/components/ui/PriceTag";

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Food Experiences
          </h1>
          <p className="mt-2 text-gray-600">
            Savor the authentic flavors of Bhutan with our curated dining
            experiences, from traditional meals to exclusive private dinners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodExperiences.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {food.name}
                  </h3>
                  <PriceTag
                    amount={food.pricePerPerson}
                    suffix="per person"
                    size="sm"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {food.description}
                </p>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                    Menu
                  </p>
                  <ul className="text-sm text-gray-600 space-y-0.5">
                    {food.menu.map((item, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-secondary-500">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {food.duration}
                  </span>
                  <span className="inline-block bg-accent-50 text-accent-800 text-xs px-2 py-0.5 rounded">
                    {food.dietaryNotes.split(".")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
