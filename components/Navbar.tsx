"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { navLinks, site } from "@/lib/site";
import { easeOut } from "@/components/ui/motion";
import { RollButton } from "@/components/ui/Buttons";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide while scrolling down, reveal on the way back up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled && !open ? "bg-paper/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav className="wrap flex h-[4.5rem] items-center justify-between gap-6 sm:h-20" aria-label="Main">
          <Link
            href="/"
            className={clsx("relative z-10 flex items-center gap-3 transition-colors", open ? "text-paper" : "text-ink")}
            aria-label="Sunga Academy — home"
          >
            <span className="relative block size-10 shrink-0">
              <Image src="/images/logo-seal.png" alt="" fill sizes="40px" priority className="object-contain" />
            </span>
            <span className="whitespace-nowrap font-serif text-[1.35rem] leading-none tracking-tight">Sunga Academy</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative block overflow-hidden text-[0.95rem]">
                  <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 translate-y-full italic transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
                  >
                    {link.label}
                  </span>
                  {isActive(link.href) && (
                    <motion.span layoutId="nav-dot" className="absolute -bottom-0 left-0 h-px w-full bg-ink" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <span className="hidden sm:block">
              <RollButton href="/contact#enroll">Enroll now</RollButton>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={clsx(
                "label flex h-12 items-center gap-3 rounded-full px-5 ring-1 ring-inset transition-colors lg:hidden",
                open ? "text-paper ring-paper/30" : "text-ink ring-ink/25",
              )}
            >
              <span className="relative block h-2.5 w-5">
                <span
                  className={clsx(
                    "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo",
                    open && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={clsx(
                    "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo",
                    open && "-translate-y-[4px] -rotate-45",
                  )}
                />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink text-paper lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: easeOut }}
            data-lenis-prevent
          >
            <div className="wrap flex flex-1 flex-col justify-between pb-10 pt-28">
              <ul>
                {navLinks.map((link, i) => (
                  <li key={link.href} className="overflow-hidden border-b border-paper/15">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, ease: easeOut, delay: 0.15 + i * 0.05 }}
                    >
                      <Link href={link.href} className="flex items-baseline gap-4 py-3">
                        <span className="label w-6 text-paper/45">0{i + 1}</span>
                        <span className={clsx("font-serif text-[2.6rem] leading-tight", isActive(link.href) && "italic text-gold")}>
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 space-y-6"
              >
                <RollButton href="/contact#enroll" variant="gold">
                  Enroll your child
                </RollButton>
                <div className="space-y-1 text-sm text-paper/60">
                  <p>{site.phone}</p>
                  <p>{site.email}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
