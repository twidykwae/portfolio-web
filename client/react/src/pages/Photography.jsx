import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const photos = [
  { src: "/47C4EAFE-71D9-4A6E-AA0E-0243B65D4A78.JPEG", alt: "Portrait 1" },
  { src: "/IMG_5059.JPEG", alt: "Portrait 2" },
  { src: "/IMG_5071.JPEG", alt: "Portrait 3" },
  { src: "/IMG_5073.JPEG", alt: "Portrait 4" },
  { src: "/IMG_5074.JPEG", alt: "Portrait 5" },
  { src: "/IMG_5082 (1).JPEG", alt: "Portrait 6" },
  { src: "/IMG_5085.JPEG", alt: "Portrait 7" },
  { src: "/IMG_5090.JPEG", alt: "Portrait 8" },
  { src: "/IMG_5092.JPEG", alt: "Portrait 9" },
  { src: "/IMG_5125.JPEG", alt: "Portrait 10" },
  { src: "/IMG_5126.JPEG", alt: "Portrait 11" },
  { src: "/IMG_5356.JPEG", alt: "Portrait 12" },
  { src: "/IMG_5365.JPEG", alt: "Portrait 13" },
  { src: "/IMG_5374.JPEG", alt: "Portrait 14" },
  { src: "/IMG_5376.JPEG", alt: "Portrait 15" },
  { src: "/IMG_5381.JPEG", alt: "Portrait 16" },
  { src: "/IMG_5385.JPEG", alt: "Portrait 17" },
  { src: "/IMG_5386.JPEG", alt: "Portrait 18" },
  { src: "/IMG_5898.JPEG", alt: "Portrait 19" },
  { src: "/IMG_6248.JPEG", alt: "Portrait 20" },
  { src: "/IMG_6251.JPEG", alt: "Portrait 21" },
  { src: "/IMG_6254.JPEG", alt: "Portrait 22" },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Photography() {
  const [selected, setSelected] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const items = gridRef.current?.querySelectorAll(".photo-card");
    if (!items || items.length === 0) return;
    gsap.fromTo(
      items,
      { autoAlpha: 0, scale: 0.96 },
      { autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const onCardHover = (e, entering) => {
    if (prefersReducedMotion()) return;
    gsap.to(e.currentTarget, {
      scale: entering ? 1.02 : 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  return (
    <section className="bg-ink text-paper min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-paper-faint text-xs sm:text-sm uppercase tracking-wider font-semibold">Photography</p>
          <h1 className="text-3xl sm:text-4xl font-light mt-2 text-paper text-balance">Moments &amp; Frames</h1>
          <p className="text-paper-soft text-sm sm:text-base mt-3 max-w-2xl mx-auto font-light text-pretty">
            A minimal gallery of my work. Select any photo to view it larger.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="photo-card group relative bg-divider rounded-lg overflow-hidden focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
              onClick={() => setSelected(photo)}
              onMouseEnter={(e) => onCardHover(e, true)}
              onMouseLeave={(e) => onCardHover(e, false)}
              aria-label={`Open ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "oklch(8% 0.005 70 / 0.85)" }}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-paper text-sm hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm px-1"
              onClick={() => setSelected(null)}
              aria-label="Close photo viewer"
            >
              Close
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
