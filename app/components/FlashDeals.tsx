import CountdownTimer from "./CountdownTimer";

type Product = {
  id: string;
  name: string;
  price: number;
  regularPrice: number;
  discountPercent: number;
  image: string;
};

const FLASH_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Mauve Pink Embroidered Tissue Lehenga",
    price: 19057.5,
    regularPrice: 27229.0,
    discountPercent: 30,
    image: "/Flash1.png",
  },
  {
    id: "p2",
    name: "Wine Maroon Embroidered Anarkali Suit",
    price: 15785.0,
    regularPrice: 20500.0,
    discountPercent: 23,
    image: "/Flash2.png",
  },
  {
    id: "p3",
    name: "Black Silk Eid Lehenga & Choli",
    price: 13635.0,
    regularPrice: 19500.0,
    discountPercent: 30,
    image: "/Flash3.png",
  },
  {
    id: "p4",
    name: "Woven Design Organza Saree",
    price: 26112.5,
    regularPrice: 52225.0,
    discountPercent: 50,
    image: "/Flash4.png",
  },
];

function formatBDT(amount: number) {
  return "BDT " + amount.toLocaleString("en-BD", { minimumFractionDigits: 2 });
}

export default function FlashDeals() {
  const endsAt = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center gap-4 bg-[#5A0C3D] px-4 py-10 text-center sm:gap-6 sm:py-16 md:py-20">
        <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl">
          Flash Deals Live Now
        </h2>

        <CountdownTimer endsAt={endsAt} />

        <p className="text-lg font-normal uppercase tracking-wide text-white sm:text-xl md:text-2xl">
          UP TO 50% OFF
        </p>
        <p className="max-w-xs text-xs text-white sm:text-sm">
          Because Every Woman Deserves To Shine. Grab It Before It&apos;s Gone!
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-12 md:px-16">
        <div className="grid w-full max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {FLASH_PRODUCTS.map(function (p) {
            return (
              <article
                key={p.id}
                className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative h-[220px] w-full overflow-hidden rounded-t-xl sm:h-[300px] md:h-[380px]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 rounded-br-md bg-red-600 px-2 py-1 text-xs font-bold text-white sm:px-3 sm:text-sm">
                    -{p.discountPercent}%
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-2 sm:p-3">
                  <p className="line-clamp-1 text-xs sm:text-base">{p.name}</p>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-3">
                    <span className="text-sm font-semibold sm:text-lg">
                      {formatBDT(p.price)}
                    </span>
                    <span className="text-xs text-black/50 line-through sm:text-sm">
                      {formatBDT(p.regularPrice)}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
