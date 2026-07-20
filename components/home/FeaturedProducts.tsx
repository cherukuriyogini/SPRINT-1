/**
 * components/home/FeaturedProducts.tsx
 * ─────────────────────────────────────────────────────────────
 * Modern Trending Products Section
 * ─────────────────────────────────────────────────────────────
 */

import { getFeaturedProducts } from "@/services/product.service";
import ProductGrid from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <Container size="full" className="mt-8 px-0">
      <section className="w-full border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex flex-col gap-4 px-6 py-5 border-b border-slate-200 bg-[#f8fafc] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">🔥 Trending Products</h2>
            <p className="text-sm text-slate-500 mt-1">Discover today&apos;s most popular products</p>
          </div>

          <Link
            href="/search?featured=true"
            className="inline-flex items-center gap-2 rounded-sm bg-[#2874f0] px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View All
            <ChevronRight size={18} />
          </Link>
        </div>

        <div className="p-6">
          <ProductGrid products={products} />
        </div>
      </section>
    </Container>
  );
}