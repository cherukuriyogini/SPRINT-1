/**
 * services/wishlist.service.ts
 * ─────────────────────────────────────────────────────────────
 * Wishlist data access layer.
 *
 * Phase 1: Returns mock data from data/wishlist.ts
 * Phase 2: Adds stock sync (polling /api/stock)
 * Phase 3: Replace with Prisma queries.
 *          Return types stay identical — UI needs no changes.
 * ─────────────────────────────────────────────────────────────
 */

import type { WishlistItem, StockInfo, StockStatus } from "@/types";
import { mockWishlist } from "@/data/wishlist";

const delay = (ms = 50) => new Promise((r) => setTimeout(r, ms));

/**
 * Get the current user's wishlist.
 * Phase 3: Replace with prisma.wishlistItem.findMany({ where: { userId } })
 */
export async function getWishlist(): Promise<WishlistItem[]> {
  await delay();
  return mockWishlist;
}

/**
 * Add a product to the wishlist.
 * Phase 3: prisma.wishlistItem.create(...)
 */
export async function addToWishlist(productId: string): Promise<void> {
  await delay();
  console.log(`[Wishlist] Added product ${productId} (mock)`);
}

/**
 * Remove a product from the wishlist.
 * Phase 3: prisma.wishlistItem.delete(...)
 */
export async function removeFromWishlist(productId: string): Promise<void> {
  await delay();
  console.log(`[Wishlist] Removed product ${productId} (mock)`);
}

/**
 * Check stock status for a wishlist item.
 * Phase 2: Poll /api/stock?productId=xxx every 30 seconds.
 * Phase 3: Real stock check via Prisma / external inventory API.
 */
export async function checkStockStatus(productId: string): Promise<StockInfo> {
  await delay(100);
  const item = mockWishlist.find((w) => w.product.id === productId);
  return (
    item?.stock ?? {
      status: "out-of-stock" as StockStatus,
      count: 0,
      lastChecked: new Date().toISOString(),
    }
  );
}

/**
 * Move a wishlist item to cart.
 * Phase 2: Calls cart.service.addToCart + removeFromWishlist.
 * Returns false if out-of-stock (stock validation — key feature).
 */
export async function moveToCart(productId: string): Promise<boolean> {
  await delay();
  const item = mockWishlist.find((w) => w.product.id === productId);
  if (!item || item.stock.status === "out-of-stock") {
    return false; // Stock validation prevents OOS items from entering cart
  }
  console.log(`[Wishlist] Moved product ${productId} to cart (mock)`);
  return true;
}
