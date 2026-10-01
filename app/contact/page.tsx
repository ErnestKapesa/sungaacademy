import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink, Handshake, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/Button";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sunga Academy about enrollment, partnerships, or community enquiries. Find our address, phone, email and office hours.",
};

const details = [
  {
    icon: MapPin,
    title: "Address",
    lines: [`Sunga Academy`, site.address.line1, `${site.address.city}, ${site.address.country}`],
  },
  { icon: Phone, title: "Phone", lines: [site.phone] },
  { icon: Mail, title: "Email", lines: [site.email] },
  { icon: Clock, title: "Office Hours", lines: [site.officeHours] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            We&apos;d love to <em className="text-gold-400">hear from you.</em>
          </>
        }
        intro="Whether you're a parent interested in enrollment, a partner organization, or a member of the community — our door is open."
      />

      {/* Contact details */}
      <section className="relative z-10 -mt-12">
        <div className="container-x">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map(({ icon: Icon, title, lines }) => (
              <StaggerItem
                key={title}
                className="group rounded-3xl bg-white p-7 shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/5 transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-700 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-950">
                  <Icon className="size-6" />
                </span>
                <h2 className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-navy-500">{title}</h2>
                <div className="mt-2 space-y-0.5 break-words text-navy-900">
                  {lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Enrollment + form */}
      <section id="enroll" className="container-x scroll-mt-24 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Enrollment enquiries"
              title="Interested in enrolling your child?"
              intro="Reach out to us via phone or email, or fill out the form, and our team will get back to you with details on availability, fees, and the enrollment process."
            />
            <Reveal delay={0.15} className="mt-10 rounded-3xl bg-navy-900 p-7 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-gold-300">At a glance</p>
              <ul className="mt-4 space-y-3 text-navy-100">
                <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Grade levels</span>
                  <span className="font-semibold text-white">Baby Class – Grade 7</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <span>Tuition</span>
                  <span className="font-semibold text-white">{site.fees.perTerm} / term</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Academic year</span>
                  <span className="font-semibold text-white">{site.fees.termsPerYear} terms</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-navy-900/10 ring-1 ring-navy-900/5 sm:p-10">
              <h3 className="text-2xl font-semibold text-navy-900">Send us a message</h3>
              <p className="mb-8 mt-2 text-navy-600">Name, phone number and message are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Find us" title="Visit our campus" />
            <Reveal delay={0.1}>
              <Button href={site.mapsShareUrl} variant="outline">
                Open in Google Maps <ExternalLink className="size-4" />
              </Button>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="relative mt-12 overflow-hidden rounded-[2rem] shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/10"
          >
            <div className="absolute inset-0 -z-0">
              <MediaPlaceholder label="Google Map of the campus location" />
            </div>
            <iframe
              title="Sunga Academy location map"
              src={site.mapsEmbedUrl}
              className="relative block h-[26rem] w-full border-0 grayscale-[30%] sm:h-[32rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      {/* Social + partner */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-navy-900/10 bg-white p-10">
            <p className="eyebrow">
              <span className="h-px w-8 bg-current" />
              Follow us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-navy-900">Stay up to date</h2>
            <p className="mt-3 text-navy-700/85">
              Follow our journey — news, events and milestones for parents, partners and donors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { href: site.social.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: site.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-3 text-sm font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
                >
                  <Icon className="size-4" /> {label}
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-navy-500">[Add social media links once set up]</p>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] bg-gold-400 p-10 text-navy-950">
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full border-[36px] border-white/25" />
            <Handshake className="relative size-10" />
            <h2 className="relative mt-6 text-3xl font-semibold">Partner with us</h2>
            <p className="relative mt-3 text-navy-900/85">
              Interested in supporting Sunga Academy&apos;s growth — from new classrooms to our planned school farm and
              boarding house? We welcome partnerships with organizations, donors, and international schools.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Button href="/support" variant="navy" arrow>
                Visit Support Us
              </Button>
              <a
                href="#enroll"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
              >
                Contact us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
