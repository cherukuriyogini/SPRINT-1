/**
 * components/home/Banner.tsx
 * ─────────────────────────────────────────────────────────────
 * Promotional hero banner carousel item.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";
import type { Banner as BannerType } from "@/types";
import Button from "@/components/ui/Button";

interface BannerProps {
  banner: BannerType;
  className?: string;
}

export default function Banner({ banner, className }: BannerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md flex flex-col justify-center px-8 py-12 sm:px-16 sm:py-20 bg-cover bg-center",
        className
      )}
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundColor: banner.bgColor,
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-lg" style={{ color: banner.textColor }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {banner.title}
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          {banner.subtitle}
        </p>
        <Button href={banner.href} variant="primary" size="lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
