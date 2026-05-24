"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import { hotels } from "@/data/hotels";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import { foodExperiences } from "@/data/food";
import { calculateTotal } from "@/lib/calculator";

const INTERNATIONAL_ROUTES = [
  "Bangkok-Paro",
  "Delhi-Paro",
  "Kathmandu-Paro",
  "Singapore-Paro",
  "Mumbai-Paro",
];

const DOMESTIC_ROUTES = [
  "Paro-Bumthang",
  "Bumthang-Trashigang",
  "Bumthang-Gelephu",
];

export default function CalculatorPage() {
  const [step, setStep] = useState(1);
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(7);
  const [internationalRoute, setInternationalRoute] = useState("");
  const [flightType, setFlightType] = useState("return");
  const [domesticRoutes, setDomesticRoutes] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  const [vehicleDays, setVehicleDays] = useState(7);
  const [hotelId, setHotelId] = useState("");
  const [roomType, setRoomType] = useState("");
  const [hotelNights, setHotelNights] = useState(6);
  const [guideEnabled, setGuideEnabled] = useState(true);
  const [guideDays, setGuideDays] = useState(7);
  const [selectedTours, setSelectedTours] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const getInput = () => ({
    days,
    persons: travelers,
    internationalRoute: internationalRoute || undefined,
    flightType: internationalRoute ? flightType : undefined,
    domesticRoutes: domesticRoutes.length > 0 ? domesticRoutes : undefined,
    vehicleId: vehicleId || undefined,
    vehicleDays: vehicleId ? vehicleDays : undefined,
    hotelId: hotelId || undefined,
    hotelNights: hotelId ? hotelNights : undefined,
    roomType: roomType || undefined,
    guideDays: guideEnabled ? guideDays : undefined,
    tourIds: selectedTours.length > 0 ? selectedTours : undefined,
    experienceIds: selectedExperiences.length > 0 ? selectedExperiences : undefined,
    foodIds: selectedFood.length > 0 ? selectedFood : undefined,
  });

  const breakdown = calculateTotal(getInput());

  const toggleDomesticRoute = (route) => {
    setDomesticRoutes((prev) =>
      prev.includes(route) ? prev.filter((r) => r !== route) : [...prev, route]
    );
  };

  const toggleTour = (id) => {
    setSelectedTours((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const toggleExperience = (id) => {
    setSelectedExperiences((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const toggleFood = (id) => {
    setSelectedFood((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setStep(1);
    setTravelers(2);
    setDays(7);
    setInternationalRoute("");
    setFlightType("return");
    setDomesticRoutes([]);
    setVehicleId("");
    setVehicleDays(7);
    setHotelId("");
    setRoomType("");
    setHotelNights(6);
    setGuideEnabled(true);
    setGuideDays(7);
    setSelectedTours([]);
    setSelectedExperiences([]);
    setSelectedFood([]);
    setShowSummary(false);
  };

  const selectedHotel = hotels.find((h) => h.id === hotelId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tour Cost Calculator</h1>
        <p className="text-gray-600 mb-8">Plan your Bhutan trip budget step by step</p>

        {/* Progress Indicator */}
        <div className="flex items-center mb-8 gap-1">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  s <= step ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {s}
              </div>
              {s < 6 && (
                <div className={`w-8 h-1 ${s < step ? "bg-orange-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {!showSummary ? (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                {/* Step 1: Trip Basics */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Trip Basics</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Travelers
                        </label>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                            className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold"
                          >
                            -
                          </button>
                          <span className="text-2xl font-semibold w-8 text-center">{travelers}</span>
                          <button
                            onClick={() => setTravelers(Math.min(20, travelers + 1))}
                            className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Days of Stay: {days}
                        </label>
                        <input
                          type="range"
                          min={1}
                          max={21}
                          value={days}
                          onChange={(e) => setDays(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>1 day</span>
                          <span>21 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Flights */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Flights</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          International Route
                        </label>
                        <select
                          value={internationalRoute}
                          onChange={(e) => setInternationalRoute(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2"
                        >
                          <option value="">Select route</option>
                          {INTERNATIONAL_ROUTES.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Flight Type</label>
                        <div className="flex gap-4">
                          {(["return", "onward"]).map((t) => (
                            <label key={t} className="flex items-center gap-2">
                              <input
                                type="radio"
                                checked={flightType === t}
                                onChange={() => setFlightType(t)}
                              />
                              <span className="capitalize">{t}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Domestic Flights ($150/person per route)
                        </label>
                        <div className="space-y-2">
                          {DOMESTIC_ROUTES.map((route) => (
                            <label key={route} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={domesticRoutes.includes(route)}
                                onChange={() => toggleDomesticRoute(route)}
                              />
                              <span>{route}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Transport */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Transport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {vehicles.map((v) => (
                        <div
                          key={v.id}
                          onClick={() => setVehicleId(v.id)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                            vehicleId === v.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                        >
                          <h3 className="font-semibold">{v.name}</h3>
                          <p className="text-sm text-gray-500">Capacity: {v.capacity}</p>
                          <p className="text-orange-600 font-medium">${v.pricePerDay}/day</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Days: {vehicleDays}
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={21}
                        value={vehicleDays}
                        onChange={(e) => setVehicleDays(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Accommodation */}
                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Accommodation</h2>
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {hotels.map((h) => (
                        <div
                          key={h.id}
                          onClick={() => { setHotelId(h.id); setRoomType(""); }}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                            hotelId === h.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{h.name}</h3>
                              <p className="text-sm text-gray-500">{h.location}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-yellow-500">{"★".repeat(h.starRating)}</span>
                              <p className="text-orange-600 font-medium">${h.pricePerNight}/night</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedHotel && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                          <select
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                          >
                            <option value="">Default (from ${selectedHotel.pricePerNight}/night)</option>
                            {selectedHotel.roomTypes.map((rt) => (
                              <option key={rt.name} value={rt.name}>
                                {rt.name} - ${rt.price}/night
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nights: {hotelNights}
                          </label>
                          <input
                            type="range"
                            min={1}
                            max={20}
                            value={hotelNights}
                            onChange={(e) => setHotelNights(Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 5: Guide & Services */}
                {step === 5 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Guide & Services</h2>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-700">Licensed Guide ($40/day)</label>
                        <button
                          onClick={() => setGuideEnabled(!guideEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                            guideEnabled ? "bg-orange-600" : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                              guideEnabled ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                      {guideEnabled && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Guide Days: {guideDays}
                          </label>
                          <input
                            type="range"
                            min={1}
                            max={21}
                            value={guideDays}
                            onChange={(e) => setGuideDays(Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 6: Tours & Extras */}
                {step === 6 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Tours & Extras</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Tours</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {tours.map((t) => (
                            <label key={t.id} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedTours.includes(t.id)}
                                onChange={() => toggleTour(t.id)}
                              />
                              <span>{t.name} ({t.duration} days) - ${t.pricePerPerson}/person</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Experiences</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {experiences.map((e) => (
                            <label key={e.id} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedExperiences.includes(e.id)}
                                onChange={() => toggleExperience(e.id)}
                              />
                              <span>{e.name} - ${e.price}/{e.priceType.replace("_", " ")}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Food Experiences</h3>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {foodExperiences.map((f) => (
                            <label key={f.id} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedFood.includes(f.id)}
                                onChange={() => toggleFood(f.id)}
                              />
                              <span>{f.name} - ${f.pricePerPerson}/person</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
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
                      className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowSummary(true)}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      View Summary
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Summary View */
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-semibold mb-6">Itemized Cost Breakdown</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Category</th>
                        <th className="text-left py-2">Item</th>
                        <th className="text-right py-2">Qty</th>
                        <th className="text-right py-2">Unit Price</th>
                        <th className="text-right py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakdown.itemized.map((item, i) => (
                        <tr key={i} className="border-b">
                          <td className="py-2">{item.category}</td>
                          <td className="py-2">{item.item}</td>
                          <td className="text-right py-2">{item.quantity}</td>
                          <td className="text-right py-2">${item.unitPrice}</td>
                          <td className="text-right py-2 font-medium">${item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 font-bold">
                        <td colSpan={4} className="py-3">Grand Total</td>
                        <td className="text-right py-3 text-orange-600 text-lg">
                          ${breakdown.total.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={resetAll}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Start Over
                  </button>
                  <button
                    onClick={() => setShowSummary(false)}
                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                  >
                    Edit Selections
                  </button>
                  <button
                    className="px-6 py-2 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50"
                  >
                    Print
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Running Total Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Running Total</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>SDF</span><span>${breakdown.sdf}</span></div>
                <div className="flex justify-between"><span>Visa</span><span>${breakdown.visaFee}</span></div>
                <div className="flex justify-between"><span>Intl. Flights</span><span>${breakdown.internationalFlights}</span></div>
                <div className="flex justify-between"><span>Domestic Flights</span><span>${breakdown.domesticFlights}</span></div>
                <div className="flex justify-between"><span>Vehicle</span><span>${breakdown.vehicle}</span></div>
                <div className="flex justify-between"><span>Guide</span><span>${breakdown.guide}</span></div>
                <div className="flex justify-between"><span>Hotel</span><span>${breakdown.hotel}</span></div>
                <div className="flex justify-between"><span>Tours</span><span>${breakdown.tours}</span></div>
                <div className="flex justify-between"><span>Experiences</span><span>${breakdown.experiences}</span></div>
                <div className="flex justify-between"><span>Food</span><span>${breakdown.food}</span></div>
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-orange-600">${breakdown.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
