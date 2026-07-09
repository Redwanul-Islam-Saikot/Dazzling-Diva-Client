type Category = {
  name: string;
  cta: string;
  image: string;
};

const CATEGORIES: Category[] = [
  {
    name: "Sharee Collections",
    cta: "Explore All Sharee",
    image:"/Product1.jpg",
  },
  {
    name: "Three Pices Collections",
    cta: "Explore All Three Pices",
    image:"/Product2.jpg",
  },
  {
    name: "Lehenga Collections",
    cta: "Explore All Lehenga",
    image:"/Product3.jpg",
  },
  {
    name: "Wedding Collections",
    cta: "Explore All Wedding Collection",
    image:"/Product4.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-12">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-[610px] flex-col items-center gap-2 text-center sm:mb-12">
        <p className="text-base capitalize text-black sm:text-lg">
          Shop By Category
        </p>
        <h2 className="text-2xl font-normal uppercase leading-tight text-black sm:text-4xl md:text-5xl">
          Find Your Perfect Style
        </h2>
      </div>

      {/* Grid — 1 column on mobile, 4 columns from desktop up */}
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group relative flex aspect-[320/447] w-full items-end overflow-hidden rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            {/* Gradient overlay — matches Figma: transparent 60% -> black 99.95% */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95 [background-position:0_60%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-start gap-2.5 p-6">
              <h3 className="text-xl font-semibold capitalize leading-[1.27] text-white sm:text-2xl">
                {cat.name}
              </h3>
              <span className="flex items-center gap-2 text-sm capitalize text-white transition-all duration-200 group-hover:gap-3">
                {cat.cta}
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.16667}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 7h10" />
                  <path d="M7.5 3.5 11 7l-3.5 3.5" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
