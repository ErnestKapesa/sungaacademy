"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { Reveal } from "@/components/ui/motion";

type Tone = "clay" | "sand" | "sage" | "dusk";
type Project = { title: string; text: string; tone: Tone };

const toneBg: Record<Tone, string> = { clay: "bg-clay", sand: "bg-sand", sage: "bg-sage", dusk: "bg-dusk" };

/** Project rows with an image preview that trails the cursor on desktop. */
export function ProjectList({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 25, mass: 0.6 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <div className="relative" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 hidden -ml-[5.5rem] -mt-[7rem] h-56 w-44 overflow-hidden lg:block"
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35 }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={hovered}
                className={`absolute inset-0 ${toneBg[projects[hovered].tone]}`}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="label absolute bottom-3 left-3 right-3 text-ink/60">Photo — {projects[hovered].title}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="border-t border-paper/20">
      {projects.map((p, i) => (
        <li key={p.title} className="border-b border-paper/20" onMouseEnter={() => setHovered(i)}>
          <Reveal y={14} delay={i * 0.04} className="group grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:py-9">
            <span className="label text-paper/45 sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-serif text-[clamp(2rem,4.4vw,4rem)] leading-none tracking-tight transition-[transform,color] duration-700 ease-out-expo group-hover:translate-x-3 group-hover:italic group-hover:text-gold sm:col-span-6">
              {p.title}
            </h3>
            <p className="text-lg leading-relaxed text-paper/70 sm:col-span-3">{p.text}</p>
            <p className="label text-paper/45 sm:col-span-2 sm:text-right">Goal: [amount]</p>
          </Reveal>
        </li>
      ))}
      </ul>
    </div>
  );
}
