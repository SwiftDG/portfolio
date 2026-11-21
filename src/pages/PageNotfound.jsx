import { TLink } from "../components/site/Transition";

export default function PageNotfound() {
  return (
    <section className="arch-hero paper">
      <h1>Nothing here</h1>
      <p className="lede">That page doesn't exist. <TLink to="/" name="Home" className="text-link">Return home</TLink></p>
    </section>
  );
}
