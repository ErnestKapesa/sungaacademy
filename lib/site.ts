/**
 * Central place for school details used across the site.
 * Values wrapped in [brackets] are placeholders — replace them with real
 * details before publishing.
 */
export const site = {
  name: "Sunga Academy",
  tagline: "Building Bright Futures, One Learner at a Time",
  description:
    "Sunga Academy is a nurturing school in Zambia offering quality education from Baby Class through Grade 7 on our own permanent campus — with plans to grow through to Grade 12.",
  address: {
    line1: "[Physical address / area / district]",
    city: "[City]",
    country: "Zambia",
  },
  phone: "[Insert school phone number]",
  email: "[info@sungaacademy.domain]",
  officeHours: "[Monday – Friday, 07:30 – 16:30]",
  fees: {
    perTerm: "K800",
    termsPerYear: 3,
    perYear: "K2,400",
  },
  // Shared Google Maps link for the campus location.
  mapsShareUrl: "https://share.google/e8m9LVUBEq6ohFFPG",
  // Replace with the "Embed a map" iframe src from Google Maps (Share → Embed a map).
  mapsEmbedUrl: "https://www.google.com/maps?q=Sunga+Academy+Zambia&output=embed",
  social: {
    facebook: "#", // [Add Facebook page URL]
    instagram: "#", // [Add Instagram profile URL]
    youtube: "#", // [Add YouTube channel URL]
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/support", label: "Support Us" },
  { href: "/contact", label: "Contact" },
];
