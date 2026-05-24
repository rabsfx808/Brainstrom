import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhutan Experience Library - Land of the Thunder Dragon",
  description:
    "Discover premium and luxury travel experiences across all 20 Dzongkhags of Bhutan. Plan tours, find hotels, explore destinations, and customize your perfect Bhutan trip.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
