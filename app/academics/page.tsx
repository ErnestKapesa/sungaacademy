import type { Metadata } from "next";
import {
  BookA,
  Calculator,
  FlaskConical,
  Globe2,
  Palette,
  Dumbbell,
  Church,
  Languages,
  Tractor,
  PlaneTakeoff,
  Users,
  CalendarDays,
  Info,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramTabs } from "@/components/academics/ProgramTabs";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programs at Sunga Academy: Early Years, Primary (Grades 1–7), and our planned Secondary School (Grades 8–12). Terms, calendar and fees.",
};

// [Add or adjust subjects to match your actual current curriculum]
const subjects = [
  { icon: BookA, name: "English & Literacy" },
  { icon: Calculator, name: "Mathematics" },
  { icon: FlaskConical, name: "Science & Technology" },
  { icon: Globe2, name: "Social Studies" },
  { icon: Palette, name: "Creative & Performing Arts" },
  { icon: Dumbbell, name: "Physical Education" },
  { icon: Church, name: "Religious Education" },
];

const enrichment = [
  {
    icon: Languages,
    title: "French & other languages",
    text: "Introducing French and other foreign languages to broaden our learners' horizons.",
  },
  {
    icon: Tractor,
    title: "Practical & vocational learning",
    text: "Hands-on, practical learning through our planned school farm.",
  },
  {
    icon: PlaneTakeoff,
    title: "International exchange",
    text: "Exchange opportunities for both teachers and students, in partnership with schools abroad.",
  },
];

const terms = [
  { name: "Term 1", dates: "[Start date] – [End date]" },
  { name: "Term 2", dates: "[Start date] – [End date]" },
  { name: "Term 3", dates: "[Start date] – [End date]" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        crumb="Academics"
        eyebrow="Classes & academics"
        title={
          <>
            Learning that grows <em className="text-gold-400">with every child.</em>
          </>
        }
        intro="Current grade levels: Baby Class to Grade 7 — with secondary education through Grade 12 on the way."
      >
        <div className="flex flex-wrap gap-3">
          {["Baby Class", "Middle Class", "Reception", "Grades 1–7", "Grades 8–12 · soon"].map((l) => (
            <span
              key={l}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-navy-100 backdrop-blur"
            >
              {l}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Programs */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          eyebrow="Academic programs"
          title="A clear pathway from first steps to secondary school"
          className="mb-14"
        />
        <Reveal>
          <ProgramTabs />
        </Reveal>
      </section>

      {/* Subjects */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Primary curriculum (Grades 1–7)"
            title="A broad, balanced set of subjects"
            intro="Our primary curriculum follows the national curriculum framework. Each grade builds progressively on foundational skills, with continuous assessment to track each learner's progress."
          />
          <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.07}>
            {subjects.map(({ icon: Icon, name }) => (
              <StaggerItem
                key={name}
                className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-gold-400 hover:text-navy-950"
              >
                <Icon className="size-8 text-gold-400 transition-colors duration-500 group-hover:text-navy-950" />
                <span className="font-display text-lg font-semibold leading-tight sm:text-xl">{name}</span>
              </StaggerItem>
            ))}
            <StaggerItem className="flex flex-col justify-center gap-2 rounded-3xl border border-dashed border-white/20 p-6 text-sm text-navy-200">
              <Info className="size-5 text-gold-300" />
              [Add or adjust subjects to match your actual current curriculum]
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Enrichment */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Future curriculum enrichment"
          title="Opening doors beyond the classroom"
          intro="As part of our growth plan, we intend to introduce:"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {enrichment.map(({ icon: Icon, title, text }) => (
            <StaggerItem
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 transition-colors duration-500 group-hover:bg-navy-900 group-hover:text-gold-400">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-7 text-xl font-semibold text-navy-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-navy-700/80">{text}</p>
              <span className="mt-6 inline-block rounded-full bg-navy-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy-600">
                Planned
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Class sizes + calendar */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Class sizes & learning environment" title="Room for individual attention" />
            <Reveal delay={0.1} className="mt-8 flex gap-5 rounded-3xl bg-cream p-7">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-navy-950">
                <Users className="size-6" />
              </span>
              <p className="leading-relaxed text-navy-800">
                [Insert your actual pupil-to-teacher ratio or average class size here, e.g. &ldquo;Our current
                enrollment of 300 pupils is supported by X teachers, keeping class sizes manageable for individual
                attention.&rdquo;]
              </p>
            </Reveal>
          </div>

          <div>
            <SectionHeading eyebrow="School calendar & terms" title="A 3-term academic year" />
            <Stagger as="ol" className="mt-8 space-y-3">
              {terms.map((t, i) => (
                <StaggerItem
                  as="li"
                  key={t.name}
                  className="flex items-center gap-5 rounded-2xl border border-navy-900/10 p-5 transition hover:border-gold-400"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xl text-gold-400">
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-navy-900">{t.name}</span>
                    <span className="block text-sm text-navy-600">{t.dates}</span>
                  </span>
                  <CalendarDays className="size-5 text-navy-300" />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="container-x scroll-mt-24 py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Fees"
              title="Clear, affordable tuition"
              intro="Quality education at a fee families can plan around."
            />
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact#enroll" arrow>
                Enquire about enrollment
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-navy-900/10 ring-1 ring-navy-900/5">
              <div className="flex items-end justify-between gap-4 bg-navy-900 p-8 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-gold-300">Tuition</p>
                  <p className="mt-2 font-display text-5xl font-semibold sm:text-6xl">{site.fees.perTerm}</p>
                  <p className="mt-1 text-navy-200">per term</p>
                </div>
                <p className="text-right text-sm text-navy-200">
                  {site.fees.perYear}
                  <br />
                  per year
                </p>
              </div>
              <table className="w-full text-left">
                <caption className="sr-only">Sunga Academy fees</caption>
                <thead>
                  <tr className="border-b border-navy-900/10 text-xs uppercase tracking-[0.14em] text-navy-500">
                    <th scope="col" className="px-8 py-4 font-semibold">
                      Item
                    </th>
                    <th scope="col" className="px-8 py-4 text-right font-semibold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-900/5 text-navy-900">
                  <tr>
                    <td className="px-8 py-4">Tuition per term</td>
                    <td className="px-8 py-4 text-right font-semibold">{site.fees.perTerm}</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-4">Terms per year</td>
                    <td className="px-8 py-4 text-right font-semibold">{site.fees.termsPerYear}</td>
                  </tr>
                  <tr className="bg-gold-50">
                    <td className="px-8 py-4 font-semibold">Total per year</td>
                    <td className="px-8 py-4 text-right font-display text-xl font-semibold">{site.fees.perYear}</td>
                  </tr>
                </tbody>
              </table>
              <p className="border-t border-navy-900/5 px-8 py-5 text-sm text-navy-600">
                [Add any additional fees — uniforms, materials, transport, boarding once available — and your payment
                methods/deadlines.]
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand showSupport={false} />
    </>
  );
}
