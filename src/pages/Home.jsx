import { useState } from "react";
import { ArrowUpRight, Atom, Braces, BriefcaseBusiness, ChartNoAxesCombined, Code2, CodeXml, Database, Download, FlaskConical, Mail, Menu, Server, Terminal, X } from "lucide-react";
import SystemScene from "../components/SystemScene";
import { projects } from "../data/projects";

const featured = ["swift", "graphsense", "vouch", "fraud-detection", "nexstore"]
  .map((slug) => projects.find((project) => project.slug === slug));
const stack = [
  ["React", Atom], ["TypeScript", Braces], ["Python", Terminal], ["MATLAB", ChartNoAxesCombined],
  ["Supabase", Database], ["Node.js", Server], ["Vite", CodeXml], ["FastAPI", FlaskConical],
];
const record = [
  ["Nigerite", "SIWES trainee in the Process Department, primarily SM6. Official placement began September 2026; on-site training began 5 October."],
  ["HNG Internship 13", "Completed Stages 0–3 in backend development, October to December 2025."],
  ["ECX UNILAG", "AI/ML track participant since 2025. Built and evaluated the credit-card fraud-detection project shown above."],
  ["3MTT Cohort 4", "AI/ML Fellow in an ongoing learning programme."],
  ["GCI World 2026", "Participant in the ongoing September programme from the Matsuo-Iwasawa Laboratory."],
  ["Engineering competitions", "Led teams in the Dangote Cement Plc University Engineering Challenge, PIDEC 1.0 and TID 5.0."],
];

function ProjectFeature({ project }) {
  return <article className={`feature ${project.preview ? "has-preview" : "no-preview"}`}>
    <div className="feature-body">
      <p className="feature-category">{project.category} <span>/ {project.evidence}</span></p>
      <h3>{project.name}</h3>
      <p className="feature-summary">{project.summary}</p>
      <p className="feature-role">{project.role}</p>
      <p className="feature-contribution"><strong>What I did</strong>{project.contribution}</p>
      <div className="feature-links">
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || "View live site"} <ArrowUpRight /></a>}
        {project.source && <a href={project.source} target="_blank" rel="noreferrer">View source <Code2 /></a>}
        <a href={`/projects#${project.slug}`}>More detail <ArrowUpRight /></a>
      </div>
    </div>
    {project.preview && <figure className="feature-preview"><img src={project.preview} alt={`Public homepage of ${project.name}, captured October 2026`} loading="lazy" width="1340" height="930" /><figcaption>PUBLIC HOMEPAGE, OCT 2026</figcaption></figure>}
  </article>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <nav className="top"><a className="logo" href="#home" onClick={closeMenu}>DG<sup>/26</sup></a><div className={menuOpen ? "nav-items open" : "nav-items"}><a href="#work" onClick={closeMenu}>Work</a><a href="/projects" onClick={closeMenu}>All projects</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a></div><div className="nav-actions"><a className="cv-link" href="/David_Master_CV.pdf" download>CV <Download /></a><button type="button" className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button></div></nav>
    <section className="hero" id="home"><SystemScene /><div className="hero-copy"><p className="label">DAVID IZUCHUKWU GILBERT · LAGOS</p><h1>Engineering student.<br />Software builder.</h1><p className="intro">I study Chemical Engineering at UNILAG and build useful software. My work ranges from a student learning platform to chart sonification, machine learning and frontend interfaces.</p><div className="actions"><a className="button glass-button" href="#work">See the work <ArrowUpRight /></a><a href="/projects">All projects <ArrowUpRight /></a></div></div><aside className="portrait"><picture><source srcSet="/david-gilbert-420.webp 420w, /david-gilbert-700.webp 700w" sizes="(max-width: 800px) 140px, 240px" type="image/webp" /><img src="/david-gilbert-420.webp" width="420" height="547" fetchPriority="high" decoding="async" alt="David Gilbert" /></picture><p>DAVID GILBERT / UNILAG</p></aside></section>
    <section className="work" id="work"><div className="work-heading"><p className="label">SELECTED WORK</p><h2>Work you can open.<br />Contributions you can check.</h2><p>Five projects across software, engineering and applied machine learning. Live links are labeled by what is ready.</p></div>{featured.map((project) => <ProjectFeature key={project.slug} project={project} />)}<a className="archive glass-button" href="/projects"><span>Resonance, Pepper Table, Commonwell and more</span><strong>Explore all {projects.length} projects <ArrowUpRight /></strong></a></section>
    <section className="stack-section" aria-label="Tools I use"><div><p className="label">TOOLS IN THE WORK</p><h2>From code to process.</h2></div><div className="stack-window"><div className="stack-track">{[...stack, ...stack].map(([name, Icon], index) => <span key={`${name}-${index}`} aria-hidden={index >= stack.length}><Icon aria-hidden="true" />{name}</span>)}</div></div><p>Pause over the tools to read them. Motion stops when reduced motion is enabled.</p></section>
    <section className="record" id="experience"><div className="record-intro"><p className="label">EXPERIENCE AND TRAINING</p><h2>The work around the projects.</h2><p>Ongoing programmes are marked as ongoing. Competition outcomes belong to the teams.</p></div><div className="record-list">{record.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div><p className="record-awards">GraphSense: 1st place, AFRETEC-UNILAG MathWorks category. DCP: Top 20 of 300+ submissions. PIDEC 1.0: 4th of 10 teams. TID 5.0: Top 20 semifinalist.</p></section>
    <section className="about" id="about"><div><p className="label">ABOUT</p><h2>David, in brief.</h2></div><div><p>I am a Chemical Engineering student at the University of Lagos and a self-taught software developer. I like work where a complex system becomes understandable through a useful interface.</p><p>I build independently and in small teams. I explain my part, what has been tested and what still needs work.</p><p>My official CGPA is 4.94/5.00 through 100 level. Updated 200 level results are awaiting publication.</p></div></section>
    <section className="cv-panel"><div><p className="label">MASTER CV</p><h2>For the full record.</h2></div><div><p>Education, software and engineering projects, experience, memberships and awards.</p><a className="button glass-button" href="/David_Master_CV.pdf" download>Download CV <Download /></a></div></section>
    <section className="contact" id="contact"><p className="label">CONTACT</p><h2>Have a project in mind?</h2><p>I take on focused websites, interfaces and software work with a clear scope.</p><div className="actions"><a className="button glass-button" href="https://wa.me/2347068349199?text=Hello%20David%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a><a href="mailto:israelizuchukwu17382302@gmail.com?subject=Project%20inquiry"><Mail /> Email</a></div></section>
    <div className="bottom">© {new Date().getFullYear()} DAVID GILBERT <span><a href="https://github.com/SwiftDG"><Code2 /> GitHub</a><a href="https://linkedin.com/in/sarcdgdev"><BriefcaseBusiness /> LinkedIn</a></span></div>
  </main>;
}
