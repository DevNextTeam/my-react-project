import { Search, ShoppingBag, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

export default function CustomerNavbar() {
    const items = useCartStore((state) => state.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18201d] text-white">
            S
          </div>

          <span className="text-xl font-semibold tracking-[0.18em]">
            SUSHIYA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-[#18201d] transition hover:opacity-60"
          >
            Home
          </a>

          <a
            href="/menu"
            className="text-sm font-medium text-[#59635f] transition hover:text-[#18201d]"
          >
            Menu
          </a>

          <a
            href="/promotions"
            className="text-sm font-medium text-[#59635f] transition hover:text-[#18201d]"
          >
            Promotions
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-[#59635f] transition hover:text-[#18201d]"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="rounded-full p-2.5 transition hover:bg-black/5"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <Link
          to="/cart"
          aria-label={`Shopping cart with ${cartCount} items`}
          className="relative rounded-full p-2.5 transition hover:bg-black/5"
        >
          <ShoppingBag size={20} strokeWidth={1.8} />

          {cartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#18201d] px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </Link>

          <button
            aria-label="Account"
            className="rounded-full p-2.5 transition hover:bg-black/5"
          >
            <UserRound size={20} strokeWidth={1.8} />
          </button>
        </div>

      </div>
    </header>
  );
}