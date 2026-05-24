import {
  calculateSDF,
  calculateVisaFee,
  calculateInternationalFlight,
  calculateDomesticFlights,
  calculateVehicle,
  calculateGuide,
  calculateHotel,
  calculateTours,
  calculateExperiences,
  calculateFood,
  calculateTotal,
} from "@/lib/calculator";

describe("Calculator Module", () => {
  describe("calculateSDF", () => {
    it("should calculate SDF for 5 days x 2 persons = $2,000", () => {
      expect(calculateSDF(5, 2)).toBe(2000);
    });

    it("should calculate SDF for 1 day x 1 person = $200", () => {
      expect(calculateSDF(1, 1)).toBe(200);
    });
  });

  describe("calculateVisaFee", () => {
    it("should calculate visa fee for 2 persons = $80", () => {
      expect(calculateVisaFee(2)).toBe(80);
    });

    it("should calculate visa fee for 1 person = $40", () => {
      expect(calculateVisaFee(1)).toBe(40);
    });
  });

  describe("calculateInternationalFlight", () => {
    it("should calculate Bangkok-Paro return x 2 = $1,200", () => {
      expect(calculateInternationalFlight("Bangkok-Paro", "return", 2)).toBe(1200);
    });

    it("should calculate Delhi-Paro onward x 1 = $250", () => {
      expect(calculateInternationalFlight("Delhi-Paro", "onward", 1)).toBe(250);
    });

    it("should return 0 for unknown route", () => {
      expect(calculateInternationalFlight("Unknown-Route", "return", 1)).toBe(0);
    });
  });

  describe("calculateDomesticFlights", () => {
    it("should calculate 2 routes x 2 persons = $600", () => {
      expect(calculateDomesticFlights(["Paro-Bumthang", "Bumthang-Trashigang"], 2)).toBe(600);
    });

    it("should return 0 for no routes", () => {
      expect(calculateDomesticFlights([], 2)).toBe(0);
    });
  });

  describe("calculateVehicle", () => {
    it("should calculate Toyota Camry for 5 days = $500", () => {
      expect(calculateVehicle("toyota-camry", 5)).toBe(500);
    });

    it("should calculate BMW X5 for 3 days = $660", () => {
      expect(calculateVehicle("bmw-x5", 3)).toBe(660);
    });

    it("should return 0 for unknown vehicle", () => {
      expect(calculateVehicle("unknown-vehicle", 5)).toBe(0);
    });
  });

  describe("calculateGuide", () => {
    it("should calculate guide for 7 days = $280", () => {
      expect(calculateGuide(7)).toBe(280);
    });
  });

  describe("calculateHotel", () => {
    it("should calculate Hotel Druk standard rate for 5 nights = $400", () => {
      expect(calculateHotel("hotel-druk", 5)).toBe(400);
    });

    it("should use room type price when specified", () => {
      expect(calculateHotel("hotel-druk", 3, "Deluxe Room")).toBe(330);
    });

    it("should return 0 for unknown hotel", () => {
      expect(calculateHotel("unknown-hotel", 5)).toBe(0);
    });
  });

  describe("calculateTours", () => {
    it("should multiply tour price by persons", () => {
      expect(calculateTours(["premium-honeymoon"], 2)).toBe(7000);
    });

    it("should sum multiple tours multiplied by persons", () => {
      expect(calculateTours(["premium-honeymoon", "premium-cultural"], 2)).toBe(12000);
    });

    it("should calculate for single person", () => {
      expect(calculateTours(["premium-honeymoon"], 1)).toBe(3500);
    });
  });

  describe("calculateExperiences", () => {
    it("should multiply experience prices by persons", () => {
      expect(calculateExperiences(["simply-bhutan-museum", "monastery-visit"], 2)).toBe(60);
    });

    it("should calculate for single person", () => {
      expect(calculateExperiences(["simply-bhutan-museum"], 1)).toBe(15);
    });
  });

  describe("calculateFood", () => {
    it("should calculate food for multiple persons", () => {
      expect(calculateFood(["traditional-set-menu"], 2)).toBe(50);
    });
  });

  describe("calculateTotal", () => {
    it("should compute full breakdown with all components", () => {
      const result = calculateTotal({
        days: 5,
        persons: 2,
        internationalRoute: "Bangkok-Paro",
        flightType: "return",
        domesticRoutes: ["Paro-Bumthang"],
        vehicleId: "toyota-camry",
        vehicleDays: 5,
        hotelId: "hotel-druk",
        hotelNights: 4,
        guideDays: 5,
        tourIds: ["premium-honeymoon"],
        experienceIds: ["simply-bhutan-museum"],
        foodIds: ["traditional-set-menu"],
      });

      expect(result.sdf).toBe(2000);
      expect(result.visaFee).toBe(80);
      expect(result.internationalFlights).toBe(1200);
      expect(result.domesticFlights).toBe(300);
      expect(result.vehicle).toBe(500);
      expect(result.guide).toBe(200);
      expect(result.hotel).toBe(320);
      expect(result.tours).toBe(7000);
      expect(result.experiences).toBe(30);
      expect(result.food).toBe(50);
      expect(result.total).toBe(
        result.sdf +
        result.visaFee +
        result.internationalFlights +
        result.domesticFlights +
        result.vehicle +
        result.guide +
        result.hotel +
        result.tours +
        result.experiences +
        result.food
      );
      expect(result.itemized.length).toBeGreaterThan(0);
    });

    it("should handle minimal input (only required fields)", () => {
      const result = calculateTotal({ days: 3, persons: 1 });
      expect(result.sdf).toBe(600);
      expect(result.visaFee).toBe(40);
      expect(result.total).toBe(640);
    });
  });
});
