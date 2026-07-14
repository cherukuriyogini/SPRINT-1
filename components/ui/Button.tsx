/**
 * components/ui/Button.tsx
 * ─────────────────────────────────────────────────────────────
 * Reusable button component with Flipkart-style variants.
 * Supports both <button> and <a> (via href) rendering.
 * ─────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2874f0] text-white hover:bg-[#1a5dc8] active:bg-[#1550b0] shadow-sm",
  secondary:
    "bg-white text-[#2874f0] border border-[#2874f0] hover:bg-[#e8f0fe] active:bg-[#d0e2fd]",
  accent:
    "bg-[#fb641b] text-white hover:bg-[#e05510] active:bg-[#c94b0f] shadow-sm",
  ghost:
    "bg-transparent text-[#2874f0] hover:bg-[#e8f0fe] active:bg-[#d0e2fd]",
  outline:
    "bg-transparent text-[#212121] border border-[#e0e0e0] hover:bg-gray-50 active:bg-gray-100",
  danger:
    "bg-[#ff4d4d] text-white hover:bg-[#e63e3e] active:bg-[#cc3636] shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-3 py-1.5 text-xs font-medium rounded",
  sm: "px-4 py-2 text-sm font-medium rounded",
  md: "px-6 py-2.5 text-sm font-semibold rounded",
  lg: "px-8 py-3 text-base font-semibold rounded",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  className,
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2874f0] focus-visible:outline-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={base} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={base}
      id={id}
      aria-label={ariaLabel}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
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
      )}
      {children}
    </button>
  );
}
