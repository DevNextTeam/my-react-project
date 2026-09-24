export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="max-w-xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f47]">
              Japanese Restaurant
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Fresh sushi,
              <br />
              made for you.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#68716d] sm:text-lg">
              Carefully crafted Japanese dishes made with fresh ingredients
              and delivered straight to your door.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="/menu"
                className="rounded-full bg-[#18201d] px-7 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#2a3530]"
              >
                Order Now
              </a>

              <a
                href="/menu"
                className="rounded-full border border-[#18201d]/15 px-7 py-3.5 text-sm font-medium transition hover:bg-white"
              >
                View Menu
              </a>

            </div>

          </div>

          {/* Hero Image Placeholder */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e5e0d7] aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm uppercase tracking-[0.25em] text-[#8a8880]">
                Sushi Image
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* Categories */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Browse our menu
              </h2>
            </div>

            <a
              href="/menu"
              className="hidden text-sm font-medium underline underline-offset-4 sm:block"
            >
              View all
            </a>
          </div>


          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {[
              "Sushi",
              "Rolls",
              "Sashimi",
              "Nigiri",
              "Tempura",
              "Drinks",
            ].map((category) => (
              <a
                key={category}
                href="/menu"
                className="rounded-2xl border border-black/5 bg-[#f8f7f4] px-5 py-8 text-center text-sm font-medium transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
              >
                {category}
              </a>
            ))}

          </div>

        </div>
      </section>


      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6f47]">
            Customer favorites
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Popular right now
          </h2>
        </div>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Salmon Aburi",
            "California Roll",
            "Dragon Roll",
            "Ebi Tempura",
          ].map((product) => (
            <div
              key={product}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white"
            >

              <div className="aspect-square bg-[#e5e0d7]">
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-widest text-[#8a8880]">
                  Product Image
                </div>
              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  {product}
                </h3>

                <p className="mt-2 text-sm text-[#68716d]">
                  Freshly prepared Japanese favorite.
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="font-semibold">
                    ₱249
                  </span>

                  <button className="rounded-full bg-[#18201d] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#2a3530]">
                    Add
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}