import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../../components/products/ProductCard";

const products = [
  {
    name: "Salmon Aburi",
    description: "Seared salmon sushi with our signature sauce.",
    price: "249",
    category: "Sushi",
  },
  {
    name: "California Roll",
    description: "Classic roll with crab, avocado, and cucumber.",
    price: "229",
    category: "Rolls",
  },
  {
    name: "Dragon Roll",
    description: "A rich roll topped with fresh avocado and eel.",
    price: "299",
    category: "Rolls",
  },
  {
    name: "Ebi Tempura",
    description: "Crispy Japanese-style shrimp tempura.",
    price: "259",
    category: "Tempura",
  },
  {
    name: "Salmon Sashimi",
    description: "Fresh salmon sliced and prepared Japanese style.",
    price: "329",
    category: "Sashimi",
  },
  {
    name: "Tuna Nigiri",
    description: "Fresh tuna served over seasoned sushi rice.",
    price: "219",
    category: "Nigiri",
  },
  {
    name: "Ebi Nigiri",
    description: "Sweet shrimp served over seasoned sushi rice.",
    price: "199",
    category: "Nigiri",
  },
  {
    name: "Matcha Latte",
    description: "Smooth Japanese matcha with creamy milk.",
    price: "149",
    category: "Drinks",
  },
];

const categories = [
  "All",
  "Sushi",
  "Rolls",
  "Sashimi",
  "Nigiri",
  "Tempura",
  "Drinks",
];

export default function Menu() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
            SUSHIYA MENU
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Choose your favorites.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#68716d]">
                Fresh sushi, Japanese favorites, and carefully prepared dishes
                made to order.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#68716d]"
              />

              <input
                type="search"
                placeholder="Search menu"
                className="h-12 w-full rounded-full border border-black/10 bg-[#f8f7f4] pl-11 pr-4 text-sm outline-none transition focus:border-[#18201d]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {/* Categories */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "bg-[#18201d] text-white"
                    : "border border-black/10 bg-white text-[#59635f] hover:bg-[#f3f1ec]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium lg:self-auto"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Products */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}