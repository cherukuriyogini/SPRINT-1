/**
 * data/categories.ts
 * ─────────────────────────────────────────────────────────────
 * Mock category data. Replaced by Prisma query in Phase 3.
 * ─────────────────────────────────────────────────────────────
 */

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Mobiles",
    icon: "📱",
    href: "/?category=mobiles",
    color: "#e3f2fd",
    productCount: 1240,
  },
  {
    id: "cat-2",
    name: "Electronics",
    icon: "💻",
    href: "/?category=electronics",
    color: "#f3e5f5",
    productCount: 890,
  },
  {
    id: "cat-3",
    name: "Fashion",
    icon: "👗",
    href: "/?category=fashion",
    color: "#fce4ec",
    productCount: 3200,
  },
  {
    id: "cat-4",
    name: "Home & Kitchen",
    icon: "🏠",
    href: "/?category=home",
    color: "#e8f5e9",
    productCount: 1560,
  },
  {
    id: "cat-5",
    name: "Books",
    icon: "📚",
    href: "/?category=books",
    color: "#fff8e1",
    productCount: 450,
  },
  {
    id: "cat-6",
    name: "Sports",
    icon: "🏏",
    href: "/?category=sports",
    color: "#e0f7fa",
    productCount: 320,
  },
  {
    id: "cat-7",
    name: "Beauty",
    icon: "💄",
    href: "/?category=beauty",
    color: "#fdf0f8",
    productCount: 780,
  },
  {
    id: "cat-8",
    name: "Toys",
    icon: "🧸",
    href: "/?category=toys",
    color: "#fff3e0",
    productCount: 410,
  },
  {
    id: "cat-9",
    name: "Appliances",
    icon: "🫙",
    href: "/?category=appliances",
    color: "#f1f8e9",
    productCount: 290,
  },
  {
    id: "cat-10",
    name: "Grocery",
    icon: "🛒",
    href: "/?category=grocery",
    color: "#e8eaf6",
    productCount: 1100,
  },
];
