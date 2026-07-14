import { CartItem as CartItemType } from "@/types";

/**
 * components/cart/CartItem.tsx
 * ─────────────────────────────────────────────────────────────
 * Stub component for Cart Item.
 * ─────────────────────────────────────────────────────────────
 */
export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-md mb-4 flex gap-4">
      <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
        Image
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
          {item.product.name}
        </h4>
        <p className="text-xs text-gray-500 mb-2">Qty: {item.quantity}</p>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );
}
