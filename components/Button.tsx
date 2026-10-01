import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "gold" | "navy" | "outline" | "outline-light" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-lg shadow-gold-500/20",
  navy: "bg-navy-900 text-white hover:bg-navy-700 shadow-lg shadow-navy-900/20",
  outline: "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
  "outline-light": "border border-white/30 text-white hover:bg-white hover:text-navy-900",
  ghost: "text-navy-900 hover:text-gold-600",
};

export function Button({
  href,
  children,
  variant = "gold",
  arrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
