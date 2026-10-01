"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/ui/Media";
import { SectionIndex } from "@/components/ui/Section";
import { SplitText, easeOut } from "@/components/ui/motion";

const reasons = [
  {
    title: "A permanent home for learning",
    text: "Our school sits on secured, title-deeded land, giving families confidence in our long-term stability and growth plans.",
    media: "The campus grounds",
    tone: "clay" as const,
  },
  {
    title: "Whole-child development",
    text: "We focus on academics alongside character, discipline, and life skills.",
    media: "Learners working together",
    tone: "sage" as const,
  },
  {
    title: "A growing vision",
    text: "We are actively expanding: new classrooms, a school farm, boarding facilities, and an extended curriculum through Grade 12.",
    media: "Construction of new classrooms",
    tone: "sand" as const,
  },
  {
    title: "Community-centred",
    text: "Sunga Academy is deeply rooted in and committed to serving our local community.",
    media: "Families at a school event",
    tone: "dusk" as const,
  },
];

function Item({ index, onActive }: { index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  const r = reasons[index];
  return (
    <li ref={ref} className="border-t border-line py-10 lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center lg:py-0">
      <div className="lg:hidden">
        <Media label={r.media} tone={r.tone} className="mb-8 aspect-[4/3]" />
      </div>
      <p className="label text-ink-mute">0{index + 1} / 0{reasons.length}</p>
      <h3 className="display-md mt-5 max-w-xl">{r.title}</h3>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{r.text}</p>
    </li>
  );
}

/** Sticky image on the left swaps as each reason scrolls past on the right. */
export function WhyChoose() {
  const [active, setActive] = useState(0);
  const r = reasons[active];

  return (
    <section className="wrap py-24 sm:py-36">
      <SectionIndex index="03" label="Why choose Sunga Academy" />
      <SplitText as="h2" className="display-lg mt-10 max-w-5xl" text="Rooted in stability. *Growing* with purpose." />

      <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12">
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-[12vh] h-[76vh]">
            <div className="relative h-full overflow-hidden rounded-[4px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1.1, ease: easeOut }}
                >
                  <Media label={r.media} tone={r.tone} reveal={false} parallax={false} className="h-full" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <ol className="lg:col-span-5 lg:col-start-8">
          {reasons.map((_, i) => (
            <Item key={i} index={i} onActive={setActive} />
          ))}
        </ol>
      </div>
    </section>
  );
}
