"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { easeOut } from "./motion";

type Tone = "clay" | "sand" | "sage" | "dusk" | "paper";

const tones: Record<Tone, string> = {
  clay: "bg-clay text-ink/70",
  sand: "bg-sand text-ink/60",
  sage: "bg-sage text-ink/70",
  dusk: "bg-dusk text-paper/70",
  paper: "bg-paper-3 text-ink/60",
};

/**
 * Image or film frame with a curtain reveal and soft parallax.
 *
 * While `src` is empty it renders a quiet, captioned placeholder in a muted
 * tone. To use a real photo, drop the file in /public/images and pass
 * src="/images/your-photo.jpg" — the frame's size and animation stay the same.
 */
export function Media({
  src,
  alt = "",
  label,
  kind = "photo",
  tone = "clay",
  className,
  parallax = true,
  reveal = true,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src?: string;
  alt?: string;
  label: string;
  kind?: "photo" | "film";
  tone?: Tone;
  className?: string;
  parallax?: boolean;
  reveal?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-7%", "7%"] : ["0%", "0%"]);

  return (
    <motion.div
      ref={ref}
      className={clsx("relative overflow-hidden", className)}
      initial={reveal ? { clipPath: "inset(100% 0% 0% 0%)" } : false}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.4, ease: easeOut }}
    >
      <motion.div
        className="absolute inset-[-8%_0]"
        style={{ y }}
        initial={reveal ? { scale: 1.18 } : false}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 1.8, ease: easeOut }}
      >
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        ) : (
          <div role="img" aria-label={`Placeholder for ${kind}: ${label}`} className={clsx("absolute inset-0", tones[tone])} />
        )}
      </motion.div>

      {!src && (
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 flex items-end justify-between gap-4 p-4 sm:p-5",
            tone === "dusk" ? "text-paper/75" : "text-ink/65",
          )}
        >
          <span className="label max-w-[80%] leading-relaxed">
            {kind === "film" ? "Film" : "Photo"} — {label}
          </span>
          <span className="label hidden sm:block">Placeholder</span>
        </div>
      )}

      {kind === "film" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={clsx(
              "flex size-20 items-center justify-center rounded-full backdrop-blur-sm transition-transform duration-700 ease-out-expo hover:scale-110 sm:size-28",
              tone === "dusk" ? "bg-paper/10 text-paper ring-1 ring-paper/30" : "bg-paper/40 text-ink ring-1 ring-ink/20",
            )}
          >
            <span className="label">Play</span>
          </span>
        </div>
      )}
    </motion.div>
  );
}
