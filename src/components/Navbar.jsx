import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070a12]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="David Gilbert, home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-sm font-bold text-blue-300">DG</span>
          <span className="font-semibold tracking-tight text-white">David Gilbert</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => <li key={link.name}><a href={link.href} className="text-sm font-medium text-slate-400 transition hover:text-white">{link.name}</a></li>)}
        </ul>
        <a href="/David_Master_CV.pdf" download className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-400/10 md:flex"><Download className="h-4 w-4" /> CV</a>
        <button type="button" aria-expanded={isOpen} aria-label="Toggle navigation" className="rounded-lg p-2 text-slate-300 md:hidden" onClick={() => setIsOpen((value) => !value)}>{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {isOpen && <div className="border-t border-white/8 bg-[#070a12]/95 px-5 py-5 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">
        {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5">{link.name}</a>)}
        <a href="/David_Master_CV.pdf" download className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950"><Download className="h-4 w-4" /> Download CV</a>
      </div></div>}
    </nav>
  );
}
