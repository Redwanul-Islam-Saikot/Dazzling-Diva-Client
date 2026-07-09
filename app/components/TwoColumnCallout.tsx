type Column = {
  eyebrow: string;
  title: string;
  image: string;
};

const COLUMNS: Column[] = [
  {
    eyebrow: "New Collection",
    title: "Timeless Elegance. Modern Comfort.",
    image:"/A.png",
  },
  {
    eyebrow: "Wedding Season",
    title: "Timeless Wedding Fashion For Every Woman.",
    image:"/B.png",
  },
];

export default function TwoColumnCallout() {
  return (
    <section className="flex w-full flex-col bg-white sm:flex-row">
      {COLUMNS.map((col) => (
        <a
          key={col.title}
          href="#"
          className="group relative flex h-[340px] w-full items-end overflow-hidden bg-cover bg-center p-6 sm:h-[480px] sm:w-1/2 sm:p-8 lg:h-[600px] lg:p-12"
          style={{ backgroundImage: `url(${col.image})` }}
        >
          {/* Gradient overlay — dark fade from bottom, matches Figma spec */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

          {/* Content */}
          <div className="relative z-10 flex max-w-md flex-col items-start gap-4 sm:gap-6">
            <div className="flex flex-col items-start gap-2 sm:gap-3">
              <p className="text-xs uppercase tracking-wide text-white sm:text-sm">
                {col.eyebrow}
              </p>
              <h3 className="text-2xl font-semibold capitalize leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[44px]">
                {col.title}
              </h3>
            </div>

            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold capitalize text-[#5A0C3D] transition-transform duration-200 group-hover:translate-x-1 sm:px-5 sm:py-3 sm:text-base">
              Discover More
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
