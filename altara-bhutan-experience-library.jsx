import React, { useState } from 'react';

// ===== INLINE DATA =====

const destinations = [
  { id: "thimphu", name: "Thimphu", description: "The capital city of Bhutan, blending modern development with traditional Buddhist culture.", facts: ["Only capital without traffic lights", "Home to the National Memorial Chorten", "Population ~115,000", "Elevation 2,320m"], places: [{ name: "Buddha Dordenma", description: "A 51.5m tall bronze Buddha statue filled with 125,000 smaller statues.", entryFee: 5 }, { name: "Tashichho Dzong", description: "Seat of Bhutan's government and summer residence of the Chief Abbot.", entryFee: 10 }, { name: "Memorial Chorten", description: "A stupa built in 1974 as memorial to the Third King.", entryFee: 5 }, { name: "Simply Bhutan", description: "A living museum showcasing traditional Bhutanese lifestyle.", entryFee: 15 }] },
  { id: "paro", name: "Paro", description: "Home to Bhutan's only international airport and the iconic Tiger's Nest monastery.", facts: ["Most iconic monastery in Bhutan", "One of the most challenging airport landings", "Rich cultural heritage", "Famous Paro Tsechu festival"], places: [{ name: "Tiger's Nest (Taktsang)", description: "Sacred temple complex clinging to a cliff at 3,120m.", entryFee: 20 }, { name: "Rinpung Dzong", description: "Large fortress-monastery overlooking Paro Valley, built 1646.", entryFee: 10 }, { name: "National Museum", description: "Ancient Ta Dzong watchtower with Bhutanese art and artifacts.", entryFee: 5 }, { name: "Drukgyel Dzong", description: "Ruined fortress built in 1649 to commemorate victory over Tibet.", entryFee: 5 }] },
  { id: "punakha", name: "Punakha", description: "Former capital of Bhutan until 1955, known for its stunning Dzong at the confluence of two rivers.", facts: ["Former capital until 1955", "Second largest and oldest dzong", "Mild winters and fertile valleys", "Coronation site of all kings"], places: [{ name: "Punakha Dzong", description: "Palace of Great Happiness at the confluence of Pho Chhu and Mo Chhu rivers.", entryFee: 10 }, { name: "Chimi Lhakhang", description: "The Temple of the Divine Madman, a fertility temple built in 1499.", entryFee: 5 }, { name: "Khamsum Yulley Namgyal Chorten", description: "Three-story chorten on a hilltop promoting world peace.", entryFee: 5 }] },
  { id: "bumthang", name: "Bumthang", description: "The spiritual heartland of Bhutan with four valleys and ancient temples.", facts: ["Spiritual heartland of Bhutan", "Four valleys: Chokhor, Tang, Ura, Chumey", "Oldest temples in the country", "Famous for honey, cheese, and apples"], places: [{ name: "Jambay Lhakhang", description: "One of the oldest temples, built in the 7th century.", entryFee: 5 }, { name: "Kurjey Lhakhang", description: "Sacred temple with body imprint of Guru Rinpoche.", entryFee: 5 }, { name: "Burning Lake", description: "Sacred lake where treasures were discovered in the 15th century.", entryFee: null }, { name: "Tamshing Monastery", description: "Founded by Pema Lingpa in 1501 with ancient paintings.", entryFee: 5 }] },
  { id: "haa", name: "Haa", description: "One of the most secluded valleys, opened to tourists only in 2002.", facts: ["One of the smallest dzongkhags", "Opened to tourists in 2002", "Annual Haa Summer Festival", "Pristine forests and wildlife"], places: [{ name: "Haa Valley", description: "Pristine valley with untouched natural beauty.", entryFee: null }, { name: "Lhakhang Karpo", description: "Ancient white temple from the 7th century.", entryFee: 5 }, { name: "Lhakhang Nagpo", description: "Historic black temple paired with Lhakhang Karpo.", entryFee: 5 }] },
  { id: "wangdue", name: "Wangdue Phodrang", description: "Home to the beautiful Phobjikha Valley, winter habitat of black-necked cranes.", facts: ["Home to Phobjikha Valley", "Winter habitat of black-necked cranes", "Original dzong burned in 2012", "Known for bamboo and stone carvings"], places: [{ name: "Gangtey Valley", description: "Broad glacial valley with sweeping views.", entryFee: null }, { name: "Phobjikha Valley", description: "U-shaped glacial valley, winter home of black-necked cranes.", entryFee: null }, { name: "Black-Necked Crane Center", description: "Visitor center for crane conservation.", entryFee: 10 }] },
  { id: "trongsa", name: "Trongsa", description: "Ancestral home of Bhutan's royal family, geographically the center of Bhutan.", facts: ["Ancestral home of monarchy", "Controlled east-west travel for centuries", "Geographic center of Bhutan", "All kings served as Trongsa Penlop"], places: [{ name: "Trongsa Dzong", description: "The largest dzong, perched above Mangde Chhu gorge.", entryFee: 10 }, { name: "Ta Dzong Museum", description: "Cylindrical watchtower museum of royal history.", entryFee: 5 }, { name: "Chendbji Chorten", description: "Unique Nepalese-style chorten from the 18th century.", entryFee: null }] },
  { id: "gasa", name: "Gasa", description: "Least populated district, known for hot springs, Laya community, and alpine landscapes.", facts: ["Least populated district", "Home to semi-nomadic Layap people", "Famous for natural hot springs", "Gateway to the Snowman Trek"], places: [{ name: "Gasa Hot Springs", description: "Natural hot springs with therapeutic properties.", entryFee: null }, { name: "Gasa Dzong", description: "Hilltop fortress at over 2,800m elevation.", entryFee: 5 }, { name: "Laya Village", description: "Remote highland village at 3,800m with unique Layap people.", entryFee: null }] },
  { id: "trashigang", name: "Trashigang", description: "Largest district in eastern Bhutan, known for weaving and rugged beauty.", facts: ["Largest district by area", "Rice bowl of eastern Bhutan", "Famous textile weaving", "Gateway to eastern valleys"], places: [{ name: "Trashigang Dzong", description: "Fortress on a steep ridge at river confluence.", entryFee: 5 }, { name: "Rangjung Monastery", description: "Buddhist monastery with giant Guru Rinpoche statue.", entryFee: 5 }] },
  { id: "mongar", name: "Mongar", description: "Key eastern district with dramatic mountain landscapes along the lateral road.", facts: ["Dramatic Thrumshingla Pass drive", "Modern dzong built in the 1930s", "Textile traditions", "Gateway between central and east"], places: [{ name: "Mongar Dzong", description: "Modern dzong built without nails in traditional style.", entryFee: 5 }, { name: "Thrumshingla National Park", description: "Old-growth forests and rare birds at 3,780m.", entryFee: 5 }] },
];

const tours = [
  { id: "premium-honeymoon", name: "Premium Honeymoon", tier: "premium", category: "honeymoon", duration: 7, description: "A romantic 7-day journey through Bhutan's most enchanting valleys.", highlights: ["Sunset dinner overlooking Tiger's Nest", "Couples spa at Punakha hot springs", "Private candlelight dinner", "Romantic river rafting", "Cooking class together"], pricePerPerson: 3500 },
  { id: "luxury-honeymoon", name: "Luxury Honeymoon", tier: "luxury", category: "honeymoon", duration: 10, description: "An exclusive 10-day luxury honeymoon with helicopter rides and bespoke experiences.", highlights: ["Helicopter ride over Tiger's Nest", "Private dining at Amankora", "Hot stone bath for two", "Exclusive moonlit dzong tour", "Personal butler service"], pricePerPerson: 8000 },
  { id: "premium-anniversary", name: "Premium Anniversary Special", tier: "premium", category: "anniversary", duration: 5, description: "A 5-day celebration of love in Bhutan's most romantic settings.", highlights: ["Anniversary dinner at Punakha Dzong", "Blessing at Chimi Lhakhang", "Couples archery", "Sunset meditation for two"], pricePerPerson: 2800 },
  { id: "luxury-anniversary", name: "Luxury Anniversary Special", tier: "luxury", category: "anniversary", duration: 8, description: "An 8-day luxury anniversary with private ceremonies and five-star pampering.", highlights: ["Private blessing by head monk", "Dinner in 600-year-old temple", "Helicopter Himalaya tour", "Personal photographer", "Custom Bhutanese outfit"], pricePerPerson: 6500 },
  { id: "premium-cultural", name: "Premium Cultural Tour", tier: "premium", category: "cultural", duration: 6, description: "A 6-day deep dive into Bhutanese culture, monasteries, and arts.", highlights: ["Traditional mask dance", "Monastery meditation", "Cooking masterclass", "Archery tournament", "Textile weaving workshop"], pricePerPerson: 2500 },
  { id: "luxury-cultural", name: "Luxury Cultural Tour", tier: "luxury", category: "cultural", duration: 9, description: "A 9-day exclusive cultural odyssey with private monastery access.", highlights: ["Audience with Buddhist master", "Behind-the-scenes dzong access", "Exclusive festival platform", "Art commissioning", "Monastery overnight stay"], pricePerPerson: 7000 },
  { id: "premium-adventure", name: "Premium Adventure Tour", tier: "premium", category: "adventure", duration: 7, description: "A 7-day adventure with trekking, rafting, and mountain biking.", highlights: ["Tiger's Nest trek", "White water rafting", "Mountain biking", "Camping under stars", "Rock climbing"], pricePerPerson: 3000 },
  { id: "luxury-adventure", name: "Luxury Adventure Tour", tier: "luxury", category: "adventure", duration: 10, description: "A 10-day luxury adventure with helicopter access and glamping.", highlights: ["Helicopter to remote valleys", "Luxury glamping at 4,000m", "Private paragliding", "Exclusive hot spring trek", "Kayaking pristine lakes"], pricePerPerson: 7500 },
  { id: "premium-festival", name: "Premium Festival Tour", tier: "premium", category: "festival", duration: 5, description: "A 5-day tour around Bhutan's spectacular Tshechu festivals.", highlights: ["Front-row Tshechu viewing", "Mask dance explanation", "Meet performers", "Festival food tasting", "Traditional dress experience"], pricePerPerson: 2800 },
  { id: "luxury-festival", name: "Luxury Festival Tour", tier: "luxury", category: "festival", duration: 8, description: "An 8-day luxury festival experience with VIP access and private ceremonies.", highlights: ["VIP viewing platform", "Audience with festival lama", "Backstage access", "Custom mask commissioning", "Private music concert"], pricePerPerson: 6000 },
];

const vehicles = [
  { id: "land-cruiser-prado", name: "Toyota Land Cruiser Prado", category: "Luxury SUV", capacity: 7, pricePerDay: 150, features: ["4WD", "Leather seats", "Climate control", "GPS", "Mountain-ready"] },
  { id: "hyundai-tucson", name: "Hyundai Tucson", category: "Luxury SUV", capacity: 5, pricePerDay: 120, features: ["AWD", "Panoramic sunroof", "Heated seats", "Touchscreen", "Cruise control"] },
  { id: "ioniq-5", name: "Hyundai Ioniq 5", category: "Electric", capacity: 5, pricePerDay: 130, features: ["Zero emissions", "Fast charging", "Spacious", "Driver assist", "Regenerative braking"] },
  { id: "byd-atto-3", name: "BYD Atto 3", category: "Electric", capacity: 5, pricePerDay: 110, features: ["Full electric", "Eco-friendly", "Smart connectivity", "Comfortable", "Good range"] },
  { id: "luxury-coach", name: "Luxury Coach 20-Seater", category: "Bus", capacity: 20, pricePerDay: 300, features: ["A/C", "Reclining seats", "PA system", "WiFi", "Restroom onboard"] },
  { id: "mini-bus", name: "Mini Bus 12-Seater", category: "Bus", capacity: 12, pricePerDay: 200, features: ["A/C", "Comfortable seating", "Luggage space", "PA system", "Easy maneuverability"] },
  { id: "toyota-camry", name: "Toyota Camry", category: "Sedan", capacity: 4, pricePerDay: 100, features: ["Smooth ride", "Fuel efficient", "Spacious trunk", "Bluetooth", "Climate control"] },
  { id: "hyundai-sonata", name: "Hyundai Sonata", category: "Sedan", capacity: 4, pricePerDay: 90, features: ["Modern design", "Fuel efficient", "Safety features", "USB charging", "Comfortable"] },
  { id: "mercedes-glc", name: "Mercedes GLC", category: "Premium", capacity: 5, pricePerDay: 200, features: ["Premium leather", "MBUX", "4MATIC AWD", "Burmester sound", "360 camera"] },
  { id: "bmw-x5", name: "BMW X5", category: "Premium", capacity: 5, pricePerDay: 220, features: ["xDrive AWD", "Nappa leather", "Panoramic roof", "Harman Kardon", "Head-up display"] },
];

const hotels = [
  { id: "hotel-druk", name: "Hotel Druk", location: "Thimphu", starRating: 3, pricePerNight: 80, amenities: ["Free WiFi", "Restaurant", "Room service", "Parking"], roomTypes: [{ name: "Standard", price: 80 }, { name: "Deluxe", price: 110 }, { name: "Suite", price: 150 }] },
  { id: "namgay-heritage", name: "Namgay Heritage Hotel", location: "Thimphu", starRating: 3, pricePerNight: 100, amenities: ["Free WiFi", "Restaurant", "Bar", "Garden"], roomTypes: [{ name: "Standard", price: 100 }, { name: "Deluxe", price: 130 }, { name: "Heritage Suite", price: 180 }] },
  { id: "meri-puensum", name: "Meri Puensum Resort", location: "Punakha", starRating: 3, pricePerNight: 90, amenities: ["River views", "Restaurant", "Garden", "Bicycle rental"], roomTypes: [{ name: "Standard", price: 90 }, { name: "River View", price: 120 }, { name: "Family", price: 150 }] },
  { id: "hotel-olathang", name: "Hotel Olathang", location: "Paro", starRating: 3, pricePerNight: 85, amenities: ["Forest setting", "Restaurant", "Bar", "Garden walks"], roomTypes: [{ name: "Standard Cottage", price: 85 }, { name: "Deluxe Cottage", price: 115 }, { name: "Suite", price: 145 }] },
  { id: "terma-linca", name: "Terma Linca Resort & Spa", location: "Thimphu", starRating: 4, pricePerNight: 180, amenities: ["Full-service spa", "Riverside", "Fine dining", "Fitness center"], roomTypes: [{ name: "Deluxe", price: 180 }, { name: "Premier", price: 240 }, { name: "Riverside Suite", price: 320 }] },
  { id: "zhiwaling-heritage", name: "Zhiwaling Heritage Hotel", location: "Paro", starRating: 4, pricePerNight: 200, amenities: ["Heritage architecture", "Spa", "Organic restaurant", "Mountain views"], roomTypes: [{ name: "Heritage Room", price: 200 }, { name: "Luxury Heritage", price: 280 }, { name: "Heritage Suite", price: 380 }] },
  { id: "le-meridien-thimphu", name: "Le Meridien Thimphu", location: "Thimphu", starRating: 4, pricePerNight: 220, amenities: ["Infinity pool", "Spa", "Multiple restaurants", "City views"], roomTypes: [{ name: "Classic", price: 220 }, { name: "Deluxe", price: 290 }, { name: "Executive Suite", price: 500 }] },
  { id: "naksel-boutique", name: "Naksel Boutique Hotel", location: "Paro", starRating: 4, pricePerNight: 170, amenities: ["Boutique spa", "Orchard setting", "Yoga deck", "Mountain views"], roomTypes: [{ name: "Deluxe", price: 170 }, { name: "Premier", price: 230 }, { name: "Spa Suite", price: 310 }] },
  { id: "gangtey-lodge", name: "Gangtey Lodge", location: "Wangdue Phodrang", starRating: 4, pricePerNight: 250, amenities: ["Valley views", "Farm-to-table", "Spa", "Crane watching"], roomTypes: [{ name: "Valley View", price: 250 }, { name: "Luxury Suite", price: 350 }, { name: "Farmhouse Suite", price: 420 }] },
  { id: "amankora", name: "Amankora", location: "Paro", starRating: 5, pricePerNight: 1200, amenities: ["World-class spa", "Personal butler", "Gourmet dining", "Private guides"], roomTypes: [{ name: "Suite", price: 1200 }, { name: "Deluxe Suite", price: 1600 }, { name: "Amankora Suite", price: 2200 }] },
  { id: "six-senses", name: "Six Senses Bhutan", location: "Thimphu", starRating: 5, pricePerNight: 1500, amenities: ["Holistic wellness", "Organic cuisine", "Private plunge pools", "Butler service"], roomTypes: [{ name: "Lodge Suite", price: 1500 }, { name: "Pool Suite", price: 2000 }, { name: "Villa", price: 3000 }] },
  { id: "como-uma-paro", name: "COMO Uma Paro", location: "Paro", starRating: 5, pricePerNight: 800, amenities: ["COMO Shambhala spa", "Heated pool", "Fine dining", "Butler service"], roomTypes: [{ name: "Valley View", price: 800 }, { name: "Uma Suite", price: 1100 }, { name: "COMO Villa", price: 1800 }] },
  { id: "como-uma-punakha", name: "COMO Uma Punakha", location: "Punakha", starRating: 5, pricePerNight: 750, amenities: ["Riverside", "COMO Shambhala spa", "Private villas", "Yoga pavilion"], roomTypes: [{ name: "Valley Room", price: 750 }, { name: "Uma Suite", price: 1000 }, { name: "River Villa", price: 1500 }] },
  { id: "taj-tashi", name: "Taj Tashi", location: "Thimphu", starRating: 5, pricePerNight: 400, amenities: ["Jiva Spa", "Multiple restaurants", "Fitness center", "Cultural courtyard"], roomTypes: [{ name: "Deluxe", price: 400 }, { name: "Premium", price: 550 }, { name: "Luxury Suite", price: 800 }] },
  { id: "le-meridien-paro", name: "Le Meridien Paro Riverfront", location: "Paro", starRating: 5, pricePerNight: 350, amenities: ["Riverfront", "Full spa", "Infinity pool", "Valley views"], roomTypes: [{ name: "Classic", price: 350 }, { name: "River View", price: 450 }, { name: "Royal Suite", price: 950 }] },
];

const foodExperiences = [
  { id: "traditional-set-menu", name: "Traditional Bhutanese Set Menu", description: "Complete traditional meal with beloved Bhutanese dishes.", pricePerPerson: 25, menu: ["Ema Datshi", "Red Rice", "Phaksha Paa", "Jasha Maru", "Kewa Datshi", "Suja butter tea"], duration: "1.5 hours" },
  { id: "royal-feast", name: "Royal Bhutanese Feast", description: "Lavish multi-course feast inspired by royal cuisine.", pricePerPerson: 60, menu: ["Suja welcome", "Momos", "Sikam Datshi", "Shakam Ema Datshi", "Juma sausage", "Hoentoe", "Ara rice wine", "Dessert platter"], duration: "2.5 hours" },
  { id: "hot-stone-bath-dinner", name: "Hot Stone Bath & Dinner", description: "Wellness-dining combo with traditional Dotsho bath and dinner.", pricePerPerson: 80, menu: ["Herbal tea", "Hot stone bath", "Post-bath Ara", "Grilled fish or chicken", "Organic vegetables", "Red rice", "Fruit dessert"], duration: "3 hours" },
  { id: "farm-to-table", name: "Farm-to-Table Experience", description: "Visit organic farm, harvest ingredients, and enjoy fresh meal.", pricePerPerson: 45, menu: ["Farm tour", "Fresh salad", "Vegetable curry", "Organic red rice", "Homemade cheese", "Farm honey", "Herbal tea"], duration: "3 hours" },
  { id: "cooking-class", name: "Bhutanese Cooking Class", description: "Learn authentic Bhutanese cooking from local chef.", pricePerPerson: 35, menu: ["Market visit", "Ema Datshi making", "Momo workshop", "Red rice technique", "Ezay sauce", "Suja making"], duration: "4 hours" },
  { id: "candlelight-dinner", name: "Romantic Candlelight Dinner", description: "Exclusive private dining with mountain views and live music.", pricePerPerson: 60, menu: ["Champagne welcome", "Wild mushroom soup", "River trout", "Bhutanese-spiced lamb", "Saffron rice", "Chocolate chili dessert"], duration: "2.5 hours" },
  { id: "riverside-picnic", name: "Riverside Picnic", description: "Curated gourmet picnic by a pristine river.", pricePerPerson: 50, menu: ["Artisan bread", "Bhutanese cheese", "Cold momo platter", "Fruit basket", "Smoked trout", "Butter tea"], duration: "2 hours" },
  { id: "monastery-tea", name: "Monastery Tea Ceremony", description: "Peaceful tea ceremony at a Buddhist monastery.", pricePerPerson: 20, menu: ["Suja butter tea", "Ngaja sweet tea", "Zaw puffed rice", "Khur-le pancake", "Dried fruits", "Monastery bread"], duration: "1 hour" },
];

const experiences = [
  { id: "simply-bhutan", name: "Simply Bhutan Museum", category: "cultural", description: "Interactive living museum of traditional Bhutanese lifestyle.", price: 15, priceType: "per_person", duration: "1.5 hours", location: "Thimphu" },
  { id: "monastery-visit", name: "Monastery Visit with Monk Guide", category: "cultural", description: "Guided visit to an active Buddhist monastery.", price: 15, priceType: "per_person", duration: "2 hours", location: "Multiple" },
  { id: "dzong-tour", name: "Dzong Guided Tour", category: "cultural", description: "In-depth guided tour of a traditional Dzong.", price: 10, priceType: "per_person", duration: "1.5 hours", location: "Multiple" },
  { id: "archery", name: "Traditional Archery", category: "cultural", description: "Try Bhutan's national sport with bamboo bows.", price: 25, priceType: "per_person", duration: "2 hours", location: "Thimphu" },
  { id: "mask-dance", name: "Mask Dance Performance", category: "cultural", description: "Private Cham masked dance performance.", price: 30, priceType: "per_person", duration: "1.5 hours", location: "Paro" },
  { id: "candlelight-view", name: "Candlelight Dinner - Tiger's Nest View", category: "romantic", description: "Exclusive dinner overlooking illuminated Tiger's Nest.", price: 200, priceType: "per_couple", duration: "3 hours", location: "Paro" },
  { id: "couples-spa", name: "Couples Spa at Hot Springs", category: "romantic", description: "Luxurious couples spa with hot stone bath and massage.", price: 150, priceType: "per_couple", duration: "3 hours", location: "Punakha" },
  { id: "sunrise-trek", name: "Romantic Sunrise Trek", category: "romantic", description: "Early morning trek for breathtaking Himalayan sunrise.", price: 50, priceType: "per_person", duration: "4 hours", location: "Paro" },
  { id: "river-rafting", name: "Couples River Rafting", category: "romantic", description: "Scenic rafting on Mo Chhu with riverside picnic.", price: 60, priceType: "per_person", duration: "3 hours", location: "Punakha" },
  { id: "mountain-biking", name: "Mountain Biking Adventure", category: "adventure", description: "Biking through valleys, forests, and villages.", price: 45, priceType: "per_person", duration: "4 hours", location: "Paro Valley" },
  { id: "white-water-rafting", name: "White Water Rafting", category: "adventure", description: "Navigate Class II-IV rapids through stunning gorges.", price: 60, priceType: "per_person", duration: "4 hours", location: "Punakha" },
  { id: "rock-climbing", name: "Rock Climbing", category: "adventure", description: "Guided climbing on natural cliff faces.", price: 40, priceType: "per_person", duration: "3 hours", location: "Thimphu" },
  { id: "paragliding", name: "Paragliding over Paro Valley", category: "adventure", description: "Tandem paragliding with bird's-eye views.", price: 80, priceType: "per_person", duration: "1 hour", location: "Paro" },
  { id: "hot-stone-bath", name: "Traditional Hot Stone Bath", category: "wellness", description: "Traditional Dotsho with river stones and healing herbs.", price: 30, priceType: "per_person", duration: "1.5 hours", location: "Multiple" },
  { id: "traditional-medicine", name: "Traditional Medicine Consultation", category: "wellness", description: "Consultation with Drungtsho practitioner.", price: 50, priceType: "per_person", duration: "1 hour", location: "Thimphu" },
  { id: "meditation-retreat", name: "Meditation Retreat", category: "wellness", description: "Guided meditation at a peaceful monastery.", price: 100, priceType: "per_day", duration: "Full day", location: "Bumthang" },
  { id: "yoga-session", name: "Mountain Yoga Session", category: "wellness", description: "Guided yoga in stunning mountain setting.", price: 25, priceType: "per_person", duration: "1.5 hours", location: "Paro" },
];

// ===== CALCULATOR CONSTANTS =====
const SDF_RATE = 200;
const VISA_FEE = 40;
const GUIDE_RATE = 40;
const FLIGHT_PRICES = {
  "Bangkok-Paro": { return: 600, onward: 350 },
  "Delhi-Paro": { return: 400, onward: 250 },
  "Kathmandu-Paro": { return: 350, onward: 200 },
  "Singapore-Paro": { return: 700, onward: 400 },
  "Mumbai-Paro": { return: 450, onward: 280 },
};
const DOMESTIC_FLIGHT_PRICE = 150;


// ===== STYLES =====
const styles = {
  app: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: '100vw', minHeight: '100vh', background: '#f8f5f0', color: '#2d2d2d', overflowX: 'hidden' },
  header: { background: 'linear-gradient(135deg, #8B1A1A 0%, #B22222 50%, #CD853F 100%)', color: 'white', padding: '16px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' },
  headerTitle: { fontSize: '18px', fontWeight: 'bold', margin: 0, textAlign: 'center' },
  headerSub: { fontSize: '11px', textAlign: 'center', opacity: 0.85, margin: '2px 0 0 0' },
  nav: { display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px 12px', background: '#fff', borderBottom: '1px solid #e0d5c8', justifyContent: 'center' },
  navBtn: { padding: '6px 10px', fontSize: '11px', border: '1px solid #ccc', borderRadius: '16px', background: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' },
  navBtnActive: { padding: '6px 10px', fontSize: '11px', border: '1px solid #8B1A1A', borderRadius: '16px', background: '#8B1A1A', color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: 'bold' },
  section: { padding: '16px' },
  sectionTitle: { fontSize: '20px', fontWeight: 'bold', color: '#8B1A1A', marginBottom: '12px', borderBottom: '2px solid #CD853F', paddingBottom: '8px' },
  card: { background: '#fff', borderRadius: '12px', padding: '14px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e8e0d5' },
  cardTitle: { fontSize: '16px', fontWeight: 'bold', color: '#333', margin: '0 0 6px 0' },
  cardDesc: { fontSize: '13px', color: '#666', lineHeight: '1.4', margin: '0 0 8px 0' },
  badge: { display: 'inline-block', padding: '3px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: 'bold', marginRight: '6px', marginBottom: '4px' },
  premiumBadge: { background: '#f0e6d3', color: '#8B6914' },
  luxuryBadge: { background: '#e8d5f0', color: '#6B1A8B' },
  price: { fontSize: '16px', fontWeight: 'bold', color: '#2E7D32' },
  priceSmall: { fontSize: '13px', color: '#2E7D32', fontWeight: '600' },
  stars: { color: '#DAA520', fontSize: '14px' },
  filterRow: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' },
  filterBtn: { padding: '5px 10px', fontSize: '11px', border: '1px solid #ddd', borderRadius: '14px', background: '#fff', cursor: 'pointer' },
  filterBtnActive: { padding: '5px 10px', fontSize: '11px', border: '1px solid #8B1A1A', borderRadius: '14px', background: '#8B1A1A', color: '#fff', cursor: 'pointer' },
  input: { width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', marginBottom: '10px' },
  select: { width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', marginBottom: '10px', background: '#fff' },
  label: { fontSize: '13px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '4px' },
  btn: { padding: '10px 20px', fontSize: '14px', background: '#8B1A1A', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  btnOutline: { padding: '8px 16px', fontSize: '13px', background: 'transparent', color: '#8B1A1A', border: '2px solid #8B1A1A', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },
  tag: { display: 'inline-block', padding: '2px 6px', fontSize: '10px', background: '#e8f5e9', color: '#2E7D32', borderRadius: '4px', marginRight: '4px', marginBottom: '4px' },
  resultBox: { background: '#f0f7f0', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '12px', marginTop: '12px' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' },
  divider: { height: '1px', background: '#e0d5c8', margin: '10px 0' },
  chip: { display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', margin: '3px', cursor: 'pointer', border: '1px solid #ddd', background: '#fff' },
  chipActive: { display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', margin: '3px', cursor: 'pointer', border: '1px solid #8B1A1A', background: '#8B1A1A', color: '#fff' },
};


// ===== SECTION COMPONENTS =====

function DestinationsSection() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  if (selected) {
    const dest = destinations.find(d => d.id === selected);
    return (
      <div style={styles.section}>
        <button onClick={() => setSelected(null)} style={styles.btnOutline}>Back to All</button>
        <h2 style={{...styles.sectionTitle, marginTop: '12px'}}>{dest.name}</h2>
        <p style={styles.cardDesc}>{dest.description}</p>
        <div style={styles.card}>
          <h4 style={{margin: '0 0 8px 0', fontSize: '14px'}}>Quick Facts</h4>
          {dest.facts.map((f, i) => <p key={i} style={{fontSize: '12px', margin: '4px 0', color: '#555'}}>- {f}</p>)}
        </div>
        <h3 style={{fontSize: '16px', margin: '12px 0 8px'}}>Places to Visit</h3>
        {dest.places.map((p, i) => (
          <div key={i} style={styles.card}>
            <h4 style={styles.cardTitle}>{p.name}</h4>
            <p style={styles.cardDesc}>{p.description}</p>
            {p.entryFee && <span style={styles.priceSmall}>Entry: ${p.entryFee}</span>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Destinations (Dzongkhags)</h2>
      <input style={styles.input} placeholder="Search destinations..." value={search} onChange={e => setSearch(e.target.value)} />
      {filtered.map(dest => (
        <div key={dest.id} style={styles.card} onClick={() => setSelected(dest.id)}>
          <h3 style={styles.cardTitle}>{dest.name}</h3>
          <p style={styles.cardDesc}>{dest.description}</p>
          <span style={{fontSize: '11px', color: '#8B1A1A'}}>{dest.places.length} places to visit &rarr;</span>
        </div>
      ))}
    </div>
  );
}

function ToursSection() {
  const [tierFilter, setTierFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const [selectedTour, setSelectedTour] = useState(null);

  const filtered = tours.filter(t => {
    if (tierFilter !== 'all' && t.tier !== tierFilter) return false;
    if (catFilter !== 'all' && t.category !== catFilter) return false;
    return true;
  });

  if (selectedTour) {
    const tour = tours.find(t => t.id === selectedTour);
    return (
      <div style={styles.section}>
        <button onClick={() => setSelectedTour(null)} style={styles.btnOutline}>Back</button>
        <h2 style={{...styles.sectionTitle, marginTop: '12px'}}>{tour.name}</h2>
        <div style={{display: 'flex', gap: '6px', marginBottom: '8px'}}>
          <span style={{...styles.badge, ...(tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{tour.tier}</span>
          <span style={{...styles.badge, background: '#e3f2fd', color: '#1565C0'}}>{tour.category}</span>
          <span style={{...styles.badge, background: '#fff3e0', color: '#E65100'}}>{tour.duration} days</span>
        </div>
        <p style={styles.cardDesc}>{tour.description}</p>
        <p style={styles.price}>${tour.pricePerPerson.toLocaleString()} / person</p>
        <div style={styles.card}>
          <h4 style={{margin: '0 0 8px 0', fontSize: '14px'}}>Highlights</h4>
          {tour.highlights.map((h, i) => <p key={i} style={{fontSize: '12px', margin: '3px 0'}}>&#10003; {h}</p>)}
        </div>
      </div>
    );
  }

  const categories = ['all', 'honeymoon', 'anniversary', 'cultural', 'adventure', 'festival'];

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Tour Packages</h2>
      <div style={styles.filterRow}>
        {['all', 'premium', 'luxury'].map(t => (
          <button key={t} style={tierFilter === t ? styles.filterBtnActive : styles.filterBtn} onClick={() => setTierFilter(t)}>{t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}</button>
        ))}
      </div>
      <div style={styles.filterRow}>
        {categories.map(c => (
          <button key={c} style={catFilter === c ? styles.filterBtnActive : styles.filterBtn} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}</button>
        ))}
      </div>
      {filtered.map(tour => (
        <div key={tour.id} style={styles.card} onClick={() => setSelectedTour(tour.id)}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <h3 style={{...styles.cardTitle, flex: 1}}>{tour.name}</h3>
            <span style={styles.price}>${tour.pricePerPerson.toLocaleString()}</span>
          </div>
          <div style={{display: 'flex', gap: '4px', marginBottom: '6px'}}>
            <span style={{...styles.badge, ...(tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{tour.tier}</span>
            <span style={{...styles.badge, background: '#fff3e0', color: '#E65100'}}>{tour.duration} days</span>
          </div>
          <p style={styles.cardDesc}>{tour.description}</p>
        </div>
      ))}
    </div>
  );
}


function CalculatorSection() {
  const [persons, setPersons] = useState(2);
  const [days, setDays] = useState(7);
  const [route, setRoute] = useState('Bangkok-Paro');
  const [flightType, setFlightType] = useState('return');
  const [vehicleId, setVehicleId] = useState('hyundai-tucson');
  const [hotelId, setHotelId] = useState('terma-linca');
  const [includeGuide, setIncludeGuide] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const calcTotal = () => {
    const sdf = SDF_RATE * days * persons;
    const visa = VISA_FEE * persons;
    const flightPrices = FLIGHT_PRICES[route];
    const flights = flightPrices ? flightPrices[flightType] * persons : 0;
    const vehicle = vehicles.find(v => v.id === vehicleId);
    const vehicleCost = vehicle ? vehicle.pricePerDay * days : 0;
    const hotel = hotels.find(h => h.id === hotelId);
    const hotelCost = hotel ? hotel.pricePerNight * (days - 1) : 0;
    const guide = includeGuide ? GUIDE_RATE * days : 0;
    const total = sdf + visa + flights + vehicleCost + hotelCost + guide;
    return { sdf, visa, flights, vehicleCost, hotelCost, guide, total };
  };

  const result = showResults ? calcTotal() : null;

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Tour Calculator</h2>
      <p style={{fontSize: '13px', color: '#666', marginBottom: '12px'}}>Calculate your total trip cost with Bhutan's SDF ($200/night/person), visa, flights, vehicle, hotel, and guide.</p>

      <div style={styles.card}>
        <label style={styles.label}>Number of Travelers</label>
        <input type="number" min="1" max="20" value={persons} onChange={e => setPersons(+e.target.value)} style={styles.input} />

        <label style={styles.label}>Days in Bhutan</label>
        <input type="number" min="1" max="30" value={days} onChange={e => setDays(+e.target.value)} style={styles.input} />

        <label style={styles.label}>International Flight Route</label>
        <select value={route} onChange={e => setRoute(e.target.value)} style={styles.select}>
          {Object.keys(FLIGHT_PRICES).map(r => <option key={r} value={r}>{r}</option>)}
        </select>

        <label style={styles.label}>Flight Type</label>
        <select value={flightType} onChange={e => setFlightType(e.target.value)} style={styles.select}>
          <option value="return">Return</option>
          <option value="onward">One-way (Onward)</option>
        </select>

        <label style={styles.label}>Vehicle</label>
        <select value={vehicleId} onChange={e => setVehicleId(e.target.value)} style={styles.select}>
          {vehicles.map(v => <option key={v.id} value={v.id}>{v.name} - ${v.pricePerDay}/day</option>)}
        </select>

        <label style={styles.label}>Hotel</label>
        <select value={hotelId} onChange={e => setHotelId(e.target.value)} style={styles.select}>
          {hotels.map(h => <option key={h.id} value={h.id}>{h.name} ({h.starRating}*) - ${h.pricePerNight}/night</option>)}
        </select>

        <label style={{...styles.label, display: 'flex', alignItems: 'center', gap: '8px'}}>
          <input type="checkbox" checked={includeGuide} onChange={e => setIncludeGuide(e.target.checked)} />
          Include Licensed Guide (${GUIDE_RATE}/day)
        </label>
      </div>

      <button onClick={() => setShowResults(true)} style={{...styles.btn, width: '100%', marginTop: '8px'}}>Calculate Total Cost</button>

      {result && (
        <div style={styles.resultBox}>
          <h3 style={{fontSize: '16px', margin: '0 0 10px', color: '#2E7D32'}}>Cost Breakdown</h3>
          <div style={{fontSize: '13px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>SDF ({days} nights x {persons} persons x ${SDF_RATE})</span><span>${result.sdf.toLocaleString()}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>Visa Fee ({persons} x ${VISA_FEE})</span><span>${result.visa.toLocaleString()}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>Flights ({route}, {flightType})</span><span>${result.flights.toLocaleString()}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>Vehicle ({days} days)</span><span>${result.vehicleCost.toLocaleString()}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>Hotel ({days - 1} nights)</span><span>${result.hotelCost.toLocaleString()}</span></div>
            {includeGuide && <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}><span>Guide ({days} days)</span><span>${result.guide.toLocaleString()}</span></div>}
            <div style={{...styles.divider}} />
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontWeight: 'bold', fontSize: '16px', color: '#2E7D32'}}><span>TOTAL</span><span>${result.total.toLocaleString()}</span></div>
            <p style={{fontSize: '11px', color: '#888', marginTop: '6px'}}>* Per person cost: ${Math.round(result.total / persons).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function VehiclesSection() {
  const [catFilter, setCatFilter] = useState('all');
  const categories = ['all', ...new Set(vehicles.map(v => v.category))];
  const filtered = catFilter === 'all' ? vehicles : vehicles.filter(v => v.category === catFilter);

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Vehicles</h2>
      <div style={styles.filterRow}>
        {categories.map(c => (
          <button key={c} style={catFilter === c ? styles.filterBtnActive : styles.filterBtn} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All' : c}</button>
        ))}
      </div>
      {filtered.map(v => (
        <div key={v.id} style={styles.card}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div>
              <h3 style={styles.cardTitle}>{v.name}</h3>
              <span style={{...styles.badge, background: '#e3f2fd', color: '#1565C0'}}>{v.category}</span>
              <span style={{fontSize: '12px', color: '#666'}}>  Seats: {v.capacity}</span>
            </div>
            <span style={styles.price}>${v.pricePerDay}/day</span>
          </div>
          <div style={{marginTop: '8px'}}>
            {v.features.map((f, i) => <span key={i} style={styles.tag}>{f}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}


function HotelsSection() {
  const [starFilter, setStarFilter] = useState(0);
  const filtered = starFilter === 0 ? hotels : hotels.filter(h => h.starRating === starFilter);
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Hotels</h2>
      <div style={styles.filterRow}>
        {[0, 3, 4, 5].map(s => (
          <button key={s} style={starFilter === s ? styles.filterBtnActive : styles.filterBtn} onClick={() => setStarFilter(s)}>{s === 0 ? 'All' : s + '-Star'}</button>
        ))}
      </div>
      {filtered.map(h => (
        <div key={h.id} style={styles.card} onClick={() => setExpanded(expanded === h.id ? null : h.id)}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div>
              <h3 style={styles.cardTitle}>{h.name}</h3>
              <span style={styles.stars}>{'\u2605'.repeat(h.starRating)}</span>
              <span style={{fontSize: '12px', color: '#666', marginLeft: '8px'}}>{h.location}</span>
            </div>
            <span style={styles.price}>${h.pricePerNight}/nt</span>
          </div>
          <div style={{marginTop: '6px'}}>
            {h.amenities.slice(0, 4).map((a, i) => <span key={i} style={styles.tag}>{a}</span>)}
          </div>
          {expanded === h.id && (
            <div style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee'}}>
              <h4 style={{fontSize: '13px', margin: '0 0 6px'}}>Room Types</h4>
              {h.roomTypes.map((r, i) => (
                <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '3px 0'}}>
                  <span>{r.name}</span><span style={{color: '#2E7D32', fontWeight: '600'}}>${r.price}/night</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FoodSection() {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Food Experiences</h2>
      {foodExperiences.map(food => (
        <div key={food.id} style={styles.card}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <h3 style={styles.cardTitle}>{food.name}</h3>
            <span style={styles.price}>${food.pricePerPerson}/pp</span>
          </div>
          <p style={styles.cardDesc}>{food.description}</p>
          <span style={{fontSize: '11px', color: '#8B1A1A'}}>Duration: {food.duration}</span>
          <div style={{marginTop: '8px'}}>
            {food.menu.map((item, i) => <span key={i} style={styles.tag}>{item}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperiencesSection() {
  const [catFilter, setCatFilter] = useState('all');
  const categories = ['all', 'cultural', 'romantic', 'adventure', 'wellness'];
  const filtered = catFilter === 'all' ? experiences : experiences.filter(e => e.category === catFilter);

  const catColors = { cultural: { bg: '#e3f2fd', color: '#1565C0' }, romantic: { bg: '#fce4ec', color: '#C62828' }, adventure: { bg: '#e8f5e9', color: '#2E7D32' }, wellness: { bg: '#f3e5f5', color: '#6A1B9A' } };

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Experiences</h2>
      <div style={styles.filterRow}>
        {categories.map(c => (
          <button key={c} style={catFilter === c ? styles.filterBtnActive : styles.filterBtn} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}</button>
        ))}
      </div>
      {filtered.map(exp => {
        const cc = catColors[exp.category] || { bg: '#f5f5f5', color: '#333' };
        return (
          <div key={exp.id} style={styles.card}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div style={{flex: 1}}>
                <h3 style={styles.cardTitle}>{exp.name}</h3>
                <span style={{...styles.badge, background: cc.bg, color: cc.color}}>{exp.category}</span>
              </div>
              <div style={{textAlign: 'right'}}>
                <span style={styles.price}>${exp.price}</span>
                <p style={{fontSize: '10px', color: '#888', margin: '2px 0 0'}}>{exp.priceType.replace('_', ' ')}</p>
              </div>
            </div>
            <p style={styles.cardDesc}>{exp.description}</p>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#888'}}>
              <span>{exp.duration}</span><span>{exp.location}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function CustomizeSection() {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState(7);
  const [interests, setInterests] = useState([]);
  const [groupSize, setGroupSize] = useState(2);
  const [results, setResults] = useState(null);

  const tripTypes = ['honeymoon', 'anniversary', 'cultural', 'adventure', 'wellness', 'festival'];
  const budgetOptions = ['moderate', 'premium', 'luxury'];
  const interestOptions = ['monasteries', 'nature', 'food', 'wellness', 'adventure', 'romance', 'photography', 'history'];

  const toggleInterest = (i) => {
    setInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const generateRecommendations = () => {
    const tier = budget === 'luxury' ? 'luxury' : 'premium';
    const starRating = budget === 'moderate' ? 3 : budget === 'premium' ? 4 : 5;

    let tieredTours = tours.filter(t => t.tier === tier);
    if (budget === 'moderate') tieredTours = tieredTours.filter(t => t.pricePerPerson <= 3000);

    const scored = tieredTours.map(tour => {
      let score = 0;
      if (tour.category === tripType) score += 40;
      const dDiff = Math.abs(tour.duration - duration);
      if (dDiff <= 1) score += 30;
      else if (dDiff <= 2) score += 20;
      else if (dDiff <= 3) score += 10;
      if (tour.tier === tier) score += 30;
      return { tour, score: Math.min(score, 100) };
    }).sort((a, b) => b.score - a.score).slice(0, 3);

    const matchingHotels = hotels.filter(h => h.starRating === starRating);
    const selectedHotel = matchingHotels[0] || hotels[0];

    // Vehicle selection by group size
    let selectedVehicle;
    if (groupSize <= 2) selectedVehicle = vehicles.find(v => v.category === 'Sedan');
    else if (groupSize <= 5) selectedVehicle = vehicles.find(v => v.category === 'Luxury SUV');
    else selectedVehicle = vehicles.find(v => v.capacity >= groupSize) || vehicles.find(v => v.category === 'Bus');

    const recs = scored.map(({ tour, score }) => {
      const tourCost = tour.pricePerPerson * groupSize;
      const hotelCost = selectedHotel.pricePerNight * (tour.duration - 1);
      const vehicleCost = selectedVehicle.pricePerDay * tour.duration;
      const sdfCost = SDF_RATE * tour.duration * groupSize;
      const visaCost = VISA_FEE * groupSize;
      const total = tourCost + hotelCost + vehicleCost + sdfCost + visaCost;
      return { tour, score, hotel: selectedHotel, vehicle: selectedVehicle, total, breakdown: [
        { cat: 'Tour Package', amt: tourCost },
        { cat: 'SDF', amt: sdfCost },
        { cat: 'Visa', amt: visaCost },
        { cat: 'Hotel', amt: hotelCost },
        { cat: 'Vehicle', amt: vehicleCost },
      ]};
    });
    setResults(recs);
    setStep(6);
  };

  if (results && step === 6) {
    return (
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Your Recommendations</h2>
        <button onClick={() => { setResults(null); setStep(1); }} style={styles.btnOutline}>Start Over</button>
        {results.map((rec, idx) => (
          <div key={idx} style={{...styles.card, marginTop: '12px', borderLeft: idx === 0 ? '4px solid #2E7D32' : '4px solid #ddd'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3 style={styles.cardTitle}>{rec.tour.name}</h3>
              <span style={{...styles.badge, background: '#e8f5e9', color: '#2E7D32'}}>{rec.score}% match</span>
            </div>
            <p style={styles.cardDesc}>{rec.tour.description}</p>
            <div style={{fontSize: '12px', color: '#555', marginBottom: '8px'}}>
              <span style={{...styles.badge, ...(rec.tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{rec.tour.tier}</span>
              <span>{rec.tour.duration} days</span>
            </div>
            <div style={{fontSize: '12px', margin: '8px 0'}}>
              <p style={{margin: '2px 0'}}><strong>Hotel:</strong> {rec.hotel.name} ({rec.hotel.starRating} stars)</p>
              <p style={{margin: '2px 0'}}><strong>Vehicle:</strong> {rec.vehicle.name}</p>
            </div>
            <div style={styles.divider} />
            {rec.breakdown.map((b, i) => (
              <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '2px 0'}}>
                <span>{b.cat}</span><span>${b.amt.toLocaleString()}</span>
              </div>
            ))}
            <div style={{...styles.divider}} />
            <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#2E7D32'}}>
              <span>Estimated Total</span><span>${rec.total.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Customize Your Trip</h2>
      <p style={{fontSize: '13px', color: '#666', marginBottom: '12px'}}>Answer a few questions and we will recommend the perfect Bhutan package for you.</p>

      <div style={{...styles.card, marginBottom: '16px'}}>
        <div style={{display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px'}}>
          {[1,2,3,4,5].map(s => (
            <div key={s} style={{width: '36px', height: '4px', borderRadius: '2px', background: s <= step ? '#8B1A1A' : '#ddd'}} />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h3 style={{fontSize: '15px', margin: '0 0 10px'}}>What is your occasion?</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {tripTypes.map(t => (
                <span key={t} style={tripType === t ? styles.chipActive : styles.chip} onClick={() => setTripType(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
              ))}
            </div>
            <button disabled={!tripType} onClick={() => setStep(2)} style={{...styles.btn, marginTop: '16px', width: '100%', opacity: tripType ? 1 : 0.5}}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{fontSize: '15px', margin: '0 0 10px'}}>What is your budget level?</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {budgetOptions.map(b => (
                <span key={b} style={budget === b ? styles.chipActive : styles.chip} onClick={() => setBudget(b)}>
                  {b.charAt(0).toUpperCase() + b.slice(1)}
                  {b === 'moderate' ? ' ($2,500-3,000/pp)' : b === 'premium' ? ' ($2,800-3,500/pp)' : ' ($6,000-8,000/pp)'}
                </span>
              ))}
            </div>
            <div style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
              <button onClick={() => setStep(1)} style={styles.btnOutline}>Back</button>
              <button disabled={!budget} onClick={() => setStep(3)} style={{...styles.btn, flex: 1, opacity: budget ? 1 : 0.5}}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 style={{fontSize: '15px', margin: '0 0 10px'}}>How many days?</h3>
            <input type="range" min="3" max="21" value={duration} onChange={e => setDuration(+e.target.value)} style={{width: '100%'}} />
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: '#8B1A1A'}}>{duration} days</p>
            <div style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
              <button onClick={() => setStep(2)} style={styles.btnOutline}>Back</button>
              <button onClick={() => setStep(4)} style={{...styles.btn, flex: 1}}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 style={{fontSize: '15px', margin: '0 0 10px'}}>What interests you?</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {interestOptions.map(i => (
                <span key={i} style={interests.includes(i) ? styles.chipActive : styles.chip} onClick={() => toggleInterest(i)}>{i.charAt(0).toUpperCase() + i.slice(1)}</span>
              ))}
            </div>
            <div style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
              <button onClick={() => setStep(3)} style={styles.btnOutline}>Back</button>
              <button disabled={interests.length === 0} onClick={() => setStep(5)} style={{...styles.btn, flex: 1, opacity: interests.length ? 1 : 0.5}}>Next</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 style={{fontSize: '15px', margin: '0 0 10px'}}>Group size?</h3>
            <input type="number" min="1" max="20" value={groupSize} onChange={e => setGroupSize(+e.target.value)} style={styles.input} />
            <div style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
              <button onClick={() => setStep(4)} style={styles.btnOutline}>Back</button>
              <button onClick={generateRecommendations} style={{...styles.btn, flex: 1}}>Get Recommendations</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// ===== MAIN APP =====
export default function App() {
  const [page, setPage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'tours', label: 'Tours' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'food', label: 'Food' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'customize', label: 'Customize' },
  ];

  const renderPage = () => {
    switch (page) {
      case 'destinations': return <DestinationsSection />;
      case 'tours': return <ToursSection />;
      case 'calculator': return <CalculatorSection />;
      case 'vehicles': return <VehiclesSection />;
      case 'hotels': return <HotelsSection />;
      case 'food': return <FoodSection />;
      case 'experiences': return <ExperiencesSection />;
      case 'customize': return <CustomizeSection />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Bhutan Experience Library</h1>
        <p style={styles.headerSub}>Land of the Thunder Dragon</p>
      </header>
      <nav style={styles.nav}>
        {navItems.map(item => (
          <button key={item.id} style={page === item.id ? styles.navBtnActive : styles.navBtn} onClick={() => setPage(item.id)}>{item.label}</button>
        ))}
      </nav>
      {renderPage()}
      <footer style={{textAlign: 'center', padding: '20px', fontSize: '11px', color: '#888', background: '#f0ebe3'}}>
        <p>Altara Bhutan Experience Library</p>
        <p>SDF: $200/person/night | Visa: $40/person</p>
      </footer>
    </div>
  );
}

function HomePage({ setPage }) {
  const stats = [
    { label: 'Dzongkhags', value: destinations.length },
    { label: 'Tour Packages', value: tours.length },
    { label: 'Hotels', value: hotels.length },
    { label: 'Experiences', value: experiences.length },
  ];

  const sections = [
    { id: 'destinations', title: 'Destinations', desc: 'Explore 10+ Dzongkhags', color: '#8B1A1A' },
    { id: 'tours', title: 'Tours', desc: 'Premium & Luxury packages', color: '#6B1A8B' },
    { id: 'calculator', title: 'Calculator', desc: 'Compute total trip cost', color: '#2E7D32' },
    { id: 'vehicles', title: 'Vehicles', desc: 'SUVs, EVs, Premium', color: '#1565C0' },
    { id: 'hotels', title: 'Hotels', desc: '3 to 5-star options', color: '#DAA520' },
    { id: 'food', title: 'Food', desc: 'Dining experiences', color: '#E65100' },
    { id: 'experiences', title: 'Experiences', desc: 'Cultural to Adventure', color: '#00695C' },
    { id: 'customize', title: 'Customize', desc: 'Get matched packages', color: '#C62828' },
  ];

  return (
    <div style={styles.section}>
      <div style={{textAlign: 'center', padding: '20px 0'}}>
        <h2 style={{fontSize: '22px', color: '#8B1A1A', margin: '0 0 8px'}}>Welcome to Bhutan</h2>
        <p style={{fontSize: '14px', color: '#666', lineHeight: '1.5'}}>Discover the last Shangri-La. A Buddhist kingdom in the Himalayas known for Gross National Happiness, ancient monasteries, and pristine nature.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '16px 0'}}>
        {stats.map((s, i) => (
          <div key={i} style={{...styles.card, textAlign: 'center', padding: '12px'}}>
            <p style={{fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', margin: '0'}}>{s.value}</p>
            <p style={{fontSize: '11px', color: '#666', margin: '4px 0 0'}}>{s.label}</p>
          </div>
        ))}
      </div>

      <h3 style={{fontSize: '16px', margin: '16px 0 10px', color: '#333'}}>Explore</h3>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
        {sections.map(s => (
          <div key={s.id} style={{...styles.card, cursor: 'pointer', borderLeft: `3px solid ${s.color}`, padding: '12px'}} onClick={() => setPage(s.id)}>
            <h4 style={{fontSize: '13px', fontWeight: 'bold', margin: '0 0 4px', color: s.color}}>{s.title}</h4>
            <p style={{fontSize: '11px', color: '#666', margin: 0}}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div style={{...styles.card, marginTop: '16px', background: '#fef9f0', border: '1px solid #f5deb3'}}>
        <h3 style={{fontSize: '14px', margin: '0 0 8px', color: '#8B6914'}}>Bhutan Travel Essentials</h3>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; SDF (Sustainable Development Fee): $200/person/night</p>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; Visa Fee: $40/person (one-time)</p>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; Currency: Bhutanese Ngultrum (BTN), Indian Rupee accepted</p>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; Best Season: March-May, September-November</p>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; Only airport: Paro International</p>
        <p style={{fontSize: '12px', margin: '3px 0'}}>&#8226; All tourists need licensed guide and pre-arranged booking</p>
      </div>
    </div>
  );
}
