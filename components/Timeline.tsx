"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Check, Hourglass } from "lucide-react";
import clsx from "clsx";

export type Milestone = { title: string; text?: string; done: boolean };

/** Vertical timeline whose connecting line draws itself as you scroll. */
export function Timeline({ items, light = false }: { items: Milestone[]; light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <div className={clsx("absolute bottom-2 left-5 top-2 w-px sm:left-1/2", light ? "bg-white/15" : "bg-navy-900/10")} />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-gold-400 via-gold-400 to-gold-500 sm:left-1/2"
      />
      <ol className="relative">
      {items.map((m, i) => {
        const right = i % 2 === 1;
        return (
          <li key={m.title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-10 last:pb-0 sm:grid-cols-[1fr_3rem_1fr] sm:gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={clsx(
                "relative z-10 col-start-1 row-start-1 flex size-10 items-center justify-center rounded-full ring-8 sm:col-start-2 sm:mx-auto",
                light ? "ring-navy-900" : "ring-white",
                m.done ? "bg-gold-400 text-navy-950" : light ? "bg-navy-700 text-gold-300" : "bg-white text-navy-700 shadow-md",
              )}
            >
              {m.done ? <Check className="size-5" strokeWidth={3} /> : <Hourglass className="size-4" />}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: right ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={clsx(
                "col-start-2 row-start-1 pt-1",
                right ? "sm:col-start-3" : "sm:col-start-1 sm:text-right",
              )}
            >
              <span
                className={clsx(
                  "inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                  m.done
                    ? "bg-gold-400/15 text-gold-600"
                    : light
                      ? "bg-white/10 text-navy-100"
                      : "bg-navy-900/5 text-navy-600",
                )}
              >
                {m.done ? "Achieved" : "Coming soon"}
              </span>
              <h3 className={clsx("mt-3 text-xl font-semibold sm:text-2xl", light ? "text-white" : "text-navy-900")}>
                {m.title}
              </h3>
              {m.text && <p className={clsx("mt-2 leading-relaxed", light ? "text-navy-200" : "text-navy-700/80")}>{m.text}</p>}
            </motion.div>
          </li>
        );
      })}
      </ol>
    </div>
  );
}
