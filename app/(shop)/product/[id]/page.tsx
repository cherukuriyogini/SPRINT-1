/**
 * app/(shop)/product/[id]/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Product Details Page.
 * ─────────────────────────────────────────────────────────────
 */
import Container from "@/components/ui/Container";
import { getProductById } from "@/services/product.service";
import ProductImage from "@/components/product/ProductImage";
import Button from "@/components/ui/Button";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { Star, ShoppingCart, Zap, Heart } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-8">
      <div className="bg-white border border-gray-200 rounded-md shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Image Gallery & Actions */}
        <div className="w-full md:w-2/5 p-4 border-r border-gray-200 flex flex-col">
          <div className="relative aspect-square mb-4 border border-gray-100 rounded">
            <ProductImage src={product.image} alt={product.name} />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:text-[#ff4d4d] text-gray-400">
               <Heart size={20} />
            </button>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" size="lg" className="flex-1 py-4 text-base font-bold rounded-sm bg-[#ff9f00] hover:bg-[#e08e00]">
              <ShoppingCart size={20} className="mr-2" /> ADD TO CART
            </Button>
            <Button variant="accent" size="lg" className="flex-1 py-4 text-base font-bold rounded-sm">
              <Zap size={20} className="mr-2 fill-white" /> BUY NOW
            </Button>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full md:w-3/5 p-6 sm:p-8">
           <h1 className="text-xl sm:text-2xl mb-2 text-[#212121]">{product.name}</h1>
           
           <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-[#26a541] text-white px-2 py-0.5 rounded text-sm font-bold">
                {product.rating.toFixed(1)} <Star size={12} className="fill-white" />
              </div>
              <span className="text-sm font-medium text-gray-500">
                {product.reviewCount.toLocaleString()} Ratings & Reviews
              </span>
           </div>
           
           <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-lg font-bold text-[#388e3c]">{formatDiscount(product.discount)}</span>
                </>
              )}
           </div>

           {/* Description Placeholder */}
           <div className="mb-8">
              <h3 className="font-medium text-gray-800 mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                 {product.description}
              </p>
           </div>
           
           {/* Tags Placeholder */}
           <div className="flex gap-2 flex-wrap mb-8">
              {product.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full uppercase tracking-wider">{tag}</span>
              ))}
           </div>
           
           {/* Specifications Placeholder */}
           <div className="border border-gray-200 rounded-sm">
              <div className="font-medium p-4 border-b border-gray-200 text-lg">Specifications</div>
              <div className="p-4 grid grid-cols-1 gap-y-4 text-sm">
                 <div className="grid grid-cols-3">
                   <div className="text-gray-500">Brand</div>
                   <div className="col-span-2 text-gray-900">{product.brand}</div>
                 </div>
                 <div className="grid grid-cols-3">
                   <div className="text-gray-500">Category</div>
                   <div className="col-span-2 text-gray-900 capitalize">{product.category}</div>
                 </div>
                 <div className="grid grid-cols-3">
                   <div className="text-gray-500">In Stock</div>
                   <div className="col-span-2 text-gray-900">{product.inStock ? "Yes" : "No"}</div>
                 </div>
              </div>
           </div>
        </div>
        
      </div>
    </Container>
  );
}
