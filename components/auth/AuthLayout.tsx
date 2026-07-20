"use client";

/**
 * components/auth/AuthLayout.tsx
 * ─────────────────────────────────────────────────────────────
 * Two-column responsive card wrapper for authentication screens.
 * Contains the custom SVG illustration aligned to the bottom and
 * splits the layout exactly 40% (left blue) / 60% (right white).
 * ─────────────────────────────────────────────────────────────
 */

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AuthLayout({
  children,
  title = "Login",
  subtitle = "Get access to your Orders, Wishlist and Recommendations",
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F1F3F6] p-4 sm:p-6 md:p-10 font-sans">
      <div className="flex w-full max-w-[980px] overflow-hidden bg-white shadow-[0_2px_18px_rgba(15,23,42,0.12)] min-h-[560px] md:min-h-[620px]">
        <div className="hidden lg:flex lg:w-[42%] xl:w-[44%] bg-[#2874F0] p-10 flex-col justify-between text-white select-none">
          <div className="space-y-5">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
              <p className="text-base leading-7 text-blue-100/90">{subtitle}</p>
            </div>

            <div className="mt-6 border border-white/15 bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">Verified by Flipkart</p>
              <p className="mt-3 text-sm leading-6 text-white/90">
                Secure access to your orders, wishlist, and recommendations.
              </p>
            </div>
          </div>

          <div className="flex items-end justify-center w-full mt-auto">
            <svg
              className="w-full max-w-[280px] h-auto block"
              viewBox="0 0 320 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="28" width="320" height="176" rx="14" fill="#1D4ED8" opacity="0.18" />
              <rect x="18" y="44" width="284" height="154" rx="12" fill="#1553b5" />
              <rect x="30" y="60" width="260" height="110" rx="10" fill="#ffffff" />
              <circle cx="76" cy="108" r="18" fill="#dbeafe" />
              <rect x="52" y="134" width="64" height="20" rx="4" fill="#dbeafe" />
              <rect x="140" y="96" width="120" height="16" rx="4" fill="#e2e8f0" />
              <rect x="140" y="120" width="120" height="16" rx="4" fill="#e2e8f0" />
              <path d="M40 188 H280 L260 168 H60 Z" fill="#c7d2fe" />
              <g transform="translate(24, 146)">
                <rect x="0" y="0" width="38" height="46" rx="6" fill="#ff7f1a" />
                <rect x="10" y="12" width="18" height="18" rx="4" fill="#ffffff" />
                <path d="M16 22 L20 28 L26 20" stroke="#ff7f1a" strokeWidth="2" fill="none" />
              </g>
              <g transform="translate(238, 154)">
                <rect x="0" y="0" width="48" height="34" rx="6" fill="#facc15" />
                <text x="12" y="24" fontSize="18" fill="#1D4ED8" fontWeight="700">₹</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="w-full lg:w-[58%] min-w-0 flex flex-col justify-center px-8 py-10 sm:px-12 md:px-14 lg:px-16">
          <div className="mb-8 flex items-center gap-3 rounded-sm border border-slate-200 bg-white/80 p-3 shadow-sm shadow-slate-200/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#ffe300] text-slate-950 text-lg font-bold shadow-sm">
              F
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">Flipkart</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Explore Plus</p>
            </div>
          </div>

          <div className="hidden md:block mb-6">
            <h1 className="text-3xl font-semibold tracking-tight text-[#111827]">{title}</h1>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
