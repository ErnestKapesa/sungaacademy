import {
  School,
  MapPin,
  Users,
  Wallet,
  LandPlot,
  HeartHandshake,
  TrendingUp,
  Sprout,
  Quote,
  ArrowRight,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Timeline, type Milestone } from "@/components/Timeline";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/Button";

const facts = [
  { icon: School, title: "Baby Class – Grade 7", text: "Expanding to Grade 12" },
  { icon: MapPin, title: "Permanent campus", text: "On title-deeded land" },
  { icon: Users, title: "Dedicated staff", text: "Experienced, caring teachers" },
  { icon: Wallet, title: "K800 per term", text: "3 terms per year" },
];

const reasons = [
  {
    icon: LandPlot,
    title: "A Permanent Home for Learning",
    text: "Our school sits on secured, title-deeded land, giving families confidence in our long-term stability and growth plans.",
  },
  {
    icon: HeartHandshake,
    title: "Whole-Child Development",
    text: "We focus on academics alongside character, discipline, and life skills.",
  },
  {
    icon: TrendingUp,
    title: "A Growing Vision",
    text: "We are actively expanding: new classrooms, a school farm, boarding facilities, and an extended curriculum through Grade 12.",
  },
  {
    icon: Sprout,
    title: "Community-Centered",
    text: "Sunga Academy is deeply rooted in and committed to serving our local community.",
  },
];

const milestones: Milestone[] = [
  { title: "Established on permanent, title-deeded land", done: true },
  { title: "Currently serving learners from Baby Class to Grade 7", done: true },
  { title: "Expansion to Grades 8–12", done: false },
  { title: "New classroom blocks and upgraded facilities", done: false },
  { title: "School farm for hands-on learning and sustainability", done: false },
  { title: "Boarding house", done: false },
  { title: "International curriculum offerings, including French and other languages", done: false },
  { title: "Teacher and student exchange partnerships with international schools", done: false },
];

const marquee = ["Excellence", "Integrity", "Community", "Growth", "Care", "Discipline", "Curiosity", "Confidence"];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Quick facts strip */}
      <section className="relative z-10 -mt-10 sm:-mt-12">
        <div className="container-x">
          <Stagger className="grid gap-px overflow-hidden rounded-3xl bg-navy-900/10 shadow-2xl shadow-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="group flex items-center gap-4 bg-white p-6 transition-colors hover:bg-navy-50 lg:p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600 transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold-400 group-hover:text-navy-950">
                  <Icon className="size-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-navy-900">{title}</span>
                  <span className="block text-sm text-navy-600">{text}</span>
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Welcome */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-6 grid-rows-6 gap-4" style={{ aspectRatio: "1 / 1" }}>
              <Reveal className="col-span-4 row-span-4" y={40}>
                <MediaPlaceholder label="Learners in a classroom" />
              </Reveal>
              <Reveal className="col-span-2 col-start-5 row-span-3 row-start-2" delay={0.15} y={40}>
                <MediaPlaceholder label="Teacher reading with pupils" />
              </Reveal>
              <Reveal className="col-span-3 col-start-2 row-span-2 row-start-5" delay={0.25} y={40}>
                <MediaPlaceholder label="Campus grounds" />
              </Reveal>
              <Reveal
                className="col-span-2 col-start-5 row-span-2 row-start-5 flex flex-col justify-center rounded-3xl bg-navy-900 p-4 text-white sm:p-6"
                delay={0.35}
              >
                <span className="font-display text-3xl font-semibold text-gold-400 sm:text-5xl">10</span>
                <span className="mt-1 text-xs leading-snug text-navy-100 sm:text-sm">year levels, Baby Class to Grade 7</span>
              </Reveal>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome to Sunga Academy"
              title={
                <>
                  A school built on <em className="text-gold-600">care, discipline</em> and academic excellence.
                </>
              }
            />
            <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-navy-700/85">
              <p>
                Situated on our own title-deeded land, we currently provide education to learners from Baby Class through
                Grade 7, with a vision to grow into a full baby-class-to-Grade-12 institution offering boarding,
                international curriculum options, and hands-on learning through our own school farm.
              </p>
              <p>
                We believe every child deserves a safe, well-resourced environment to learn, grow, and discover their
                potential. Our teachers and staff are committed to nurturing not just strong academic performance, but
                confident, well-rounded young people ready for the future.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/about" variant="navy" arrow>
                Our Story
              </Button>
              <Link
                href="/academics"
                className="group inline-flex items-center gap-2 font-semibold text-navy-900 underline-offset-4 hover:underline"
              >
                Explore academics
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values marquee */}
      <section aria-label="Our values" className="overflow-hidden border-y border-navy-900/10 bg-white py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl italic text-navy-900/80 sm:text-4xl">
              {word}
              <span className="text-gold-500 not-italic">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute right-0 top-0 size-[40rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              light
              eyebrow="Why choose Sunga Academy"
              title="Rooted in stability. Growing with purpose."
            />
            <Reveal delay={0.1}>
              <Button href="/about" variant="outline-light" arrow>
                Learn more about us
              </Button>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <StaggerItem
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/40 hover:bg-white/[0.07]"
              >
                <span className="absolute right-6 top-6 font-display text-5xl text-white/[0.06] transition-colors duration-500 group-hover:text-gold-400/20">
                  0{i + 1}
                </span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gold-400 text-navy-950 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy-200">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Video tour */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Take a look around"
          title="See life at Sunga Academy"
          intro="A short campus tour introducing our classrooms, teachers, and learners."
        />
        <Reveal delay={0.1} className="mx-auto mt-14 aspect-video max-w-5xl">
          <MediaPlaceholder
            type="video"
            tone="dark"
            label="Campus tour video (embed YouTube or upload an MP4 here)"
            className="shadow-2xl shadow-navy-900/25"
          />
        </Reveal>
      </section>

      {/* Growth journey */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="dot-grid pointer-events-none absolute inset-0 text-navy-900/[0.04]" />
        <div className="container-x relative">
          <SectionHeading
            align="center"
            eyebrow="Our growth journey"
            title="Where we are, and where we're going"
            intro="We are proud of the foundation we've built — and excited about everything still to come."
          />
          <div className="mt-20">
            <Timeline items={milestones} />
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="container-x pt-24 sm:pt-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto size-12 text-gold-500" />
          <blockquote className="mt-8 font-display text-2xl leading-snug text-navy-900 sm:text-4xl">
            “[Add a short quote from a parent or guardian about their child&apos;s experience at Sunga Academy.]”
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div
              role="img"
              aria-label="Placeholder: parent photo"
              className="flex size-14 items-center justify-center rounded-full border-2 border-dashed border-navy-900/20 bg-navy-50 text-navy-400"
            >
              <UserRound className="size-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-navy-900">[Parent name]</p>
              <p className="text-sm text-navy-600">[Parent of a Grade X learner]</p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
