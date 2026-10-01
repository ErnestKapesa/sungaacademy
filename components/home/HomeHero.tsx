"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const ease = [0.22, 1, 0.36, 1] as const;
const headline = ["Building", "Bright", "Futures,", "One", "Learner", "at", "a", "Time"];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy-900 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.05]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[36rem] rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-[28rem] rounded-full bg-navy-400/30 blur-3xl" />

      <div className="container-x relative grid min-h-[100svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-36">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-200 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-gold-400" />
            </span>
            Enrollment open · Baby Class to Grade 7
          </motion.p>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
            {headline.map((word, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={
                    word === "Bright" || word === "Futures,"
                      ? "inline-block italic text-gold-400"
                      : "inline-block"
                  }
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.07 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100 sm:text-xl"
          >
            Sunga Academy is a nurturing school offering quality education from Baby Class through Grade 7, on our own
            permanent campus — with plans to grow through to Grade 12.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.95 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact#enroll" arrow>
              Enroll Now
            </Button>
            <Button href="/contact" variant="outline-light">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-200"
          >
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-400" /> Permanent, title-deeded campus
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="size-4 text-gold-400" /> Growing to Grade 12
            </span>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-6 xl:col-span-6">
          <motion.div
            style={{ y: mediaY }}
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="relative mx-auto aspect-[4/5] max-w-md sm:max-w-lg lg:ml-auto lg:mr-0"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10" />
            <MediaPlaceholder
              type="video"
              tone="dark"
              label="Hero video or photo: happy learners on campus (recommended 1200×1500)"
              className="rounded-[2rem] shadow-2xl shadow-black/40"
            />

            {/* Floating seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.9 }}
              className="absolute -left-6 -top-6 sm:-left-10 sm:-top-10"
            >
              <div className="relative size-28 animate-float sm:size-36">
                <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow text-gold-300">
                  <defs>
                    <path id="ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
                  </defs>
                  <text className="fill-current text-[15px] font-semibold uppercase tracking-[0.3em]">
                    <textPath href="#ring">Excellence · Integrity · Care · Community ·</textPath>
                  </text>
                </svg>
                <div className="absolute inset-[18%] overflow-hidden rounded-full bg-white shadow-xl">
                  <Image src="/images/logo-seal.png" alt="Sunga Academy seal" fill sizes="144px" className="object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Floating fee card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.1 }}
              className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-4 text-navy-900 shadow-2xl sm:-right-8 sm:p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">Tuition</p>
              <p className="mt-1 font-display text-3xl font-semibold">
                K800<span className="text-base font-normal text-navy-500"> / term</span>
              </p>
              <p className="mt-1 text-xs text-navy-600">3 terms per year</p>
            </motion.div>

            {/* Floating rating chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.25 }}
              className="absolute -left-4 bottom-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 backdrop-blur-md sm:flex"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                <Star className="size-4 fill-current" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">Whole-child</span>
                <span className="text-navy-200">development</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-2">
          <motion.span
            className="block h-2 w-1 rounded-full bg-gold-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
