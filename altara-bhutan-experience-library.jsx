import React, { useState } from 'react';

// ===== BRAND COLORS =====
const BRAND = {
  deepGreen: '#1B3D2F',
  gold: '#C9A94E',
  ivory: '#FDFBF5',
  charcoal: '#1A1A1A',
  white: '#FFFFFF',
};

// ===== SVG LOGO COMPONENTS =====

// LogoMark - Abstract lotus/Tara icon (minimal, geometric, works at 24px-200px)
function LogoMark({ size = 40, color = BRAND.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center petal - upward flame/lotus bud */}
      <path d="M32 6 C32 6 26 20 26 32 C26 40 28.5 46 32 50 C35.5 46 38 40 38 32 C38 20 32 6 32 6Z" fill={color} opacity="0.95"/>
      {/* Left outer petal */}
      <path d="M20 52 C20 52 18 38 22 28 C25 21 28 18 30 16 C26 22 23 30 23 38 C23 44 24 48 20 52Z" fill={color} opacity="0.6"/>
      {/* Right outer petal */}
      <path d="M44 52 C44 52 46 38 42 28 C39 21 36 18 34 16 C38 22 41 30 41 38 C41 44 40 48 44 52Z" fill={color} opacity="0.6"/>
      {/* Far left petal */}
      <path d="M14 54 C14 54 14 42 18 34 C21 28 24 24 27 20 C22 27 18 34 17 40 C16 45 15 50 14 54Z" fill={color} opacity="0.35"/>
      {/* Far right petal */}
      <path d="M50 54 C50 54 50 42 46 34 C43 28 40 24 37 20 C42 27 46 34 47 40 C48 45 49 50 50 54Z" fill={color} opacity="0.35"/>
      {/* Base arc - grounding element */}
      <path d="M18 56 Q32 60 46 56" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7"/>
      {/* Small circle at top - enlightenment dot */}
      <circle cx="32" cy="8" r="1.5" fill={color} opacity="0.8"/>
    </svg>
  );
}

// Wordmark - "altara" with macron over second a
function Wordmark({ height = 24, color = BRAND.ivory }) {
  const fontSize = height * 1.4;
  return (
    <svg height={height} viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="32"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={fontSize > 40 ? 40 : fontSize}
        fontWeight="normal"
        fill={color}
        letterSpacing="3"
        style={{ fontVariantLigatures: 'none' }}
      >
        {'alt\u0101ra'}
      </text>
    </svg>
  );
}

// Full Logo - Icon + Wordmark side by side (for header)
function FullLogo({ height = 36, iconColor = BRAND.gold, textColor = BRAND.ivory }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <LogoMark size={height} color={iconColor} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: height * 0.6 + 'px',
          color: textColor,
          letterSpacing: '3px',
          fontWeight: 'normal',
          lineHeight: '1.1',
        }}>
          {'alt\u0101ra'}
        </span>
        <span style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '9px',
          color: textColor,
          opacity: 0.7,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}>
          Elevated Journeys
        </span>
      </div>
    </div>
  );
}

// WordmarkOnly - Just the text for tight spaces (footer)
function WordmarkOnly({ size = 20, color = BRAND.ivory }) {
  return (
    <span style={{
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontSize: size + 'px',
      color: color,
      letterSpacing: '3px',
      fontWeight: 'normal',
    }}>
      {'alt\u0101ra'}
    </span>
  );
}

// ===== CURRENCY CONVERSION =====
const BTN_RATE = 84;

// ===== IMAGE URLS =====
const images = {
  hero: 'https://images.unsplash.com/photo-1571401835393-8c5f40e6aed8?w=1200&q=80',
  tigersNest: 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=800&q=80',
  punakhaDzong: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
  monastery: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
  mountains: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  luxuryHotel: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  food: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
  luxurySuv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
  rafting: 'https://images.unsplash.com/photo-1530866495561-507c83d3e607?w=800&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  romanticDinner: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  valley: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  culture: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  adventure: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  sedan: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0abe?w=800&q=80',
  bus: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
  electric: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  premium: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  hotel3: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  hotel4: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  hotel5: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  cooking: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  picnic: 'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=800&q=80',
  tea: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
  feast: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  wellness: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  archery: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?w=800&q=80',
  yoga: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  honeymoon: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80',
  festival: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80',
};

const destImages = {
  thimphu: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
  paro: 'https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=800&q=80',
  punakha: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
  bumthang: 'https://images.unsplash.com/photo-1571401835393-8c5f40e6aed8?w=800&q=80',
  haa: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  wangdue: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  trongsa: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  gasa: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  trashigang: 'https://images.unsplash.com/photo-1571401835393-8c5f40e6aed8?w=800&q=80',
  mongar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
};

const tourImages = {
  honeymoon: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&q=80',
  anniversary: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  cultural: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  adventure: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  festival: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80',
};

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
  { id: "traditional-set-menu", name: "Traditional Bhutanese Set Menu", description: "Complete traditional meal with beloved Bhutanese dishes.", pricePerPerson: 25, menu: ["Ema Datshi", "Red Rice", "Phaksha Paa", "Jasha Maru", "Kewa Datshi", "Suja butter tea"], duration: "1.5 hours", image: images.food },
  { id: "royal-feast", name: "Royal Bhutanese Feast", description: "Lavish multi-course feast inspired by royal cuisine.", pricePerPerson: 60, menu: ["Suja welcome", "Momos", "Sikam Datshi", "Shakam Ema Datshi", "Juma sausage", "Hoentoe", "Ara rice wine", "Dessert platter"], duration: "2.5 hours", image: images.feast },
  { id: "hot-stone-bath-dinner", name: "Hot Stone Bath & Dinner", description: "Wellness-dining combo with traditional Dotsho bath and dinner.", pricePerPerson: 80, menu: ["Herbal tea", "Hot stone bath", "Post-bath Ara", "Grilled fish or chicken", "Organic vegetables", "Red rice", "Fruit dessert"], duration: "3 hours", image: images.spa },
  { id: "farm-to-table", name: "Farm-to-Table Experience", description: "Visit organic farm, harvest ingredients, and enjoy fresh meal.", pricePerPerson: 45, menu: ["Farm tour", "Fresh salad", "Vegetable curry", "Organic red rice", "Homemade cheese", "Farm honey", "Herbal tea"], duration: "3 hours", image: images.picnic },
  { id: "cooking-class", name: "Bhutanese Cooking Class", description: "Learn authentic Bhutanese cooking from local chef.", pricePerPerson: 35, menu: ["Market visit", "Ema Datshi making", "Momo workshop", "Red rice technique", "Ezay sauce", "Suja making"], duration: "4 hours", image: images.cooking },
  { id: "candlelight-dinner", name: "Romantic Candlelight Dinner", description: "Exclusive private dining with mountain views and live music.", pricePerPerson: 60, menu: ["Champagne welcome", "Wild mushroom soup", "River trout", "Bhutanese-spiced lamb", "Saffron rice", "Chocolate chili dessert"], duration: "2.5 hours", image: images.romanticDinner },
  { id: "riverside-picnic", name: "Riverside Picnic", description: "Curated gourmet picnic by a pristine river.", pricePerPerson: 50, menu: ["Artisan bread", "Bhutanese cheese", "Cold momo platter", "Fruit basket", "Smoked trout", "Butter tea"], duration: "2 hours", image: images.picnic },
  { id: "monastery-tea", name: "Monastery Tea Ceremony", description: "Peaceful tea ceremony at a Buddhist monastery.", pricePerPerson: 20, menu: ["Suja butter tea", "Ngaja sweet tea", "Zaw puffed rice", "Khur-le pancake", "Dried fruits", "Monastery bread"], duration: "1 hour", image: images.tea },
];

const experiences = [
  { id: "simply-bhutan", name: "Simply Bhutan Museum", category: "cultural", description: "Interactive living museum of traditional Bhutanese lifestyle.", price: 15, priceType: "per_person", duration: "1.5 hours", location: "Thimphu", image: images.culture },
  { id: "monastery-visit", name: "Monastery Visit with Monk Guide", category: "cultural", description: "Guided visit to an active Buddhist monastery.", price: 15, priceType: "per_person", duration: "2 hours", location: "Multiple", image: images.monastery },
  { id: "dzong-tour", name: "Dzong Guided Tour", category: "cultural", description: "In-depth guided tour of a traditional Dzong.", price: 10, priceType: "per_person", duration: "1.5 hours", location: "Multiple", image: images.punakhaDzong },
  { id: "archery", name: "Traditional Archery", category: "cultural", description: "Try Bhutan's national sport with bamboo bows.", price: 25, priceType: "per_person", duration: "2 hours", location: "Thimphu", image: images.archery },
  { id: "mask-dance", name: "Mask Dance Performance", category: "cultural", description: "Private Cham masked dance performance.", price: 30, priceType: "per_person", duration: "1.5 hours", location: "Paro", image: images.festival },
  { id: "candlelight-view", name: "Candlelight Dinner - Tiger's Nest View", category: "romantic", description: "Exclusive dinner overlooking illuminated Tiger's Nest.", price: 200, priceType: "per_couple", duration: "3 hours", location: "Paro", image: images.romanticDinner },
  { id: "couples-spa", name: "Couples Spa at Hot Springs", category: "romantic", description: "Luxurious couples spa with hot stone bath and massage.", price: 150, priceType: "per_couple", duration: "3 hours", location: "Punakha", image: images.spa },
  { id: "sunrise-trek", name: "Romantic Sunrise Trek", category: "romantic", description: "Early morning trek for breathtaking Himalayan sunrise.", price: 50, priceType: "per_person", duration: "4 hours", location: "Paro", image: images.mountains },
  { id: "river-rafting", name: "Couples River Rafting", category: "romantic", description: "Scenic rafting on Mo Chhu with riverside picnic.", price: 60, priceType: "per_person", duration: "3 hours", location: "Punakha", image: images.rafting },
  { id: "mountain-biking", name: "Mountain Biking Adventure", category: "adventure", description: "Biking through valleys, forests, and villages.", price: 45, priceType: "per_person", duration: "4 hours", location: "Paro Valley", image: images.adventure },
  { id: "white-water-rafting", name: "White Water Rafting", category: "adventure", description: "Navigate Class II-IV rapids through stunning gorges.", price: 60, priceType: "per_person", duration: "4 hours", location: "Punakha", image: images.rafting },
  { id: "rock-climbing", name: "Rock Climbing", category: "adventure", description: "Guided climbing on natural cliff faces.", price: 40, priceType: "per_person", duration: "3 hours", location: "Thimphu", image: images.adventure },
  { id: "paragliding", name: "Paragliding over Paro Valley", category: "adventure", description: "Tandem paragliding with bird's-eye views.", price: 80, priceType: "per_person", duration: "1 hour", location: "Paro", image: images.mountains },
  { id: "hot-stone-bath", name: "Traditional Hot Stone Bath", category: "wellness", description: "Traditional Dotsho with river stones and healing herbs.", price: 30, priceType: "per_person", duration: "1.5 hours", location: "Multiple", image: images.spa },
  { id: "traditional-medicine", name: "Traditional Medicine Consultation", category: "wellness", description: "Consultation with Drungtsho practitioner.", price: 50, priceType: "per_person", duration: "1 hour", location: "Thimphu", image: images.wellness },
  { id: "meditation-retreat", name: "Meditation Retreat", category: "wellness", description: "Guided meditation at a peaceful monastery.", price: 100, priceType: "per_day", duration: "Full day", location: "Bumthang", image: images.monastery },
  { id: "yoga-session", name: "Mountain Yoga Session", category: "wellness", description: "Guided yoga in stunning mountain setting.", price: 25, priceType: "per_person", duration: "1.5 hours", location: "Paro", image: images.yoga },
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


// ===== STYLES (Luxury aesthetic - altara brand) =====
const styles = {
  app: { fontFamily: 'Georgia, "Times New Roman", serif', maxWidth: '100vw', minHeight: '100vh', background: BRAND.ivory, color: BRAND.charcoal, overflowX: 'hidden' },
  header: { background: BRAND.deepGreen, color: BRAND.ivory, padding: '20px 16px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(27,61,47,0.3)' },
  headerInner: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' },
  headerTitle: { fontSize: '22px', fontWeight: 'normal', margin: 0, letterSpacing: '3px', fontFamily: 'Georgia, serif' },
  headerSub: { fontSize: '10px', textAlign: 'left', opacity: 0.7, margin: '4px 0 0 0', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  currencyToggle: { display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', padding: '4px 4px', border: '1px solid rgba(201,169,78,0.3)' },
  currencyBtn: { padding: '6px 12px', fontSize: '11px', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  currencyBtnActive: { background: BRAND.gold, color: BRAND.charcoal },
  currencyBtnInactive: { background: 'transparent', color: BRAND.ivory },
  nav: { display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '14px 16px', background: BRAND.ivory, borderBottom: '1px solid #E8E2D9', justifyContent: 'center' },
  navBtn: { padding: '8px 14px', fontSize: '12px', border: '1px solid #E8E2D9', borderRadius: '20px', background: BRAND.ivory, cursor: 'pointer', whiteSpace: 'nowrap', color: BRAND.charcoal, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '0.5px' },
  navBtnActive: { padding: '8px 14px', fontSize: '12px', border: '1px solid ' + BRAND.gold, borderRadius: '20px', background: BRAND.gold, color: BRAND.charcoal, cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: '600', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '0.5px' },
  section: { padding: '24px 16px', maxWidth: '900px', margin: '0 auto' },
  sectionTitle: { fontSize: '28px', fontWeight: 'normal', color: BRAND.charcoal, marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid ' + BRAND.gold, letterSpacing: '1px', fontFamily: 'Georgia, serif' },
  card: { background: BRAND.white, borderRadius: '16px', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #F0EBE3' },
  cardBody: { padding: '18px' },
  cardImage: { width: '100%', height: '200px', objectFit: 'cover', display: 'block' },
  cardTitle: { fontSize: '18px', fontWeight: 'normal', color: BRAND.charcoal, margin: '0 0 8px 0', fontFamily: 'Georgia, serif', letterSpacing: '0.3px' },
  cardDesc: { fontSize: '14px', color: '#666', lineHeight: '1.6', margin: '0 0 10px 0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  badge: { display: 'inline-block', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600', marginRight: '6px', marginBottom: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  premiumBadge: { background: '#F5F0E8', color: BRAND.gold },
  luxuryBadge: { background: '#F0E8F5', color: '#6B1A8B' },
  price: { fontSize: '18px', fontWeight: '600', color: BRAND.deepGreen },
  priceSmall: { fontSize: '14px', color: BRAND.deepGreen, fontWeight: '600' },
  stars: { color: BRAND.gold, fontSize: '16px' },
  filterRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' },
  filterBtn: { padding: '7px 14px', fontSize: '12px', border: '1px solid #E8E2D9', borderRadius: '18px', background: BRAND.ivory, cursor: 'pointer', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  filterBtnActive: { padding: '7px 14px', fontSize: '12px', border: '1px solid ' + BRAND.gold, borderRadius: '18px', background: BRAND.gold, color: BRAND.charcoal, cursor: 'pointer', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  input: { width: '100%', padding: '12px 16px', fontSize: '14px', border: '1px solid #E8E2D9', borderRadius: '10px', boxSizing: 'border-box', marginBottom: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: BRAND.ivory },
  select: { width: '100%', padding: '12px 16px', fontSize: '14px', border: '1px solid #E8E2D9', borderRadius: '10px', boxSizing: 'border-box', marginBottom: '12px', background: BRAND.ivory, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  label: { fontSize: '13px', fontWeight: '600', color: '#555', display: 'block', marginBottom: '6px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase' },
  btn: { padding: '12px 24px', fontSize: '14px', background: BRAND.gold, color: BRAND.charcoal, border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600', letterSpacing: '0.5px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  btnOutline: { padding: '10px 20px', fontSize: '13px', background: 'transparent', color: BRAND.gold, border: '1.5px solid ' + BRAND.gold, borderRadius: '10px', cursor: 'pointer', fontWeight: '600', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  tag: { display: 'inline-block', padding: '3px 8px', fontSize: '11px', background: '#F5F0E8', color: BRAND.gold, borderRadius: '6px', marginRight: '4px', marginBottom: '4px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  resultBox: { background: '#F8F5F0', border: '1px solid #E8E2D9', borderRadius: '12px', padding: '16px', marginTop: '16px' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' },
  divider: { height: '1px', background: '#E8E2D9', margin: '12px 0' },
  chip: { display: 'inline-block', padding: '8px 16px', borderRadius: '24px', fontSize: '13px', margin: '4px', cursor: 'pointer', border: '1px solid #E8E2D9', background: BRAND.white, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  chipActive: { display: 'inline-block', padding: '8px 16px', borderRadius: '24px', fontSize: '13px', margin: '4px', cursor: 'pointer', border: '1px solid ' + BRAND.gold, background: BRAND.gold, color: BRAND.charcoal, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  hero: { position: 'relative', width: '100%', height: '400px', overflow: 'hidden' },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px 24px' },
  heroTitle: { color: '#fff', fontSize: '36px', fontWeight: 'normal', margin: '0 0 8px', fontFamily: 'Georgia, serif', letterSpacing: '2px' },
  heroSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: '14px', margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '2px', textTransform: 'uppercase' },
};

// ===== HELPER: Format price based on currency =====
function formatPrice(usdAmount, currency) {
  if (currency === 'BTN') {
    const btnAmount = Math.round(usdAmount * BTN_RATE);
    return 'Nu. ' + btnAmount.toLocaleString();
  }
  return '$' + usdAmount.toLocaleString();
}


// ===== SECTION COMPONENTS =====

function DestinationsSection({ currency }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const filtered = destinations.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  if (selected) {
    const dest = destinations.find(d => d.id === selected);
    return (
      <div style={styles.section}>
        <button onClick={() => setSelected(null)} style={styles.btnOutline}>&larr; Back to All</button>
        <h2 style={{...styles.sectionTitle, marginTop: '16px'}}>{dest.name}</h2>
        <img src={destImages[dest.id] || images.mountains} alt={dest.name} style={{...styles.cardImage, borderRadius: '16px', marginBottom: '16px', height: '240px'}} />
        <p style={styles.cardDesc}>{dest.description}</p>
        <div style={{...styles.card, marginTop: '16px'}}>
          <div style={styles.cardBody}>
            <h4 style={{margin: '0 0 10px 0', fontSize: '16px', fontFamily: 'Georgia, serif'}}>Quick Facts</h4>
            {dest.facts.map((f, i) => <p key={i} style={{fontSize: '13px', margin: '6px 0', color: '#555', fontFamily: '-apple-system, sans-serif'}}>&#8226; {f}</p>)}
          </div>
        </div>
        <h3 style={{fontSize: '20px', margin: '20px 0 12px', fontFamily: 'Georgia, serif'}}>Places to Visit</h3>
        {dest.places.map((p, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardBody}>
              <h4 style={styles.cardTitle}>{p.name}</h4>
              <p style={styles.cardDesc}>{p.description}</p>
              {p.entryFee && <span style={styles.priceSmall}>Entry: {formatPrice(p.entryFee, currency)}</span>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Destinations</h2>
      <p style={{...styles.cardDesc, marginBottom: '16px'}}>Explore the twenty Dzongkhags of the Kingdom of Bhutan</p>
      <input style={styles.input} placeholder="Search destinations..." value={search} onChange={e => setSearch(e.target.value)} />
      {filtered.map(dest => (
        <div key={dest.id} style={{...styles.card, cursor: 'pointer'}} onClick={() => setSelected(dest.id)}>
          <img src={destImages[dest.id] || images.mountains} alt={dest.name} style={styles.cardImage} />
          <div style={styles.cardBody}>
            <h3 style={styles.cardTitle}>{dest.name}</h3>
            <p style={styles.cardDesc}>{dest.description}</p>
            <span style={{fontSize: '12px', color: BRAND.gold, fontFamily: '-apple-system, sans-serif'}}>{dest.places.length} places to visit &rarr;</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ToursSection({ currency }) {
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
        <button onClick={() => setSelectedTour(null)} style={styles.btnOutline}>&larr; Back</button>
        <h2 style={{...styles.sectionTitle, marginTop: '16px'}}>{tour.name}</h2>
        <img src={tourImages[tour.category] || images.mountains} alt={tour.name} style={{...styles.cardImage, borderRadius: '16px', marginBottom: '16px', height: '240px'}} />
        <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
          <span style={{...styles.badge, ...(tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{tour.tier}</span>
          <span style={{...styles.badge, background: '#EBF4FF', color: '#1565C0'}}>{tour.category}</span>
          <span style={{...styles.badge, background: '#FFF3E0', color: '#E65100'}}>{tour.duration} days</span>
        </div>
        <p style={styles.cardDesc}>{tour.description}</p>
        <p style={styles.price}>{formatPrice(tour.pricePerPerson, currency)} / person</p>
        <div style={{...styles.card, marginTop: '16px'}}>
          <div style={styles.cardBody}>
            <h4 style={{margin: '0 0 10px 0', fontSize: '16px', fontFamily: 'Georgia, serif'}}>Highlights</h4>
            {tour.highlights.map((h, i) => <p key={i} style={{fontSize: '13px', margin: '6px 0', fontFamily: '-apple-system, sans-serif'}}>&#10003; {h}</p>)}
          </div>
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
          <button key={t} style={tierFilter === t ? styles.filterBtnActive : styles.filterBtn} onClick={() => setTierFilter(t)}>{t === 'all' ? 'All Tiers' : t.charAt(0).toUpperCase() + t.slice(1)}</button>
        ))}
      </div>
      <div style={styles.filterRow}>
        {categories.map(c => (
          <button key={c} style={catFilter === c ? styles.filterBtnActive : styles.filterBtn} onClick={() => setCatFilter(c)}>{c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}</button>
        ))}
      </div>
      {filtered.map(tour => (
        <div key={tour.id} style={{...styles.card, cursor: 'pointer'}} onClick={() => setSelectedTour(tour.id)}>
          <img src={tourImages[tour.category] || images.mountains} alt={tour.name} style={{...styles.cardImage, height: '180px'}} />
          <div style={styles.cardBody}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h3 style={{...styles.cardTitle, flex: 1}}>{tour.name}</h3>
              <span style={styles.price}>{formatPrice(tour.pricePerPerson, currency)}</span>
            </div>
            <div style={{display: 'flex', gap: '6px', marginBottom: '8px'}}>
              <span style={{...styles.badge, ...(tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{tour.tier}</span>
              <span style={{...styles.badge, background: '#FFF3E0', color: '#E65100'}}>{tour.duration} days</span>
            </div>
            <p style={styles.cardDesc}>{tour.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


function CalculatorSection({ currency }) {
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
      <p style={{...styles.cardDesc, marginBottom: '16px'}}>Calculate your total trip cost including Bhutan's Sustainable Development Fee, visa, flights, vehicle, hotel, and guide.</p>

      <div style={styles.card}>
        <div style={styles.cardBody}>
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
            {vehicles.map(v => <option key={v.id} value={v.id}>{v.name} - {formatPrice(v.pricePerDay, currency)}/day</option>)}
          </select>

          <label style={styles.label}>Hotel</label>
          <select value={hotelId} onChange={e => setHotelId(e.target.value)} style={styles.select}>
            {hotels.map(h => <option key={h.id} value={h.id}>{h.name} ({h.starRating}*) - {formatPrice(h.pricePerNight, currency)}/night</option>)}
          </select>

          <label style={{...styles.label, display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'none'}}>
            <input type="checkbox" checked={includeGuide} onChange={e => setIncludeGuide(e.target.checked)} />
            Include Licensed Guide ({formatPrice(GUIDE_RATE, currency)}/day)
          </label>
        </div>
      </div>

      <button onClick={() => setShowResults(true)} style={{...styles.btn, width: '100%', marginTop: '12px'}}>Calculate Total Cost</button>

      {result && (
        <div style={styles.resultBox}>
          <h3 style={{fontSize: '18px', margin: '0 0 12px', color: BRAND.deepGreen, fontFamily: 'Georgia, serif'}}>Cost Breakdown</h3>
          <div style={{fontSize: '14px', fontFamily: '-apple-system, sans-serif'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>SDF ({days} nights x {persons} persons x {formatPrice(SDF_RATE, currency)})</span><span>{formatPrice(result.sdf, currency)}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>Visa Fee ({persons} x {formatPrice(VISA_FEE, currency)})</span><span>{formatPrice(result.visa, currency)}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>Flights ({route}, {flightType})</span><span>{formatPrice(result.flights, currency)}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>Vehicle ({days} days)</span><span>{formatPrice(result.vehicleCost, currency)}</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>Hotel ({days - 1} nights)</span><span>{formatPrice(result.hotelCost, currency)}</span></div>
            {includeGuide && <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 0'}}><span>Guide ({days} days)</span><span>{formatPrice(result.guide, currency)}</span></div>}
            <div style={styles.divider} />
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontWeight: 'bold', fontSize: '18px', color: BRAND.deepGreen}}><span>TOTAL</span><span>{formatPrice(result.total, currency)}</span></div>
            <p style={{fontSize: '12px', color: '#888', marginTop: '8px'}}>* Per person: {formatPrice(Math.round(result.total / persons), currency)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function VehiclesSection({ currency }) {
  const [catFilter, setCatFilter] = useState('all');
  const categories = ['all', ...new Set(vehicles.map(v => v.category))];
  const filtered = catFilter === 'all' ? vehicles : vehicles.filter(v => v.category === catFilter);

  const vehicleImages = {
    'Luxury SUV': images.luxurySuv,
    'Electric': images.electric,
    'Bus': images.bus,
    'Sedan': images.sedan,
    'Premium': images.premium,
  };

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
          <img src={vehicleImages[v.category] || images.luxurySuv} alt={v.name} style={{...styles.cardImage, height: '180px'}} />
          <div style={styles.cardBody}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div>
                <h3 style={styles.cardTitle}>{v.name}</h3>
                <span style={{...styles.badge, background: '#EBF4FF', color: '#1565C0'}}>{v.category}</span>
                <span style={{fontSize: '13px', color: '#666', fontFamily: '-apple-system, sans-serif'}}>  {v.capacity} seats</span>
              </div>
              <span style={styles.price}>{formatPrice(v.pricePerDay, currency)}/day</span>
            </div>
            <div style={{marginTop: '10px'}}>
              {v.features.map((f, i) => <span key={i} style={styles.tag}>{f}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


function HotelsSection({ currency }) {
  const [starFilter, setStarFilter] = useState(0);
  const filtered = starFilter === 0 ? hotels : hotels.filter(h => h.starRating === starFilter);
  const [expanded, setExpanded] = useState(null);

  const hotelImages = { 3: images.hotel3, 4: images.hotel4, 5: images.hotel5 };

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Hotels</h2>
      <div style={styles.filterRow}>
        {[0, 3, 4, 5].map(s => (
          <button key={s} style={starFilter === s ? styles.filterBtnActive : styles.filterBtn} onClick={() => setStarFilter(s)}>{s === 0 ? 'All' : s + '-Star'}</button>
        ))}
      </div>
      {filtered.map(h => (
        <div key={h.id} style={{...styles.card, cursor: 'pointer'}} onClick={() => setExpanded(expanded === h.id ? null : h.id)}>
          <img src={hotelImages[h.starRating] || images.luxuryHotel} alt={h.name} style={{...styles.cardImage, height: '180px'}} />
          <div style={styles.cardBody}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div>
                <h3 style={styles.cardTitle}>{h.name}</h3>
                <span style={styles.stars}>{'\u2605'.repeat(h.starRating)}</span>
                <span style={{fontSize: '13px', color: '#666', marginLeft: '8px', fontFamily: '-apple-system, sans-serif'}}>{h.location}</span>
              </div>
              <span style={styles.price}>{formatPrice(h.pricePerNight, currency)}/nt</span>
            </div>
            <div style={{marginTop: '8px'}}>
              {h.amenities.slice(0, 4).map((a, i) => <span key={i} style={styles.tag}>{a}</span>)}
            </div>
            {expanded === h.id && (
              <div style={{marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #F0EBE3'}}>
                <h4 style={{fontSize: '14px', margin: '0 0 8px', fontFamily: 'Georgia, serif'}}>Room Types</h4>
                {h.roomTypes.map((r, i) => (
                  <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '4px 0', fontFamily: '-apple-system, sans-serif'}}>
                    <span>{r.name}</span><span style={{color: BRAND.deepGreen, fontWeight: '600'}}>{formatPrice(r.price, currency)}/night</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FoodSection({ currency }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Food Experiences</h2>
      {foodExperiences.map(food => (
        <div key={food.id} style={styles.card}>
          <img src={food.image || images.food} alt={food.name} style={{...styles.cardImage, height: '180px'}} />
          <div style={styles.cardBody}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h3 style={styles.cardTitle}>{food.name}</h3>
              <span style={styles.price}>{formatPrice(food.pricePerPerson, currency)}/pp</span>
            </div>
            <p style={styles.cardDesc}>{food.description}</p>
            <span style={{fontSize: '12px', color: BRAND.gold, fontFamily: '-apple-system, sans-serif'}}>Duration: {food.duration}</span>
            <div style={{marginTop: '10px'}}>
              {food.menu.map((item, i) => <span key={i} style={styles.tag}>{item}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperiencesSection({ currency }) {
  const [catFilter, setCatFilter] = useState('all');
  const categories = ['all', 'cultural', 'romantic', 'adventure', 'wellness'];
  const filtered = catFilter === 'all' ? experiences : experiences.filter(e => e.category === catFilter);

  const catColors = { cultural: { bg: '#EBF4FF', color: '#1565C0' }, romantic: { bg: '#FDE8EC', color: '#C62828' }, adventure: { bg: '#E8F5E9', color: '#2E7D32' }, wellness: { bg: '#F3E5F5', color: '#6A1B9A' } };

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
            <img src={exp.image || images.mountains} alt={exp.name} style={{...styles.cardImage, height: '180px'}} />
            <div style={styles.cardBody}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div style={{flex: 1}}>
                  <h3 style={styles.cardTitle}>{exp.name}</h3>
                  <span style={{...styles.badge, background: cc.bg, color: cc.color}}>{exp.category}</span>
                </div>
                <div style={{textAlign: 'right'}}>
                  <span style={styles.price}>{formatPrice(exp.price, currency)}</span>
                  <p style={{fontSize: '11px', color: '#888', margin: '2px 0 0', fontFamily: '-apple-system, sans-serif'}}>{exp.priceType.replace('_', ' ')}</p>
                </div>
              </div>
              <p style={styles.cardDesc}>{exp.description}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#888', fontFamily: '-apple-system, sans-serif'}}>
                <span>{exp.duration}</span><span>{exp.location}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function CustomizeSection({ currency }) {
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
        <button onClick={() => { setResults(null); setStep(1); }} style={styles.btnOutline}>&larr; Start Over</button>
        {results.map((rec, idx) => (
          <div key={idx} style={{...styles.card, marginTop: '16px', borderLeft: idx === 0 ? '4px solid ' + BRAND.deepGreen : '4px solid #E8E2D9'}}>
            <div style={styles.cardBody}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={styles.cardTitle}>{rec.tour.name}</h3>
                <span style={{...styles.badge, background: '#E8F5E9', color: BRAND.deepGreen}}>{rec.score}% match</span>
              </div>
              <p style={styles.cardDesc}>{rec.tour.description}</p>
              <div style={{fontSize: '13px', color: '#555', marginBottom: '8px'}}>
                <span style={{...styles.badge, ...(rec.tour.tier === 'luxury' ? styles.luxuryBadge : styles.premiumBadge)}}>{rec.tour.tier}</span>
                <span style={{fontFamily: '-apple-system, sans-serif'}}>{rec.tour.duration} days</span>
              </div>
              <div style={{fontSize: '13px', margin: '10px 0', fontFamily: '-apple-system, sans-serif'}}>
                <p style={{margin: '3px 0'}}><strong>Hotel:</strong> {rec.hotel.name} ({rec.hotel.starRating} stars)</p>
                <p style={{margin: '3px 0'}}><strong>Vehicle:</strong> {rec.vehicle.name}</p>
              </div>
              <div style={styles.divider} />
              {rec.breakdown.map((b, i) => (
                <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '3px 0', fontFamily: '-apple-system, sans-serif'}}>
                  <span>{b.cat}</span><span>{formatPrice(b.amt, currency)}</span>
                </div>
              ))}
              <div style={styles.divider} />
              <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: BRAND.deepGreen, fontSize: '16px'}}>
                <span>Estimated Total</span><span>{formatPrice(rec.total, currency)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Customize Your Trip</h2>
      <p style={{...styles.cardDesc, marginBottom: '16px'}}>Answer a few questions and we will recommend the perfect Bhutan package for you.</p>

      <div style={styles.card}>
        <div style={styles.cardBody}>
          <div style={{display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '20px'}}>
            {[1,2,3,4,5].map(s => (
              <div key={s} style={{width: '40px', height: '3px', borderRadius: '2px', background: s <= step ? BRAND.gold : '#E8E2D9'}} />
            ))}
          </div>

          {step === 1 && (
            <div>
              <h3 style={{fontSize: '18px', margin: '0 0 12px', fontFamily: 'Georgia, serif'}}>What is your occasion?</h3>
              <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {tripTypes.map(t => (
                  <span key={t} style={tripType === t ? styles.chipActive : styles.chip} onClick={() => setTripType(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                ))}
              </div>
              <button disabled={!tripType} onClick={() => setStep(2)} style={{...styles.btn, marginTop: '20px', width: '100%', opacity: tripType ? 1 : 0.5}}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{fontSize: '18px', margin: '0 0 12px', fontFamily: 'Georgia, serif'}}>What is your budget level?</h3>
              <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {budgetOptions.map(b => (
                  <span key={b} style={budget === b ? styles.chipActive : styles.chip} onClick={() => setBudget(b)}>
                    {b.charAt(0).toUpperCase() + b.slice(1)}
                    {b === 'moderate' ? ' ($2,500-3,000/pp)' : b === 'premium' ? ' ($2,800-3,500/pp)' : ' ($6,000-8,000/pp)'}
                  </span>
                ))}
              </div>
              <div style={{display: 'flex', gap: '8px', marginTop: '20px'}}>
                <button onClick={() => setStep(1)} style={styles.btnOutline}>Back</button>
                <button disabled={!budget} onClick={() => setStep(3)} style={{...styles.btn, flex: 1, opacity: budget ? 1 : 0.5}}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{fontSize: '18px', margin: '0 0 12px', fontFamily: 'Georgia, serif'}}>How many days?</h3>
              <input type="range" min="3" max="21" value={duration} onChange={e => setDuration(+e.target.value)} style={{width: '100%'}} />
              <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 'normal', color: BRAND.gold, fontFamily: 'Georgia, serif'}}>{duration} days</p>
              <div style={{display: 'flex', gap: '8px', marginTop: '20px'}}>
                <button onClick={() => setStep(2)} style={styles.btnOutline}>Back</button>
                <button onClick={() => setStep(4)} style={{...styles.btn, flex: 1}}>Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 style={{fontSize: '18px', margin: '0 0 12px', fontFamily: 'Georgia, serif'}}>What interests you?</h3>
              <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {interestOptions.map(i => (
                  <span key={i} style={interests.includes(i) ? styles.chipActive : styles.chip} onClick={() => toggleInterest(i)}>{i.charAt(0).toUpperCase() + i.slice(1)}</span>
                ))}
              </div>
              <div style={{display: 'flex', gap: '8px', marginTop: '20px'}}>
                <button onClick={() => setStep(3)} style={styles.btnOutline}>Back</button>
                <button disabled={interests.length === 0} onClick={() => setStep(5)} style={{...styles.btn, flex: 1, opacity: interests.length ? 1 : 0.5}}>Next</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 style={{fontSize: '18px', margin: '0 0 12px', fontFamily: 'Georgia, serif'}}>Group size?</h3>
              <input type="number" min="1" max="20" value={groupSize} onChange={e => setGroupSize(+e.target.value)} style={styles.input} />
              <div style={{display: 'flex', gap: '8px', marginTop: '20px'}}>
                <button onClick={() => setStep(4)} style={styles.btnOutline}>Back</button>
                <button onClick={generateRecommendations} style={{...styles.btn, flex: 1}}>Get Recommendations</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// ===== MAIN APP =====
export default function App() {
  const [page, setPage] = useState('home');
  const [currency, setCurrency] = useState('USD');

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
      case 'destinations': return <DestinationsSection currency={currency} />;
      case 'tours': return <ToursSection currency={currency} />;
      case 'calculator': return <CalculatorSection currency={currency} />;
      case 'vehicles': return <VehiclesSection currency={currency} />;
      case 'hotels': return <HotelsSection currency={currency} />;
      case 'food': return <FoodSection currency={currency} />;
      case 'experiences': return <ExperiencesSection currency={currency} />;
      case 'customize': return <CustomizeSection currency={currency} />;
      default: return <HomePage setPage={setPage} currency={currency} />;
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <FullLogo height={36} iconColor={BRAND.gold} textColor={BRAND.ivory} />
          <div style={styles.currencyToggle}>
            <button
              onClick={() => setCurrency('USD')}
              style={{...styles.currencyBtn, ...(currency === 'USD' ? styles.currencyBtnActive : styles.currencyBtnInactive)}}
            >USD $</button>
            <button
              onClick={() => setCurrency('BTN')}
              style={{...styles.currencyBtn, ...(currency === 'BTN' ? styles.currencyBtnActive : styles.currencyBtnInactive)}}
            >BTN Nu.</button>
          </div>
        </div>
      </header>
      <nav style={styles.nav}>
        {navItems.map(item => (
          <button key={item.id} style={page === item.id ? styles.navBtnActive : styles.navBtn} onClick={() => setPage(item.id)}>{item.label}</button>
        ))}
      </nav>
      {renderPage()}
      <footer style={{textAlign: 'center', padding: '40px 20px', fontSize: '13px', color: '#888', background: BRAND.deepGreen, fontFamily: '-apple-system, sans-serif'}}>
        <WordmarkOnly size={22} color={BRAND.ivory} />
        <p style={{color: 'rgba(253,251,245,0.6)', margin: '8px 0 0', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase'}}>Elevated Journeys. Bhutan, Reimagined.</p>
        <p style={{color: 'rgba(253,251,245,0.4)', margin: '16px 0 0', fontSize: '11px'}}>SDF: {formatPrice(200, currency)}/person/night | Visa: {formatPrice(40, currency)}/person | 1 USD = {BTN_RATE} BTN</p>
      </footer>
    </div>
  );
}

function HomePage({ setPage, currency }) {
  const stats = [
    { label: 'Dzongkhags', value: destinations.length },
    { label: 'Tour Packages', value: tours.length },
    { label: 'Hotels', value: hotels.length },
    { label: 'Experiences', value: experiences.length },
  ];

  const sections = [
    { id: 'destinations', title: 'Destinations', desc: 'Explore 10+ Dzongkhags', icon: '\u26F0' },
    { id: 'tours', title: 'Tours', desc: 'Premium & Luxury packages', icon: '\u2708' },
    { id: 'calculator', title: 'Calculator', desc: 'Compute total trip cost', icon: '\u2211' },
    { id: 'vehicles', title: 'Vehicles', desc: 'SUVs, EVs, Premium', icon: '\u{1F697}' },
    { id: 'hotels', title: 'Hotels', desc: '3 to 5-star options', icon: '\u2605' },
    { id: 'food', title: 'Food', desc: 'Dining experiences', icon: '\u{1F37D}' },
    { id: 'experiences', title: 'Experiences', desc: 'Cultural to Adventure', icon: '\u2728' },
    { id: 'customize', title: 'Customize', desc: 'Get matched packages', icon: '\u2764' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src={images.hero} alt="Bhutan landscape" style={styles.heroImage} />
        <div style={styles.heroOverlay}>
          <div style={{marginBottom: '12px'}}>
            <LogoMark size={48} color={BRAND.gold} />
          </div>
          <h2 style={styles.heroTitle}>{'alt\u0101ra'}</h2>
          <p style={styles.heroSubtitle}>Elevated Journeys. Bhutan, Reimagined.</p>
        </div>
      </div>

      <div style={styles.section}>
        {/* Decorative lotus mark */}
        <div style={{textAlign: 'center', margin: '0 auto 24px'}}>
          <LogoMark size={32} color={BRAND.gold} />
        </div>
        <p style={{fontSize: '16px', color: '#555', lineHeight: '1.8', textAlign: 'center', maxWidth: '600px', margin: '0 auto 24px', fontFamily: '-apple-system, sans-serif'}}>
          Discover a Buddhist kingdom where ancient monasteries cling to cliffsides, prayer flags flutter in mountain winds, and happiness is measured as a national priority.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '24px 0'}}>
          {stats.map((s, i) => (
            <div key={i} style={{...styles.card, textAlign: 'center'}}>
              <div style={styles.cardBody}>
                <p style={{fontSize: '28px', fontWeight: 'normal', color: BRAND.gold, margin: '0', fontFamily: 'Georgia, serif'}}>{s.value}</p>
                <p style={{fontSize: '12px', color: '#666', margin: '4px 0 0', fontFamily: '-apple-system, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase'}}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{fontSize: '22px', margin: '32px 0 16px', color: BRAND.charcoal, fontFamily: 'Georgia, serif', textAlign: 'center'}}>Explore</h3>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
          {sections.map(s => (
            <div key={s.id} style={{...styles.card, cursor: 'pointer'}} onClick={() => setPage(s.id)}>
              <div style={{...styles.cardBody, textAlign: 'center', padding: '20px 14px'}}>
                <span style={{fontSize: '24px', display: 'block', marginBottom: '8px'}}>{s.icon}</span>
                <h4 style={{fontSize: '15px', fontWeight: 'normal', margin: '0 0 4px', color: BRAND.charcoal, fontFamily: 'Georgia, serif'}}>{s.title}</h4>
                <p style={{fontSize: '12px', color: '#888', margin: 0, fontFamily: '-apple-system, sans-serif'}}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{...styles.card, marginTop: '24px', background: BRAND.ivory, border: '1px solid #E8E2D9'}}>
          <div style={styles.cardBody}>
            <h3 style={{fontSize: '16px', margin: '0 0 12px', color: BRAND.gold, fontFamily: 'Georgia, serif'}}>Bhutan Travel Essentials</h3>
            <div style={{fontSize: '13px', fontFamily: '-apple-system, sans-serif', lineHeight: '2'}}>
              <p style={{margin: '0'}}>&#8226; SDF (Sustainable Development Fee): {formatPrice(200, currency)}/person/night</p>
              <p style={{margin: '0'}}>&#8226; Visa Fee: {formatPrice(40, currency)}/person (one-time)</p>
              <p style={{margin: '0'}}>&#8226; Currency: Bhutanese Ngultrum (BTN) | 1 USD = {BTN_RATE} BTN</p>
              <p style={{margin: '0'}}>&#8226; Best Season: March-May, September-November</p>
              <p style={{margin: '0'}}>&#8226; Only airport: Paro International</p>
              <p style={{margin: '0'}}>&#8226; All tourists need licensed guide and pre-arranged booking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
