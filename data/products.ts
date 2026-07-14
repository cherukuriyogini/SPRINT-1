/**
 * data/products.ts
 * ─────────────────────────────────────────────────────────────
 * 20 mock products across 5 categories.
 * Includes inStock / stockCount to demonstrate Phase 2
 * stock-checking feature visually from Phase 1.
 * Replaced by Prisma query in Phase 3.
 * ─────────────────────────────────────────────────────────────
 */

import type { Product } from "@/types";

export const products: Product[] = [
  // ── Mobiles ────────────────────────────────────────────────
  {
    id: "prod-1",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    description:
      "Experience the ultimate Galaxy with the S24 Ultra. Featuring a 200MP camera, Snapdragon 8 Gen 3, and a titanium frame.",
    price: 124999,
    originalPrice: 134999,
    discount: 7,
    rating: 4.6,
    reviewCount: 8240,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop",
    ],
    category: "mobiles",
    tags: ["flagship", "5g", "android"],
    inStock: true,
    stockCount: 45,
    isFeatured: true,
    isRecommended: false,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "prod-2",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    description:
      "Titanium design. A17 Pro chip. A camera so versatile it changes the way you shoot.",
    price: 159900,
    originalPrice: 174900,
    discount: 9,
    rating: 4.8,
    reviewCount: 14500,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
    ],
    category: "mobiles",
    tags: ["flagship", "ios", "5g"],
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    isRecommended: true,
    createdAt: "2024-02-01T10:00:00Z",
  },
  {
    id: "prod-3",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    description:
      "Hasselblad camera, Snapdragon 8 Gen 3, 100W SUPERVOOC charging. The speed you need.",
    price: 64999,
    originalPrice: 74999,
    discount: 13,
    rating: 4.4,
    reviewCount: 5120,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop",
    ],
    category: "mobiles",
    tags: ["5g", "android", "fast-charging"],
    inStock: false,
    stockCount: 0,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-02-10T10:00:00Z",
  },
  {
    id: "prod-4",
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    description:
      "Leica optics, 4K video, 120W HyperCharge — premium performance at a competitive price.",
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.3,
    reviewCount: 3890,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
    ],
    category: "mobiles",
    tags: ["5g", "leica", "android"],
    inStock: true,
    stockCount: 3,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-02-15T10:00:00Z",
  },

  // ── Electronics ────────────────────────────────────────────
  {
    id: "prod-5",
    name: 'Sony WH-1000XM5 Headphones',
    brand: "Sony",
    description:
      "Industry-leading noise cancellation, 30-hour battery life, and crystal-clear call quality.",
    price: 26990,
    originalPrice: 34990,
    discount: 23,
    rating: 4.7,
    reviewCount: 22100,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    tags: ["wireless", "noise-cancellation", "premium"],
    inStock: true,
    stockCount: 78,
    isFeatured: true,
    isRecommended: true,
    createdAt: "2024-01-20T10:00:00Z",
  },
  {
    id: "prod-6",
    name: 'LG 55" 4K OLED TV',
    brand: "LG",
    description:
      "OLED evo panel with α9 AI Processor Gen6. Self-lit pixels for perfect blacks and infinite contrast.",
    price: 89990,
    originalPrice: 124990,
    discount: 28,
    rating: 4.5,
    reviewCount: 7640,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    tags: ["4k", "oled", "smart-tv"],
    inStock: true,
    stockCount: 22,
    isFeatured: true,
    isRecommended: false,
    createdAt: "2024-01-25T10:00:00Z",
  },
  {
    id: "prod-7",
    name: "Apple MacBook Air M3",
    brand: "Apple",
    description:
      "Supercharged by M3 chip, 18-hour battery life, and fanless design. Works where you work.",
    price: 114900,
    originalPrice: 119900,
    discount: 4,
    rating: 4.9,
    reviewCount: 11200,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    tags: ["laptop", "macbook", "m3"],
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isRecommended: true,
    createdAt: "2024-03-01T10:00:00Z",
  },
  {
    id: "prod-8",
    name: "Canon EOS R50 Camera",
    brand: "Canon",
    description:
      "24.2MP APS-C sensor, 4K video, eye-tracking AF — perfect for creators and photography enthusiasts.",
    price: 69990,
    originalPrice: 79990,
    discount: 13,
    rating: 4.4,
    reviewCount: 2340,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    tags: ["camera", "mirrorless", "4k"],
    inStock: false,
    stockCount: 0,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-03-05T10:00:00Z",
  },

  // ── Fashion ────────────────────────────────────────────────
  {
    id: "prod-9",
    name: "Levi's 511 Slim Fit Jeans",
    brand: "Levi's",
    description:
      "Classic 511 slim fit with stretch technology. Sits below the waist, slim through hip and thigh.",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.3,
    reviewCount: 18900,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop",
    ],
    category: "fashion",
    tags: ["jeans", "slim-fit", "men"],
    inStock: true,
    stockCount: 200,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-01-10T10:00:00Z",
  },
  {
    id: "prod-10",
    name: "Nike Air Max 270",
    brand: "Nike",
    description:
      "Inspired by the Air Max 93 and 180, the Air Max 270 delivers maximum comfort for all-day wear.",
    price: 8495,
    originalPrice: 12995,
    discount: 35,
    rating: 4.5,
    reviewCount: 34200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    ],
    category: "fashion",
    tags: ["shoes", "sports", "airmax"],
    inStock: true,
    stockCount: 56,
    isFeatured: true,
    isRecommended: true,
    createdAt: "2024-01-12T10:00:00Z",
  },

  // ── Home & Kitchen ─────────────────────────────────────────
  {
    id: "prod-11",
    name: "Instant Pot Duo 7-in-1",
    brand: "Instant Pot",
    description:
      "7-in-1 electric pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.",
    price: 7999,
    originalPrice: 12999,
    discount: 38,
    rating: 4.6,
    reviewCount: 43100,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&h=800&fit=crop",
    ],
    category: "home",
    tags: ["kitchen", "cooker", "smart"],
    inStock: true,
    stockCount: 91,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-01-18T10:00:00Z",
  },
  {
    id: "prod-12",
    name: "Dyson V15 Detect Vacuum",
    brand: "Dyson",
    description:
      "Laser detects dust you can't see. LCD screen shows proof of what you're picking up.",
    price: 54900,
    originalPrice: 64900,
    discount: 15,
    rating: 4.7,
    reviewCount: 9870,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    ],
    category: "home",
    tags: ["vacuum", "cordless", "smart"],
    inStock: true,
    stockCount: 14,
    isFeatured: true,
    isRecommended: false,
    createdAt: "2024-02-20T10:00:00Z",
  },
  {
    id: "prod-13",
    name: "Philips Air Fryer HD9200",
    brand: "Philips",
    description:
      "Rapid Air Technology circulates hot air for crispy results with little to no oil.",
    price: 6499,
    originalPrice: 9999,
    discount: 35,
    rating: 4.4,
    reviewCount: 28700,
    image: "https://images.unsplash.com/photo-1648895783036-bf50a02dcf59?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1648895783036-bf50a02dcf59?w=800&h=800&fit=crop",
    ],
    category: "home",
    tags: ["air-fryer", "healthy", "kitchen"],
    inStock: false,
    stockCount: 0,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-02-25T10:00:00Z",
  },
  {
    id: "prod-14",
    name: "IKEA KALLAX Shelf Unit",
    brand: "IKEA",
    description:
      "Versatile shelving unit that can stand alone, hang on a wall, or be combined with other units.",
    price: 4999,
    originalPrice: 6499,
    discount: 23,
    rating: 4.2,
    reviewCount: 15600,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    ],
    category: "home",
    tags: ["furniture", "storage", "ikea"],
    inStock: true,
    stockCount: 33,
    isFeatured: false,
    isRecommended: false,
    createdAt: "2024-03-02T10:00:00Z",
  },

  // ── Sports ─────────────────────────────────────────────────
  {
    id: "prod-15",
    name: "Garmin Forerunner 265",
    brand: "Garmin",
    description:
      "AMOLED display, training readiness score, HRV status, and race widget — built for runners.",
    price: 38999,
    originalPrice: 44999,
    discount: 13,
    rating: 4.6,
    reviewCount: 4120,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=800&fit=crop",
    ],
    category: "sports",
    tags: ["smartwatch", "running", "gps"],
    inStock: true,
    stockCount: 27,
    isFeatured: true,
    isRecommended: true,
    createdAt: "2024-03-08T10:00:00Z",
  },
  {
    id: "prod-16",
    name: "Yonex Astrox 88S Badminton Racket",
    brand: "Yonex",
    description:
      "Head-heavy balance with solid feel at impact. Recommended for doubles play.",
    price: 6490,
    originalPrice: 8490,
    discount: 24,
    rating: 4.5,
    reviewCount: 3780,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=800&fit=crop",
    ],
    category: "sports",
    tags: ["badminton", "racket", "yonex"],
    inStock: true,
    stockCount: 4,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-03-10T10:00:00Z",
  },

  // ── Books ──────────────────────────────────────────────────
  {
    id: "prod-17",
    name: "Atomic Habits",
    brand: "James Clear",
    description:
      "Tiny changes, remarkable results. The #1 New York Times bestseller on building good habits.",
    price: 399,
    originalPrice: 799,
    discount: 50,
    rating: 4.8,
    reviewCount: 92000,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=800&fit=crop",
    ],
    category: "books",
    tags: ["self-help", "bestseller", "habits"],
    inStock: true,
    stockCount: 500,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-01-05T10:00:00Z",
  },
  {
    id: "prod-18",
    name: "The Psychology of Money",
    brand: "Morgan Housel",
    description:
      "Timeless lessons on wealth, greed, and happiness. A must-read for every investor.",
    price: 349,
    originalPrice: 699,
    discount: 50,
    rating: 4.7,
    reviewCount: 67800,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=800&fit=crop",
    ],
    category: "books",
    tags: ["finance", "investing", "bestseller"],
    inStock: true,
    stockCount: 320,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-01-06T10:00:00Z",
  },
  {
    id: "prod-19",
    name: "Clean Code",
    brand: "Robert C. Martin",
    description:
      "A handbook of agile software craftsmanship. Essential reading for every developer.",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.6,
    reviewCount: 41200,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=800&fit=crop",
    ],
    category: "books",
    tags: ["programming", "software", "bestseller"],
    inStock: true,
    stockCount: 180,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-01-08T10:00:00Z",
  },
  {
    id: "prod-20",
    name: "boAt Airdopes 141 TWS",
    brand: "boAt",
    description:
      "42H total playback, ENx technology for clear calls, instant voice assistant access.",
    price: 999,
    originalPrice: 4990,
    discount: 80,
    rating: 4.1,
    reviewCount: 156000,
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&h=800&fit=crop",
    ],
    category: "electronics",
    tags: ["tws", "earbuds", "wireless"],
    inStock: true,
    stockCount: 430,
    isFeatured: false,
    isRecommended: true,
    createdAt: "2024-03-12T10:00:00Z",
  },
];

/** Helper: get featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

/** Helper: get recommended products */
export function getRecommendedProducts(): Product[] {
  return products.filter((p) => p.isRecommended);
}

/** Helper: get product by id */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Helper: get products by category */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
