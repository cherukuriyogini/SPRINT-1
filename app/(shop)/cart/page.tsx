/**
 * app/(shop)/cart/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Cart Page using mock data to visualize the layout.
 * ─────────────────────────────────────────────────────────────
 */
import Container from "@/components/ui/Container";
import { getCart, getCartSummary } from "@/services/cart.service";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export default async function CartPage() {
  const items = await getCart();
  const summary = await getCartSummary();

  return (
    <Container className="py-8">
      <h1 className="text-2xl font-bold mb-6">My Cart ({items.length})</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 border border-gray-200 rounded-md shadow-sm flex flex-col sm:flex-row gap-4">
               <div className="w-24 h-24 relative flex-shrink-0">
                 <ProductImage src={item.product.image} alt={item.product.name} />
               </div>
               
               <div className="flex-1">
                   <h3 className="font-medium mb-1">{item.product.name}</h3>
                   <div className="text-sm text-gray-500 mb-2">Seller: Smart Retail</div>
                   <div className="flex items-center gap-2 mb-4">
                      <span className="font-bold">{formatPrice(item.product.price)}</span>
                      {item.product.originalPrice > item.product.price && (
                         <span className="text-sm text-gray-400 line-through">{formatPrice(item.product.originalPrice)}</span>
                      )}
                   </div>
                   
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                         <button className="w-8 h-8 rounded-full border flex items-center justify-center font-bold bg-gray-50">-</button>
                         <span className="font-medium px-2">{item.quantity}</span>
                         <button className="w-8 h-8 rounded-full border flex items-center justify-center font-bold bg-gray-50">+</button>
                      </div>
                      <button className="font-medium hover:text-[#2874f0] uppercase text-sm">Save for later</button>
                      <button className="font-medium hover:text-red-500 uppercase text-sm">Remove</button>
                   </div>
               </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Panel */}
        <div className="w-full lg:w-96 flex-shrink-0">
           <div className="bg-white p-6 border border-gray-200 rounded-md shadow-sm sticky top-24">
             <h3 className="font-bold text-gray-500 uppercase mb-4 border-b pb-4 text-sm tracking-wide">Price Details</h3>
             
             <div className="space-y-4 mb-6">
               <div className="flex justify-between">
                 <span>Price ({summary.itemCount} items)</span>
                 <span>{formatPrice(summary.subtotal)}</span>
               </div>
               <div className="flex justify-between text-green-600">
                 <span>Discount</span>
                 <span>- {formatPrice(summary.discount)}</span>
               </div>
               <div className="flex justify-between">
                 <span>Delivery Charges</span>
                 <span className={summary.deliveryFee === 0 ? "text-green-600" : ""}>
                    {summary.deliveryFee === 0 ? "Free" : formatPrice(summary.deliveryFee)}
                 </span>
               </div>
             </div>
             
             <div className="flex justify-between font-bold text-lg border-t border-dashed border-gray-300 py-4 mb-4">
               <span>Total Amount</span>
               <span>{formatPrice(summary.total)}</span>
             </div>
             
             {summary.savings > 0 && (
                <div className="text-green-600 font-medium text-sm mb-6">
                  You will save {formatPrice(summary.savings)} on this order
                </div>
             )}
             
             <Button variant="accent" size="lg" fullWidth>
                Place Order
             </Button>
           </div>
        </div>
      </div>
    </Container>
  );
}
