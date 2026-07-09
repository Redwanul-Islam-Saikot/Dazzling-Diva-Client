"use client";

import { useEffect, useState } from "react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    image: "/Hero.png",
    eyebrow: "Super",
    title: "Fest",
    highlight: "Saving",
    description:
      "Madaripur - Gopalganj - Khulna - Netrokona - Habiganj - Brahmanbaria",
  },
  {
    image: "/Hero2.png",
    eyebrow: "New",
    title: "Arrivals",
    highlight: "Collection",
    description: "Fresh styles added every week - shop before they sell out",
  },
  {
    image: "/Hero3.png",
    eyebrow: "Wedding",
    title: "Season",
    highlight: "Special",
    description: "Timeless wedding fashion for every woman in the family",
  },
  {
    image: "/Hero4.png",
    eyebrow: "Flash",
    title: "Deals",
    highlight: "Live Now",
    description: "Up to 50% off - grab it before it's gone",
  },
  {
    image: "/Hero5.png",
    eyebrow: "Free",
    title: "Shipping",
    highlight: "This Week",
    description: "On all orders over BDT 5000 - no code needed",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      className="relative flex h-[280px] w-full items-center overflow-hidden bg-cover bg-center px-4 transition-all duration-500 sm:h-[380px] sm:px-6 md:h-[525px] md:px-16"
      style={{ backgroundImage: "url(" + slide.image + ")" }}
    >
      <div className="max-w-xs text-white sm:max-w-md">
        <p className="text-xl font-medium sm:text-2xl md:text-3xl">
          {slide.eyebrow}{" "}
          <span className="text-[#E38B4B]">{slide.highlight}</span>{" "}
          {slide.title}
        </p>
        <p className="mt-2 text-[10px] leading-relaxed tracking-wide sm:text-xs md:text-sm">
          {slide.description}
        </p>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => setActive((active - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 sm:left-4 sm:h-10 sm:w-10"
      >
        {"<"}
      </button>

      {/* Right arrow */}
      <button
        onClick={() => setActive((active + 1) % SLIDES.length)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 sm:right-4 sm:h-10 sm:w-10"
      >
        {">"}
      </button>

      {/* Progress dots (clickable) */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={"Go to slide " + (i + 1)}
            className={
              i === active
                ? "h-1 rounded-full bg-white transition-all duration-300 w-16 sm:w-[180px]"
                : "h-1 rounded-full bg-white/60 transition-all duration-300 w-6 hover:bg-white/80 sm:w-[50px]"
            }
          />
        ))}
      </div>
    </section>
  );
}
