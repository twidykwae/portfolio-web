import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CADENCE_URL = "https://cadenceapp.space/";

const features = [
  {
    n: "01",
    title: "Workload heatmap",
    body: "See the whole term as a heatmap and know which weeks will hurt before they arrive.",
  },
  {
    n: "02",
    title: "Crunch-week detector",
    body: "Cadence flags the weeks where deadlines pile up, so you can move early instead of scrambling.",
  },
  {
    n: "03",
    title: "Grade-impact analyzer",
    body: "Every assignment, sorted by how much it actually moves your final grade, so effort lands where it counts.",
  },
  {
    n: "04",
    title: "Smart study planner",
    body: "Auto-scheduled study blocks fit your real calendar, turning a syllabus into a week you can follow.",
  },
  {
    n: "05",
    title: "Conflict detector",
    body: "Overlapping deadlines across courses surface up front, not the night before.",
  },
  {
    n: "06",
    title: "Daily digest",
    body: "A short morning brief of what's due and what to touch today, so nothing slips.",
  },
];

function VisitButton({ className = "" }) {
  return (
    <a
      href={CADENCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 bg-accent-deep text-paper px-6 py-3 rounded-xl font-medium hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 ${className}`}
    >
      <span>Visit Cadence</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  );
}

export default function Cadence() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll("[data-fade]");
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
          scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <main ref={containerRef} className="bg-ink text-paper">
      {/* Hero */}
      <section
        data-fade
        className="min-h-[88vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-28 pb-16"
      >
        <span className="inline-block px-3 py-1 border border-divider-soft rounded-full text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-paper-faint">
          Plan · Pace · Finish
        </span>

        <h1 className="mt-8 text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-paper text-balance">
          Cadence
        </h1>

        <div className="mt-5 flex items-center justify-center gap-4 text-paper-soft">
          <span aria-hidden="true" className="h-px w-8 bg-divider-soft" />
          <span className="italic text-lg sm:text-xl font-light">cadentia</span>
          <span aria-hidden="true" className="h-px w-8 bg-divider-soft" />
        </div>
        <p className="mt-4 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] font-semibold text-paper-faint">
          Latin · Rhythm · Resolution
        </p>

        <p className="mt-10 max-w-2xl text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-paper text-balance">
          Turn a stack of syllabi into a semester you can actually run.
        </p>
        <p className="mt-6 max-w-xl text-base sm:text-lg font-light leading-relaxed text-paper-soft text-pretty">
          Upload your syllabi and Cadence pulls out every deadline, weight, and crunch week, then coaches you through the term, one week at a time.
        </p>

        <div className="mt-10">
          <VisitButton />
        </div>
        <p className="mt-4 text-xs sm:text-sm font-light text-paper-faint">
          Free for your first syllabus. Pro for the whole term.
        </p>
      </section>

      {/* Features */}
      <section data-fade className="px-4 sm:px-6 md:px-8 py-12 sm:py-20 border-t border-divider">
        <div className="max-w-5xl mx-auto">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-paper-faint">
            What Cadence does
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-paper text-balance">
            Everything a syllabus was hiding, made visible.
          </h2>

          <div className="mt-10 sm:mt-14">
            {features.map((f) => (
              <article
                key={f.n}
                className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 gap-y-1 py-7 sm:py-9 border-t border-divider first:border-t-0"
              >
                <span className="text-xl sm:text-2xl font-semibold text-paper-faint tabular-nums leading-none pt-1">
                  {f.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-paper leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm sm:text-base font-light leading-relaxed text-paper-dim text-pretty">
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section data-fade className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 border-t border-divider">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-paper-faint">
            The short version
          </p>
          <p className="mt-5 text-lg sm:text-xl font-light leading-relaxed text-paper-dim text-pretty">
            Cadence started as a sophomore's fix for a stack of unread syllabi. It now runs for 200+ students across top universities, built on the Anthropic API.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <VisitButton />
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-light text-paper-soft hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
