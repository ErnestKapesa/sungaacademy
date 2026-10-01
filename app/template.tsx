"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/components/ui/motion";

/**
 * Re-mounts on every navigation: a navy curtain carrying the school seal
 * lifts away to reveal the new page.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="curtain pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-ink motion-reduce:hidden"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 1, ease: easeOut, delay: 0.35 }}
      >
        <motion.span
          className="relative block size-20"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Image src="/images/logo-seal.png" alt="" fill sizes="80px" priority className="object-contain" />
        </motion.span>
      </motion.div>
      {children}
    </>
  );
}
