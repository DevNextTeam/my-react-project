import { Plus } from "lucide-react";

export default function ProductCard({
  name,
  description,
  price,
  image,
  category,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="relative aspect-square overflow-hidden bg-[#e5e0d7]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8a8880]">
              Product Image
            </span>
          </div>
        )}

        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
            {category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-[#18201d]">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#68716d]">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold text-[#18201d]">
            ₱{price}
          </span>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18201d] text-white transition hover:bg-[#2a3530]"
            aria-label={`Add ${name} to cart`}
          >
            <Plus size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
}