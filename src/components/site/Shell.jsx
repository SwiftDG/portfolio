import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Chat from "./Chat";
import { startSmoothScroll, glideTo } from "../../lib/smoothScroll";

export default function Shell() {
  const { pathname, hash } = useLocation();
  useEffect(() => startSmoothScroll(), []);
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) glideTo(el.getBoundingClientRect().top + window.scrollY - 24);
    }, 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>Skip to content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Chat />
    </>
  );
}
