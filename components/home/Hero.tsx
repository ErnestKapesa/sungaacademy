"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeOut } from "@/components/ui/motion";
import { RollButton } from "@/components/ui/Buttons";
import { Media } from "@/components/ui/Media";

const DELAY = 0.75; // let the page curtain lift first

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="flex flex-wrap items-center gap-x-[0.22em]"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.3, ease: easeOut, delay: DELAY + i * 0.1 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const filmRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: filmRef, offset: ["start end", "start 15%"] });
  const inset = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const clipPath = useTransform([inset, radius], ([i, r]: number[]) => `inset(0% ${i}% 0% ${i}% round ${r}px)`);

  return (
    <section className="relative">
      <div className="wrap pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: DELAY }}
          className="label flex justify-between gap-6 border-b border-line pb-4 text-ink-mute"
        >
          <span>Sunga Academy — Zambia</span>
          <span className="hidden sm:inline">Enrolling Baby Class to Grade 7</span>
        </motion.div>

        <h1 className="display-xl mt-8 sm:mt-12" aria-label="Building bright futures, one learner at a time">
          <Line i={0}>
            Building <em>bright</em>
          </Line>
          <Line i={1}>
            futures,
            <motion.span
              aria-hidden
              className="inline-block h-[0.72em] overflow-hidden rounded-full align-middle"
              initial={{ width: 0 }}
              animate={{ width: "1.9em" }}
              transition={{ duration: 1.3, ease: easeOut, delay: DELAY + 0.5 }}
            >
              <span className="block h-full w-[1.9em] bg-[linear-gradient(120deg,var(--color-clay),var(--color-sand)_55%,var(--color-gold)_140%)]" />
            </motion.span>
            one
          </Line>
          <Line i={2}>
            learner at a <em className="text-gold-deep">time.</em>
          </Line>
        </h1>

        <div className="mt-12 grid gap-8 pb-16 sm:mt-16 sm:pb-20 lg:grid-cols-12 lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: DELAY + 0.45 }}
            className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-1"
          >
            Sunga Academy is a nurturing school offering quality education from Baby Class through Grade 7, on our own
            permanent campus — with plans to grow through to Grade 12.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: DELAY + 0.55 }}
            className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end"
          >
            <RollButton href="/contact#enroll">Enroll now</RollButton>
            <RollButton href="/contact" variant="line">
              Contact us
            </RollButton>
          </motion.div>
        </div>
      </div>

      <motion.div ref={filmRef} style={{ clipPath }} className="relative h-[70svh] min-h-[26rem] sm:h-[88svh]">
        <Media
          kind="film"
          tone="dusk"
          reveal={false}
          label="Hero film — morning at Sunga Academy (16:9, muted loop)"
          className="h-full"
          priority
        />
      </motion.div>
    </section>
  );
}
