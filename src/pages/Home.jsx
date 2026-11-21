import Hero from "../components/site/Hero";
import Intro from "../components/site/Intro";
import Work from "../components/site/Work";
import Contact from "../components/site/Contact";
import { Services, About, Experience } from "../components/site/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Work />
      <Services />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
