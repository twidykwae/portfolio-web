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
  { src: "/IMG_5386.JPEG", alt: "Portrait 18" }
];

export default function Photography() {
  const [selected, setSelected] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".photo-card");
    if (!items || items.length === 0) return;

    gsap.fromTo(
      items,
      { autoAlpha: 0, scale: 0.9 },
      { autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="bg-black text-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider">Photography</p>
          <h1 className="text-3xl sm:text-4xl font-light mt-2">Moments & Frames</h1>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            A minimal gallery of my work. Click any photo to view it larger.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="photo-card group relative bg-gray-900 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setSelected(photo)}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, { scale: 1.03, y: -4, duration: 0.2, ease: "power2.out" })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.2, ease: "power2.out" })
              }
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-white text-sm hover:text-blue-400"
              onClick={() => setSelected(null)}
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

