import { useEffect, useRef } from "react";
import { registerParallax } from "../../lib/parallax";

// Moves its children against the scroll. Positive speed drifts up slower than the page, negative faster.
export default function Parallax({ speed = 0.1, className = "", children }) {
  const outer = useRef(null);
  const inner = useRef(null);
  useEffect(() => registerParallax(outer.current, inner.current, speed), [speed]);
  return (
    <div ref={outer} className={`px ${className}`}>
      <div ref={inner} className="px-in">{children}</div>
    </div>
  );
}
