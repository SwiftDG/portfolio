import { Boxes, Code2, DatabaseZap } from "lucide-react";

const services = [
  { icon: Code2, title: "Business websites", description: "Fast, mobile-first websites and landing pages that explain an offer clearly and give customers a direct next step.", deliverables: ["Responsive interface", "Contact and inquiry flow", "Deployment and handover"] },
  { icon: Boxes, title: "Web applications", description: "Focused tools, portals and product interfaces built around a real workflow rather than unnecessary complexity.", deliverables: ["Frontend development", "API integration", "Authentication and data"] },
  { icon: DatabaseZap, title: "Workflow automation", description: "Lead-capture, forms, dashboards and lightweight automations that reduce repeated administrative work.", deliverables: ["Process mapping", "Connected data flow", "Clear reporting"] },
];

export default function Skills() {
  return (
    <section id="services" className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">What I can build</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Useful software, delivered clearly.</h2><p className="mt-5 text-base leading-7 text-slate-400">You do not need to arrive with a technical specification. We can start with the business problem, define the smallest useful version and agree on the deliverables before development begins.</p></div>
        <div className="grid gap-4">{services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className="grid gap-5 rounded-2xl border border-white/9 bg-white/[0.025] p-6 sm:grid-cols-[52px_1fr] sm:p-7"><div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-300/15 bg-blue-300/[0.07] text-blue-300"><Icon className="h-5 w-5" /></div><div><div className="flex items-center justify-between gap-4"><h3 className="text-xl font-semibold text-white">{service.title}</h3><span className="text-xs font-bold text-slate-600">0{index + 1}</span></div><p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{service.deliverables.map((item) => <span key={item} className="text-xs font-medium text-slate-500">{item}</span>)}</div></div></article>; })}</div>
      </div>
      <div id="skills" className="mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-white/8 py-5 text-sm font-semibold text-slate-500"><span className="text-slate-300">Core toolkit</span><span>React</span><span>JavaScript</span><span>TypeScript</span><span>Node.js</span><span>Python</span><span>Supabase</span><span>Firebase</span><span>PostgreSQL</span><span>Tailwind CSS</span></div>
    </div></section>
  );
}
