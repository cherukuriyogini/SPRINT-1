/**
 * components/home/NewArrivalsProducts.tsx
 * ─────────────────────────────────────────────────────────────
 * New arrivals section showing latest products in the store.
 * ─────────────────────────────────────────────────────────────
 */

import { getAllProducts } from "@/services/product.service";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default async function NewArrivalsProducts() {
  const products = await getAllProducts();
  const newArrivals = products
    .slice()
    .sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
    .slice(0, 8);

  return (
    <Container size="full" className="pb-10 px-0">
      <SectionHeading
        title="New Arrivals"
        subtitle="Fresh products added for your wishlist"
        className="mb-6"
      />

      <div className="w-full bg-white p-6 border border-slate-200 shadow-sm">
        <ProductGrid products={newArrivals} />
      </div>
    </Container>
  );
}
