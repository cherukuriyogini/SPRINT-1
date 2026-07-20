/**
 * components/cart/CartSummary.tsx
 * ─────────────────────────────────────────────────────────────
 * Stub component for Cart Summary.
 * ─────────────────────────────────────────────────────────────
 */
export default function CartSummary() {
  return (
    <div className="bg-white p-4 border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">PRICE DETAILS</h3>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span>Price (Items)</span>
          <span>₹---</span>
        </div>
        <div className="flex justify-between text-sm text-green-600">
          <span>Discount</span>
          <span>- ₹---</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery Charges</span>
          <span className="text-green-600">Free</span>
        </div>
      </div>
      <div className="flex justify-between font-bold text-gray-800 border-t pt-3 border-dashed">
        <span>Total Amount</span>
        <span>₹---</span>
      </div>
    </div>
  );
}
