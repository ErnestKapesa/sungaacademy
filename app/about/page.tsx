import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LinkRows } from "@/components/sections/LinkRows";
import { Media } from "@/components/ui/Media";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal, ScrollText, SplitText } from "@/components/ui/motion";
import { TextLink } from "@/components/ui/Buttons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, mission, vision and values — and how Sunga Academy is growing on its permanent, title-deeded campus.",
};

const values = [
  { name: "Excellence", text: "Striving for the highest standard in teaching and learning." },
  { name: "Integrity", text: "Building character alongside knowledge." },
  { name: "Community", text: "Serving and growing together with the families around us." },
  { name: "Growth", text: "Constantly improving our facilities, curriculum, and opportunities for learners." },
  { name: "Care", text: "Nurturing every child as an individual." },
];

const leaders = [
  { role: "Head Teacher", tone: "clay" as const },
  { role: "School Administrator", tone: "sand" as const },
  { role: "Department Head", tone: "sage" as const },
];

const ahead = [
  "Extending our curriculum from Grade 8 through Grade 12",
  "Constructing new classrooms and a boarding house",
  "Launching a school farm for practical, hands-on learning",
  "Introducing French and other additional languages",
  "Building teacher and student exchange partnerships with international schools",
  "Pursuing partnerships, including with programmes like Google for Education",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        aside="Our story, mission and values"
        title="Every child deserves a *stable,* caring place to learn."
        intro="Sunga Academy was founded on that simple but powerful belief — and has grown into a trusted part of the community it serves."
      />

      <Media label="Wide view of the Sunga Academy campus" tone="clay" className="aspect-[4/3] sm:aspect-[21/9]" sizes="100vw" />

      {/* 01 — Story */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="01" label="Our story" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <ScrollText
            className="display-md lg:col-span-8"
            text="Built on our own title-deeded land, the school has grown to serve learners from Baby Class through Grade 7, becoming a trusted part of the community it serves."
          />
          <Reveal className="self-end text-lg leading-relaxed text-ink-soft lg:col-span-3 lg:col-start-10">
            Today, Sunga Academy is entering an exciting new chapter of growth — expanding our infrastructure,
            extending our curriculum through Grade 12, and building partnerships that will connect our learners to
            opportunities on the global stage.
          </Reveal>
        </div>
      </section>

      {/* 02 — Mission & vision */}
      <section className="bg-ink py-24 text-paper sm:py-36">
        <div className="wrap">
          <SectionIndex index="02" label="Mission & vision" light />
          {[
            {
              k: "Our mission",
              v: "To provide quality, holistic education that equips every learner with the knowledge, character, and confidence to succeed — from their earliest years through to secondary school and beyond.",
            },
            {
              k: "Our vision",
              v: "To be a leading centre of academic excellence, offering education from Baby Class through Grade 12, supported by modern infrastructure, a broadened curriculum, and international partnerships — while remaining rooted in and giving back to our community.",
            },
          ].map((item, i) => (
            <div key={item.k} className={`grid gap-6 py-14 lg:grid-cols-12 ${i ? "border-t border-paper/15" : ""}`}>
              <Reveal className="lg:col-span-3">
                <p className="font-serif text-2xl italic text-gold">{item.k}</p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-9">
                <p className="font-serif text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.18] tracking-tight">{item.v}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Values */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="03" label="Our values" />
        <SplitText as="h2" className="display-lg mt-10 max-w-4xl" text="Five values guide *everything* we do." />
        <ul className="mt-16 border-t border-line">
          {values.map((v, i) => (
            <li key={v.name} className="border-b border-line">
              <Reveal y={16} delay={i * 0.05} className="group grid items-baseline gap-3 py-7 sm:grid-cols-12 sm:py-9">
                <span className="label text-ink-mute sm:col-span-1">0{i + 1}</span>
                <span className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-none tracking-tight transition-[font-style,transform] duration-700 ease-out-expo group-hover:translate-x-3 group-hover:italic sm:col-span-6">
                  {v.name}
                </span>
                <span className="text-lg text-ink-soft sm:col-span-5">{v.text}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* 04 — Campus */}
      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <SectionIndex index="04" label="Our campus" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <SplitText
              as="h2"
              className="display-lg lg:col-span-7"
              text="A permanent foundation to plan *confidently.*"
            />
            <Reveal className="self-end text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
              Sunga Academy sits on our own permanent, title-deeded land. Our growth plans include additional classroom
              blocks, upgraded facilities for Grades 8–12, a school farm, and a boarding house — so that we can serve
              more learners for more years of their education.
            </Reveal>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-12">
            <Media label="Classroom block" tone="sand" className="aspect-[4/5] sm:col-span-7" />
            <div className="grid gap-5 sm:col-span-5 sm:pt-32">
              <Media label="Learners in class" tone="sage" className="aspect-[4/3]" />
              <Media label="Playground and grounds" tone="clay" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Leadership */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="05" label="Leadership & staff" aside={<span>Profiles to follow</span>} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <SplitText as="h2" className="display-lg lg:col-span-7" text="The people behind *our learners.*" />
          <Reveal className="self-end text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
            Our teaching staff are dedicated professionals committed to nurturing every learner’s academic and personal
            growth.
          </Reveal>
        </div>
        <ul className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-3">
          {leaders.map((l, i) => (
            <li key={l.role}>
              <Media label={`Portrait — ${l.role}`} tone={l.tone} className="aspect-[3/4]" />
              <Reveal delay={i * 0.08} className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                <span className="font-serif text-2xl">[Name]</span>
                <span className="label text-ink-mute">{l.role}</span>
              </Reveal>
              <p className="mt-2 text-sm text-ink-mute">[Short bio to be added once appointed.]</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 06 — Looking ahead */}
      <section className="wrap pb-24 sm:pb-36">
        <SectionIndex index="06" label="Looking ahead" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SplitText as="h2" className="display-md" text="What we’re *working on* now." />
            <Reveal delay={0.1} className="mt-8">
              <TextLink href="/support">Support this journey</TextLink>
            </Reveal>
          </div>
          <ol className="border-t border-line lg:col-span-7">
            {ahead.map((a, i) => (
              <li key={a} className="border-b border-line">
                <Reveal y={12} delay={i * 0.05} className="flex gap-6 py-5 text-lg">
                  <span className="label w-8 shrink-0 pt-1.5 text-ink-mute">0{i + 1}</span>
                  {a}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="wrap">
          <LinkRows
            rows={[
              { href: "/academics", title: "Explore academics", note: "Programmes, terms and fees" },
              { href: "/contact#enroll", title: "Enroll your child", note: "Baby Class to Grade 7" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
