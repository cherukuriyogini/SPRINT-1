"use client";

/**
 * components/product/ProductImage.tsx
 * ─────────────────────────────────────────────────────────────
 * Product image component with loading state and fallback.
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FALLBACK_PRODUCT_IMAGE } from "@/lib/constants";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ProductImage({
  src,
  alt,
  className,
  fill = true,
  width,
  height,
}: ProductImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-50 flex items-center justify-center",
        className
      )}
    >
      <Image
        src={error ? FALLBACK_PRODUCT_IMAGE : src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={cn(
          "object-contain transition-all duration-300",
          isLoading ? "scale-105 blur-sm grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        unoptimized // Allow external URLs like unsplash for Phase 1
      />
    </div>
  );
}
