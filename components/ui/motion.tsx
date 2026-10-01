"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Fragment, useRef, type ReactNode } from "react";
import clsx from "clsx";

export const easeOut = [0.16, 1, 0.3, 1] as const;

/** Gentle fade-and-rise when the element enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Splits text into words that slide up from behind a mask.
 * Wrap a word in *asterisks* to set it in italic.
 * Use "\n" to force a line break.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  onMount = false,
  as = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const Tag = motion[as];
  const lines = text.split("\n");
  let index = 0;
  let inItalic = false;
  const trigger = onMount
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-8% 0px" } };

  return (
    <Tag className={className} aria-label={text.replace(/\*/g, "").replace(/\n/g, " ")} {...trigger}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {line.split(" ").filter(Boolean).map((raw) => {
            // *phrases* may span several words
            const opens = raw.startsWith("*");
            const closes = raw.slice(opens ? 1 : 0).includes("*");
            const italic = inItalic || opens;
            inItalic = closes ? false : inItalic || opens;
            const word = raw.replace(/\*/g, "");
            const i = index++;
            return (
              <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
                <motion.span
                  className={clsx("inline-block", italic && "italic")}
                  variants={{
                    hidden: { y: "105%" },
                    show: { y: 0, transition: { duration: 1.1, ease: easeOut, delay: delay + i * stagger } },
                  }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Paragraph whose words brighten one by one as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

/** Thin rule that draws itself from left to right. */
export function Rule({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className={clsx("h-px origin-left bg-line", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: easeOut, delay }}
    />
  );
}
