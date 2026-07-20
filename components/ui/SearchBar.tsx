"use client";

import { Search, X } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search for products, brands and more...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const value = query.trim();
    if (!value) return;

    if (onSearch) {
      onSearch(value);
    } else {
      console.log("Searching:", value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="flex items-center h-12 rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:shadow-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:border-gray-700 dark:bg-gray-900">
        {/* Search Icon */}
        <Search
          size={20}
          className="ml-4 text-gray-400 flex-shrink-0"
        />

        {/* Input */}
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-400 dark:text-white"
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="mr-2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800"
          >
            <X size={18} />
          </button>
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mr-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Search
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="mt-2 flex justify-end">
        <span className="rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
          Press Enter ↵
        </span>
      </div>
    </div>
  );
}