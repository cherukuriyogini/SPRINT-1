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
    <Container className="py-8">
      <SectionHeading
        title="Recommended For You"
        subtitle="Based on your recent browsing history"
        className="mb-6"
      />
      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
