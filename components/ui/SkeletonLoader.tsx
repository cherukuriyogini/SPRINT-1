/**
 * components/ui/SkeletonLoader.tsx
 * ─────────────────────────────────────────────────────────────
 * Generic skeleton loader component for loading states.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";
import type { SkeletonVariant } from "@/types";

interface SkeletonLoaderProps {
  variant?: SkeletonVariant;
  count?: number;
  className?: string;
}

export default function SkeletonLoader({
  variant = "text",
  count = 1,
  className,
}: SkeletonLoaderProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  const getVariantClasses = () => {
    switch (variant) {
      case "card":
        return "h-64 w-full rounded-md";
      case "image":
        return "h-48 w-full rounded-md";
      case "list-item":
        return "h-12 w-full rounded-sm";
      case "text":
      default:
        return "h-4 w-full rounded-sm";
    }
  };

  return (
    <>
      {items.map((i) => (
        <div
          key={i}
          className={cn(
            "skeleton",
            getVariantClasses(),
            className,
            count > 1 ? "mb-2" : ""
          )}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
