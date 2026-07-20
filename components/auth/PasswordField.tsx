"use client";

/**
 * components/auth/PasswordField.tsx
 * ─────────────────────────────────────────────────────────────
 * Underline-style password field with visibility toggle.
 * Meets accessibility requirements (aria tags, keyboard support).
 * ─────────────────────────────────────────────────────────────
 */

import React, { useState, useId } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function PasswordField({
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
}: PasswordFieldProps) {
  const uniqueId = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const hasValue = value !== undefined && value !== null && value !== "";
  const inputId = id || `password-${name || uniqueId}`;
  const errorId = `${inputId}-error`;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          type={showPassword ? "text" : "password"}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
          placeholder=" "
          className="peer w-full bg-transparent py-1.5 pr-10 text-sm md:text-base outline-none text-[#212121] transition-all"
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

        {hasValue && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-0 top-1.5 text-gray-400 hover:text-gray-600 focus:text-[#2874f0] outline-none p-1 hover:bg-gray-100 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
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
