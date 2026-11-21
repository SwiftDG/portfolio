import useInView from "../../lib/useInView";

const statement =
  "I build web products and applied AI features, and I study Chemical Engineering at the University of Lagos. I say what I built, what was tested and what is still unfinished.";

export default function Intro() {
  const [ref, seen] = useInView(0.25);
  const words = statement.split(" ");
  return (
    <section className="intro paper" id="intro" ref={ref}>
      <p className="kicker">Intro</p>
      <p className={`statement ${seen ? "in" : ""}`}>
        {words.map((w, i) => (
          <span key={i} style={{ transitionDelay: `${i * 28}ms` }}>{w} </span>
        ))}
      </p>
    </section>
  );
}
