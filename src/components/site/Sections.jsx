import { ArrowUpRight, Download } from "./Icons";
import Magnetic from "./Magnetic";
import Roll from "./Roll";
import { services, skills, education, experience, awards, contact } from "../../data/profile";

export function Services() {
  return (
    <section className="services paper" id="services" aria-labelledby="services-title">
      <div className="section-head">
        <p className="kicker">What I do</p>
        <h2 id="services-title">Three kinds of work<br />I take on.</h2>
      </div>
      <ol className="service-list">
        {services.map((s, i) => (
          <li key={s.title}>
            <span className="service-no">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <p className="proof">Shown in: {s.proof}</p>
          </li>
        ))}
      </ol>
      <a className="design-link" href={contact.design} target="_blank" rel="noreferrer">
        <span>Looking for graphic design? See the design concepts.</span>
        <span className="round-btn small"><ArrowUpRight aria-hidden="true" /></span>
      </a>
    </section>
  );
}

export function About() {
  return (
    <section className="about dark" id="about" aria-labelledby="about-title">
      <div className="about-photo">
        <picture>
          <source srcSet="/david-gilbert-420.webp 420w, /david-gilbert-700.webp 700w" sizes="(max-width: 800px) 80vw, 34vw" type="image/webp" />
          <img src="/david-gilbert-700.webp" width="700" height="911" alt="Portrait of David Gilbert" loading="lazy" decoding="async" />
        </picture>
      </div>
      <div className="about-text">
        <p className="kicker">About</p>
        <h2 id="about-title">An engineer's habits, applied to software.</h2>
        <p className="lede">
          I'm a self-taught developer and a Chemical Engineering student in Lagos. Engineering taught me to find the real constraint first. In software that means building the smallest useful version, then checking it.
        </p>
        <p className="lede">
          I work alone and in small teams, and I'm clear about which part is mine. Team projects here say what I built; concepts are marked as concepts.
        </p>
        <dl className="skills">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <Magnetic className="cv-wrap" strength={0.4}>
          <a className="round-btn accent" href={contact.cv} download><Download aria-hidden="true" /><span>Master<br />CV</span></a>
        </Magnetic>
      </div>
    </section>
  );
}

function Rows({ items }) {
  return (
    <ul className="rows">
      {items.map((e) => (
        <li key={e.title}>
          <span className="row-period">{e.period}</span>
          <div>
            <h4>{e.title}</h4>
            <p className="row-place">{e.place}</p>
            <p>{e.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <section className="experience paper" id="experience" aria-labelledby="exp-title">
      <div className="section-head">
        <p className="kicker">Experience and education</p>
        <h2 id="exp-title">Where I've studied,<br />trained and worked.</h2>
      </div>
      <h3 className="sub">Education</h3>
      <Rows items={education} />
      <h3 className="sub">Experience and training</h3>
      <Rows items={experience} />
      <h3 className="sub">Recognition</h3>
      <ul className="awards">
        {awards.map(([a, b]) => (
          <li key={a}><strong>{a}</strong><span>{b}</span></li>
        ))}
      </ul>
      <p className="fine-print">Competition results belong to the teams. Ongoing programmes are marked ongoing.</p>
      <a className="text-link" href={contact.cv} download><Roll>Download the full CV</Roll></a>
    </section>
  );
}
