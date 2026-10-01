import type { Metadata } from "next";
import {
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  Heart,
  Building2,
  Sprout,
  Languages,
  PlaneTakeoff,
  Laptop,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, mission, vision and values — and how Sunga Academy is growing on its permanent, title-deeded campus.",
};

const values = [
  { icon: Award, title: "Excellence", text: "Striving for the highest standard in teaching and learning." },
  { icon: ShieldCheck, title: "Integrity", text: "Building character alongside knowledge." },
  { icon: Users, title: "Community", text: "Serving and growing together with the families around us." },
  { icon: TrendingUp, title: "Growth", text: "Constantly improving our facilities, curriculum, and opportunities for learners." },
  { icon: Heart, title: "Care", text: "Nurturing every child as an individual." },
];

const leaders = [
  { role: "Head Teacher", note: "Photo and short bio to be added once appointed." },
  { role: "School Administrator", note: "Photo and short bio to be added once appointed." },
  { role: "Department Head", note: "Optional — add department heads as they join." },
];

const lookingAhead = [
  { icon: GraduationCap, text: "Extending our curriculum from Grade 8 through Grade 12" },
  { icon: Building2, text: "Constructing new classrooms and a boarding house" },
  { icon: Sprout, text: "Launching a school farm for practical, hands-on learning" },
  { icon: Languages, text: "Introducing French and other additional languages to our curriculum" },
  { icon: PlaneTakeoff, text: "Building teacher and student exchange partnerships with international schools" },
  { icon: Laptop, text: "Pursuing partnerships, including with programs like Google for Education" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Sunga Academy"
        title={
          <>
            Every child deserves a <em className="text-gold-400">stable, caring</em> place to learn.
          </>
        }
        intro="Founded on that simple but powerful belief, Sunga Academy has become a trusted part of the community it serves."
      />

      {/* Our Story */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="From a simple belief to a growing institution." />
          </div>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-navy-700/85 lg:col-span-7">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-gold-500">
              Sunga Academy was founded with a simple but powerful belief: every child deserves access to quality
              education in a stable, caring environment. Built on our own title-deeded land, the school has grown to
              serve learners from Baby Class through Grade 7, becoming a trusted part of the community it serves.
            </p>
            <p>
              Today, Sunga Academy is entering an exciting new chapter of growth — expanding our infrastructure,
              extending our curriculum through Grade 12, and building partnerships that will connect our learners to
              opportunities on the global stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="group relative overflow-hidden rounded-[2rem] bg-navy-900 p-10 text-white sm:p-14">
            <div className="grain pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold-400/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <span className="relative flex size-14 items-center justify-center rounded-2xl bg-gold-400 text-navy-950">
              <Target className="size-7" />
            </span>
            <h2 className="relative mt-8 text-3xl font-semibold sm:text-4xl">Our Mission</h2>
            <p className="relative mt-5 text-lg leading-relaxed text-navy-100">
              To provide quality, holistic education that equips every learner with the knowledge, character, and
              confidence to succeed — from their earliest years through to secondary school and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="group relative overflow-hidden rounded-[2rem] bg-gold-400 p-10 text-navy-950 sm:p-14">
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full border-[40px] border-white/20 transition-transform duration-700 group-hover:scale-110" />
            <span className="relative flex size-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
              <Eye className="size-7" />
            </span>
            <h2 className="relative mt-8 text-3xl font-semibold sm:text-4xl">Our Vision</h2>
            <p className="relative mt-5 text-lg leading-relaxed text-navy-900/85">
              To be a leading center of academic excellence, offering education from Baby Class through Grade 12,
              supported by modern infrastructure, a broadened curriculum, and international partnerships — while
              remaining rooted in and giving back to our community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title="Five values guide everything we do"
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
            {values.map(({ icon: Icon, title, text }) => (
              <StaggerItem
                key={title}
                className="group rounded-3xl border border-navy-900/10 bg-cream p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-navy-900 hover:shadow-2xl hover:shadow-navy-900/20"
              >
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-950">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-900 transition-colors duration-500 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80 transition-colors duration-500 group-hover:text-navy-100">
                  {text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Campus */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Our campus" title="A permanent foundation to plan confidently for the future." />
          <Reveal delay={0.1} className="text-lg leading-relaxed text-navy-700/85">
            Sunga Academy sits on our own permanent, title-deeded land. Our growth plans include additional classroom
            blocks, upgraded facilities for Grades 8–12, a school farm, and a boarding house, so that we can serve more
            learners for more years of their education.
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[32rem]">
            <MediaPlaceholder label="Wide photo of the school campus" />
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/3] md:aspect-auto">
            <MediaPlaceholder label="Classroom interior" />
          </Reveal>
          <Reveal delay={0.2} className="aspect-[4/3] md:aspect-auto">
            <MediaPlaceholder label="Pupils at work or play" />
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Leadership & staff"
            title="The people behind our learners"
            intro="Our teaching staff are dedicated professionals committed to nurturing every learner's academic and personal growth."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {leaders.map((l) => (
              <StaggerItem key={l.role} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <MediaPlaceholder tone="dark" label={`Portrait: ${l.role}`} className="rounded-none" />
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <UserRound className="mt-1 size-5 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="text-xl font-semibold">[Name]</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.14em] text-gold-300">{l.role}</p>
                    <p className="mt-2 text-sm text-navy-200">{l.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Looking ahead */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Looking ahead"
              title="An exciting new chapter of growth"
              intro="Here's what we're currently working on. If you'd like to support this journey, we'd love to hear from you."
            />
            <Reveal delay={0.15} className="mt-8">
              <Button href="/support" variant="navy" arrow>
                Support Us / Partners
              </Button>
            </Reveal>
          </div>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {lookingAhead.map(({ icon: Icon, text }) => (
              <StaggerItem
                as="li"
                key={text}
                className="flex gap-4 rounded-2xl border border-navy-900/10 bg-white p-6 transition hover:border-gold-400 hover:shadow-lg hover:shadow-gold-500/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon className="size-5" />
                </span>
                <span className="leading-relaxed text-navy-800">{text}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
