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
        "group flex min-w-[160px] flex-col border border-slate-200 bg-white p-4 text-left transition hover:border-[#2874f0] hover:shadow-lg",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#bfdbfe] via-[#93c5fd] to-[#f8fafc] text-2xl shadow-sm">
        <span aria-hidden="true">{category.icon}</span>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-900">{category.name}</p>
        <p className="mt-1 text-xs text-slate-500">{category.productCount} products</p>
      </div>
    </Link>
  );
}
