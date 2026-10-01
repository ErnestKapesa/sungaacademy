"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { navLinks, site } from "@/lib/site";
import { RollButton } from "@/components/ui/Buttons";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
  const wordY = useTransform(scrollYProgress, [0.3, 1], ["40%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-deep text-paper">
      <motion.div style={{ y }} className="wrap pt-24 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="display-md max-w-3xl lg:col-span-8">
            Building bright futures, <span className="italic text-gold">one learner</span> at a time.
          </p>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <RollButton href="/contact#enroll" variant="paper">
              Start an enquiry
            </RollButton>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label text-paper/45">Visit</p>
            <p className="mt-4 leading-relaxed text-paper/85">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.country}
            </p>
            <a
              href={site.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-gold underline-offset-4 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <p className="label text-paper/45">Contact</p>
            <ul className="mt-4 space-y-1 text-paper/85">
              <li>{site.phone}</li>
              <li className="break-all">{site.email}</li>
              <li className="pt-2 text-sm text-paper/55">{site.officeHours}</li>
            </ul>
          </div>
          <div>
            <p className="label text-paper/45">Explore</p>
            <ul className="mt-4 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/85 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-paper/45">Follow</p>
            <ul className="mt-4 space-y-1">
              {[
                ["Facebook", site.social.facebook],
                ["Instagram", site.social.instagram],
                ["YouTube", site.social.youtube],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-paper/85 transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden pb-[2.2vw]">
          <motion.p
            style={{ y: wordY }}
            aria-hidden
            className="whitespace-nowrap font-serif leading-[0.8] tracking-[-0.05em] text-paper"
          >
            <span className="block text-[13.4vw] 2xl:text-[12.4rem]">
              Sunga <span className="italic text-gold">Academy</span>
            </span>
          </motion.p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/15 py-6 text-sm text-paper/50 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="relative block size-7">
              <Image src="/images/logo-seal.png" alt="" fill sizes="28px" className="object-contain" />
            </span>
            © {new Date().getFullYear()} Sunga Academy
          </div>
          <p>Baby Class – Grade 7 · Growing to Grade 12</p>
        </div>
      </motion.div>
    </footer>
  );
}
