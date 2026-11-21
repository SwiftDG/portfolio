import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reducedMotion } from "../../lib/motion";
import { jumpTo } from "../../lib/smoothScroll";
import { TransitionContext, useTransition } from "./transitionContext";

// A curtain wipes up over the page, the route changes underneath it, then the curtain leaves.
export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState("idle");
  const [label, setLabel] = useState("");
  const busy = useRef(false);

  const go = useCallback((path, name = "") => {
    if (busy.current) return;
    const [pathname, hash] = path.split("#");
    if (reducedMotion()) {
      navigate(path);
      if (!hash) window.scrollTo(0, 0);
      return;
    }
    busy.current = true;
    setLabel(name);
    setPhase("cover");
    setTimeout(() => {
      navigate(pathname + (hash ? `#${hash}` : ""));
      jumpTo(0);
      setPhase("reveal");
      setTimeout(() => { setPhase("idle"); busy.current = false; }, 650);
    }, 650);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div
        className="curtain"
        aria-hidden="true"
        style={{
          transform: phase === "cover" ? "translateY(0%)" : phase === "reveal" ? "translateY(-100%)" : "translateY(100%)",
          transition: phase === "idle" ? "none" : "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <span>{label}</span>
      </div>
    </TransitionContext.Provider>
  );
}

// Internal link that triggers the curtain.
export function TLink({ to, name, children, className, onClick, ...rest }) {
  const { go } = useTransition();
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        onClick?.();
        go(to, name);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
