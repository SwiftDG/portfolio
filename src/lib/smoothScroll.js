import { reducedMotion, finePointer } from "./motion";

// Small inertial scroller written for this site. It eases wheel scrolling on desktop only.
// Keyboard, touch, find-in-page and anchor links keep native behaviour.
let state = null;

export function startSmoothScroll() {
  if (reducedMotion() || !finePointer()) return () => {};
  let target = window.scrollY;
  let current = window.scrollY;
  let raf = 0;
  let own = false;

  const max = () => document.documentElement.scrollHeight - window.innerHeight;
  const clamp = (v) => Math.max(0, Math.min(max(), v));

  const tick = () => {
    const delta = target - current;
    if (Math.abs(delta) < 0.4) {
      current = target;
      own = true;
      window.scrollTo(0, current);
      raf = 0;
      return;
    }
    current += delta * 0.095;
    own = true;
    window.scrollTo(0, current);
    raf = requestAnimationFrame(tick);
  };

  const onWheel = (event) => {
    if (event.ctrlKey || event.defaultPrevented) return;
    if (event.target.closest?.("[data-native-scroll]")) return;
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 32 : 1;
    target = clamp(target + event.deltaY * unit);
    if (!raf) raf = requestAnimationFrame(tick);
  };

  const onScroll = () => {
    if (own) { own = false; return; }
    if (!raf) { target = window.scrollY; current = window.scrollY; }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("scroll", onScroll, { passive: true });
  state = {
    jump: (y) => { target = clamp(y); current = target; window.scrollTo(0, target); },
    glide: (y) => { target = clamp(y); if (!raf) raf = requestAnimationFrame(tick); },
  };

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(raf);
    state = null;
  };
}

export function jumpTo(y) {
  if (state) state.jump(y); else window.scrollTo(0, y);
}

// Scrolls to a page position, easing when smooth scrolling is on.
export function glideTo(y) {
  if (state) state.glide(y);
  else window.scrollTo({ top: y, behavior: reducedMotion() ? "auto" : "smooth" });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  glideTo(el.getBoundingClientRect().top + window.scrollY);
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
