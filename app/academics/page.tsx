import type { Metadata } from "next";
import clsx from "clsx";
import { PageHeader } from "@/components/sections/PageHeader";
import { LinkRows } from "@/components/sections/LinkRows";
import { Media } from "@/components/ui/Media";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal, SplitText } from "@/components/ui/motion";
import { RollButton } from "@/components/ui/Buttons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programmes at Sunga Academy: Early Years, Primary (Grades 1–7), and our planned Secondary School (Grades 8–12). Terms, calendar and fees.",
};

const programmes = [
  {
    name: "Early Years",
    levels: "Baby Class · Middle Class · Reception",
    status: "Enrolling now",
    body: "Our early years programme builds a strong foundation through play-based learning, early literacy and numeracy, and social development — preparing young learners for the more structured environment of primary school.",
    points: ["Play-based learning", "Early literacy and numeracy", "Social and emotional development", "Readiness for primary school"],
    media: "Early years learners at play",
    tone: "sand" as const,
    theme: "bg-paper",
  },
  {
    name: "Primary School",
    levels: "Grades 1 – 7",
    status: "Enrolling now",
    body: "Our primary curriculum follows the national curriculum framework. Each grade builds progressively on foundational skills, with continuous assessment to track each learner’s progress.",
    points: ["National curriculum framework", "Continuous assessment", "Progressive skill building", "Character and discipline"],
    media: "Primary pupils during a lesson",
    tone: "clay" as const,
    theme: "bg-paper-2",
  },
  {
    name: "Secondary School",
    levels: "Grades 8 – 12",
    status: "Coming soon",
    body: "We are expanding to offer secondary education through Grade 12, so that our learners can complete their schooling with us.",
    points: [
      "Registration with the Examinations Council of Zambia (ECZ) [confirm exact process/board]",
      "Exploring additional international exam board options",
      "Specialised subject streams as the programme grows",
    ],
    media: "Rendering of the planned secondary block",
    tone: "dusk" as const,
    theme: "bg-ink text-paper",
  },
];

// [Add or adjust subjects to match the current curriculum]
const subjects = [
  "English & Literacy",
  "Mathematics",
  "Science & Technology",
  "Social Studies",
  "Creative & Performing Arts",
  "Physical Education",
  "Religious Education",
];

const enrichment = [
  { title: "French & other languages", text: "Introducing French and other foreign languages to broaden our learners’ horizons." },
  { title: "Practical learning", text: "Hands-on, vocational learning through our planned school farm." },
  { title: "International exchange", text: "Exchange opportunities for teachers and students, in partnership with schools abroad." },
];

const terms = [
  { name: "Term One", dates: "[Start date] – [End date]" },
  { name: "Term Two", dates: "[Start date] – [End date]" },
  { name: "Term Three", dates: "[Start date] – [End date]" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        crumb="Academics"
        aside="Programmes · Calendar · Fees"
        title="Learning that grows *with* every child."
        intro="Current grade levels: Baby Class to Grade 7 — with secondary education through Grade 12 on the way."
      />

      {/* 01 — Programmes, stacked as you scroll */}
      <section aria-labelledby="programmes">
        <div className="wrap">
          <SectionIndex index="01" label="Academic programmes" />
          <h2 id="programmes" className="sr-only">
            Academic programmes
          </h2>
        </div>
        {programmes.map((p, i) => {
          const dark = p.theme.includes("bg-ink");
          return (
            <article key={p.name} className={clsx("lg:sticky lg:top-0 lg:min-h-screen", p.theme)}>
              <div className="wrap grid gap-10 py-16 lg:min-h-screen lg:grid-cols-12 lg:items-center lg:py-24">
                <div className="lg:col-span-6">
                  <div className={clsx("label flex gap-6", dark ? "text-paper/55" : "text-ink-mute")}>
                    <span>0{i + 1} / 03</span>
                    <span className={clsx(p.status === "Coming soon" ? "text-gold" : dark ? "text-paper" : "text-ink")}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="display-lg mt-6">{p.name}</h3>
                  <p className={clsx("mt-3 font-serif text-2xl italic", dark ? "text-paper/70" : "text-ink-soft")}>
                    {p.levels}
                  </p>
                  <p className={clsx("mt-8 max-w-lg text-lg leading-relaxed", dark ? "text-paper/75" : "text-ink-soft")}>
                    {p.body}
                  </p>
                  <ul className={clsx("mt-8 max-w-lg border-t", dark ? "border-paper/15" : "border-line")}>
                    {p.points.map((pt) => (
                      <li key={pt} className={clsx("border-b py-3", dark ? "border-paper/15" : "border-line")}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Media label={p.media} tone={p.tone} className="aspect-[4/3] lg:col-span-5 lg:col-start-8 lg:aspect-[4/5]" />
              </div>
            </article>
          );
        })}
      </section>

      {/* 02 — Subjects */}
      <section className="relative z-10 bg-paper py-24 sm:py-36">
        <div className="wrap">
          <SectionIndex index="02" label="Primary curriculum" aside={<span>Grades 1–7</span>} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <SplitText as="h2" className="display-lg lg:col-span-7" text="A broad, *balanced* set of subjects." />
            <Reveal className="self-end text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
              Each grade builds progressively on foundational skills, with continuous assessment to track every
              learner’s progress.
            </Reveal>
          </div>
          <ul className="mt-16 grid border-t border-line md:grid-cols-2">
            {subjects.map((s, i) => (
              <li key={s} className="border-b border-line md:odd:border-r md:odd:pr-8 md:even:pl-8">
                <Reveal y={12} delay={(i % 2) * 0.06} className="group flex items-baseline gap-5 py-6">
                  <span className="label w-7 text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight tracking-tight transition-transform duration-700 ease-out-expo group-hover:translate-x-2 group-hover:italic">
                    {s}
                  </span>
                </Reveal>
              </li>
            ))}
            <li className="flex items-center py-6 text-sm text-ink-mute md:pl-8">
              [Add or adjust subjects to match the current curriculum]
            </li>
          </ul>
        </div>
      </section>

      {/* 03 — Enrichment */}
      <section className="relative z-10 bg-paper pb-24 sm:pb-36">
        <div className="wrap">
          <SectionIndex index="03" label="Future curriculum enrichment" aside={<span>Planned</span>} />
          <SplitText as="h2" className="display-lg mt-10 max-w-4xl" text="Opening doors *beyond* the classroom." />
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
            {enrichment.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1} className="border-t border-ink pt-6">
                <p className="label text-ink-mute">0{i + 1}</p>
                <h3 className="mt-8 text-3xl leading-tight">{e.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Class sizes & calendar */}
      <section className="relative z-10 bg-paper-2 py-24 sm:py-36">
        <div className="wrap grid gap-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIndex index="04" label="Class sizes" />
            <h2 className="display-md mt-10">Room for individual attention.</h2>
            <Reveal className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">
              [Insert the pupil-to-teacher ratio or average class size here, e.g. “Our current enrollment of 300 pupils
              is supported by X teachers, keeping class sizes manageable for individual attention.”]
            </Reveal>
          </div>
          <div>
            <SectionIndex index="05" label="School calendar" />
            <h2 className="display-md mt-10">A three-term academic year.</h2>
            <ol className="mt-8 border-t border-line">
              {terms.map((t) => (
                <li key={t.name} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="font-serif text-2xl">{t.name}</span>
                  <span className="text-ink-soft">{t.dates}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 06 — Fees */}
      <section id="fees" className="relative z-10 scroll-mt-24 bg-paper py-24 sm:py-36">
        <div className="wrap">
          <SectionIndex index="06" label="Fees" />
          <div className="mt-10 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-serif text-[clamp(6rem,17vw,15rem)] leading-[0.85] tracking-[-0.04em]">
                {site.fees.perTerm}
              </p>
              <p className="mt-4 font-serif text-2xl italic text-ink-soft">per term, three terms a year.</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <table className="w-full text-left text-lg">
                <caption className="sr-only">Sunga Academy fees</caption>
                <thead>
                  <tr className="label border-b border-ink text-ink-mute">
                    <th scope="col" className="pb-3 font-medium">
                      Item
                    </th>
                    <th scope="col" className="pb-3 text-right font-medium">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-line">
                    <td className="py-4">Tuition per term</td>
                    <td className="py-4 text-right">{site.fees.perTerm}</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="py-4">Terms per year</td>
                    <td className="py-4 text-right">{site.fees.termsPerYear}</td>
                  </tr>
                  <tr className="border-b border-ink">
                    <td className="py-4 font-medium">Total per year</td>
                    <td className="py-4 text-right font-serif text-2xl">{site.fees.perYear}</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-6 text-sm leading-relaxed text-ink-mute">
                [Add any additional fees — uniforms, materials, transport, boarding once available — and payment methods
                and deadlines.]
              </p>
              <div className="mt-10">
                <RollButton href="/contact#enroll">Enquire about enrollment</RollButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-paper-2 py-24 sm:py-32">
        <div className="wrap">
          <LinkRows
            rows={[
              { href: "/contact#enroll", title: "Enroll your child", note: "Places from Baby Class to Grade 7" },
              { href: "/about", title: "About the school", note: "Our story, mission and values" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
