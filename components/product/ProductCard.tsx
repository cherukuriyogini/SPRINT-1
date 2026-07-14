"use client";

/**
 * components/product/ProductCard.tsx
 * ─────────────────────────────────────────────────────────────
 * Product card for grids/lists.
 * Includes wishlist toggle stub.
 * ─────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false); // Stub for Phase 1

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigation
    setIsWishlisted(!isWishlisted);
    console.log(`[Wishlist] Toggled ${product.id} to ${!isWishlisted}`);
    // Phase 2: Call service / mutate state
  };

  return (
    <Link
      href={ROUTES.PRODUCT(product.id)}
      className="group relative flex flex-col bg-white border border-gray-100 rounded-md hover:shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-shadow duration-200"
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-[#ff4d4d] shadow-sm transition-colors"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          size={18}
          className={isWishlisted ? "fill-[#ff4d4d] text-[#ff4d4d]" : ""}
        />
      </button>

      {/* Image Area */}
      <div className="relative w-full aspect-square p-4">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="bg-transparent"
        />
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow border-t border-gray-50">
        <h3 className="text-sm text-[#212121] font-medium line-clamp-2 group-hover:text-[#2874f0] transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-1 bg-[#26a541] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
            {product.rating.toFixed(1)} <Star size={10} className="fill-white" />
          </div>
          <span className="text-xs text-[#878787]">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center flex-wrap gap-2">
          <span className="text-base font-bold text-[#212121]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-[#878787] line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-bold text-[#388e3c]">
                {formatDiscount(product.discount)}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
