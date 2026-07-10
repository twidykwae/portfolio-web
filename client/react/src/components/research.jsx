import React, { useState, useRef } from "react";

const items = [
  {
    id: "cubesat",
    year: null,
    status: "In progress · 2026",
    title: "Flight software for a student-built CubeSat",
    meta: "Taylor University Computer Science and Engineering · undergraduate research",
    prose:
      "Developing software for a student-built CubeSat under faculty supervision, contributing to a collaborative research publication. The work spans mission software for a small satellite platform, from onboard data handling to ground-communication routines.",
    links: [
      { label: "Project record", href: "https://pillars.taylor.edu/cse-faculty-student-projects/1/", primary: true },
    ],
  },
  {
    id: "evenki",
    year: "March 2025",
    status: null,
    title: "Speech recognition for the endangered Evenki language",
    meta: "LightSys Code-A-Thon · Android / Kotlin · MFCC + DTW",
    prose:
      "Built a speech-recognition pipeline using MFCC feature extraction and Dynamic Time Warping for an Android language-learning app targeting Evenki, an endangered language spoken by indigenous communities across Russia and China. Shipped to Google Play and RuStore as a real-user-facing tool, putting a digitally preserved language resource into community hands.",
    links: [
      { label: "Repository", href: "https://github.com/twidykwae", primary: true },
      { label: "Google Play", href: "https://play.google.com/", primary: false },
    ],
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-300 ease-out motion-reduce:transition-none"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ResearchRow({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  const labelCell = item.status ? (
    <span className="inline-block px-2 py-1 border border-divider-soft rounded-sm text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-paper-soft tabular-nums">
      {item.status}
    </span>
  ) : (
    <span className="text-xs uppercase tracking-wider font-semibold text-paper-faint tabular-nums">
      {item.year}
    </span>
  );

  return (
    <article className="border-t border-divider first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`research-${item.id}-content`}
        id={`research-${item.id}-trigger`}
        className="group w-full text-left py-6 sm:py-8 grid grid-cols-[1fr_auto] sm:grid-cols-[170px_1fr_auto] sm:gap-x-8 gap-y-3 items-start focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
      >
        <div className="col-span-2 sm:col-span-1 sm:pt-1">{labelCell}</div>
        <div className="flex flex-col gap-1.5 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-paper leading-snug group-hover:text-accent transition-colors duration-200 text-balance">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-paper-soft font-light">{item.meta}</p>
        </div>
        <div className="self-start pt-2 sm:pt-2 text-paper-faint group-hover:text-accent transition-colors duration-200">
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      <div
        id={`research-${item.id}-content`}
        role="region"
        aria-labelledby={`research-${item.id}-trigger`}
        aria-hidden={!isOpen}
        className={`grid motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        style={{ transition: "grid-template-rows 280ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="overflow-hidden">
          <div
            ref={contentRef}
            className="grid grid-cols-1 sm:grid-cols-[170px_1fr_auto] sm:gap-x-8 pb-8 sm:pb-10"
          >
            <div className="hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col gap-5 max-w-prose">
              <p className="text-paper-dim text-sm sm:text-base font-light leading-relaxed text-pretty">
                {item.prose}
              </p>
              {item.links.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1.5 transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm ${
                        link.primary
                          ? "text-paper hover:text-accent font-medium"
                          : "text-paper-soft hover:text-accent font-light"
                      }`}
                    >
                      {link.label}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden sm:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Research() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="research" className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-paper">Research</h2>

        <p className="text-paper-dim text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-12 sm:mb-16 text-pretty">
          Long-form technical work outside the classroom. Flight software for a student-built CubeSat, and signal processing for endangered-language preservation. New notes land here as work accrues.
        </p>

        <div className="border-b border-divider">
          {items.map((item) => (
            <ResearchRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        <p className="mt-8 sm:mt-10 text-[0.65rem] sm:text-xs uppercase tracking-wider font-semibold text-paper-faint">
          More research notes will appear here.
        </p>
      </div>
    </section>
  );
}
