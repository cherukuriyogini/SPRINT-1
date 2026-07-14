"use client";

/**
 * components/layout/Navbar.tsx
 * ─────────────────────────────────────────────────────────────
 * Flipkart-style header navigation.
 * Tracks mock user auth status dynamically using local storage
 * and safe hydration practices.
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Heart, User, Menu, X, LogOut } from "lucide-react";
import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";
import { ROUTES, APP_NAME } from "@/lib/constants";

interface MockUser {
  email: string;
  name: string;
  isLoggedIn: boolean;
}

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<MockUser | null>(null);

  // Mock counts for Phase 1
  const cartCount = 3;
  const wishlistCount = 5;

  // Load user session on mount
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

    // Listen to custom login events from login form
    window.addEventListener("auth-state-change", loadUser);
    return () => {
      window.removeEventListener("auth-state-change", loadUser);
    };
  }, []);

  // Handle mock logout
  const handleLogout = () => {
    localStorage.removeItem("smart_wishlist_user");
    setUser(null);
    setMobileMenuOpen(false);
    window.dispatchEvent(new Event("auth-state-change"));
    router.push("/login");
  };

  return (
    <header className="bg-[#2874f0] text-white sticky top-0 z-50 shadow-sm font-sans select-none">
      <Container>
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-1 focus:outline-hidden hover:bg-blue-600 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href={ROUTES.HOME} className="flex flex-col focus:outline-hidden hover:opacity-95">
              <span className="text-xl font-bold tracking-tight italic">
                {APP_NAME}
              </span>
              <span className="text-[10px] text-gray-200 hover:underline flex items-center">
                Explore <span className="text-[#ffe500] ml-1 font-medium">Plus</span>
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on small mobile */}
          <div className="hidden sm:block flex-1 max-w-2xl mx-4">
            <SearchBar />
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-2 sm:gap-6 font-medium text-[15px]">
            {/* Desktop Navbar Links */}

            <Link href={ROUTES.WISHLIST} className="flex items-center gap-1.5 hover:text-gray-200 focus:text-gray-200 outline-none group">
              <div className="relative">
                <Heart size={20} className="group-hover:fill-white transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff4d4d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#2874f0]">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:block">Wishlist</span>
            </Link>

            <Link href={ROUTES.CART} className="flex items-center gap-1.5 hover:text-gray-200 focus:text-gray-200 outline-none group">
              <div className="relative">
                <ShoppingCart size={20} className="group-hover:fill-white transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff4d4d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#2874f0]">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:block">Cart</span>
            </Link>

            {/* Authenticated User / Login state indicator */}
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm font-semibold max-w-[120px] truncate text-[#ffe500]">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-[#fb641b] text-white px-4 py-1.5 rounded-sm font-semibold text-xs tracking-wider uppercase hover:bg-[#e05510] active:bg-[#c94b0f] transition-all flex items-center gap-1 shadow-xs outline-none"
                >
                  <LogOut size={13} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href={ROUTES.LOGIN}
                className="hidden md:flex bg-white text-[#2874f0] px-6 py-1 rounded-sm font-semibold hover:bg-gray-100 transition-colors focus:bg-gray-100 outline-none shadow-xs"
              >
                Login
              </Link>
            )}

            {/* Mobile/Tablet User Icon fallback */}
            <div className="md:hidden flex items-center">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="p-1 text-[#ffe500] hover:text-white"
                  title="Logout"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              ) : (
                <Link href={ROUTES.LOGIN} className="p-1 hover:text-gray-200" aria-label="Login">
                  <User size={20} />
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden pb-3">
          <SearchBar />
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-md border-t border-gray-200 animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href={ROUTES.WISHLIST}
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold flex items-center gap-2 text-gray-700 hover:text-[#2874f0]"
            >
              <Heart size={18} />
              <span>Wishlist ({wishlistCount})</span>
            </Link>
            <Link
              href={ROUTES.CART}
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold flex items-center gap-2 text-gray-700 hover:text-[#2874f0]"
            >
              <ShoppingCart size={18} />
              <span>Cart ({cartCount})</span>
            </Link>
            {user ? (
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-600">
                  Logged in as: <strong className="text-[#2874f0]">{user.name}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="w-full text-center py-2 bg-red-500 hover:bg-red-600 text-white rounded font-semibold text-sm transition-colors mt-1"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href={ROUTES.LOGIN}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 bg-[#2874f0] hover:bg-blue-600 text-white rounded font-semibold text-sm transition-colors mt-2"
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
