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
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#F1F3F6] p-4 sm:p-6 md:p-10 font-sans">
      <div className="flex w-full max-w-[850px] overflow-hidden rounded-[4px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] min-h-[460px] md:min-h-[500px]">
        {/* Left Column - Blue Info Panel (Exactly 40% width, hidden on mobile/tablet) */}
        <div className="hidden md:flex md:w-[40%] bg-[#2874F0] p-9 pb-0 flex-col justify-between text-white select-none relative">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold leading-tight tracking-wide">{title}</h1>
            <p className="text-base font-normal text-blue-100/90 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Custom SVG Wishlist/Shopping Vector Illustration (Aligned precisely to bottom edge) */}
          <div className="flex items-end justify-center w-full mt-auto">
            <svg
              className="w-full max-w-[260px] h-auto block"
              viewBox="0 0 200 170"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background curved arch */}
              <path d="M 20 160 A 80 80 0 0 1 180 160 Z" fill="#1e88e5" opacity="0.3" />

              {/* Sun (cx=140, cy=95) */}
              <circle cx="140" cy="95" r="13" fill="#ffe500" />
              
              {/* Clouds overlapping the sun */}
              <path
                d="M 125 105 a 8 8 0 0 1 12 -4 a 11 11 0 0 1 16 3 a 8 8 0 0 1 1 16 h -29 z"
                fill="#1557c0"
                opacity="0.45"
              />

              {/* Laptop screen bezel */}
              <rect x="50" y="96" width="100" height="62" rx="4" fill="#334155" />
              {/* Laptop internal display */}
              <rect x="53" y="99" width="94" height="52" fill="#f8fafc" />
              
              {/* Profile Avatar silhouette inside display */}
              <circle cx="100" cy="118" r="9" fill="#cbd5e1" />
              <path d="M 86 142 C 86 132, 114 132, 114 142 Z" fill="#cbd5e1" />

              {/* Laptop base/keyboard */}
              <path d="M 38 158 L 162 158 L 172 167 L 28 167 Z" fill="#cbd5e1" />
              {/* Laptop touchpad */}
              <rect x="90" y="161" width="20" height="2" rx="0.5" fill="#94a3b8" />

              {/* Left Item - Red shopping bag with white heart */}
              <g transform="translate(25, 126)">
                <rect x="0" y="0" width="22" height="32" rx="1.5" fill="#ff4d4d" />
                {/* Heart details */}
                <path
                  d="M 11 13 C 9.5 10.5, 7.5 11.5, 7.5 13.5 C 7.5 15.5, 11 18, 11 18 C 11 18, 14.5 15.5, 14.5 13.5 C 14.5 11.5, 12.5 10.5, 11 13 Z"
                  fill="#ffffff"
                />
              </g>

              {/* Right Item - Yellow shopping box with Facebook 'f' */}
              <g transform="translate(153, 134)">
                <rect x="0" y="0" width="22" height="24" rx="1.5" fill="#ffe500" />
                {/* Facebook logo symbol */}
                <path
                  d="M 12 8 L 10 8 L 10 10 L 12 10 L 12 17 L 14 17 L 14 10 L 16 10 L 16 8 L 14 8 L 14 6 C 14 5, 14.5 4.5, 15 4.5 L 16 4.5 L 16 2.5 L 14.5 2.5 C 12.5 2.5, 12 3.5, 12 5.5 Z"
                  fill="#2874f0"
                  transform="scale(0.85) translate(3, 1)"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Column - White Form Panel (Exactly 60% width, full on mobile) */}
        <div className="w-full md:w-[60%] flex flex-col justify-center px-6 py-10 sm:px-12 md:px-10 lg:px-14">
          {/* Mobile Header (Hidden on desktop) */}
          <div className="md:hidden mb-6 flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold text-[#212121]">{title}</h1>
            <p className="text-sm text-gray-500 leading-relaxed">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
