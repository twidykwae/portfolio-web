import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/heroSection.jsx";
import Experience from "../components/experience.jsx";
import About from "../components/about.jsx";
import Projects from "../components/projects.jsx";
import BibleVerse from "../components/bibleVerse.jsx";
import Contact from "../components/contact.jsx";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = containerRef.current?.querySelectorAll("section");
    if (!sections || sections.length === 0) return;

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <About />
      <BibleVerse />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

