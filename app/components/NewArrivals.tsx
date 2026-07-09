type Product = {
  name: string;
  price: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Mauve Pink Embroidered Tissue Lehenga",
    price: "BDT 17,325.00",
    image:
      "/Flash1.png",
  },
  {
    name: "Wine Maroon Embroidered Anarkali Suit",
    price: "BDT 15,000.00",
    image:
      "/Flash2.png",
  },
  {
    name: "Black Silk Bd Lehenga & Choli",
    price: "BDT 13,635.00",
    image:
      "/Flash3.png",
  },
  {
    name: "Woven Design Organza Saree",
    price: "BDT 26,325.00",
    image:
      "/Flash4.png",
  },
  {
    name: "Woven Design Organza Saree",
    price: "BDT 32,225.00",
    image:
      "/Flash5.png",
  },
  {
    name: "Woven Design Organza Saree",
    price: "BDT 32,225.00",
    image:
      "/Flash6.png",
  },
  {
    name: "Woven Design Organza Saree",
    price: "BDT 32,225.00",
    image:
      "/Flash7.png",
  },
  {
    name: "Woven Design Organza Saree",
    price: "BDT 32,225.00",
    image:
      "/Flash8.png",
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-2 text-center sm:mb-12">
        <p className="text-base capitalize text-black sm:text-lg">
          New Arrivals
        </p>
        <h2 className="text-2xl font-normal uppercase leading-tight text-black sm:text-4xl md:text-5xl">
          The Latest Styles You&apos;ll Love.
        </h2>
      </div>

      {/* Product grid */}
      <div className="mx-auto grid max-w-[1312px] grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {PRODUCTS.map((product, i) => (
          <div
            key={`${product.name}-${i}`}
            className="relative aspect-[319/484] w-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            {/* Info bar */}
            <div className="absolute bottom-2 left-1/2 flex w-[92%] -translate-x-1/2 items-center justify-between gap-2 bg-white px-2.5 py-2 sm:bottom-3 sm:gap-3 sm:px-3 sm:py-2.5">
              <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
                <h3 className="truncate text-[10px] font-medium capitalize text-black sm:text-xs">
                  {product.name}
                </h3>
                <span className="text-[11px] font-semibold capitalize text-black/50 sm:text-sm">
                  {product.price}
                </span>
              </div>

              <button
                aria-label={`Add ${product.name} to cart`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white transition hover:bg-black/5 sm:h-10 sm:w-10"
              >
                <svg
                  className="h-3.5 w-3.5 text-black sm:h-[18px] sm:w-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 7h12l-1 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z" />
                  <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-8 flex justify-center sm:mt-12">
        <button className="rounded-lg bg-[#5A0C3D] px-6 py-3 text-base font-semibold capitalize text-white transition hover:bg-[#4a0a32] sm:px-8 sm:py-3.5 sm:text-lg">
          View All New Products
        </button>
      </div>
    </section>
  );
}
