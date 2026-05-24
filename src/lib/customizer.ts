import { tours, Tour } from "@/data/tours";
import { hotels, Hotel } from "@/data/hotels";
import { vehicles, Vehicle } from "@/data/vehicles";
import { experiences, Experience } from "@/data/experiences";
import { foodExperiences, FoodExperience } from "@/data/food";

export interface CustomerPreferences {
  budget: "moderate" | "premium" | "luxury";
  tripType:
    | "honeymoon"
    | "anniversary"
    | "cultural"
    | "adventure"
    | "wellness"
    | "festival";
  duration: number;
  interests: (
    | "monasteries"
    | "nature"
    | "food"
    | "wellness"
    | "adventure"
    | "romance"
    | "photography"
    | "history"
  )[];
  groupSize: number;
  specialRequests?: string;
}

export interface RecommendedPackage {
  matchScore: number;
  tour: Tour;
  hotel: Hotel;
  vehicle: Vehicle;
  experiences: Experience[];
  food: FoodExperience[];
  estimatedTotal: number;
  breakdown: { category: string; amount: number }[];
}

const INTEREST_TO_EXPERIENCE_CATEGORY: Record<string, string[]> = {
  monasteries: ["cultural"],
  nature: ["adventure"],
  food: ["cultural"],
  wellness: ["wellness"],
  adventure: ["adventure"],
  romance: ["romantic"],
  photography: ["cultural"],
  history: ["cultural"],
};

const TRIP_TYPE_TO_FOOD: Record<string, string[]> = {
  honeymoon: ["candlelight-dinner", "riverside-picnic", "royal-feast"],
  anniversary: ["candlelight-dinner", "royal-feast", "hot-stone-bath-dinner"],
  cultural: [
    "traditional-set-menu",
    "cooking-class",
    "monastery-tea-ceremony",
  ],
  adventure: ["farm-to-table", "riverside-picnic", "traditional-set-menu"],
  wellness: [
    "hot-stone-bath-dinner",
    "farm-to-table",
    "monastery-tea-ceremony",
  ],
  festival: ["royal-feast", "traditional-set-menu", "cooking-class"],
};

function getBudgetTier(budget: string): "premium" | "luxury" {
  if (budget === "luxury") return "luxury";
  return "premium";
}

function getHotelStarRating(budget: string): number {
  if (budget === "moderate") return 3;
  if (budget === "premium") return 4;
  return 5;
}

function selectVehicleByGroupSize(groupSize: number): Vehicle | undefined {
  if (groupSize <= 2) {
    return vehicles.find((v) => v.type === "Sedan");
  } else if (groupSize <= 4) {
    return vehicles.find((v) => v.type === "SUV");
  } else {
    // For groups 5+, find vehicles with sufficient capacity, sorted by
    // smallest sufficient capacity first (to avoid oversizing), with a
    // secondary preference for premium/luxury categories over bus
    const suitable = vehicles
      .filter((v) => v.capacity >= groupSize)
      .sort((a, b) => {
        // Sort by capacity ascending (smallest sufficient vehicle first)
        if (a.capacity !== b.capacity) return a.capacity - b.capacity;
        // Secondary: prefer Luxury SUV / Premium over Bus
        const categoryPriority = (cat: string) => {
          if (cat === "Premium" || cat === "Luxury SUV") return 0;
          return 1;
        };
        return categoryPriority(a.category) - categoryPriority(b.category);
      });
    return suitable.length > 0 ? suitable[0] : vehicles.find((v) => v.type === "Coach" || v.type === "Mini Bus");
  }
}

function scoreTour(
  tour: Tour,
  preferences: CustomerPreferences
): number {
  let score = 0;

  // Category match to tripType: exact match = 40 points
  if (tour.category === preferences.tripType) {
    score += 40;
  }

  // Duration proximity scoring
  const durationDiff = Math.abs(tour.duration - preferences.duration);
  if (durationDiff <= 1) {
    score += 30;
  } else if (durationDiff <= 2) {
    score += 20;
  } else if (durationDiff <= 3) {
    score += 10;
  }

  // Tier match (bonus for matching tier)
  const expectedTier = getBudgetTier(preferences.budget);
  if (tour.tier === expectedTier) {
    score += 30;
  }

  return Math.min(score, 100);
}

function matchExperiences(
  interests: string[]
): Experience[] {
  const matchedCategories = new Set<string>();
  interests.forEach((interest) => {
    const categories = INTEREST_TO_EXPERIENCE_CATEGORY[interest];
    if (categories) {
      categories.forEach((cat) => matchedCategories.add(cat));
    }
  });

  return experiences.filter((exp) => matchedCategories.has(exp.category));
}

function matchFood(tripType: string): FoodExperience[] {
  const foodIds = TRIP_TYPE_TO_FOOD[tripType] || [];
  return foodExperiences.filter((f) => foodIds.includes(f.id));
}

export function getRecommendations(
  preferences: CustomerPreferences
): RecommendedPackage[] {
  const tier = getBudgetTier(preferences.budget);
  const starRating = getHotelStarRating(preferences.budget);

  // Filter tours by tier
  let tieredTours = tours.filter((t) => t.tier === tier);

  // For moderate budget, apply a price ceiling to filter out expensive premium tours
  if (preferences.budget === "moderate") {
    tieredTours = tieredTours.filter((t) => t.pricePerPerson <= 3000);
  }

  // Score each tour
  const scoredTours = tieredTours.map((tour) => ({
    tour,
    score: scoreTour(tour, preferences),
  }));

  // Sort by score descending
  scoredTours.sort((a, b) => b.score - a.score);

  // Select hotel by star rating, preferring location match to tour's first destination
  const matchingHotels = hotels.filter((h) => h.starRating === starRating);

  // Select vehicle by group size
  const selectedVehicle =
    selectVehicleByGroupSize(preferences.groupSize) || vehicles[0];

  // Match experiences to interests
  const matchedExperiences = matchExperiences(preferences.interests);

  // Match food to trip type
  const matchedFood = matchFood(preferences.tripType);

  // SDF and visa constants
  const SDF_RATE = 200;
  const VISA_FEE = 40;

  // Build top 3 packages
  const topTours = scoredTours.slice(0, 3);

  return topTours.map(({ tour, score }) => {
    // Try to match hotel location to first destination in tour itinerary
    let selectedHotel = matchingHotels[0] || hotels[0];
    if (tour.itinerary && tour.itinerary.length > 0) {
      const firstDayTitle = tour.itinerary[0].title.toLowerCase();
      const locationMatch = matchingHotels.find((h) =>
        firstDayTitle.includes(h.location.toLowerCase())
      );
      if (locationMatch) {
        selectedHotel = locationMatch;
      }
    }

    const tourCost = tour.pricePerPerson * preferences.groupSize;
    const hotelCost = selectedHotel.pricePerNight * (tour.duration - 1);
    const vehicleCost = selectedVehicle.pricePerDay * tour.duration;
    const experiencesCost = matchedExperiences.reduce(
      (sum, exp) => sum + exp.price,
      0
    ) * preferences.groupSize;
    const foodCost = matchedFood.reduce(
      (sum, f) => sum + f.pricePerPerson,
      0
    ) * preferences.groupSize;
    const sdfCost = SDF_RATE * tour.duration * preferences.groupSize;
    const visaCost = VISA_FEE * preferences.groupSize;

    const estimatedTotal =
      tourCost + hotelCost + vehicleCost + experiencesCost + foodCost + sdfCost + visaCost;

    const breakdown = [
      { category: "Tour Package", amount: tourCost },
      { category: "Sustainable Development Fee", amount: sdfCost },
      { category: "Visa Fee", amount: visaCost },
      { category: "Accommodation", amount: hotelCost },
      { category: "Vehicle", amount: vehicleCost },
      { category: "Experiences", amount: experiencesCost },
      { category: "Food", amount: foodCost },
    ];

    return {
      matchScore: score,
      tour,
      hotel: selectedHotel,
      vehicle: selectedVehicle,
      experiences: matchedExperiences,
      food: matchedFood,
      estimatedTotal,
      breakdown,
    };
  });
}
