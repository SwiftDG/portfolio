import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./Icons";
import { projects } from "../../data/projects";
import { TLink } from "./Transition";
import { reducedMotion, finePointer } from "../../lib/motion";

const slugs = ["swift", "vouch", "paypal-hub", "resonance", "crxray", "graphsense"];
const featured = slugs.map((s) => projects.find((p) => p.slug === s));

export default function Work() {
  const [active, setActive] = useState(null);
  const floater = useRef(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const raf = useRef(0);

  useEffect(() => {
    if (!finePointer()) return;
    const loop = () => {
      const p = pos.current;
      const k = reducedMotion() ? 1 : 0.14;
      p.x += (p.tx - p.x) * k;
      p.y += (p.ty - p.y) * k;
      if (floater.current) floater.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const track = (event) => {
    pos.current.tx = event.clientX + 28;
    pos.current.ty = event.clientY - 110;
  };
  const focusRow = (event, slug) => {
    const box = event.currentTarget.getBoundingClientRect();
    pos.current.tx = box.right - 420;
    pos.current.ty = box.top - 60;
    setActive(slug);
  };

  return (
    <section className="work dark" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <h2 id="work-title">Selected work <sup className="count">{String(featured.length).padStart(2, "0")}</sup></h2>
      </div>
      <ul className="work-list" onPointerMove={track} onPointerLeave={() => setActive(null)}>
        {featured.map((p, i) => (
          <li key={p.slug}>
            <TLink
              to={`/projects#${p.slug}`}
              name={p.name}
              className="work-row"
              onPointerEnter={() => setActive(p.slug)}
              onFocus={(e) => focusRow(e, p.slug)}
              onBlur={() => setActive(null)}
            >
              <span className="work-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-name">{p.name}</span>
              <span className="work-meta">{p.category}<br /><em>{p.evidence}</em></span>
              <span className="work-year">{p.year}</span>
              <ArrowUpRight className="work-arrow" aria-hidden="true" />
              {p.preview && <img className="work-thumb" src={p.preview} alt="" loading="lazy" width="1340" height="930" />}
            </TLink>
          </li>
        ))}
      </ul>
      <div ref={floater} className={`floater ${active ? "on" : ""}`} aria-hidden="true">
        {featured.map((p) => (
          <div key={p.slug} className={`floater-card ${active === p.slug ? "show" : ""}`}>
            {p.preview ? (
              <img src={p.preview} alt="" loading="lazy" width="1340" height="930" />
            ) : (
              <div className="floater-text"><strong>{p.name}</strong><span>{p.evidence}</span></div>
            )}
          </div>
        ))}
      </div>
      <p className="work-note">Previews are public homepage captures from October and November 2026. They show landing pages, not full products.</p>
      <TLink to="/projects" name="Archive" className="archive-link">
        <span>All {projects.length} projects</span>
        <span className="round-btn small"><ArrowUpRight aria-hidden="true" /></span>
      </TLink>
    </section>
  );
}
