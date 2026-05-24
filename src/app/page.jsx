import Link from "next/link";
import Hero from "@/components/ui/Hero";

const sections = [
  {
    title: "Destinations",
    description: "Explore all 20 Dzongkhags of Bhutan with detailed guides, entry fees, and must-visit places.",
    href: "/destinations",
    icon: "🏔️",
    color: "bg-accent-50 border-accent-200",
  },
  {
    title: "Tour Packages",
    description: "Premium and Luxury tour packages for honeymoons, anniversaries, culture, adventure, and festivals.",
    href: "/tours",
    icon: "✈️",
    color: "bg-secondary-50 border-secondary-200",
  },
  {
    title: "Trip Calculator",
    description: "Calculate the total cost of your Bhutan trip with hotels, transport, food, and activities.",
    href: "/calculator",
    icon: "🧮",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Vehicles",
    description: "Choose from luxury SUVs, electric vehicles, premium sedans, and coaches for your journey.",
    href: "/vehicles",
    icon: "🚗",
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "Hotels",
    description: "From 3-star comfort to 5-star ultra-luxury resorts including Amankora and Six Senses.",
    href: "/hotels",
    icon: "🏨",
    color: "bg-pink-50 border-pink-200",
  },
  {
    title: "Food Experiences",
    description: "Traditional feasts, cooking classes, farm-to-table dining, and romantic candlelight dinners.",
    href: "/food",
    icon: "🍽️",
    color: "bg-orange-50 border-orange-200",
  },
  {
    title: "Experiences",
    description: "Cultural immersions, romantic adventures, outdoor thrills, and wellness retreats.",
    href: "/experiences",
    icon: "🎭",
    color: "bg-red-50 border-red-200",
  },
  {
    title: "Customize Trip",
    description: "Build your perfect Bhutan itinerary by mixing and matching destinations, hotels, and activities.",
    href: "/customize",
    icon: "✨",
    color: "bg-teal-50 border-teal-200",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        subtitle="Welcome to Bhutan"
        title="Discover the Land of the Thunder Dragon"
        description="Experience the magic of the world's last Shangri-La. From ancient monasteries clinging to cliffsides to pristine valleys where cranes dance, Bhutan offers a journey unlike any other."
      />

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary-800">20</p>
              <p className="text-gray-600 text-sm">Dzongkhags to Explore</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary-800">100+</p>
              <p className="text-gray-600 text-sm">Unique Experiences</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary-800">Premium & Luxury</p>
              <p className="text-gray-600 text-sm">Curated Tour Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Complete Bhutan Travel Companion
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bhutan, the Land of the Thunder Dragon, is a Buddhist kingdom nestled in the 
            eastern Himalayas. Known for measuring prosperity through Gross National 
            Happiness, this enchanting country offers pristine nature, vibrant culture, 
            ancient monasteries, and warm hospitality. Our experience library helps you 
            plan the perfect trip with detailed information on destinations, accommodations, 
            activities, and pricing.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Explore Our Travel Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className={`block p-6 rounded-lg border-2 ${section.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="text-3xl mb-3 block">{section.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
