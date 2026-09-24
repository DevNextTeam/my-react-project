import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import useCartStore from "../../store/cartStore";

const products = [
  {
    id: 1,
    name: "Salmon Aburi",
    description:
      "Fresh salmon lightly seared to bring out its natural flavor, finished with our signature sauce.",
    price: 249,
    category: "Sushi",
  },
  {
    id: 2,
    name: "California Roll",
    description:
      "A classic Japanese-inspired roll made with crab, avocado, and cucumber.",
    price: 229,
    category: "Rolls",
  },
  {
    id: 3,
    name: "Dragon Roll",
    description:
      "A rich sushi roll topped with fresh avocado and savory eel.",
    price: 299,
    category: "Rolls",
  },
  {
    id: 4,
    name: "Ebi Tempura",
    description:
      "Crispy Japanese-style shrimp tempura served fresh and golden.",
    price: 259,
    category: "Tempura",
  },
  {
    id: 5,
    name: "Salmon Sashimi",
    description:
      "Fresh salmon carefully sliced and prepared Japanese style.",
    price: 329,
    category: "Sashimi",
  },
  {
    id: 6,
    name: "Tuna Nigiri",
    description:
      "Fresh tuna served over perfectly seasoned sushi rice.",
    price: 219,
    category: "Nigiri",
  },
  {
    id: 7,
    name: "Ebi Nigiri",
    description:
      "Sweet shrimp served over seasoned sushi rice.",
    price: 199,
    category: "Nigiri",
  },
  {
    id: 8,
    name: "Matcha Latte",
    description:
      "Smooth Japanese matcha combined with creamy milk.",
    price: 149,
    category: "Drinks",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
        <h1 className="text-3xl font-semibold">Product not found</h1>

        <Link
          to="/menu"
          className="mt-6 inline-flex rounded-full bg-[#18201d] px-6 py-3 text-sm font-medium text-white"
        >
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
      <Link
        to="/menu"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#59635f] transition hover:text-[#18201d]"
      >
        <ArrowLeft size={17} />
        Back to menu
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Product image */}
        <div className="aspect-square overflow-hidden rounded-[2rem] bg-[#e5e0d7]">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm uppercase tracking-[0.25em] text-[#8a8880]">
              Product Image
            </span>
          </div>
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#68716d]">
            {product.description}
          </p>

          {/* Total */}
          <div className="mt-8">
            <p className="text-sm text-[#68716d]">
              Total
            </p>

            <p className="mt-1 text-2xl font-semibold">
              ₱{(product.price * quantity).toLocaleString()}
            </p>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium">
              Quantity
            </p>

            <div className="flex h-12 w-fit items-center rounded-full border border-black/10 bg-white">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                className="flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-[#f3f1ec]"
              >
                <Minus size={17} />
              </button>

              <span className="w-10 text-center text-sm font-medium">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                className="flex h-12 w-12 items-center justify-center rounded-full transition hover:bg-[#f3f1ec]"
              >
                <Plus size={17} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={() => addToCart(product, quantity)}
            className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#18201d] px-6 text-sm font-medium text-white transition hover:bg-[#2a3530] sm:w-fit sm:min-w-64"
          >
            <ShoppingBag size={19} />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}