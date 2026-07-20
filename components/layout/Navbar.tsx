"use client";

/**
 * components/layout/Navbar.tsx
 * ─────────────────────────────────────────────────────────────
 * Premium Smart Wishlist top navigation.
 * Keeps existing routes while polishing the search and action items.
 * ─────────────────────────────────────────────────────────────
 */
import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ShoppingCart, Heart, User, Menu, X, LogOut } from "lucide-react";
import Container from "@/components/ui/Container";
import { ROUTES } from "@/lib/constants";

interface MockUser {
  email: string;
  name: string;
  isLoggedIn: boolean;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<MockUser | null>(null);

  const cartCount = 3;
  const wishlistCount = 5;
  const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/register");

  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem("smart_wishlist_user");
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("auth-state-change", loadUser);
    return () => {
      window.removeEventListener("auth-state-change", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("smart_wishlist_user");
    setUser(null);
    setMobileMenuOpen(false);
    window.dispatchEvent(new Event("auth-state-change"));
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#2874F0]/95 backdrop-blur-xl shadow-xl">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link href={ROUTES.HOME} className="flex items-center gap-3">
              <img src="/flipkart-logo.svg" alt="Flipkart" className="h-10 w-auto rounded-sm bg-white p-1" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-white">Flipkart</span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/90">Explore Plus</span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center gap-5">
            {!isAuthPage && (
              <Link
                href={ROUTES.WISHLIST}
                className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2874F0] hover:shadow-lg"
              >
                <div className="relative">
                  <Heart size={20} className="text-white" />
                  {wishlistCount > 0 && (
                    <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center bg-red-500 text-[10px] font-bold text-white shadow-md">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">Wishlist</span>
              </Link>
            )}
            <div className="hidden lg:flex flex-1 max-w-3xl px-6">
              <SearchBar />
</div>

            <Link
              href={ROUTES.CART}
              className="group flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              <div className="relative">
                <ShoppingCart size={20} className="text-white" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center bg-red-500 text-[10px] font-bold text-white shadow-md">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:inline">Cart</span>
            </Link>

            {user ? (
              <div className="hidden md:flex items-center gap-5">
                <div className="bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                  Hello, {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-white px-4 py-2 text-sm font-semibold text-[#2874F0] transition hover:bg-slate-100 hover:text-[#1d4ed8]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={ROUTES.LOGIN}
                className="hidden md:inline-flex bg-white px-5 py-2 text-sm font-semibold text-[#2874F0] transition hover:bg-slate-100 hover:text-[#1d4ed8]"
              >
                Login
              </Link>
            )}

            <div className="md:hidden">
              {user ? (
                <button onClick={handleLogout} className="p-2 text-white hover:text-slate-100">
                  <LogOut size={22} />
                </button>
              ) : (
                <Link href={ROUTES.LOGIN} className="p-2 text-white hover:text-slate-100">
                  <User size={22} />
                </Link>
              )}
            </div>
          </nav>
        </div>
      </Container>


      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1f4dc7] px-4 py-4 text-white">
          <div className="space-y-3">
            {!isAuthPage && (
              <Link
                href={ROUTES.WISHLIST}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20"
              >
                <Heart size={18} />
                Wishlist ({wishlistCount})
              </Link>
            )}
            <Link
              href={ROUTES.CART}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium hover:bg-white/20"
            >
              <ShoppingCart size={18} />
              Cart ({cartCount})
            </Link>
            {user ? (
              <>
                <div className="bg-white/10 px-4 py-3 text-sm">
                  <p className="text-xs text-slate-200">Signed in as</p>
                  <p className="font-semibold text-white">{user.name}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-white px-4 py-3 text-sm font-semibold text-[#2874f0]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href={ROUTES.LOGIN}
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-white px-4 py-3 text-center text-sm font-semibold text-[#2874f0]"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}