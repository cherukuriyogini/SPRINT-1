/**
 * components/home/FeaturedProducts.tsx
 * ─────────────────────────────────────────────────────────────
 * Featured products section using the ProductGrid.
 * ─────────────────────────────────────────────────────────────
 */

import { getFeaturedProducts } from "@/services/product.service";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <Container className="py-8">
      <SectionHeading
        title="Featured Deals"
        subtitle="Top picks for you this week"
        className="mb-6"
        action={
          <Link
            href="/search?featured=true"
            className="flex items-center gap-1 text-[#2874f0] font-medium hover:underline text-sm"
          >
            View All <ChevronRight size={16} />
          </Link>
        }
      />
      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
