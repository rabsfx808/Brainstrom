export interface Vehicle {
  id: string;
  name: string;
  category: string;
  type: string;
  capacity: number;
  pricePerDay: number;
  features: string[];
  imageDescription: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "land-cruiser-prado",
    name: "Toyota Land Cruiser Prado",
    category: "Luxury SUV",
    type: "SUV",
    capacity: 7,
    pricePerDay: 150,
    features: [
      "4WD capability",
      "Leather seats",
      "Climate control",
      "GPS navigation",
      "Roof rack",
      "Mountain-ready suspension",
      "USB charging ports",
    ],
    imageDescription:
      "White Toyota Land Cruiser Prado navigating a mountain road in Bhutan",
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson",
    category: "Luxury SUV",
    type: "SUV",
    capacity: 5,
    pricePerDay: 120,
    features: [
      "All-wheel drive",
      "Panoramic sunroof",
      "Heated seats",
      "Touchscreen infotainment",
      "Reverse camera",
      "Cruise control",
    ],
    imageDescription:
      "Silver Hyundai Tucson parked at a scenic overlook in the Himalayas",
  },
  {
    id: "ioniq-5",
    name: "Hyundai Ioniq 5",
    category: "Electric",
    type: "EV",
    capacity: 5,
    pricePerDay: 130,
    features: [
      "Full electric - zero emissions",
      "Fast charging capability",
      "Spacious interior",
      "Advanced driver assistance",
      "Vehicle-to-load power",
      "Regenerative braking",
    ],
    imageDescription:
      "Modern Hyundai Ioniq 5 electric vehicle on a clean Bhutanese road",
  },
  {
    id: "byd-atto-3",
    name: "BYD Atto 3",
    category: "Electric",
    type: "EV",
    capacity: 5,
    pricePerDay: 110,
    features: [
      "Full electric drivetrain",
      "Rotating touchscreen",
      "Eco-friendly travel",
      "Comfortable ride",
      "Smart connectivity",
      "Decent range for valley tours",
    ],
    imageDescription:
      "Blue BYD Atto 3 parked near a Bhutanese monastery",
  },
  {
    id: "luxury-coach",
    name: "Luxury Coach 20-Seater",
    category: "Bus",
    type: "Coach",
    capacity: 20,
    pricePerDay: 300,
    features: [
      "Air conditioning",
      "Reclining seats",
      "PA system",
      "Large luggage compartment",
      "WiFi available",
      "TV screens",
      "Restroom onboard",
    ],
    imageDescription:
      "Luxury 20-seater coach on a wide Bhutanese highway",
  },
  {
    id: "mini-bus",
    name: "Mini Bus 12-Seater",
    category: "Bus",
    type: "Mini Bus",
    capacity: 12,
    pricePerDay: 200,
    features: [
      "Air conditioning",
      "Comfortable seating",
      "Luggage space",
      "Good for group tours",
      "Easy maneuverability",
      "PA system",
    ],
    imageDescription:
      "White 12-seater mini bus at a Bhutanese tour stop",
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "Sedan",
    type: "Sedan",
    capacity: 4,
    pricePerDay: 100,
    features: [
      "Smooth ride",
      "Fuel efficient",
      "Spacious trunk",
      "Climate control",
      "Bluetooth connectivity",
      "Comfortable for long drives",
    ],
    imageDescription:
      "Black Toyota Camry on a scenic Bhutanese road",
  },
  {
    id: "hyundai-sonata",
    name: "Hyundai Sonata",
    category: "Sedan",
    type: "Sedan",
    capacity: 4,
    pricePerDay: 90,
    features: [
      "Modern design",
      "Fuel efficient",
      "Advanced safety features",
      "Touchscreen display",
      "Comfortable seats",
      "USB charging",
    ],
    imageDescription:
      "White Hyundai Sonata in a Bhutanese town center",
  },
  {
    id: "mercedes-glc",
    name: "Mercedes GLC",
    category: "Premium",
    type: "SUV",
    capacity: 5,
    pricePerDay: 200,
    features: [
      "Premium leather interior",
      "MBUX infotainment",
      "4MATIC all-wheel drive",
      "Ambient lighting",
      "Burmester sound system",
      "Heated and ventilated seats",
      "360-degree camera",
    ],
    imageDescription:
      "Silver Mercedes GLC at a luxury Bhutanese resort entrance",
  },
  {
    id: "bmw-x5",
    name: "BMW X5",
    category: "Premium",
    type: "SUV",
    capacity: 5,
    pricePerDay: 220,
    features: [
      "xDrive all-wheel drive",
      "Premium Nappa leather",
      "Panoramic glass roof",
      "Harman Kardon surround sound",
      "Gesture control",
      "Adaptive suspension",
      "Head-up display",
    ],
    imageDescription:
      "Black BMW X5 parked in front of a traditional Bhutanese building",
  },
];
