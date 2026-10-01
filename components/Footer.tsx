import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-gold-400/5 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative block size-14">
              <Image src="/images/logo-seal.png" alt="" fill sizes="56px" className="object-contain" />
            </span>
            <span className="font-display text-2xl font-semibold text-white">Sunga Academy</span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed text-navy-200">
            Quality, caring education from Baby Class through Grade 7 — on our own permanent campus, and growing
            towards Grade 12.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.social.facebook, icon: FacebookIcon, label: "Facebook" },
              { href: site.social.instagram, icon: InstagramIcon, label: "Instagram" },
              { href: site.social.youtube, icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-200 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-navy-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <span>
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
              {site.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <span className="break-all">{site.email}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" />
              {site.officeHours}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Admissions</h3>
          <p className="mt-5 text-navy-200">
            Now enrolling Baby Class to Grade 7.
            <br />
            <span className="font-display text-3xl text-white">{site.fees.perTerm}</span>{" "}
            <span className="text-sm">per term · {site.fees.termsPerYear} terms a year</span>
          </p>
          <Link
            href="/contact#enroll"
            className="mt-6 inline-flex rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-300"
          >
            Enroll Your Child
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-navy-300 sm:flex-row">
          <p>© {year} Sunga Academy. All rights reserved.</p>
          <p className="font-display italic text-navy-200">Building bright futures, one learner at a time.</p>
        </div>
      </div>
    </footer>
  );
}
