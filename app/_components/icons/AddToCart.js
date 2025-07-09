"use client";
import { useCartStore } from "@/app/_store/cartStore";

export default function AddToCart({
  product,
  color = "black",
  showCountBadge = false,
}) {
  const isInCart = useCartStore((state) => state.isInCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const items = useCartStore((state) => state.items);

  const filled = product && isInCart(product.id);
  const classes = `text-l text-${color}`;

  return (
    <div className="relative">
      <svg
        onClick={() => {
          if (!product) return;
          if (filled) {
            removeFromCart(product.id);
          } else {
            addToCart(product);
          }
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? "black" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`size-6 hover:scale-110 transition-all ${classes}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5
          m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25
          a1.125 1.125 0 0 1-1.12-1.243l1.264-12
          A1.125 1.125 0 0 1 5.513 7.5h12.974
          c.576 0 1.059.435 1.119 1.007ZM8.625 10.5
          a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0
          a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>

      {showCountBadge && items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {items.length}
        </span>
      )}
    </div>
  );
}
