import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "ink" | "gold" | "line" | "line-light" | "paper";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-paper",
  gold: "bg-gold text-ink",
  paper: "bg-paper text-ink",
  line: "text-ink ring-1 ring-inset ring-ink/25 hover:ring-ink",
  "line-light": "text-paper ring-1 ring-inset ring-paper/30 hover:ring-paper",
};

/** Pill button whose label rolls upward on hover. */
export function RollButton({
  href,
  children,
  variant = "ink",
  className,
}: {
  href: string;
  children: string;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 text-[0.95rem] font-medium transition-[box-shadow] duration-300",
        variants[variant],
        className,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span
        aria-hidden
        className={clsx(
          "flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-out-expo group-hover:rotate-[-45deg]",
          variant === "ink" ? "bg-paper/12 text-paper" : variant === "line-light" ? "bg-paper/10" : "bg-ink/8",
        )}
      >
        <Arrow />
      </span>
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className={clsx("size-4", className)} aria-hidden>
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

/** Underlined text link with a sliding underline. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 font-medium",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right bg-current transition-transform duration-500 ease-out-expo group-hover:scale-x-0" />
      </span>
      <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}
