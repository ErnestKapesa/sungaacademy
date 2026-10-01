import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={clsx(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p className={clsx("eyebrow", light && "text-gold-400", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <div className={clsx("mt-5 text-lg leading-relaxed", light ? "text-navy-100" : "text-navy-700/80")}>{intro}</div>
      )}
    </Reveal>
  );
}
