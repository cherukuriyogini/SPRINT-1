/**
 * components/home/BestDealsProducts.tsx
 * ─────────────────────────────────────────────────────────────
 * Best deals section highlighting top discounts.
 * ─────────────────────────────────────────────────────────────
 */

import { getAllProducts } from "@/services/product.service";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default async function BestDealsProducts() {
  const products = await getAllProducts();
  const bestDeals = products
    .slice()
    .sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0))
    .slice(0, 8);

  return (
    <Container size="full" className="py-8 px-0">
      <SectionHeading
        title="Best Deals Today"
        subtitle="Highest discounts across top products"
        action={
          <span className="text-sm font-semibold text-[#2874f0]">
            View all deals
          </span>
        }
        className="mb-6"
      />

      <div className="w-full bg-white p-6 border border-slate-200 shadow-sm">
        <ProductGrid products={bestDeals} />
      </div>
    </Container>
  );
}
