import { Hero } from "@/components/home/Hero";
import { WhyChoose } from "@/components/home/WhyChoose";
import { GrowthJourney } from "@/components/home/GrowthJourney";
import { LinkRows } from "@/components/sections/LinkRows";
import { Media } from "@/components/ui/Media";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal, ScrollText, SplitText } from "@/components/ui/motion";
import { TextLink } from "@/components/ui/Buttons";
import { site } from "@/lib/site";

const facts = [
  { label: "Learning", value: "Baby Class to Grade 7", note: "Expanding to Grade 12" },
  { label: "Campus", value: "Our own land", note: "Permanent and title-deeded" },
  { label: "People", value: "Dedicated staff", note: "Experienced, caring teachers" },
  { label: "Tuition", value: `${site.fees.perTerm} a term`, note: `${site.fees.termsPerYear} terms per year` },
];

const values = ["Excellence", "Integrity", "Community", "Growth", "Care"];

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="m12 2 2.9 6.26 6.85.74-5.1 4.64 1.4 6.75L12 16.98 5.95 20.4l1.4-6.75L2.25 9l6.85-.74L12 2Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 01 — Welcome */}
      <section className="wrap pt-24 sm:pt-36">
        <SectionIndex index="01" label="Welcome" />
        <ScrollText
          className="display-md mt-10 max-w-6xl"
          text="Welcome to Sunga Academy — a school built on a foundation of care, discipline, and academic excellence."
        />

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12">
          <Media label="A teacher reading with young learners" tone="sand" className="aspect-[4/5] lg:col-span-5" />
          <div className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Situated on our own title-deeded land, we currently provide education to learners from Baby Class
                through Grade 7, with a vision to grow into a full Baby Class to Grade 12 institution offering boarding,
                international curriculum options, and hands-on learning through our own school farm.
              </p>
              <p>
                We believe every child deserves a safe, well-resourced environment to learn, grow, and discover their
                potential. Our teachers and staff are committed to nurturing not just strong academic performance, but
                confident, well-rounded young people ready for the future.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-8">
              <TextLink href="/about">Read our story</TextLink>
              <TextLink href="/academics">Explore academics</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — At a glance */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="02" label="At a glance" />
        <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.08}
              className="border-line py-8 sm:px-6 sm:first:pl-0 sm:odd:border-r lg:border-r lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="label text-ink-mute">{f.label}</dt>
              <dd className="mt-6 font-serif text-[1.9rem] leading-[1.1] tracking-tight xl:text-[2.2rem]">{f.value}</dd>
              <dd className="mt-2 text-ink-soft">{f.note}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Values marquee */}
      <section aria-label="Our values" className="overflow-hidden border-y border-line py-8 sm:py-10">
        <div className="flex w-max animate-marquee items-center">
          {[...values, ...values, ...values, ...values].map((v, i) => (
            <span key={i} className="flex items-center font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-tight">
              <span className={i % 2 ? "italic text-ink-mute" : ""}>{v}</span>
              <Star className="mx-8 size-6 text-gold sm:mx-12 sm:size-8" />
            </span>
          ))}
        </div>
      </section>

      <WhyChoose />

      <GrowthJourney />

      {/* 05 — Film */}
      <section className="wrap py-24 sm:py-36">
        <SectionIndex index="05" label="Life at Sunga" />
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <SplitText as="h2" className="display-lg lg:col-span-7" text="See a day at *Sunga Academy.*" />
          <Reveal className="text-lg leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
            A short campus film introducing our classrooms, our teachers, and the learners who make the school what it
            is.
          </Reveal>
        </div>
        <Media kind="film" tone="dusk" label="Campus tour film (YouTube embed or MP4)" className="mt-14 aspect-video" />
      </section>

      {/* Testimonial */}
      <section className="wrap pb-24 sm:pb-36">
        <div className="grid gap-10 border-t border-line pt-14 lg:grid-cols-12">
          <p className="label text-ink-mute lg:col-span-3">From our families</p>
          <Reveal className="lg:col-span-8">
            <blockquote className="font-serif text-[clamp(1.7rem,3.2vw,2.9rem)] leading-[1.15] tracking-tight">
              “[A short quote from a parent or guardian about their child’s experience at Sunga Academy.]”
            </blockquote>
            <p className="mt-8 text-ink-soft">[Parent name] — [Parent of a Grade X learner]</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <SectionIndex index="06" label="Join us" />
          <SplitText
            as="h2"
            className="display-lg mt-10 max-w-5xl"
            text="Ready to be part of the *Sunga Academy* family?"
          />
          <div className="mt-16">
            <LinkRows
              rows={[
                { href: "/contact#enroll", title: "Enroll your child", note: "Places from Baby Class to Grade 7" },
                { href: "/contact", title: "Contact us", note: "Visit, call or write to the school office" },
                { href: "/support", title: "Support our growth", note: "Classrooms, a school farm and a boarding house" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
