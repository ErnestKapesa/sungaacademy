"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Baby, BookOpenText, GraduationCap, Check, Hourglass } from "lucide-react";
import clsx from "clsx";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const programs = [
  {
    id: "early",
    icon: Baby,
    label: "Early Years",
    levels: "Baby Class · Middle Class · Reception",
    status: "Enrolling now",
    title: "A joyful, play-based foundation",
    body: "Our early years program builds a strong foundation through play-based learning, early literacy and numeracy, and social development — preparing young learners for the more structured environment of primary school.",
    points: ["Play-based learning", "Early literacy & numeracy", "Social & emotional development", "School readiness"],
    media: "Early years learners playing and learning",
  },
  {
    id: "primary",
    icon: BookOpenText,
    label: "Primary School",
    levels: "Grades 1 – 7",
    status: "Enrolling now",
    title: "Building skills year on year",
    body: "Our primary curriculum follows the national curriculum framework. Each grade builds progressively on foundational skills, with continuous assessment to track each learner's progress.",
    points: ["National curriculum framework", "Continuous assessment", "Progressive skill building", "Character & discipline"],
    media: "Primary pupils in a lesson",
  },
  {
    id: "secondary",
    icon: GraduationCap,
    label: "Secondary School",
    levels: "Grades 8 – 12",
    status: "Coming soon",
    title: "Expanding through to Grade 12",
    body: "We are expanding to offer secondary education through Grade 12, so our learners can complete their schooling with us.",
    points: [
      "Register with the Examinations Council of Zambia (ECZ) [confirm exact process/board]",
      "Explore additional international exam board options",
      "Introduce specialized subject streams as the program grows",
    ],
    media: "Architectural rendering of planned secondary block",
  },
];

export function ProgramTabs() {
  const [active, setActive] = useState(programs[0].id);
  const program = programs.find((p) => p.id === active)!;
  const soon = program.status === "Coming soon";

  return (
    <div>
      <div role="tablist" aria-label="Academic programs" className="flex flex-col gap-2 rounded-3xl bg-white p-2 shadow-sm sm:flex-row">
        {programs.map((p) => {
          const Icon = p.icon;
          const selected = p.id === active;
          return (
            <button
              key={p.id}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={selected}
              aria-controls={`panel-${p.id}`}
              onClick={() => setActive(p.id)}
              className={clsx(
                "relative flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors",
                selected ? "text-white" : "text-navy-800 hover:bg-navy-50",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="program-tab"
                  className="absolute inset-0 rounded-2xl bg-navy-900"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className={clsx("relative size-6 shrink-0", selected ? "text-gold-400" : "text-gold-600")} />
              <span className="relative">
                <span className="block font-semibold">{p.label}</span>
                <span className={clsx("block text-xs", selected ? "text-navy-200" : "text-navy-500")}>{p.levels}</span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={program.id}
          id={`panel-${program.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${program.id}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid items-center gap-10 rounded-[2rem] bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10 lg:grid-cols-2"
        >
          <div>
            <span
              className={clsx(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
                soon ? "bg-navy-900/5 text-navy-600" : "bg-gold-400/15 text-gold-700",
              )}
            >
              {soon ? <Hourglass className="size-3.5" /> : <span className="size-2 rounded-full bg-gold-500" />}
              {program.status}
            </span>
            <h3 className="mt-5 text-3xl font-semibold text-navy-900 sm:text-4xl">{program.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-700/85">{program.body}</p>
            <ul className="mt-7 space-y-3">
              {program.points.map((pt, i) => (
                <motion.li
                  key={pt}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="flex gap-3 text-navy-800"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {pt}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3]">
            <MediaPlaceholder label={program.media} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
