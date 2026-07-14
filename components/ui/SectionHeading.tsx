/**
 * components/ui/SectionHeading.tsx
 * ─────────────────────────────────────────────────────────────
 * Consistent section title + optional subtitle used across
 * all Home Page sections.
 * ─────────────────────────────────────────────────────────────
 */

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  action?: React.ReactNode; // e.g. "View All" link
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4",
        align === "center" && "flex-col items-center text-center",
        align === "right" && "flex-row-reverse",
        className
      )}
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#212121] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[#878787]">{subtitle}</p>
        )}
      </div>

      {action && align !== "center" && (
        <div className="flex-shrink-0">{action}</div>
      )}
    </div>
  );
}
