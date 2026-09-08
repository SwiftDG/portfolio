import { BackgroundBeams } from "../components/ui/beams";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070a12] text-white">
      <BackgroundBeams className="fixed opacity-70" />
      <div className="grain pointer-events-none fixed inset-0 z-0 opacity-[0.025]" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
