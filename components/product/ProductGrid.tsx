/**
 * components/product/ProductGrid.tsx
 * ─────────────────────────────────────────────────────────────
 * Responsive grid for displaying ProductCards.
 * Supports loading states with SkeletonLoader.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";
import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import SkeletonLoader from "@/components/ui/SkeletonLoader";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
  className?: string;
}

export default function ProductGrid({
  products,
  isLoading = false,
  skeletonCount = 8,
  className,
}: ProductGridProps) {
  const gridClasses = cn(
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4",
    className
  );

  if (isLoading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <SkeletonLoader key={i} variant="card" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full py-12 text-center text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
