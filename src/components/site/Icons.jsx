const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const make = (d) => function Icon(props) { return <svg {...base} {...props}>{d}</svg>; };

export const ArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const ArrowDown = make(<path d="M12 5v14m-6-6 6 6 6-6" />);
export const ArrowUp = make(<path d="M12 19V5m-6 6 6-6 6 6" />);
export const X = make(<path d="M18 6 6 18M6 6l12 12" />);
export const Plus = make(<path d="M12 5v14M5 12h14" />);
export const Download = make(<path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />);
