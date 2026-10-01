"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        open
          ? "bg-white py-2"
          : solid
            ? "bg-white/85 py-2 shadow-[0_8px_30px_rgb(11,35,68,0.08)] backdrop-blur-xl"
            : "bg-transparent py-4",
      )}
    >
      <nav className="container-x flex items-center justify-between gap-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label="Sunga Academy home">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative block size-11 shrink-0 sm:size-12"
          >
            <Image src="/images/logo-seal.png" alt="" fill sizes="48px" priority className="object-contain" />
          </motion.span>
          <span className="leading-tight">
            <span
              className={clsx(
                "block font-display text-lg font-semibold transition-colors sm:text-xl",
                solid ? "text-navy-900" : "text-white",
              )}
            >
              Sunga Academy
            </span>
            <span
              className={clsx(
                "block text-[10px] font-medium uppercase tracking-[0.22em] transition-colors",
                solid ? "text-gold-600" : "text-gold-300",
              )}
            >
              Baby Class – Grade 7
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    solid
                      ? active
                        ? "text-navy-900"
                        : "text-navy-700/70 hover:text-navy-900"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={clsx("absolute inset-0 -z-10 rounded-full", solid ? "bg-navy-50" : "bg-white/10")}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact#enroll"
            className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-300 sm:inline-flex"
          >
            Enroll Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={clsx(
              "inline-flex size-11 items-center justify-center rounded-full transition lg:hidden",
              solid ? "bg-navy-900 text-white" : "bg-white/10 text-white backdrop-blur",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-32 pt-6">
              {navLinks.map((link, i) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "flex items-center justify-between border-b border-navy-900/10 py-4 font-display text-3xl",
                        active ? "text-gold-600" : "text-navy-900",
                      )}
                    >
                      {link.label}
                      <ArrowRight className="size-5 opacity-40" />
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link
                  href="/contact#enroll"
                  className="rounded-full bg-gold-400 px-6 py-4 text-center font-semibold text-navy-950"
                >
                  Enroll Your Child
                </Link>
                <p className="mt-4 flex items-center gap-2 text-sm text-navy-700">
                  <Phone className="size-4 text-gold-600" /> {site.phone}
                </p>
                <p className="flex items-center gap-2 text-sm text-navy-700">
                  <Mail className="size-4 text-gold-600" /> {site.email}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
