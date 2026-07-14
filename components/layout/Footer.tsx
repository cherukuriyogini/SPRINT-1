import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#172337] text-white pt-12 pb-6 mt-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Stories</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:underline">Payments</Link></li>
              <li><Link href="#" className="hover:underline">Shipping</Link></li>
              <li><Link href="#" className="hover:underline">Cancellation & Returns</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">Policy</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:underline">Return Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms Of Use</Link></li>
              <li><Link href="#" className="hover:underline">Security</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">Social</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:underline">Facebook</Link></li>
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">YouTube</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-[#ffe500]">★</span> Become a Seller
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#ffe500]">★</span> Advertise
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#ffe500]">★</span> Gift Cards
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#ffe500]">★</span> Help Center
            </span>
          </div>
          <div>
            © 2007-{currentYear} Smart Wishlist Inc.
          </div>
        </div>
      </Container>
    </footer>
  );
}
