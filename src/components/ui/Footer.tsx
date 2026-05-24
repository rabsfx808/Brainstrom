import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-secondary-400 text-2xl font-bold">&#9768;</span>
              <span className="font-bold text-xl">Bhutan Experience Library</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Your comprehensive guide to the Land of the Thunder Dragon. 
              Discover premium and luxury travel experiences across all 20 
              Dzongkhags of Bhutan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-400 mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-white transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-400 mb-3">Plan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Trip Calculator
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-white transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-white transition-colors">
                  Food Experiences
                </Link>
              </li>
              <li>
                <Link href="/customize" className="hover:text-white transition-colors">
                  Customize Trip
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Bhutan Experience Library - Land of the Thunder Dragon</p>
          <p className="mt-1">Gross National Happiness is more valuable than Gross National Product</p>
        </div>
      </div>
    </footer>
  );
}
