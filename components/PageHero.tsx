"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Dark banner used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="dot-grid pointer-events-none absolute inset-0 text-white/[0.04]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400" />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-[22rem] rounded-full border border-white/5"
      />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 size-[30rem] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-x relative">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-1.5 text-sm text-navy-200"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-gold-300">{crumb}</span>
        </motion.nav>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="eyebrow mt-8 text-gold-400"
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
