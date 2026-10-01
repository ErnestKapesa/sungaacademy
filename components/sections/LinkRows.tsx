import Link from "next/link";
import clsx from "clsx";
import { Arrow } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/motion";

type Row = { href: string; title: string; note?: string };

/** Large, full-width link rows that fill with ink on hover. */
export function LinkRows({ rows, light = false }: { rows: Row[]; light?: boolean }) {
  return (
    <ul className={clsx("border-t", light ? "border-paper/20" : "border-line")}>
      {rows.map((row, i) => (
        <li key={row.href + row.title} className={clsx("border-b", light ? "border-paper/20" : "border-line")}>
          <Reveal delay={i * 0.08} y={16}>
            <Link
              href={row.href}
              className={clsx(
                "group relative flex items-center justify-between gap-6 overflow-hidden px-1 py-6 sm:py-8",
                light ? "text-paper" : "text-ink",
              )}
            >
              <span
                aria-hidden
                className={clsx(
                  "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-out-expo group-hover:scale-y-100",
                  light ? "bg-paper" : "bg-ink",
                )}
              />
              <span
                className={clsx(
                  "relative flex items-baseline gap-5 transition-[color,transform] duration-700 ease-out-expo group-hover:translate-x-4",
                  light ? "group-hover:text-ink" : "group-hover:text-paper",
                )}
              >
                <span className="label w-8 opacity-50">0{i + 1}</span>
                <span className="font-serif text-[clamp(1.9rem,4.6vw,4.25rem)] leading-none tracking-tight">{row.title}</span>
              </span>
              <span
                className={clsx(
                  "relative flex items-center gap-6 transition-[color,transform] duration-700 ease-out-expo group-hover:-translate-x-4",
                  light ? "group-hover:text-ink" : "group-hover:text-paper",
                )}
              >
                {row.note && <span className="hidden max-w-[16rem] text-right text-sm opacity-70 md:block">{row.note}</span>}
                <span className="flex size-12 items-center justify-center rounded-full ring-1 ring-current/30 transition-transform duration-700 ease-out-expo group-hover:-rotate-45 sm:size-14">
                  <Arrow className="size-5" />
                </span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
