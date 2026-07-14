"use client";

/**
 * app/(shop)/layout.tsx
 * ─────────────────────────────────────────────────────────────
 * Layout wrapper for shopping pages.
 * Implements a strict route guard requiring the user to be logged in
 * (simulated via mock session) before rendering shop content.
 * Redirects unauthenticated requests to /login.
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("smart_wishlist_user");
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          if (parsed && parsed.isLoggedIn) {
            setIsAuthenticated(true);
            setIsChecking(false);
            return;
          }
        } catch {
          // JSON parsing failed, assume unauthenticated
        }
      }
      
      // Redirect to login
      setIsAuthenticated(false);
      setIsChecking(false);
      router.push("/login");
    };

    checkAuth();

    // Re-check auth on visibility or storage changes to make it robust
    window.addEventListener("storage", checkAuth);
    window.addEventListener("auth-state-change", checkAuth);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("auth-state-change", checkAuth);
    };
  }, [router]);

  // Prevent flash of guarded content during validation
  if (isChecking) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F1F3F6]">
        <div className="flex flex-col items-center gap-3">
          <svg
            className="animate-spin h-10 w-10 text-[#2874f0]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span className="text-sm font-semibold text-gray-500 font-sans">
            Loading your session...
          </span>
        </div>
      </div>
    );
  }

  // Render children only if verified
  return isAuthenticated ? <>{children}</> : null;
}
