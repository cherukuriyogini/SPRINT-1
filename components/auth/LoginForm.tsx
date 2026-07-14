"use client";

/**
 * components/auth/LoginForm.tsx
 * ─────────────────────────────────────────────────────────────
 * Form component managing login fields, client-side validation,
 * inline error feedback, and mock authentication session logic.
 * ─────────────────────────────────────────────────────────────
 */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SocialLoginButton from "./SocialLoginButton";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const router = useRouter();
  
  // Form values state
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  
  // UI and validation state
  const [errors, setErrors] = useState<{ emailOrMobile?: string; password?: string }>({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validate fields
  const validateForm = () => {
    const newErrors: { emailOrMobile?: string; password?: string } = {};
    
    // Email/Mobile validation
    if (!emailOrMobile.trim()) {
      newErrors.emailOrMobile = "Please enter your Email or Mobile number";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^\d{10}$/;
      const cleaned = emailOrMobile.trim();
      
      if (!emailRegex.test(cleaned) && !mobileRegex.test(cleaned)) {
        newErrors.emailOrMobile = "Enter a valid email address or 10-digit mobile number";
      }
    }
    
    // Password validation
    if (!password) {
      newErrors.password = "Please enter your Password";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");
    setSuccessMessage("");
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API verification call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // Save mock login state in localStorage
      const userEmail = emailOrMobile.trim();
      const mockUser = {
        email: userEmail,
        name: userEmail.includes("@") ? userEmail.split("@")[0] : `User_${userEmail.slice(-4)}`,
        isLoggedIn: true,
      };
      
      localStorage.setItem("smart_wishlist_user", JSON.stringify(mockUser));
      // Dispatch a custom event to notify Navbar of state changes immediately
      window.dispatchEvent(new Event("auth-state-change"));
      
      setSuccessMessage("Login successful! Redirecting to dashboard...");
      
      // Redirect to home page after brief success message
      setTimeout(() => {
        router.push("/");
      }, 800);
      
    } catch {
      setGeneralError("An error occurred during sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Mock Google Sign-In Handler
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setGeneralError("");
    setSuccessMessage("");
    
    setTimeout(() => {
      const mockUser = {
        email: "google.user@gmail.com",
        name: "Google User",
        isLoggedIn: true,
      };
      
      localStorage.setItem("smart_wishlist_user", JSON.stringify(mockUser));
      window.dispatchEvent(new Event("auth-state-change"));
      
      setSuccessMessage("Signed in with Google! Redirecting...");
      
      setTimeout(() => {
        router.push("/");
        setIsLoading(false);
      }, 800);
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Messages */}
      {generalError && (
        <div className="p-3 bg-red-50 text-xs text-red-600 rounded border border-red-200 animate-fade-in" role="alert">
          {generalError}
        </div>
      )}
      
      {successMessage && (
        <div className="p-3 bg-green-50 text-xs text-green-700 rounded border border-green-200 animate-fade-in" role="alert">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Email/Mobile Input */}
        <InputField
          label="Enter Email/Mobile number"
          name="emailOrMobile"
          value={emailOrMobile}
          onChange={(e) => {
            setEmailOrMobile(e.target.value);
            if (errors.emailOrMobile) {
              setErrors((prev) => ({ ...prev, emailOrMobile: undefined }));
            }
          }}
          error={errors.emailOrMobile}
          disabled={isLoading}
          autoComplete="username"
        />

        {/* Password Input (No Forgot Link to match mockup) */}
        <div className="flex flex-col relative">
          <PasswordField
            label="Enter Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: undefined }));
              }
            }}
            error={errors.password}
            disabled={isLoading}
            autoComplete="current-password"
          />
        </div>

        {/* Terms Disclaimer - Matched precisely to mockup */}
        <p className="text-[12px] text-[#878787] leading-relaxed mt-2 select-none">
          By continuing, you agree to Flipkart's{" "}
          <Link href="/terms" onClick={(e) => e.preventDefault()} className="text-[#2874f0] hover:underline font-medium">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" onClick={(e) => e.preventDefault()} className="text-[#2874f0] hover:underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Primary Submit Button (Flipkart orange style) */}
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full h-12 bg-[#FB641B] hover:bg-[#e05510] active:bg-[#c94b0f] text-white font-bold text-base tracking-wide rounded-sm shadow-xs transition-all duration-150 flex items-center justify-center gap-2",
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
          <span>Login</span>
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 py-2 select-none">
        <span className="h-[1px] bg-gray-200 flex-grow" />
        <span className="text-xs font-semibold text-gray-400 font-sans tracking-wider">OR</span>
        <span className="h-[1px] bg-gray-200 flex-grow" />
      </div>

      {/* Google Login Button */}
      <SocialLoginButton onGoogleSignIn={handleGoogleSignIn} disabled={isLoading} />

      {/* Account Creation Link - Matched to mockup */}
      <div className="text-center mt-6">
        <Link
          href="/signup"
          onClick={(e) => e.preventDefault()} // Prototype placeholder
          className="text-[14px] font-bold text-[#2874f0] hover:underline focus:underline outline-none rounded p-1"
        >
          New to Flipkart? Create an account
        </Link>
      </div>
    </div>
  );
}
