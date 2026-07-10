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
    const sections = containerRef.current?.querySelectorAll("section");
    if (!sections || sections.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      sections.forEach((section) => gsap.set(section, { autoAlpha: 1, y: 0 }));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const triggers = [];

    sections.forEach((section) => {
      const tween = gsap.fromTo(
        section,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
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
