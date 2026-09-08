import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  { index: "01", title: "Urban Brand Creatives", category: "Business website", description: "A polished digital home for a Nigerian creative agency, built to communicate its services, showcase its work and turn visitors into client inquiries.", result: "Client-facing production build", stack: ["React", "Next.js", "TypeScript", "Firebase"], live: "https://urban-brand-creatives.vercel.app/", code: "https://github.com/SwiftDG/urban-brand-creatives", accent: "from-cyan-400/20 to-blue-600/10" },
  { index: "02", title: "Swift", category: "Education platform", description: "An academic companion for UNILAG engineering students, combining structured course resources with AI-assisted self-testing in one accessible platform.", result: "Built for real student use", stack: ["React", "Vite", "Tailwind", "Supabase"], live: "https://swift-md.vercel.app/", code: "https://github.com/SwiftDG/SWIFT-MD", accent: "from-violet-400/20 to-fuchsia-600/10" },
  { index: "03", title: "Vouch", category: "Fintech product", description: "A financial-reputation product for informal traders that translates transaction behaviour into a usable trust signal and credit-readiness view.", result: "63rd of 1,600 · Squad Hackathon 3.0", stack: ["React", "Node.js", "PostgreSQL", "Supabase"], live: "https://vouchsignal.vercel.app/", code: "https://github.com/SwiftDG/vouch-signal", accent: "from-emerald-400/20 to-cyan-600/10" },
  { index: "04", title: "MyDataShield", category: "Compliance automation", description: "An NDPR-focused scanner for Nigerian SMEs that reviews uploaded policy documents and presents a practical compliance score with recommendations.", result: "From document input to actionable report", stack: ["Node.js", "Express", "EJS", "Applied AI"], live: "https://mydatashield.onrender.com/", code: "https://github.com/SwiftDG/mydatashield", accent: "from-amber-400/20 to-orange-600/10" },
];

const additional = [
  { title: "Neuronode", detail: "A guided-questioning DSA tutor built as a complete solo project.", href: "https://github.com/SwiftDG/Neuronode" },
  { title: "Fraud Detection", detail: "Compared ML models on 568,000 transactions, reaching 99.97% recall.", href: "https://github.com/SwiftDG/credit-card-fraud-detection" },
  { title: "Nexstore", detail: "A responsive ecommerce storefront with dark mode and product interactions.", href: "https://itsnexstore.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-white/8 bg-white/[0.018] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12 max-w-3xl sm:mb-16"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Selected work</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Proof across business, education and applied AI.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Each project started with a concrete problem. The work below shows how I structure the solution, build the interface and ship something people can use.</p></div>
      <div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0f1a] p-6 transition hover:-translate-y-1 hover:border-white/20 sm:p-8">
        <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${project.accent} opacity-80 blur-3xl`} /><div className="relative">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"><span className="text-xs font-bold tracking-[0.18em] text-slate-500">{project.index} · {project.category.toUpperCase()}</span><span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300">{project.result}</span></div>
          <h3 className="mt-12 text-3xl font-semibold tracking-[-0.035em] text-white">{project.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:min-h-[84px] sm:text-base">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400">{item}</span>)}</div>
          <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6"><a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300">View live <ArrowUpRight className="h-4 w-4" /></a><a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white"><Code2 className="h-4 w-4" /> Code</a></div>
        </div></motion.article>)}</div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{additional.map((item) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition hover:border-blue-300/25 hover:bg-blue-300/[0.04]"><div className="flex items-center justify-between"><h3 className="font-semibold text-white">{item.title}</h3><ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" /></div><p className="mt-3 text-sm leading-6 text-slate-500">{item.detail}</p></a>)}</div>
    </div></section>
  );
}
