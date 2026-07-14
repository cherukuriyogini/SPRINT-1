/**
 * services/cart.service.ts
 * ─────────────────────────────────────────────────────────────
 * Cart data access layer.
 *
 * Phase 1: Returns mock cart data.
 * Phase 3: Replace with Prisma queries.
 *          Return types stay identical — UI needs no changes.
 * ─────────────────────────────────────────────────────────────
 */

import type { CartItem, CartSummaryData } from "@/types";
import { products } from "@/data/products";
import { FREE_DELIVERY_THRESHOLD, DELIVERY_FEE } from "@/lib/constants";

const delay = (ms = 50) => new Promise((r) => setTimeout(r, ms));

/** Mock cart state (in-memory for Phase 1) */
const mockCart: CartItem[] = [
  {
    id: "cart-1",
    product: products[9]!,  // Nike Air Max 270
    quantity: 1,
    addedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  },
  {
    id: "cart-2",
    product: products[16]!, // Atomic Habits
    quantity: 2,
    addedAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  },
  {
    id: "cart-3",
    product: products[4]!,  // Sony WH-1000XM5
    quantity: 1,
    addedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
];

/**
 * Get the current user's cart.
 */
export async function getCart(): Promise<CartItem[]> {
  await delay();
  return mockCart;
}

/**
 * Add a product to the cart.
 * Phase 3: prisma.cartItem.upsert(...)
 */
export async function addToCart(
  productId: string,
  quantity = 1
): Promise<void> {
  await delay();
  console.log(`[Cart] Added product ${productId} × ${quantity} (mock)`);
}

/**
 * Remove a product from the cart.
 */
export async function removeFromCart(productId: string): Promise<void> {
  await delay();
  console.log(`[Cart] Removed product ${productId} (mock)`);
}

/**
 * Update quantity for a cart item.
 */
export async function updateCartQuantity(
  productId: string,
  quantity: number
): Promise<void> {
  await delay();
  console.log(`[Cart] Updated product ${productId} → qty ${quantity} (mock)`);
}

/**
 * Calculate cart summary (subtotal, discount, delivery, total).
 */
export async function getCartSummary(): Promise<CartSummaryData> {
  await delay();
  const items = await getCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );
  const discount = items.reduce(
    (sum, item) =>
      sum +
      (item.product.originalPrice - item.product.price) * item.quantity,
    0
  );
  const total = subtotal - discount;
  const deliveryFee = total >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    discount,
    deliveryFee,
    total: total + deliveryFee,
    itemCount,
    savings: discount - (deliveryFee === 0 ? DELIVERY_FEE : 0),
  };
}
