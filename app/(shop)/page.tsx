/**
 * app/(shop)/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Home Page (Product Listing) matching Flipkart's layout.
 * ─────────────────────────────────────────────────────────────
 */

import Container from "@/components/ui/Container";
import CategoryCard from "@/components/home/CategoryCard";
import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import RecommendedProducts from "@/components/home/RecommendedProducts";
import { categories } from "@/data/categories";

const heroBanner = {
  id: "banner-1",
  title: "Smart Wishlist is Here",
  subtitle: "Never miss out on your favorite products again. Automatic stock tracking and instant notifications.",
  image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
  href: "/wishlist",
  bgColor: "#2874f0",
  textColor: "#ffffff",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 pb-12">
      {/* Categories Row */}
      <div className="bg-white shadow-sm pt-4 pb-4 overflow-x-auto no-scrollbar">
        <Container>
          <div className="flex gap-4 sm:gap-8 justify-between md:justify-center px-2">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </Container>
      </div>

      {/* Hero Banner */}
      <Container>
        <Banner banner={heroBanner} />
      </Container>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Recommended Products */}
      <RecommendedProducts />
    </div>
  );
}
