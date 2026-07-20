import { cn } from "@/lib/utils";
import type { Banner as BannerType } from "@/types";
import Button from "@/components/ui/Button";

interface BannerProps {
  banner: BannerType;
  className?: string;
}

export default function Banner({ banner, className }: BannerProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden border border-slate-200 bg-[#0f2a59] shadow-sm rounded-sm",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(40,116,240,0.88), rgba(24,69,143,0.84)), url(${banner.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 grid min-h-[460px] grid-cols-12 gap-6 px-6 py-14 sm:px-10 lg:px-[48px]">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center text-white">
          <span className="inline-flex rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
            Smart Wishlist
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight sm:text-[3rem]">
            {banner.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
            {banner.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={banner.href} variant="primary" size="lg" className="min-w-[180px]">
              Explore Wishlist
            </Button>
            <Button href="/wishlist" variant="secondary" size="lg" className="min-w-[180px]">
              My Wishlist
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-sm border border-white/15 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-200">Daily deals</p>
              <p className="mt-2 text-base font-semibold text-white">Up to 50% off on top brands</p>
            </div>
            <div className="rounded-sm border border-white/15 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-200">Fast delivery</p>
              <p className="mt-2 text-base font-semibold text-white">Free delivery on orders over ₹499</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex items-center justify-end">
          <div className="w-full max-w-[380px] rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-200">Top Picks</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Curated products just for you</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Handpicked recommendations and flash offers to keep your wishlist fresh every day.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-white/90 p-4 text-slate-900">
                <p className="text-sm font-semibold">Extra savings</p>
                <p className="text-xs text-slate-500">Unlock daily discounts across gadgets and fashion.</p>
              </div>
              <div className="rounded-2xl bg-white/90 p-4 text-slate-900">
                <p className="text-sm font-semibold">Stock alerts</p>
                <p className="text-xs text-slate-500">Be the first to know when favorites are back in stock.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}