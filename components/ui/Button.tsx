"use client";

import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";
import type { ButtonVariant, ButtonSize } from "@/types";

type Variant = ButtonVariant;

type Size = ButtonSize;

type ButtonProps =
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      variant?: Variant;
      size?: Size;
      loading?: boolean;
      disabled?: boolean;
      fullWidth?: boolean;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
      className?: string;
    })
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: Variant;
      size?: Size;
      loading?: boolean;
      disabled?: boolean;
      fullWidth?: boolean;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
      className?: string;
    });

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#2874F0] text-white hover:bg-[#1d64d8] shadow-md hover:shadow-xl",

  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",

  outline:
    "border border-[#2874F0] text-[#2874F0] hover:bg-[#2874F0] hover:text-white",

  ghost:
    "text-gray-700 hover:bg-gray-100",

  danger:
    "bg-red-500 text-white hover:bg-red-600 shadow-md",

  success:
    "bg-green-600 text-white hover:bg-green-700 shadow-md",

  accent:
    "bg-[#ff9f00] text-white hover:bg-[#e08e00] shadow-md",

  flipkart:
    "bg-[#2874f0] text-white hover:bg-[#1a5ed0] shadow-md",
};

const sizeClasses: Record<Size, string> = {
  xs: "h-8 px-3 text-xs",
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-semibold
        transition-all
        duration-300
        active:scale-95
        hover:scale-[1.02]
        disabled:cursor-not-allowed
        disabled:opacity-60
        focus:outline-none
        focus:ring-2
        focus:ring-[#2874F0]
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}