"use client";

import { useState } from "react";
import { getRecommendations } from "@/lib/customizer";

const TRIP_TYPES = [
  { id: "honeymoon", label: "Honeymoon", icon: "\u2665", color: "text-red-500" },
  { id: "anniversary", label: "Anniversary", icon: "\u25CB", color: "text-yellow-500" },
  { id: "cultural", label: "Cultural", icon: "\u26E9", color: "text-blue-500" },
  { id: "adventure", label: "Adventure", icon: "\u26F0", color: "text-green-500" },
  { id: "wellness", label: "Wellness", icon: "\u2698", color: "text-purple-500" },
  { id: "festival", label: "Festival", icon: "\u265B", color: "text-orange-500" },
];

const INTERESTS = [
  { id: "monasteries", label: "Monasteries" },
  { id: "nature", label: "Nature" },
  { id: "food", label: "Food & Cuisine" },
  { id: "wellness", label: "Wellness & Spa" },
  { id: "adventure", label: "Adventure & Sports" },
  { id: "romance", label: "Romance" },
  { id: "photography", label: "Photography" },
  { id: "history", label: "History & Culture" },
];


export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState("honeymoon");
  const [budget, setBudget] = useState("premium");
  const [duration, setDuration] = useState(7);
  const [interests, setInterests] = useState([]);
  const [groupSize, setGroupSize] = useState(2);
  const [specialRequests, setSpecialRequests] = useState("");
  const [results, setResults] = useState(null);

  const toggleInterest = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const generateResults = () => {
    const preferences = {
      budget,
      tripType,
      duration,
      interests,
      groupSize,
      specialRequests: specialRequests || undefined,
    };
    const recs = getRecommendations(preferences);
    setResults(recs);
  };

  const resetAll = () => {
    setStep(1);
    setTripType("honeymoon");
    setBudget("premium");
    setDuration(7);
    setInterests([]);
    setGroupSize(2);
    setSpecialRequests("");
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Package Customizer</h1>
        <p className="text-gray-600 mb-8">Tell us about your dream Bhutan trip and we will find the perfect match</p>

        {/* Progress */}
        {!results && (
          <div className="flex items-center mb-8 gap-1">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    s <= step ? "bg-red-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 6 && (
                  <div className={`w-8 h-1 ${s < step ? "bg-red-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        )}

        {!results ? (
          <div className="bg-white rounded-xl shadow-sm border p-6">
            {/* Step 1: Occasion */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">What is your occasion?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {TRIP_TYPES.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setTripType(t.id)}
                      className={`p-6 border-2 rounded-xl cursor-pointer text-center transition ${
                        tripType === t.id
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <span className={`text-3xl ${t.color}`}>{t.icon}</span>
                      <p className="mt-2 font-medium">{t.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">What is your budget level?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    onClick={() => setBudget("moderate")}
                    className={`p-6 border-2 rounded-xl cursor-pointer text-center transition ${
                      budget === "moderate"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <p className="text-xl font-bold text-green-700">Moderate</p>
                    <p className="text-sm text-gray-600 mt-1">Essential Bhutan</p>
                    <p className="text-sm text-gray-500 mt-2">$2,000 - $3,000/person</p>
                  </div>
                  <div
                    onClick={() => setBudget("premium")}
                    className={`p-6 border-2 rounded-xl cursor-pointer text-center transition ${
                      budget === "premium"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-200 hover:border-yellow-300"
                    }`}
                  >
                    <p className="text-xl font-bold text-yellow-700">Premium</p>
                    <p className="text-sm text-gray-600 mt-1">Comfortable & Authentic</p>
                    <p className="text-sm text-gray-500 mt-2">$2,500 - $3,500/person</p>
                  </div>
                  <div
                    onClick={() => setBudget("luxury")}
                    className={`p-6 border-2 rounded-xl cursor-pointer text-center transition ${
                      budget === "luxury"
                        ? "border-red-700 bg-red-50"
                        : "border-gray-200 hover:border-red-300"
                    }`}
                  >
                    <p className="text-xl font-bold text-red-800">Luxury</p>
                    <p className="text-sm text-gray-600 mt-1">Exclusive & Extraordinary</p>
                    <p className="text-sm text-gray-500 mt-2">$6,000 - $8,000/person</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Duration */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">How many days?</h2>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-red-600">{duration}</span>
                  <span className="text-2xl text-gray-500 ml-2">days</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={21}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>3 days</span>
                  <span>21 days</span>
                </div>
              </div>
            )}

            {/* Step 4: Interests */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">What interests you? (select multiple)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {INTERESTS.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleInterest(item.id)}
                      className={`p-4 border-2 rounded-xl cursor-pointer text-center transition ${
                        interests.includes(item.id)
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <p className="font-medium text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Group Size */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Group Size</h2>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    className="w-12 h-12 rounded-full bg-red-100 text-red-700 text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-5xl font-bold text-gray-800">{groupSize}</span>
                  <button
                    onClick={() => setGroupSize(Math.min(20, groupSize + 1))}
                    className="w-12 h-12 rounded-full bg-red-100 text-red-700 text-xl font-bold"
                  >
                    +
                  </button>
                </div>
                <p className="text-center text-gray-500 mt-4">
                  {groupSize === 1 ? "Solo traveler" : `${groupSize} people`}
                </p>
              </div>
            )}

            {/* Step 6: Special Requests */}
            {step === 6 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Any special requests?</h2>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Tell us about any special needs, dietary requirements, mobility concerns, or other requests..."
                  className="w-full border rounded-xl px-4 py-3 h-40 resize-none"
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6 py-2 border border-gray-300 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              {step < 6 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={generateResults}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Get Recommendations
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Recommended Packages</h2>
              <button
                onClick={resetAll}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Refine Preferences
              </button>
            </div>

            {results.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{pkg.tour.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.tour.duration} days - {pkg.tour.tier} tier</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.matchScore}% match
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{pkg.tour.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Recommended Hotel</h4>
                    <p className="text-sm">{pkg.hotel.name} - {pkg.hotel.location}</p>
                    <p className="text-sm text-gray-500">{"★".repeat(pkg.hotel.starRating)} - ${pkg.hotel.pricePerNight}/night</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Recommended Vehicle</h4>
                    <p className="text-sm">{pkg.vehicle.name}</p>
                    <p className="text-sm text-gray-500">{pkg.vehicle.category} - ${pkg.vehicle.pricePerDay}/day</p>
                  </div>
                </div>

                {pkg.experiences.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Suggested Experiences</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.experiences.map((exp) => (
                        <span key={exp.id} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {exp.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {pkg.food.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Suggested Food Experiences</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.food.map((f) => (
                        <span key={f.id} className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">
                          {f.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Cost Breakdown</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                    {pkg.breakdown.map((b) => (
                      <div key={b.category} className="text-center p-2 bg-gray-50 rounded">
                        <p className="text-gray-500 text-xs">{b.category}</p>
                        <p className="font-medium">${b.amount.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-right">
                    <span className="text-lg font-bold text-red-600">
                      Estimated Total: ${pkg.estimatedTotal.toLocaleString()}/person
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={`/tours/${pkg.tour.id}`}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                  >
                    View Full Itinerary
                  </a>
                  <a
                    href="/calculator"
                    className="px-4 py-2 border border-red-300 text-red-700 rounded-lg text-sm hover:bg-red-50"
                  >
                    Calculate Exact Cost
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
