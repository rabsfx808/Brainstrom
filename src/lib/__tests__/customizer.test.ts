import { getRecommendations, CustomerPreferences } from "@/lib/customizer";

describe("Customizer Module", () => {
  describe("getRecommendations", () => {
    it("should return luxury honeymoon tour as highest match for luxury honeymoon preferences", () => {
      const preferences: CustomerPreferences = {
        budget: "luxury",
        tripType: "honeymoon",
        duration: 10,
        interests: ["romance", "wellness"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].tour.category).toBe("honeymoon");
      expect(results[0].tour.tier).toBe("luxury");
    });

    it("should return premium cultural tour for premium cultural preferences", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries", "history"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].tour.category).toBe("cultural");
      expect(results[0].tour.tier).toBe("premium");
    });

    it("should not recommend 5-star hotels for moderate budget", () => {
      const preferences: CustomerPreferences = {
        budget: "moderate",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      results.forEach((pkg) => {
        expect(pkg.hotel.starRating).not.toBe(5);
      });
    });

    it("should recommend 5-star hotels for luxury budget", () => {
      const preferences: CustomerPreferences = {
        budget: "luxury",
        tripType: "honeymoon",
        duration: 10,
        interests: ["romance"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      results.forEach((pkg) => {
        expect(pkg.hotel.starRating).toBe(5);
      });
    });

    it("should prefer tours within +/-2 days of requested duration", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "honeymoon",
        duration: 7,
        interests: ["romance"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      // The premium honeymoon is 7 days - perfect match
      expect(results[0].tour.id).toBe("premium-honeymoon");
      expect(Math.abs(results[0].tour.duration - 7)).toBeLessThanOrEqual(2);
    });

    it("should recommend sedan for group size 1-2", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["history"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      expect(results[0].vehicle.type).toBe("Sedan");
    });

    it("should recommend bus/coach for group size 10+", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["history"],
        groupSize: 12,
      };
      const results = getRecommendations(preferences);
      expect(["Coach", "Mini Bus"]).toContain(results[0].vehicle.type);
    });

    it("should include cultural experiences for monasteries interest", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      const experienceCategories = results[0].experiences.map((e) => e.category);
      expect(experienceCategories).toContain("cultural");
    });

    it("should have matchScore between 0 and 100", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "adventure",
        duration: 7,
        interests: ["adventure", "nature"],
        groupSize: 4,
      };
      const results = getRecommendations(preferences);
      results.forEach((pkg) => {
        expect(pkg.matchScore).toBeGreaterThanOrEqual(0);
        expect(pkg.matchScore).toBeLessThanOrEqual(100);
      });
    });

    it("should return top 3 results sorted by matchScore descending", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries", "history", "photography"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      expect(results.length).toBeLessThanOrEqual(3);
      for (let i = 0; i < results.length - 1; i++) {
        expect(results[i].matchScore).toBeGreaterThanOrEqual(results[i + 1].matchScore);
      }
    });
  });
});
