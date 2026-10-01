# Sunga Academy Website

The website for Sunga Academy, built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, **Framer Motion** and **Lenis** smooth scrolling.

The design is editorial and image-led: a warm paper palette with the navy and gold of the school seal, large serif typography (Newsreader) with a clean sans (Hanken Grotesk), hairline rules and numbered sections instead of cards and icons.

## Pages

| Route        | Page                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `/`          | Home: hero with expanding film, welcome, at a glance, values marquee, sticky "why choose us", horizontal growth journey, film, CTA |
| `/about`     | About Us: story, mission & vision, values, campus, leadership, looking ahead |
| `/academics` | Academics: stacking programme panels, subjects, enrichment, class sizes, calendar, fees |
| `/contact`   | Contact: details, enrollment form, map, social links, partner CTA |
| `/support`   | Support Us / Partners: projects (with hover preview), ways to help, donation details, partner logos |

## Motion

- Page transitions: a navy curtain with the seal lifts on every navigation (`app/template.tsx`).
- Headlines rise word by word from behind a mask (`SplitText`), statements brighten as you scroll (`ScrollText`).
- Photos and films open with a curtain wipe and drift with soft parallax (`components/ui/Media.tsx`).
- Navigation hides on scroll down and returns on scroll up; buttons roll their labels on hover.
- All motion respects the visitor's "reduce motion" setting.

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
- **Photos & videos**: every `<Media label="…" />` is a placeholder frame (muted colour block with a caption). Put the photo in `public/images/` and add a `src`:
  ```tsx
  <Media src="/images/campus.jpg" alt="Sunga Academy campus" label="Campus" className="aspect-[4/3]" />
  ```
  The frame keeps its size and reveal animation. The design is built around photography, so real photos of learners, teachers and the campus will make the biggest difference.
- **Contact form**: submissions go to `app/api/contact/route.ts`, which currently only logs them. Connect it to an email service (e.g. Resend, SendGrid) or a CRM before launch.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain so social-share previews use the correct URL.

## Brand

Colours come from the logo: navy `#0b2344` and gold `#ffbd59`, on a warm paper background `#f4efe6`. All tokens live in `app/globals.css`. Headings use *Newsreader*, body text uses *Hanken Grotesk*.
