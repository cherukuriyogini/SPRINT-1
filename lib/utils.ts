/**
 * lib/utils.ts
 * ─────────────────────────────────────────────────────────────
 * Core utility functions used across the application.
 * ─────────────────────────────────────────────────────────────
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — Merge Tailwind class names safely.
 * Combines clsx (conditional classes) with tailwind-merge
 * (deduplication / specificity resolution).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * formatPrice() — Format a number as Indian Rupees.
 * Example: 45999 → "₹45,999"
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * formatDiscount() — Return a discount badge string.
 * Example: 20 → "20% off"
 */
export function formatDiscount(pct: number): string {
  return `${Math.round(pct)}% off`;
}

/**
 * calcDiscount() — Calculate discount % from original and sale price.
 */
export function calcDiscount(original: number, sale: number): number {
  if (original <= 0) return 0;
  return Math.round(((original - sale) / original) * 100);
}

/**
 * formatRating() — Pad rating to one decimal place.
 * Example: 4 → "4.0"
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/**
 * formatReviewCount() — Human-readable review count.
 * Example: 12450 → "12,450 reviews"
 */
export function formatReviewCount(count: number): string {
  return `${new Intl.NumberFormat("en-IN").format(count)} reviews`;
}

/**
 * formatRelativeTime() — Show a friendly relative timestamp.
 * Example: "2 minutes ago"
 */
export function formatRelativeTime(isoString: string): string {
  const diff = (Date.now() - new Date(isoString).getTime()) / 1000;
  if (diff < 60)         return "just now";
  if (diff < 3600)       return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)      return `${Math.floor(diff / 3600)}h ago`;
  return new Date(isoString).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}

/**
 * formatDateTime() — Format ISO string to readable date+time.
 */
export function formatDateTime(isoString: string): string {
  return new Date(isoString).toLocaleString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

/**
 * truncate() — Truncate text to a given character count.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * slugify() — Convert a string to a URL-safe slug.
 */
export function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

/**
 * clamp() — Constrain a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * generateId() — Simple client-side unique ID generator.
 * Replace with crypto.randomUUID() in production.
 */
export function generateId(): string {
  return Math.random().toString(36).slice(2, 11);
}
