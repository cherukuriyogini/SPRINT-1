import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-8">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-[#93c5fd]">Smart Wishlist</p>
            <h2 className="text-2xl font-semibold">A premium shopping experience for your wishlist.</h2>
            <p className="text-sm leading-7 text-slate-300">
              Track price drops, save on your favorite products, and shop with elegant product discovery tailored for modern buyers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Browse</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-white transition">Mobiles</Link></li>
              <li><Link href="#" className="hover:text-white transition">Electronics</Link></li>
              <li><Link href="#" className="hover:text-white transition">Fashion</Link></li>
              <li><Link href="#" className="hover:text-white transition">Home & Kitchen</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Support</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Connect</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="uppercase tracking-[0.24em] text-slate-500">Smart Wishlist</p>
          <p>© {currentYear} Smart Wishlist. Designed for modern shoppers.</p>
        </div>
      </Container>
    </footer>
  );
}
