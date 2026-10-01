"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/motion";

const milestones = [
  { title: "Established on permanent, title-deeded land", done: true },
  { title: "Serving learners from Baby Class to Grade 7", done: true },
  { title: "Expansion to Grades 8–12", done: false },
  { title: "New classroom blocks and upgraded facilities", done: false },
  { title: "A school farm for hands-on learning and sustainability", done: false },
  { title: "A boarding house", done: false },
  { title: "International curriculum offerings, including French and other languages", done: false },
  { title: "Teacher and student exchanges with international schools", done: false },
];

function Card({ m, i }: { m: (typeof milestones)[number]; i: number }) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col justify-between border-l p-6 sm:p-8",
        m.done ? "border-gold" : "border-paper/20",
      )}
    >
      <div className="flex items-center justify-between">
        <span className={clsx("label", m.done ? "text-gold" : "text-paper/50")}>{m.done ? "Achieved" : "Ahead"}</span>
        <span className="label text-paper/40">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <p className={clsx("font-serif text-[5.5rem] leading-none tracking-tight sm:text-[7rem]", m.done ? "text-gold" : "text-paper/15")}>
          {String(i + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-6 max-w-xs text-2xl leading-snug text-paper sm:text-[1.75rem]">{m.title}</h3>
      </div>
    </article>
  );
}

/** Pinned section that scrolls the milestones horizontally on larger screens. */
export function GrowthJourney() {
  const target = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const intro = (
    <div className="flex flex-col justify-between gap-10 lg:h-full lg:w-[32rem] lg:shrink-0 lg:pr-12">
      <div>
        <SectionIndex index="04" label="Our growth journey" light />
        <h2 className="display-lg mt-10 text-paper">
          Where we are, and where we’re <em className="text-gold">going.</em>
        </h2>
      </div>
      <p className="max-w-sm text-lg leading-relaxed text-paper/65">
        We are proud of the foundation we’ve built — and excited about everything still to come.
      </p>
    </div>
  );

  return (
    <section className="bg-ink text-paper">
      {/* Large screens: pinned horizontal scroll */}
      <div ref={target} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pb-12 pt-24">
          <motion.div ref={track} style={{ x }} className="flex h-[min(68vh,40rem)] pl-12">
            {intro}
            {milestones.map((m, i) => (
              <div key={m.title} className="h-full w-[24rem] shrink-0">
                <Card m={m} i={i} />
              </div>
            ))}
            <div className="w-12 shrink-0" />
          </motion.div>
          <div className="wrap mt-10">
            <div className="h-px bg-paper/15">
              <motion.div style={{ width: progress }} className="h-px bg-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Small screens: stacked */}
      <div className="wrap py-24 lg:hidden">
        {intro}
        <ol className="mt-14 grid gap-px sm:grid-cols-2">
          {milestones.map((m, i) => (
            <li key={m.title} className="h-72">
              <Reveal className="h-full" y={20}>
                <Card m={m} i={i} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
