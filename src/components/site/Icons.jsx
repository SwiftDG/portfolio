const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const make = (d) => function Icon(props) { return <svg {...base} {...props}>{d}</svg>; };

export const ArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const ArrowDown = make(<path d="M12 5v14m-6-6 6 6 6-6" />);
export const ArrowUp = make(<path d="M12 19V5m-6 6 6-6 6 6" />);
export const X = make(<path d="M18 6 6 18M6 6l12 12" />);
export const Plus = make(<path d="M12 5v14M5 12h14" />);
export const Download = make(<path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />);

// Larger, friendlier icons used for services, skills and the hero.
export const Browser = make(<><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18" /><circle cx="6.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="9" cy="6.5" r=".5" fill="currentColor" /><path d="M8 14h8M8 17h5" /></>);
export const Stack = make(<><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>);
export const Spark = make(<><path d="M11 3l1.9 5.4L18.5 10l-5.6 1.8L11 17.5l-1.9-5.7L3.5 10l5.6-1.6z" /><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z" /></>);
export const Flask = make(<><path d="M9 3h6M10 3v6L4.7 18.2A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.8L14 9V3" /><path d="M7.5 15h9" /><circle cx="11" cy="18" r=".6" fill="currentColor" /></>);
export const Code = make(<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />);
export const Pen = make(<><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" /><path d="M14.5 6.5l3 3" /></>);
export const Wave = make(<><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></>);
