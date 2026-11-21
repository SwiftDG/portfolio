import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Plus } from "../components/site/Icons";
import { projectFilters, projects } from "../data/projects";
import Contact from "../components/site/Contact";
import Roll from "../components/site/Roll";

function Row({ project, index, open, onToggle }) {
  const panel = `panel-${project.slug}`;
  return (
    <li className={`arch-row ${open ? "open" : ""}`} id={project.slug}>
      <button type="button" className="arch-head" aria-expanded={open} aria-controls={panel} onClick={onToggle}>
        <span className="work-no">{String(index + 1).padStart(2, "0")}</span>
        <span className="arch-name">{project.name}</span>
        <span className="arch-cat">{project.category}</span>
        <span className="arch-year">{project.year}</span>
        <Plus className="arch-plus" aria-hidden="true" />
      </button>
      <div id={panel} className="arch-panel" hidden={!open}>
        <div className="arch-body">
          {project.preview && (
            <figure>
              <img src={project.preview} alt={`Public homepage of ${project.name}`} loading="lazy" width="1340" height="930" />
              <figcaption>Public homepage capture, not the full product.</figcaption>
            </figure>
          )}
          <div className="arch-copy">
            <p className="arch-role">{project.role}</p>
            <p className="arch-sum">{project.summary}</p>
            <h4>My part</h4>
            <p>{project.contribution}</p>
            {project.evidence && <p className="arch-ev"><strong>Result:</strong> {project.evidence}</p>}
            <p className="arch-stack">{project.stack.join(", ")}</p>
            <p className="arch-links">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Roll>{project.liveLabel || "Live site"}</Roll> <ArrowUpRight aria-hidden="true" /></a>}
              {project.source && <a href={project.source} target="_blank" rel="noreferrer"><Roll>Source</Roll> <ArrowUpRight aria-hidden="true" /></a>}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [openSlug, setOpenSlug] = useState(() => (typeof window !== "undefined" ? window.location.hash.slice(1) : ""));
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  );

  useEffect(() => {
    const onHash = () => setOpenSlug(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <section className="arch-hero dark">
        <p className="kicker">Archive</p>
        <h1>Everything<br />I've built.</h1>
        <p className="lede">{projects.length} projects across software, applied AI and engineering. Open any row for my part, the result and the links.</p>
      </section>
      <section className="arch paper" aria-label="Project archive">
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button key={f} type="button" className={filter === f ? "on" : ""} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <ul className="arch-list">
          {visible.map((p, i) => (
            <Row key={p.slug} project={p} index={i} open={openSlug === p.slug} onToggle={() => setOpenSlug(openSlug === p.slug ? "" : p.slug)} />
          ))}
        </ul>
      </section>
      <Contact />
    </>
  );
}
