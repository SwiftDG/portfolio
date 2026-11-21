import useInView from "../../lib/useInView";

// Slides its content in from a side (or up) the first time it scrolls into view.
export default function Reveal({ from = "up", delay = 0, className = "", children }) {
  const [ref, seen] = useInView(0.15);
  return (
    <div ref={ref} className={`rv rv-${from} ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
