import { reducedMotion } from "./motion";

// One shared scroll loop that nudges registered elements at different speeds.
const items = new Set();
let raf = 0;
let bound = false;

function frame() {
  raf = 0;
  const h = window.innerHeight;
  items.forEach(({ outer, inner, speed }) => {
    const r = outer.getBoundingClientRect();
    if (r.bottom < -300 || r.top > h + 300) return;
    const offset = r.top + r.height / 2 - h / 2;
    inner.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
  });
}
const request = () => { if (!raf) raf = requestAnimationFrame(frame); };

export function registerParallax(outer, inner, speed) {
  if (reducedMotion()) return () => {};
  const entry = { outer, inner, speed };
  items.add(entry);
  if (!bound) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    bound = true;
  }
  request();
  return () => { items.delete(entry); inner.style.transform = ""; };
}
