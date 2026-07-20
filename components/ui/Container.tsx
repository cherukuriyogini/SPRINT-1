/**
 * components/ui/Container.tsx
 * ─────────────────────────────────────────────────────────────
 * Max-width wrapper for consistent page layout.
 * All page sections should be wrapped in <Container>.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Use "full" for edge-to-edge content (e.g. banners) */
  size?: "default" | "narrow" | "wide" | "full";
  as?: React.ElementType;
}

const sizeMap = {
  default: "max-w-[1280px]",
  narrow:  "max-w-[1120px]",
  wide:    "max-w-screen-2xl",
  full:    "max-w-none",
};

export default function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
