import { ArrowUpRight, Download, Browser, Stack, Spark, Pen, Code, Flask } from "./Icons";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Roll from "./Roll";
import { services, skills, education, experience, awards, contact } from "../../data/profile";

export function Services() {
  return (
    <section className="services paper" id="services" aria-labelledby="services-title">
      <div className="section-head">
        <Reveal from="left"><h2 id="services-title">What I do</h2></Reveal>
      </div>
      <ol className="service-list">
        {services.map((s, i) => (
          <li key={s.title}>
            <span className="service-ico" aria-hidden="true">{[<Browser key="a" />, <Stack key="b" />, <Spark key="c" />][i]}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <p className="proof">Shown in: {s.proof}</p>
          </li>
        ))}
      </ol>
      <a className="design-link" href={contact.design} target="_blank" rel="noreferrer">
        <span><Pen aria-hidden="true" /> I design too. See the graphics.</span>
        <span className="round-btn small"><ArrowUpRight aria-hidden="true" /></span>
      </a>
    </section>
  );
}

export function About() {
  return (
    <section className="about paper" id="about" aria-labelledby="about-title">
      <Parallax speed={0.07} className="about-photo">
        <picture>
          <source srcSet="/david-gilbert-420.webp 420w, /david-gilbert-700.webp 700w" sizes="(max-width: 800px) 80vw, 34vw" type="image/webp" />
          <img src="/david-gilbert-700.webp" width="700" height="911" alt="Portrait of David Gilbert" loading="lazy" decoding="async" />
        </picture>
      </Parallax>
      <div className="about-text">
        <Reveal from="left"><h2 id="about-title">A bit about me</h2></Reveal>
        <p className="lede">
          I started building websites because I wanted to see my ideas work, not just sketch them. I'm in my third year of Chemical Engineering at UNILAG, and I spend most of my spare hours writing code.
        </p>
        <p className="lede">
          I work alone and in small teams. Every project here says which part is mine: team projects name my role, and concepts are marked as concepts.
        </p>
        <dl className="skills">
          {Object.entries(skills).map(([k, v], i) => (
            <div key={k}>
              <dt><span aria-hidden="true">{[<Code key="a" />, <Stack key="b" />, <Spark key="c" />, <Flask key="d" />][i]}</span>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <Magnetic className="cv-wrap" strength={0.4}>
          <a className="round-btn" href={contact.cv} download><Download aria-hidden="true" /><span>Master<br />CV</span></a>
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
        <Reveal from="left"><h2 id="exp-title">Where I've been</h2></Reveal>
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
      <a className="text-link" href={contact.cv} download><Roll>Download the full CV</Roll></a>
    </section>
  );
}
