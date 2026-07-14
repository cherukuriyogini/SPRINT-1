/**
 * components/home/CategoryCard.tsx
 * ─────────────────────────────────────────────────────────────
 * Circular category icon card for the top of the Home Page.
 * ─────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group flex flex-col items-center gap-2 min-w-[72px] sm:min-w-[84px] snap-center",
        className
      )}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md"
        style={{ backgroundColor: category.color }}
      >
        <span className="text-2xl sm:text-3xl" aria-hidden="true">
          {category.icon}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
        {category.name}
      </span>
    </Link>
  );
}
