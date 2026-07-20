/**
 * components/ui/Badge.tsx
 * ─────────────────────────────────────────────────────────────
 * Status badge / pill used for stock status, categories, tags.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  dot?: boolean; // Show a leading colored dot
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-green-100 text-green-800 border border-green-200",
  warning: "bg-orange-100 text-orange-700 border border-orange-200",
  error:   "bg-red-100 text-red-700 border border-red-200",
  info:    "bg-blue-100 text-blue-700 border border-blue-200",
  primary: "bg-[#e8f0fe] text-[#2874f0] border border-blue-200",
  default: "bg-gray-100 text-gray-600 border border-gray-200",
};

const dotColors: Record<BadgeVariant, string> = {
  success: "bg-green-500",
  warning: "bg-orange-500",
  error:   "bg-red-500",
  info:    "bg-blue-500",
  primary: "bg-[#2874f0]",
  default: "bg-gray-400",
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "flex-shrink-0",
            size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2",
            dotColors[variant]
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
