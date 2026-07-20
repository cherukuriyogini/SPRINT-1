"use client";

/**
 * components/product/ProductCard.tsx
 * ─────────────────────────────────────────────────────────────
 * Product card for grids/lists.
 * Includes wishlist toggle stub.
 * ─────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import { Heart, Star, Truck, AlertTriangle } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { ROUTES, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/constants";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    console.log(`[Wishlist] Toggled ${product.id} to ${!isWishlisted}`);
  };

  const stockLabel = product.inStock
    ? product.stockCount > 10
      ? "In stock"
      : `Only ${product.stockCount} left`
    : "Out of stock";

  const stockColor = product.inStock
    ? product.stockCount > 10
      ? "text-[#26a541]"
      : "text-[#ff9800]"
    : "text-[#ff4d4d]";

  const deliveryText = product.price >= FREE_DELIVERY_THRESHOLD
    ? "Free delivery"
    : `Delivery ₹${DELIVERY_FEE}`;

  return (
    <Link
      href={ROUTES.PRODUCT(product.id)}
      className="group relative flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="absolute left-3 top-3 z-10 rounded-sm bg-[#fff7ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c2410c] shadow-sm">
        {product.discount}% off
      </div>

      <div className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white/95 text-gray-500 shadow-sm transition-colors duration-200 hover:bg-white hover:text-[#ff4d4d]">
        <Heart
          size={18}
          className={isWishlisted ? "fill-[#ff4d4d] text-[#ff4d4d]" : ""}
        />
      </div>

      <div className="relative w-full overflow-hidden bg-[#f8fafc] p-5">
        <div className="relative h-[260px] w-full overflow-hidden rounded-sm bg-white text-center shadow-inner shadow-slate-100">
          <ProductImage
            src={product.image}
            alt={product.name}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0f4cdd]">
            {product.brand}
          </p>
          <h3 className="text-base font-semibold leading-tight text-[#0f172a] line-clamp-2 group-hover:text-[#2563eb] transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#eff6ff] px-2 py-1 text-[#2563eb]">
            <Star size={12} className="text-[#2563eb]" /> {product.rating.toFixed(1)}
          </span>
          <span className="text-[#64748b]">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-lg font-bold text-[#0f172a]">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-[#64748b] line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <div className="grid gap-2 border-t border-slate-200 pt-4 text-xs text-[#475569]">
          <div className="flex items-center gap-2">
            <Truck size={14} />
            <span>{deliveryText}</span>
          </div>
          <div className={`flex items-center gap-2 ${stockColor}`}>
            <AlertTriangle size={14} />
            <span>{stockLabel}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Add to cart", product.id);
            }}
            type="button"
            className="flex-1 rounded-sm border border-slate-200 bg-[#2874f0] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#1f5dc8]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
