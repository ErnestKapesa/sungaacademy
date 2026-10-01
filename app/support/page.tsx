import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LinkRows } from "@/components/sections/LinkRows";
import { ProjectList } from "@/components/sections/ProjectList";
import { Media } from "@/components/ui/Media";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal, ScrollText, SplitText } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Support Us / Partners",
  description:
    "Partner with Sunga Academy to build new classrooms, a school farm, a boarding house and a Grade 8–12 programme for learners in Zambia.",
};

const projects = [
  { title: "New classroom blocks", text: "Additional classrooms and upgraded facilities so we can welcome more learners.", tone: "clay" as const },
  { title: "Grades 8–12 facilities", text: "Specialist rooms and resources to extend our curriculum through secondary school.", tone: "sand" as const },
  { title: "School farm", text: "Hands-on agricultural learning that also supports sustainability.", tone: "sage" as const },
  { title: "Boarding house", text: "Safe, supervised boarding so learners from further afield can attend.", tone: "dusk" as const },
  { title: "Languages programme", text: "Introducing French and other additional languages to our curriculum.", tone: "sand" as const },
  { title: "International exchange", text: "Teacher and student exchange partnerships with schools abroad.", tone: "clay" as const },
  { title: "Digital learning", text: "Devices and connectivity, including programmes like Google for Education.", tone: "sage" as const },
];

const ways = [
  { title: "Donate", text: "Contribute towards a specific project or our general growth fund." },
  { title: "Partner school", text: "Build a teacher or student exchange relationship with our learners." },
  { title: "In-kind support", text: "Books, furniture, equipment, building materials or farm inputs." },
  { title: "Spread the word", text: "Share our story with your network, church, company or foundation." },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        crumb="Support Us"
        aside="Partners · Donors · Schools"
        title="Help us grow from Grade 7 to *Grade 12.*"
        intro="We welcome partnerships with organisations, donors, and international schools who share our belief that every child deserves quality education in a stable, caring environment."
      />

      <Media kind="film" tone="dusk" label="A short appeal from the school leadership" className="aspect-[4/3] sm:aspect-[21/9]" sizes="100vw" />

      {/* 01 — Why */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="01" label="Why partner with us" />
        <ScrollText
          className="display-md mt-10 max-w-6xl"
          text="Because Sunga Academy sits on its own permanent, title-deeded land, every investment in our campus is an investment that lasts — serving learners for generations."
        />
        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          <Reveal>
            <p className="label text-ink-mute">Today</p>
            <p className="mt-4 font-serif text-3xl">Baby Class to Grade 7</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label text-ink-mute">Next</p>
            <p className="mt-4 font-serif text-3xl">Through to Grade 12</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="label text-ink-mute">Registration</p>
            <p className="mt-4 font-serif text-3xl">[Registration / NGO number]</p>
          </Reveal>
        </div>
      </section>

      {/* 02 — Projects */}
      <section id="projects" className="scroll-mt-20 bg-ink py-24 text-paper sm:py-36">
        <div className="wrap">
          <SectionIndex index="02" label="Projects you can support" light aside={<span>Hover to preview</span>} />
          <SplitText as="h2" className="display-lg mt-10 max-w-4xl" text="Where your support *goes.*" />
          <div className="mt-16">
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>

      {/* 03 — Ways to help */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="03" label="Ways to help" />
        <SplitText as="h2" className="display-lg mt-10 max-w-4xl" text="Every contribution builds a *brighter* future." />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="border-t border-ink pt-6">
              <p className="label text-ink-mute">0{i + 1}</p>
              <h3 className="mt-10 text-3xl">{w.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{w.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-6 bg-paper-2 p-8 sm:p-12 lg:grid-cols-12">
          <p className="label text-ink-mute lg:col-span-3">Donation details</p>
          <p className="font-serif text-2xl leading-snug lg:col-span-9">
            [Bank transfer and mobile money details, or a link to an online donation platform.]
          </p>
        </Reveal>
      </section>

      {/* 04 — Partners */}
      <section className="wrap pb-24 sm:pb-36">
        <SectionIndex index="04" label="Partners & friends" />
        <ul className="mt-10 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="flex h-32 items-center justify-center border-b border-r border-line">
              <span className="label text-ink-mute/70">Partner logo</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="wrap">
          <SplitText as="h2" className="display-lg max-w-5xl" text="Let’s build the future of *Sunga Academy* together." />
          <div className="mt-16">
            <LinkRows
              rows={[
                { href: "/contact#enroll", title: "Become a partner", note: "Partnership, sponsorship or exchange" },
                { href: "/about", title: "Read our story", note: "Mission, vision and values" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
