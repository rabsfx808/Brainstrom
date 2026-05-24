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
  } else if (groupSize <= 8) {
    return vehicles.find(
      (v) => v.category === "Premium" || v.category === "Luxury SUV"
    );
  } else {
    return vehicles.find(
      (v) => v.type === "Coach" || v.type === "Mini Bus"
    );
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
  const tieredTours = tours.filter((t) => t.tier === tier);

  // Score each tour
  const scoredTours = tieredTours.map((tour) => ({
    tour,
    score: scoreTour(tour, preferences),
  }));

  // Sort by score descending
  scoredTours.sort((a, b) => b.score - a.score);

  // Select hotel by star rating
  const matchingHotels = hotels.filter((h) => h.starRating === starRating);
  const selectedHotel =
    matchingHotels.length > 0 ? matchingHotels[0] : hotels[0];

  // Select vehicle by group size
  const selectedVehicle =
    selectVehicleByGroupSize(preferences.groupSize) || vehicles[0];

  // Match experiences to interests
  const matchedExperiences = matchExperiences(preferences.interests);

  // Match food to trip type
  const matchedFood = matchFood(preferences.tripType);

  // Build top 3 packages
  const topTours = scoredTours.slice(0, 3);

  return topTours.map(({ tour, score }) => {
    const hotelCost = selectedHotel.pricePerNight * (tour.duration - 1);
    const vehicleCost = selectedVehicle.pricePerDay * tour.duration;
    const experiencesCost = matchedExperiences.reduce(
      (sum, exp) => sum + exp.price,
      0
    );
    const foodCost = matchedFood.reduce(
      (sum, f) => sum + f.pricePerPerson,
      0
    );
    const estimatedTotal =
      tour.pricePerPerson + hotelCost + vehicleCost + experiencesCost + foodCost;

    const breakdown = [
      { category: "Tour Package", amount: tour.pricePerPerson },
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
