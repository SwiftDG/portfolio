import { useEffect, useRef } from "react";
import { ArrowDown } from "./Icons";
import Magnetic from "./Magnetic";
import { reducedMotion } from "../../lib/motion";
import { scrollToId } from "../../lib/smoothScroll";

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    if (reducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const p = Math.min(1, window.scrollY / window.innerHeight);
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero dark" ref={ref} id="top" aria-labelledby="hero-name">
      <h1 id="hero-name" className="hero-name">
        <span className="hero-line l1"><span>David</span></span>
        <span className="hero-line l2"><span>Gilbert</span></span>
      </h1>
      <div className="hero-foot">
        <p className="hero-role">Developer. Applied AI.<br />Chemical Engineering student.</p>
        <p className="hero-avail"><i aria-hidden="true" /> Available for freelance projects<br /><span>Based in Lagos, working remotely</span></p>
        <Magnetic className="hero-scroll-wrap" strength={0.45}>
          <button type="button" className="round-btn" onClick={() => scrollToId("intro")}>
            <ArrowDown aria-hidden="true" /><span className="sr-only">Scroll to introduction</span>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
