import { useEffect, useState } from "react";
import { ArrowUpRight } from "./Icons";
import Magnetic from "./Magnetic";
import Roll from "./Roll";
import { contact } from "../../data/profile";

const fmt = () => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" }).format(new Date());

export default function Contact() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const first = setTimeout(() => setTime(fmt()), 0);
    const tick = setInterval(() => setTime(fmt()), 30000);
    return () => { clearTimeout(first); clearInterval(tick); };
  }, []);

  return (
    <footer className="contact ink" id="contact">
      <h2 className="contact-title">
        <span>Got a project?</span>
        <span className="contact-line">
          <span>Say hello</span>
          <Magnetic className="contact-btn-wrap" strength={0.5}>
            <a className="round-btn accent" href={contact.whatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp<br />me</span>
            </a>
          </Magnetic>
        </span>
      </h2>
      <p className="contact-avail"><i aria-hidden="true" /> Available for freelance projects</p>
      <div className="contact-lines">
        <a href={`mailto:${contact.email}?subject=Project%20inquiry`}><Roll>{contact.email}</Roll></a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}><Roll>{contact.phone}</Roll></a>
      </div>
      <div className="contact-grid">
        <div>
          <h3>Local time</h3>
          <p>{time ? `${time} in Lagos (WAT)` : "Lagos (WAT)"}</p>
        </div>
        <div>
          <h3>Elsewhere</h3>
          <p className="stack-links">
            <a href={contact.github} target="_blank" rel="noreferrer"><Roll>GitHub</Roll></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Roll>LinkedIn</Roll></a>
            <a href={contact.cv} download><Roll>Master CV (PDF)</Roll></a>
          </p>
        </div>
        <div>
          <h3>Graphic design</h3>
          <p><a className="arrow-link" href={contact.design} target="_blank" rel="noreferrer">davidgdesigns.vercel.app <ArrowUpRight aria-hidden="true" /></a></p>
          <p className="fine">Design concepts live on their own site.</p>
        </div>
      </div>
      <p className="colophon">© {new Date().getFullYear()} David Izuchukwu Gilbert</p>
    </footer>
  );
}
