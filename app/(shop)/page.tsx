import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import RecommendedProducts from "@/components/home/RecommendedProducts";
import BestDealsProducts from "@/components/home/BestDealsProducts";
import NewArrivalsProducts from "@/components/home/NewArrivalsProducts";
import QuickCategories from "@/components/home/QuickCategories";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f1f3f6] pb-10">
      <Container size="full" className="pt-6 px-0">
        <section className="w-full overflow-hidden rounded-sm border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-200 sm:px-6 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-sm bg-[#fde68a] px-4 py-2 text-sm font-semibold text-[#92400e] shadow-sm">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[#fef08a] text-base">F</span>
                Flipkart
              </span>
              <span className="inline-flex items-center gap-2 rounded-sm bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-white shadow-sm">✈️</span>
                Travel
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-sm bg-slate-100 px-4 py-2 text-slate-700">
                📍 Location not set
              </span>
              <button className="text-[#2563eb] font-semibold hover:text-[#1d4ed8]">
                Select delivery location
              </button>
            </div>
          </div>

          <div className="mt-4 w-full">
            <SearchBar />
          </div>

          <QuickCategories />
        </section>
      </Container>

      <Container size="full" className="mt-6 px-0">
        <section className="w-full rounded-sm border border-[#2563eb] bg-[#eff6ff] px-5 py-5 shadow-sm sm:px-6 md:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#0f172a]">Exclusive coupon for you!</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-700">
                Flat 10% Off up to ₹100 applied automatically on eligible orders.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#2563eb] shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#dbeafe] text-lg">🏷️</span>
              Already applied
            </div>
          </div>
        </section>
      </Container>

      <Container size="full" className="mt-6 px-0">
        <section className="grid gap-4 lg:grid-cols-[1.8fr_1fr] w-full">
          <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
            <div className="relative h-72 overflow-hidden bg-slate-950 text-white sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1523475496153-3d6cc79d5bff?w=1200&q=80"
                alt="Smartphone launch"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-sm bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-200">LAVA | Flipkart Unique</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">VIRAT V1 5G</h3>
                <p className="mt-2 text-base text-slate-200">Launch 24th July, 12 PM</p>
                <p className="mt-4 text-sm text-slate-100">Built on 17 years of trust</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div className="relative h-36 overflow-hidden bg-slate-950 text-white sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80"
                  alt="Phone launch offer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-200">vivo | powered by OriginOS</p>
                  <h4 className="mt-2 text-xl font-semibold text-white">T5 Lite 44W</h4>
                  <p className="mt-1 text-sm text-slate-200">Day 1 offer sale on 22nd Jul, 12 PM</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div className="flex h-36 flex-col justify-center gap-3 p-5 sm:h-44">
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">NOTHING (R)</span>
                <h4 className="text-xl font-semibold text-slate-950">Phone (4b)</h4>
                <p className="text-sm text-slate-500">From ₹31,499*</p>
                <p className="text-xs text-slate-400">UV-treated unibody</p>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <Container size="full" className="mt-8 px-0">
        <section className="w-full border border-slate-200 bg-white px-4 py-4 shadow-sm md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2874f0]">
                Smart Wishlist Store
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-[#172337] sm:text-4xl">
                Shop smarter with premium offers from leading categories.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#556987] sm:text-base">
                Discover trending mobile phones, electronics, fashion, books, beauty, home essentials and sports gear in a polished store layout.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-slate-200 bg-[#eef4ff] p-5 text-slate-900">
                <p className="text-xs uppercase tracking-[0.28em] text-[#2874f0]">Fast alerts</p>
                <p className="mt-3 text-sm font-semibold text-[#172337]">Get instant stock and price updates.</p>
              </div>
              <div className="rounded-sm border border-slate-200 bg-[#fff7ed] p-5 text-slate-900">
                <p className="text-xs uppercase tracking-[0.28em] text-[#fb641b]">Top categories</p>
                <p className="mt-3 text-sm font-semibold text-[#172337]">Browse mobiles, fashion, home & more.</p>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <FeaturedProducts />
      <BestDealsProducts />
      <RecommendedProducts />
      <NewArrivalsProducts />
    </main>
  );
}
