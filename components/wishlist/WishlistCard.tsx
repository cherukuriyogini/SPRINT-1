import { WishlistItem as WishlistItemType } from "@/types";

/**
 * components/wishlist/WishlistCard.tsx
 * ─────────────────────────────────────────────────────────────
 * Stub component for Wishlist item card.
 * ─────────────────────────────────────────────────────────────
 */

export default function WishlistCard({ item }: { item: WishlistItemType }) {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-sm mb-4">
      {/* Visual placeholder for Phase 1 */}
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
          Image
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
            {item.product.name}
          </h4>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-900">₹{item.product.price}</div>
            <div className="h-8 bg-blue-100 rounded w-32 flex items-center justify-center text-xs text-blue-600 font-semibold">
              Action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
