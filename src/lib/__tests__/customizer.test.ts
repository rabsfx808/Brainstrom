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

    it("should include SDF and visa fee in the breakdown", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      const breakdown = results[0].breakdown;
      const categories = breakdown.map((b) => b.category);
      expect(categories).toContain("Sustainable Development Fee");
      expect(categories).toContain("Visa Fee");

      const sdfEntry = breakdown.find((b) => b.category === "Sustainable Development Fee");
      const visaEntry = breakdown.find((b) => b.category === "Visa Fee");
      // SDF = $200 * tour.duration * groupSize
      expect(sdfEntry!.amount).toBe(200 * results[0].tour.duration * 2);
      // Visa = $40 * groupSize
      expect(visaEntry!.amount).toBe(40 * 2);
    });

    it("should multiply tour price by group size in estimate", () => {
      const preferences: CustomerPreferences = {
        budget: "premium",
        tripType: "cultural",
        duration: 6,
        interests: ["monasteries"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      const tourAmount = results[0].breakdown.find((b) => b.category === "Tour Package");
      expect(tourAmount!.amount).toBe(results[0].tour.pricePerPerson * 2);
    });

    it("should filter out expensive tours for moderate budget", () => {
      const preferences: CustomerPreferences = {
        budget: "moderate",
        tripType: "honeymoon",
        duration: 7,
        interests: ["romance"],
        groupSize: 2,
      };
      const results = getRecommendations(preferences);
      // All tours should have pricePerPerson <= 3000 for moderate budget
      results.forEach((pkg) => {
        expect(pkg.tour.pricePerPerson).toBeLessThanOrEqual(3000);
      });
    });
  });
});
