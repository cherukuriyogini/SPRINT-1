/**
 * data/wishlist.ts
 * ─────────────────────────────────────────────────────────────
 * Mock wishlist data — 5 items with varied stock statuses.
 * Demonstrates the core feature of this project:
 *   - In Stock (normal)
 *   - Low Stock (warning)
 *   - Out of Stock (blocked from cart)
 * Replaced by Prisma + PostgreSQL in Phase 3.
 * ─────────────────────────────────────────────────────────────
 */

import type { WishlistItem } from "@/types";
import { products } from "./products";

export const mockWishlist: WishlistItem[] = [
  {
    id: "wl-1",
    product: products[1]!, // iPhone 15 Pro Max
    addedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    stock: {
      status: "in-stock",
      count: 12,
      lastChecked: new Date(Date.now() - 28 * 1000).toISOString(),
    },
  },
  {
    id: "wl-2",
    product: products[3]!, // Xiaomi 14 Pro (low stock: 3)
    addedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    stock: {
      status: "low-stock",
      count: 3,
      lastChecked: new Date(Date.now() - 15 * 1000).toISOString(),
    },
  },
  {
    id: "wl-3",
    product: products[2]!, // OnePlus 12 (out of stock)
    addedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    stock: {
      status: "out-of-stock",
      count: 0,
      lastChecked: new Date(Date.now() - 5 * 1000).toISOString(),
    },
  },
  {
    id: "wl-4",
    product: products[4]!, // Sony WH-1000XM5
    addedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    stock: {
      status: "in-stock",
      count: 78,
      lastChecked: new Date(Date.now() - 20 * 1000).toISOString(),
    },
  },
  {
    id: "wl-5",
    product: products[14]!, // Garmin Forerunner 265
    addedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    stock: {
      status: "low-stock",
      count: 4,
      lastChecked: new Date(Date.now() - 10 * 1000).toISOString(),
    },
  },
];
