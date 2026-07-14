"use client";

/**
 * components/ui/SearchBar.tsx
 * ─────────────────────────────────────────────────────────────
 * Client component for search input with icon.
 * Currently just a visual element; routing added in later phases.
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search for products, brands and more",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("[Search] Searching for:", query);
      // Phase 2: router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex w-full items-center bg-white rounded-sm overflow-hidden",
        className
      )}
    >
      <div className="absolute left-3 text-gray-400 pointer-events-none">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none focus:ring-0"
        aria-label="Search"
      />
    </form>
  );
}
