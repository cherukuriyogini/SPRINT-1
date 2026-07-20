/**
 * components/home/RecommendedProducts.tsx
 * ─────────────────────────────────────────────────────────────
 * Recommended products section using the ProductGrid.
 * ─────────────────────────────────────────────────────────────
 */

import { getRecommendedProducts } from "@/services/product.service";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

export default async function RecommendedProducts() {
  const products = await getRecommendedProducts();

  return (
    <Container size="full" className="py-8 px-0">
      <SectionHeading
        title="Recommended For You"
        subtitle="Based on your recent browsing history"
        className="mb-6"
      />
      <div className="bg-white p-4 border border-slate-200 shadow-sm rounded-sm">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
