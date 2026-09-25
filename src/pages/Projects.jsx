import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projectFilters, projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <article className="project-file">
      <div className="project-file-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.year}</span>
      </div>

      <div className="project-file-main">
        <div className="project-file-heading">
          <div>
            <p className="project-category">{project.category}</p>
            <h2>{project.name}</h2>
            <p className="project-role">{project.role}</p>
          </div>

          <strong>{project.evidence}</strong>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-contribution">
          <span>MY CONTRIBUTION</span>
          <p>{project.contribution}</p>
        </div>

        <div className="project-file-footer">
          <div className="project-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {(project.live || project.source) && (
            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                  <ExternalLink />
                </a>
              )}

              {project.source && (
                <a href={project.source} target="_blank" rel="noreferrer">
                  Source
                  <Code2 />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) =>
      project.filters.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <main className="projects-page">
      <nav className="top projects-nav">
        <Link className="logo" to="/">
          DG<sup>/26</sup>
        </Link>

        <Link className="projects-back" to="/">
          <ArrowLeft />
          Back home
        </Link>
      </nav>

      <section className="projects-hero">
        <p className="label">PROJECT ARCHIVE / 2024—2026</p>

        <h1>
          The wider
          <br />
          body of work.
        </h1>

        <div className="projects-hero-copy">
          <p>
            Software, applied machine learning and engineering projects beyond
            the focused selection on the homepage.
          </p>

          <span>
            {projects.length} PROJECTS
            <br />
            LAGOS, NG
          </span>
        </div>
      </section>

      <section className="project-browser">
        <div className="project-filter-bar">
          <p>FILTER / DISCIPLINE</p>

          <div className="project-filters">
            {projectFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-results">
          <div className="project-results-head">
            <span>
              {String(visibleProjects.length).padStart(2, "0")} FILES
            </span>
            <span>{activeFilter.toUpperCase()}</span>
          </div>

          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="projects-close">
        <p className="label">SOURCE / CONTINUED WORK</p>
        <h2>
          Experiments, repositories
          <br />
          and unfinished things.
        </h2>

        <a
          href="https://github.com/SwiftDG"
          target="_blank"
          rel="noreferrer"
        >
          Open GitHub archive
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}
