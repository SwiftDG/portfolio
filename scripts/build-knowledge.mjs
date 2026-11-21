// Builds src/data/knowledge.json for the scripted assistant.
// Sources: src/data/projects.js and src/data/profile.js only. No generated or invented facts.
import { writeFileSync } from "node:fs";
import { projects } from "../src/data/projects.js";
import { contact, availability, education, experience, awards, skills } from "../src/data/profile.js";

const entries = [];
const add = (id, keywords, answer, links = []) => entries.push({ id, keywords, answer, links });

add("who", ["who", "david", "about", "introduce", "background", "yourself", "gilbert"],
  "David Izuchukwu Gilbert is a Chemical Engineering student at the University of Lagos (300 Level) and a self-taught software developer based in Lagos. He builds web products and applied AI features, independently and in small teams.",
  [{ label: "Read the CV", href: contact.cv }]);

const featured = ["swift", "graphsense", "vouch", "paypal-hub", "fraud-detection"].map((s) => projects.find((p) => p.slug === s));
add("built", ["built", "build", "made", "work", "projects", "portfolio", "show", "examples"],
  `Selected work: ${featured.map((p) => p.name).join(", ")}. There are ${projects.length} projects in the full archive, covering software, applied AI and engineering competitions.`,
  [{ label: "Open the archive", href: "/projects" }]);

add("skills", ["skills", "skill", "stack", "tech", "technologies", "tools", "languages", "react", "python", "know"],
  Object.entries(skills).map(([k, v]) => `${k}: ${v}.`).join(" "));

add("availability", ["available", "availability", "hire", "hiring", "freelance", "free", "work with", "open"],
  `${availability} The quickest way to start is a message on WhatsApp or email.`,
  [{ label: "WhatsApp", href: contact.whatsapp }, { label: "Email", href: `mailto:${contact.email}` }]);

add("contact", ["contact", "reach", "email", "whatsapp", "phone", "call", "message", "touch", "linkedin", "github"],
  `Email: ${contact.email}. WhatsApp and phone: ${contact.phone}. He is based in ${contact.location}.`,
  [{ label: "WhatsApp", href: contact.whatsapp }, { label: "Email", href: `mailto:${contact.email}` }, { label: "GitHub", href: contact.github }, { label: "LinkedIn", href: contact.linkedin }]);

add("cv", ["cv", "resume", "résumé", "download", "pdf"],
  "The Master CV is a PDF with education, projects, experience, awards and skills.",
  [{ label: "Download the CV", href: contact.cv }]);

add("education", ["education", "study", "studies", "university", "unilag", "school", "degree", "cgpa", "grade", "level"],
  education.map((e) => `${e.title}, ${e.place} (${e.period}). ${e.detail}`).join(" "));

add("experience", ["experience", "intern", "internship", "siwes", "nigerite", "placement", "job", "role", "training", "programme", "program", "fate", "deepmind", "3mtt", "hng", "ecx", "tokyo", "gci"],
  experience.slice(0, 6).map((e) => `${e.title}, ${e.place}${e.period ? ` (${e.period})` : ""}.`).join(" "));

add("awards", ["award", "awards", "won", "win", "prize", "recognition", "competition", "hackathon", "place", "rank"],
  awards.map(([a, b]) => `${a}: ${b}.`).join(" "));

add("design", ["design", "designer", "graphic", "branding", "brand", "logo", "poster"],
  "David's graphic design work lives on a separate site. Those pieces are self-initiated concepts, and the photography in them is licensed stock.",
  [{ label: "Open the design site", href: contact.design }]);

add("services", ["service", "services", "offer", "freelance", "website", "websites", "app", "apps", "ai"],
  "David takes on focused websites and frontends, web apps with accounts and data, and applied AI features. He explains his part, what has been tested and what still needs work.");

add("honesty", ["claim", "client", "clients", "real", "concept", "alone", "ai-assisted", "made with ai"],
  "Projects are labelled by what they are: team projects state David's part, concepts are marked as concepts, and no client results are claimed.");

for (const p of projects) {
  const links = [];
  if (p.live) links.push({ label: p.liveLabel || "Live site", href: p.live });
  if (p.source) links.push({ label: "Source", href: p.source });
  links.push({ label: "More detail", href: `/projects#${p.slug}` });
  const words = [p.name.toLowerCase(), p.slug.replace(/-/g, " "), ...p.name.toLowerCase().split(/\s+/).filter((w) => w.length > 3)];
  add(`project-${p.slug}`, [...new Set(words)],
    `${p.name} (${p.category}, ${p.year}). ${p.summary} Role: ${p.role}. ${p.contribution}${p.evidence ? ` Result: ${p.evidence}.` : ""}`, links);
}

const chips = [
  { label: "Who is David?", id: "who" },
  { label: "What has he built?", id: "built" },
  { label: "Skills?", id: "skills" },
  { label: "Is he available?", id: "availability" },
  { label: "How do I contact him?", id: "contact" },
  { label: "Where's his CV?", id: "cv" },
];

writeFileSync(new URL("../src/data/knowledge.json", import.meta.url), JSON.stringify({ chips, entries }, null, 2) + "\n");
console.log(`knowledge.json: ${entries.length} entries`);
