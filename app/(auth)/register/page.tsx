import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account – Smart Wishlist",
  description:
    "Create a new Smart Wishlist account to track prices, manage your wishlist, and receive live stock alerts.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Looks like you're new here! Sign up to manage your wishlist, track orders, and enjoy a personalized experience."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
