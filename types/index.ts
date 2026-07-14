/**
 * types/index.ts
 * ─────────────────────────────────────────────────────────────
 * Shared TypeScript interfaces for the Smart Wishlist project.
 *
 * PHASE NOTES:
 *   Phase 1 — All types defined here with mock data shapes.
 *   Phase 2 — StockSync, optimistic update types added.
 *   Phase 3 — Prisma models will mirror these interfaces.
 * ─────────────────────────────────────────────────────────────
 */

// ── Stock & Availability ─────────────────────────────────────

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

export interface StockInfo {
  status: StockStatus;
  count: number;            // units available
  lastChecked: string;      // ISO timestamp
}

// ── Product ──────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;            // current selling price (INR)
  originalPrice: number;    // MRP before discount
  discount: number;         // discount percentage (0–100)
  rating: number;           // 0.0–5.0
  reviewCount: number;
  image: string;            // URL or path
  images: string[];         // additional product images
  category: string;
  tags: string[];
  inStock: boolean;
  stockCount: number;
  isFeatured: boolean;
  isRecommended: boolean;
  createdAt: string;        // ISO timestamp
}

// ── Category ─────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  icon: string;             // emoji or icon identifier
  href: string;
  color: string;            // background color for the icon circle
  productCount?: number;
}

// ── Wishlist ─────────────────────────────────────────────────

export interface WishlistItem {
  id: string;               // wishlist entry id
  product: Product;
  addedAt: string;          // ISO timestamp
  stock: StockInfo;
}

// ── Cart ─────────────────────────────────────────────────────

export interface CartItem {
  id: string;               // cart entry id
  product: Product;
  quantity: number;
  addedAt: string;          // ISO timestamp
}

export interface CartSummaryData {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
  savings: number;
}

// ── Banner ───────────────────────────────────────────────────

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  bgColor: string;
  textColor: string;
}

// ── UI State Types ───────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger" | "accent";
export type ButtonSize    = "xs" | "sm" | "md" | "lg";
export type BadgeVariant  = "success" | "warning" | "error" | "info" | "default" | "primary";
export type ToastType     = "success" | "error" | "warning" | "info";
export type SkeletonVariant = "card" | "text" | "image" | "list-item";

// ── Navigation ───────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

// ── API Response Shapes (Phase 2+) ───────────────────────────

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ── Search ───────────────────────────────────────────────────

export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  minRating?: number;
  sortBy?: "price-asc" | "price-desc" | "rating" | "newest";
}
