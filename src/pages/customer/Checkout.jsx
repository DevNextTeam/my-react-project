import {
  ArrowLeft,
  CreditCard,
  MapPin,
  Store,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

export default function Checkout() {
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 49;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5 py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-[#68716d]">
            Add some items before checking out.
          </p>

          <Link
            to="/menu"
            className="mt-7 inline-flex rounded-full bg-[#18201d] px-6 py-3.5 text-sm font-medium text-white"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
      <Link
        to="/cart"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#59635f] hover:text-[#18201d]"
      >
        <ArrowLeft size={17} />
        Back to cart
      </Link>

      <div className="mt-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
          Checkout
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Complete your order.
        </h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Checkout form */}
        <div className="space-y-6">
          {/* Fulfillment */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">
              Order type
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="flex items-center gap-4 rounded-2xl border-2 border-[#18201d] bg-[#f8f7f4] p-5 text-left"
              >
                <Truck size={22} />

                <div>
                  <p className="font-medium">
                    Delivery
                  </p>

                  <p className="mt-1 text-xs text-[#68716d]">
                    Delivered to your address
                  </p>
                </div>
              </button>

              <button
                type="button"
                className="flex items-center gap-4 rounded-2xl border border-black/10 p-5 text-left transition hover:bg-[#f8f7f4]"
              >
                <Store size={22} />

                <div>
                  <p className="font-medium">
                    Pickup
                  </p>

                  <p className="mt-1 text-xs text-[#68716d]">
                    Pick up at the restaurant
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <MapPin size={20} />

              <h2 className="text-lg font-semibold">
                Delivery address
              </h2>
            </div>

            <div className="mt-5 grid gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="h-12 rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 text-sm outline-none focus:border-[#18201d]/30"
              />

              <input
                type="text"
                placeholder="Phone number"
                className="h-12 rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 text-sm outline-none focus:border-[#18201d]/30"
              />

              <input
                type="text"
                placeholder="Street / Barangay"
                className="h-12 rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 text-sm outline-none focus:border-[#18201d]/30"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="City / Municipality"
                  className="h-12 rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 text-sm outline-none focus:border-[#18201d]/30"
                />

                <input
                  type="text"
                  placeholder="Province"
                  className="h-12 rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 text-sm outline-none focus:border-[#18201d]/30"
                />
              </div>

              <textarea
                placeholder="Delivery instructions (optional)"
                rows="3"
                className="resize-none rounded-2xl border border-black/10 bg-[#f8f7f4] px-4 py-3 text-sm outline-none focus:border-[#18201d]/30"
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">
              Delivery time
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-2xl border-2 border-[#18201d] bg-[#f8f7f4] p-5 text-left"
              >
                <p className="font-medium">
                  ASAP
                </p>

                <p className="mt-1 text-xs text-[#68716d]">
                  As soon as possible
                </p>
              </button>

              <button
                type="button"
                className="rounded-2xl border border-black/10 p-5 text-left hover:bg-[#f8f7f4]"
              >
                <p className="font-medium">
                  Schedule
                </p>

                <p className="mt-1 text-xs text-[#68716d]">
                  Choose a later time
                </p>
              </button>
            </div>
          </div>

          {/* Payment */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CreditCard size={20} />

              <h2 className="text-lg font-semibold">
                Payment method
              </h2>
            </div>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                className="rounded-2xl border-2 border-[#18201d] bg-[#f8f7f4] p-5 text-left"
              >
                <p className="font-medium">
                  Cash on Delivery
                </p>

                <p className="mt-1 text-xs text-[#68716d]">
                  Pay when your order arrives
                </p>
              </button>

              <button
                type="button"
                className="rounded-2xl border border-black/10 p-5 text-left hover:bg-[#f8f7f4]"
              >
                <p className="font-medium">
                  Online Payment
                </p>

                <p className="mt-1 text-xs text-[#68716d]">
                  Payment gateway will be connected later
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-3xl border border-black/5 bg-white p-6 sm:p-7 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold">
            Your order
          </h2>

          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 text-sm"
              >
                <div>
                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-[#68716d]">
                    {item.quantity} × ₱{item.price.toLocaleString()}
                  </p>
                </div>

                <p className="font-medium">
                  ₱{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-black/5" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-[#68716d]">
              <span>Subtotal</span>
              <span>₱{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-[#68716d]">
              <span>Delivery</span>
              <span>₱{deliveryFee}</span>
            </div>
          </div>

          <div className="my-6 border-t border-black/5" />

          <div className="flex items-center justify-between">
            <span className="font-medium">
              Total
            </span>

            <span className="text-xl font-semibold">
              ₱{total.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            className="mt-7 flex h-14 w-full items-center justify-center rounded-full bg-[#18201d] px-6 text-sm font-medium text-white transition hover:bg-[#2a3530]"
          >
            Place Order
          </button>
        </aside>
      </div>
    </section>
  );
}