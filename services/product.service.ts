/**
 * services/product.service.ts
 * ─────────────────────────────────────────────────────────────
 * Product data access layer.
 *
 * Phase 1: Returns mock data from data/products.ts
 * Phase 3: Replace mock imports with Prisma queries.
 *          Return types stay identical — UI needs no changes.
 * ─────────────────────────────────────────────────────────────
 */

import type { Product, SearchFilters } from "@/types";
import {
  products,
  getFeaturedProducts as fetchFeaturedProducts,
  getRecommendedProducts as fetchRecommendedProducts,
  getProductById as findById,
  getProductsByCategory,
} from "@/data/products";

/** Simulate async latency (remove in Phase 3) */
const delay = (ms = 50) => new Promise((r) => setTimeout(r, ms));

/**
 * Get all featured products for the Home Page hero section.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  await delay();
  return fetchFeaturedProducts();
}

/**
 * Get recommended products for the "Recommended for You" section.
 */
export async function getRecommendedProducts(): Promise<Product[]> {
  await delay();
  return fetchRecommendedProducts();
}

/**
 * Get a single product by its ID.
 */
export async function getProductById(id: string): Promise<Product | null> {
  await delay();
  return findById(id) ?? null;
}

/**
 * Get all products (optionally filtered).
 * Phase 3: Replace with Prisma.product.findMany({ where: filters })
 */
export async function getAllProducts(
  filters?: SearchFilters
): Promise<Product[]> {
  await delay();
  let result = [...products];

  if (filters?.category) {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters?.inStock) {
    result = result.filter((p) => p.inStock);
  }
  if (filters?.minPrice !== undefined) {
    result = result.filter((p) => p.price >= filters.minPrice!);
  }
  if (filters?.maxPrice !== undefined) {
    result = result.filter((p) => p.price <= filters.maxPrice!);
  }
  if (filters?.minRating !== undefined) {
    result = result.filter((p) => p.rating >= filters.minRating!);
  }
  if (filters?.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return result;
}

/**
 * Get products by category.
 */
export async function getProductsForCategory(
  category: string
): Promise<Product[]> {
  await delay();
  return getProductsByCategory(category);
}

/**
 * Search products by query string.
 */
export async function searchProducts(query: string): Promise<Product[]> {
  await delay();
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
