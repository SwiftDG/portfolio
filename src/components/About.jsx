import { Award, FlaskConical, GraduationCap, Users } from "lucide-react";

const highlights = [
  { icon: GraduationCap, value: "4.94/5.00", label: "Chemical Engineering CGPA" },
  { icon: Award, value: "1st place", label: "GraphSense · MathWorks UNILAG" },
  { icon: Users, value: "Top 4%", label: "Squad Hackathon 3.0" },
  { icon: FlaskConical, value: "90.5/100", label: "PIDEC first-stage score" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">About</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">An engineer’s approach to software.</h2></div><div className="space-y-6 text-base leading-8 text-slate-400"><p>I am a Chemical Engineering student at the University of Lagos and a self-taught full-stack developer. That combination shapes how I work: understand the system, isolate the real constraint and build with measurable outcomes in mind.</p><p>My experience spans client websites, education products, fintech prototypes, machine-learning systems and engineering competitions. I care about understandable interfaces, reliable implementation and being able to explain every decision in the finished product.</p><p>I am also a 3MTT Cohort 4 AI/ML Fellow and a member of AIChE and NSChE.</p></div></div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{highlights.map((item) => { const Icon = item.icon; return <div key={item.label} className="rounded-2xl border border-white/9 bg-white/[0.025] p-5"><Icon className="h-5 w-5 text-blue-300" /><p className="mt-7 text-2xl font-semibold tracking-tight text-white">{item.value}</p><p className="mt-1 text-sm leading-5 text-slate-500">{item.label}</p></div>; })}</div>
    </div></section>
  );
}
