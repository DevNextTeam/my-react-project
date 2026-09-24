import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5 py-16 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e5e0d7]">
            <ShoppingBag size={30} strokeWidth={1.5} />
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight">
            Your cart is empty
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#68716d]">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#18201d] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#2a3530]"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
      {/* Header */}
      <div>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#59635f] transition hover:text-[#18201d]"
        >
          <ArrowLeft size={17} />
          Continue shopping
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
            Your order
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Shopping cart
          </h1>
        </div>
      </div>

      {/* Cart */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 rounded-3xl border border-black/5 bg-white p-4 sm:p-5"
            >
              {/* Image */}
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#e5e0d7] sm:h-36 sm:w-36">
                <div className="flex h-full items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#8a8880]">
                    Image
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#8b6f47]">
                        {item.category}
                      </p>

                      <h2 className="mt-1 text-base font-semibold">
                        {item.name}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="rounded-full p-2 text-[#68716d] transition hover:bg-[#f3f1ec] hover:text-[#18201d]"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>

                  <p className="mt-2 text-sm text-[#68716d]">
                    ₱{item.price.toLocaleString()} each
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* Quantity */}
                  <div className="flex h-9 items-center rounded-full border border-black/10">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#f3f1ec]"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#f3f1ec]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Item total */}
                  <p className="font-semibold">
                    ₱{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-3xl border border-black/5 bg-white p-6 sm:p-7">
          <h2 className="text-lg font-semibold">
            Order summary
          </h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between text-[#68716d]">
              <span>Subtotal</span>

              <span>
                ₱{subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between text-[#68716d]">
              <span>Delivery fee</span>

              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="my-6 border-t border-black/5" />

          <div className="flex items-center justify-between">
            <span className="font-medium">
              Estimated total
            </span>

            <span className="text-xl font-semibold">
              ₱{subtotal.toLocaleString()}
            </span>
          </div>

          <Link
            to="/checkout"
            className="mt-7 flex h-13 w-full items-center justify-center rounded-full bg-[#18201d] px-6 text-sm font-medium text-white transition hover:bg-[#2a3530]"
          >
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}