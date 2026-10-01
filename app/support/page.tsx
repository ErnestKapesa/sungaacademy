import type { Metadata } from "next";
import {
  Building2,
  Tractor,
  BedDouble,
  GraduationCap,
  Languages,
  PlaneTakeoff,
  Laptop,
  HandCoins,
  School,
  Package,
  Megaphone,
  LandPlot,
  Landmark,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Support Us / Partners",
  description:
    "Partner with Sunga Academy to build new classrooms, a school farm, a boarding house and a Grade 8–12 program for learners in Zambia.",
};

const projects = [
  {
    icon: Building2,
    title: "New classroom blocks",
    text: "Additional classrooms and upgraded facilities so we can welcome more learners.",
    span: "lg:col-span-2",
  },
  {
    icon: GraduationCap,
    title: "Grades 8–12 facilities",
    text: "Specialist rooms and resources to extend our curriculum through secondary school.",
  },
  {
    icon: Tractor,
    title: "School farm",
    text: "Hands-on agricultural learning that also supports sustainability and school meals.",
  },
  {
    icon: BedDouble,
    title: "Boarding house",
    text: "Safe, supervised boarding so learners from further afield can attend.",
  },
  {
    icon: Languages,
    title: "Languages program",
    text: "Introducing French and other additional languages to our curriculum.",
  },
  {
    icon: PlaneTakeoff,
    title: "International exchange",
    text: "Teacher and student exchange partnerships with schools abroad.",
  },
  {
    icon: Laptop,
    title: "Digital learning",
    text: "Devices and connectivity, including programs like Google for Education.",
  },
];

const ways = [
  {
    icon: HandCoins,
    title: "Donate",
    text: "Contribute towards a specific project or our general growth fund.",
  },
  {
    icon: School,
    title: "Partner school",
    text: "Build a teacher or student exchange relationship with our learners.",
  },
  {
    icon: Package,
    title: "In-kind support",
    text: "Books, furniture, equipment, building materials or farm inputs.",
  },
  {
    icon: Megaphone,
    title: "Spread the word",
    text: "Share our story with your network, church, company or foundation.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        crumb="Support Us"
        eyebrow="Support Us / Partners"
        title={
          <>
            Help us grow from Grade 7 <em className="text-gold-400">to Grade 12.</em>
          </>
        }
        intro="We welcome partnerships with organizations, donors, and international schools who share our belief that every child deserves quality education in a stable, caring environment."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact#enroll" arrow>
            Become a partner
          </Button>
          <Button href="#projects" variant="outline-light">
            See our projects
          </Button>
        </div>
      </PageHero>

      {/* Why it matters */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why partner with Sunga Academy"
              title="A secure foundation for long-term impact"
            />
            <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-navy-700/85">
              <p>
                Because Sunga Academy sits on our own permanent, title-deeded land, every investment in our campus is
                an investment that lasts. Your support goes directly into infrastructure and programs that will serve
                learners for generations.
              </p>
              <p>
                We currently serve learners from Baby Class through Grade 7, and are ready to take the next step:
                extending through to Grade 12 with the facilities, curriculum and partnerships to match.
              </p>
            </Reveal>
            <Stagger className="mt-10 grid grid-cols-2 gap-4">
              <StaggerItem className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <LandPlot className="size-6 text-gold-600" />
                <p className="mt-3 font-display text-2xl font-semibold text-navy-900">Title-deeded</p>
                <p className="text-sm text-navy-600">permanent campus</p>
              </StaggerItem>
              <StaggerItem className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/5">
                <Landmark className="size-6 text-gold-600" />
                <p className="mt-3 font-display text-2xl font-semibold text-navy-900">[Registration]</p>
                <p className="text-sm text-navy-600">[Add registration / NGO number]</p>
              </StaggerItem>
            </Stagger>
          </div>
          <Reveal delay={0.1} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
            <MediaPlaceholder type="video" tone="dark" label="Short appeal video from the school leadership" />
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 top-1/3 size-[32rem] rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Projects you can support"
            title="Where your support goes"
            intro="Each project brings us closer to becoming a full Baby Class to Grade 12 institution."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {projects.map(({ icon: Icon, title, text, span }) => (
              <StaggerItem
                key={title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-gold-400/50 hover:bg-white/[0.08] ${span ?? ""}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gold-400/0 blur-2xl transition-colors duration-700 group-hover:bg-gold-400/20" />
                <Icon className="relative size-9 text-gold-400 transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="relative mt-8 text-2xl font-semibold">{title}</h3>
                <p className="relative mt-3 leading-relaxed text-navy-200">{text}</p>
                <p className="relative mt-6 text-xs uppercase tracking-[0.16em] text-gold-300/80">
                  Goal: [amount] · Status: [planning]
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Ways to help */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading align="center" eyebrow="Ways to help" title="Every contribution builds a brighter future" />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem
              key={title}
              className="group rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-navy-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10"
            >
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-navy-950">
                <Icon className="size-7" />
              </span>
              <p className="mt-2 font-display text-sm text-navy-300">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-navy-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-navy-700/80">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-16 max-w-3xl rounded-3xl border-2 border-dashed border-navy-900/15 bg-white p-8 text-center">
          <p className="eyebrow justify-center">Donation details</p>
          <p className="mt-4 text-navy-700">
            [Add bank transfer / mobile money details, or a link to an online donation platform, here.]
          </p>
        </Reveal>
      </section>

      {/* Partners logos */}
      <section className="bg-white py-20">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow justify-center">Our partners & friends</p>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerItem
                key={i}
                className="flex h-20 items-center justify-center rounded-2xl border border-dashed border-navy-900/15 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400"
              >
                Partner logo
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title="Let's build the future of Sunga Academy together."
        text="Get in touch to discuss partnership, sponsorship or exchange opportunities. We'd be glad to share our plans in detail."
        showSupport={false}
      />
    </>
  );
}
