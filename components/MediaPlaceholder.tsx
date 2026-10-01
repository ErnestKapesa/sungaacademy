import { ImageIcon, Play } from "lucide-react";
import clsx from "clsx";

/**
 * Stand-in for a photo or video. Swap for <Image src="/images/..." /> (or a
 * <video>/YouTube embed) once real media is available.
 */
export function MediaPlaceholder({
  label,
  type = "image",
  className,
  tone = "light",
}: {
  label: string;
  type?: "image" | "video";
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={clsx(
        "group relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl",
        dark
          ? "bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 text-white/70"
          : "bg-gradient-to-br from-navy-50 via-white to-gold-50 text-navy-700/70",
        className,
      )}
    >
      <div className={clsx("dot-grid absolute inset-0", dark ? "text-white/10" : "text-navy-900/10")} />
      <div
        className={clsx(
          "absolute inset-3 rounded-[1.25rem] border-2 border-dashed",
          dark ? "border-white/15" : "border-navy-900/15",
        )}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span
          className={clsx(
            "flex size-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110",
            type === "video" ? "bg-gold-400 text-navy-950 shadow-xl shadow-gold-500/30" : dark ? "bg-white/10" : "bg-navy-900/5",
          )}
        >
          {type === "video" ? <Play className="ml-0.5 size-6 fill-current" /> : <ImageIcon className="size-6" />}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
          {type === "video" ? "Video placeholder" : "Photo placeholder"}
        </span>
        <span className="max-w-xs text-sm opacity-80">{label}</span>
      </div>
    </div>
  );
}
