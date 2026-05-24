export interface RoomType {
  name: string;
  price: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  starRating: number;
  pricePerNight: number;
  description: string;
  amenities: string[];
  roomTypes: RoomType[];
}

export const hotels: Hotel[] = [
  // 3-star hotels
  {
    id: "hotel-druk",
    name: "Hotel Druk",
    location: "Thimphu",
    starRating: 3,
    pricePerNight: 80,
    description:
      "A well-established hotel in the heart of Thimphu offering comfortable rooms with traditional Bhutanese decor and modern amenities.",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Room service",
      "Laundry",
      "Parking",
      "24-hour front desk",
    ],
    roomTypes: [
      { name: "Standard Room", price: 80 },
      { name: "Deluxe Room", price: 110 },
      { name: "Suite", price: 150 },
    ],
  },
  {
    id: "namgay-heritage",
    name: "Namgay Heritage Hotel",
    location: "Thimphu",
    starRating: 3,
    pricePerNight: 100,
    description:
      "A heritage-style hotel blending traditional Bhutanese architecture with comfortable modern facilities in central Thimphu.",
    amenities: [
      "Free WiFi",
      "Traditional restaurant",
      "Bar",
      "Garden",
      "Parking",
      "Tour desk",
    ],
    roomTypes: [
      { name: "Standard Room", price: 100 },
      { name: "Deluxe Room", price: 130 },
      { name: "Heritage Suite", price: 180 },
    ],
  },
  {
    id: "meri-puensum",
    name: "Meri Puensum Resort",
    location: "Punakha",
    starRating: 3,
    pricePerNight: 90,
    description:
      "A riverside resort in Punakha valley offering scenic views, traditional Bhutanese hospitality, and easy access to Punakha Dzong.",
    amenities: [
      "River views",
      "Restaurant",
      "Garden",
      "Free WiFi",
      "Parking",
      "Bicycle rental",
    ],
    roomTypes: [
      { name: "Standard Room", price: 90 },
      { name: "River View Room", price: 120 },
      { name: "Family Room", price: 150 },
    ],
  },
  {
    id: "hotel-olathang",
    name: "Hotel Olathang",
    location: "Paro",
    starRating: 3,
    pricePerNight: 85,
    description:
      "A historic hotel set among pine forests in Paro, offering traditional cottage-style accommodation with mountain views.",
    amenities: [
      "Forest setting",
      "Restaurant",
      "Bar",
      "Free WiFi",
      "Parking",
      "Garden walks",
    ],
    roomTypes: [
      { name: "Standard Cottage", price: 85 },
      { name: "Deluxe Cottage", price: 115 },
      { name: "Suite", price: 145 },
    ],
  },
  {
    id: "tashi-namgay-resort",
    name: "Tashi Namgay Resort",
    location: "Paro",
    starRating: 3,
    pricePerNight: 95,
    description:
      "A comfortable resort near Paro airport with well-appointed rooms and beautiful views of the Paro Valley.",
    amenities: [
      "Valley views",
      "Restaurant",
      "Spa",
      "Free WiFi",
      "Airport shuttle",
      "Parking",
    ],
    roomTypes: [
      { name: "Standard Room", price: 95 },
      { name: "Deluxe Room", price: 125 },
      { name: "Premium Suite", price: 160 },
    ],
  },
  {
    id: "wangchuk-hotel",
    name: "Wangchuk Hotel",
    location: "Bumthang",
    starRating: 3,
    pricePerNight: 75,
    description:
      "A cozy hotel in the spiritual heartland of Bumthang, offering warm hospitality and proximity to ancient temples.",
    amenities: [
      "Traditional heating",
      "Restaurant",
      "Free WiFi",
      "Garden",
      "Temple tours",
      "Parking",
    ],
    roomTypes: [
      { name: "Standard Room", price: 75 },
      { name: "Deluxe Room", price: 100 },
      { name: "Family Room", price: 130 },
    ],
  },
  // 4-star hotels
  {
    id: "terma-linca",
    name: "Terma Linca Resort & Spa",
    location: "Thimphu",
    starRating: 4,
    pricePerNight: 180,
    description:
      "A luxurious resort on the banks of the Wang Chhu river, featuring traditional Bhutanese architecture, a full-service spa, and gourmet dining.",
    amenities: [
      "Full-service spa",
      "Riverside location",
      "Fine dining restaurant",
      "Bar and lounge",
      "Fitness center",
      "Free WiFi",
      "Concierge",
      "Business center",
    ],
    roomTypes: [
      { name: "Deluxe Room", price: 180 },
      { name: "Premier Room", price: 240 },
      { name: "Riverside Suite", price: 320 },
      { name: "Royal Suite", price: 450 },
    ],
  },
  {
    id: "zhiwaling-heritage",
    name: "Zhiwaling Heritage Hotel",
    location: "Paro",
    starRating: 4,
    pricePerNight: 200,
    description:
      "An award-winning heritage hotel built with traditional rammed-earth construction, offering authentic Bhutanese luxury in the Paro Valley.",
    amenities: [
      "Heritage architecture",
      "Spa and wellness",
      "Organic restaurant",
      "Cultural activities",
      "Library",
      "Free WiFi",
      "Heated floors",
      "Mountain views",
    ],
    roomTypes: [
      { name: "Heritage Room", price: 200 },
      { name: "Luxury Heritage Room", price: 280 },
      { name: "Heritage Suite", price: 380 },
    ],
  },
  {
    id: "le-meridien-thimphu",
    name: "Le Meridien Thimphu",
    location: "Thimphu",
    starRating: 4,
    pricePerNight: 220,
    description:
      "A modern international hotel in Thimphu combining global luxury standards with Bhutanese design elements and panoramic city views.",
    amenities: [
      "Infinity pool",
      "Spa",
      "Multiple restaurants",
      "Bar",
      "Fitness center",
      "Free WiFi",
      "Business center",
      "City views",
      "Valet parking",
    ],
    roomTypes: [
      { name: "Classic Room", price: 220 },
      { name: "Deluxe Room", price: 290 },
      { name: "Junior Suite", price: 380 },
      { name: "Executive Suite", price: 500 },
    ],
  },
  {
    id: "naksel-boutique",
    name: "Naksel Boutique Hotel & Spa",
    location: "Paro",
    starRating: 4,
    pricePerNight: 170,
    description:
      "A charming boutique hotel surrounded by apple orchards in Paro, offering personalized service and a renowned spa.",
    amenities: [
      "Boutique spa",
      "Orchard setting",
      "Restaurant",
      "Yoga deck",
      "Free WiFi",
      "Library",
      "Cultural programs",
      "Mountain views",
    ],
    roomTypes: [
      { name: "Deluxe Room", price: 170 },
      { name: "Premier Room", price: 230 },
      { name: "Spa Suite", price: 310 },
    ],
  },
  {
    id: "gangtey-lodge",
    name: "Gangtey Lodge",
    location: "Wangdue Phodrang",
    starRating: 4,
    pricePerNight: 250,
    description:
      "An intimate lodge overlooking the Phobjikha Valley, offering farm-to-table dining and stunning views of the crane habitat.",
    amenities: [
      "Valley views",
      "Farm-to-table restaurant",
      "Spa",
      "Hot stone bath",
      "Nature walks",
      "Free WiFi",
      "Fireplace",
      "Crane watching",
    ],
    roomTypes: [
      { name: "Valley View Room", price: 250 },
      { name: "Luxury Suite", price: 350 },
      { name: "Farmhouse Suite", price: 420 },
    ],
  },
  {
    id: "dhensa-boutique",
    name: "Dhensa Boutique Resort",
    location: "Punakha",
    starRating: 4,
    pricePerNight: 190,
    description:
      "A stylish boutique resort perched above the Punakha Valley with contemporary design, a spa, and breathtaking valley views.",
    amenities: [
      "Spa",
      "Infinity pool",
      "Restaurant",
      "Valley views",
      "Yoga studio",
      "Free WiFi",
      "Meditation room",
      "Cooking classes",
    ],
    roomTypes: [
      { name: "Deluxe Room", price: 190 },
      { name: "Valley Suite", price: 280 },
      { name: "Grand Suite", price: 380 },
    ],
  },
  // 5-star hotels
  {
    id: "amankora",
    name: "Amankora",
    location: "Paro",
    starRating: 5,
    pricePerNight: 1200,
    description:
      "The ultimate luxury lodge experience in Bhutan. Amankora offers intimate lodges across five valleys with world-class service, spa, and exclusive experiences.",
    amenities: [
      "World-class spa",
      "Private suites",
      "Personal butler",
      "Gourmet dining",
      "Heated floors",
      "Premium bar",
      "Cultural experiences",
      "Meditation room",
      "Library",
      "Private hiking guides",
    ],
    roomTypes: [
      { name: "Suite", price: 1200 },
      { name: "Deluxe Suite", price: 1600 },
      { name: "Amankora Suite", price: 2200 },
    ],
  },
  {
    id: "six-senses",
    name: "Six Senses Bhutan",
    location: "Thimphu",
    starRating: 5,
    pricePerNight: 1500,
    description:
      "An ultra-luxury lodge combining Bhutanese tradition with Six Senses wellness philosophy. Features multiple lodges across Bhutan with holistic wellness programs.",
    amenities: [
      "Holistic wellness center",
      "Organic cuisine",
      "Private plunge pools",
      "Personal wellness consultant",
      "Yoga and meditation",
      "Hot stone bath",
      "Sustainable design",
      "Butler service",
      "Wine cellar",
      "Private excursions",
    ],
    roomTypes: [
      { name: "Lodge Suite", price: 1500 },
      { name: "Pool Suite", price: 2000 },
      { name: "Villa", price: 3000 },
    ],
  },
  {
    id: "como-uma-paro",
    name: "COMO Uma Paro",
    location: "Paro",
    starRating: 5,
    pricePerNight: 800,
    description:
      "A luxury hillside resort in Paro offering COMO Shambhala wellness, world-class cuisine, and privileged access to cultural sites.",
    amenities: [
      "COMO Shambhala spa",
      "Heated pool",
      "Fine dining",
      "Yoga studio",
      "Mountain views",
      "Butler service",
      "Cultural excursions",
      "Private guide",
      "Archery range",
    ],
    roomTypes: [
      { name: "Valley View Room", price: 800 },
      { name: "Uma Suite", price: 1100 },
      { name: "COMO Villa", price: 1800 },
    ],
  },
  {
    id: "como-uma-punakha",
    name: "COMO Uma Punakha",
    location: "Punakha",
    starRating: 5,
    pricePerNight: 750,
    description:
      "A serene riverside retreat in Punakha valley with COMO Shambhala wellness, organic cuisine, and access to pristine nature.",
    amenities: [
      "Riverside location",
      "COMO Shambhala spa",
      "Organic restaurant",
      "Private villas",
      "River activities",
      "Yoga pavilion",
      "Cultural programs",
      "Butler service",
    ],
    roomTypes: [
      { name: "Valley Room", price: 750 },
      { name: "Uma Suite", price: 1000 },
      { name: "River Villa", price: 1500 },
    ],
  },
  {
    id: "taj-tashi",
    name: "Taj Tashi",
    location: "Thimphu",
    starRating: 5,
    pricePerNight: 400,
    description:
      "The first five-star hotel in Bhutan, blending Taj luxury with traditional Bhutanese architecture in the heart of the capital.",
    amenities: [
      "Jiva Spa",
      "Multiple restaurants",
      "Business center",
      "Fitness center",
      "Cultural courtyard",
      "Premium bar",
      "Concierge",
      "Valet parking",
      "City views",
    ],
    roomTypes: [
      { name: "Deluxe Room", price: 400 },
      { name: "Premium Room", price: 550 },
      { name: "Luxury Suite", price: 800 },
      { name: "Presidential Suite", price: 1200 },
    ],
  },
  {
    id: "le-meridien-paro",
    name: "Le Meridien Paro Riverfront",
    location: "Paro",
    starRating: 5,
    pricePerNight: 350,
    description:
      "A stunning riverside resort in Paro combining international luxury standards with Bhutanese charm, offering spa, fine dining, and river views.",
    amenities: [
      "Riverfront location",
      "Full-service spa",
      "Multiple dining options",
      "Infinity pool",
      "Fitness center",
      "Cultural activities",
      "Business center",
      "Free WiFi",
      "Valley views",
    ],
    roomTypes: [
      { name: "Classic Room", price: 350 },
      { name: "River View Room", price: 450 },
      { name: "Premium Suite", price: 650 },
      { name: "Royal Suite", price: 950 },
    ],
  },
];
