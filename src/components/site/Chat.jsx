import { useEffect, useRef, useState } from "react";
import { X, ArrowUp } from "./Icons";
import knowledge from "../../data/knowledge.json";
import { contact } from "../../data/profile";

const fallback = {
  answer: "I can only answer from what is on this site and in David's CV, and I don't have that. The quickest route is to ask him directly.",
  links: [
    { label: "WhatsApp", href: contact.whatsapp },
    { label: "Email", href: `mailto:${contact.email}` },
  ],
};

const stop = new Set(["the", "and", "his", "him", "what", "does", "about", "tell", "can", "you", "are", "for", "with", "has", "have", "how", "where", "any", "this", "that"]);

function match(text) {
  const lower = text.toLowerCase();
  const tokens = lower.split(/[^a-z0-9+.#-]+/).filter((t) => t && !stop.has(t));
  let best = null;
  let bestScore = 0;
  for (const entry of knowledge.entries) {
    let score = 0;
    for (const k of entry.keywords) {
      const hit = k.includes(" ") ? lower.includes(k) : tokens.some((t) => t === k || (k.length > 4 && t.startsWith(k)));
      if (hit) score += entry.id.startsWith("project-") ? 3 : 1;
    }
    if (score > bestScore) { best = entry; bestScore = score; }
  }
  return best || fallback;
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const log = useRef(null);
  const input = useRef(null);
  const launcher = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHint(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") { setOpen(false); launcher.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, open]);

  const ask = (question, entry) => {
    const reply = entry || match(question);
    setMessages((m) => [...m, { from: "you", text: question }, { from: "bot", text: reply.answer, links: reply.links }]);
  };

  const submit = (event) => {
    event.preventDefault();
    const q = text.trim();
    if (!q) return;
    setText("");
    ask(q);
  };

  return (
    <div className="chat">
      {open && (
        <section className="chat-panel" role="dialog" aria-label="Scripted assistant">
          <header>
            <div>
              <strong>Ask about David</strong>
              <p>Scripted assistant. No AI model, only answers from the CV and projects.</p>
            </div>
            <button type="button" onClick={() => { setOpen(false); launcher.current?.focus(); }} aria-label="Close chat"><X /></button>
          </header>
          <div className="chat-log" ref={log} data-native-scroll role="log" aria-live="polite" tabIndex={0} aria-label="Conversation">
            <p className="msg bot">Hi, I'm the assistant on David's site. Pick a question or type your own.</p>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                <p>{m.text}</p>
                {m.links?.length > 0 && (
                  <p className="msg-links">
                    {m.links.map((l) => (
                      <a key={l.href + l.label} href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{l.label}</a>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="chips">
            {knowledge.chips.map((c) => (
              <button key={c.id} type="button" onClick={() => ask(c.label, knowledge.entries.find((e) => e.id === c.id))}>{c.label}</button>
            ))}
          </div>
          <form onSubmit={submit}>
            <label className="sr-only" htmlFor="chat-input">Your question</label>
            <input id="chat-input" ref={input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask about projects, skills, contact" autoComplete="off" />
            <button type="submit" aria-label="Send"><ArrowUp /></button>
          </form>
        </section>
      )}
      {hint && !open && (
        <div className="chat-hint">
          <button type="button" className="hint-text" onClick={() => { setOpen(true); setHint(false); }}>Hi, I'm David's site assistant. Ask me anything about him.</button>
          <button type="button" className="hint-x" aria-label="Dismiss" onClick={() => setHint(false)}><X /></button>
        </div>
      )}
      <button ref={launcher} type="button" className="chat-launch" aria-expanded={open} onClick={() => { setOpen((v) => !v); setHint(false); }}>
        {open ? <X aria-hidden="true" /> : <span>Ask</span>}
        <span className="sr-only">{open ? "Close assistant" : "Open assistant"}</span>
      </button>
    </div>
  );
}
