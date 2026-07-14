/**
 * lib/constants.ts
 * ─────────────────────────────────────────────────────────────
 * Application-wide constants: routes, config, labels.
 * ─────────────────────────────────────────────────────────────
 */

// ── App Metadata ─────────────────────────────────────────────
export const APP_NAME    = "Smart Wishlist";
export const APP_TAGLINE = "Smarter Shopping Starts Here";
export const APP_DESCRIPTION =
  "Flipkart's Smart Wishlist automatically monitors stock, notifies you instantly, and lets you move items to cart in one click.";

// ── Routes ───────────────────────────────────────────────────
export const ROUTES = {
  HOME:       "/",
  WISHLIST:   "/wishlist",
  CART:       "/cart",
  PRODUCT:    (id: string) => `/product/${id}`,
  LOGIN:      "/login",
  SIGNUP:     "/signup",
  ADMIN:      "/admin",
} as const;

// ── Stock Status Labels ──────────────────────────────────────
export const STOCK_LABELS = {
  "in-stock":     "In Stock",
  "low-stock":    "Only a few left",
  "out-of-stock": "Out of Stock",
} as const;

export const STOCK_COLORS = {
  "in-stock":     "#26a541",
  "low-stock":    "#ff9800",
  "out-of-stock": "#ff4d4d",
} as const;

// ── Stock Sync ───────────────────────────────────────────────
/** How often (ms) to poll stock status — key feature of Phase 2 */
export const STOCK_SYNC_INTERVAL_MS = 30_000; // 30 seconds

// ── Pagination ───────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE = 20;

// ── Cart & Wishlist Limits ────────────────────────────────────
export const MAX_CART_QUANTITY   = 10;
export const MAX_WISHLIST_ITEMS  = 50;

// ── Image Fallback ───────────────────────────────────────────
export const FALLBACK_PRODUCT_IMAGE = "/images/product-placeholder.png";

// ── Delivery ─────────────────────────────────────────────────
export const FREE_DELIVERY_THRESHOLD = 500;   // INR
export const DELIVERY_FEE            = 40;    // INR

// ── Navbar Links ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: ROUTES.HOME },
  { label: "Wishlist",   href: ROUTES.WISHLIST },
  { label: "Cart",       href: ROUTES.CART },
] as const;

// ── Sort Options ─────────────────────────────────────────────
export const SORT_OPTIONS = [
  { label: "Relevance",           value: "relevance"   },
  { label: "Price: Low to High",  value: "price-asc"   },
  { label: "Price: High to Low",  value: "price-desc"  },
  { label: "Top Rated",           value: "rating"      },
  { label: "Newest",              value: "newest"      },
] as const;
