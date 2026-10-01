import clsx from "clsx";
import type { ReactNode } from "react";
import { Rule } from "./motion";

/**
 * Section opener: a hairline rule with a numbered index on the left and a
 * label on the right — the editorial scaffolding used across every page.
 */
export function SectionIndex({
  index,
  label,
  light = false,
  className,
  aside,
}: {
  index: string;
  label: string;
  light?: boolean;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={clsx(className)}>
      <Rule className={light ? "bg-paper/20" : undefined} />
      <div className={clsx("label mt-4 flex justify-between gap-6", light ? "text-paper/60" : "text-ink-mute")}>
        <span>
          ({index}) &nbsp;{label}
        </span>
        {aside}
      </div>
    </div>
  );
}
