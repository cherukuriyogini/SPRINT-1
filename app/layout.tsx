/**
 * app/layout.tsx
 * ─────────────────────────────────────────────────────────────
 * Root layout for the application.
 * ─────────────────────────────────────────────────────────────
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-[#f1f3f6] text-[#212121] min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
