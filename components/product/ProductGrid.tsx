/**
 * components/product/ProductGrid.tsx
 * ─────────────────────────────────────────────────────────────
 * Modern Responsive Product Grid
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
    `
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-4
    gap-6
    `,
    className
  );

  if (isLoading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonLoader
            key={index}
            variant="card"
          />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex h-72 items-center justify-center bg-white text-lg font-medium text-gray-500 shadow-sm">
        No products available right now.
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}