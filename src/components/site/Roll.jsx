// Text that rolls up on hover or focus. The visible copy is duplicated, the duplicate is hidden from screen readers.
export default function Roll({ children }) {
  return (
    <span className="roll">
      <span className="roll-a">{children}</span>
      <span className="roll-b" aria-hidden="true">{children}</span>
    </span>
  );
}
