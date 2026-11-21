import { useRef } from "react";
import { reducedMotion, finePointer } from "../../lib/motion";

// Pulls its child toward the pointer. Inert for touch and reduced-motion users.
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const move = (event) => {
    if (reducedMotion() || !finePointer()) return;
    const el = ref.current;
    const box = el.getBoundingClientRect();
    const x = event.clientX - (box.left + box.width / 2);
    const y = event.clientY - (box.top + box.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <span ref={ref} className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </span>
  );
}
