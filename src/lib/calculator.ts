import { vehicles } from "@/data/vehicles";
import { hotels } from "@/data/hotels";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import { foodExperiences } from "@/data/food";

export interface ItemizedCost {
  category: string;
  item: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface CostBreakdown {
  sdf: number;
  visaFee: number;
  internationalFlights: number;
  domesticFlights: number;
  vehicle: number;
  guide: number;
  hotel: number;
  tours: number;
  experiences: number;
  food: number;
  total: number;
  itemized: ItemizedCost[];
}

export interface CalculatorInput {
  days: number;
  persons: number;
  internationalRoute?: string;
  flightType?: "return" | "onward";
  domesticRoutes?: string[];
  vehicleId?: string;
  vehicleDays?: number;
  hotelId?: string;
  hotelNights?: number;
  roomType?: string;
  guideDays?: number;
  tourIds?: string[];
  experienceIds?: string[];
  foodIds?: string[];
}

const INTERNATIONAL_FLIGHT_PRICES: Record<
  string,
  { return: number; onward: number }
> = {
  "Bangkok-Paro": { return: 600, onward: 350 },
  "Delhi-Paro": { return: 400, onward: 250 },
  "Kathmandu-Paro": { return: 350, onward: 200 },
  "Singapore-Paro": { return: 700, onward: 400 },
  "Mumbai-Paro": { return: 450, onward: 280 },
};

const DOMESTIC_FLIGHT_PRICE = 150;
const SDF_RATE = 200;
const VISA_FEE = 40;
const GUIDE_RATE = 40;

export function calculateSDF(days: number, persons: number): number {
  return SDF_RATE * days * persons;
}

export function calculateVisaFee(persons: number): number {
  return VISA_FEE * persons;
}

export function calculateInternationalFlight(
  route: string,
  type: "return" | "onward",
  persons: number
): number {
  const routePrices = INTERNATIONAL_FLIGHT_PRICES[route];
  if (!routePrices) return 0;
  return routePrices[type] * persons;
}

export function calculateDomesticFlights(
  routes: string[],
  persons: number
): number {
  return routes.length * DOMESTIC_FLIGHT_PRICE * persons;
}

export function calculateVehicle(vehicleId: string, days: number): number {
  const vehicle = vehicles.find((v) => v.id === vehicleId);
  if (!vehicle) return 0;
  return vehicle.pricePerDay * days;
}

export function calculateGuide(days: number): number {
  return GUIDE_RATE * days;
}

export function calculateHotel(
  hotelId: string,
  nights: number,
  roomType?: string
): number {
  const hotel = hotels.find((h) => h.id === hotelId);
  if (!hotel) return 0;
  if (roomType) {
    const room = hotel.roomTypes.find((r) => r.name === roomType);
    if (room) return room.price * nights;
  }
  return hotel.pricePerNight * nights;
}

export function calculateTours(tourIds: string[], persons: number): number {
  return tourIds.reduce((sum, id) => {
    const tour = tours.find((t) => t.id === id);
    return sum + (tour ? tour.pricePerPerson * persons : 0);
  }, 0);
}

export function calculateExperiences(experienceIds: string[], persons: number): number {
  return experienceIds.reduce((sum, id) => {
    const exp = experiences.find((e) => e.id === id);
    return sum + (exp ? exp.price * persons : 0);
  }, 0);
}

export function calculateFood(foodIds: string[], persons: number): number {
  return foodIds.reduce((sum, id) => {
    const food = foodExperiences.find((f) => f.id === id);
    return sum + (food ? food.pricePerPerson * persons : 0);
  }, 0);
}

export function calculateTotal(params: CalculatorInput): CostBreakdown {
  const itemized: ItemizedCost[] = [];

  const sdf = calculateSDF(params.days, params.persons);
  itemized.push({
    category: "SDF",
    item: "Sustainable Development Fee",
    quantity: params.days * params.persons,
    unitPrice: SDF_RATE,
    total: sdf,
  });

  const visaFee = calculateVisaFee(params.persons);
  itemized.push({
    category: "Visa",
    item: "Visa Fee",
    quantity: params.persons,
    unitPrice: VISA_FEE,
    total: visaFee,
  });

  let internationalFlights = 0;
  if (params.internationalRoute && params.flightType) {
    internationalFlights = calculateInternationalFlight(
      params.internationalRoute,
      params.flightType,
      params.persons
    );
    const routePrices =
      INTERNATIONAL_FLIGHT_PRICES[params.internationalRoute];
    if (routePrices) {
      itemized.push({
        category: "Flights",
        item: `${params.internationalRoute} (${params.flightType})`,
        quantity: params.persons,
        unitPrice: routePrices[params.flightType],
        total: internationalFlights,
      });
    }
  }

  let domesticFlights = 0;
  if (params.domesticRoutes && params.domesticRoutes.length > 0) {
    domesticFlights = calculateDomesticFlights(
      params.domesticRoutes,
      params.persons
    );
    params.domesticRoutes.forEach((route) => {
      itemized.push({
        category: "Flights",
        item: `Domestic: ${route}`,
        quantity: params.persons,
        unitPrice: DOMESTIC_FLIGHT_PRICE,
        total: DOMESTIC_FLIGHT_PRICE * params.persons,
      });
    });
  }

  let vehicleCost = 0;
  if (params.vehicleId && params.vehicleDays) {
    vehicleCost = calculateVehicle(params.vehicleId, params.vehicleDays);
    const vehicle = vehicles.find((v) => v.id === params.vehicleId);
    if (vehicle) {
      itemized.push({
        category: "Vehicle",
        item: vehicle.name,
        quantity: params.vehicleDays,
        unitPrice: vehicle.pricePerDay,
        total: vehicleCost,
      });
    }
  }

  let guideCost = 0;
  if (params.guideDays && params.guideDays > 0) {
    guideCost = calculateGuide(params.guideDays);
    itemized.push({
      category: "Guide",
      item: "Licensed Guide",
      quantity: params.guideDays,
      unitPrice: GUIDE_RATE,
      total: guideCost,
    });
  }

  let hotelCost = 0;
  if (params.hotelId && params.hotelNights) {
    hotelCost = calculateHotel(
      params.hotelId,
      params.hotelNights,
      params.roomType
    );
    const hotel = hotels.find((h) => h.id === params.hotelId);
    if (hotel) {
      let unitPrice = hotel.pricePerNight;
      let itemName = hotel.name;
      if (params.roomType) {
        const room = hotel.roomTypes.find((r) => r.name === params.roomType);
        if (room) {
          unitPrice = room.price;
          itemName = `${hotel.name} - ${room.name}`;
        }
      }
      itemized.push({
        category: "Hotel",
        item: itemName,
        quantity: params.hotelNights,
        unitPrice,
        total: hotelCost,
      });
    }
  }

  let toursCost = 0;
  if (params.tourIds && params.tourIds.length > 0) {
    toursCost = calculateTours(params.tourIds, params.persons);
    params.tourIds.forEach((id) => {
      const tour = tours.find((t) => t.id === id);
      if (tour) {
        itemized.push({
          category: "Tours",
          item: tour.name,
          quantity: params.persons,
          unitPrice: tour.pricePerPerson,
          total: tour.pricePerPerson * params.persons,
        });
      }
    });
  }

  let experiencesCost = 0;
  if (params.experienceIds && params.experienceIds.length > 0) {
    experiencesCost = calculateExperiences(params.experienceIds, params.persons);
    params.experienceIds.forEach((id) => {
      const exp = experiences.find((e) => e.id === id);
      if (exp) {
        itemized.push({
          category: "Experiences",
          item: exp.name,
          quantity: params.persons,
          unitPrice: exp.price,
          total: exp.price * params.persons,
        });
      }
    });
  }

  let foodCost = 0;
  if (params.foodIds && params.foodIds.length > 0) {
    foodCost = calculateFood(params.foodIds, params.persons);
    params.foodIds.forEach((id) => {
      const food = foodExperiences.find((f) => f.id === id);
      if (food) {
        itemized.push({
          category: "Food",
          item: food.name,
          quantity: params.persons,
          unitPrice: food.pricePerPerson,
          total: food.pricePerPerson * params.persons,
        });
      }
    });
  }

  const total =
    sdf +
    visaFee +
    internationalFlights +
    domesticFlights +
    vehicleCost +
    guideCost +
    hotelCost +
    toursCost +
    experiencesCost +
    foodCost;

  return {
    sdf,
    visaFee,
    internationalFlights,
    domesticFlights,
    vehicle: vehicleCost,
    guide: guideCost,
    hotel: hotelCost,
    tours: toursCost,
    experiences: experiencesCost,
    food: foodCost,
    total,
    itemized,
  };
}
