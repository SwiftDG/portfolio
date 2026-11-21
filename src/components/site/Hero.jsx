import { useEffect, useRef, useState } from "react";
import { ArrowDown, Wave, Code, Spark, Flask } from "./Icons";
import Magnetic from "./Magnetic";
import Parallax from "./Parallax";
import { reducedMotion } from "../../lib/motion";
import { scrollToId } from "../../lib/smoothScroll";

const words = [
  { cls: "w1", text: "Developer", Icon: Code },
  { cls: "w2", text: "Applied AI", Icon: Spark },
  { cls: "w3", text: "Chemical Engineering", Icon: Flask },
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const hovering = useRef(false);

  // Words slide out once on load so touch users see it too, then follow the cursor.
  useEffect(() => {
    const a = setTimeout(() => setOpen(true), 1500);
    const b = setTimeout(() => { if (!hovering.current) setOpen(false); }, 3800);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);

  const move = (event) => {
    if (reducedMotion()) return;
    const el = event.currentTarget;
    const box = el.getBoundingClientRect();
    el.style.setProperty("--x", `${event.clientX - box.left}px`);
    el.style.setProperty("--y", `${event.clientY - box.top}px`);
  };
  const enter = () => { hovering.current = true; setOpen(true); };
  const leave = (event) => {
    hovering.current = false;
    setOpen(false);
    event.currentTarget.style.setProperty("--x", "-999px");
  };

  return (
    <section className="hero paper" id="top" aria-labelledby="hero-name">
      <h1 id="hero-name" className="hero-name">
        <span className="hero-line"><span>Hi, I'm</span></span>
        <span className="hero-line"><span>David <Wave className="wave" aria-hidden="true" /></span></span>
      </h1>
      <div className={`hero-stage ${open ? "open" : ""}`}>
        {words.map(({ cls, text, Icon }) => (
          <Parallax key={cls} speed={cls === "w2" ? -0.06 : 0.05} className={`hero-word ${cls}`}>
            <span><Icon aria-hidden="true" />{text}</span>
          </Parallax>
        ))}
        <Parallax speed={0.04} className="hero-portrait-wrap">
          <div className="portrait" onPointerEnter={enter} onPointerMove={move} onPointerLeave={leave}>
            <img className="p-base" src="/david-gilbert-700.webp" srcSet="/david-gilbert-420.webp 420w, /david-gilbert-700.webp 700w" sizes="(max-width: 800px) 70vw, 30rem" width="700" height="911" alt="David Gilbert" fetchPriority="high" />
            <img className="p-lens" src="/david-gilbert-700.webp" alt="" aria-hidden="true" width="700" height="911" />
          </div>
        </Parallax>
      </div>
      <div className="hero-foot">
        <p className="hero-sub">I make websites and AI tools, and I study Chemical Engineering in Lagos.</p>
        <p className="hero-avail"><i aria-hidden="true" /> Available for freelance projects</p>
        <Magnetic className="hero-scroll-wrap" strength={0.45}>
          <button type="button" className="round-btn" onClick={() => scrollToId("intro")}>
            <ArrowDown aria-hidden="true" /><span className="sr-only">Scroll to introduction</span>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
