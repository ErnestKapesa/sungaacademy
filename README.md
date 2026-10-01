# Sunga Academy Website

The website for Sunga Academy, built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, **Framer Motion** animations and **Lucide** icons.

## Pages

| Route        | Page                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `/`          | Home: hero, quick facts, welcome, why choose us, video tour, growth timeline, CTA |
| `/about`     | About Us: story, mission & vision, values, campus, leadership, looking ahead |
| `/academics` | Academics: program tabs, subjects, enrichment, class sizes, calendar, fees |
| `/contact`   | Contact: details, enrollment form, map, social links, partner CTA     |
| `/support`   | Support Us / Partners: projects, ways to help, donation details, partner logos |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Filling in placeholders

- **School details** (address, phone, email, office hours, social links, map) live in one place: `lib/site.ts`.
  - For the map, open the campus in Google Maps → *Share* → *Embed a map*, and paste the iframe `src` into `mapsEmbedUrl`.
- **Text placeholders** are written in `[square brackets]`. To find them all, search the project for `[`, e.g. `grep -rn "\[" app`.
- **Photos & videos**: every `<MediaPlaceholder />` marks where media is needed. Put files in `public/images/` and replace the placeholder with:
  ```tsx
  import Image from "next/image";
  <Image src="/images/campus.jpg" alt="Sunga Academy campus" fill className="object-cover" />
  ```
  (the parent element already has a fixed size and `relative`/rounded styling).
- **Contact form**: submissions go to `app/api/contact/route.ts`, which currently only logs them. Connect it to an email service (e.g. Resend, SendGrid) or a CRM before launch.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain so social-share previews use the correct URL.

## Brand

Colours come from the logo: navy `#0b2344` and gold `#ffbd59`. They're defined as Tailwind theme tokens in `app/globals.css`. Headings use *Fraunces*, body text uses *Plus Jakarta Sans*.
