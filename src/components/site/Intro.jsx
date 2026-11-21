import useInView from "../../lib/useInView";

const statement =
  "I'm a self-taught developer in my third year of Chemical Engineering at UNILAG. I build things for the web, and every project here says exactly which part I did.";

export default function Intro() {
  const [ref, seen] = useInView(0.25);
  const words = statement.split(" ");
  return (
    <section className="intro paper" id="intro" ref={ref}>
      <p className={`statement ${seen ? "in" : ""}`}>
        {words.map((w, i) => (
          <span key={i} style={{ transitionDelay: `${i * 28}ms` }}>{w} </span>
        ))}
      </p>
    </section>
  );
}
