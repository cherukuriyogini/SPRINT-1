/**
 * app/(shop)/wishlist/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Wishlist Page using mock data to visualize the core feature.
 * ─────────────────────────────────────────────────────────────
 */
import Container from "@/components/ui/Container";
import { getWishlist } from "@/services/wishlist.service";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

export default async function WishlistPage() {
  const items = await getWishlist();

  return (
    <Container className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Wishlist ({items.length})</h1>
        <div className="text-sm text-gray-500">
           Last synced: Just now
        </div>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md shadow-sm flex flex-col sm:flex-row gap-6 items-start">
             <div className="w-full sm:w-32 aspect-square relative flex-shrink-0">
               <ProductImage src={item.product.image} alt={item.product.name} />
             </div>
             
             <div className="flex-1">
                 <h3 className="font-medium text-lg mb-1">{item.product.name}</h3>
                 <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-xl">{formatPrice(item.product.price)}</span>
                 </div>
                 
                 <div className="flex items-center gap-2 mb-4">
                   <Badge 
                      variant={item.stock.status === 'in-stock' ? 'success' : item.stock.status === 'low-stock' ? 'warning' : 'error'}
                      dot
                   >
                     {item.stock.status === 'in-stock' ? 'In Stock' : item.stock.status === 'low-stock' ? `Low Stock (${item.stock.count} left)` : 'Out of Stock'}
                   </Badge>
                   <span className="text-xs text-gray-400">Checked {new Date(item.stock.lastChecked).toLocaleTimeString()}</span>
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <Button 
                       variant="primary" 
                       disabled={item.stock.status === 'out-of-stock'}
                       className="w-full sm:w-auto"
                    >
                       Move to Cart
                    </Button>
                    <Button variant="ghost" className="text-gray-500 hover:text-red-500">
                       Remove
                    </Button>
                 </div>
             </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
