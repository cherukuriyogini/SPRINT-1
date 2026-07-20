"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ShoppingBag,
  Shirt,
  Smartphone,
  Monitor,
  Droplet,
  Lamp,
  Cpu,
  ToyBrick,
  Coffee,
  Truck,
  Activity,
  Sofa,
  BookOpen,
  Bike,
  PawPrint,
  Gift,
} from "lucide-react";

const quickCategories = [
  { id: "for-you", label: "For You", icon: <ShoppingBag className="h-5 w-5" /> },
  { id: "fashion", label: "Fashion", icon: <Shirt className="h-5 w-5" /> },
  { id: "mobiles", label: "Mobiles", icon: <Smartphone className="h-5 w-5" /> },
  { id: "electronics", label: "Electronics", icon: <Monitor className="h-5 w-5" /> },
  { id: "beauty", label: "Beauty", icon: <Droplet className="h-5 w-5" /> },
  { id: "home", label: "Home", icon: <Lamp className="h-5 w-5" /> },
  { id: "appliances", label: "Appliances", icon: <Cpu className="h-5 w-5" /> },
  { id: "toys", label: "Toys", icon: <ToyBrick className="h-5 w-5" /> },
  { id: "food", label: "Food & Home", icon: <Coffee className="h-5 w-5" /> },
  { id: "auto", label: "Auto Accs.", icon: <Truck className="h-5 w-5" /> },
  { id: "sports", label: "Sports", icon: <Activity className="h-5 w-5" /> },
  { id: "furniture", label: "Furniture", icon: <Sofa className="h-5 w-5" /> },
  { id: "books", label: "Books", icon: <BookOpen className="h-5 w-5" /> },
  { id: "vehicles", label: "2 Wheelers", icon: <Bike className="h-5 w-5" /> },
  { id: "pet", label: "Pets", icon: <PawPrint className="h-5 w-5" /> },
  { id: "gifts", label: "Gifts", icon: <Gift className="h-5 w-5" /> },
];

export default function QuickCategories() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <div className="mt-4 overflow-x-auto pb-2">
      <div className="flex min-w-max justify-center gap-3">
        {quickCategories.map((category, index) => (
          <Link
            key={category.id}
            href={`/?category=${category.id}`}
            aria-label={`Browse ${category.label}`}
            className={`group min-w-[100px] sm:min-w-[120px] rounded-sm border px-3 py-4 text-center transition ${
              activeCategory === category.id
                ? "border-transparent bg-[#eff6ff] text-[#0f172a] shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#2563eb] hover:text-[#0f172a] hover:shadow-sm"
            }`}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm bg-slate-100 text-[#2563eb]">
              {category.icon}
            </div>
            <span className="mt-3 block text-xs font-semibold tracking-wide text-slate-700">
              {category.label}
            </span>
            <span
              className={`mt-2 block h-1 w-full rounded-sm ${
                activeCategory === category.id ? "bg-[#2563eb]" : "bg-transparent"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
