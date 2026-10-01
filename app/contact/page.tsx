import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionIndex } from "@/components/ui/Section";
import { Reveal, SplitText } from "@/components/ui/motion";
import { RollButton, TextLink } from "@/components/ui/Buttons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sunga Academy about enrollment, partnerships, or community enquiries. Find our address, phone, email and office hours.",
};

const details = [
  { k: "Address", v: [`Sunga Academy`, site.address.line1, `${site.address.city}, ${site.address.country}`] },
  { k: "Phone", v: [site.phone] },
  { k: "Email", v: [site.email] },
  { k: "Office hours", v: [site.officeHours] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        aside="Enrollment · Partnerships · Community"
        title="We’d love to *hear* from you."
        intro="Whether you’re a parent interested in enrollment, a partner organisation, or a member of the community — our door is open."
      />

      {/* 01 — Details + form */}
      <section id="enroll" className="wrap scroll-mt-24 pb-24 sm:pb-36">
        <SectionIndex index="01" label="Enrollment enquiries" />
        <div className="mt-10 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SplitText as="h2" className="display-md" text="Interested in enrolling *your child?*" />
            <Reveal className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Reach out by phone or email, or fill out the form, and our team will get back to you with details on
              availability, fees, and the enrollment process.
            </Reveal>
            <dl className="mt-12 border-t border-line">
              {details.map((d, i) => (
                <Reveal key={d.k} y={12} delay={i * 0.06} className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="label pt-1.5 text-ink-mute">{d.k}</dt>
                  <dd className="col-span-2 break-words text-lg leading-snug">
                    {d.v.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* 02 — Map */}
      <section className="bg-paper-2 py-24 sm:py-36">
        <div className="wrap">
          <SectionIndex index="02" label="Find us" />
          <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SplitText as="h2" className="display-lg" text="Visit our *campus.*" />
            <RollButton href={site.mapsShareUrl} variant="line">
              Open in Google Maps
            </RollButton>
          </div>
        </div>
        <Reveal className="wrap mt-14">
          <div className="relative overflow-hidden bg-sand">
            <p className="label absolute bottom-4 left-4 text-ink/60">Map — campus location</p>
            <iframe
              title="Sunga Academy location map"
              src={site.mapsEmbedUrl}
              className="relative block h-[28rem] w-full border-0 grayscale sepia-[.15] sm:h-[36rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* 03 / 04 — Follow + partner */}
      <section className="wrap grid gap-20 py-24 sm:py-36 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionIndex index="03" label="Follow us" />
          <h2 className="display-md mt-10">Follow our journey.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            News, events and milestones — for parents, partners and donors.
          </p>
          <ul className="mt-10 border-t border-line">
            {[
              ["Facebook", site.social.facebook],
              ["Instagram", site.social.instagram],
              ["YouTube", site.social.youtube],
            ].map(([label, href]) => (
              <li key={label} className="border-b border-line">
                <a href={href} className="group flex items-center justify-between py-4 text-xl">
                  <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-2">{label}</span>
                  <span className="label text-ink-mute">[Add link]</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionIndex index="04" label="Partner with us" />
          <h2 className="display-md mt-10">
            Help us build <em>what’s next.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Interested in supporting Sunga Academy’s growth — from new classrooms to our planned school farm and
            boarding house? We welcome partnerships with organisations, donors, and international schools.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <RollButton href="/support">Support Us / Partners</RollButton>
            <TextLink href="#enroll">Send us a message</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
