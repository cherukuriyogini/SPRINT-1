"use client";

/**
 * components/auth/InputField.tsx
 * ─────────────────────────────────────────────────────────────
 * Underline-style input field with floating label transition.
 * Meets accessibility requirements (aria tags, focus states).
 * ─────────────────────────────────────────────────────────────
 */

import React, { useState, useId } from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputField({
  label,
  error,
  id,
  name,
  value,
  onFocus,
  onBlur,
  className,
  disabled,
  ...props
}: InputFieldProps) {
  const uniqueId = useId();
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== null && value !== "";
  const inputId = id || `input-${name || uniqueId}`;
  const errorId = `${inputId}-error`;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className={cn("relative flex flex-col pt-5 pb-1", className)}>
      <div
        className={cn(
          "relative flex items-center border-b transition-colors duration-200",
          error
            ? "border-red-500 focus-within:border-red-500"
            : isFocused
            ? "border-[#2874f0]"
            : "border-gray-200 hover:border-gray-400",
          disabled && "opacity-50 cursor-not-allowed border-dashed"
        )}
      >
        <input
          id={inputId}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          placeholder=" " // Required for peer-placeholder-shown matching if used
          className="peer w-full bg-transparent py-1.5 text-sm md:text-base outline-none text-[#212121] transition-all"
          {...props}
        />
        
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-0 top-1.5 origin-[0_0] text-sm md:text-base transition-all duration-200 pointer-events-none",
            (isFocused || hasValue)
              ? "transform -translate-y-4 scale-[0.8] font-medium text-[#2874f0]"
              : "text-gray-400",
            error && "text-red-500"
          )}
        >
          {label}
        </label>
      </div>

      {error && (
        <span
          id={errorId}
          className="text-xs text-red-500 mt-1 font-medium animate-fade-in"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}
