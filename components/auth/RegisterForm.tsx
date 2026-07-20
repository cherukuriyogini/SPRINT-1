"use client";

/**
 * components/auth/RegisterForm.tsx
 * ─────────────────────────────────────────────────────────────
 * Form component managing registration fields, client-side
 * validation, inline error feedback, and mock registration
 * logic using localStorage. Reuses InputField, PasswordField,
 * and SocialLoginButton from the auth component library.
 * ─────────────────────────────────────────────────────────────
 */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SocialLoginButton from "./SocialLoginButton";
import { cn } from "@/lib/utils";

interface RegisterFormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
}

export default function RegisterForm() {
  const router = useRouter();

  // Form values state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI and validation state
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ── Validation ────────────────────────────────────────────
  const validateForm = (): boolean => {
    const newErrors: RegisterFormErrors = {};

    // Full Name
    if (!name.trim()) {
      newErrors.name = "Please enter your full name";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Enter a valid email address";
      }
    }

    // Mobile Number
    if (!mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    // Password
    if (!password) {
      newErrors.password = "Please enter a password";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Submit Handler ────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");
    setSuccessMessage("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Store mock user in localStorage (password intentionally excluded)
      const mockUser = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        mobile: mobile.trim(),
      };

      localStorage.setItem("smart_wishlist_registered_user", JSON.stringify(mockUser));

      setSuccessMessage("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
      }, 900);
    } catch {
      setGeneralError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ── Mock Google Sign-Up Handler ───────────────────────────
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setGeneralError("");
    setSuccessMessage("");

    setTimeout(() => {
      const mockUser = {
        name: "Google User",
        email: "google.user@gmail.com",
        mobile: "",
      };

      localStorage.setItem("smart_wishlist_registered_user", JSON.stringify(mockUser));

      setSuccessMessage("Signed up with Google! Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
        setIsLoading(false);
      }, 800);
    }, 1000);
  };

  // ── Helper: clear a single field error on change ─────────
  const clearError = (field: keyof RegisterFormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* General Messages */}
      {generalError && (
        <div
          className="p-3 bg-red-50 text-xs text-red-600 rounded border border-red-200 animate-fade-in"
          role="alert"
        >
          {generalError}
        </div>
      )}

      {successMessage && (
        <div
          className="p-3 bg-green-50 text-xs text-green-700 rounded border border-green-200 animate-fade-in"
          role="alert"
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {/* Full Name */}
        <InputField
          label="Full Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            clearError("name");
          }}
          error={errors.name}
          disabled={isLoading}
          autoComplete="name"
        />

        {/* Email Address */}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            clearError("email");
          }}
          error={errors.email}
          disabled={isLoading}
          autoComplete="email"
        />

        {/* Mobile Number */}
        <InputField
          label="Mobile Number"
          name="mobile"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={mobile}
          onChange={(e) => {
            // Allow only digits
            const digits = e.target.value.replace(/\D/g, "");
            setMobile(digits);
            clearError("mobile");
          }}
          error={errors.mobile}
          disabled={isLoading}
          autoComplete="tel"
        />

        {/* Password */}
        <PasswordField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            clearError("password");
            // Also re-validate confirmPassword match hint if already touched
            if (confirmPassword && errors.confirmPassword) {
              clearError("confirmPassword");
            }
          }}
          error={errors.password}
          disabled={isLoading}
          autoComplete="new-password"
        />

        {/* Confirm Password */}
        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            clearError("confirmPassword");
          }}
          error={errors.confirmPassword}
          disabled={isLoading}
          autoComplete="new-password"
        />

        {/* Terms Disclaimer */}
        <p className="text-[12px] text-[#878787] leading-relaxed mt-1 select-none">
          By creating an account, you agree to Smart Wishlist&apos;s{' '}
          <Link
            href="/terms"
            onClick={(e) => e.preventDefault()}
            className="text-[#2874f0] hover:underline font-medium"
          >
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            onClick={(e) => e.preventDefault()}
            className="text-[#2874f0] hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Primary Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full h-12 bg-[#FB641B] hover:bg-[#e05510] active:bg-[#c94b0f] text-white font-bold text-base tracking-wide shadow-xs transition-all duration-150 flex items-center justify-center gap-2",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FB641B] focus-visible:outline-offset-2",
            "disabled:opacity-75 disabled:cursor-not-allowed"
          )}
        >
          {isLoading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
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
          <span>Create Account</span>
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 py-2 select-none">
        <span className="h-[1px] bg-gray-200 flex-grow" />
        <span className="text-xs font-semibold text-gray-400 font-sans tracking-wider">OR</span>
        <span className="h-[1px] bg-gray-200 flex-grow" />
      </div>

      {/* Google Sign-Up Button */}
      <SocialLoginButton onGoogleSignIn={handleGoogleSignIn} disabled={isLoading} />

      {/* Login Redirect Link */}
      <div className="text-center mt-4">
        <Link
          href="/login"
          className="text-[14px] font-bold text-[#2874f0] hover:underline focus:underline outline-none rounded p-1"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
