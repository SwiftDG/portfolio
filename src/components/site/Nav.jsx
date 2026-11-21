import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { TLink } from "./Transition";
import { useTransition } from "./transitionContext";
import Roll from "./Roll";
import Magnetic from "./Magnetic";
import { scrollToId } from "../../lib/smoothScroll";

const links = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const first = useRef(null);
  const toggle = useRef(null);
  const { pathname } = useLocation();
  const { go } = useTransition();
  const home = pathname === "/";

  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const jump = (event, id) => {
    event.preventDefault();
    setOpen(false);
    if (home) scrollToId(id);
    else go(`/#${id}`, "Home");
  };

  return (
    <header className="nav">
      <TLink to="/" name="Home" className="nav-logo" aria-label="David Gilbert, home"><Roll>David Gilbert</Roll></TLink>
      <nav className="nav-links" aria-label="Primary">
        {links.map((l) => (
          <a key={l.id} href={`/#${l.id}`} onClick={(e) => jump(e, l.id)}><Roll>{l.label}</Roll></a>
        ))}
        <TLink to="/projects" name="Archive"><Roll>Archive</Roll></TLink>
      </nav>
      <Magnetic className="nav-menu-wrap">
        <button ref={toggle} type="button" className="nav-menu" aria-expanded={open} aria-controls="menu-panel" onClick={() => setOpen((v) => !v)}>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </Magnetic>
      {open && (
        <div id="menu-panel" className="menu-panel" role="dialog" aria-label="Menu">
          <ul>
            {links.map((l, i) => (
              <li key={l.id}>
                <a ref={i === 0 ? first : null} href={`/#${l.id}`} onClick={(e) => jump(e, l.id)}>{l.label}</a>
              </li>
            ))}
            <li><TLink to="/projects" name="Archive" onClick={() => setOpen(false)}>Archive</TLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}
